// Link 是 Next.js 提供的跳转组件
// 它的作用像 <a> 标签，但更适合 Next.js 页面跳转
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>Onaka Wash肚肚我洗</h1>
      <p>“好难受...有人吗..谁可以洗我肚肚？CLEAN MY BELLY NOW”</p>
       {/* 
        Link 的意思是“链接”
        href="/kana" 的意思是：点击后去 /kana 页面
      */}
      <Link href="/intro">
      <button>从最基础开始！看看日文系统</button>
      </Link>
    </main>
  );
}