import type { KanaCardData } from "../components/KanaFlipCard";

export type KanaRowData = {
  id: string;
  label: string;
  cards: KanaCardData[];
};

// Display romaji and resource filenames are intentionally mapped separately.
export const hiraganaRows: KanaRowData[] = [
  {
    id: "a",
    label: "あ行",
    cards: [
      {
        id: "a",
        kana: "あ",
        romaji: "a",
        audioSrc: "/audio/a.mp3",
        strokeSrc: "/strokes/hiragana/a.svg",
        vocabulary: [],
      },
      {
        id: "i",
        kana: "い",
        romaji: "i",
        audioSrc: "/audio/i.mp3",
        strokeSrc: "/strokes/hiragana/i.svg",
        vocabulary: [],
      },
      {
        id: "u",
        kana: "う",
        romaji: "u",
        audioSrc: "/audio/u.mp3",
        strokeSrc: "/strokes/hiragana/u.svg",
        vocabulary: [],
      },
      {
        id: "e",
        kana: "え",
        romaji: "e",
        audioSrc: "/audio/e.mp3",
        strokeSrc: "/strokes/hiragana/e.svg",
        vocabulary: [],
      },
      {
        id: "o",
        kana: "お",
        romaji: "o",
        audioSrc: "/audio/o.mp3",
        strokeSrc: "/strokes/hiragana/o.svg",
        vocabulary: [],
      },
    ],
  },
  {
    id: "ka",
    label: "か行",
    cards: [
      {
        id: "ka",
        kana: "か",
        romaji: "ka",
        audioSrc: "/audio/ka.mp3",
        strokeSrc: "/strokes/hiragana/ka.svg",
        vocabulary: [],
      },
      {
        id: "ki",
        kana: "き",
        romaji: "ki",
        audioSrc: "/audio/ki.mp3",
        // /strokes/hiragana/ki.svg: connected strokes need manual review.
        // Leave strokeSrc unset until its stroke boundaries are confirmed.
        vocabulary: [],
      },
      {
        id: "ku",
        kana: "く",
        romaji: "ku",
        audioSrc: "/audio/ku.mp3",
        strokeSrc: "/strokes/hiragana/ku.svg",
        vocabulary: [],
      },
      {
        id: "ke",
        kana: "け",
        romaji: "ke",
        audioSrc: "/audio/ke.mp3",
        strokeSrc: "/strokes/hiragana/ke.svg",
        vocabulary: [],
      },
      {
        id: "ko",
        kana: "こ",
        romaji: "ko",
        audioSrc: "/audio/ko.mp3",
        strokeSrc: "/strokes/hiragana/ko.svg",
        vocabulary: [],
      },
    ],
  },
  {
    id: "sa",
    label: "さ行",
    cards: [
      {
        id: "sa",
        kana: "さ",
        romaji: "sa",
        audioSrc: "/audio/sa.mp3",
        strokeSrc: "/strokes/hiragana/sa.svg",
        vocabulary: [],
      },
      {
        id: "shi",
        kana: "し",
        romaji: "shi",
        audioSrc: "/audio/si.mp3",
        strokeSrc: "/strokes/hiragana/si.svg",
        vocabulary: [],
      },
      {
        id: "su",
        kana: "す",
        romaji: "su",
        audioSrc: "/audio/su.mp3",
        strokeSrc: "/strokes/hiragana/su.svg",
        vocabulary: [],
      },
      {
        id: "se",
        kana: "せ",
        romaji: "se",
        audioSrc: "/audio/se.mp3",
        strokeSrc: "/strokes/hiragana/se.svg",
        vocabulary: [],
      },
      {
        id: "so",
        kana: "そ",
        romaji: "so",
        audioSrc: "/audio/so.mp3",
        strokeSrc: "/strokes/hiragana/so.svg",
        vocabulary: [],
      },
    ],
  },
  {
    id: "ta",
    label: "た行",
    cards: [
      {
        id: "ta",
        kana: "た",
        romaji: "ta",
        audioSrc: "/audio/ta.mp3",
        strokeSrc: "/strokes/hiragana/ta.svg",
       vocabulary: [
  {
    word: "たこ",
    reading: "たこ",
    meaning: "章鱼",
    accent: 1,
  },
  {
    word: "たまご",
    reading: "たまご",
    meaning: "鸡蛋",
    accent: 2,
  },
  {
    word: "たこ焼き",
    reading: "たこやき",
    meaning: "章鱼烧",
    accent: 0,
  },
],
      },
     {
  id: "chi",
  kana: "ち",
  romaji: "chi",
  audioSrc: "/audio/ti.mp3",
  strokeSrc: "/strokes/hiragana/ti.svg",
 // ち
vocabulary: [
  {
    word: "地図",
    reading: "ちず",
    meaning: "地图",
    accent: 1,
  },
  {
    word: "地下鉄",
    reading: "ちかてつ",
    meaning: "地铁",
    accent: 0,
  },
  {
    word: "父",
    reading: "ちち",
    meaning: "父亲",
    accent: 2,
  },
],
},
    {
  id: "tsu",
  kana: "つ",
  romaji: "tsu",
  audioSrc: "/audio/tu.mp3",
  strokeSrc: "/strokes/hiragana/tu.svg",
 // つ
vocabulary: [
  {
    word: "月",
    reading: "つき",
    meaning: "月亮",
    accent: 2,
  },
  {
    word: "机",
    reading: "つくえ",
    meaning: "桌子",
    accent: 0,
  },
  {
    word: "爪",
    reading: "つめ",
    meaning: "指甲",
    accent: 0,
  },
],
},
    {
  id: "te",
  kana: "て",
  romaji: "te",
  audioSrc: "/audio/te.mp3",
  strokeSrc: "/strokes/hiragana/te.svg",
 // て
vocabulary: [
  {
    word: "鉄",
    reading: "てつ",
    meaning: "铁",
    accent: 0,
  },
  {
    word: "手紙",
    reading: "てがみ",
    meaning: "信",
    accent: 0,
  },
  {
    word: "天気",
    reading: "てんき",
    meaning: "天气",
    accent: 1,
  },
],
},
     {
  id: "to",
  kana: "と",
  romaji: "to",
  audioSrc: "/audio/to.mp3",
  strokeSrc: "/strokes/hiragana/to.svg",
 // と
vocabulary: [
  {
    word: "鳥",
    reading: "とり",
    meaning: "鸟",
    accent: 0,
  },
  {
    word: "時計",
    reading: "とけい",
    meaning: "钟 / 手表",
    accent: 0,
  },
  {
    word: "後",
    reading: "あと",
    meaning: "之后 / 后面",
    accent: 1,
  },
],
},
    ],
  },
  {
    id: "na",
    label: "な行",
    cards: [
      {
        id: "na",
        kana: "な",
        romaji: "na",
        audioSrc: "/audio/na.mp3",
        strokeSrc: "/strokes/hiragana/na.svg",
        vocabulary: [],
      },
      {
        id: "ni",
        kana: "に",
        romaji: "ni",
        audioSrc: "/audio/ni.mp3",
        strokeSrc: "/strokes/hiragana/ni.svg",
        vocabulary: [],
      },
      {
        id: "nu",
        kana: "ぬ",
        romaji: "nu",
        audioSrc: "/audio/nu.mp3",
        strokeSrc: "/strokes/hiragana/nu.svg",
        vocabulary: [],
      },
      {
        id: "ne",
        kana: "ね",
        romaji: "ne",
        audioSrc: "/audio/ne.mp3",
        strokeSrc: "/strokes/hiragana/ne.svg",
        vocabulary: [],
      },
      {
        id: "no",
        kana: "の",
        romaji: "no",
        audioSrc: "/audio/no.mp3",
        strokeSrc: "/strokes/hiragana/no.svg",
        vocabulary: [],
      },
    ],
  },
  {
    id: "ha",
    label: "は行",
    cards: [
      {
        id: "ha",
        kana: "は",
        romaji: "ha",
        audioSrc: "/audio/ha.mp3",
        strokeSrc: "/strokes/hiragana/ha.svg",
        vocabulary: [],
      },
      {
        id: "hi",
        kana: "ひ",
        romaji: "hi",
        audioSrc: "/audio/hi.mp3",
        strokeSrc: "/strokes/hiragana/hi.svg",
        vocabulary: [],
      },
      {
        id: "fu",
        kana: "ふ",
        romaji: "fu",
        audioSrc: "/audio/hu.mp3",
        // /strokes/hiragana/hu.svg: connected strokes need manual review.
        // Leave strokeSrc unset until its stroke boundaries are confirmed.
        vocabulary: [],
      },
      {
        id: "he",
        kana: "へ",
        romaji: "he",
        audioSrc: "/audio/he.mp3",
        strokeSrc: "/strokes/hiragana/he.svg",
        vocabulary: [],
      },
      {
        id: "ho",
        kana: "ほ",
        romaji: "ho",
        audioSrc: "/audio/ho.mp3",
        strokeSrc: "/strokes/hiragana/ho.svg",
        vocabulary: [],
      },
    ],
  },
  {
    id: "ma",
    label: "ま行",
    cards: [
      {
        id: "ma",
        kana: "ま",
        romaji: "ma",
        audioSrc: "/audio/ma.mp3",
        strokeSrc: "/strokes/hiragana/ma.svg",
        vocabulary: [],
      },
      {
        id: "mi",
        kana: "み",
        romaji: "mi",
        audioSrc: "/audio/mi.mp3",
        strokeSrc: "/strokes/hiragana/mi.svg",
        vocabulary: [],
      },
      {
        id: "mu",
        kana: "む",
        romaji: "mu",
        audioSrc: "/audio/mu.mp3",
        strokeSrc: "/strokes/hiragana/mu.svg",
        vocabulary: [],
      },
      {
        id: "me",
        kana: "め",
        romaji: "me",
        audioSrc: "/audio/me.mp3",
        strokeSrc: "/strokes/hiragana/me.svg",
        vocabulary: [],
      },
      {
        id: "mo",
        kana: "も",
        romaji: "mo",
        audioSrc: "/audio/mo.mp3",
        strokeSrc: "/strokes/hiragana/mo.svg",
        vocabulary: [],
      },
    ],
  },
  {
    id: "ya",
    label: "や行",
    cards: [
      {
        id: "ya",
        kana: "や",
        romaji: "ya",
        audioSrc: "/audio/ya.mp3",
        strokeSrc: "/strokes/hiragana/ya.svg",
        vocabulary: [],
      },
      {
        id: "yu",
        kana: "ゆ",
        romaji: "yu",
        audioSrc: "/audio/yu.mp3",
        strokeSrc: "/strokes/hiragana/yu.svg",
        vocabulary: [],
      },
      {
        id: "yo",
        kana: "よ",
        romaji: "yo",
        audioSrc: "/audio/yo.mp3",
        strokeSrc: "/strokes/hiragana/yo.svg",
        vocabulary: [],
      },
    ],
  },
  {
    id: "ra",
    label: "ら行",
    cards: [
      {
        id: "ra",
        kana: "ら",
        romaji: "ra",
        audioSrc: "/audio/ra.mp3",
        strokeSrc: "/strokes/hiragana/ra.svg",
        vocabulary: [],
      },
      {
        id: "ri",
        kana: "り",
        romaji: "ri",
        audioSrc: "/audio/ri.mp3",
        // /strokes/hiragana/ri.svg: connected strokes need manual review.
        // Leave strokeSrc unset until its stroke boundaries are confirmed.
        vocabulary: [],
      },
      {
        id: "ru",
        kana: "る",
        romaji: "ru",
        audioSrc: "/audio/ru.mp3",
        strokeSrc: "/strokes/hiragana/ru.svg",
        vocabulary: [],
      },
      {
        id: "re",
        kana: "れ",
        romaji: "re",
        audioSrc: "/audio/re.mp3",
        strokeSrc: "/strokes/hiragana/re.svg",
        vocabulary: [],
      },
      {
        id: "ro",
        kana: "ろ",
        romaji: "ro",
        audioSrc: "/audio/ro.mp3",
        strokeSrc: "/strokes/hiragana/ro.svg",
        vocabulary: [],
      },
    ],
  },
  {
    id: "wa",
    label: "わ行",
    cards: [
      {
        id: "wa",
        kana: "わ",
        romaji: "wa",
        audioSrc: "/audio/wa.mp3",
        strokeSrc: "/strokes/hiragana/wa.svg",
        vocabulary: [],
      },
      {
        id: "wo",
        kana: "を",
        romaji: "wo",
        audioSrc: "/audio/wo.mp3",
        strokeSrc: "/strokes/hiragana/wo.svg",
        vocabulary: [],
      },
    ],
  },
  {
    id: "n",
    label: "ん",
    cards: [
      {
        id: "n",
        kana: "ん",
        romaji: "n",
        audioSrc: "/audio/n.mp3",
        strokeSrc: "/strokes/hiragana/n.svg",
        vocabulary: [],
      },
    ],
  },
];
