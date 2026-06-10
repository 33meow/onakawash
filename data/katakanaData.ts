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

  { id: "ka", kana: "カ", romaji: "ka", audioSrc: "/audio/ka.mp3" },
  { id: "ki", kana: "キ", romaji: "ki", audioSrc: "/audio/ki.mp3" },
  { id: "ku", kana: "ク", romaji: "ku", audioSrc: "/audio/ku.mp3" },
  { id: "ke", kana: "ケ", romaji: "ke", audioSrc: "/audio/ke.mp3" },
  { id: "ko", kana: "コ", romaji: "ko", audioSrc: "/audio/ko.mp3" },

  { id: "sa", kana: "サ", romaji: "sa", audioSrc: "/audio/sa.mp3" },
  { id: "si", kana: "シ", romaji: "si", audioSrc: "/audio/si.mp3" },
  { id: "su", kana: "ス", romaji: "su", audioSrc: "/audio/su.mp3" },
  { id: "se", kana: "セ", romaji: "se", audioSrc: "/audio/se.mp3" },
  { id: "so", kana: "ソ", romaji: "so", audioSrc: "/audio/so.mp3" },

  { id: "ta", kana: "タ", romaji: "ta", audioSrc: "/audio/ta.mp3" },
  { id: "ti", kana: "チ", romaji: "ti", audioSrc: "/audio/ti.mp3" },
  { id: "tu", kana: "ツ", romaji: "tu", audioSrc: "/audio/tu.mp3" },
  { id: "te", kana: "テ", romaji: "te", audioSrc: "/audio/te.mp3" },
  { id: "to", kana: "ト", romaji: "to", audioSrc: "/audio/to.mp3" },

  { id: "na", kana: "ナ", romaji: "na", audioSrc: "/audio/na.mp3" },
  { id: "ni", kana: "ニ", romaji: "ni", audioSrc: "/audio/ni.mp3" },
  { id: "nu", kana: "ヌ", romaji: "nu", audioSrc: "/audio/nu.mp3" },
  { id: "ne", kana: "ネ", romaji: "ne", audioSrc: "/audio/ne.mp3" },
  { id: "no", kana: "ノ", romaji: "no", audioSrc: "/audio/no.mp3" },

  { id: "ha", kana: "ハ", romaji: "ha", audioSrc: "/audio/ha.mp3" },
  { id: "hi", kana: "ヒ", romaji: "hi", audioSrc: "/audio/hi.mp3" },
  { id: "hu", kana: "フ", romaji: "hu", audioSrc: "/audio/hu.mp3" },
  { id: "he", kana: "ヘ", romaji: "he", audioSrc: "/audio/he.mp3" },
  { id: "ho", kana: "ホ", romaji: "ho", audioSrc: "/audio/ho.mp3" },

  { id: "ma", kana: "マ", romaji: "ma", audioSrc: "/audio/ma.mp3" },
  { id: "mi", kana: "ミ", romaji: "mi", audioSrc: "/audio/mi.mp3" },
  { id: "mu", kana: "ム", romaji: "mu", audioSrc: "/audio/mu.mp3" },
  { id: "me", kana: "メ", romaji: "me", audioSrc: "/audio/me.mp3" },
  { id: "mo", kana: "モ", romaji: "mo", audioSrc: "/audio/mo.mp3" },

  { id: "ya", kana: "ヤ", romaji: "ya", audioSrc: "/audio/ya.mp3" },
  null,
  { id: "yu", kana: "ユ", romaji: "yu", audioSrc: "/audio/yu.mp3" },
  null,
  { id: "yo", kana: "ヨ", romaji: "yo", audioSrc: "/audio/yo.mp3" },

  { id: "ra", kana: "ラ", romaji: "ra", audioSrc: "/audio/ra.mp3" },
  { id: "ri", kana: "リ", romaji: "ri", audioSrc: "/audio/ri.mp3" },
  { id: "ru", kana: "ル", romaji: "ru", audioSrc: "/audio/ru.mp3" },
  { id: "re", kana: "レ", romaji: "re", audioSrc: "/audio/re.mp3" },
  { id: "ro", kana: "ロ", romaji: "ro", audioSrc: "/audio/ro.mp3" },

  { id: "wa", kana: "ワ", romaji: "wa", audioSrc: "/audio/wa.mp3" },
  null,
  null,
  null,
  { id: "wo", kana: "ヲ", romaji: "wo", audioSrc: "/audio/wo.mp3" },

  null,
  null,
  { id: "n", kana: "ン", romaji: "n", audioSrc: "/audio/n.mp3" },
  null,
  null,
],
  },

   {
    title: "Dakuten / Han-dakuten",
    description: "Sounds with dakuten or han-dakuten marks.",
   items: [
  { id: "ga", kana: "ガ", romaji: "ga", audioSrc: "/audio/ga.mp3" },
  { id: "gi", kana: "ギ", romaji: "gi", audioSrc: "/audio/gi.mp3" },
  { id: "gu", kana: "グ", romaji: "gu", audioSrc: "/audio/gu.mp3" },
  { id: "ge", kana: "ゲ", romaji: "ge", audioSrc: "/audio/ge.mp3" },
  { id: "go", kana: "ゴ", romaji: "go", audioSrc: "/audio/go.mp3" },

  { id: "za", kana: "ザ", romaji: "za", audioSrc: "/audio/za.mp3" },
  { id: "zi", kana: "ジ", romaji: "zi", audioSrc: "/audio/zi.mp3" },
  { id: "zu", kana: "ズ", romaji: "zu", audioSrc: "/audio/zu.mp3" },
  { id: "ze", kana: "ゼ", romaji: "ze", audioSrc: "/audio/ze.mp3" },
  { id: "zo", kana: "ゾ", romaji: "zo", audioSrc: "/audio/zo.mp3" },

  { id: "da", kana: "ダ", romaji: "da", audioSrc: "/audio/da.mp3" },
  { id: "di", kana: "ヂ", romaji: "di", audioSrc: "/audio/di.mp3" },
  { id: "du", kana: "ヅ", romaji: "du", audioSrc: "/audio/du.mp3" },
  { id: "de", kana: "デ", romaji: "de", audioSrc: "/audio/de.mp3" },
  { id: "do", kana: "ド", romaji: "do", audioSrc: "/audio/do.mp3" },

  { id: "ba", kana: "バ", romaji: "ba", audioSrc: "/audio/ba.mp3" },
  { id: "bi", kana: "ビ", romaji: "bi", audioSrc: "/audio/bi.mp3" },
  { id: "bu", kana: "ブ", romaji: "bu", audioSrc: "/audio/bu.mp3" },
  { id: "be", kana: "ベ", romaji: "be", audioSrc: "/audio/be.mp3" },
  { id: "bo", kana: "ボ", romaji: "bo", audioSrc: "/audio/bo.mp3" },

  { id: "pa", kana: "パ", romaji: "pa", audioSrc: "/audio/pa.mp3" },
  { id: "pi", kana: "ピ", romaji: "pi", audioSrc: "/audio/pi.mp3" },
  { id: "pu", kana: "プ", romaji: "pu", audioSrc: "/audio/pu.mp3" },
  { id: "pe", kana: "ペ", romaji: "pe", audioSrc: "/audio/pe.mp3" },
  { id: "po", kana: "ポ", romaji: "po", audioSrc: "/audio/po.mp3" },
],
  },

    {
    title: "Combination",
    description: "Small ャ, ュ, ョ combined sounds.",
   items: [
  null,
  { id: "kya", kana: "キャ", romaji: "kya", audioSrc: "/audio/kya.mp3" },
  { id: "kyu", kana: "キュ", romaji: "kyu", audioSrc: "/audio/kyu.mp3" },
  { id: "kyo", kana: "キョ", romaji: "kyo", audioSrc: "/audio/kyo.mp3" },
  null,

  null,
  { id: "gya", kana: "ギャ", romaji: "gya", audioSrc: "/audio/gya.mp3" },
  { id: "gyu", kana: "ギュ", romaji: "gyu", audioSrc: "/audio/gyu.mp3" },
  { id: "gyo", kana: "ギョ", romaji: "gyo", audioSrc: "/audio/gyo.mp3" },
  null,

  null,
  { id: "sya", kana: "シャ", romaji: "sya", audioSrc: "/audio/sya.mp3" },
  { id: "syu", kana: "シュ", romaji: "syu", audioSrc: "/audio/syu.mp3" },
  { id: "syo", kana: "ショ", romaji: "syo", audioSrc: "/audio/syo.mp3" },
  null,

  null,
  { id: "zya", kana: "ジャ", romaji: "zya", audioSrc: "/audio/zya.mp3" },
  { id: "zyu", kana: "ジュ", romaji: "zyu", audioSrc: "/audio/zyu.mp3" },
  { id: "zyo", kana: "ジョ", romaji: "zyo", audioSrc: "/audio/zyo.mp3" },
  null,

  null,
  { id: "tya", kana: "チャ", romaji: "tya", audioSrc: "/audio/tya.mp3" },
  { id: "tyu", kana: "チュ", romaji: "tyu", audioSrc: "/audio/tyu.mp3" },
  { id: "tyo", kana: "チョ", romaji: "tyo", audioSrc: "/audio/tyo.mp3" },
  null,

  null,
  { id: "nya", kana: "ニャ", romaji: "nya", audioSrc: "/audio/nya.mp3" },
  { id: "nyu", kana: "ニュ", romaji: "nyu", audioSrc: "/audio/nyu.mp3" },
  { id: "nyo", kana: "ニョ", romaji: "nyo", audioSrc: "/audio/nyo.mp3" },
  null,

  null,
  { id: "hya", kana: "ヒャ", romaji: "hya", audioSrc: "/audio/hya.mp3" },
  { id: "hyu", kana: "ヒュ", romaji: "hyu", audioSrc: "/audio/hyu.mp3" },
  { id: "hyo", kana: "ヒョ", romaji: "hyo", audioSrc: "/audio/hyo.mp3" },
  null,

  null,
  { id: "bya", kana: "ビャ", romaji: "bya", audioSrc: "/audio/bya.mp3" },
  { id: "byu", kana: "ビュ", romaji: "byu", audioSrc: "/audio/byu.mp3" },
  { id: "byo", kana: "ビョ", romaji: "byo", audioSrc: "/audio/byo.mp3" },
  null,

  null,
  { id: "pya", kana: "ピャ", romaji: "pya", audioSrc: "/audio/pya.mp3" },
  { id: "pyu", kana: "ピュ", romaji: "pyu", audioSrc: "/audio/pyu.mp3" },
  { id: "pyo", kana: "ピョ", romaji: "pyo", audioSrc: "/audio/pyo.mp3" },
  null,

  null,
  { id: "mya", kana: "ミャ", romaji: "mya", audioSrc: "/audio/mya.mp3" },
  { id: "myu", kana: "ミュ", romaji: "myu", audioSrc: "/audio/myu.mp3" },
  { id: "myo", kana: "ミョ", romaji: "myo", audioSrc: "/audio/myo.mp3" },
  null,

  null,
  { id: "rya", kana: "リャ", romaji: "rya", audioSrc: "/audio/rya.mp3" },
  { id: "ryu", kana: "リュ", romaji: "ryu", audioSrc: "/audio/ryu.mp3" },
  { id: "ryo", kana: "リョ", romaji: "ryo", audioSrc: "/audio/ryo.mp3" },
  null,
],
  },
];