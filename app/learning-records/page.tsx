"use client";

import { useState } from "react";

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
//保存后端查回来的历史记录列表
//普通变量页面刷新后不会记住状态，但 useState 会让 React 记住
//records：当前的练习记录列表
//setRecords：修改 records 的函数
//一开始 records 是空数组 []
//数组records是空数组并且每一项都是PracticeSession类型
const [records, setRecords] = useState<PracticeSession[]>([]);
//显示“保存成功”或“保存失败”。
const [statusMessage, setStatusMessage] = useState("");
//防止用户连续点按钮
const [isSaving, setIsSaving] = useState(false);




async function saveTestPracticeSession() {
     try {setIsSaving(true);
    setStatusMessage("Saving...");

    const testPracticeSession ={
         userId: 1,
    sessionKey: `test-session-${Date.now()}`,
    practiceType: "HIRAGANA",
    practiceMode: "ROMAJI_CHOICE",
    score: 8,
    totalQuestions: 10,
    durationSeconds: 120,
    };

    const res = await fetch("http://localhost:8080/practice-sessions",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(testPracticeSession),
    });
 if (!res.ok) {
      throw new Error("Failed to save practice session");
    }
    const savedRecord : PracticeSession = await res.json();
    setRecords([savedRecord]);
     setStatusMessage("Saved to backend.");}
     catch (error) {
    console.error(error);
    setStatusMessage("Failed to save practice session.");
  } finally {
    setIsSaving(false);
  }
  
    
}

return(<main>
 <h1>Learning Records</h1>

     <button
  type="button"
  onClick={saveTestPracticeSession}
  disabled={isSaving}
>
  {isSaving ? "Saving..." : "Save Test Practice Session"}
</button>
      <ul>
  {records.map((record) => (
    //key={record.id}是 React 需要的，用来分辨每一条列表项是谁
    <li key={record.id}>
      {record.practiceType} / {record.practiceMode} / {record.score} /{" "}
      {record.totalQuestions} / {record.accuracy}%
    </li>
  ))}
</ul>

      {statusMessage && <p>{statusMessage}</p>}
</main>);
}



