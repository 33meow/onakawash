import HomeButton from "../components/HomeButton";
import Link from "next/link";
export default function IntroPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "32px 20px",
        backgroundColor: "#f6f2e8",
        fontFamily: "Arial, sans-serif",
        color: "#3b241c",
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

      <div
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <div
  style={{
    position: "absolute",
    top: "-48px",
    left: "-12px",
    zIndex: 2,
  }}
>
  <HomeButton />
</div>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
            alignItems: "stretch",
            backgroundColor: "#f6f2e8",
            border: "none",
            borderRadius: "30px",
            padding: "34px",
            
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

            <div
              style={{
                minHeight: "180px",
                borderRadius: "26px",
                border: "none",
                backgroundColor: "#f6f2e8",
              }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "12px",
              }}
            >
              <Link
                href="/hiragana"
                style={{
                  minHeight: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 16px",
                  borderRadius: "999px",
                  backgroundColor: "#4a2b22",
                  color: "#fff6f8",
                  textDecoration: "none",
                  fontWeight: "800",
                  boxShadow: "0 10px 18px rgba(74, 43, 34, 0.28)",
                  textAlign: "center",
                }}
              >
                先学平假名
              </Link>

              <Link
                href="/katakana"
                style={{
                  minHeight: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 16px",
                  borderRadius: "999px",
                  backgroundColor: "#ffeaf1",
                  color: "#4a2b22",
                  textDecoration: "none",
                  fontWeight: "800",
                  border: "none",
                  textAlign: "center",
                }}
              >
                看看片假名
              </Link>

              <span
                style={{
                  minHeight: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 16px",
                  borderRadius: "999px",
                  backgroundColor: "#e7b7c3",
                  color: "#7b5046",
                  fontWeight: "800",
                  border: "none",
                  textAlign: "center",
                }}
              >
                汉字稍后开放
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#f6f2e8",
              border: "none",
              borderRadius: "26px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.38)",
            }}
          >
            <div
              style={{
                textAlign: "center",
                padding: "22px 16px",
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
                  fontSize: "44px",
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
