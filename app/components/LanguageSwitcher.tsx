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
  
  //点击中文
//→ 浏览器保存 zh
//→ 当前页面切换成 zh
function handleLanguageChange(nextLanguage:Language){
  //立刻保存到浏览器。
  localStorage.setItem("language",nextLanguage);
  setLanguage(nextLanguage);
}

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
        onClick={() => handleLanguageChange("zh")}
        style={{
          fontWeight: language === "zh" ? "bold" : "normal",
        }}
      >
        中文
      </button>

      <button
        onClick={() => handleLanguageChange("en")}
        style={{
          fontWeight: language === "en" ? "bold" : "normal",
        }}
      >
        English
      </button>

      <button
        onClick={() => handleLanguageChange("ko")}
        style={{
          fontWeight: language === "ko" ? "bold" : "normal",
        }}
      >
        한국어
      </button>

    <button
  onClick={() => handleLanguageChange("vi")}
  style={{
    fontWeight: language === "vi" ? "bold" : "normal",
  }}
>
  Tiếng Việt
</button>
    </div>
  );
}