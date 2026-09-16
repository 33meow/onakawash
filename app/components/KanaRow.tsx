"use client";

import { useEffect, useRef, useState } from "react";
import type { KanaRowData } from "../data/hiraganaRows";
import KanaCardDeck from "./KanaCardDeck";
import KanaFlipCard, { type KanaCardData } from "./KanaFlipCard";

export default function KanaRow({ row }: { row: KanaRowData }) {
  const [currentRow, setCurrentRow] = useState(row);
  const [selectedCard, setSelectedCard] = useState(row.cards[0]);
  const [flipKey, setFlipKey] = useState(0);
  const autoPlayedIds = useRef(new Set<string>());
  const currentAudio = useRef<HTMLAudioElement | null>(null);

  // Reset selection before rendering a new row; keep first-click history.
  if (currentRow !== row) {
    setCurrentRow(row);
    setSelectedCard(row.cards[0]);
    setFlipKey(0);
  }

  useEffect(() => () => currentAudio.current?.pause(), []);

  function selectCard(card: KanaCardData) {
    if (card.audioSrc && !autoPlayedIds.current.has(card.id)) {
      currentAudio.current?.pause();
      const audio = new Audio(card.audioSrc);
      currentAudio.current = audio;
      audio.play().catch((error) => {
        console.error("Failed to play kana audio:", error);
      });
      autoPlayedIds.current.add(card.id);
    }
    setSelectedCard(card);
    setFlipKey((current) => current + 1);
  }

  return (
    <>
      <KanaCardDeck
        cards={row.cards}
        selectedId={selectedCard?.id}
        onSelect={selectCard}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingBottom: 80,
        }}
      >
        {selectedCard && (
          <KanaFlipCard
            key={`${row.id}-${flipKey}`}
            data={selectedCard}
            flipped
          />
        )}
      </div>
    </>
  );
}
