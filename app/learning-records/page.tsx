"use client";

import { useEffect,useState } from "react";
import Link from "next/link";

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


  
    


return(<main>
  <Link href="/">
  ← 返回主页
</Link>
 <h1>Learning Records</h1>

     
      <ul>
  {records.map((record) => (
   <li key={record.id}>
  <p>
    {record.practiceType} / {record.practiceMode}
  </p>

  <p>
    得分：{record.score} / {record.totalQuestions}
  </p>

  <p>正确率：{record.accuracy}%</p>

  <p>
    开始时间：
    {record.startedAt
      ? new Date(record.startedAt).toLocaleString("zh-CN")
      : "未记录"}
  </p>

  <p>
    结束时间：
    {record.finishedAt
      ? new Date(record.finishedAt).toLocaleString("zh-CN")
      : "未记录"}
  </p>

  <p>练习用时：{record.durationSeconds} 秒</p>
</li>
  ))}
</ul>

      {statusMessage && <p>{statusMessage}</p>}
</main>);
}



