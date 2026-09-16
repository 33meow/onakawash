"use client";

import { useState } from "react";
import KanaRow from "../components/KanaRow";
import { hiraganaRows } from "../data/hiraganaRows";

export default function CardTestPage() {
  const [rowId, setRowId] = useState("ta");
  const row = hiraganaRows.find((item) => item.id === rowId)!;

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
      <label style={{ marginBottom: 24 }}>
        平假名行{" "}
        <select value={rowId} onChange={(event) => setRowId(event.target.value)}>
          {hiraganaRows.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}：{item.cards.map((card) => card.kana).join(" ")}
            </option>
          ))}
        </select>
      </label>
      <KanaRow row={row} />
    </main>
  );
}
