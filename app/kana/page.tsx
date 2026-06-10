// redirect 是 Next.js 提供的“重定向”工具。
// redirect /ˌriːdəˈrekt/ = 重定向。
// 画面感：用户走到旧门 /kana，系统直接把她送到新门 /hiragana
 import {redirect} from "next/navigation";
 // 这个页面现在不负责显示任何东西。
// 它只负责把旧地址 /kana 自动送到新地址 /hiragana。
export default function KanaRedirectPage(){
   // 因为你现在正式做的是 Hiragana 页面，
  // 所以用户访问 /kana 时，自动跳转到 /hiragana。
   redirect("/hiragana");
}