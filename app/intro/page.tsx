"use client";
import HomeButton from "../components/HomeButton";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { messages, type Language } from "../messages";
import LanguageMenu from "../components/LanguageMenu";
 




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
    // localStorage 只能在浏览器中读取，因此页面加载后再恢复语言。
// eslint-disable-next-line react-hooks/set-state-in-effect
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
        //240px:左侧 nav,minmax(0, 1fr) 中间正文，获得剩余空间,300px右侧产品介绍
        gridTemplateColumns: "240px minmax(0, 1fr) 300px",
        gap: "24px",
        alignItems: "stretch",
      }}
    >
     
      
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
            <HomeButton label={t.nav.home} />
             {/* 导航入口 2：进入平假名页面 */}
            <Link
                href="hiragana"
                className="side-nav-item"
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

         

            {/* 导航入口 3：进入片假名页面 */}
<Link
  href="/katakana"
  className="side-nav-item"
 
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
{/* 导航入口 5：尚未开放的设置 */}
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
{/* 导航入口 6：切换语言 */}
<LanguageMenu language={language}
setLanguage={setLanguage}/>
            </nav>
   <article
  style={{
    width: "100%",
    maxWidth: "1120px",
    minWidth: "0",
    margin: "0 auto",
    position: "relative",
  }}
>
        
        <section
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "0",
  }}
>
   {/* 例句和三种文字解释 */}
          <header
  style={{
     width: "100%",
    maxWidth: "760px",
    margin: "0 auto",
    padding: "8px 0 4px",
    textAlign: "center",
  }}
>
  <h1
    style={{
      fontSize: "36px",
      lineHeight: "1.2",
      margin: "0 0 12px",
      color: "#3b241c",
    }}
  >
    {t.introPage.title}
  </h1>

  <p
    style={{
      maxWidth: "720px",
      margin: "0",
      color: "#6f3b2e",
      fontSize: "16px",
      lineHeight: "1.7",
    }}
  >
    {t.introPage.description}
  </p>
</header>

          <div
            style={{
              backgroundColor: "#f6f2e8",
              border: "none",
              borderRadius: "26px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              
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

          
            </div>
          </div>
        </section>
     </article>
      
      <aside
  aria-label="ONAKAWASH"
  style={{
    minWidth: "0",
    padding: "28px 22px",
    borderLeft: "1px solid #ead8d0",
    color:"#4a2b22"
  }}
>
   <h2
    style={{
      margin: "0 0 20px",
      fontSize: "24px",
    }}
  >
    ONAKAWASH
  </h2>
    <blockquote
    style={{
      margin: "0 0 20px",
      fontSize: "20px",
      lineHeight: "1.5",
      fontWeight: "800",
    }}
  >
   {t.introPage.productSlogan}
  </blockquote>

  <p
    style={{
      margin: "0",
      lineHeight: "1.7",
      color: "#6f3b2e",
    }}
  >
    {t.home.description}
  </p>
    <section
    style={{
      marginTop: "28px",
      paddingTop: "20px",
      borderTop: "1px solid #ead8d0",
    }}
  >
    <p style={{ margin: "0 0 6px", fontWeight: "800" }}>
      {t.introPage.currentVersion}
    </p>

    <p style={{ margin: "0", color: "#6f3b2e" }}>
      V0.3 · Learning Records
    </p>
  </section>

  <section
    style={{
      marginTop: "28px",
      paddingTop: "20px",
      borderTop: "1px solid #ead8d0",
    }}
  >
    <h3 style={{ margin: "0 0 10px" }}>
      {t.introPage.romajiTitle}
    </h3>

    <p
      style={{
        margin: "0",
        lineHeight: "1.7",
        color: "#6f3b2e",
      }}
    >
      {t.introPage.romajiDescription}
    </p>
  </section>
</aside>
    </main>
  );
}
