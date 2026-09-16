import type { CSSProperties } from "react";
import Link from "next/link";
import { hiraganaRows } from "../data/hiraganaRows";
import styles from "./KanaMap.module.css";

// Positions describe the journey, never a second set of kana data.
function position(index: number) {
  if (index === 0 || index === hiraganaRows.length - 1) return 50;
  return index % 2 === 1 ? 72 : 28;
}

export default function KanaMap() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <header className={styles.masthead}>
          <span className={styles.wordmark}>onakawash<span aria-hidden="true">.</span></span>
          <span className={styles.edition}>A LITTLE JAPANESE, EVERY DAY</span>
        </header>

        <section className={styles.hero} aria-labelledby="map-title">
          <span className={styles.sparkle} aria-hidden="true" />
          <span className={styles.smallSparkle} aria-hidden="true" />
          <p className={styles.eyebrow}>HIRAGANA MAP</p>
          <h1 id="map-title" lang="ja">ひらがな<span>マップ</span></h1>
          <p className={styles.subtitle} lang="ja">ひとつずつ、ゆっくり覚えよう。</p>
          <div className={styles.heroNote}>
            <span className={styles.dot} aria-hidden="true" />
            <span>ひとつの行から、はじめよう。</span>
          </div>
        </section>

        <nav className={styles.journey} aria-label="平仮名の行を選ぶ" lang="ja">
          <div className={styles.journeyIntro}>
            <span>THE LITTLE JOURNEY</span>
            <span>{String(hiraganaRows.length).padStart(2, "0")} ROWS · {hiraganaRows.reduce((sum, row) => sum + row.cards.length, 0)} SOUNDS</span>
          </div>
          <ol className={styles.stations}>
            {hiraganaRows.map((row, index) => (
              <li
                key={row.id}
                className={styles.station}
                style={{ "--node-x": `${position(index)}%` } as CSSProperties}
              >
                {index < hiraganaRows.length - 1 && (
                  <svg
                    className={styles.connector}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d={`M ${position(index)} 0 C ${position(index)} 50, ${position(index + 1)} 50, ${position(index + 1)} 100`}
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                )}
                <div className={styles.paper}>
                  <Link
                    href={`/hiragana-map/${row.id}`}
                    className={styles.card}
                    aria-label={`${row.label}：${row.cards.map((card) => card.kana).join(" ")}`}
                  >
                    <div className={styles.cardTop}>
                      <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                      <span className={styles.arrow} aria-hidden="true">↗</span>
                    </div>
                    <h2>{row.label}</h2>
                    <div className={styles.characters} aria-hidden="true">
                      {row.cards.map((card) => <span key={card.id}>{card.kana}</span>)}
                    </div>
                  </Link>
                </div>
              </li>
            ))}
          </ol>
          <div className={styles.journeyEnd} aria-hidden="true">
            <span /><span /><span />
          </div>
        </nav>
      </div>

      <footer className={styles.footer}>
        <svg className={styles.wave} viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 22 Q90 0 180 22 T360 22 T540 22 T720 22 T900 22 T1080 22 T1260 22 T1440 22 V40 H0Z" />
        </svg>
        <p className={styles.eyebrow}>ONE LITTLE STEP AT A TIME</p>
        <p className={styles.footerTitle} lang="ja">ひらがな、ここまで。</p>
        <span className={styles.footerMark}>onakawash.</span>
      </footer>
    </main>
  );
}
