declare module "kuroshiro" {
  export type KuroshiroConvertOptions = {
    to?: "hiragana" | "katakana" | "romaji";
    mode?: "normal" | "spaced" | "okurigana" | "furigana";
    romajiSystem?: string;
    delimiter_start?: string;
    delimiter_end?: string;
  };

  export default class Kuroshiro {
    init(analyzer: unknown): Promise<void>;

    convert(
      text: string,
      options?: KuroshiroConvertOptions
    ): Promise<string>;
  }
}

declare module "kuroshiro-analyzer-kuromoji" {
  type KuromojiAnalyzerOptions = {
    dictPath?: string;
  };

  export default class KuromojiAnalyzer {
    constructor(options?: KuromojiAnalyzerOptions);
  }
}