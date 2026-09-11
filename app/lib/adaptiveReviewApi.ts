const API_BASE = "http://localhost:8080";

// 后端已经保存的答题结果。
export type SavedReviewAnswer = {
  selectedRomaji: string;
  correctRomaji: string;
  isCorrect: boolean;
};

// 一道复习题。未作答时没有 answer。
export type ReviewQuestion = {
  questionIndex: number;
  tangoItemId: string;
  displayText: string;
  options: string[];
  answer?: SavedReviewAnswer;
};

// 一整轮复习的详情。
export type ReviewSession = {
  sessionKey: string;
  actualQuestionCount: number;
  questions: ReviewQuestion[];
};

// 前端提交的答案：不包含正确答案或对错判断。
export type ReviewAnswerRequest = {
  sessionKey: string;
  questionIndex: number;
  tangoItemId: string;
  selectedRomaji: string;
  answeredAt: string;
  responseTimeMs: number;
};

type CreateSessionResult =
  | { status: "created"; sessionKey: string }
  | { status: "unavailable" };

// 保留 HTTP 状态码，方便页面区分不存在、重复提交等情况。
// status 为 0 表示没有取得有效的 HTTP 响应。
export class ReviewApiError extends Error {
  constructor(
    message: string,
    public readonly status: number
  ) {
    super(message);
    this.name = "ReviewApiError";
  }
}

// 以下小函数用于检查后端实际返回的数据。
function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isText(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isPositiveInteger(value: unknown): value is number {
  return (
    typeof value === "number" &&
    Number.isSafeInteger(value) &&
    value > 0
  );
}

function isSavedAnswer(value: unknown): value is SavedReviewAnswer {
  return (
    isObject(value) &&
    isText(value.selectedRomaji) &&
    isText(value.correctRomaji) &&
    typeof value.isCorrect === "boolean"
  );
}

function isQuestion(value: unknown): value is ReviewQuestion {
  return (
    isObject(value) &&
    isPositiveInteger(value.questionIndex) &&
    isText(value.tangoItemId) &&
    isText(value.displayText) &&
    Array.isArray(value.options) &&
    value.options.length === 4 &&
    value.options.every(isText) &&
    new Set(value.options).size === 4 &&
    (value.answer === undefined || isSavedAnswer(value.answer))
  );
}

function isSession(value: unknown): value is ReviewSession {
  if (
    !isObject(value) ||
    !isText(value.sessionKey) ||
    !isPositiveInteger(value.actualQuestionCount) ||
    !Array.isArray(value.questions) ||
    !value.questions.every(isQuestion)
  ) {
    return false;
  }

  return (
    value.questions.length === value.actualQuestionCount &&
    value.questions.every(
      (question, index) => question.questionIndex === index + 1
    )
  );
}

// 统一发送请求：最多等待 10 秒，不自动重复提交。
// POST 超时并不代表后端一定没有保存，后续由页面查询确认。
async function requestJson(
  path: string,
  init: RequestInit = {}
): Promise<unknown> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  // 允许页面离开时取消读取请求。
  const cancel = () => controller.abort();
  init.signal?.addEventListener("abort", cancel, { once: true });

  if (init.signal?.aborted) {
    controller.abort();
  }

  try {
    const response = await fetch(`${API_BASE}${path}`, {
      ...init,
      cache: "no-store",
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new ReviewApiError(
        "请求未成功，请稍后重试。",
        response.status
      );
    }

    try {
      return await response.json();
    } catch {
      throw new ReviewApiError(
        "服务器返回的数据无法读取。",
        response.status
      );
    }
  } catch (error) {
    if (error instanceof ReviewApiError) {
      throw error;
    }

    throw new ReviewApiError(
      "暂时无法连接服务器，或请求等待超时。",
      0
    );
  } finally {
    clearTimeout(timeout);
    init.signal?.removeEventListener("abort", cancel);
  }
}

// 动作一：用户点击“开始复习”，让后端创建一轮练习。
export async function createReviewSession(): Promise<CreateSessionResult> {
  const data = await requestJson("/adaptive-review/sessions", {
    method: "POST",
  });

  if (
    isObject(data) &&
    data.sessionStatus === "no_available_tango_content"
  ) {
    return { status: "unavailable" };
  }

  if (
    !isObject(data) ||
    data.sessionStatus !== "created" ||
    !isText(data.sessionKey) ||
    !isPositiveInteger(data.actualQuestionCount)
  ) {
    throw new ReviewApiError("创建复习返回的数据不完整。", 200);
  }

  return {
    status: "created",
    sessionKey: data.sessionKey,
  };
}

// 动作二：用练习编号，读取这一轮的题目和已保存答案。
export async function getReviewSession(
  sessionKey: string,
  signal?: AbortSignal
): Promise<ReviewSession> {
  const data = await requestJson(
    `/adaptive-review/sessions/${encodeURIComponent(sessionKey)}`,
    { signal }
  );

  if (!isSession(data) || data.sessionKey !== sessionKey) {
    throw new ReviewApiError("复习题目数据不完整。", 200);
  }

  return data;
}

// 动作三：提交用户的选择，取得后端保存的判题结果。
export async function submitReviewAnswer(
  answer: ReviewAnswerRequest
): Promise<SavedReviewAnswer> {
  const data = await requestJson("/adaptive-review/answers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(answer),
  });

    if (
    !isObject(data) ||
    data.sessionKey !== answer.sessionKey ||
    data.questionIndex !== answer.questionIndex ||
    data.tangoItemId !== answer.tangoItemId ||
    !isSavedAnswer(data) ||
    data.selectedRomaji !== answer.selectedRomaji
  ) {
    throw new ReviewApiError("保存答案返回的数据不完整。", 201);
  }
  return {
    selectedRomaji: data.selectedRomaji,
    correctRomaji: data.correctRomaji,
    isCorrect: data.isCorrect,
  };
}