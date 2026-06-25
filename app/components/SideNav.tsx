"use client";

import HomeButton from "./HomeButton";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PracticeMenu from "./PracticeMenu";
import LanguageMenu from "./LanguageMenu";
import {messages, type Language} from "../messages";

type SideNavProps = { 
   currentPage : string;
   language:Language;
    setLanguage: (language: Language) => void;
};

export default function SideNav(props:SideNavProps){
   const [language, setLanguage] = useState<Language>("zh");
   useEffect(()=>{
    const savedLanguage = localStorage.getItem("language");

    if(
        savedLanguage === "zh" ||
    savedLanguage === "en" ||
    savedLanguage === "ko" ||
    savedLanguage === "vi"
    )
 setLanguage(savedLanguage);
})
    const t = messages[props.language];

    function isActive(page: string){
        return props.currentPage === page;
    }
    return(
        
        <nav
            aria-label="侧边导航"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                gap: "16px",
                padding: "16px 12px",
                borderRight: "1px solid #ead8d0",
            }}>


             {/* 入口1：返回主页 */}
            <HomeButton label={t.nav.home} />

            {/* 入口 2：intro*/}
 <Link
  href="/intro"
  className="side-nav-item"
  style={{
    backgroundColor:isActive("intro")?"#f3dfb3":"transparent",
      borderRadius: "16px",
  }}
  
>
  <Image
  className="side-nav-image"
    src="/images/buttons/intro.png"
    alt=""
    width={72}
    height={72}
  />

  <span>{t.nav.intro}</span>
</Link>


            {/* 入口 3：进入平假名页面 */}
            <Link
                href="hiragana"
                className="side-nav-item"
                style={{
  backgroundColor: isActive("hiragana") ? "#f3dfb3" : "transparent",
  borderRadius: "16px",
}}
               >
                  <Image
                  className="side-nav-image"
                      src="/images/buttons/hiragana.png"
                      alt=""
                      width={72}
                      height={72}
                      />
                      <span>{t.nav.hiragana}</span>
                </Link>

                 {/* 入口 4：进入片假名页面 */}
                <Link
                     href="/katakana"
                     className="side-nav-item"
                     style={{
  backgroundColor: isActive("katakana") ? "#f3dfb3" : "transparent",
  borderRadius: "16px",
}}
 
>
                <Image
                    className="side-nav-image"
                    src="/images/buttons/katakana.png"
                    alt=""
                    width={72}
                 height={72}
                 />

                <span>{t.nav.katakana}</span>
                    </Link>

{/* 入口 5：进入练习 */}
<PracticeMenu
  label={t.nav.practice}
  hiraganaLabel={t.nav.hiraganaPractice}
  katakanaLabel={t.nav.katakanaPractice}
/>
{/* 入口 6：尚未开放的汉字功能 */}
<button
  type="button"
  disabled
  style={{
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "0",
    border: "none",
    background: "none",
    color: "#8f817b",
    font: "inherit",
    fontWeight: "700",
    opacity: "0.6",
    textAlign: "left",
      cursor: "not-allowed",
  }}
>
  <Image
    src="/images/buttons/kanji.png"
    alt=""
    width={72}
    height={72}
  />

  <span  style={{
    flex: "1",
    textAlign: "left",
    lineHeight: "1.4",
  }}>{t.nav.kanjiComingSoon}</span>
</button>


{/* 入口 7：尚未开放的设置 */}
<button
  type="button"
  disabled
  style={{
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "0",
    border: "none",
    background: "transparent",
    color: "#8f817b",
    font: "inherit",
    fontWeight: "700",
    opacity: "0.6",
    cursor: "not-allowed",
    textAlign: "left",
  }}
>
  <Image
    src="/images/buttons/settings.png"
    alt=""
    width={72}
    height={72}
  />

  <span
    style={{
      flex: "1",
      textAlign: "left",
      lineHeight: "1.4",
    }}
  >
    {t.nav.settings}
  </span>
</button>


{/* 入口 8：切换语言 */}
<LanguageMenu language={language}
setLanguage={setLanguage}/>
        </nav>
    );
}