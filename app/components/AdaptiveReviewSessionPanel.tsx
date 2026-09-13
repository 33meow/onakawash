"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  getReviewSession,
  submitReviewAnswer,
  ReviewApiError,
  type ReviewAnswerRequest,
  type ReviewQuestion,
  type ReviewSession,
  type SavedReviewAnswer,
} from "../lib/adaptiveReviewApi";
import styles from "./AdaptiveReviewSessionPanel.module.css";

type LoadState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; session: ReviewSession };

// 后端目前接收不带时区的本地日期时间。
function localDateTime() {
  const now = new Date();
  const pad = (value: number, length = 2) =>
    String(value).padStart(length, "0");

  return (
    `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}` +
    `T${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}` +
    `.${pad(now.getMilliseconds(), 3)}`
  );
}

export default function AdaptiveReviewSessionPanel({
  sessionKey,
}: {
  sessionKey: string;
}) {
  const [state, setState] = useState<LoadState>({ status: "loading" });
  const [attempt, setAttempt] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let disposed = false;

    async function load() {
      try {
        const session = await getReviewSession(
          sessionKey,
          controller.signal
        );

        if (disposed) return;

        // 刷新后，从第一道尚未保存答案的题继续。
        const firstUnanswered = session.questions.findIndex(
          (question) => !question.answer
        );

        setCurrentIndex(
          firstUnanswered === -1
            ? session.questions.length
            : firstUnanswered
        );
        setState({ status: "success", session });
      } catch (error) {
        if (disposed) return;

        setState({
          status: "error",
          message:
            error instanceof ReviewApiError && error.status === 404
              ? "找不到这一轮复习。记录可能已被清除，请返回学习记录页。"
              : "暂时无法读取复习题目，请确认后端正在运行后重试。",
        });
      }
    }

    void load();

    return () => {
      disposed = true;
      controller.abort();
    };
  }, [sessionKey, attempt]);

  function retryLoad() {
    setState({ status: "loading" });
    setAttempt((previous) => previous + 1);
  }

  function recordSavedAnswer(
    questionIndex: number,
    answer: SavedReviewAnswer
  ) {
    setState((previous) => {
      if (previous.status !== "success") return previous;

      return {
        status: "success",
        session: {
          ...previous.session,
          questions: previous.session.questions.map((question) =>
            question.questionIndex === questionIndex
              ? { ...question, answer }
              : question
          ),
        },
      };
    });
  }

  function nextQuestion() {
    if (state.status !== "success") return;
    if (!state.session.questions[currentIndex]?.answer) return;

    const nextIndex = state.session.questions.findIndex(
      (question, index) => index > currentIndex && !question.answer
    );

    setCurrentIndex(
      nextIndex === -1 ? state.session.questions.length : nextIndex
    );
  }

  return (
    <main className={styles.page} lang="zh-CN">
      <div className={styles.container}>
        <Link className={styles.backLink} href="/learning-records">
          ← 返回学习记录
        </Link>

        <h1 className={styles.title}>自适应复习</h1>
        <p className={styles.description}>
          通过词汇读音选择题，练习与你的薄弱假名相关的内容。
        </p>

        {state.status === "loading" && (
          <div className={styles.card} role="status">
            正在读取本轮题目……
          </div>
        )}

        {state.status === "error" && (
          <div className={styles.card} role="alert">
            <p>{state.message}</p>
            <button
              className={styles.button}
              type="button"
              onClick={retryLoad}
            >
              重新加载
            </button>
          </div>
        )}

        {state.status === "success" &&
          (currentIndex >= state.session.questions.length ? (
            <section className={styles.card}>
              <h2>本轮复习已完成</h2>
              <CoverageResults session={state.session} />
              <p>
                已保存 {state.session.questions.length} 道题的答题记录。
              </p>
              <p>
                答对{" "}
                {
                  state.session.questions.filter(
                    (question) => question.answer?.isCorrect
                  ).length
                }{" "}
                题。
              </p>
              <Link className={styles.backLink} href="/learning-records">
                返回学习记录
              </Link>
            </section>
          ) : (
            <QuestionCard
              key={state.session.questions[currentIndex].questionIndex}
              sessionKey={sessionKey}
              question={state.session.questions[currentIndex]}
              total={state.session.actualQuestionCount}
              onSaved={recordSavedAnswer}
              onNext={nextQuestion}
            />
          ))}
      </div>
    </main>
  );
}

// 单独管理当前题的选择、计时和保存状态。
function QuestionCard({
  sessionKey,
  question,
  total,
  onSaved,
  onNext,
}: {
  sessionKey: string;
  question: ReviewQuestion;
  total: number;
  onSaved: (questionIndex: number, answer: SavedReviewAnswer) => void;
  onNext: () => void;
}) {
  const startedAt = useRef<number | null>(null);
  const busy = useRef(false);
  const mounted = useRef(false);
  const pendingAnswer = useRef<ReviewAnswerRequest | null>(null);

  const [selected, setSelected] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    mounted.current = true;
    startedAt.current = performance.now();

    return () => {
      mounted.current = false;
    };
  }, []);

  // 查询这一题是否实际上已经保存成功。
  async function readSavedAnswer() {
    const session = await getReviewSession(sessionKey);
    const savedQuestion = session.questions.find(
      (item) => item.questionIndex === question.questionIndex
    );

    if (
      !savedQuestion ||
      savedQuestion.tangoItemId !== question.tangoItemId
    ) {
      throw new Error("Question no longer matches");
    }

    return savedQuestion.answer;
  }

  async function saveAnswer(
    payload: ReviewAnswerRequest,
    checkBeforeSubmit: boolean
  ) {
    if (busy.current || question.answer) return;

    busy.current = true;
    setSaving(true);
    setError(null);

    try {
      // 重试先查后端：可能上次已经保存，只是响应没有收到。
      let answer = checkBeforeSubmit
        ? await readSavedAnswer()
        : undefined;

      if (!answer) {
        try {
          answer = await submitReviewAnswer(payload);
        } catch {
          // POST 失败或响应丢失时，再读取一次已保存结果。
          answer = await readSavedAnswer();

          if (!answer) {
            throw new Error("Answer has not been confirmed");
          }
        }
      }

      if (mounted.current) {
        onSaved(question.questionIndex, answer);
      }
    } catch {
      if (mounted.current) {
        setError(
          "暂时无法确认答案是否保存。你的选择已保留，请点击“重试保存”。"
        );
      }
    } finally {
      busy.current = false;

      if (mounted.current) {
        setSaving(false);
      }
    }
  }

function choose(option: string, clickedAt: number) {
    if (
      busy.current ||
      pendingAnswer.current ||
      question.answer ||
      startedAt.current === null
    ) {
      return;
    }

    const payload: ReviewAnswerRequest = {
      sessionKey,
      questionIndex: question.questionIndex,
      tangoItemId: question.tangoItemId,
      selectedRomaji: option,
      answeredAt: localDateTime(),
      responseTimeMs: Math.min(
        2147483647,
        Math.max(0, Math.round(clickedAt - startedAt.current))
      ),
    };

    // 保留第一次选择和用时，重试时不重新计时。
    pendingAnswer.current = payload;
    setSelected(option);
    void saveAnswer(payload, false);
  }

  function retrySave() {
    if (pendingAnswer.current) {
      void saveAnswer(pendingAnswer.current, true);
    }
  }

  const locked = saving || selected !== null || !!question.answer;
  const selectedOption = question.answer?.selectedRomaji ?? selected;

  return (
    <section className={styles.card} aria-busy={saving}>
      <p className={styles.progress}>
        第 {question.questionIndex} / {total} 题
      </p>

      <h2 className={styles.prompt}>请选择这个词的读音</h2>
      <p className={styles.word} lang="ja">
        {question.displayText}
      </p>

      <div className={styles.options}>
        {question.options.map((option) => (
          <button
            key={option}
            type="button"
            className={styles.option}
            aria-pressed={selectedOption === option}
            disabled={locked}
            onClick={(event) => choose(option, event.timeStamp)}
          >
            {option}
          </button>
        ))}
      </div>

      {saving && <p role="status">正在保存答案……</p>}

      {error && !question.answer && (
        <div className={styles.feedback} role="alert">
          <p>{error}</p>
          <button
            className={styles.button}
            type="button"
            disabled={saving}
            onClick={retrySave}
          >
            重试保存
          </button>
        </div>
      )}

      {question.answer && (
        <div className={styles.feedback} role="status">
          <p>
            {question.answer.isCorrect ? "答对了！" : "这次答错了。"}
            正确读音是 <strong>{question.answer.correctRomaji}</strong>。
          </p>
          <p>答案已保存。</p>
          <button
            className={styles.button}
            type="button"
            onClick={onNext}
          >
            {question.questionIndex === total ? "查看完成结果" : "下一题"}
          </button>
        </div>
      )}

      <p className={styles.note}>
        刷新后会从尚未保存答案的题目继续；未保存的选择和用时不会保留。
      </p>
    </section>
  );
}
function CoverageResults({ session }: { session: ReviewSession }) {
  if (!session.coverageAvailable) {
    return (
      <section
        className={styles.coverage}
        aria-labelledby="coverage-heading"
      >
        <h3 id="coverage-heading">本轮复习覆盖情况</h3>
        <p>
          本轮覆盖信息不可用。这是一条未保存覆盖信息的旧练习记录，
          不影响已经保存的答题结果。
        </p>
      </section>
    );
  }

  const groups = [
    {
      status: "covered",
      title: "本轮练到的薄弱假名",
      description: "本轮完成的词汇题包含这些薄弱假名。",
      empty: "本轮没有覆盖到薄弱假名。",
    },
    {
      status: "deferred",
      title: "有内容，但本轮未安排",
      description:
        "这些假名有相关词汇，但受本轮最多 10 题限制，没有安排进来。",
      empty: "没有因题数限制而未安排的薄弱假名。",
    },
    {
      status: "no_content",
      title: "创建本轮时暂无相关内容",
      description: "创建这轮复习时，词库尚未提供对应的词汇练习。",
      empty: "创建本轮时，所有薄弱假名都有相关词汇内容。",
    },
  ] as const;

  return (
    <section
      className={styles.coverage}
      aria-labelledby="coverage-heading"
    >
      <h3 id="coverage-heading">本轮复习覆盖情况</h3>
      <p className={styles.note}>
        以下是本轮创建时确定、并随练习保存的结果，
        与开始前预览的可用内容范围可能不同。
      </p>

      {groups.map((group) => {
        const items = session.coverage.filter(
          (item) => item.status === group.status
        );

        return (
          <div className={styles.coverageGroup} key={group.status}>
            <h4>
              {group.title}
              <span className={styles.coverageCount}>
                {items.length} 个
              </span>
            </h4>

            {items.length > 0 ? (
              <>
                <p>{group.description}</p>
                <ul className={styles.coverageList}>
                  {items.map((item) => (
                    <li key={item.kanaItemId}>
                      <span lang="ja">{item.kana}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p>{group.empty}</p>
            )}
          </div>
        );
      })}

      <p className={styles.coverageNotice}>
        “练到”不等于“已经掌握”。无论答对还是答错，
        这里记录的都是本轮练习范围，不会根据词汇答案修改假名薄弱分数。
        本轮未安排的内容，也不保证下一轮一定出现。
      </p>
    </section>
  );
}


