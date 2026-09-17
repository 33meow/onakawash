import type { KanaCardData } from "../components/KanaFlipCard";

export type KanaRowData = {
  id: string;
  label: string;
  cards: KanaCardData[];
};

// New vocabulary accents checked against OJAD dictionary forms (2026-09-17):
// https://www.gavo.t.u-tokyo.ac.jp/ojad/search/index (match word AND reading).
// Non-OJAD entries and variant choices are noted beside their accent values.
// 熊 variants: https://note.com/nhk_pr/n/na23ee8a28e1d
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
        vocabulary: [
          {
            word: "朝",
            reading: "あさ",
            meaning: "早晨",
            accent: 1,
          },
          {
            word: "足",
            reading: "あし",
            meaning: "脚",
            accent: 2,
          },
          {
            word: "雨",
            reading: "あめ",
            meaning: "雨",
            accent: 1,
          },
        ],
      },
      {
        id: "i",
        kana: "い",
        romaji: "i",
        audioSrc: "/audio/i.mp3",
        strokeSrc: "/strokes/hiragana/i.svg",
        vocabulary: [
          {
            word: "犬",
            reading: "いぬ",
            meaning: "狗",
            accent: 2,
          },
          {
            word: "家",
            reading: "いえ",
            meaning: "家",
            accent: 2,
          },
          {
            word: "椅子",
            reading: "いす",
            meaning: "椅子",
            accent: 0,
          },
        ],
      },
      {
        id: "u",
        kana: "う",
        romaji: "u",
        audioSrc: "/audio/u.mp3",
        strokeSrc: "/strokes/hiragana/u.svg",
        vocabulary: [
          {
            word: "海",
            reading: "うみ",
            meaning: "海",
            accent: 1,
          },
          {
            word: "牛",
            reading: "うし",
            meaning: "牛",
            accent: 0,
          },
          {
            word: "歌",
            reading: "うた",
            meaning: "歌",
            accent: 2,
          },
        ],
      },
      {
        id: "e",
        kana: "え",
        romaji: "e",
        audioSrc: "/audio/e.mp3",
        strokeSrc: "/strokes/hiragana/e.svg",
        vocabulary: [
          {
            word: "駅",
            reading: "えき",
            meaning: "车站",
            accent: 1,
          },
          {
            word: "絵本",
            reading: "えほん",
            meaning: "绘本",
            accent: 2,
          },
          {
            word: "鉛筆",
            reading: "えんぴつ",
            meaning: "铅笔",
            accent: 0,
          },
        ],
      },
      {
        id: "o",
        kana: "お",
        romaji: "o",
        audioSrc: "/audio/o.mp3",
        strokeSrc: "/strokes/hiragana/o.svg",
        vocabulary: [
          {
            word: "鬼",
            reading: "おに",
            meaning: "鬼",
            accent: 2,
          },
          {
            word: "お菓子",
            reading: "おかし",
            meaning: "点心",
            accent: 2,
          },
          {
            word: "お茶",
            reading: "おちゃ",
            meaning: "茶",
            accent: 0,
          },
        ],
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
        vocabulary: [
          {
            word: "傘",
            reading: "かさ",
            meaning: "伞",
            accent: 1,
          },
          {
            word: "顔",
            reading: "かお",
            meaning: "脸",
            accent: 0,
          },
          {
            word: "鞄",
            reading: "かばん",
            meaning: "包",
            accent: 0,
          },
        ],
      },
      {
        id: "ki",
        kana: "き",
        romaji: "ki",
        audioSrc: "/audio/ki.mp3",
        // /strokes/hiragana/ki.svg: connected strokes need manual review.
        // Leave strokeSrc unset until its stroke boundaries are confirmed.
        vocabulary: [
          {
            word: "木",
            reading: "き",
            meaning: "树",
            accent: 1,
          },
          {
            word: "狐",
            reading: "きつね",
            meaning: "狐狸",
            accent: 0,
          },
          {
            word: "黄色",
            reading: "きいろ",
            meaning: "黄色",
            accent: 0,
          },
        ],
      },
      {
        id: "ku",
        kana: "く",
        romaji: "ku",
        audioSrc: "/audio/ku.mp3",
        strokeSrc: "/strokes/hiragana/ku.svg",
        vocabulary: [
          {
            word: "靴",
            reading: "くつ",
            meaning: "鞋",
            accent: 2,
          },
          {
            word: "車",
            reading: "くるま",
            meaning: "车",
            accent: 0,
          },
          {
            word: "熊",
            reading: "くま",
            meaning: "熊",
            // OJAD: 2; NHK also accepts 1. Keep the OJAD teaching form.
            accent: 2,
          },
        ],
      },
      {
        id: "ke",
        kana: "け",
        romaji: "ke",
        audioSrc: "/audio/ke.mp3",
        strokeSrc: "/strokes/hiragana/ke.svg",
        vocabulary: [
          {
            word: "毛",
            reading: "け",
            meaning: "毛发",
            accent: 0,
          },
          {
            word: "今朝",
            reading: "けさ",
            meaning: "今天早上",
            accent: 1,
          },
          {
            word: "煙",
            reading: "けむり",
            meaning: "烟",
            accent: 0,
          },
        ],
      },
      {
        id: "ko",
        kana: "こ",
        romaji: "ko",
        audioSrc: "/audio/ko.mp3",
        strokeSrc: "/strokes/hiragana/ko.svg",
        vocabulary: [
          {
            word: "声",
            reading: "こえ",
            meaning: "声音",
            accent: 1,
          },
          {
            word: "子供",
            reading: "こども",
            meaning: "孩子",
            accent: 0,
          },
          {
            word: "米",
            reading: "こめ",
            meaning: "米",
            accent: 2,
          },
        ],
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
        vocabulary: [
          {
            word: "魚",
            reading: "さかな",
            meaning: "鱼",
            accent: 0,
          },
          {
            word: "桜",
            reading: "さくら",
            meaning: "樱花",
            accent: 0,
          },
          {
            word: "皿",
            reading: "さら",
            meaning: "盘子",
            accent: 0,
          },
        ],
      },
      {
        id: "shi",
        kana: "し",
        romaji: "shi",
        audioSrc: "/audio/si.mp3",
        strokeSrc: "/strokes/hiragana/si.svg",
        vocabulary: [
          {
            word: "塩",
            reading: "しお",
            meaning: "盐",
            accent: 2,
          },
          {
            word: "島",
            reading: "しま",
            meaning: "岛",
            accent: 2,
          },
          {
            word: "鹿",
            reading: "しか",
            meaning: "鹿",
            accent: 0,
          },
        ],
      },
      {
        id: "su",
        kana: "す",
        romaji: "su",
        audioSrc: "/audio/su.mp3",
        strokeSrc: "/strokes/hiragana/su.svg",
        vocabulary: [
          {
            word: "寿司",
            reading: "すし",
            meaning: "寿司",
            accent: 2,
          },
          {
            word: "砂",
            reading: "すな",
            meaning: "沙子",
            accent: 0,
          },
          {
            word: "鈴",
            reading: "すず",
            meaning: "铃铛",
            accent: 0,
          },
        ],
      },
      {
        id: "se",
        kana: "せ",
        romaji: "se",
        audioSrc: "/audio/se.mp3",
        strokeSrc: "/strokes/hiragana/se.svg",
        vocabulary: [
          {
            word: "世界",
            reading: "せかい",
            meaning: "世界",
            accent: 1,
          },
          {
            word: "蝉",
            reading: "せみ",
            meaning: "蝉",
            accent: 0,
          },
          {
            word: "背中",
            reading: "せなか",
            meaning: "后背",
            accent: 0,
          },
        ],
      },
      {
        id: "so",
        kana: "そ",
        romaji: "so",
        audioSrc: "/audio/so.mp3",
        strokeSrc: "/strokes/hiragana/so.svg",
        vocabulary: [
          {
            word: "空",
            reading: "そら",
            meaning: "天空",
            accent: 1,
          },
          {
            word: "外",
            reading: "そと",
            meaning: "外面",
            accent: 1,
          },
          {
            word: "蕎麦",
            reading: "そば",
            meaning: "荞麦面",
            accent: 1,
          },
        ],
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
        vocabulary: [
          {
            word: "夏",
            reading: "なつ",
            meaning: "夏天",
            accent: 2,
          },
          {
            word: "名前",
            reading: "なまえ",
            meaning: "名字",
            accent: 0,
          },
          {
            word: "茄子",
            reading: "なす",
            meaning: "茄子",
            accent: 1,
          },
        ],
      },
      {
        id: "ni",
        kana: "に",
        romaji: "ni",
        audioSrc: "/audio/ni.mp3",
        strokeSrc: "/strokes/hiragana/ni.svg",
        vocabulary: [
          {
            word: "肉",
            reading: "にく",
            meaning: "肉",
            accent: 2,
          },
          {
            word: "庭",
            reading: "にわ",
            meaning: "庭院",
            accent: 0,
          },
          {
            word: "虹",
            reading: "にじ",
            meaning: "彩虹",
            accent: 0,
          },
        ],
      },
      {
        id: "nu",
        kana: "ぬ",
        romaji: "nu",
        audioSrc: "/audio/nu.mp3",
        strokeSrc: "/strokes/hiragana/nu.svg",
        vocabulary: [
          {
            word: "布",
            reading: "ぬの",
            meaning: "布",
            accent: 0,
          },
          {
            word: "沼",
            reading: "ぬま",
            meaning: "沼泽",
            accent: 2,
          },
          {
            word: "ぬいぐるみ",
            reading: "ぬいぐるみ",
            meaning: "玩偶",
            accent: 0,
          },
        ],
      },
      {
        id: "ne",
        kana: "ね",
        romaji: "ne",
        audioSrc: "/audio/ne.mp3",
        strokeSrc: "/strokes/hiragana/ne.svg",
        vocabulary: [
          {
            word: "猫",
            reading: "ねこ",
            meaning: "猫",
            accent: 1,
          },
          {
            word: "熱",
            reading: "ねつ",
            meaning: "发烧 / 热",
            accent: 2,
          },
          {
            word: "鼠",
            reading: "ねずみ",
            meaning: "老鼠",
            accent: 0,
          },
        ],
      },
      {
        id: "no",
        kana: "の",
        romaji: "no",
        audioSrc: "/audio/no.mp3",
        strokeSrc: "/strokes/hiragana/no.svg",
        vocabulary: [
          {
            word: "喉",
            reading: "のど",
            meaning: "喉咙",
            accent: 1,
          },
          {
            word: "野原",
            reading: "のはら",
            meaning: "原野",
            accent: 1,
          },
          {
            word: "乗り物",
            reading: "のりもの",
            meaning: "交通工具",
            accent: 0,
          },
        ],
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
        vocabulary: [
          {
            word: "花",
            reading: "はな",
            meaning: "花",
            accent: 2,
          },
          {
            word: "箸",
            reading: "はし",
            meaning: "筷子",
            accent: 1,
          },
          {
            word: "箱",
            reading: "はこ",
            meaning: "箱子",
            accent: 0,
          },
        ],
      },
      {
        id: "hi",
        kana: "ひ",
        romaji: "hi",
        audioSrc: "/audio/hi.mp3",
        strokeSrc: "/strokes/hiragana/hi.svg",
        vocabulary: [
          {
            word: "人",
            reading: "ひと",
            meaning: "人",
            accent: 0,
          },
          {
            word: "昼",
            reading: "ひる",
            meaning: "白天 / 中午",
            accent: 2,
          },
          {
            word: "飛行機",
            reading: "ひこうき",
            meaning: "飞机",
            accent: 2,
          },
        ],
      },
      {
        id: "fu",
        kana: "ふ",
        romaji: "fu",
        audioSrc: "/audio/hu.mp3",
        // /strokes/hiragana/hu.svg: connected strokes need manual review.
        // Leave strokeSrc unset until its stroke boundaries are confirmed.
        vocabulary: [
          {
            word: "船",
            reading: "ふね",
            meaning: "船",
            accent: 1,
          },
          {
            word: "冬",
            reading: "ふゆ",
            meaning: "冬天",
            accent: 2,
          },
          {
            word: "服",
            reading: "ふく",
            meaning: "衣服",
            accent: 2,
          },
        ],
      },
      {
        id: "he",
        kana: "へ",
        romaji: "he",
        audioSrc: "/audio/he.mp3",
        strokeSrc: "/strokes/hiragana/he.svg",
        vocabulary: [
          {
            word: "部屋",
            reading: "へや",
            meaning: "房间",
            accent: 2,
          },
          {
            word: "蛇",
            reading: "へび",
            meaning: "蛇",
            accent: 1,
          },
          {
            word: "平和",
            reading: "へいわ",
            meaning: "和平",
            accent: 0,
          },
        ],
      },
      {
        id: "ho",
        kana: "ほ",
        romaji: "ho",
        audioSrc: "/audio/ho.mp3",
        strokeSrc: "/strokes/hiragana/ho.svg",
        vocabulary: [
          {
            word: "星",
            reading: "ほし",
            meaning: "星星",
            accent: 0,
          },
          {
            word: "本",
            reading: "ほん",
            meaning: "书",
            accent: 1,
          },
          {
            word: "骨",
            reading: "ほね",
            meaning: "骨头",
            accent: 2,
          },
        ],
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
        vocabulary: [
          {
            word: "窓",
            reading: "まど",
            meaning: "窗户",
            accent: 1,
          },
          {
            word: "町",
            reading: "まち",
            meaning: "城镇",
            accent: 2,
          },
          {
            word: "豆",
            reading: "まめ",
            meaning: "豆",
            accent: 2,
          },
        ],
      },
      {
        id: "mi",
        kana: "み",
        romaji: "mi",
        audioSrc: "/audio/mi.mp3",
        strokeSrc: "/strokes/hiragana/mi.svg",
        vocabulary: [
          {
            word: "水",
            reading: "みず",
            meaning: "水",
            accent: 0,
          },
          {
            word: "耳",
            reading: "みみ",
            meaning: "耳朵",
            accent: 2,
          },
          {
            word: "道",
            reading: "みち",
            meaning: "道路",
            accent: 0,
          },
        ],
      },
      {
        id: "mu",
        kana: "む",
        romaji: "mu",
        audioSrc: "/audio/mu.mp3",
        strokeSrc: "/strokes/hiragana/mu.svg",
        vocabulary: [
          {
            word: "虫",
            reading: "むし",
            meaning: "虫子",
            accent: 0,
          },
          {
            word: "村",
            reading: "むら",
            meaning: "村庄",
            accent: 2,
          },
          {
            word: "胸",
            reading: "むね",
            meaning: "胸口",
            accent: 2,
          },
        ],
      },
      {
        id: "me",
        kana: "め",
        romaji: "me",
        audioSrc: "/audio/me.mp3",
        strokeSrc: "/strokes/hiragana/me.svg",
        vocabulary: [
          {
            word: "目",
            reading: "め",
            meaning: "眼睛",
            accent: 1,
          },
          {
            word: "眼鏡",
            reading: "めがね",
            meaning: "眼镜",
            accent: 1,
          },
          {
            word: "目薬",
            reading: "めぐすり",
            meaning: "眼药水",
            // Verified: https://accent.u-biq.org/me.html (2).
            accent: 2,
          },
        ],
      },
      {
        id: "mo",
        kana: "も",
        romaji: "mo",
        audioSrc: "/audio/mo.mp3",
        strokeSrc: "/strokes/hiragana/mo.svg",
        vocabulary: [
          {
            word: "桃",
            reading: "もも",
            meaning: "桃子",
            accent: 0,
          },
          {
            word: "森",
            reading: "もり",
            meaning: "森林",
            accent: 0,
          },
          {
            word: "物",
            reading: "もの",
            meaning: "东西",
            accent: 2,
          },
        ],
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
        vocabulary: [
          {
            word: "山",
            reading: "やま",
            meaning: "山",
            accent: 2,
          },
          {
            word: "野菜",
            reading: "やさい",
            meaning: "蔬菜",
            accent: 0,
          },
          {
            word: "屋根",
            reading: "やね",
            meaning: "屋顶",
            accent: 1,
          },
        ],
      },
      {
        id: "yu",
        kana: "ゆ",
        romaji: "yu",
        audioSrc: "/audio/yu.mp3",
        strokeSrc: "/strokes/hiragana/yu.svg",
        vocabulary: [
          {
            word: "雪",
            reading: "ゆき",
            meaning: "雪",
            accent: 2,
          },
          {
            word: "指",
            reading: "ゆび",
            meaning: "手指",
            accent: 2,
          },
          {
            word: "夢",
            reading: "ゆめ",
            meaning: "梦",
            accent: 2,
          },
        ],
      },
      {
        id: "yo",
        kana: "よ",
        romaji: "yo",
        audioSrc: "/audio/yo.mp3",
        strokeSrc: "/strokes/hiragana/yo.svg",
        vocabulary: [
          {
            word: "夜",
            reading: "よる",
            meaning: "夜晚",
            accent: 1,
          },
          {
            word: "横",
            reading: "よこ",
            meaning: "旁边 / 横向",
            accent: 0,
          },
          {
            word: "洋服",
            reading: "ようふく",
            meaning: "西式服装",
            accent: 0,
          },
        ],
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
        vocabulary: [
          {
            word: "らくだ",
            reading: "らくだ",
            meaning: "骆驼",
            accent: 0,
          },
          {
            word: "らっぱ",
            reading: "らっぱ",
            meaning: "喇叭",
            // Verified: https://en.wiktionary.org/wiki/喇叭 (Daijirin: 0).
            accent: 0,
          },
          {
            word: "楽",
            reading: "らく",
            meaning: "轻松",
            accent: 2,
          },
        ],
      },
      {
        id: "ri",
        kana: "り",
        romaji: "ri",
        audioSrc: "/audio/ri.mp3",
        // /strokes/hiragana/ri.svg: connected strokes need manual review.
        // Leave strokeSrc unset until its stroke boundaries are confirmed.
        vocabulary: [
          {
            word: "りんご",
            reading: "りんご",
            meaning: "苹果",
            accent: 0,
          },
          {
            word: "りす",
            reading: "りす",
            meaning: "松鼠",
            accent: 1,
          },
          {
            word: "料理",
            reading: "りょうり",
            meaning: "料理",
            accent: 1,
          },
        ],
      },
      {
        id: "ru",
        kana: "る",
        romaji: "ru",
        audioSrc: "/audio/ru.mp3",
        strokeSrc: "/strokes/hiragana/ru.svg",
        // These beginner examples contain the kana rather than start with it.
        vocabulary: [
          {
            word: "春",
            reading: "はる",
            meaning: "春天",
            accent: 1,
          },
          {
            word: "見る",
            reading: "みる",
            meaning: "看",
            accent: 1,
          },
          {
            word: "猿",
            reading: "さる",
            meaning: "猴子",
            accent: 1,
          },
        ],
      },
      {
        id: "re",
        kana: "れ",
        romaji: "re",
        audioSrc: "/audio/re.mp3",
        strokeSrc: "/strokes/hiragana/re.svg",
        vocabulary: [
          {
            word: "冷蔵庫",
            reading: "れいぞうこ",
            meaning: "冰箱",
            accent: 3,
          },
          {
            word: "歴史",
            reading: "れきし",
            meaning: "历史",
            accent: 0,
          },
          {
            word: "練習",
            reading: "れんしゅう",
            meaning: "练习",
            accent: 0,
          },
        ],
      },
      {
        id: "ro",
        kana: "ろ",
        romaji: "ro",
        audioSrc: "/audio/ro.mp3",
        strokeSrc: "/strokes/hiragana/ro.svg",
        vocabulary: [
          {
            word: "蝋燭",
            reading: "ろうそく",
            meaning: "蜡烛",
            accent: 3,
          },
          {
            word: "六",
            reading: "ろく",
            meaning: "六",
            accent: 2,
          },
          {
            word: "廊下",
            reading: "ろうか",
            meaning: "走廊",
            accent: 0,
          },
        ],
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
        vocabulary: [
          {
            word: "鰐",
            reading: "わに",
            meaning: "鳄鱼",
            accent: 1,
          },
          {
            word: "私",
            reading: "わたし",
            meaning: "我",
            accent: 0,
          },
          {
            word: "わかめ",
            reading: "わかめ",
            meaning: "海带",
            // Verified: https://en.wiktionary.org/wiki/若布 (1 and 2); use 1.
            accent: 1,
          },
        ],
      },
      {
        id: "wo",
        kana: "を",
        romaji: "wo",
        audioSrc: "/audio/wo.mp3",
        strokeSrc: "/strokes/hiragana/wo.svg",
        // Particle examples: a single lexical accent cannot describe a sentence.
        vocabulary: [
          {
            word: "水を飲む",
            reading: "みずをのむ",
            meaning: "喝水",
          },
          {
            word: "本を読む",
            reading: "ほんをよむ",
            meaning: "读书",
          },
          {
            word: "ご飯を食べる",
            reading: "ごはんをたべる",
            meaning: "吃饭",
          },
        ],
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
        // These beginner examples contain the kana rather than start with it.
        vocabulary: [
          {
            word: "本",
            reading: "ほん",
            meaning: "书",
            accent: 1,
          },
          {
            word: "みかん",
            reading: "みかん",
            meaning: "蜜柑",
            accent: 1,
          },
          {
            word: "三",
            reading: "さん",
            meaning: "三",
            accent: 0,
          },
        ],
      },
    ],
  },
];
