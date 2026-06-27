// 这个文件专门存放页面文字
// messages = 多语言文字包
// zh = 中文
// en = 英文
// ko = 韩文

// Language 是我们自己定义的类型
// 它规定：语言只能是 "zh" / "en" / "ko" "vi"这4个
export type Language = "zh" | "en" | "ko"|"vi";

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
        learningRecords: "查看学习进度",
    },

    progressDashboard: {
  versionLabel: "V0.4 学习进度分析",
  title: "学习进度面板",
  subtitle: "把你的练习记录变成看得懂的学习反馈。",
  backHome: "← 返回主页",

  totalSessions: "总练习次数",
  averageAccuracy: "平均正确率",
  totalDuration: "累计练习时长",
  latestPractice: "最近一次练习",
  noPracticeYet: "还没有练习记录",

  accuracyTrend: "正确率趋势",
  accuracyTrendDescription: "最近几次练习的正确率，从较早到较新排列。",
  noTrendData: "还没有足够的趋势数据。",

  practiceTypeComparison: "练习类型对比",
  practiceTypeDescription: "比较平假名和片假名的练习次数与平均正确率。",
  hiragana: "平假名",
  katakana: "片假名",
  sessions: "练习次数",

  recentSessions: "最近练习记录",
  recentSessionsDescription: "按完成时间排序的最近练习。",
  noRecordsYet: "完成一次练习后，这里会显示记录。",
  score: "得分",
  accuracy: "正确率",
  duration: "用时",
  date: "时间",
},

nav: {
    languageName: "中文",
    start: "进入",
    settings: "设置",
    home: "首页",
    hiragana: "平假名",
    katakana: "片假名",
    by: "Yvonne Buttercup 制作",
    practice: "练习",
    intro: "介绍",
    language: "语言", 
    kanjiComingSoon: "汉字稍后开放",
    hiraganaPractice:"平假名练习",
    katakanaPractice:"片假名练习",
  },



  introPage: {
    

  title: "日语文字，其实是在分工工作",
  description:
    "日语看起来像同时用了三套文字，但它们不是在制造混乱。平假名、片假名和汉字会在同一个句子里各自负责不同任务。",

  exampleLabel: "来看这个例子",
  sentenceTranslation: "我喝咖啡。",

  hiraganaTitle: "平假名",
  hiraganaDescription:
    "负责发音和语法。它是日语学习的起点。助词、词尾变化和很多基础单词都会用平假名出现。",

  katakanaTitle: "片假名",
  katakanaDescription:
    "负责外来词和特殊声音。咖啡、电脑、外国人名和品牌名经常会用片假名书写。",

  kanjiTitle: "汉字",
  kanjiDescription:
    "负责表达核心意思，让你快速看出句子在说什么。",

  romajiTitle: "罗马字",
  romajiDescription:
    "ONAKAWASH 使用日本式罗马字，例如 si、ti、tu，帮助你对应假名和输入习惯。",
    productSlogan: "没有焦虑，没有压力，没有竞争，只有学习。",
currentVersion: "当前版本",
},

  practice:{
loading: "练习数据加载中...",
    loadError: "练习数据加载失败，请检查后端是否启动。",
    noQuestions: "没有可用的练习题。",
    backToHiragana: "返回平假名",
    backToKatakana: "返回片假名",
    hiraganaTitle: "平假名练习",
    katakanaTitle:"片假名练习",
    question: "第",
    score: "分数",
    accuracy: "正确率",
    complete: "练习完成",
    tryAgain: "再来一次",
    correct: "正确！",
    wrong: "错误。正确答案是：",
    next: "下一题",
  },
  kanaPage: {
  modeTitle: "模式转化",
  soundMode: "声音",
  detailMode: "详情",
  practice: "练习",
  intro: "介绍",
  home: "首页",
  currentMode: "当前模式",
  soundModeLabel: "声音模式",
  detailModeLabel: "详情模式",
  clickHint: "点击任意假名来听发音。",
  detailHint:"点击任意假名打开详情页。",
 
  switchToHiragana: "平假名",
  switchToKatakana: "片假名",
},
recordsPage: {
  backHome: "返回主页",
  title: "学习记录",
  score: "得分",
  accuracy: "正确率",
  startedAt: "开始时间",
  finishedAt: "结束时间",
  duration: "练习用时",
  seconds: "秒",
  notRecorded: "未记录",
  noRecords: "还没有练习记录",
  loadError: "学习记录加载失败，请检查后端是否启动。",
  emptyHint: "完成一轮练习后，你的成绩和用时会出现在这里。",
startPractice: "开始练习",
},

    },
    en:{
         home: {

    title: "ONAKAWASH",
     entryHint: "Click the sponge to enter ONAKAWASH!!",
    description: "A Japanese learning website where you earn coins, buy sponges, and wash a puppy's belly.",
    start: "Too many bellies in the world? No idea where to start? Chill. Just start!",
    learningRecords: "View Progress Dashboard",
  },

  progressDashboard: {
  versionLabel: "V0.4 Progress Analysis",
  title: "Progress Dashboard",
  subtitle: "Turn your practice records into clear learning feedback.",
  backHome: "← Back Home",

  totalSessions: "Total Sessions",
  averageAccuracy: "Average Accuracy",
  totalDuration: "Total Duration",
  latestPractice: "Latest Practice",
  noPracticeYet: "No practice yet",

  accuracyTrend: "Accuracy Trend",
  accuracyTrendDescription: "Recent practice accuracy from oldest to newest.",
  noTrendData: "No trend data yet.",

  practiceTypeComparison: "Practice Type Comparison",
  practiceTypeDescription: "Compare your Hiragana and Katakana practice activity and average accuracy.",
  hiragana: "Hiragana",
  katakana: "Katakana",
  sessions: "Sessions",

  recentSessions: "Recent Sessions",
  recentSessionsDescription: "Your latest practice sessions, sorted by completion time.",
  noRecordsYet: "Complete a practice session to see records here.",
  score: "Score",
  accuracy: "Accuracy",
  duration: "Duration",
  date: "Date",
},

nav :{languageName:"English",
start:"Start",
settings:"Settings",
home:"Home",
hiragana:"Hiragana",
katakana:"Katakana",
by:"By Yvonne Buttercup",
practice: "Practice",
intro: "Intro",
language: "Language",
kanjiComingSoon: "Kanji coming soon",
  hiraganaPractice:"Hiragana Practice",
    katakanaPractice:"Katakana Practice",
},

introPage: {
 

  title: "Japanese writing works as a team",
  description:
    "Japanese may look like it uses three writing systems at once, but they are not creating chaos. Hiragana, Katakana, and Kanji each have a different job within the same sentence.",

  exampleLabel: "Look at this example",
  sentenceTranslation: "I drink coffee.",

  hiraganaTitle: "Hiragana",
  hiraganaDescription:
    "It handles pronunciation and grammar. It is the starting point for learning Japanese, appearing in particles, word endings, and many basic words.",

  katakanaTitle: "Katakana",
  katakanaDescription:
    "It handles loanwords and distinctive sounds. Coffee, computers, foreign names, and brand names are often written in Katakana.",

  kanjiTitle: "Kanji",
  kanjiDescription:
    "It carries the core meaning, helping you quickly understand what a sentence is about.",

  romajiTitle: "Romaji",
  romajiDescription:
    "ONAKAWASH uses Nihon-shiki romanization, such as si, ti, and tu, to help you connect romaji with kana and Japanese input patterns.",
    productSlogan:
  "No stress. No pressure. No competition. Just learning.",
currentVersion: "Current version",
},
practice: {
  loading: "Loading practice...",
  loadError: "Failed to load practice data. Please check whether the backend is running.",
  noQuestions: "No practice questions available.",
  backToHiragana: "Back to Hiragana",
  backToKatakana: "Back to Katakana",
  hiraganaTitle: "Hiragana Practice",
  katakanaTitle: "Katakana Practice",
  question: "Question",
  score: "Score",
  accuracy: "Accuracy",
  complete: "Practice Complete",
  tryAgain: "Try Again",
  correct: "Correct!",
  wrong: "Wrong. Correct answer:",
  next: "Next",
},
kanaPage: {
  modeTitle: "Mode",
  soundMode: "Sound",
  detailMode: "Details",
  practice: "Practice",
  intro: "Intro",
  home: "Home",
  currentMode: "Current",
  soundModeLabel: "sound mode",
  detailModeLabel: "detail mode",
  clickHint: "Click any kana to hear the sound.",
  detailHint:"Click any kana to open its detail page.",
 
  switchToHiragana: "Hiragana",
  switchToKatakana: "Katakana",
},
recordsPage: {
  backHome: "Back Home",
  title: "Learning Records",
  score: "Score",
  accuracy: "Accuracy",
  startedAt: "Started",
  finishedAt: "Finished",
  duration: "Duration",
  seconds: "seconds",
  notRecorded: "Not recorded",
  noRecords: "No practice records yet",
  loadError: "Failed to load learning records. Please check the backend.",
  emptyHint: "Complete a practice session to see your score and duration here.",
startPractice: "Start Practice",
},
    },
    
    ko:{
         home: {
   
    title: "ONAKAWASH(배워시)",
    entryHint: "스펀지를 눌러 배워시에 들어가요!!",
    description: "일본어를 배우고 코인을 얻어 스펀지를 산 다음 강아지 배를 씻겨 주는 웹사이트입니다.",
    start: "세상에 씻을 배가 너무 많다고요? 어디서 시작할지 모르겠다고요? 걱정 말고 바로 시작!",
learningRecords: "학습 진행 보기",
  },
   nav: {     
  languageName:"한국어",
start:"시작",
settings:"설정",
home:"홈",
hiragana:"히라가나",
katakana:"가타카나",
by:"Yvonne Buttercup 제작",
practice: "연습",
intro: "소개",
language: "언어",
kanjiComingSoon: "한자 추후 공개",
  hiraganaPractice:"히라가나 연습",
    katakanaPractice:"가타카나 연습",
   },

progressDashboard: {
  versionLabel: "V0.4 학습 진행 분석",
  title: "학습 진행 대시보드",
  subtitle: "연습 기록을 이해하기 쉬운 학습 피드백으로 보여줍니다.",
  backHome: "← 홈으로 돌아가기",

  totalSessions: "전체 연습 횟수",
  averageAccuracy: "평균 정답률",
  totalDuration: "누적 연습 시간",
  latestPractice: "최근 연습",
  noPracticeYet: "아직 연습 기록이 없습니다",

  accuracyTrend: "정답률 추세",
  accuracyTrendDescription: "최근 연습 정답률을 오래된 순서부터 최신 순서로 보여줍니다.",
  noTrendData: "아직 추세 데이터가 없습니다.",

  practiceTypeComparison: "연습 유형 비교",
  practiceTypeDescription: "히라가나와 가타카나의 연습 횟수와 평균 정답률을 비교합니다.",
  hiragana: "히라가나",
  katakana: "가타카나",
  sessions: "연습 횟수",

  recentSessions: "최근 연습 기록",
  recentSessionsDescription: "완료 시간 기준으로 정렬한 최근 연습 기록입니다.",
  noRecordsYet: "연습을 완료하면 여기에 기록이 표시됩니다.",
  score: "점수",
  accuracy: "정답률",
  duration: "소요 시간",
  date: "날짜",
},

   introPage: {
   

  title: "일본어 문자는 서로 역할을 나누어 일해요",
  description:
    "일본어는 세 가지 문자 체계를 동시에 사용해서 복잡해 보이지만, 무질서하게 섞인 것은 아닙니다. 히라가나, 가타카나, 한자는 한 문장 안에서 서로 다른 역할을 맡습니다.",

  exampleLabel: "이 예문을 살펴보세요",
  sentenceTranslation: "저는 커피를 마십니다.",

  hiraganaTitle: "히라가나",
  hiraganaDescription:
    "발음과 문법을 담당합니다. 일본어 학습의 출발점이며, 조사와 어미 변화, 많은 기초 단어에 사용됩니다.",

  katakanaTitle: "가타카나",
  katakanaDescription:
    "외래어와 특별한 소리를 담당합니다. 커피, 컴퓨터, 외국인 이름, 브랜드명은 가타카나로 자주 씁니다.",

  kanjiTitle: "한자",
  kanjiDescription:
    "핵심 의미를 전달하여 문장이 무엇을 말하는지 빠르게 이해할 수 있게 합니다.",

  romajiTitle: "로마자",
  romajiDescription:
    "ONAKAWASH는 si, ti, tu와 같은 일본식 로마자 표기법을 사용하여 로마자와 가나, 일본어 입력 방식의 대응을 돕습니다.",
    productSlogan:
  "스트레스도, 부담도, 경쟁도 없이. 오직 배움만.",
currentVersion: "현재 버전",
},
   practice: {
  loading: "연습 데이터를 불러오는 중...",
  loadError: "연습 데이터를 불러오지 못했습니다. 백엔드가 실행 중인지 확인해 주세요.",
  noQuestions: "사용할 수 있는 연습 문제가 없습니다.",
  backToHiragana: "히라가나로 돌아가기",
  backToKatakana: "가타카나로 돌아가기",
  hiraganaTitle: "히라가나 연습",
  katakanaTitle: "가타카나 연습",
  question: "문제",
  score: "점수",
  accuracy: "정확도",
  complete: "연습 완료",
  tryAgain: "다시 하기",
  correct: "정답!",
  wrong: "오답. 정답은:",
  next: "다음",
},
kanaPage: {
  modeTitle: "모드",
  soundMode: "소리",
  detailMode: "상세",
  practice: "연습",
  intro: "소개",
  home: "홈",
  currentMode: "현재",
  soundModeLabel: "소리 모드",
  detailModeLabel: "상세 모드",
  clickHint: "아무 가나를 클릭해서 발음을 들어 보세요.",
  detailHint:"아무 가나를 클릭해서 상세 페이지를 열어 보세요.",
 
  switchToHiragana: "히라가나",
  switchToKatakana: "가타카나",
},
recordsPage: {
  backHome: "홈으로 돌아가기",
  title: "학습 기록",
  score: "점수",
  accuracy: "정확도",
  startedAt: "시작 시간",
  finishedAt: "종료 시간",
  duration: "연습 시간",
  seconds: "초",
  notRecorded: "기록 없음",
  noRecords: "아직 연습 기록이 없습니다",
  loadError: "학습 기록을 불러오지 못했습니다. 백엔드를 확인해 주세요.",
  emptyHint: "연습을 완료하면 점수와 연습 시간이 여기에 표시됩니다.",
startPractice: "연습 시작",
},
    },

        vi:{
        home: {
  title: "ONAKAWASH(Bụng Bự Đi Tắm)",
  entryHint: "Nhấn vào miếng bọt biển để vào ONAKAWASH!!",
  description:
    "Một trang web học tiếng Nhật, nơi bạn kiếm xu, mua bọt biển và rửa bụng cho chú cún.",
  start:
    "Có quá nhiều chiếc bụng trên thế giới? Không biết bắt đầu từ đâu? Đừng lo, cứ bắt đầu thôi!",
 learningRecords: "Xem tiến độ học tập",
},
nav: {
  languageName: "Tiếng Việt",
  start: "Bắt đầu",
  settings: "Cài đặt",
  home: "Trang chủ",
  hiragana: "Hiragana",
  katakana: "Katakana",
  by: "Được tạo bởi Yvonne Buttercup",
  practice: "Luyện tập",
intro: "Giới thiệu",
language: "Ngôn ngữ",
kanjiComingSoon: "Nội dung Kanji sắp ra mắt",
  hiraganaPractice:"Luyện tập Hiragana",
    katakanaPractice:"Luyện tập Katakana",
},

progressDashboard: {
  versionLabel: "V0.4 Phân tích tiến độ học tập",
  title: "Bảng tiến độ học tập",
  subtitle: "Biến lịch sử luyện tập của bạn thành phản hồi học tập dễ hiểu.",
  backHome: "← Về trang chủ",

  totalSessions: "Tổng số lần luyện tập",
  averageAccuracy: "Độ chính xác trung bình",
  totalDuration: "Tổng thời gian luyện tập",
  latestPractice: "Lần luyện tập gần nhất",
  noPracticeYet: "Chưa có lịch sử luyện tập",

  accuracyTrend: "Xu hướng độ chính xác",
  accuracyTrendDescription: "Độ chính xác của các lần luyện tập gần đây, từ cũ đến mới.",
  noTrendData: "Chưa có dữ liệu xu hướng.",

  practiceTypeComparison: "So sánh loại luyện tập",
  practiceTypeDescription: "So sánh số lần luyện tập và độ chính xác trung bình giữa Hiragana và Katakana.",
  hiragana: "Hiragana",
  katakana: "Katakana",
  sessions: "Số lần luyện tập",

  recentSessions: "Lịch sử luyện tập gần đây",
  recentSessionsDescription: "Các lần luyện tập gần đây, sắp xếp theo thời gian hoàn thành.",
  noRecordsYet: "Hoàn thành một lần luyện tập để xem lịch sử tại đây.",
  score: "Điểm",
  accuracy: "Độ chính xác",
  duration: "Thời gian",
  date: "Ngày",
},

introPage: {
  

  title: "Các hệ chữ tiếng Nhật phối hợp với nhau",
  description:
    "Tiếng Nhật có thể trông phức tạp vì sử dụng đồng thời ba hệ chữ, nhưng chúng không được trộn lẫn một cách hỗn loạn. Hiragana, Katakana và Kanji đảm nhận những vai trò khác nhau trong cùng một câu.",

  exampleLabel: "Hãy xem ví dụ này",
  sentenceTranslation: "Tôi uống cà phê.",

  hiraganaTitle: "Hiragana",
  hiraganaDescription:
    "Hiragana đảm nhiệm cách phát âm và ngữ pháp. Đây là điểm khởi đầu khi học tiếng Nhật, được dùng trong trợ từ, biến đổi đuôi từ và nhiều từ cơ bản.",

  katakanaTitle: "Katakana",
  katakanaDescription:
    "Katakana được dùng cho từ vay mượn và những âm đặc biệt. Cà phê, máy tính, tên người nước ngoài và tên thương hiệu thường được viết bằng Katakana.",

  kanjiTitle: "Kanji",
  kanjiDescription:
    "Kanji truyền tải ý nghĩa cốt lõi, giúp bạn nhanh chóng hiểu câu đang nói về điều gì.",

  romajiTitle: "Romaji",
  romajiDescription:
    "ONAKAWASH sử dụng hệ La-tinh hóa Nihon-shiki, chẳng hạn như si, ti và tu, giúp bạn liên hệ romaji với kana và cách nhập tiếng Nhật.",
    productSlogan:
  "Không căng thẳng. Không áp lực. Không cạnh tranh. Chỉ cần học.",
currentVersion: "Phiên bản hiện tại",
},
practice: {
  loading: "Đang tải dữ liệu luyện tập...",
  loadError:
    "Không thể tải dữ liệu luyện tập. Vui lòng kiểm tra xem backend có đang chạy hay không.",
  noQuestions: "Không có câu hỏi luyện tập nào.",
  backToHiragana: "Quay lại Hiragana",
  backToKatakana: "Quay lại Katakana",
  hiraganaTitle: "Luyện tập Hiragana",
  katakanaTitle: "Luyện tập Katakana",
  question: "Câu",
  score: "Điểm",
  accuracy: "Độ chính xác",
  complete: "Hoàn thành luyện tập",
  tryAgain: "Luyện tập lại",
  correct: "Chính xác!",
  wrong: "Sai. Đáp án đúng là:",
  next: "Câu tiếp theo",
},
kanaPage: {
  modeTitle: "Chế độ",
  soundMode: "Âm thanh",
  detailMode: "Chi tiết",
  practice: "Luyện tập",
  intro: "Giới thiệu",
  home: "Trang chủ",
  currentMode: "Chế độ hiện tại",
  soundModeLabel: "chế độ âm thanh",
  detailModeLabel: "chế độ chi tiết",
  clickHint: "Nhấn vào một ký tự kana để nghe phát âm.",
  detailHint: "Nhấn vào một ký tự kana để mở trang chi tiết.",

  switchToHiragana: "Hiragana",
  switchToKatakana: "Katakana",
},
recordsPage: {
  backHome: "Quay về trang chủ",
  title: "Lịch sử học tập",
  score: "Điểm",
  accuracy: "Độ chính xác",
  startedAt: "Thời gian bắt đầu",
  finishedAt: "Thời gian kết thúc",
  duration: "Thời gian luyện tập",
  seconds: "giây",
  notRecorded: "Chưa ghi nhận",
  noRecords: "Chưa có lịch sử luyện tập",
  loadError:
    "Không thể tải lịch sử học tập. Vui lòng kiểm tra backend.",
  emptyHint:
    "Hoàn thành một lượt luyện tập để xem điểm số và thời gian của bạn tại đây.",
  startPractice: "Bắt đầu luyện tập",
},
    },
};