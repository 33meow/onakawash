"use client";

import StrokeOrderPlayer from "./StrokeOrderPlayer";
import KanaAudioButton from "./KanaAudioButton";
import FuriganaText from "./FuriganaText";
import PitchLine from "./PitchLine";

export type VocabularyItem = {
  word: string;
  reading: string;
  meaning: string;

  // Tokyo pitch accent
  accent?: number;

  imageSrc?: string;
};

export type KanaCardData = {
  id: string;
  kana: string;
  romaji?: string;
  audioSrc?: string;
  strokeSrc?: string;

  vocabulary?: VocabularyItem[];
};

type KanaFlipCardProps = {
  data: KanaCardData;
  flipped: boolean;
};

export default function KanaFlipCard({
  data,
  flipped,
}: KanaFlipCardProps) {
  return (
    <div
      className="kana-flip-card-shell"
      style={{
        perspective: 1400,
      }}
    >
      {/* 真正负责翻转的层 */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",

          transformStyle: "preserve-3d",

          // 一圈半，最后停在背面
          transform: flipped
            ? "rotateY(540deg)"
            : "rotateY(0deg)",

          transition:
            "transform 900ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* ================= FRONT ================= */}
        <div
          style={{
            position: "absolute",
            inset: 0,

            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",

            background: "#ffffff",
            border: "2px solid #e5e5e5",
            borderRadius: 28,

            boxShadow: `
              0 7px 0 #d8d8d8,
              0 20px 45px rgba(0,0,0,0.10)
            `,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            fontSize: 180,
          }}
        >
          {data.kana}
        </div>

        {/* ================= BACK ================= */}
        <div
          style={{
            position: "absolute",
            inset: 0,

            // ⚠️ 这一句就是你现在镜像问题的关键
            transform: "rotateY(180deg)",

            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",

            background: "#ffffff",
            border: "2px solid #e5e5e5",
            borderRadius: 28,

            boxShadow: `
              0 7px 0 #d8d8d8,
              0 20px 45px rgba(0,0,0,0.10)
            `,

            overflow: "hidden",
          }}
        >
          <div className="kana-card-back-layout">
            {/* LEFT */}
            <section className="kana-card-learning-panel">
              <div className="kana-card-reading">
                <div className="kana-card-romaji">
                  {data.romaji}
                </div>

                <KanaAudioButton
                  src={data.audioSrc}
                  label="Play sound"
                />
              </div>

              {data.strokeSrc && (
                <div className="kana-card-stroke">
                  <StrokeOrderPlayer
                    src={data.strokeSrc}
                    size={300}
                    strokeWidth={5}
                    color="#555555"
                  />
                </div>
              )}
            </section>

            {/* RIGHT：以后再放内容 */}
            <section className="kana-card-extra-panel">
  <div className="kana-vocabulary-list">
    {data.vocabulary?.map((item) => (
<div
  className="kana-vocabulary-item"
  key={item.word}
>
  <div className="kana-vocabulary-word">
    <FuriganaText text={item.word} />
  </div>

  <div className="kana-vocabulary-pitch-cell">
    {item.accent !== undefined && (
      <PitchLine
        reading={item.reading}
        accent={item.accent}
        showAccentNumber={true}
        showContinuation={true}
        className="kana-vocabulary-pitch"
      />
    )}
  </div>

  <div className="kana-vocabulary-meaning">
    {item.meaning}
  </div>
</div>
))}
  </div>
</section>
          </div>
        </div>
      </div>
    </div>
  );
}