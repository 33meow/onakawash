"use client";
import HomeButton from "../components/HomeButton";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { messages, type Language } from "../messages";

 




export default function IntroPage() {
   const [language, setLanguage] = useState<Language>("zh");
   useEffect(() => {
  const savedLanguage = localStorage.getItem("language");

  if (
    savedLanguage === "zh" ||
    savedLanguage === "en" ||
    savedLanguage === "ko" ||
    savedLanguage === "vi"
  ) {
    setLanguage(savedLanguage);
  }
}, []);
const t = messages[language];

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "16px 20px",
        backgroundColor: "#f6f2e8",
        fontFamily: "Arial, sans-serif",
        color: "#3b241c",
        // 页面分为左侧导航栏和右侧内容区
        display: "grid",
        gridTemplateColumns: "240px minmax(0, 1fr)",
        gap: "24px",
        alignItems: "stretch",
      }}
    >
      <LanguageSwitcher
  language={language}
  setLanguage={setLanguage}
/>
      
      <style>{`
        .intro-nav-image {
          transform-origin: center;
          transition: transform 180ms ease;
        }

        .intro-nav-item:hover .intro-nav-image,
        .intro-nav-link:focus-visible .intro-nav-image {
          transform: scale(1.08);
        }
      `}</style>

        {/* 左侧导航栏：下一步会放入主页按钮和三个学习入口 */}
        <nav 
            aria-label="介绍页导航"
            style={{
                display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: "16px",
    padding: "16px 12px",
    borderRight: "1px solid #ead8d0",
            }}>
              {/* 导航栏第一个入口：返回主页 */}
            <HomeButton label={t.introPage.homeLabel} />
             {/* 导航入口 2：进入平假名页面 */}
            <Link
                href="hiragana"
                className="intro-nav-item"
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"8px",
                  color:"#4a2b22",
                  textDecoration:"none",
                  fontWeight:"700",
                  
                }}>
                  <Image
                  className="intro-nav-image"
                      src="/images/buttons/hiragana.png"
                      alt=""
                      width={72}
                      height={72}
                      />
                      <span>{t.introPage.hiraganaNav}</span>
                </Link>

         

            {/* 导航入口 3：进入片假名页面 */}
<Link
  href="/katakana"
  className="intro-nav-item"
  style={{
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#4a2b22",
    textDecoration: "none",
    fontWeight: "700",
  }}
>
  <Image
  className="intro-nav-image"
    src="/images/buttons/katakana.png"
    alt=""
    width={72}
    height={72}
  />

  <span>{t.introPage.katakanaNav}</span>
</Link>
{/* 导航入口 4：尚未开放的汉字功能 */}
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
  }}
>
  <Image
    src="/images/buttons/kanji.png"
    alt=""
    width={72}
    height={72}
  />

  <span>{t.introPage.kanjiComingSoon}</span>
</button>
            </nav>
      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "20px",
            alignItems: "stretch",
            backgroundColor: "#f6f2e8",
            border: "none",
            borderRadius: "30px",
            padding: "20px",
            
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "28px",
            }}
          >
            <div style={{ paddingTop: "32px" }}>
              <h1
                style={{
                  fontSize: "48px",
                  lineHeight: "1.08",
                  margin: "0 0 20px",
                  color: "#3b241c",
                }}
              >
                 {t.introPage.title}
              </h1>

              <p
                style={{
                  color: "#6f3b2e",
                  fontSize: "18px",
                  lineHeight: "1.8",
                  margin: "0",
                }}
              >
               {t.introPage.description}
              </p>
            </div>

          

           
          </div>

          <div
            style={{
              backgroundColor: "#f6f2e8",
              border: "none",
              borderRadius: "26px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.38)",
            }}
          >
            <div
              style={{
                textAlign: "center",
                padding: "14px 12px",
                borderRadius: "24px",
                backgroundColor: "#f6f2e8",
                border: "none",
              }}
            >
              <p
                style={{
                  margin: "0 0 12px",
                  color: "#7b5046",
                  fontWeight: "800",
                }}
              >
                {t.introPage.exampleLabel}
              </p>
              <p
                style={{
                  margin: "0",
                  color: "#3b241c",
                  fontSize: "36px",
                  lineHeight: "1.2",
                  fontWeight: "800",
                }}
              >
                私はコーヒーを飲みます。
              </p>
              <p
                style={{
                  margin: "12px 0 0",
                  color: "#7b5046",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
               {t.introPage.sentenceTranslation}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "14px",
              }}
            >
              <article
                style={{
                  border: "none",
                  borderRadius: "20px",
                  padding: "12px",
                  backgroundColor: "#f6f2e8",
                }}
              >
                <p
                  style={{
                    margin: "0 0 8px",
                    color: "#6f3b2e",
                    fontWeight: "800",
                  }}
                >
                  {t.introPage.hiraganaTitle}
                </p>
                <p
                  style={{
                    margin: "0 0 10px",
                    fontSize: "28px",
                    fontWeight: "800",
                    color: "#2c1914",
                  }}
                >
                  は / を / みます
                </p>
                <p
                  style={{
                    margin: "0",
                    color: "#6f3b2e",
                    lineHeight: "1.6",
                  }}
                >
                  {t.introPage.hiraganaDescription}
                </p>
              </article>

              <article
                style={{
                  border: "none",
                  borderRadius: "20px",
                  padding: "18px",
                  backgroundColor: "#f6f2e8",
                }}
              >
                <p
                  style={{
                    margin: "0 0 8px",
                    color: "#6f3b2e",
                    fontWeight: "800",
                  }}
                >
                  {t.introPage.katakanaTitle}
                </p>
                <p
                  style={{
                    margin: "0 0 10px",
                    fontSize: "28px",
                    fontWeight: "800",
                    color: "#2c1914",
                  }}
                >
                  コーヒー
                </p>
                <p
                  style={{
                    margin: "0",
                    color: "#6f3b2e",
                    lineHeight: "1.6",
                  }}
                >{t.introPage.katakanaDescription}
                </p>
              </article>

              <article
                style={{
                  border: "none",
                  borderRadius: "20px",
                  padding: "18px",
                  backgroundColor: "#f6f2e8",
                }}
              >
                <p
                  style={{
                    margin: "0 0 8px",
                    color: "#6f3b2e",
                    fontWeight: "800",
                  }}
                >
                 {t.introPage.kanjiTitle}
                </p>
                <p
                  style={{
                    margin: "0 0 10px",
                    fontSize: "28px",
                    fontWeight: "800",
                    color: "#2c1914",
                  }}
                >
                  私 / 飲
                </p>
                <p
                  style={{
                    margin: "0",
                    color: "#6f3b2e",
                    lineHeight: "1.6",
                  }}
                >
                  {t.introPage.kanjiDescription}
                </p>
              </article>

              <article
                style={{
                  border: "none",
                  borderRadius: "20px",
                  padding: "18px",
                  backgroundColor: "#f6f2e8",
                }}
              >
                <p
                  style={{
                    margin: "0 0 8px",
                    color: "#6f3b2e",
                    fontWeight: "800",
                  }}
                >
                 {t.introPage.romajiTitle}
                </p>
                <p
                  style={{
                    margin: "0 0 10px",
                    fontSize: "28px",
                    fontWeight: "800",
                    color: "#2c1914",
                  }}
                >
                  し = si
                </p>
                <p
                  style={{
                    margin: "0",
                    color: "#6f3b2e",
                    lineHeight: "1.6",
                  }}
                >
                  {t.introPage.romajiDescription}
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
