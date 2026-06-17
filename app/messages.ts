// 这个文件专门存放页面文字
// messages = 多语言文字包
// zh = 中文
// en = 英文
// ko = 韩文

import HiraganaPracticePage from "./practice/hiragana/page";

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
  practice:{
loading: "练习数据加载中...",
    loadError: "练习数据加载失败，请检查后端是否启动。",
    noQuestions: "没有可用的练习题。",
    backToHiragana: "返回平假名",
    hiraganaTitle: "平假名练习",
    question: "第",
    score: "分数",
    accuracy: "正确率",
    complete: "练习完成",
    tryAgain: "再来一次",
    correct: "正确！",
    wrong: "错误。正确答案是：",
    next: "下一题",
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
practice: {
  loading: "Loading practice...",
  loadError: "Failed to load practice data. Please check whether the backend is running.",
  noQuestions: "No practice questions available.",
  backToHiragana: "Back to Hiragana",
  hiraganaTitle: "Hiragana Practice",
  question: "Question",
  score: "Score",
  accuracy: "Accuracy",
  complete: "Practice Complete",
  tryAgain: "Try Again",
  correct: "Correct!",
  wrong: "Wrong. Correct answer:",
  next: "Next",
},
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
   practice: {
  loading: "연습 데이터를 불러오는 중...",
  loadError: "연습 데이터를 불러오지 못했습니다. 백엔드가 실행 중인지 확인해 주세요.",
  noQuestions: "사용할 수 있는 연습 문제가 없습니다.",
  backToHiragana: "히라가나로 돌아가기",
  hiraganaTitle: "히라가나 연습",
  question: "문제",
  score: "점수",
  accuracy: "정확도",
  complete: "연습 완료",
  tryAgain: "다시 하기",
  correct: "정답!",
  wrong: "오답. 정답은:",
  next: "다음",
},
    },
};