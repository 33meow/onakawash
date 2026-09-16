"use client";

import { useEffect, useState } from "react";

import {
  generateFurigana,
  hasKanji,
} from "../lib/japanese/furiganaClient";

type FuriganaTextProps = {
  text: string;
  className?: string;
};

export default function FuriganaText({
  text,
  className,
}: FuriganaTextProps) {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    if (!hasKanji(text)) {
      setHtml(null);
      return;
    }

    async function annotate() {
      try {
        const result = await generateFurigana(text);

        if (!cancelled) {
          setHtml(result);
        }
      } catch (error) {
        console.error(
          "Failed to generate furigana:",
          error
        );

        if (!cancelled) {
          setHtml(null);
        }
      }
    }

    annotate();

    return () => {
      cancelled = true;
    };
  }, [text]);

  // 没汉字：普通文字直接显示
  if (!hasKanji(text)) {
    return (
      <span className={className}>
        {text}
      </span>
    );
  }

  // 有汉字但还在加载
  if (!html) {
    return (
      <span className={className}>
        {text}
      </span>
    );
  }

  // Kuroshiro 已经生成 ruby HTML
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}