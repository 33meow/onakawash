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
        background:"linear-gradient(180deg, #fff7fb 0%, #f7fbff 100%)",
        fontFamily:"Arial, sans-serif",
      }}>  {/* 
        这个 section 是首页的主卡片。
        它把标题、介绍文字、按钮都包起来。
        这样首页就不会散在左上角，而是变成一个整齐的中心区域。
      */}<section style={{
        maxWidth:"780px",
        width:"100%",
        backgroundColor:"rgba(255, 255, 255, 0.86)",
        borderRadius:"32px",
        padding:"44px 32px",
        textAlign:"center",
        boxShadow:"0 18px 45px rgba(100,60,120,0.6)",
        border:"1px solid rgba(255, 190, 220, 0.6)",
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
        */}<h1 style={{
          fontSize:"42px",
          lineHeight:"1.15",
          margin:"0 0 16px",
          color:"#2f2435",
        }}>Onaka Wash
        <br/>
        肚肚我洗</h1> {/* 
          副标题 / slogan。
          slogan /ˈsloʊɡən/ 是口号、标语。
          这里保留你的梗，但排版更整齐。
        */}<p style={{fontSize:"20px",
          lineHeight:"1.7",
          color:"#65576b",
          maxWidth:"620px",
          margin:"0 auto 28px",
        }}>“好难受...有人吗..谁可以洗我肚肚？CLEAN MY BELLY NOW”</p>
           {/* 
          这一段是简短介绍。
          让用户知道点按钮后会发生什么。
        */}
        <p style={{fontSize:"16px",
          lineHeight:"1.7",
          color:"#7a6f7d",
          maxWidth:"560px",
          margin:"0 auto 32px",
        }}>Learn Japanese kana step by step. First, get a tiny map of Japanese
          writing systems, then start with Hiragana.</p>
    
      
       {/* 
        Link 的意思是“链接”
        href="/kana" 的意思是：点击后去 /kana 页面
      */}
      <Link href="/intro"
      style={{
        display:"inline-flex",
        alignItems:"center",
        gap:"10px",
        marginTop:"20px",
        padding:"14px 22px",
        borderRadius:"999px",
        background:"linear-gradient(135deg, #d85b9f 0%, #8b5cf6 100%)",
        color:"white",
        textDecoration:"none",
        fontWeight:"700",
        fontSize:"16px",
        border:"1px solid rgba(225, 225, 225, 0.55)",
        boxShadow:"0 10px 24px rgba(216, 91, 159, 0.28)",
        //鼠标变成小手
        cursor:"pointer"
      }}
      ><span>🌸</span>
      <span>从最基础开始！看看日文系统</span>
      <span>→</span>
      </Link>
           {/* 
          底部小提示。
          这不是必须功能，只是让首页更像一个完整产品。
        */}<p style={{
          marginTop:"24px",
          fontSize:"14px",
          color:"#9a8fa0",
        }}> Start from Hiragana あ・い・う・え・お</p>
          </section>
    </main>
  );
}