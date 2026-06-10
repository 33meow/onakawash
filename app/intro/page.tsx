import Link from "next/link";

export default function IntroPage(){
    return(
        <main
         style={{
           //最小高度是整个屏幕的高度，保证内容不多也会铺满
            minHeight:"100vh",
            //内边距上下留32px左右20
            padding:"32px 20px",
            //linear-gradient渐变
            background: "linear-gradient(180deg, #fff7fb 0%, #f7fbff 100%)",
            fontFamily:"Arial, sans-serif",
         }

         }
        >
            {/* 
        这个 div 是页面内容的中间容器。
        它的作用：不要让内容横向铺满整个屏幕。
        maxWidth 控制最大宽度，margin: "0 auto" 让它水平居中。
      */}
            <div
              style={{
                // 页面内容最大宽度是 820px
          // 如果屏幕很宽，内容也不会无限变宽
                maxWidth:"820px",
                 // margin: "0 auto" 的意思：
          // 上下 margin 是 0
          // 左右 margin 自动分配
          // 结果就是居中
                margin:"0 auto",
              }}
             >
                <Link
                 href="/"
                 style={{
                    // inline-block 让 Link 既像文字一样排布，又能设置宽高/padding
                    display:"inline-block",
                    padding:"10px 16px",
                     // borderRadius 控制圆角
            // 999px 会让它变成胶囊形状 pill button
                    borderRadius:"999px",
                    backgroundColor:"#fff0f6",
                    color:"#7a3e5d",
                    //去掉原始下横线
                    textDecoration:"none",
                    border: "1px solid #f3b6d0",
                    marginBottom: "24px",
                    fontWeight:"600",
                 }}>
                    ← 回到主页面（Back Home）
                 </Link>
                 {/*
                 section这个后续可能删除！！！！先构造skeleton */}
                 <section
                 style={{
                    backgroundColor:"white",
                    borderRadius:"24px",
                    padding:"32px",
                    boxShadow:"0 10px 30px rgba(0, 0, 0, 0.08)",
                 }}>

          {/* 
            小标题：告诉用户这是正式学习前的导入。
            p 是 paragraph，段落。
          */}
          <p
          style={{
            color:"#d85b9f",
            fontWeight:"700",
            marginBottom:"8px",
          }}>在我们开始之前（Before we start）</p>
          <h1
          style={{
            fontSize:"34px",
            margin:"0 0 12px",
            color:"#3b2f3f",
          }}>
            日语有三种不同的书写方式（Japanese has three writing systems）
          </h1><p
          style={{
            color:"#7a6f7d",
            lineHeight:"1.7",
            marginBottom:"28px",
          }}>日文有三种系统，不知道的话会很令人害怕Japanese writing may look scary at first, but it is built from three
            main systems: Hiragana, Katakana, and Kanji.</p>
              {/* 
            这个 div 用来装三张介绍卡片：
            Hiragana / Katakana / Kanji。
            
            display: "grid" 表示用网格布局。
            grid 很适合做卡片排版。
          */}<div
          style={{
            display:"grid",
            // repeat(auto-fit, minmax(200px, 1fr)) 的意思：
              // 自动根据屏幕宽度安排列数
              // 每张卡片最小 200px
              // 如果空间够，就平均分配剩下空间
              // 这样电脑和手机上都比较稳
            gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",
            // 卡片之间的距离
            gap:"16px",
            marginBottom:"32px",
          }}>
             {/* 第一张卡片：Hiragana */}
             <article
             style={{border:"1px solid #ead6e4",
                borderRadius:"20px",
                padding:"20px",
                backgroundColor:"#fffafd",
             }}>
                <h2
                style={{marginTop:0}}>Hiragana</h2>
                  {/* 
                Hiragana 的简单解释。
                这里不用写太复杂，用户先建立地图感就行。
              */}<p style={{color:"#7a6f7d",lineHeight:"1.6"}}>
                平假名是日语基本发音系统，常用于日语固有词汇和语法词尾Hiragana is the basic sound system. It is often used for native
                Japanese words and grammar endings.
              </p> {/* 
                展示几个 Hiragana 例子。
                字号大一点，让用户一眼知道“长这样”。
              */}<p style={{fontSize:"28px", marginBottom:0}}>あ い う</p>
             </article>
              {/* 第二张卡片：Katakana */}
              <article style={{
                border:"1px solid #dce7f8",
                borderRadius:"20px",
                padding:"20px",
                backgroundColor:"#f8fbff",
              }}>
                <h2 style={{marginTop:0}}>Katakana</h2>
                <p style={{color:"#7a6f7d", lineHeight:"1.6"}}>
                     片假名常用于表示外来词、人名和音效。 Katakana is often used for foreign words, names, and sound
                effects.
                </p>
                 {/* Katakana 例子 */}
                 <p style={{fontSize:"28px",marginBottom:0}}>ア イ ウ</p>
              </article>
               {/* 第三张卡片：Kanji */}
               <article style={{border:"1px solid #e7ddf5",
                borderRadius:"20px",
                padding:"20px",
                backgroundColor:"#fbf8ff",
               }}>
                <h2 style={{marginTop:0}}>Kanji</h2>
                <p style={{color:"#7a6f7d",lineHeight:"1.6"}}>汉字是具有具体含义的文字。许多汉字最初
                源自汉字。Kanji are characters with meaning. Many kanji originally came
                from Chinese characters.</p>
                  {/* Kanji 例子 */}
                  <p style={{fontSize:"28px",marginBottom:0}}>日本人</p>

               </article>
          </div>
          {/* 
            下面是按钮区。
            一个按钮是 Start with Hiragana。
            一个按钮是 Skip。
            目前两个都跳到 /kana。(JUN10.26)
          */}<div style={{
            // flex 布局适合横向排列按钮
            display:"flex",
            gap:"12px",
            // 如果屏幕太窄，按钮可以自动换行
            flexWrap:"wrap"
          }}>
              {/* 
              主按钮：Start with Hiragana。
              href="/kana" 表示点击后进入 kana 页面。
            */}
            <Link href="/kana"
            style={{display:"inline-block",
                padding:"12px 18px",
                borderRadius:"999px",
                backgroundColor:"#d85b9f",
                color:"white",
                textDecoration:"none",
                fontWeight:"700",
            }}>
                开始学习吧Start with Hiragana
            </Link>{/* 
              次按钮：Skip。
              也跳到 /kana。
              视觉上比主按钮弱一点，表示它是 secondary action。
            */}<Link href="/kana"
            style={{display:"inline-block",
                padding:"12px 18px",
                borderRadius:"999px",
                backgroundColor:"#f433f6",
                color:"#7a2e5d",
                textDecoration:"none",
                fontWeight:"700",
                border:"1px solid #ead6e4",
            }}>
                跳过，我已经有初步了解这三个东西 Skip
            </Link>
          </div>
                 </section>
             </div>
        </main>
    );
}