"use client";

import { useEffect, useState } from "react";
import styles from "./KanaMasteryPanel.module.css";

type KanaMastery = {
  kanaItemId: string;
  kana: string;
  evidenceCount: number;
  status: "insufficient_evidence" | "normal" | "weak";
};

// 加载中、失败、成功，是三种不同的页面状态。
type LoadState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "success"; items: KanaMastery[] };

// TypeScript 类型不能代替对接口实际数据的检查。
function isKanaMastery(value: unknown): value is KanaMastery {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  return (
    "kanaItemId" in value &&
    typeof value.kanaItemId === "string" &&
    "kana" in value &&
    typeof value.kana === "string" &&
    "evidenceCount" in value &&
    typeof value.evidenceCount === "number" &&
    Number.isInteger(value.evidenceCount) &&
    value.evidenceCount >= 0 &&
    "status" in value &&
    (value.status === "insufficient_evidence" ||
      value.status === "normal" ||
      value.status === "weak")
  );
}

export default function KanaMasteryPanel() {
  const [state, setState] = useState<LoadState>({ status: "loading" });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let disposed = false;

    // 请求超过 10 秒就结束等待，显示可重试的错误状态。
    const timeout = window.setTimeout(() => controller.abort(), 10000);

    async function loadMastery() {
      try {
        const response = await fetch(
          "http://localhost:8080/kana-mastery",
          {
            signal: controller.signal,
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to load kana mastery");
        }

        const data: unknown = await response.json();

        if (!Array.isArray(data) || !data.every(isKanaMastery)) {
          throw new Error("Unexpected kana mastery data");
        }

        if (!disposed) {
          setState({ status: "success", items: data });
        }
      } catch {
        if (!disposed) {
          setState({ status: "error" });
        }
      } finally {
        window.clearTimeout(timeout);
      }
    }

    void loadMastery();

    // 离开组件时取消请求，避免旧请求继续更新页面。
    return () => {
      disposed = true;
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [attempt]);

  function retry() {
    setState({ status: "loading" });
    setAttempt((previous) => previous + 1);
  }

  // 只按后端给出的状态分类，不重新判断掌握度。
  const items = state.status === "success" ? state.items : [];
  const weakItems = items.filter((item) => item.status === "weak");
  const normalCount = items.filter((item) => item.status === "normal").length;
  const insufficientCount = items.filter(
    (item) => item.status === "insufficient_evidence"
  ).length;

  return (
    <section
      className={styles.panel}
      aria-labelledby="kana-mastery-heading"
      aria-busy={state.status === "loading"}
      lang="zh-CN"
    >
      <header>
        <p className={styles.eyebrow}>了解自己的学习进展</p>
        <h2 id="kana-mastery-heading" className={styles.title}>
          假名掌握情况
        </h2>
        <p className={styles.description}>
          根据近期假名练习中的答题表现，看看哪些假名值得多练一练。
        </p>
      </header>

      {state.status === "loading" && (
        <p className={styles.notice} role="status">
          正在读取你的学习情况……
        </p>
      )}

      {state.status === "error" && (
        <div className={styles.notice} role="alert">
          <p>暂时无法读取掌握情况，请稍后重试。</p>
          <button className={styles.button} type="button" onClick={retry}>
            重新加载
          </button>
        </div>
      )}

      {state.status === "success" && (
        <>
          {items.length === 0 ? (
            <p className={styles.notice}>
              暂时没有可展示的假名数据。这不代表你已经掌握了所有假名。
            </p>
          ) : (
            <>
              <dl className={styles.summary}>
                <div className={styles.stat}>
                  <dt>需要重点练习</dt>
                  <dd>{weakItems.length}<span> 个</span></dd>
                </div>
                <div className={styles.stat}>
                  <dt>暂未识别为薄弱项</dt>
                  <dd>{normalCount}<span> 个</span></dd>
                </div>
                <div className={styles.stat}>
                  <dt>练习记录不足</dt>
                  <dd>{insufficientCount}<span> 个</span></dd>
                </div>
              </dl>

              {weakItems.length > 0 ? (
                <div>
                  <h3 className={styles.listTitle}>这些假名可以多练一练</h3>
                  <ul className={styles.kanaList}>
                    {weakItems.map((item) => (
                      <li className={styles.kanaCard} key={item.kanaItemId}>
                        <strong lang="ja">{item.kana}</strong>
                        <span className={styles.badge}>需要重点练习</span>
                        <span className={styles.evidence}>
                          参考了 {item.evidenceCount} 条近期答题记录
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className={styles.notice}>
                  {insufficientCount === items.length
                    ? "还在了解你的学习情况。完成更多假名练习后，这里会逐步形成反馈。"
                    : "在目前记录足够的假名中，暂时没有识别出需要重点练习的项目。"}
                </p>
              )}

              {insufficientCount > 0 && insufficientCount < items.length && (
                <p className={styles.description}>
                  还有 {insufficientCount} 个假名的记录不足，暂时无法判断。
                  不用着急，继续练习就会积累更多线索。
                </p>
              )}

              <p className={styles.footnote}>
                这里展示的是假名掌握情况，不代表已有相应的词汇复习题。
                暂未识别为薄弱项，也不等于已经完全掌握。
              </p>
            </>
          )}
        </>
      )}
    </section>
  );
}