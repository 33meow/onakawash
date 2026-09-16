import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import KanaRow from "../../components/KanaRow";
import { hiraganaRows } from "../../data/hiraganaRows";
import styles from "../../components/KanaMap.module.css";

export const metadata: Metadata = {
  title: "ひらがな練習 | Onakawash",
};

export default async function HiraganaRowPage({
  params,
}: {
  params: Promise<{ row: string }>;
}) {
  const { row: rowId } = await params;
  const row = hiraganaRows.find((item) => item.id === rowId);
  if (!row) notFound();

  return (
    <main className={styles.learningPage}>
      <header className={styles.learningHeader}>
        <Link href="/hiragana-map" className={styles.backLink}>
          <span aria-hidden="true">←</span> マップへ戻る
        </Link>
        <h1 lang="ja">{row.label}</h1>
        <span className={styles.eyebrow}>ONAKAWASH</span>
      </header>
      <div className={styles.learningCards}>
        <KanaRow key={row.id} row={row} />
      </div>
    </main>
  );
}
