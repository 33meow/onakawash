// 这个文件只负责存 Katakana 的数据
// 现在先不放 examples，也不放 meaning。
// 页面会 import 这里的数据，然后自动生成表格

// export type 的意思是：导出一个 TypeScript 类型
export type KatakanaItem={
     // id 是这个假名的唯一名字
  // 以后做详情页时，网址会用它
  // 例如 id: "a" → /katakana/a
  id: string;
    // kana 是真正显示出来的平假名
  // 例如 "あ"
  kana:string;

  // romaji /ˈroʊmədʒi/ = 罗马字。
  // 比如 あ = a, きゃ = kya。
  romaji: string;
  
   // audioSrc 是音频地址
  // ? 表示这个属性可以没有
  // 因为你现在可能只录了 あいうえお，不一定每个音都有 mp3
  audioSrc?:string;

  // 未来你自己画假名之后，可以加这个字段。
  // 比如 imageSrc: "/hiragana/a.png"
  // 现在先不用。
  imageSrc?: string;

};

export type KatakanaSection = {
  // 每一组的英文名字，比如 Basic Hiragana。
  title: string;

  // 简短解释，页面上可以显示，也可以以后再用。
  description: string;

  // 这一组里面有哪些假名。
  // null 表示这个格子故意空着，用来保持标准五十音表的位置。
  items: (KatakanaItem | null)[];
};

export const katakanaSections: KatakanaSection[] = [
  {
    title: "Basic Katakana",
    description: "The basic katakana sounds.",
    items: [
  { id: "a", kana: "ア", romaji: "a", audioSrc: "/audio/a.mp3" },
  { id: "i", kana: "イ", romaji: "i", audioSrc: "/audio/i.mp3" },
  { id: "u", kana: "ウ", romaji: "u", audioSrc: "/audio/u.mp3" },
  { id: "e", kana: "エ", romaji: "e", audioSrc: "/audio/e.mp3" },
  { id: "o", kana: "オ", romaji: "o", audioSrc: "/audio/o.mp3" },

  { id: "ka", kana: "カ", romaji: "ka" },
  { id: "ki", kana: "キ", romaji: "ki" },
  { id: "ku", kana: "ク", romaji: "ku" },
  { id: "ke", kana: "ケ", romaji: "ke" },
  { id: "ko", kana: "コ", romaji: "ko" },

  { id: "sa", kana: "サ", romaji: "sa" },
  { id: "si", kana: "シ", romaji: "si" },
  { id: "su", kana: "ス", romaji: "su" },
  { id: "se", kana: "セ", romaji: "se" },
  { id: "so", kana: "ソ", romaji: "so" },

  { id: "ta", kana: "タ", romaji: "ta" },
  { id: "ti", kana: "チ", romaji: "ti" },
  { id: "tu", kana: "ツ", romaji: "tu" },
  { id: "te", kana: "テ", romaji: "te" },
  { id: "to", kana: "ト", romaji: "to" },

  { id: "na", kana: "ナ", romaji: "na" },
  { id: "ni", kana: "ニ", romaji: "ni" },
  { id: "nu", kana: "ヌ", romaji: "nu" },
  { id: "ne", kana: "ネ", romaji: "ne" },
  { id: "no", kana: "ノ", romaji: "no" },

  { id: "ha", kana: "ハ", romaji: "ha" },
  { id: "hi", kana: "ヒ", romaji: "hi" },
  { id: "hu", kana: "フ", romaji: "hu" },
  { id: "he", kana: "ヘ", romaji: "he" },
  { id: "ho", kana: "ホ", romaji: "ho" },

  { id: "ma", kana: "マ", romaji: "ma" },
  { id: "mi", kana: "ミ", romaji: "mi" },
  { id: "mu", kana: "ム", romaji: "mu" },
  { id: "me", kana: "メ", romaji: "me" },
  { id: "mo", kana: "モ", romaji: "mo" },

  { id: "ya", kana: "ヤ", romaji: "ya" },
  null,
  { id: "yu", kana: "ユ", romaji: "yu" },
  null,
  { id: "yo", kana: "ヨ", romaji: "yo" },

  { id: "ra", kana: "ラ", romaji: "ra" },
  { id: "ri", kana: "リ", romaji: "ri" },
  { id: "ru", kana: "ル", romaji: "ru" },
  { id: "re", kana: "レ", romaji: "re" },
  { id: "ro", kana: "ロ", romaji: "ro" },

  { id: "wa", kana: "ワ", romaji: "wa" },
  null,
  null,
  null,
  { id: "wo", kana: "ヲ", romaji: "wo" },

  null,
  null,
  { id: "n", kana: "ン", romaji: "n" },
  null,
  null,
],
  },

   {
    title: "Dakuten / Han-dakuten",
    description: "Sounds with dakuten or han-dakuten marks.",
    items: [
      { id: "ga", kana: "ガ", romaji: "ga" },
      { id: "gi", kana: "ギ", romaji: "gi" },
      { id: "gu", kana: "グ", romaji: "gu" },
      { id: "ge", kana: "ゲ", romaji: "ge" },
      { id: "go", kana: "ゴ", romaji: "go" },

      { id: "za", kana: "ザ", romaji: "za" },
      { id: "zi", kana: "ジ", romaji: "zi" },
      { id: "zu", kana: "ズ", romaji: "zu" },
      { id: "ze", kana: "ゼ", romaji: "ze" },
      { id: "zo", kana: "ゾ", romaji: "zo" },

      { id: "da", kana: "ダ", romaji: "da" },
      { id: "di", kana: "ヂ", romaji: "di" },
      { id: "du", kana: "ヅ", romaji: "du" },
      { id: "de", kana: "デ", romaji: "de" },
      { id: "do", kana: "ド", romaji: "do" },

      { id: "ba", kana: "バ", romaji: "ba" },
      { id: "bi", kana: "ビ", romaji: "bi" },
      { id: "bu", kana: "ブ", romaji: "bu" },
      { id: "be", kana: "ベ", romaji: "be" },
      { id: "bo", kana: "ボ", romaji: "bo" },

      { id: "pa", kana: "パ", romaji: "pa" },
      { id: "pi", kana: "ピ", romaji: "pi" },
      { id: "pu", kana: "プ", romaji: "pu" },
      { id: "pe", kana: "ペ", romaji: "pe" },
      { id: "po", kana: "ポ", romaji: "po" },
    ],
  },

    {
    title: "Combination",
    description: "Small ャ, ュ, ョ combined sounds.",
    items: [
      null,
      { id: "kya", kana: "キャ", romaji: "kya" },
      { id: "kyu", kana: "キュ", romaji: "kyu" },
      { id: "kyo", kana: "キョ", romaji: "kyo" },
      null,

      null,
      { id: "gya", kana: "ギャ", romaji: "gya" },
      { id: "gyu", kana: "ギュ", romaji: "gyu" },
      { id: "gyo", kana: "ギョ", romaji: "gyo" },
      null,

      null,
      { id: "sya", kana: "シャ", romaji: "sya" },
      { id: "syu", kana: "シュ", romaji: "syu" },
      { id: "syo", kana: "ショ", romaji: "syo" },
      null,

      null,
      { id: "zya", kana: "ジャ", romaji: "zya" },
      { id: "zyu", kana: "ジュ", romaji: "zyu" },
      { id: "zyo", kana: "ジョ", romaji: "zyo" },
      null,

      null,
      { id: "cya", kana: "チャ", romaji: "cya" },
      { id: "cyu", kana: "チュ", romaji: "cyu" },
      { id: "cyo", kana: "チョ", romaji: "cyo" },
      null,

      null,
      { id: "nya", kana: "ニャ", romaji: "nya" },
      { id: "nyu", kana: "ニュ", romaji: "nyu" },
      { id: "nyo", kana: "ニョ", romaji: "nyo" },
      null,

      null,
      { id: "hya", kana: "ヒャ", romaji: "hya" },
      { id: "hyu", kana: "ヒュ", romaji: "hyu" },
      { id: "hyo", kana: "ヒョ", romaji: "hyo" },
      null,

      null,
      { id: "bya", kana: "ビャ", romaji: "bya" },
      { id: "byu", kana: "ビュ", romaji: "byu" },
      { id: "byo", kana: "ビョ", romaji: "byo" },
      null,

      null,
      { id: "pya", kana: "ピャ", romaji: "pya" },
      { id: "pyu", kana: "ピュ", romaji: "pyu" },
      { id: "pyo", kana: "ピョ", romaji: "pyo" },
      null,

      null,
      { id: "mya", kana: "ミャ", romaji: "mya" },
      { id: "myu", kana: "ミュ", romaji: "myu" },
      { id: "myo", kana: "ミョ", romaji: "myo" },
      null,

      null,
      { id: "rya", kana: "リャ", romaji: "rya" },
      { id: "ryu", kana: "リュ", romaji: "ryu" },
      { id: "ryo", kana: "リョ", romaji: "ryo" },
      null,
    ],
  },
];