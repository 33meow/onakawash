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

  { id: "ka", kana: "か", romaji: "ka", audioSrc: "/audio/ka.mp3" },
  { id: "ki", kana: "き", romaji: "ki", audioSrc: "/audio/ki.mp3" },
  { id: "ku", kana: "く", romaji: "ku", audioSrc: "/audio/ku.mp3" },
  { id: "ke", kana: "け", romaji: "ke", audioSrc: "/audio/ke.mp3" },
  { id: "ko", kana: "こ", romaji: "ko", audioSrc: "/audio/ko.mp3" },

  { id: "sa", kana: "さ", romaji: "sa", audioSrc: "/audio/sa.mp3" },
  { id: "si", kana: "し", romaji: "si", audioSrc: "/audio/si.mp3" },
  { id: "su", kana: "す", romaji: "su", audioSrc: "/audio/su.mp3" },
  { id: "se", kana: "せ", romaji: "se", audioSrc: "/audio/se.mp3" },
  { id: "so", kana: "そ", romaji: "so", audioSrc: "/audio/so.mp3" },

  { id: "ta", kana: "た", romaji: "ta", audioSrc: "/audio/ta.mp3" },
  { id: "ti", kana: "ち", romaji: "ti", audioSrc: "/audio/ti.mp3" },
  { id: "tu", kana: "つ", romaji: "tu", audioSrc: "/audio/tu.mp3" },
  { id: "te", kana: "て", romaji: "te", audioSrc: "/audio/te.mp3" },
  { id: "to", kana: "と", romaji: "to", audioSrc: "/audio/to.mp3" },

  { id: "na", kana: "な", romaji: "na", audioSrc: "/audio/na.mp3" },
  { id: "ni", kana: "に", romaji: "ni", audioSrc: "/audio/ni.mp3" },
  { id: "nu", kana: "ぬ", romaji: "nu", audioSrc: "/audio/nu.mp3" },
  { id: "ne", kana: "ね", romaji: "ne", audioSrc: "/audio/ne.mp3" },
  { id: "no", kana: "の", romaji: "no", audioSrc: "/audio/no.mp3" },

  { id: "ha", kana: "は", romaji: "ha", audioSrc: "/audio/ha.mp3" },
  { id: "hi", kana: "ひ", romaji: "hi", audioSrc: "/audio/hi.mp3" },
  { id: "hu", kana: "ふ", romaji: "hu", audioSrc: "/audio/hu.mp3" },
  { id: "he", kana: "へ", romaji: "he", audioSrc: "/audio/he.mp3" },
  { id: "ho", kana: "ほ", romaji: "ho", audioSrc: "/audio/ho.mp3" },

  { id: "ma", kana: "ま", romaji: "ma", audioSrc: "/audio/ma.mp3" },
  { id: "mi", kana: "み", romaji: "mi", audioSrc: "/audio/mi.mp3" },
  { id: "mu", kana: "む", romaji: "mu", audioSrc: "/audio/mu.mp3" },
  { id: "me", kana: "め", romaji: "me", audioSrc: "/audio/me.mp3" },
  { id: "mo", kana: "も", romaji: "mo", audioSrc: "/audio/mo.mp3" },

  { id: "ya", kana: "や", romaji: "ya", audioSrc: "/audio/ya.mp3" },
  null,
  { id: "yu", kana: "ゆ", romaji: "yu", audioSrc: "/audio/yu.mp3" },
  null,
  { id: "yo", kana: "よ", romaji: "yo", audioSrc: "/audio/yo.mp3" },

  { id: "ra", kana: "ら", romaji: "ra", audioSrc: "/audio/ra.mp3" },
  { id: "ri", kana: "り", romaji: "ri", audioSrc: "/audio/ri.mp3" },
  { id: "ru", kana: "る", romaji: "ru", audioSrc: "/audio/ru.mp3" },
  { id: "re", kana: "れ", romaji: "re", audioSrc: "/audio/re.mp3" },
  { id: "ro", kana: "ろ", romaji: "ro", audioSrc: "/audio/ro.mp3" },

  { id: "wa", kana: "わ", romaji: "wa", audioSrc: "/audio/wa.mp3" },
  null,
  null,
  null,
  { id: "wo", kana: "を", romaji: "wo", audioSrc: "/audio/wo.mp3" },

  null,
  null,
  { id: "n", kana: "ん", romaji: "n", audioSrc: "/audio/n.mp3" },
  null,
  null,
],
  },

  {
    title: "Dakuten / Han-dakuten",
    description: "Sounds with dakuten or han-dakuten marks.",
    items: [
  { id: "ga", kana: "が", romaji: "ga", audioSrc: "/audio/ga.mp3" },
  { id: "gi", kana: "ぎ", romaji: "gi", audioSrc: "/audio/gi.mp3" },
  { id: "gu", kana: "ぐ", romaji: "gu", audioSrc: "/audio/gu.mp3" },
  { id: "ge", kana: "げ", romaji: "ge", audioSrc: "/audio/ge.mp3" },
  { id: "go", kana: "ご", romaji: "go", audioSrc: "/audio/go.mp3" },

  { id: "za", kana: "ざ", romaji: "za", audioSrc: "/audio/za.mp3" },
  { id: "zi", kana: "じ", romaji: "zi", audioSrc: "/audio/zi.mp3" },
  { id: "zu", kana: "ず", romaji: "zu", audioSrc: "/audio/zu.mp3" },
  { id: "ze", kana: "ぜ", romaji: "ze", audioSrc: "/audio/ze.mp3" },
  { id: "zo", kana: "ぞ", romaji: "zo", audioSrc: "/audio/zo.mp3" },

  { id: "da", kana: "だ", romaji: "da", audioSrc: "/audio/da.mp3" },
  { id: "di", kana: "ぢ", romaji: "di", audioSrc: "/audio/di.mp3" },
  { id: "du", kana: "づ", romaji: "du", audioSrc: "/audio/du.mp3" },
  { id: "de", kana: "で", romaji: "de", audioSrc: "/audio/de.mp3" },
  { id: "do", kana: "ど", romaji: "do", audioSrc: "/audio/do.mp3" },

  { id: "ba", kana: "ば", romaji: "ba", audioSrc: "/audio/ba.mp3" },
  { id: "bi", kana: "び", romaji: "bi", audioSrc: "/audio/bi.mp3" },
  { id: "bu", kana: "ぶ", romaji: "bu", audioSrc: "/audio/bu.mp3" },
  { id: "be", kana: "べ", romaji: "be", audioSrc: "/audio/be.mp3" },
  { id: "bo", kana: "ぼ", romaji: "bo", audioSrc: "/audio/bo.mp3" },

  { id: "pa", kana: "ぱ", romaji: "pa", audioSrc: "/audio/pa.mp3" },
  { id: "pi", kana: "ぴ", romaji: "pi", audioSrc: "/audio/pi.mp3" },
  { id: "pu", kana: "ぷ", romaji: "pu", audioSrc: "/audio/pu.mp3" },
  { id: "pe", kana: "ぺ", romaji: "pe", audioSrc: "/audio/pe.mp3" },
  { id: "po", kana: "ぽ", romaji: "po", audioSrc: "/audio/po.mp3" },
],
  },

  {
    title: "Combination",
    description: "Small ゃ, ゅ, ょ combined sounds.",
    items: [
  null,
  { id: "kya", kana: "きゃ", romaji: "kya", audioSrc: "/audio/kya.mp3" },
  { id: "kyu", kana: "きゅ", romaji: "kyu", audioSrc: "/audio/kyu.mp3" },
  { id: "kyo", kana: "きょ", romaji: "kyo", audioSrc: "/audio/kyo.mp3" },
  null,

  null,
  { id: "gya", kana: "ぎゃ", romaji: "gya", audioSrc: "/audio/gya.mp3" },
  { id: "gyu", kana: "ぎゅ", romaji: "gyu", audioSrc: "/audio/gyu.mp3" },
  { id: "gyo", kana: "ぎょ", romaji: "gyo", audioSrc: "/audio/gyo.mp3" },
  null,

  null,
  { id: "sya", kana: "しゃ", romaji: "sya", audioSrc: "/audio/sya.mp3" },
  { id: "syu", kana: "しゅ", romaji: "syu", audioSrc: "/audio/syu.mp3" },
  { id: "syo", kana: "しょ", romaji: "syo", audioSrc: "/audio/syo.mp3" },
  null,

  null,
  { id: "zya", kana: "じゃ", romaji: "zya", audioSrc: "/audio/zya.mp3" },
  { id: "zyu", kana: "じゅ", romaji: "zyu", audioSrc: "/audio/zyu.mp3" },
  { id: "zyo", kana: "じょ", romaji: "zyo", audioSrc: "/audio/zyo.mp3" },
  null,

  null,
  { id: "tya", kana: "ちゃ", romaji: "tya", audioSrc: "/audio/tya.mp3" },
  { id: "tyu", kana: "ちゅ", romaji: "tyu", audioSrc: "/audio/tyu.mp3" },
  { id: "tyo", kana: "ちょ", romaji: "tyo", audioSrc: "/audio/tyo.mp3" },
  null,

  null,
  { id: "nya", kana: "にゃ", romaji: "nya", audioSrc: "/audio/nya.mp3" },
  { id: "nyu", kana: "にゅ", romaji: "nyu", audioSrc: "/audio/nyu.mp3" },
  { id: "nyo", kana: "にょ", romaji: "nyo", audioSrc: "/audio/nyo.mp3" },
  null,

  null,
  { id: "hya", kana: "ひゃ", romaji: "hya", audioSrc: "/audio/hya.mp3" },
  { id: "hyu", kana: "ひゅ", romaji: "hyu", audioSrc: "/audio/hyu.mp3" },
  { id: "hyo", kana: "ひょ", romaji: "hyo", audioSrc: "/audio/hyo.mp3" },
  null,

  null,
  { id: "bya", kana: "びゃ", romaji: "bya", audioSrc: "/audio/bya.mp3" },
  { id: "byu", kana: "びゅ", romaji: "byu", audioSrc: "/audio/byu.mp3" },
  { id: "byo", kana: "びょ", romaji: "byo", audioSrc: "/audio/byo.mp3" },
  null,

  null,
  { id: "pya", kana: "ぴゃ", romaji: "pya", audioSrc: "/audio/pya.mp3" },
  { id: "pyu", kana: "ぴゅ", romaji: "pyu", audioSrc: "/audio/pyu.mp3" },
  { id: "pyo", kana: "ぴょ", romaji: "pyo", audioSrc: "/audio/pyo.mp3" },
  null,

  null,
  { id: "mya", kana: "みゃ", romaji: "mya", audioSrc: "/audio/mya.mp3" },
  { id: "myu", kana: "みゅ", romaji: "myu", audioSrc: "/audio/myu.mp3" },
  { id: "myo", kana: "みょ", romaji: "myo", audioSrc: "/audio/myo.mp3" },
  null,

  null,
  { id: "rya", kana: "りゃ", romaji: "rya", audioSrc: "/audio/rya.mp3" },
  { id: "ryu", kana: "りゅ", romaji: "ryu", audioSrc: "/audio/ryu.mp3" },
  { id: "ryo", kana: "りょ", romaji: "ryo", audioSrc: "/audio/ryo.mp3" },
  null,
],
  },
];