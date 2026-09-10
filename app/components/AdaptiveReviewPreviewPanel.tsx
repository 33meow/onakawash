"use client";

import { useEffect, useState } from "react";
import styles from "./AdaptiveReviewPreviewPanel.module.css";

type PreviewKana = {
  kanaItemId: string;
  kana: string;
  availableTangoItemCount: number;
};

type PreviewData = {
  previewStatus: "ready" | "no_weak_kana" | "no_available_tango_content";
  weakKanaCount: number;
  distinctAvailableTangoItemCount: number;
  theoreticalQuestionCount: number;
  weakKanaWithAvailableContent: PreviewKana[];
  weakKanaWithoutAvailableContent: PreviewKana[];
};

type LoadState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "success"; data: PreviewData };

// 检查接口实际返回的数据，避免把异常数据展示成正常的 0。
function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isCount(value: unknown): value is number {
  return typeof value === "number" && Number.isSafeInteger(value) && value >= 0;
}

function isPreviewKana(value: unknown): value is PreviewKana {
  return (
    isObject(value) &&
    typeof value.kanaItemId === "string" &&
    typeof value.kana === "string" &&
    isCount(value.availableTangoItemCount)
  );
}

function isPreviewData(value: unknown): value is PreviewData {
  return (
    isObject(value) &&
    (value.previewStatus === "ready" ||
      value.previewStatus === "no_weak_kana" ||
      value.previewStatus === "no_available_tango_content") &&
    isCount(value.weakKanaCount) &&
    isCount(value.distinctAvailableTangoItemCount) &&
    isCount(value.theoreticalQuestionCount) &&
    Array.isArray(value.weakKanaWithAvailableContent) &&
    value.weakKanaWithAvailableContent.every(isPreviewKana) &&
    Array.isArray(value.weakKanaWithoutAvailableContent) &&
    value.weakKanaWithoutAvailableContent.every(isPreviewKana)
  );
}

export default function AdaptiveReviewPreviewPanel() {
  const [state, setState] = useState<LoadState>({ status: "loading" });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    let disposed = false;

    // 最多等待 10 秒，超时后允许用户重试。
    const timeout = window.setTimeout(() => controller.abort(), 10000);

    async function loadPreview() {
      try {
        const response = await fetch(
          "http://localhost:8080/adaptive-review/preview",
          {
            signal: controller.signal,
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to load adaptive review preview");
        }

        const data: unknown = await response.json();

        if (!isPreviewData(data)) {
          throw new Error("Unexpected adaptive review preview data");
        }

        if (!disposed) {
          setState({ status: "success", data });
        }
      } catch {
        if (!disposed) {
          setState({ status: "error" });
        }
      } finally {
        window.clearTimeout(timeout);
      }
    }

    void loadPreview();

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

  return (
    <section
      className={styles.panel}
      aria-labelledby="adaptive-review-preview-heading"
      aria-busy={state.status === "loading"}
      lang="zh-CN"
    >
      <header>
        <p className={styles.eyebrow}>看看目前有什么可以练</p>
        <h2 id="adaptive-review-preview-heading" className={styles.title}>
          自适应复习预览
        </h2>
        <p className={styles.description}>
          根据你的薄弱假名，查看目前有哪些相关词汇练习内容。
        </p>
      </header>

      {state.status === "loading" && (
        <p className={styles.notice} role="status">
          正在查找相关练习内容……
        </p>
      )}

      {state.status === "error" && (
        <div className={styles.notice} role="alert">
          <p>暂时无法读取复习预览，请稍后重试。</p>
          <button className={styles.button} type="button" onClick={retry}>
            重新加载
          </button>
        </div>
      )}

      {state.status === "success" && (
        <>
          {state.data.previewStatus === "no_weak_kana" ? (
            <p className={styles.notice}>
              目前没有识别出薄弱假名，暂时没有针对性的复习预览。
              如果练习记录还不足，可以先继续假名练习。
            </p>
          ) : (
            <>
              <dl className={styles.summary}>
                <div className={styles.stat}>
                  <dt>当前薄弱假名</dt>
                  <dd>{state.data.weakKanaCount}<span> 个</span></dd>
                </div>
                <div className={styles.stat}>
                  <dt>相关词汇总数（不重复）</dt>
                  <dd>
                    {state.data.distinctAvailableTangoItemCount}
                    <span> 个</span>
                  </dd>
                </div>
                <div className={styles.stat}>
                  <dt>预计本轮可生成</dt>
                  <dd>
                    {state.data.theoreticalQuestionCount}
                    <span> 题</span>
                  </dd>
                </div>
              </dl>

              {state.data.previewStatus === "no_available_tango_content" && (
                <p className={styles.notice}>
                  目前系统还没有相关练习内容。
                  已识别出薄弱假名，但词库暂时没有对应的词汇练习。
                </p>
              )}

              {state.data.weakKanaWithAvailableContent.length > 0 && (
                <div className={styles.group}>
                  <h3 className={styles.listTitle}>有相关词汇可以练</h3>
                  <ul className={styles.kanaList}>
                    {state.data.weakKanaWithAvailableContent.map((item) => (
                      <li className={styles.kanaCard} key={item.kanaItemId}>
                        <strong lang="ja">{item.kana}</strong>
                        <span>
                          有 {item.availableTangoItemCount} 个相关词汇
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {state.data.weakKanaWithoutAvailableContent.length > 0 && (
                <div className={styles.group}>
                  <h3 className={styles.listTitle}>暂时没有相关词汇</h3>
                  <ul className={styles.kanaList}>
                    {state.data.weakKanaWithoutAvailableContent.map((item) => (
                      <li className={styles.kanaCard} key={item.kanaItemId}>
                        <strong lang="ja">{item.kana}</strong>
                        <span>词库暂未提供对应内容</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className={styles.description}>
                同一个词汇可能包含多个薄弱假名，词汇总数会去除重复，
                因此不一定等于各假名对应数量的相加。
              </p>
            </>
          )}

          <p className={styles.footnote}>
            这里展示的是当前内容可用情况，尚未创建复习。
            预计题数不代表本轮一定覆盖全部薄弱假名，
            实际题目和覆盖范围以创建复习后的结果为准。
          </p>
        </>
      )}
    </section>
  );
}