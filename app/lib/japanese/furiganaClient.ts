import type KuroshiroType from "kuroshiro";

let kuroshiroPromise: Promise<KuroshiroType> | null = null;

/**
 * 判断文字中有没有汉字。
 *
 * 没有汉字：
 * たこ → 直接显示
 *
 * 有汉字：
 * たこ焼き → 才启动 Kuroshiro
 */
export function hasKanji(text: string): boolean {
  return /[\p{Script=Han}々〆ヵヶ]/u.test(text);
}

async function getKuroshiro(): Promise<KuroshiroType> {
  if (!kuroshiroPromise) {
    kuroshiroPromise = (async () => {
      const [
        kuroshiroModule,
        analyzerModule,
      ] = await Promise.all([
        import("kuroshiro"),
        import("kuroshiro-analyzer-kuromoji"),
      ]);

      const Kuroshiro = kuroshiroModule.default;
      const KuromojiAnalyzer = analyzerModule.default;

      const kuroshiro = new Kuroshiro();

      await kuroshiro.init(
        new KuromojiAnalyzer({
          dictPath: "/kuromoji/",
        })
      );

      return kuroshiro;
    })();
  }

  return kuroshiroPromise;
}

export async function generateFurigana(
  text: string
): Promise<string> {
  if (!hasKanji(text)) {
    return text;
  }

  const kuroshiro = await getKuroshiro();

  return kuroshiro.convert(text, {
    to: "hiragana",
    mode: "furigana",
  });
}