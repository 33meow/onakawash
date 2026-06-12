// 这个文件专门存放页面文字
// messages = 多语言文字包
// zh = 中文
// en = 英文
// ko = 韩文

// Language 是我们自己定义的类型
// 它规定：语言只能是 "zh" / "en" / "ko" 这三个
export type Language = "zh" | "en" | "ko";

// messages 是真正的语言包
// 页面以后不要直接写“进入”
// 而是从这里拿文字
export const messages = {
    zh:{
languageName:"中文",
start:"进入",
settings:"设置",
home:"首页",
hiragana:"平假名",
katakana:"片假名",
by:"Yvonne Buttercup 制作",
    },
    en:{
languageName:"English",
start:"Start",
settings:"Settings",
home:"Home",
hiragana:"Hiragana",
katakana:"Katakana",
by:"By Yvonne Buttercup",
    },
    ko:{
        languageName:"한국어",
start:"시작",
settings:"설정",
home:"홈",
hiragana:"히라가나",
katakana:"가타카나",
by:"Yvonne Buttercup 저",

    },
};