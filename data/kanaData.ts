//export（导出）
//这样其他文件可以import（导入）它
//Const is constant (常量) 我在此处创了一个叫kanaData的盒子，可以存放50音
export const kanaData = [
 //这是array里的第一个object
 //可以理解为一个deck
    {
        //id是这张deck的唯一名字
        //react后面需要用它当key，区分每一个假名
    id: "a",
    //kana是假名本体
    kana: "あ",
    romaji: "a",
    //只是一个联想模块（可能后续要删除）
    meaning: "morning",
     // audioSrc = audio source，音频文件的地址
    // public/audio/a.mp3 在代码里要写成 /audio/a.mp3
    audioSrc: "/audio/a.mp3",
     examples: [
      {
        japanese: "あさ",
        romaji: "asa",
        meaning: "morning",
      },
      {
        japanese: "あめ",
        romaji: "ame",
        meaning: "rain / candy",
      },
      {
        japanese: "あおい",
        romaji: "aoi",
        meaning: "blue",
      },
    ],
  },
  {
    id: "i",
    kana: "い",
    romaji: "i",
    meaning: "life",
    audioSrc: "/audio/i.mp3",
    examples: [
      {
        japanese: "いぬ",
        romaji: "inu",
        meaning: "dog",
      },
      {
        japanese: "いす",
        romaji: "isu",
        meaning: "chair",
      },
      {
        japanese: "いい",
        romaji: "ii",
        meaning: "good",
      },
    ],
  },
  {
    id: "u",
    kana: "う",
    romaji: "u",
    meaning: "moon",
    audioSrc: "/audio/u.mp3",
    examples: [
      {
        japanese: "うみ",
        romaji: "umi",
        meaning: "sea",
      },
      {
        japanese: "うえ",
        romaji: "ue",
        meaning: "up / above",
      },
      {
        japanese: "うた",
        romaji: "uta",
        meaning: "song",
      },
    ],
  },
  {
    id: "e",
    kana: "え",
    romaji: "e",
    meaning: "energy",
    audioSrc: "/audio/e.mp3",
     examples: [
      {
        japanese: "え",
        romaji: "e",
        meaning: "picture",
      },
      {
        japanese: "えき",
        romaji: "eki",
        meaning: "station",
      },
      {
        japanese: "えいが",
        romaji: "eiga",
        meaning: "movie",
      },
    ],
  },
  {
    id: "o",
    kana: "お",
    romaji: "o",
    meaning: "ocean",
    audioSrc: "/audio/o.mp3",
    examples: [
      {
        japanese: "おと",
        romaji: "oto",
        meaning: "sound",
      },
      {
        japanese: "おに",
        romaji: "oni",
        meaning: "demon / ogre",
      },
      {
        japanese: "おかね",
        romaji: "okane",
        meaning: "money",
      },
    ],
  },
];