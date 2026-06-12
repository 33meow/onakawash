"use client";

// 这里只 import 类型，不 import 真正的数据
// Language 来自 messages.ts
import type { Language } from "../messages";

// Props = 父组件传给这个组件的东西
// language：当前语言
// setLanguage：修改语言的工具
type LanguageSwitcherProps = {
  language: Language;
  setLanguage: (language: Language) => void;
};

// 这个组件只负责显示三个语言按钮
// 它不负责页面内容
export default function LanguageSwitcher({
  language,
  setLanguage,
}: LanguageSwitcherProps) {
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "24px",
        zIndex: 50,
        display: "flex",
        gap: "8px",
      }}
    >
      <button
        onClick={() => setLanguage("zh")}
        style={{
          fontWeight: language === "zh" ? "bold" : "normal",
        }}
      >
        中文
      </button>

      <button
        onClick={() => setLanguage("en")}
        style={{
          fontWeight: language === "en" ? "bold" : "normal",
        }}
      >
        English
      </button>

      <button
        onClick={() => setLanguage("ko")}
        style={{
          fontWeight: language === "ko" ? "bold" : "normal",
        }}
      >
        한국어
      </button>
    </div>
  );
}