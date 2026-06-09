// "use client" 的意思是：这个页面组件需要在浏览器端运行。
// 因为点击事件 onClick 和播放音频 Audio(...) 都需要浏览器。
"use client"

// useState = React 用来记住页面状态的工具
import { useState } from "react";

import { kanaData } from "@/data/kanaData";

//React component（组件）
//在 Next.js 里，app/kana/page.tsx 这个文件默认就是 /kana 页面
export default function KanaPage() {
     // selectedKana = 当前被用户选中的 kana
  // setSelectedKana = 修改 selectedKana 的函数
  // null 表示：一开始还没有选中任何 kana
  const [selectedKana, setSelectedKana] = useState<(typeof kanaData)[0] | null>(
    null
  );
 
    function playAudio(audioSrc: string) {
    // new Audio(...) = 创建一个音频对象
    const audio = new Audio(audioSrc);

    // .play() = 播放音频
    audio.play();
  }
   // 用户点击某个 kana 时，执行这个函数
  function handleKanaClick(item: (typeof kanaData)[0]) {
    // 1. 播放这个 kana 的音频
    playAudio(item.audioSrc);

    // 2. 记住用户点了哪一个 kana
    setSelectedKana(item);
  }

  return (
    <main>
      <h1>现在开始记忆あ行</h1>

      {/* 这里显示五个 kana 按钮 */}
      <div>
        {kanaData.map((item) => (
          <button key={item.id} onClick={() => handleKanaClick(item)}>
            <span>{item.kana}</span>
            <span>{item.romaji}</span>
          </button>
        ))}
      </div>

      {/* 
        selectedKana && (...) 的意思：
        如果用户已经点了某个 kana，
        就显示下面这一块。
        如果还没点，就不显示。
      */}
      {selectedKana && (
        <section>
          <h2>把 {selectedKana.kana} 放在词语里面</h2>

          {selectedKana.examples.map((example) => (
            <div key={example.japanese}>
              <p>{example.japanese}</p>
              <p>{example.romaji}</p>
              <p>{example.meaning}</p>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}