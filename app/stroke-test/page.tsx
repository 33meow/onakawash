"use client";

import { useState } from "react";
import StrokeOrderPlayer from "../components/StrokeOrderPlayer";

const widths = [3, 5, 8, 12];

const colors = [
  "#555555",
  "#4A90E2",
  "#E785A5",
  "#78A083",
];

export default function StrokeTestPage() {
  const [widthIndex, setWidthIndex] = useState(1);
  const [colorIndex, setColorIndex] = useState(0);

  const strokeWidth = widths[widthIndex];
  const color = colors[colorIndex];

  function changeWidth() {
    setWidthIndex((current) => (current + 1) % widths.length);
  }

  function changeColor() {
    setColorIndex((current) => (current + 1) % colors.length);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 24,
      }}
    >
      <StrokeOrderPlayer
        src="/strokes/hiragana/ta.svg"
        size={400}
        strokeWidth={strokeWidth}
        color={color}
      />

      <div
        style={{
          display: "flex",
          gap: 12,
        }}
      >
        <button
          type="button"
          onClick={changeWidth}
          style={{
            padding: "10px 16px",
            borderRadius: 10,
            border: "1px solid #ddd",
            background: "white",
            cursor: "pointer",
          }}
        >
          Line {strokeWidth}px
        </button>

        <button
          type="button"
          onClick={changeColor}
          style={{
            padding: "10px 16px",
            borderRadius: 10,
            border: "1px solid #ddd",
            background: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: color,
              display: "inline-block",
            }}
          />

          Color
        </button>
      </div>
    </main>
  );
}