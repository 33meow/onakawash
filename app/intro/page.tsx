import HomeButton from "../components/HomeButton";
import Link from "next/link";
import Image from "next/image";
export default function IntroPage() {
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
      
      <style>{`
        .intro-home-image {
          transform-origin: center;
          transition: transform 180ms ease;
        }

        .intro-home-link:hover .intro-home-image,
        .intro-home-link:focus-visible .intro-home-image {
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
            <HomeButton />
             {/* 导航入口 2：进入平假名页面 */}
            <Link
                href="hiragana"
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"8px",
                  color:"#4a2b22",
                  textDecoration:"none",
                  fontWeight:"700",
                }}>
                  <Image
                      src="/images/buttons/hiragana.png"
                      alt=""
                      width={64}
                      height={64}
                      />
                      <span>看看平假名</span>
                </Link>

         

            {/* 导航入口 3：进入片假名页面 */}
<Link
  href="/katakana"
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
    src="/images/buttons/katakana.png"
    alt=""
    width={64}
    height={64}
  />

  <span>看看片假名</span>
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
    width={64}
    height={64}
  />

  <span>汉字稍后开放</span>
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
                日语文字，其实是在分工工作
              </h1>

              <p
                style={{
                  color: "#6f3b2e",
                  fontSize: "18px",
                  lineHeight: "1.8",
                  margin: "0",
                }}
              >
                日语看起来像同时用了三套文字，但它们不是在制造混乱。
                平假名、片假名和汉字会在同一个句子里各自负责不同任务。
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
                来看这个例子
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
                我喝咖啡。
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
                  平假名
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
                  负责发音和语法
它是日语学习的起点。助词、词尾变化、很多基础单词都会用平假名出现。
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
                  片假名
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
                >负责外来词和特殊声音
咖啡、电脑、外国人名、品牌名，经常会用片假名写。
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
                  汉字
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
                  负责表达核心意思，让你快速看出句子在说什么。
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
                  罗马字
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
                  onakawash 使用 si / ti / tu 这类标注，帮助你对应假名表和输入习惯。
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
