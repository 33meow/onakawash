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

//when frontend receives answer reords form backend, each answer record should have these fields.
type AnswerRecord = {
  id: number;
  userId: number;
  sessionKey: string;
  practiceType: string;
  practiceMode: string;

  kanaItemId: string;
  kana: string;
  correctRomaji: string;
  selectedRomaji: string;
  isCorrect: boolean;

  answeredAt: string;
  responseTimeMs: number;
  createdAt: string;
};

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

function parseUtcDate(date: string) {
  const hasTimezone = date.endsWith("Z") || /[+-]\d{2}:\d{2}$/.test(date);
  return new Date(hasTimezone ? date : `${date}Z`);
}

function formatSessionDate(session: PracticeSession, language: Language) {
  const locale =
    language === "en"
      ? "en-US"
      : language === "ko"
        ? "ko-KR"
        : language === "vi"
          ? "vi-VN"
          : "zh-CN";

  const date = session.finishedAt
    ? parseUtcDate(session.finishedAt)
    : new Date(session.createdAt);

  return date.toLocaleString(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
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

//This function turns many wrong answer records into a weak-kana summary.
function getWeakKanaStats(answerRecords: AnswerRecord[]) {
  //From all answer records, keep only wrong answers.
  const wrongRecords = answerRecords.filter((record) => !record.isCorrect);

  const statsMap = new Map<
    string,
    {
      kanaItemId: string;
      kana: string;
      correctRomaji: string;
      wrongCount: number;
      totalResponseTimeMs: number;
    }
  >();

  //Go through every wrong answer one by one.
  wrongRecords.forEach((record) => {
    //Have we already created a summary bucket for this kana?
    const existing = statsMap.get(record.kanaItemId);

    //If this kana already has a bucket:
//increase wrong count by 1
//add this response time
    if (existing) {
      existing.wrongCount += 1;
      existing.totalResponseTimeMs += record.responseTimeMs;
    } 
    //If this kana appears as a wrong answer for the first time:
//create a new bucket for it.
    else {
      statsMap.set(record.kanaItemId, {
        kanaItemId: record.kanaItemId,
        kana: record.kana,
        correctRomaji: record.correctRomaji,
        wrongCount: 1,
        totalResponseTimeMs: record.responseTimeMs,
      });
    }
  });

  //get all summary objects from the Map
return Array.from(statsMap.values())
  .map((stat) => ({
    ...stat,
    averageResponseTimeMs: Math.round(
      stat.totalResponseTimeMs / stat.wrongCount
    ),
  }))
  //Put bigger wrongCount first.
  .sort((a, b) => b.wrongCount - a.wrongCount);
}

function formatResponseTime(milliseconds: number) {
  if (milliseconds < 1000) {
    return `${milliseconds} ms`;
  }

  return `${(milliseconds / 1000).toFixed(1)} sec`;
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
const [practiceSessions, setPracticeSessions] = useState<PracticeSession[]>([]);
const [answerRecords, setAnswerRecords] = useState<AnswerRecord[]>([]);
//section1
const totalSessions = getTotalSessions(records);
const averageAccuracy = getAverageAccuracy(records);
const totalDurationSeconds = getTotalDurationSeconds(records);
const totalDurationText = formatDuration(totalDurationSeconds);
const latestSession = getLatestSession(records);

const overviewCards = [
  {
    label: t.progressDashboard.totalSessions,
    value: totalSessions,
  },
  {
    label: t.progressDashboard.averageAccuracy,
    value: `${averageAccuracy}%`,
  },
  {
    label: t.progressDashboard.totalDuration,
    value: totalDurationText,
  },
  {
    label:  t.progressDashboard.latestPractice,
    value: latestSession
  ? formatSessionDate(latestSession, language)
  : t.progressDashboard.noPracticeYet,
  },
];

//section4
const recentSessions = getRecentSessions(records, 5);

//section2
const accuracyTrendData = getAccuracyTrendData(records, 5);
//section2 line chart
const chartWidth = 520;
const chartHeight = 180;
const chartPadding = 28;

const trendPoints = accuracyTrendData.map((point, index) => {
  const usableWidth = chartWidth - chartPadding * 2;
  const usableHeight = chartHeight - chartPadding * 2;

  const x =
    accuracyTrendData.length === 1
      ? chartWidth / 2
      : chartPadding + (usableWidth / (accuracyTrendData.length - 1)) * index;

  const y =
    chartPadding + usableHeight - (point.accuracy / 100) * usableHeight;

  return {
    ...point,
    x,
    y,
  };
});

const trendPolylinePoints = trendPoints
  .map((point) => `${point.x},${point.y}`)
  .join(" ");


//section3
const practiceTypeStats = getPracticeTypeStats(records);

const weakKanaStats = getWeakKanaStats(answerRecords);

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
        const answerRecordRes = await fetch("http://localhost:8080/answer-records");

if (!answerRecordRes.ok) {
  throw new Error("Failed to fetch answer records");
}

const answerRecordData: AnswerRecord[] = await answerRecordRes.json();
setAnswerRecords(answerRecordData);

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
    {/*Weak Kana Records */}
   <section>
 <h2>Weak Kana Focus</h2>
<p>
  Kana that appeared most often in wrong answers, based on item-level answer records.
</p>

  {weakKanaStats.length === 0 ? (
    <p>No weak kana yet.</p>
  ) : (
    <ul>
     
      {weakKanaStats.slice(0, 5).map((stat) => (
        <li key={stat.kanaItemId}>
  <strong>{stat.kanaItemId}</strong>
  <br />
  Correct answer: {stat.correctRomaji}
  <br />
  Wrong count: {stat.wrongCount}
  <br />
  Avg wrong response:{formatResponseTime(stat.averageResponseTimeMs)}
</li>
      ))}
    </ul>
  )}
</section>
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
   {t.progressDashboard.backHome}
</Link>
  <p
    style={{
      margin: "0 0 8px",
      color: "#7a5a4d",
      fontWeight: 700,
    }}
  >
    {t.progressDashboard.versionLabel}
  </p>

  <h1
    style={{
      margin: "0",
      color: "#3b241c",
      fontSize: "40px",
      lineHeight: "1.1",
    }}
  >
    {t.progressDashboard.title}
  </h1>

  <p
    style={{
      margin: "12px 0 0",
      color: "#7a5a4d",
      fontSize: "18px",
      lineHeight: "1.6",
    }}
  >
   {t.progressDashboard.subtitle}
  </p>
</header>

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
    {t.progressDashboard.accuracyTrend}
  </h2>
<p
  style={{
    margin: "0 0 18px",
    color: "#7a5a4d",
    lineHeight: "1.5",
  }}
>
 {t.progressDashboard.accuracyTrendDescription}
</p>

 {accuracyTrendData.length === 0 ? (
  <p>{t.progressDashboard.noTrendData}</p>
) : (
  <div
    style={{
      overflowX: "auto",
    }}
  >
    <svg
      viewBox={`0 0 ${chartWidth} ${chartHeight}`}
      role="img"
      aria-label={t.progressDashboard.accuracyTrend}
      style={{
        width: "100%",
        minWidth: "360px",
        height: "200px",
        display: "block",
      }}
    >
      <line
        x1={chartPadding}
        y1={chartHeight - chartPadding}
        x2={chartWidth - chartPadding}
        y2={chartHeight - chartPadding}
        stroke="#ead8d0"
        strokeWidth="2"
      />

      <line
        x1={chartPadding}
        y1={chartPadding}
        x2={chartPadding}
        y2={chartHeight - chartPadding}
        stroke="#ead8d0"
        strokeWidth="2"
      />

      <polyline
        points={trendPolylinePoints}
        fill="none"
        stroke="#b9854f"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {trendPoints.map((point) => (
        <g key={`${point.label}-${point.date}`}>
          <circle
            cx={point.x}
            cy={point.y}
            r="6"
            fill="#3b241c"
          />

          <text
            x={point.x}
            y={chartHeight - 6}
            textAnchor="middle"
            fill="#7a5a4d"
            fontSize="12"
            fontWeight="700"
          >
            {point.label}
          </text>

          <text
            x={point.x}
            y={point.y - 12}
            textAnchor="middle"
            fill="#3b241c"
            fontSize="12"
            fontWeight="700"
          >
            {point.accuracy}%
          </text>
        </g>
      ))}
    </svg>
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
{t.progressDashboard.practiceTypeComparison}
  </h2>
<p
  style={{
    margin: "0 0 18px",
    color: "#7a5a4d",
    lineHeight: "1.5",
  }}
>
  {t.progressDashboard.practiceTypeDescription}
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
       {t.progressDashboard.hiragana}
      </h3>

      <p>{t.progressDashboard.sessions}: {practiceTypeStats.hiragana.count}</p>
      <p>{t.progressDashboard.averageAccuracy}: {practiceTypeStats.hiragana.averageAccuracy}%</p>
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
       {t.progressDashboard.katakana}
      </h3>

      <p>{t.progressDashboard.sessions}: {practiceTypeStats.katakana.count}</p>
      <p>{t.progressDashboard.averageAccuracy}: {practiceTypeStats.katakana.averageAccuracy}%</p>
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
  {t.progressDashboard.recentSessions}
  </h2>
<p
  style={{
    margin: "0 0 18px",
    color: "#7a5a4d",
    lineHeight: "1.5",
  }}
>
 {t.progressDashboard.recentSessionsDescription}
</p>
  {recentSessions.length === 0 ? (
    <p>{t.progressDashboard.noRecordsYet}</p>
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
           {t.progressDashboard.score}: {session.score} / {session.totalQuestions}
          </p>

          <p style={{ margin: 0 }}>{t.progressDashboard.accuracy}: {getSafeAccuracy(session)}%</p>

          <p  style={{ margin: 0 }}>{t.progressDashboard.duration}: {formatDuration(session.durationSeconds)}</p>
         

          <p style={{ margin: 0 }}>
           {t.progressDashboard.date}:{formatSessionDate(session, language)}
          </p>
        </article>
      ))}
    </div>
  )}
</section>

</div>
</main>);
}



