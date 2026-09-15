import styles from "./PitchLine.module.css";

import { parseMorae } from "../lib/japanese/moraParser";
import {
  calculateTokyoPitch,
  type PitchLevel,
} from "../lib/japanese/tokyoPitchCalculator";

type PitchLineProps = {
  reading: string;
  accent: number;

  /**
   * Optional one-mora particle.
   * Recommended for basic particles such as:
   * が / は / を
   */
showContinuation?: boolean;

  showAccentNumber?: boolean;
  className?: string;
};

const GAP = 44;
const PADDING_X = 20;

const HIGH_Y = 20;
const LOW_Y = 50;
const TEXT_Y = 78;

function levelToY(level: PitchLevel): number {
  return level === "H" ? HIGH_Y : LOW_Y;
}

export default function PitchLine({
  reading,
  accent,
  showAccentNumber = true,
  showContinuation = true,
  className,
}: PitchLineProps) {
  const morae = parseMorae(reading);

  if (morae.length === 0) {
    return null;
  }



  
  const pitch = calculateTokyoPitch(
    morae,
    accent,
   
  );

 const labels = [...morae];

const levels: PitchLevel[] = pitch.word;

 const width =
  PADDING_X * 2 +
  Math.max(labels.length - 1, 0) * GAP +
  (showContinuation ? GAP : 0);

  const height = 92;

  const getX = (index: number) =>
    PADDING_X + index * GAP;

  const points = levels
    .map((level, index) => {
      const x = getX(index);
      const y = levelToY(level);

      return `${x},${y}`;
    })
    .join(" ");

 
  const rootClassName = [
    styles.root,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <figure
      className={rootClassName}
      aria-label={`${reading} Tokyo pitch accent type ${accent}`}
    >
      {showAccentNumber && (
        <figcaption className={styles.caption}>
          [{accent}]
        </figcaption>
      )}

     <svg
  className={styles.svg}
  width={width}
  height={height}
  viewBox={`0 0 ${width} ${height}`}
  role="img"
  aria-hidden="true"
>
        {levels.length > 1 && (
          <polyline
            points={points}
            className={styles.pitchLine}
          />
        )}

        {showContinuation && (
  <>
    <line
      x1={getX(morae.length - 1)}
      y1={levelToY(pitch.word[morae.length - 1])}
      x2={getX(morae.length - 1) + GAP}
      y2={levelToY(pitch.continuation)}
      className={styles.continuationLine}
    />

    <circle
      cx={getX(morae.length - 1) + GAP}
      cy={levelToY(pitch.continuation)}
      r={4}
      className={styles.continuationPoint}
    />
  </>
)}

      

        {levels.map((level, index) => {
          const x = getX(index);
          const y = levelToY(level);

          return (
            <g key={`${labels[index]}-${index}`}>
              <circle
                cx={x}
                cy={y}
                r={4}
                className={styles.pitchPoint}
              />

              <text
                x={x}
                y={TEXT_Y}
                textAnchor="middle"
              className={styles.moraLabel}
              >
                {labels[index]}
              </text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}