"use client";

import { useEffect,useState } from "react";
import Link from "next/link";
import {messages,type Language } from "../messages";
import LanguageSwitcher from "../components/LanguageSwitcher";

//前端先告诉typeScript，后端返回的一条记录大概长什么样
type PracticeSession = {
    id:number;
    userId:number;
    sessionKey:string;
    practiceType:string;
    practiceMode:string;
    score:number;
    totalQuestions:number;
    accuracy:number;
    startedAt:string|null;
    finishedAt:string|null;
    durationSeconds:number;
    createdAt:string;
}

//react component
//在 Next.js 里，app/learning-records/page.tsx 里面必须导出一个默认组件
export default function LearningRecordsPage(){
  const [language, setLanguage] = useState<Language>("zh");
  
  const t = messages[language];
  const locale =
  language === "en"
    ? "en-US"
    : language === "ko"
      ? "ko-KR"
      : "zh-CN";
//保存后端查回来的历史记录列表
//普通变量页面刷新后不会记住状态，但 useState 会让 React 记住
//records：当前的练习记录列表
//setRecords：修改 records 的函数
//一开始 records 是空数组 []
//数组records是空数组并且每一项都是PracticeSession类型
const [records, setRecords] = useState<PracticeSession[]>([]);
//显示“保存成功”或“保存失败”。
const [statusMessage, setStatusMessage] = useState("");
useEffect(() => {
  const savedLanguage = localStorage.getItem("language");

  if (
    savedLanguage === "zh" ||
    savedLanguage === "en" ||
    savedLanguage === "ko"
  ) {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLanguage(savedLanguage);
  }

 
 
}, []);


async function fetchPracticeSessions(){
    try{
        //没有写 method，默认就是 GET。
        const res = await fetch("http://localhost:8080/practice-sessions");
        if (!res.ok){
            throw new Error("Failed to fetch practice sessions");
        }

        const data: PracticeSession[] = await res.json();
        setRecords(data);
    }catch(error){
        console.error(error);
        setStatusMessage("Failed to load practice sessions.")
    }
}
//页面第一次打开后，自动执行 fetchPracticeSessions()
useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  fetchPracticeSessions();
}, []);


return(<main
    style={{
      minHeight: "100vh",
      padding: "40px 24px",
      backgroundColor: "#f6f2e8",
      color: "#3b241c",
      fontFamily: "Arial, sans-serif",
    }}
  >
  <LanguageSwitcher
  language={language}
  setLanguage={setLanguage}
/><div
  style={{
    width: "100%",
    maxWidth: "1000px",
    margin: "0 auto",
  }}
>
  <Link
  href="/"
  style={{
    display: "inline-flex",
    alignItems: "center",
    minHeight: "44px",
    padding: "0 18px",
    borderRadius: "999px",
    backgroundColor: "#4a2b22",
    color: "#fff6f8",
    textDecoration: "none",
    fontWeight: "700",
    marginBottom: "24px",
  }}
>
  ← {t.recordsPage.backHome}
</Link>
 <h1>{t.recordsPage.title}</h1>

     {records.length === 0?(
      <section 
      style={{
        padding:"48px 24px",
        textAlign:"center",
        borderTop:"1px solid #ead8d0",
        borderBottom:"1px solid #ead8d0",
      }}>
        <h2 style={{margin:"0 0 12px"}}>
          {t.recordsPage.noRecords}
        </h2>
        <p 
            style={{
              margin:"0 0 24px",
              color:"#6f5a53",
              lineHeight:"1.7",
            }}>
              {t.recordsPage.emptyHint}
            </p>

            <Link 
            href="/hiragana"
            style={{
              display:"inline-flex",
              alignItems:"center",
              justifyContent:"center",
              minHeight:"44px",
              padding:"0 24px",
              borderRadius:"999px",
              backgroundColor:"#4a2b22",
              color:"#fff6f8",
              textDecoration:"none",
              fontWeight:"700",

            }}>{t.recordsPage.startPractice}</Link>
      </section>
     ):(
       <ul
  style={{
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "18px",
  }}
>
  {records.map((record) => (
  <li
  key={record.id}
  style={{
    padding: "22px",
    borderRadius: "8px",
    backgroundColor: "#fffaf8",
    border: "none",
    boxShadow: "0 8px 20px rgba(74, 43, 34, 0.08)",
  }}
>
 <p
  style={{
    margin: "0 0 18px",
    color: "#4a2b22",
    fontSize: "18px",
    fontWeight: "800",
  }}
>
    {record.practiceType} / {record.practiceMode}
  </p>

 <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    padding: "16px 0",
    marginBottom: "16px",
    borderTop: "1px solid #ead8d0",
    borderBottom: "1px solid #ead8d0",
  }}
>
  <div>
    <span
      style={{
        display: "block",
        marginBottom: "6px",
        color: "#7b665f",
        fontSize: "14px",
      }}
    >
      {t.recordsPage.score}
    </span>

    <strong style={{ fontSize: "24px" }}>
      {record.score} / {record.totalQuestions}
    </strong>
  </div>

  <div>
    <span
      style={{
        display: "block",
        marginBottom: "6px",
        color: "#7b665f",
        fontSize: "14px",
      }}
    >
      {t.recordsPage.accuracy}
    </span>

    <strong style={{ fontSize: "24px" }}>
      {record.accuracy}%
    </strong>
  </div>
</div>

<div
  style={{
    color: "#6f5a53",
    fontSize: "14px",
    lineHeight: "1.6",
  }}
>
  <p style={{ margin: "6px 0" }}>
    {t.recordsPage.startedAt}：
    {record.startedAt
      ? new Date(record.startedAt).toLocaleString(locale)
      : t.recordsPage.notRecorded}
  </p>

  <p style={{ margin: "6px 0" }}>
    {t.recordsPage.finishedAt}：
    {record.finishedAt
      ? new Date(record.finishedAt).toLocaleString(locale)
      : t.recordsPage.notRecorded}
  </p>

  <p style={{ margin: "6px 0" }}>{t.recordsPage.duration}：{record.durationSeconds} {t.recordsPage.seconds}</p>

  </div>
</li>
  ))}
</ul>
     )}
     

      {statusMessage && <p>{statusMessage}</p>}
      </div>
</main>);
}



