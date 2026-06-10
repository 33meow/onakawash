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
  
   // audioSrc 是音频地址
  // ? 表示这个属性可以没有
  // 因为你现在可能只录了 あいうえお，不一定每个音都有 mp3
  audioSrc?:string;

  // 未来你自己画假名之后，可以加这个字段。
  // 比如 imageSrc: "/hiragana/a.png"
  // 现在先不用。
  imageSrc?: string;

};

// hiraganaRows 是一个二维数组
// 二维数组 = array inside array
// 第一层是“行”，第二层是“这一行里的格子”
export const hiraganaRows: (HiraganaItem | null)[][]=[
    [
    { id: "a", kana: "あ", audioSrc: "/audio/a.mp3" },
    { id: "i", kana: "い", audioSrc: "/audio/i.mp3" },
    { id: "u", kana: "う", audioSrc: "/audio/u.mp3" },
    { id: "e", kana: "え", audioSrc: "/audio/e.mp3" },
    { id: "o", kana: "お", audioSrc: "/audio/o.mp3" },
  ],
    [
    { id: "ka", kana: "か" },
    { id: "ki", kana: "き" },
    { id: "ku", kana: "く" },
    { id: "ke", kana: "け" },
    { id: "ko", kana: "こ" },
  ],
  [
    { id: "sa", kana: "さ" },
    { id: "shi", kana: "し" },
    { id: "su", kana: "す" },
    { id: "se", kana: "せ" },
    { id: "so", kana: "そ" },
  ],
  [
    { id: "ta", kana: "た" },
    { id: "chi", kana: "ち" },
    { id: "tsu", kana: "つ" },
    { id: "te", kana: "て" },
    { id: "to", kana: "と" },
  ],
  [
    { id: "na", kana: "な" },
    { id: "ni", kana: "に" },
    { id: "nu", kana: "ぬ" },
    { id: "ne", kana: "ね" },
    { id: "no", kana: "の" },
  ],
  [
    { id: "ha", kana: "は" },
    { id: "hi", kana: "ひ" },
    { id: "fu", kana: "ふ" },
    { id: "he", kana: "へ" },
    { id: "ho", kana: "ほ" },
  ],
  [
    { id: "ma", kana: "ま" },
    { id: "mi", kana: "み" },
    { id: "mu", kana: "む" },
    { id: "me", kana: "め" },
    { id: "mo", kana: "も" },
  ],
  [
    { id: "ya", kana: "や" },
    null,
    { id: "yu", kana: "ゆ" },
    null,
    { id: "yo", kana: "よ" },
  ],
  [
    { id: "ra", kana: "ら" },
    { id: "ri", kana: "り" },
    { id: "ru", kana: "る" },
    { id: "re", kana: "れ" },
    { id: "ro", kana: "ろ" },
  ],
  [
    { id: "wa", kana: "わ" },
    null,
    null,
    null,
    { id: "wo", kana: "を" },
  ],
  [
    { id: "n", kana: "ん" },
    null,
    null,
    null,
    null,
  ],
];