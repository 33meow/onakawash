"use client";

import { useEffect, useRef, useState } from "react";

type StrokeOrderPlayerProps = {
  src: string;
  size?: number;

  // 外部可配置
  strokeWidth?: number;
  color?: string;
};

export default function StrokeOrderPlayer({
  src,
  size = 400,

  // 默认值
  strokeWidth = 5,
  color = "#555555",
}: StrokeOrderPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadSvg() {
      try {
        setIsLoaded(false);
        setError("");

        const response = await fetch(src);

        if (!response.ok) {
          throw new Error(`Failed to load SVG: ${response.status}`);
        }

        const svgText = await response.text();

        if (cancelled || !containerRef.current) return;

        containerRef.current.innerHTML = svgText;

        const svg = containerRef.current.querySelector("svg");

        if (!svg) {
          throw new Error("SVG element not found.");
        }

        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "100%");
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

        const paths = getStrokePaths();

        if (paths.length === 0) {
          throw new Error(
            'No paths with ids like "stroke-1" were found.'
          );
        }

        // 初始化所有笔画
        paths.forEach((path) => {
          const length = path.getTotalLength();

          path.style.fill = "none";

          // 👇 不再写死
          path.style.stroke = color;
          path.style.strokeWidth = String(strokeWidth);

          path.style.strokeLinecap = "round";
          path.style.strokeLinejoin = "round";

          path.style.strokeDasharray = `${length}`;
          path.style.strokeDashoffset = `${length}`;
        });

        setIsLoaded(true);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load SVG."
        );
      }
    }

    loadSvg();

    return () => {
      cancelled = true;
    };
  }, [src, strokeWidth, color]);

  function getStrokePaths() {
    if (!containerRef.current) return [];

    const paths = Array.from(
      containerRef.current.querySelectorAll<SVGPathElement>(
        'path[id^="stroke-"]'
      )
    );

    paths.sort((a, b) => {
      const aNumber = Number(a.id.replace("stroke-", ""));
      const bNumber = Number(b.id.replace("stroke-", ""));

      return aNumber - bNumber;
    });

    return paths;
  }

  async function play() {
    if (isPlaying) return;

    const paths = getStrokePaths();

    if (paths.length === 0) {
      setError("No stroke paths found.");
      return;
    }

    setIsPlaying(true);
    setError("");

    // 先隐藏所有笔画
    paths.forEach((path) => {
      path.getAnimations().forEach((animation) => animation.cancel());

      const length = path.getTotalLength();

      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });

    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => resolve());
      });
    });

    try {
      // 按 stroke-1 → stroke-2 → ... 播放
      for (const path of paths) {
        const length = path.getTotalLength();

        const animation = path.animate(
          [
            {
              strokeDashoffset: `${length}`,
            },
            {
              strokeDashoffset: "0",
            },
          ],
          {
            duration: 700,
            easing: "ease-in-out",
            fill: "forwards",
          }
        );

        await animation.finished;

        path.style.strokeDashoffset = "0";
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsPlaying(false);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
      }}
    >
      <div
        ref={containerRef}
        style={{
          width: size,
          height: size,
        }}
      />

      {error && (
        <p style={{ color: "crimson" }}>
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={play}
        disabled={!isLoaded || isPlaying}
      >
        {isPlaying ? "Playing..." : "▶ Play"}
      </button>
    </div>
  );
}