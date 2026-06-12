// Link 是 Next.js 提供的跳转组件
// 它的作用像 <a> 标签，但更适合 Next.js 页面跳转
import Link from "next/link";
export default function Home() {
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
      }}>  {/* 
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

  <Link
  href="/intro"
  className="spongeButton"
  style={{
    position: "absolute",
    right: "50%",
    bottom: "0.1%",
    display: "block",
    width: "20%",
    minWidth: "90px",
  }}
>
  <img
    className="spongeNormal"
    src="/images/buttons/sponge-normal.png"
    alt="Start"
    style={{
      width: "100%",
      height: "auto",
      display: "block",
    }}
  />

  <img
    className="spongeHover"
    src="/images/buttons/sponge-hover.png"
    alt="Start hover"
    style={{
      width: "100%",
      height: "auto",
      display: "none",
    }}
  />
</Link>
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