"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import type { KanaCardData } from "./KanaFlipCard";

type KanaCardDeckProps = {
  cards: KanaCardData[];
  selectedId?: string;
  onSelect: (card: KanaCardData) => void;
};

const widePositions = [
  { x: -392, y: 0, rotate: 0, scale: 1 },
  { x: -196, y: 0, rotate: 0, scale: 1 },
  { x: 0, y: 0, rotate: 0, scale: 1 },
  { x: 196, y: 0, rotate: 0, scale: 1 },
  { x: 392, y: 0, rotate: 0, scale: 1 },
];

const fanPositions = [
  { x: 0, y: 0, rotate: 0, scale: 1 },
  { x: -52, y: 12, rotate: -5, scale: 0.99 },
  { x: 52, y: 12, rotate: 5, scale: 0.99 },
  { x: -96, y: 28, rotate: -10, scale: 0.97 },
  { x: 96, y: 28, rotate: 10, scale: 0.97 },
];

export default function KanaCardDeck({
  cards,
  selectedId,
  onSelect,
}: KanaCardDeckProps) {
  const [deck, setDeck] = useState(cards);
  
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1050px)");

    const update = () => {
      setIsCompact(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

useEffect(() => {
  setDeck(cards);
}, [isCompact, cards]);

  function handleCardClick(card: KanaCardData, index: number) {
    // 牌堆状态只能点最前面
    if (isCompact && index !== 0) return;

    onSelect(card);

    // 窄屏：最前面的牌移动到最后
    if (isCompact) {
      setDeck((current) => [
        ...current.slice(1),
        current[0],
      ]);
    }
  }
const visibleCards = isCompact ? deck : cards;
  return (
    <div className="kana-card-deck">
      {visibleCards.map((card, index) => {
        const position = isCompact
          ? fanPositions[index]
          : widePositions[index];

        return (
          <motion.button
            key={card.id}
            type="button"
            onClick={() => handleCardClick(card, index)}
            className={`kana-small-card ${
              selectedId === card.id ? "selected" : ""
            }`}
            animate={{
              x: position.x,
              y: position.y,
              rotate: position.rotate,
              scale: position.scale,
            }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 26,
              mass: 0.85,
            }}
            whileHover={
              !isCompact || index === 0
                ? {
                    y: position.y - 8,
                    scale: position.scale * 1.04,
                  }
                : undefined
            }
            whileTap={
              !isCompact || index === 0
                ? {
                    scale: position.scale * 0.97,
                  }
                : undefined
            }
            style={{
              zIndex: 10 - index,
              pointerEvents:
                isCompact && index !== 0
                  ? "none"
                  : "auto",
            }}
          >
            {card.kana}
          </motion.button>
        );
      })}
    </div>
  );
}