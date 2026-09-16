"use client";

import { useRef } from "react";

type KanaAudioButtonProps = {
  src?: string;
  label?: string;
};

export default function KanaAudioButton({
  src,
  label = "Play sound",
}: KanaAudioButtonProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  function playSound() {
    const audio = audioRef.current;

    if (!audio || !src) return;

    audio.currentTime = 0;

    audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });
  }

  return (
    <>
      <audio
        ref={audioRef}
        preload="auto"
      >
        {src && (
          <source
            src={src}
            type="audio/mpeg"
          />
        )}
      </audio>

      <button
        type="button"
        onClick={playSound}
        disabled={!src}
        className="kana-audio-button"
      >
        🔊 {label}
      </button>
    </>
  );
}