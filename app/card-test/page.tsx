"use client";
import KanaCardDeck from "../components/KanaCardDeck";
import { useRef, useState } from "react";
import KanaFlipCard, {
  KanaCardData,
} from "../components/KanaFlipCard";

const cards: KanaCardData[] = [
  {
  id: "ta",
  kana: "た",
  romaji: "ta",
  audioSrc: "/audio/ta.mp3",
  strokeSrc: "/strokes/hiragana/ta.svg",

  vocabulary: [
    {
      word: "たこ",
      meaning: "章鱼",
    },
    {
      word: "たまご",
      meaning: "鸡蛋",
    },
    {
      word: "たこ焼き",
      meaning: "章鱼烧",
    },
  ],
},
  {
    id: "chi",
    kana: "ち",
    romaji: "chi",
  },
  {
    id: "tsu",
    kana: "つ",
    romaji: "tsu",
  },
  {
    id: "te",
    kana: "て",
    romaji: "te",
  },
  {
    id: "to",
    kana: "と",
    romaji: "to",
  },
];

export default function CardTestPage() {
  const [selectedCard, setSelectedCard] =
    useState<KanaCardData>(cards[0]);

  const [flipKey, setFlipKey] = useState(0);

  const autoPlayedIds = useRef<Set<string>>(new Set());

 function selectCard(card: KanaCardData) {
  // 第一次真正点击这张卡时自动播放一次
  if (
    card.audioSrc &&
    !autoPlayedIds.current.has(card.id)
  ) {
    const audio = new Audio(card.audioSrc);

    audio.play().catch((error) => {
      console.error("Failed to play kana audio:", error);
    });

    autoPlayedIds.current.add(card.id);
  }

  setSelectedCard(card);

  // 重新触发翻牌动画
  setFlipKey((current) => current + 1);
}

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "48px 60px",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        background: "#f5f6f7",
      }}
    >
    <KanaCardDeck
  cards={cards}
  selectedId={selectedCard.id}
  onSelect={selectCard}
/>

      {/* 下方展示区 */}
    {/* 下方展示区 */}
<div
  style={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingBottom: 80,
  }}
>
  <KanaFlipCard
    key={flipKey}
    data={selectedCard}
    flipped
  />

</div>
    </main>
  );
}