//告诉next.js这个页面不是纯静态的，而是需要在浏览器运行的。
"use client";

import Link from "next/link";
//useEffect：页面打开时 fetch 后端数据。   打开页面后偷偷做一件事的hook。
//useMemo：根据语言拿当前文字包，先写着，后面会用。
//useState：保存题目、分数、当前题号等状态。   保存页面状态的hook。
import { useEffect, useMemo, useState } from "react";
import { messages, type Language } from "../../messages";

//KanaItem / KanaSection：对应后端返回的数据结构。
//一个假名卡面
type KanaItem = {
    id: string;
    kana: string;
    romaji: string;
    audioSrc: string;
    imageSrc: string | null;
};


type KanaSection = {
    title: string;
    description: string;

    // items 里可能有 null，表示这个位置没有假名了（比如最后一行只有 3 个假名，不满 5 个）。
    items: (KanaItem|null)[];
};

// Question：一个题目。
type Question = {
    item: KanaItem;
    // 4 个选项，其中一个是正确答案（item.romaji），其他三个是随机的错误答案。
    options: string[]; 


};

//常量：题目数量、选项数量。
const QUESTION_COUNT = 10;
const OPTION_COUNT = 4;

//作用：打乱数组顺序。用在生成选项时，打乱正确答案和错误答案的顺序。
//T 是泛型，表示这个函数可以接受任何类型的数组，返回同类型的数组。（可以是字符串数组可以是KanaItem，任何类型）
function shuffleArray<T>(array:T[]):T[]{
    //复制一份数组，避免修改原数组。
    const copied = [...array];
    //循环从后往前，随机选一个位置交换。
    //i 从 copied.length - 1 开始，直到 i > 0（最后一个元素不需要交换），每次 i 减 1。
    for(let i = copied.length - 1; i > 0; i--){
        //math.random() 生成 0（包含）到 1（不包含）之间的随机数。
        //math.floor() 向下取整。
        //这句话可以得到一个合法的随机索引，范围是 0 到 i（包含 i）。
        const randomIndex = Math.floor(Math.random() * (i + 1));
        //temp就是一个临时盒子，用来交换 copied[i] 和 copied[randomIndex]。
        const temp = copied[i];
        copied[i] = copied[randomIndex];
        copied[randomIndex] = temp;

}
return copied;
}

//把很多section里的item都拿出来，放在一个大数组里，方便后面生成题目。
//flatten的意思是“拍平”，把多层结构变成一层结构。
function flattenKanaSections(sections: KanaSection[]): KanaItem[] {
    //map每个section，拿到它的items（可能有null），然后用flatMap把所有items放在一起，最后过滤掉null。
  return sections.flatMap((section) =>
    //section的item可能是null，所以这里用filter过滤掉null，并且告诉TypeScript过滤掉null后剩下的就是KanaItem。（很重要）
    section.items.filter((item): item is KanaItem => item !== null)
  );
}

//此函数为题目生成四个选项：一个正确答案（correctRomaji）和三个错误答案（从allItems里随机选的）。最后把四个选项打乱顺序返回。
function createOptions(correctRomaji: string, allItems: KanaItem[]): string[] {
  const wrongOptions = shuffleArray(
    //从所有假名卡片中拿出romaji
    allItems
      .map((item) => item.romaji)
      //过滤掉正确答案的romaji。
      .filter((romaji) => romaji !== correctRomaji)
      //从打乱的数组中取出三个错误
  ).slice(0, OPTION_COUNT - 1);
//把正确答案和错误答案放在一起，打乱顺序，返回。
  return shuffleArray([correctRomaji, ...wrongOptions]);
}

//生成一整组题目，每个题目包含一个假名卡片和四个选项。
function createQuestions(items: KanaItem[]): Question[] {
    //打乱所有假名卡片，取前 QUESTION_COUNT 个，生成题目。
  return shuffleArray(items)
  //从打乱后的假名卡片里取前 QUESTION_COUNT 个，生成题目。
    .slice(0, QUESTION_COUNT)
    .map((item) => ({
      item,
      options: createOptions(item.romaji, items),
    }));
}

//React页面组件：HiraganaPracticePage。
//把这个函数作为这个页面的默认导出，next.js 就知道访问它时要渲染这个组件。
export default function HiraganaPracticePage() {
    //页面状态（记忆）
  const [language, setLanguage] = useState<Language>("zh");
  //保存题目列表（刚开始是空的）
  const [questions, setQuestions] = useState<Question[]>([]);
  //保存当前题号（从0开始）index是0，题号是1。
  const [currentIndex, setCurrentIndex] = useState(0);
//保存当前分数，刚开始是0。
  const [score, setScore] = useState(0);
  //保存用户选择的答案，刚开始是null。答案是字符串ABCD
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  //记录当前题答过没，默认是没有答，用户回答过后就变成true，防止用户重复答题。
  const [isAnswered, setIsAnswered] = useState(false);
  //保存是否正在加载题目，刚开始是true。刚开始打开需要去后端fetch数据，所以是true，等数据加载完了就变成false。
  //防止空白页面
  const [isLoading, setIsLoading] = useState(true);
//保存错误信息，刚开始是null。fetch失败时会显示错误信息。
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
//useMemo：根据语言拿当前文字包，先写着，后面会用。
//只要language没变，t就不变。t依赖language
  const t = useMemo(() => messages[language], [language]);

  //页面渲染完成后自动执行effect里面的代码
  useEffect(() => {
    //读取用户上次保存的语言
    //localstorage就像小抽屉，可以把language的type存在里面
    const savedLanguage = localStorage.getItem("language");
//检测这个language是否合法，只有这三种（确保安全）
    if (
      savedLanguage === "zh" ||
      savedLanguage === "en" ||
      savedLanguage === "ko"
    ) {
      setLanguage(savedLanguage);
    }
  }, []);


//不管成功还是失败都结束loading
//页面打开后自动执行effect
    useEffect(() => {
      //这个函数里有需要等待的东西（async）  写async函数
    async function fetchHiraganaPracticeData() {
      //尝试执行可能出错的代码
      //所以fetch一般写在try里
        try {
            //显示练习数据加载中
        setIsLoading(true);
        //先清空旧的错误信息（比如上次出错了，这次开始前把记录清零）
        setErrorMessage(null);
//向后端发请求
//await，fetch不是立刻完成的，需要等待
        const res = await fetch("http://localhost:8080/katakana");
//http状态码是不是成功，比如200是成功
//失败的话立马拉响警报"Failed to fetch hiragana practice data"
        if (!res.ok) {
          throw new Error("Failed to fetch hiragana practice data");
        }
//前端不能用json所以需要转化成前端数组
        const sections: KanaSection[] = await res.json();
        //把section压平，因为后端返回的是分组数据
        const items = flattenKanaSections(sections);
        const generatedQuestions = createQuestions(items);

        setQuestions(generatedQuestions);
      } catch (error) {
        console.error(error);
        setErrorMessage(t.practice.loadError);
      } finally {
        setIsLoading(false);
      }
    }

    fetchHiraganaPracticeData();
  }, []);

  //用户点击答案是干什么
  //处理用户点击答案这件事
    function handleAnswerClick(answer: string) {
       //当前题有没有答过？如果答过就跳过这个function'
        if (isAnswered) {
      return;
    }

    //从题目数组里拿出当前正在做的
    const currentQuestion = questions[currentIndex];

    //记录用户选的那个答案
    setSelectedAnswer(answer);
    //反馈答对了打错了
    setIsAnswered(true);

    //判断答案对不对
    //typeScrip表示严格相等
    if (answer === currentQuestion.item.romaji) {
        //设置分数（currentscore表示最新分数）
      setScore((currentScore) => currentScore + 1);
    }
  }
//负责进入下一题，此函数可以绑在下一题按钮
  function handleNextQuestion() {
  //清空用户答案
    setSelectedAnswer(null);
    //告诉页面新的题还没答（开锁下一题）
    setIsAnswered(false);
    //记录题号
    setCurrentIndex((index) => index + 1);
  }

  //重新开始一轮练习
  //一般绑定到重新开始按钮
  function handleRestart() {
    //allitems是当前十道题的假名
    //所以重新开始，还是这是个假名里（以后可以升级现在目前是v0.2）
    const allItems = questions.map((question) => question.item);
//新的一轮题目（还是那是个假名）
    const newQuestions = createQuestions(allItems);

    setQuestions(newQuestions);
    //重开后分数清零，答案清零...
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
  }

  //算三个页面显示的结果
  
  //这轮联系是否完成？true or false
  //条件1，题目数量大于0；必须已经生成
  //条件2，当前题号大于等于数组，题号的=等于index+1；
  //&&是并且，两个同时成立
    const isComplete = questions.length > 0 && currentIndex >= questions.length;
    //三元运算符，如果..就用前面的，否则用后面的
    //练习结束后就没有题目了所以是null
  const currentQuestion = isComplete ? null : questions[currentIndex];
  //准确率，得到一个百分比数字
  //math.round是四舍五入
  const accuracy =
    questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;


    //三种特殊情况

    //early return
    //加载界面（以后可以加载动画）
      if (isLoading) {
    return (
      <main
        style={{
            //浏览器窗口完美高度
          minHeight: "100vh",
          display: "flex",
          //上下左右居中套餐
          alignItems: "center",
          justifyContent: "center",
          //渐变
          background: "linear-gradient(180deg, #fff7fb 0%, #f7fbff 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <p style={{ color: "#7a6f7d", 
            //bold
            fontWeight: "700" }}>
          {t.practice.loading}
        </p>
      </main>
    );
  }

  //如果有错误信息显示错误页面
  if (errorMessage) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #fff7fb 0%, #f7fbff 100%)",
          fontFamily: "Arial, sans-serif",
          padding: "24px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#b83280", fontWeight: "800" }}>
            {t.practice.loadError}
          </p>
          <Link href="/katakana" style={{ color: "#174a7c", fontWeight: "800" }}>
           {t.practice.backToKatakana}
          </Link>
        </div>
      </main>
    );
  }

  //如果当前没有题目
  if (!currentQuestion && !isComplete) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #fff7fb 0%, #f7fbff 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <p style={{ color: "#7a6f7d", fontWeight: "700" }}>
         {t.practice.noQuestions}
        </p>
      </main>
    );
  }

  //正式页面的ui

    return (
        //main是整个页面
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #fff7fb 0%, #f7fbff 100%)",
        fontFamily: "Arial, sans-serif",
        padding: "36px 20px",
      }}
    >
      <section
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/*返回页面 */}
        <Link
          href="/katakana"
          style={{
            display: "inline-block",
            marginBottom: "24px",
            color: "#174a7c",
            fontWeight: "800",
            textDecoration: "none",
          }}
        >
          ← {t.practice.backToKatakana}
        </Link>

        {isComplete ? (
            //div就是普通容器
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.78)",
              border: "1px solid rgba(243,182,208,0.7)",
              borderRadius: "24px",
              padding: "36px 24px",
              boxShadow: "0 12px 28px rgba(80, 60, 90, 0.08)",
            }}
          >
            <p
              style={{
                color: "#b83280",
                fontWeight: "800",
                margin: "0 0 12px",
              }}
            >
              {t.practice.complete}
            </p>

            <h1
              style={{
                color: "#2f2435",
                fontSize: "36px",
                margin: "0 0 18px",
              }}
            >
              {t.practice.score}: {score} / {questions.length}
            </h1>

            <p
              style={{
                color: "#7a6f7d",
                fontSize: "18px",
                fontWeight: "700",
                marginBottom: "28px",
              }}
            >
              {t.practice.accuracy}: {accuracy}%
            </p>

            <button
              type="button"
              onClick={handleRestart}
              style={{
                padding: "12px 18px",
                borderRadius: "999px",
                border: "2px solid #d85b9f",
                backgroundColor: "#fff0f6",
                color: "#7a2e5d",
                fontWeight: "800",
                cursor: "pointer",
              }}
            >
              {t.practice.tryAgain}
            </button>
          </div>
        ) : (
          currentQuestion && (
            <div>
              <p
                style={{
                  display: "inline-block",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  backgroundColor: "#fff0f6",
                  color: "#b83280",
                  fontWeight: "800",
                  fontSize: "14px",
                  margin: "0 0 14px",
                }}
              >
                {t.practice.question} {currentIndex + 1} / {questions.length}
              </p>

              <h1
                style={{
                  color: "#2f2435",
                  fontSize: "34px",
                  margin: "0 0 10px",
                }}
              >
                {t.practice.katakanaTitle}
              </h1>

              <p
                style={{
                  color: "#7a6f7d",
                  fontWeight: "700",
                  margin: "0 0 24px",
                }}
              >
                {t.practice.score}: {score}
              </p>

              <div
                style={{
                  minHeight: "180px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(255,255,255,0.78)",
                  border: "1px solid rgba(243,182,208,0.7)",
                  borderRadius: "24px",
                  boxShadow: "0 12px 28px rgba(80, 60, 90, 0.08)",
                  marginBottom: "24px",
                }}
              >
                <span
                  style={{
                    fontSize: "96px",
                    color: "#174a7c",
                    fontWeight: "800",
                    lineHeight: "1",
                  }}
                >
                  {currentQuestion.item.kana}
                </span>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(140px, 1fr))",
                  gap: "14px",
                  marginBottom: "20px",
                }}
              >
                {currentQuestion.options.map((option) => {
                  const isCorrect = option === currentQuestion.item.romaji;
                  const isSelected = option === selectedAnswer;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleAnswerClick(option)}
                      disabled={isAnswered}
                      style={{
                        minHeight: "64px",
                        borderRadius: "18px",
                        border:
                          isAnswered && isCorrect
                            ? "2px solid #16a34a"
                            : isAnswered && isSelected
                            ? "2px solid #dc2626"
                            : "1px solid #dce7f8",
                        backgroundColor:
                          isAnswered && isCorrect
                            ? "#dcfce7"
                            : isAnswered && isSelected
                            ? "#fee2e2"
                            : "white",
                        color: "#174a7c",
                        fontSize: "22px",
                        fontWeight: "800",
                        cursor: isAnswered ? "default" : "pointer",
                      }}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <p
                  style={{
                    color:
                      selectedAnswer === currentQuestion.item.romaji
                        ? "#15803d"
                        : "#b91c1c",
                    fontWeight: "800",
                    minHeight: "28px",
                  }}
                >
                  {selectedAnswer === currentQuestion.item.romaji
                    ? t.practice.correct
                    : `${t.practice.wrong} ${currentQuestion.item.romaji}`}
                </p>
              )}

              {isAnswered && (
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  style={{
                    marginTop: "12px",
                    padding: "12px 18px",
                    borderRadius: "999px",
                    border: "2px solid #8b5cf6",
                    backgroundColor: "#f4eef6",
                    color: "#5b3aa0",
                    fontWeight: "800",
                    cursor: "pointer",
                  }}
                >
                  {t.practice.next}
                </button>
              )}
            </div>
          )
        )}
      </section>
    </main>
  );
}