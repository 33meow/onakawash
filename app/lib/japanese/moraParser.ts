const COMBINING_SMALL_KANA = new Set([
  // Hiragana
  "ぁ",
  "ぃ",
  "ぅ",
  "ぇ",
  "ぉ",
  "ゃ",
  "ゅ",
  "ょ",
  "ゎ",

  // Katakana
  "ァ",
  "ィ",
  "ゥ",
  "ェ",
  "ォ",
  "ャ",
  "ュ",
  "ョ",
  "ヮ",
]);

/**
 * Splits a kana reading into Japanese morae.
 *
 * Examples:
 * あめ       -> ["あ", "め"]
 * きょう     -> ["きょ", "う"]
 * がっこう   -> ["が", "っ", "こ", "う"]
 * ほん       -> ["ほ", "ん"]
 * コーヒー   -> ["コ", "ー", "ヒ", "ー"]
 */
export function parseMorae(reading: string): string[] {
  const normalized = reading
    .normalize("NFC")
    .trim()
    .replace(/\s+/g, "");

  if (!normalized) {
    return [];
  }

  const morae: string[] = [];

  for (const char of normalized) {
    if (COMBINING_SMALL_KANA.has(char)) {
      if (morae.length === 0) {
        throw new Error(
          `Invalid reading: small kana "${char}" cannot start a mora.`,
        );
      }

      morae[morae.length - 1] += char;
      continue;
    }

    morae.push(char);
  }

  return morae;
}