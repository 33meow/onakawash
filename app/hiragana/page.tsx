"use client";

import { useEffect, useRef, useState } from "react";
import SideNav from "../components/SideNav";
import { type Language } from "../messages";

type KanaItem = {
    id:string;
    kana:string;
    romaji:string;
    audioSrc:string;
    imageSrc:string | null;
  };

  type KanaSection = {
    title:string;
    description:string;
    items:(KanaItem | null)[];
  };  






export default function HiraganaPage(){
  const [selectedId, setSelectedId] = useState<string | null>(null);
      const [language, setLanguage] = useState<Language>("zh");
   useEffect(() => {
  const savedLanguage = localStorage.getItem("language");

  if (
    savedLanguage === "zh" ||
    savedLanguage === "en" ||
    savedLanguage === "ko" ||
    savedLanguage === "vi"
  ) {
    // localStorage 只能在浏览器中读取，因此页面加载后再恢复语言。
// eslint-disable-next-line react-hooks/set-state-in-effect
    setLanguage(savedLanguage);
  }
}, []);



// sections 用来保存从后端拿到的 Hiragana 数据。
// 一开始是空数组，因为页面刚打开时还没来得及 fetch。
//创建一个盒子，叫 sections。
//一开始盒子是空的 []。
//等后端数据来了，用 setSections(data) 把数据放进去。
const [sections, setSections] = useState<KanaSection[]>([]);


  // currentAudioRef 用来保存“当前正在播放的音频”。
// 一开始没有音频在播放，所以是 null。
// HTMLAudioElement 是浏览器里的音频对象类型。
const currentAudioRef = useRef<HTMLAudioElement | null>(null);



//页面第一次打开后，自动做一次里面的事情。
//去后端拿数据
//拿到了就塞进 sections
//页面重新显示。
useEffect(() => {
  async function fetchHiraganaSections() {
    try {
      //前端去访问这个网址，后端 Spring Boot 里对应的 Controller 会处理这个请求，返回数据。
      const res = await fetch("http://localhost:8080/hiragana");
//if出错的话跳到catch，catch里 alert 一下。
      if (!res.ok) {
        //主动制造一个错误，然后跳到 catch。这个不是给用户看的，主要是给程序看的。
        throw new Error("Failed to fetch hiragana sections");
      }

      const data: KanaSection[] = await res.json();
      //把刚刚拿到的数据放进 sections 这个盒子里。
      setSections(data);
    } catch (error) {
      console.error(error);
      alert("后端数据加载失败。请检查 Spring Boot 是否启动。");
    }
  }

  fetchHiraganaSections();
}, []);
   // playAudio 是播放音频的函数。
  // 参数 item 就是用户点击的那个假名。
  function playAudio(item: KanaItem){
  setSelectedId(item.id);

    // 如果这个假名还没有 audioSrc，就先提醒一下。
    // 现在只有 あいうえお 有录音的话，其他假名就会走这里。

    if (!item.audioSrc){
        alert("这个假名的音频还没有添加。Audio is not added yet.")
        return;
    }
    // 如果之前已经有音频在播放，就先停掉它。
// pause() = 暂停播放。
// currentTime = 0 表示把旧音频进度拉回开头。
if (currentAudioRef.current) {
  currentAudioRef.current.pause();
  currentAudioRef.current.currentTime = 0;
}

// 创建新的音频对象。
// item.audioSrc 例如：/audio/a.mp3
const audio = new Audio(item.audioSrc);

// 把新的音频存进 currentAudioRef。
// 这样下一次点击别的假名时，我们就能找到它并停止它。
currentAudioRef.current = audio;

// 播放音频。
// catch 用来处理播放失败，比如文件路径写错。
audio.play().catch(() => {
  alert("音频播放失败。请检查 audio 文件路径");
});
  }
  // 用户点击任意假名时，统一播放对应音频。
  function handleKanaClick(item: KanaItem){
    playAudio(item);
  }
  return(
    <main
     style={{
         minHeight: "100vh",
    padding: "16px 20px",
    backgroundColor: "#f6f2e8",
    fontFamily: "Arial, sans-serif",
    color: "#3b241c",
    display: "grid",
    gridTemplateColumns: "240px minmax(0, 1fr)",
    gap: "24px",
    alignItems: "stretch",
     }}>
      <SideNav currentPage="hiragana" language={language}  setLanguage={setLanguage} />
        {/* 
        这个 div 是整个页面的布局容器。
        display: flex 让左侧工具栏和右侧五十音表并排。
      */}
     
         {/* 
          左侧功能栏。
          这里放 5 个按钮/链接。
          注意：
          - 改变模式：用 button
          - 跳转页面：用 Link
        */}
          {/* 
          右侧主内容区域。
          这里只显示 Hiragana 假名总览。
        */}
        <section 
        style={{
            padding:"36px 28px",
            overflowX:"auto",
            overflowY:"auto",
        }}>
                {/* 页面标题区 */}
<div style={{
    maxWidth:"980px",
    margin:"0 auto 28px",
    textAlign:"center",
}}>
    
            <h1
              style={{
                fontSize: "40px",
                color: "#2f2435",
                margin: "0 0 10px",
              }}
            >
              平仮名
            </h1>
           
</div>
  {/* 
            五十音表外层。
            minWidth 保证表格不会在小屏幕被挤坏。
          */}
          <div
  style={{
    minWidth: "680px",
    maxWidth: "980px",
    margin: "0 auto",
  }}
>
  {/* 
    现在数据不是 hiraganaRows，而是 hiraganaSections。
    hiraganaSections 是三个大区块：
    1. Basic Hiragana
    2. Dakuten / Han-dakuten
    3. Combination
  */}
  {/*sections.map = 把数据画到页面上*/}
  {sections.map((section) => (
    <div
      key={section.title}
      style={{
        marginBottom: "42px",
      }}
    >
      {/* 每个区块的标题，比如 Basic Hiragana */}
      <h2
        style={{
          fontSize: "24px",
          color: "#2f2435",
          margin: "0 0 6px",
        }}
      >
        {section.title}
      </h2>

      {/* 每个区块的小解释 */}
      <p
        style={{
          color: "#7a6f7d",
          margin: "0 0 18px",
        }}
      >
        {section.description}
      </p>

      {/* 
        这一块是真正的假名 grid。
        现在每个 section 里面都有自己的 items。
        items 里可能有 null，null 用来占标准五十音表里的空格子。
      */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: section.title.includes("Combination")
            ? "repeat(3, 180px)"
            : "repeat(5, 180px)",
          gap: "18px",
          justifyContent: "center",
        }}
      >
        {section.items.map((item, index) => {
            // 如果 item 是 null，说明这是一个故意留空的格子。
// 比如 や 行：や  空  ゆ  空  よ。
// 这个空 div 不显示内容，但会占住 grid 的位置。
if (item === null) {
  
  return (
    <div
      key={`empty-${section.title}-${index}`}
      style={{
        minHeight: "110px",
      }}
    />
  );
}

         const isSelected = selectedId === item.id; 

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleKanaClick(item)}
              style={{
              minHeight: "110px",
  borderRadius: "26px",
  border: isSelected
    ? "2px solid #c9975b"
    : "1px solid transparent",
  backgroundColor: isSelected
    ? "#f3dfb3"
    : "rgba(255, 255, 255, 0.65)",
  boxShadow: isSelected
    ? "0 12px 24px rgba(139, 94, 52, 0.18)"
    : "0 8px 18px rgba(80, 60, 40, 0.06)",
  cursor: "pointer",
              }}
            >
              {/* 
                现在先显示电脑字体的假名。
                未来你自己画完之后，可以在这里改成 <img>。
              */}
              {item.imageSrc ? (
                // 如果未来这个假名有 imageSrc，就显示你画的图片。
                <img
                  src={item.imageSrc}
                  alt={item.kana}
                  style={{
                    width: "72px",
                    height: "72px",
                    objectFit: "contain",
                  }}
                />
              ) : (
                // 现在没有图片时，就先显示文字假名。
                <span
                  style={{
                    fontSize: "54px",
                    color: "#174a7c",
                    lineHeight: "1",
                    fontWeight: "500",
                  }}
                >
                  {item.kana}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  ))}
</div>
          
        </section>
     
     </main>
  );
}
