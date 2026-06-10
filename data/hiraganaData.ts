// 这个文件只负责存 Hiragana 的数据
// 现在先不放 examples，也不放 meaning。
// 页面会 import 这里的数据，然后自动生成表格

// export type 的意思是：导出一个 TypeScript 类型
export type HiraganaItem={
     // id 是这个假名的唯一名字
  // 以后做详情页时，网址会用它
  // 例如 id: "a" → /hiragana/a
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

export type HiraganaSection = {
  // 每一组的英文名字，比如 Basic Hiragana。
  title: string;

  // 简短解释，页面上可以显示，也可以以后再用。
  description: string;

  // 这一组里面有哪些假名。
  // null 表示这个格子故意空着，用来保持标准五十音表的位置。
  items: (HiraganaItem | null)[];
};

export const hiraganaSections: HiraganaSection[] = [
  {
    title: "Basic Hiragana",
    description: "The basic hiragana sounds.",
    items: [
      { id: "a", kana: "あ", romaji: "a", audioSrc: "/audio/a.mp3" },
      { id: "i", kana: "い", romaji: "i", audioSrc: "/audio/i.mp3" },
      { id: "u", kana: "う", romaji: "u", audioSrc: "/audio/u.mp3" },
      { id: "e", kana: "え", romaji: "e", audioSrc: "/audio/e.mp3" },
      { id: "o", kana: "お", romaji: "o", audioSrc: "/audio/o.mp3" },

      { id: "ka", kana: "か", romaji: "ka" },
      { id: "ki", kana: "き", romaji: "ki" },
      { id: "ku", kana: "く", romaji: "ku"},
      { id: "ke", kana: "け", romaji: "ke"},
      { id: "ko", kana: "こ", romaji: "ko"  },

      { id: "sa", kana: "さ", romaji: "sa" },
      { id: "si", kana: "し", romaji: "si" },
      { id: "su", kana: "す", romaji: "su"},
      { id: "se", kana: "せ", romaji: "se" },
      { id: "so", kana: "そ", romaji: "so" },

      { id: "ta", kana: "た", romaji: "ta" },
      { id: "ti", kana: "ち", romaji: "ti" },
      { id: "tu", kana: "つ", romaji: "tu" },
      { id: "te", kana: "て", romaji: "te"},
      { id: "to", kana: "と", romaji: "to"},

      { id: "na", kana: "な", romaji: "na" },
      { id: "ni", kana: "に", romaji: "ni"},
      { id: "nu", kana: "ぬ", romaji: "nu" },
      { id: "ne", kana: "ね", romaji: "ne"},
      { id: "no", kana: "の", romaji: "no" },

      { id: "ha", kana: "は", romaji: "ha" },
      { id: "hi", kana: "ひ", romaji: "hi" },
      { id: "hu", kana: "ふ", romaji: "hu"},
      { id: "he", kana: "へ", romaji: "he"},
      { id: "ho", kana: "ほ", romaji: "ho"},

      { id: "ma", kana: "ま", romaji: "ma" },
      { id: "mi", kana: "み", romaji: "mi"},
      { id: "mu", kana: "む", romaji: "mu" },
      { id: "me", kana: "め", romaji: "me" },
      { id: "mo", kana: "も", romaji: "mo" },

      { id: "ya", kana: "や", romaji: "ya" },
      null,
      { id: "yu", kana: "ゆ", romaji: "yu"},
      null,
      { id: "yo", kana: "よ", romaji: "yo" },

      { id: "ra", kana: "ら", romaji: "ra"},
      { id: "ri", kana: "り", romaji: "ri"},
      { id: "ru", kana: "る", romaji: "ru"},
      { id: "re", kana: "れ", romaji: "re" },
      { id: "ro", kana: "ろ", romaji: "ro" },

      { id: "wa", kana: "わ", romaji: "wa"},
      null,
      null,
      null,
      { id: "wo", kana: "を", romaji: "wo" },
     
      { id: "n", kana: "ん", romaji: "n"},
       null,
      null,
      null,
      null,
    ],
  },

  {
    title: "Dakuten / Han-dakuten",
    description: "Sounds with dakuten or han-dakuten marks.",
    items: [
      { id: "ga", kana: "が", romaji: "ga" },
      { id: "gi", kana: "ぎ", romaji: "gi" },
      { id: "gu", kana: "ぐ", romaji: "gu" },
      { id: "ge", kana: "げ", romaji: "ge"},
      { id: "go", kana: "ご", romaji: "go" },

      { id: "za", kana: "ざ", romaji: "za" },
      { id: "zi", kana: "じ", romaji: "zi" },
      { id: "zu", kana: "ず", romaji: "zu" },
      { id: "ze", kana: "ぜ", romaji: "ze" },
      { id: "zo", kana: "ぞ", romaji: "zo" },

      { id: "da", kana: "だ", romaji: "da" },
      { id: "di", kana: "ぢ", romaji: "di" },
      { id: "du", kana: "づ", romaji: "du" },
      { id: "de", kana: "で", romaji: "de" },
      { id: "do", kana: "ど", romaji: "do" },

      { id: "ba", kana: "ば", romaji: "ba" },
      { id: "bi", kana: "び", romaji: "bi"},
      { id: "bu", kana: "ぶ", romaji: "bu"},
      { id: "be", kana: "べ", romaji: "be" },
      { id: "bo", kana: "ぼ", romaji: "bo"},

      { id: "pa", kana: "ぱ", romaji: "pa"},
      { id: "pi", kana: "ぴ", romaji: "pi"},
      { id: "pu", kana: "ぷ", romaji: "pu"},
      { id: "pe", kana: "ぺ", romaji: "pe"},
      { id: "po", kana: "ぽ", romaji: "po" },
    ],
  },

  {
    title: "Combination",
    description: "Small ゃ, ゅ, ょ combined sounds.",
    items: [
       null,
  { id: "kya", kana: "きゃ", romaji: "kya" },
  { id: "kyu", kana: "きゅ", romaji: "kyu" },
  { id: "kyo", kana: "きょ", romaji: "kyo" },
 
  null,
 null,
  { id: "gya", kana: "ぎゃ", romaji: "gya" },
  { id: "gyu", kana: "ぎゅ", romaji: "gyu" },
  { id: "gyo", kana: "ぎょ", romaji: "gyo" },
 
  null,
 null,
  { id: "sya", kana: "しゃ", romaji: "sya" },
  { id: "syu", kana: "しゅ", romaji: "syu" },
  { id: "syo", kana: "しょ", romaji: "syo" },
  null,
 
 null,
  { id: "zya", kana: "じゃ", romaji: "zya" },
  { id: "zyu", kana: "じゅ", romaji: "zyu" },
  { id: "zyo", kana: "じょ", romaji: "zyo" },
  null,
 
null,
  { id: "cya", kana: "ちゃ", romaji: "cya" },
  { id: "cyu", kana: "ちゅ", romaji: "cyu" },
  { id: "cyo", kana: "ちょ", romaji: "cyo" },
  null,
  
null,
  { id: "nya", kana: "にゃ", romaji: "nya" },
  { id: "nyu", kana: "にゅ", romaji: "nyu" },
  { id: "nyo", kana: "にょ", romaji: "nyo" },
  null,
  
null,
  { id: "hya", kana: "ひゃ", romaji: "hya" },
  { id: "hyu", kana: "ひゅ", romaji: "hyu" },
  { id: "hyo", kana: "ひょ", romaji: "hyo" },
  null,
  
 null,
  { id: "bya", kana: "びゃ", romaji: "bya" },
  { id: "byu", kana: "びゅ", romaji: "byu" },
  { id: "byo", kana: "びょ", romaji: "byo" },
  null,
 
 null,
  { id: "pya", kana: "ぴゃ", romaji: "pya" },
  { id: "pyu", kana: "ぴゅ", romaji: "pyu" },
  { id: "pyo", kana: "ぴょ", romaji: "pyo" },
  null,
 
 null,

  { id: "mya", kana: "みゃ", romaji: "mya" },
  { id: "myu", kana: "みゅ", romaji: "myu" },
  { id: "myo", kana: "みょ", romaji: "myo" },
  null,
   null,
  { id: "rya", kana: "りゃ", romaji: "rya" },
  { id: "ryu", kana: "りゅ", romaji: "ryu" },
  { id: "ryo", kana: "りょ", romaji: "ryo" },
  null,

],
  },
];