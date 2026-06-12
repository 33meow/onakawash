//因为 useState 只能在 client component 里面用。（三语言系统）
"use client";
import StartButton from "./components/StartButton";
//副作用。这里感觉像“页面打开后偷偷做一件事”。
import { useEffect, useState } from "react";
import { messages, type Language } from "./messages";
import LanguageSwitcher from "./components/LanguageSwitcher";
export default function Home() {
  // language 保存当前选择的语言
  // 默认是中文 zh
  const [language, setLanguage] = useState<Language>("zh");
   // 页面第一次打开时，从浏览器的小抽屉 localStorage 里读取语言
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");

    // 防止 localStorage 里面存了奇怪的值
    // 只有 zh / en / ko 才允许使用
    if (
      savedLanguage === "zh" ||
      savedLanguage === "en" ||
      savedLanguage === "ko"
    ) {
      setLanguage(savedLanguage);
    }
  }, []);

  // language 每次变化时，把新语言存进 localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // t 是当前语言对应的文字包
  // language 是 zh，t 就是 messages.zh
  // language 是 en，t 就是 messages.en
  // language 是 ko，t 就是 messages.ko
  const t = messages[language];
  return (
    //main是整个网页最外边的容器（or网页的背景）
    <main
      style={{
        minHeight:"100vh",
        //可以理解为居中布局
        display:"flex",
        //水平方向居中
        justifyContent:"center",
        //竖直方向居中
        alignItems:"center",
        padding:"32px 20px",
        background:"#f6f2e8",
        fontFamily:"Arial, sans-serif",
      }}> 
      {/*主页把 language 交给 LanguageSwitcher
主页把 setLanguage 也交给 LanguageSwitcher*/}
      <LanguageSwitcher language={language} setLanguage={setLanguage} />

    

       {/* 
        这个 section 是首页的主卡片。
        它把标题、介绍文字、按钮都包起来。
        这样首页就不会散在左上角，而是变成一个整齐的中心区域。
      */}<section style={{
  maxWidth:"1100px",
  width:"100%",
  textAlign:"center",
  padding:"40px 24px",
}}>
         {/* 
          小标签 / badge。
          badge /bædʒ/ 就是“小徽章、小标签”。
          用来告诉用户这个网站是干什么的。
        */}
        <p style={{
          display:"inline-block",
          padding:"8px 14px",
          borderRadius:"999px",
          backgroundColor:"#fff0f6",
          color:"#b83280",
          fontWeight:"700",
          fontSize:"14px",
          margin:"0 0 18px",
        }}>japanese learning starts here kkkk</p>
         {/* 
          h1 是首页主标题。
          一个页面通常只放一个最重要的 h1。
        */}
        {/*我的icon图片*/}
        <div
  style={{
    position: "relative",
    width: "980px",
    maxWidth: "96vw",
    margin: "0 auto",
  }}
>
  <img
    src="/images/logo/onakawash.png"
    alt="Onakawash"
    style={{
      display: "block",
      width: "100%",
      
      height: "auto",
      
    }}
  />

  <StartButton text ={t.start}/>

</div>
        {/* 
          副标题 / slogan。
          slogan /ˈsloʊɡən/ 是口号、标语。
          这里保留你的梗，但排版更整齐。
        */}<p style={{fontSize:"20px",
          lineHeight:"1.7",
          color:"#65576b",
          maxWidth:"620px",
          margin:"0 auto 28px",
        }}>ONAKAWASH</p>
           {/* 
          这一段是简短介绍。
          让用户知道点按钮后会发生什么。
        */}
        <p style={{fontSize:"16px",
          lineHeight:"1.7",
          color:"#7a6f7d",
          maxWidth:"560px",
          margin:"0 auto 32px",
        }}>我是一款学习日语可以获得金币购买海绵为小狗宝宝洗肚子</p>
    
      
       {/* 
        Link 的意思是“链接”
        href="/kana" 的意思是：点击后去 /kana 页面
      */}
      
           {/* 
          底部小提示。
          这不是必须功能，只是让首页更像一个完整产品。
        */}<p style={{
          marginTop:"24px",
          fontSize:"14px",
          color:"#9a8fa0",
        }}> Start from Hiragana あ・い・う・え・お</p>
          </section>
    <style>{`
  .spongeButton:hover .spongeNormal {
    display: none !important;
  }

  .spongeButton:hover .spongeHover {
    display: block !important;
  }
`}</style>
    </main>
  );
}