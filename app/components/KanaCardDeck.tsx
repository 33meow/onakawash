"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import type { KanaCardData } from "./KanaFlipCard";

type KanaCardDeckProps = {
  cards: KanaCardData[];
  selectedId?: string;
  onSelect: (card: KanaCardData) => void;
};

function getPositions(count: number, compact: boolean) {
  const positions = Array.from({ length: count }, (_, index) => {
    if (!compact) {
      return { x: (index - (count - 1) / 2) * 196, y: 0, rotate: 0, scale: 1 };
    }
    const depth = Math.ceil(index / 2);
    const side = index % 2 === 1 ? -1 : 1;
    return {
      x: depth === 0 ? 0 : side * (52 + (depth - 1) * 44),
      y: depth === 0 ? 0 : 12 + (depth - 1) * 16,
      rotate: side * depth * 5,
      scale: depth === 0 ? 1 : 0.99 - (depth - 1) * 0.02,
    };
  });
  if (!compact || count === 0) return positions;

  // Center the actual card bounds, including the asymmetric two-card fan.
  const halfWidths = positions.map(({ rotate, scale }) => {
    const angle = Math.abs(rotate) * Math.PI / 180;
    return (170 * Math.cos(angle) + 220 * Math.sin(angle)) * scale / 2;
  });
  const left = Math.min(...positions.map((p, i) => p.x - halfWidths[i]));
  const right = Math.max(...positions.map((p, i) => p.x + halfWidths[i]));
  return positions.map((p) => ({ ...p, x: p.x - (left + right) / 2 }));
}

export default function KanaCardDeck({
  cards,
  selectedId,
  onSelect,
}: KanaCardDeckProps) {
  const [deck, setDeck] = useState(cards);
  
  const [isCompact, setIsCompact] = useState(false);
  const [previousCards, setPreviousCards] = useState(cards);
  const [previousCompact, setPreviousCompact] = useState(isCompact);

  if (previousCards !== cards || previousCompact !== isCompact) {
    setPreviousCards(cards);
    setPreviousCompact(isCompact);
    setDeck(cards);
  }

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
  const positions = getPositions(visibleCards.length, isCompact);
  return (
    <div className="kana-card-deck">
      {visibleCards.map((card, index) => {
        const position = positions[index];

        return (
          <motion.button
            key={card.id}
            type="button"
            tabIndex={isCompact && index !== 0 ? -1 : 0}
            aria-pressed={selectedId === card.id}
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
