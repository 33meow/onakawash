// 这一行必须有
// 因为这个页面用了点击事件 onClick 和 Audio 播放音频
// 这些都需要在浏览器端运行
"use client";

import Link from "next/link";

// useRouter 用来在函数里控制跳转。
// 这里用于：详情模式下，点击假名后跳到 /hiragana/a 这种详情页。
import { useRouter } from "next/navigation";

// useState 是 React 用来记录页面状态的工具
// 这里用来记录“用户刚刚点了哪个假名”
import { useState } from "react";

// 导入 Hiragana 数据。
import { katakanaSections, type KatakanaItem } from "@/data/katakanaData";

// Mode 是我们自己定义的类型。
// 它表示当前页面模式只能是这两个值之一：
// "sound" = 声音模式
// "detail" = 详情模式
type Mode = "sound" | "detail";

export default function KatakanaPage(){
     // router.push("/xxx") 可以让页面跳到某个地址。
     const router = useRouter();
     // mode 记录当前模式。
  // 默认是 "sound"，也就是用户一进来先是声音模式。
  const [mode, setMode] = useState<Mode>("sound");
  // selectedId 记录刚刚被用户点过的假名。
  // 这个不是必须功能，但可以用来给被点过的假名加一点高亮。
  const [selectedId, setSelectedId] = useState<string | null>(null);
   // playAudio 是播放音频的函数。
  // 参数 item 就是用户点击的那个假名。
  function playAudio(item: KatakanaItem){
    // 记录用户点了哪个假名。
    setSelectedId(item.id);

    // 如果这个假名还没有 audioSrc，就先提醒一下。
    // 现在只有 あいうえお 有录音的话，其他假名就会走这里。

    if (!item.audioSrc){
        alert("这个假名的音频还没有添加。Audio is not added yet.")
        return;
    }
     // 创建音频对象。
    // item.audioSrc 例如：/audio/a.mp3
    const audio = new Audio(item.audioSrc);
    // 播放音频。
    // catch 用来处理播放失败，比如文件路径写错。
    audio.play().catch(() =>{
        alert("音频播放失败。请检查 audio 文件路径");
    });
  }
  // handleKanaClick 是点击假名时执行的总函数。
  // 它会根据当前 mode 决定行为。
  function handleKanaClick(item: KatakanaItem){
     // 如果当前是声音模式：
    // 点假名只播放声音，不跳转。
    if (mode === "sound"){
        playAudio(item);
        return;
    }
    // 如果当前是详情模式：
    // 点假名跳转到详情页。
    // 例如 あ 的 id 是 a，所以跳到 /hiragana/a。
    if (mode === "detail"){
        router.push(`/katakana/${item.id}`);
    }
  }
  return(
    <main
     style={{
        minHeight:"100vh",
        background:"linear-gradient(180deg, #fff7fb 0%, #f7fbff 100%)",
        fontFamily:"Arial, sans-serif",
     }}>
        {/* 
        这个 div 是整个页面的布局容器。
        display: flex 让左侧工具栏和右侧五十音表并排。
      */}
      <div style={{
        display:"flex",
        minHeight:"100vh",
      }}>
         {/* 
          左侧功能栏。
          这里放 5 个按钮/链接。
          注意：
          - 改变模式：用 button
          - 跳转页面：用 Link
        */}<aside style={{
            width:"180px",
            height:"100vh",
            position:"sticky",
            top:0,
            flexShrink:"auto",
            padding:"28px 18px",
            backgroundColor:"rgba(255,255,255,0.78)",
            borderRight:"1px solid rgba(243,182,208,0.7)",
            boxShadow:"8px 0 24px rgba(100, 60, 120, 0.06)",
        }}>
                {/* 左侧栏标题 */}
                <p style={{
                    fontSize:"14px",
                    color:"#b83280",
                    fontWeight:"800",
                    margin:"0 0 18px",
                }}>模式转化Mode</p>
                  {/* 
            声音模式按钮。
            它不是跳转页面，所以用 button。
          */}
          <button type="button"
          onClick={()=>setMode("sound")}
          style={{
            width:"100%",
            padding:"12px 14px",
            borderRadius:"16px",
            border:
             mode === "sound"
             ?"2px solid #d85b9f"
             :"1px solid #ead6e4",
             backgroundColor:mode === "sound"?"#fff0f6":"white",
             color:"#7a2e5d",
             fontWeight:"800",
             cursor:"pointer",
             marginBottom:"12px",
             textAlign:"left",

          }}>🔊 声音</button>
          
          {/* 
            详情模式按钮。
            它也不是直接跳转页面。
            它只是把当前模式改成 detail。
            真正跳转发生在用户点击某个假名的时候。
          */}
          <button
            type="button"
            onClick={() => setMode("detail")}
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: "16px",
              border:
                mode === "detail"
                  ? "2px solid #8b5cf6"
                  : "1px solid #ead6e4",
              backgroundColor: mode === "detail" ? "#f4eef6" : "white",
              color: "#5b3aa0",
              fontWeight: "800",
              cursor: "pointer",
              marginBottom: "12px",
              textAlign: "left",
            }}
          >
            📖 详情
          </button>
  {/* 
            Katakana 入口。
            这是页面跳转，所以用 Link。
            现在 /katakana 还没做，先可以跳过去，之后再补页面。
            如果你不想现在出现 404，也可以先把 href 改成 "#"。
          */}
          <Link
            href="hiragana"
            style={{
              display: "block",
              padding: "12px 14px",
              borderRadius: "16px",
              border: "1px solid #dce7f8",
              backgroundColor: "white",
              color: "#174a7c",
              fontWeight: "800",
              textDecoration: "none",
              marginBottom: "12px",
            }}
          >
            あ Hiragana
          </Link>
             {/* 跳到 intro 页面 */}
          <Link
            href="/intro"
            style={{
              display: "block",
              padding: "12px 14px",
              borderRadius: "16px",
              border: "1px solid #ead6e4",
              backgroundColor: "white",
              color: "#7a2e5d",
              fontWeight: "800",
              textDecoration: "none",
              marginBottom: "12px",
            }}
          >
            🗺️ Intro
          </Link>
  {/* 跳回首页 */}
          <Link
            href="/"
            style={{
              display: "block",
              padding: "12px 14px",
              borderRadius: "16px",
              border: "1px solid #ead6e4",
              backgroundColor: "white",
              color: "#7a2e5d",
              fontWeight: "800",
              textDecoration: "none",
            }}
          >
            🏠 Home
          </Link>
           {/* 
            当前模式提示。
            只是给你调试和用户提示用。
          */}
          <p
            style={{
              marginTop: "24px",
              fontSize: "13px",
              color: "#9a8fa0",
              lineHeight: "1.5",
            }}
          >
            Current: {mode === "sound" ? "sound mode" : "detail mode"}
          </p>
        </aside>
          {/* 
          右侧主内容区域。
          这里只显示 Hiragana 假名总览。
        */}
        <section 
        style={{
            flex:1,
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
     <p
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: "999px",
                backgroundColor: "#fff0f6",
                color: "#b83280",
                fontWeight: "800",
                fontSize: "14px",
                margin: "0 0 14px",
              }}
            >
              Katakana only
            </p>
            <h1
              style={{
                fontSize: "40px",
                color: "#2f2435",
                margin: "0 0 10px",
              }}
            >
              片仮名
            </h1>
             <p
              style={{
                color: "#7a6f7d",
                margin: 0,
              }}
            >
              {mode === "sound"
                ? "Click any kana to hear the sound."
                : "Click any kana to open its detail page."}
            </p>
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
  {katakanaSections.map((section) => (
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
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "18px",
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

          // 判断这个假名是不是刚刚被点过。
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
                  ? "2px solid #d85b9f"
                  : "1px solid transparent",
                backgroundColor: isSelected
                  ? "#fff0f6"
                  : "rgba(255,255,255,0.65)",
                boxShadow: isSelected
                  ? "0 12px 24px rgba(216, 91, 159, 0.18)"
                  : "0 8px 18px rgba(80, 60, 90, 0.06)",
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
      </div>
     </main>
  );
}