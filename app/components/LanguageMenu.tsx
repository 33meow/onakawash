"use client";

import Image from "next/image";
import { messages, type Language } from "../messages";

type LanguageMenuProps = {
    language:Language;
     setLanguage: (language: Language) => void;
      isOpen: boolean;
  onToggle: () => void;
};

export default function LanguageMenu({
  language,
  setLanguage,
    isOpen,
  onToggle,
}: LanguageMenuProps) {
   
      const t = messages[language];
function toggleMenu() {
    
}
function handleLanguageChange(nextLanguage: Language) {
  localStorage.setItem("language", nextLanguage);
  setLanguage(nextLanguage);
 onToggle();
}
    return(
        <div
         style={{ position: "relative",}}>
             <button
        type="button"
        className="side-nav-item"
        aria-expanded={isOpen}
       onClick={onToggle}
      >
        <Image
          src="/images/buttons/language.png"
          alt=""
          width={72}
          height={72}
          className="side-nav-image"
        />

        <span  style={{
    flex: "1",
    textAlign: "left",
    lineHeight: "1.4",
  }}>{t.nav.language}</span>
      </button>
      {isOpen && (
  <section
    aria-label={t.nav.language}
    style={{
      position: "absolute",
      bottom: "0",
      maxHeight: "calc(100vh - 32px)",
overflowY: "auto",
      left: "calc(100% + 12px)",
      zIndex: "100",
      width: "260px",
      padding: "16px",
      boxSizing: "border-box",
      backgroundColor: "#fffaf5",
      border: "1px solid #ead8d0",
      borderRadius: "8px",
      boxShadow: "0 12px 28px rgba(74, 43, 34, 0.18)",
    }}
  >
    
    <button
  type="button"
  aria-pressed={language === "zh"}
  onClick={() => handleLanguageChange("zh")}
  style={{
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "12px",
    padding: "8px",
    border: "none",
    borderRadius: "8px",
    backgroundColor:
      language === "zh" ? "#f4e4df" : "transparent",
    color: "#4a2b22",
    font: "inherit",
    fontWeight: "700",
    cursor: "pointer",
    textAlign: "left",
  }}
>
  <Image
    src="/images/buttons/flag-zh.png"
    alt=""
    width={50}
    height={40}
  />

  <span>中文</span>
</button>

 <button
  type="button"
  aria-pressed={language === "en"}
 onClick={() => handleLanguageChange("en")}
  style={{
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "12px",
    padding: "8px",
    border: "none",
    borderRadius: "8px",
    backgroundColor:
      language === "en" ? "#f4e4df" : "transparent",
    color: "#4a2b22",
    font: "inherit",
    fontWeight: "700",
    cursor: "pointer",
    textAlign: "left",
  }}
>
  <Image
   src="/images/buttons/flag-en.png"
    alt=""
    width={50}
    height={40}
  />

 <span>English</span>
</button>

 <button
  type="button"
  aria-pressed={language === "ko"}
 onClick={() => handleLanguageChange("ko")}
  style={{
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "12px",
    padding: "8px",
    border: "none",
    borderRadius: "8px",
    backgroundColor:
      language === "ko" ? "#f4e4df" : "transparent",
    color: "#4a2b22",
    font: "inherit",
    fontWeight: "700",
    cursor: "pointer",
    textAlign: "left",
  }}
>
  <Image
   src="/images/buttons/flag-ko.png"
    alt=""
    width={50}
    height={40}
  />

 <span>한국어</span>
</button>

 <button
  type="button"
  aria-pressed={language === "vi"}
 onClick={() => handleLanguageChange("vi")}
  style={{
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "12px",
    padding: "8px",
    border: "none",
    borderRadius: "8px",
    backgroundColor:
      language === "vi" ? "#f4e4df" : "transparent",
    color: "#4a2b22",
    font: "inherit",
    fontWeight: "700",
    cursor: "pointer",
    textAlign: "left",
  }}
>
  <Image
   src="/images/buttons/flag-vi.png"
    alt=""
    width={50}
    height={40}
  />

<span>Tiếng Việt</span>
</button>
  </section>
)}
         </div>
    );
}