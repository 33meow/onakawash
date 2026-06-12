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
         home: {
     
      title: "ONAKAWASH(肚肚我洗)",
       entryHint: "点击海绵进入肚肚我洗！！",
      description: "我是一款学习日语可以获得金币购买海绵为小狗宝宝洗肚子",
      start: "世界上的肚肚太多了？不知道从哪开始？别焦虑，直接开始！",
    },
nav: {
    languageName: "中文",
    start: "进入",
    settings: "设置",
    home: "首页",
    hiragana: "平假名",
    katakana: "片假名",
    by: "Yvonne Buttercup 制作",
  },
    },
    en:{
         home: {

    title: "ONAKAWASH",
     entryHint: "Click the sponge to enter ONAKAWASH!!",
    description: "A Japanese learning website where you earn coins, buy sponges, and wash a puppy's belly.",
    start: "Too many bellies in the world? No idea where to start? Chill. Just start!",
  },

nav :{languageName:"English",
start:"Start",
settings:"Settings",
home:"Home",
hiragana:"Hiragana",
katakana:"Katakana",
by:"By Yvonne Buttercup",},
    },
    
    ko:{
         home: {
   
    title: "ONAKAWASH(배워시)",
    entryHint: "스펀지를 눌러 배워시에 들어가요!!",
    description: "일본어를 배우고 코인을 얻어 스펀지를 산 다음 강아지 배를 씻겨 주는 웹사이트입니다.",
    start: "세상에 씻을 배가 너무 많다고요? 어디서 시작할지 모르겠다고요? 걱정 말고 바로 시작!",
  },
   nav: {     
  languageName:"한국어",
start:"시작",
settings:"설정",
home:"홈",
hiragana:"히라가나",
katakana:"가타카나",
by:"Yvonne Buttercup 제작",
   },
    },
};