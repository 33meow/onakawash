"use client";
//这句是从 React 里面拿两个工具。
import { useEffect, useState } from "react";

//这是 TypeScript 类型，不是 React 本身。
{/*
    Java 后端返回：{"kana":"あ","romaji":"a"}
    前端 TypeScript 接住：type Kana = {
                                       kana: string;
                                       romaji: string;
                                    };
    */} 
type Kana = {
    id: string;
  kana: string;
  romaji: string;
  audio: string;
};

//定义一个 React 页面组件
//export default 是让 Next.js 能找到这个页面。
export default function BackendTestPage() {
    //这里的 kanaList 是盒子里的数据。
    //setKanaList 是修改盒子的工具。
    //useState<Kana[]>([]) 是一开始盒子是空数组。
    //react特点：只要 state 变了，页面会自动重新显示。
    //为什么一开始是空？
    //因为页面刚打开时，前端还没来得及问后端拿数据。
  const [kanaList, setKanaList] = useState<Kana[]>([]);
//1. 页面打开
//2. useEffect 运行
//3. fetch 去访问 http://localhost:8080/kana-list
//4. 后端返回 JSON
//5. res.json() 把 后端的 JSON 解析成前端能用的数据(respond)
//6. setKanaList(data) 把数据放进 state
//7. React 自动重新渲染页面
  useEffect(() => {
    fetch("http://localhost:8080/kana-list")
      .then((res) => res.json())
      .then((data) => {
        setKanaList(data);
      });
  }, []);
// return 页面内容;
//React 组件的核心就是：
//一个函数 return 一段 HTML-like 结构
//这里说 HTML-like，是因为它看起来像 HTML，但其实叫 JSX。
//看着像 HTML，但它写在 JavaScript/TypeScript 里面，所以叫 JSX

//这部分就是页面长什么样。
  return (
    //main 就是页面主体。
    //style={{ padding: "40px" }} 是临时写 CSS，意思是里面内容距离边缘 40px。
    //第一层 { }：表示“我要在 JSX 里面写 JavaScript
    //第二层 { }：表示“这是一个 JavaScript object”
    <main style={{ padding: "40px" }}>
      <h1>Backend Test</h1>

      {kanaList.map((item) => (
        <div key={item.id} style={{ fontSize: "32px", marginBottom: "12px" }}>
          {item.kana} - {item.romaji}
          <br />
          <span style={{ fontSize: "16px"
           }}>
          audio:{item.audio}</span>
        </div>
      ))}
    </main>
  );
}