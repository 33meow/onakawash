"use client";

import { useEffect,useState } from "react";
import Link from "next/link";
import {messages,type Language } from "../messages";

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

function getTotalSessions(sessions: PracticeSession[]){
  return sessions.length;
}

function getAverageAccuracy (sessions: PracticeSession[]){
  if (sessions.length === 0){
    return 0;
  }
  const totalAccuracy = sessions.reduce ((sum,session)=>{
    return sum + getSafeAccuracy(session);
  },0);
  return Math.round(totalAccuracy/sessions.length)
}

function getTotalDurationSeconds(sessions: PracticeSession[]){
  //reduce是把数组里的某个字段一个一个累加。
return sessions.reduce((sum, session)=>{
  return sum+session.durationSeconds;
},0)
}

function formatDuration(seconds:number){
   const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  if(minutes === 0 ){
    return `${remainingSeconds}sec`;
  }
  if (remainingSeconds === 0) {
    return `${minutes} min`;
  }

  return `${minutes} min ${remainingSeconds} sec`;

}

function getLatestSession(sessions :PracticeSession[]){
  if (sessions.length === 0){
    return null;
  }
  return[...sessions].sort((a,b)=>{
    const timeA = new Date(a.finishedAt??a.createdAt).getTime();
    const timeB = new Date(b.finishedAt ?? b.createdAt).getTime();

    return timeB -timeA;

  })[0];
}

function getRecentSessions(sessions: PracticeSession[], count: number) {
  return [...sessions]
    .sort((a, b) => {
      const timeA = new Date(a.finishedAt ?? a.createdAt).getTime();
      const timeB = new Date(b.finishedAt ?? b.createdAt).getTime();

      return timeB - timeA;
    })
    .slice(0, count);
}

function getAccuracyTrendData(sessions: PracticeSession[], count: number) {
  return getRecentSessions(sessions, count)
    .reverse()
    .map((session, index) => {
      return {
        label: `#${index + 1}`,
        accuracy: getSafeAccuracy(session),
        practiceType: session.practiceType,
        date: session.finishedAt ?? session.createdAt,
      };
    });
}

function getPracticeTypeStats(sessions: PracticeSession[]) {
  const hiraganaSessions = sessions.filter((session) => {
    return session.practiceType === "HIRAGANA";
  });

  const katakanaSessions = sessions.filter((session) => {
    return session.practiceType === "KATAKANA";
  });

  return {
    hiragana: {
      count: hiraganaSessions.length,
      averageAccuracy: getAverageAccuracy(hiraganaSessions),
    },
    katakana: {
      count: katakanaSessions.length,
      averageAccuracy: getAverageAccuracy(katakanaSessions),
    },
  };
}

function formatDate(date: string | null) {
  if (!date) {
    return "No date";
  }

  return new Date(date).toLocaleString();
}

function getSafeAccuracy(session: PracticeSession) {
  if (session.accuracy !== null && session.accuracy !== undefined) {
    return session.accuracy;
  }

  if (session.totalQuestions === 0) {
    return 0;
  }

  return Math.round((session.score / session.totalQuestions) * 100);
}

//react component
//在 Next.js 里，app/learning-records/page.tsx 里面必须导出一个默认组件
export default function LearningRecordsPage(){
  const [language, setLanguage] = useState<Language>("zh");
  
  const t = messages[language];
 
//保存后端查回来的历史记录列表
//普通变量页面刷新后不会记住状态，但 useState 会让 React 记住
//records：当前的练习记录列表
//setRecords：修改 records 的函数
//一开始 records 是空数组 []
//数组records是空数组并且每一项都是PracticeSession类型
const [records, setRecords] = useState<PracticeSession[]>([]);
//section1
const totalSessions = getTotalSessions(records);
const averageAccuracy = getAverageAccuracy(records);
const totalDurationSeconds = getTotalDurationSeconds(records);
const totalDurationText = formatDuration(totalDurationSeconds);
const latestSession = getLatestSession(records);

const overviewCards = [
  {
    label: "Total Sessions",
    value: totalSessions,
  },
  {
    label: "Average Accuracy",
    value: `${averageAccuracy}%`,
  },
  {
    label: "Total Duration",
    value: totalDurationText,
  },
  {
    label: "Latest Practice",
    value: latestSession
      ? formatDate(latestSession.finishedAt ?? latestSession.createdAt)
      : "No practice yet",
  },
];

//section4
const recentSessions = getRecentSessions(records, 5);

//section2
const accuracyTrendData = getAccuracyTrendData(records, 5);

//section3
const practiceTypeStats = getPracticeTypeStats(records);

useEffect(() => {
  const savedLanguage = localStorage.getItem("language");

  if (
    savedLanguage === "zh" ||
    savedLanguage === "en" ||
    savedLanguage === "ko" ||
    savedLanguage ==="vi"
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
    
 <div
  style={{
    width: "100%",
    maxWidth: "1120px",
    margin: "0 auto",
  }}
>
   
<header
  style={{
    marginBottom: "28px",
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
  <p
    style={{
      margin: "0 0 8px",
      color: "#7a5a4d",
      fontWeight: 700,
    }}
  >
    V0.4 Progress Analysis
  </p>

  <h1
    style={{
      margin: "0",
      color: "#3b241c",
      fontSize: "40px",
      lineHeight: "1.1",
    }}
  >
    Progress Dashboard
  </h1>

  <p
    style={{
      margin: "12px 0 0",
      color: "#7a5a4d",
      fontSize: "18px",
      lineHeight: "1.6",
    }}
  >
    Turn your practice records into learning feedback.
  </p>
</header>
<h1>Progress Dashboard</h1>
  {/* Section 1 */}
  <section
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px",
    marginBottom: "28px",
  }}
>
  {overviewCards.map((card) => (
    <article
      key={card.label}
     style={{
  minHeight: "120px",
  padding: "20px",
  borderRadius: "18px",
  backgroundColor: "#fffaf5",
  border: "1px solid #ead8d0",
  boxShadow: "0 10px 24px rgba(74, 43, 34, 0.08)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}}
    >
      <p
        style={{
          margin: "0 0 8px",
          color: "#7a5a4d",
          fontSize: "14px",
          fontWeight: 700,
        }}
      >
        {card.label}
      </p>

      <strong
        style={{
          color: "#3b241c",
          fontSize: "24px",
          lineHeight: "1.2",
          wordBreak: "break-word",
        }}
      >
        {card.value}
      </strong>
    </article>
  ))}
</section>

 {/* Section 2 */}
<section
  style={{
    marginTop: "28px",
    padding: "22px",
    borderRadius: "18px",
    backgroundColor: "#fffaf5",
    border: "1px solid #ead8d0",
    boxShadow: "0 10px 24px rgba(74, 43, 34, 0.08)",
  }}
>
  <h2
    style={{
      margin: "0 0 16px",
      color: "#3b241c",
      fontSize: "24px",
    }}
  >
    Accuracy Trend
  </h2>
<p
  style={{
    margin: "0 0 18px",
    color: "#7a5a4d",
    lineHeight: "1.5",
  }}
>
  Recent practice accuracy from oldest to newest.
</p>
  {accuracyTrendData.length === 0 ? (
    <p>No trend data yet.</p>
  ) : (
    <div
      style={{
        display: "grid",
        gap: "10px",
      }}
    >
      {accuracyTrendData.map((point) => (
        <div
          key={`${point.label}-${point.date}`}
          style={{
              display: "grid",
  gridTemplateColumns: "64px minmax(0, 1fr) 56px",
  alignItems: "center",
  gap: "12px",
          }}
        >
          <span>{point.label}</span>

          <div
            style={{
              //进度条宽窄
              height: "14px",
              borderRadius: "999px",
              backgroundColor: "#ead8d0",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${point.accuracy}%`,
                height: "100%",
                borderRadius: "999px",
                backgroundColor: "#b9854f",
              }}
            />
          </div>

          <strong>{point.accuracy}%</strong>
        </div>
      ))}
    </div>
  )}
</section>
 {/* Section 3 */}
<section
  style={{
    marginTop: "28px",
     padding: "22px",
       borderRadius: "18px",
        backgroundColor: "#fffaf5",
        border: "1px solid #ead8d0",
         boxShadow: "0 10px 24px rgba(74, 43, 34, 0.08)",
  }}
>
  <h2
    style={{
      margin: "0 0 16px",
      color: "#3b241c",
      fontSize: "24px",
    }}
  >
    Practice Type Comparison
  </h2>
<p
  style={{
    margin: "0 0 18px",
    color: "#7a5a4d",
    lineHeight: "1.5",
  }}
>
  Compare your practice activity across Hiragana and Katakana.
</p>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "16px",
    }}
  >
    <article
      style={{
        padding: "18px",
        borderRadius: "16px",
       backgroundColor: "#f6f2e8",
border: "1px solid #ead8d0",
      }}
    >
      <h3
        style={{
          margin: "0 0 12px",
          color: "#3b241c",
        }}
      >
        Hiragana
      </h3>

      <p>Sessions: {practiceTypeStats.hiragana.count}</p>
      <p>Average Accuracy: {practiceTypeStats.hiragana.averageAccuracy}%</p>
    </article>

    <article
      style={{
        padding: "18px",
        borderRadius: "16px",
       backgroundColor: "#f6f2e8",
border: "1px solid #ead8d0",
      }}
    >
      <h3
        style={{
          margin: "0 0 12px",
          color: "#3b241c",
        }}
      >
        Katakana
      </h3>

      <p>Sessions: {practiceTypeStats.katakana.count}</p>
      <p>Average Accuracy: {practiceTypeStats.katakana.averageAccuracy}%</p>
    </article>
  </div>
</section>
 {/* Section 4 */}
<section
  style={{
    marginTop: "28px",
     padding: "22px",
      borderRadius: "18px",
        backgroundColor: "#fffaf5",
         border: "1px solid #ead8d0",
    boxShadow: "0 10px 24px rgba(74, 43, 34, 0.08)",
  }}
>
  <h2
    style={{
      margin: "0 0 16px",
      color: "#3b241c",
      fontSize: "24px",
    }}
  >
    Recent Sessions
  </h2>
<p
  style={{
    margin: "0 0 18px",
    color: "#7a5a4d",
    lineHeight: "1.5",
  }}
>
  Your latest practice sessions, sorted by completion time.
</p>
  {recentSessions.length === 0 ? (
    <p>No practice records yet.</p>
  ) : (
    <div
      style={{
        display: "grid",
        gap: "12px",
      }}
    >
      {recentSessions.map((session) => (
        <article
          key={session.id}
          style={{
            padding: "16px",
            borderRadius: "14px",
              backgroundColor: "#f6f2e8",
            border: "1px solid #ead8d0",
            display: "grid",
              gap: "8px",
          }}
        >
          <strong>{session.practiceType}</strong>

          <p style={{ margin: 0 }}>
            Score: {session.score} / {session.totalQuestions}
          </p>

          <p style={{ margin: 0 }}>Accuracy: {getSafeAccuracy(session)}%</p>

          <p  style={{ margin: 0 }}> Duration: {formatDuration(session.durationSeconds)}</p>
         

          <p style={{ margin: 0 }}>
            Date: {formatDate(session.finishedAt ?? session.createdAt)}
          </p>
        </article>
      ))}
    </div>
  )}
</section>

</div>
</main>);
}



