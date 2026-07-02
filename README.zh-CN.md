# onakawash

语言：[English](./README.md) | [中文](./README.zh-CN.md)

## 项目介绍

onakawash 是一个面向日语初学者的五十音学习网站。

这个项目目前主要包含平假名、片假名、音频播放、多语言首页、练习模式、学习记录、学习进度分析，以及前端和 Spring Boot 后端的数据连接。

onakawash 同时也是一个个人学习与软件工程实践项目。V0.3 Learning Records（学习记录）的架构，是在学习有关学习数据与知识追踪的学术研究后重新设计的。V0.5 在这个方向上继续推进，加入了 `AnswerRecord`，用于记录每一道题的答题交互数据。本项目本身并不是一个完整的研究项目，但它体现了从学术文献中提取设计思路，并把这些思路应用到真实软件系统中的过程。

项目仍在开发中。

## 仓库结构

本仓库是 onakawash 的前端仓库。

后端部分维护在另一个 Spring Boot 仓库中。

* 前端：Next.js、React、TypeScript
* 后端：Java、Spring Boot

## 当前功能

* 自定义视觉设计首页
* 中文 / 英文 / 韩文 / 越南语语言切换
* 平假名学习页面
* 片假名学习页面
* 点击假名播放音频
* 点击新假名时停止上一个音频
* 前端连接 Spring Boot 后端
* 平假名和片假名页面都从后端接口加载假名数据
* 数据按照清音、浊音/半浊音、拗音分类
* 平假名和片假名练习页面
* 从假名学习页面进入练习模式
* 每轮 10 题的选择题练习
* 答题后锁定选项，并显示即时反馈、分数和正确率
* 学习记录页面，用于查看已保存的练习轮次历史
* 练习结果可以保存到 Spring Boot 后端
* PracticeSession 记录包含分数、总题数、正确率、练习时间和练习元数据
* 学习进度面板，展示概览数据、正确率趋势、练习类型对比和最近练习历史
* 平假名和片假名学习页面接入假名发音辅助原型
* 平假名基础元音已有初始发音种子数据，其中平假名 `う` 已接入口型图和笔画提示图
* 平假名和片假名练习可以保存逐题级别的 `AnswerRecord`
* 学习记录页面可以基于逐题答题记录显示易错假名分析
* 假名页面和练习页面支持中文 / 英文 / 韩文 / 越南语界面文字

## 假名数据流

前端不再把本地假名数组作为主要数据源。

当前页面数据流：

```text
/hiragana 页面  -> fetch http://localhost:8080/hiragana
/katakana 页面  -> fetch http://localhost:8080/katakana
```

假名内容、音频路径、图片路径、分类和显示顺序应维护在后端的 `data.sql` 文件中。

前端假名页面从 Spring Boot 后端接收分组后的 JSON 数据，并在浏览器中渲染。

## 练习模式

v0.2 添加了平假名和片假名的基础练习模式。

每轮练习包含 10 道题。每道题显示一个假名，用户从 4 个 romaji 文本选项中选择正确答案。答题后选项会被锁定，页面会立即显示正确或错误反馈。练习结束后，页面会显示最终分数和正确率。

练习题数据来自现有的后端假名 API。在 v0.2 中，练习记录只保留在前端。到了 v0.3，完成后的平假名和片假名练习可以作为 Learning Records（学习记录）保存到后端。

在 V0.5 中，练习模式进一步加入了逐题级别的 `AnswerRecord`。也就是说，一轮练习结束后，系统会保存两类数据：

```text
PracticeSession = 一整轮练习记录
AnswerRecord = 这一轮练习中的某一道题记录
```

每条 `AnswerRecord` 会记录假名题目、正确 romaji、用户选择的 romaji、是否答对、答题时间、反应时间，以及用于连接整轮练习的 `sessionKey`。

## 学习记录与研究启发式设计

V0.3 添加了 Learning Records（学习记录）模块。这个版本直接受到学习数据与知识追踪相关学术研究的启发。这里的目标不是复制论文，而是理解学习系统为什么要记录某些数据字段，以及这些字段未来可以支持怎样的分析。

核心设计思想是：

```text
今天记录数据，是为了明天能够进行有意义的分析。
```

V0.3 中，每完成一轮练习，就保存一条 `PracticeSession`。每条记录包含练习类型、练习模式、分数、总题数、正确率、开始时间、结束时间、持续时间和 `sessionKey`。这是一种轮次级别的记录，适合分析整体学习进度。

V0.5 加入了 `AnswerRecord`，用于记录每一道题的答题交互。它包含假名题目 ID、假名字符、正确 romaji、用户选择的 romaji、是否答对、答题时间、反应时间，以及和 `PracticeSession` 相同的 `sessionKey`。

```text
PracticeSession 字段：
id
userId
sessionKey
practiceType
practiceMode
score
totalQuestions
accuracy
startedAt
finishedAt
durationSeconds
createdAt

AnswerRecord 字段：
id
userId
sessionKey
practiceType
practiceMode
kanaItemId
kana
correctRomaji
selectedRomaji
isCorrect
answeredAt
responseTimeMs
createdAt
```

当前 `AnswerRecord` 仍然是针对假名练习设计的，并不声称已经实现完整的知识追踪模型。但它开始记录更细粒度的学习交互数据，为之后的易错点分析、自适应复习和更一般的学习分析功能打下基础。

因此，V0.3 的学习记录不只是一个历史记录页面。它是后续功能的数据基础，包括：

* V0.4 Progress Analysis（进度分析）
* V0.4.1 Kana Pronunciation Guide（假名发音辅助）
* V0.5 Answer Records（逐题答题记录）
* V0.6 Adaptive Review（自适应复习）
* 未来的学习分析功能

在本地开发阶段，后端仍然使用 H2 内存数据库，以避免反复测试产生的数据污染项目。持久化数据库策略会放在后续阶段再决定。

## 项目演进

项目目前按阶段逐步演进：

```text
v0.1 Kana Data Flow（假名数据流）
-> v0.2 Practice Mode（练习模式）
-> v0.3 Learning Records（学习记录）
-> v0.4 Progress Dashboard（学习进度面板）
-> v0.4.1 Kana Pronunciation Guide（假名发音辅助）
-> v0.5 Answer Records（逐题答题记录）
```

v0.1 重点是把假名数据从前端硬编码数组迁移到 Spring Boot 后端。v0.2 添加了真实的练习交互。v0.3 则把练习行为连接到后端记录系统，让完成后的练习轮次可以成为结构化的学习数据。v0.4 在这些记录之上构建学习进度面板，展示概览数据、正确率趋势、练习类型对比和最近练习历史。v0.4.1 基于用户反馈加入了第一版假名发音辅助原型，用来补充“只听声音可能仍然不知道嘴型和发音方式”的问题。v0.5 加入逐题级别的 `AnswerRecord`，让系统不只保存最终练习结果，也能保存每一道题的答题过程。

这个演进方向体现了项目更长期的目标：构建一个个人日语学习平台，并尝试把实际软件工程能力与学习记录、进度分析、逐题交互数据和未来自适应复习相关的研究启发式思考连接起来。

## 技术栈与创作工具

### 前端

* Next.js
* React
* TypeScript
* CSS

### 后端

* Java
* Spring Boot

### 创作工具

* Procreate：用于绘制原创插画和界面视觉素材
* 123APPS Online Voice Recorder：用于制作五十音自定义音频素材

### 开发工具

* VS Code
* IntelliJ IDEA
* Git
* GitHub

## 本地运行方式

### 前端

本仓库是 onakawash 的前端仓库。

安装依赖：

```bash
npm install
```

启动前端开发服务器：

```bash
npm run dev
```

在浏览器中打开：

```txt
http://localhost:3000
```

### 后端

后端维护在另一个 Spring Boot 仓库中。

本地运行后端时，可以在 IntelliJ IDEA 中打开后端项目，然后点击绿色 Run 按钮。

也可以在 Windows 终端中使用 Maven Wrapper 启动：

```bash
.\mvnw.cmd spring-boot:run
```

## 项目状态

本项目仍在开发中。

当前重点：

* V0.5 Answer Records（逐题答题记录）已完成
* 平假名和片假名练习都可以保存逐题级别的答题记录
* 学习记录页面可以读取 `AnswerRecord` 并显示易错假名分析
* V0.4.1 假名发音辅助原型已完成
* 下一阶段计划基于易错假名和反应时间探索自适应复习
* 继续使用原创插画改进界面设计

## 后续计划

- [x] v0.1 — Kana Data Flow（假名数据流）
  - 从 H2 数据库加载平假名和片假名数据
  - 通过 Spring Boot API 返回分组后的假名数据
  - 在 Next.js 前端渲染假名表

- [x] v0.2 — Practice Mode（练习模式）
  - 添加基于题目的假名练习
  - 支持平假名和片假名练习
  - 从假名页面进入练习模式
  - 每轮 10 题，每题 4 个 romaji 选项
  - 答题后锁定选项
  - 显示即时反馈、分数和正确率
  - 本版本练习记录只保留在前端，不保存到后端

- [x] v0.3 — Learning Records（学习记录）
  - 将平假名和片假名练习结果保存到后端
  - 保存轮次级 `PracticeSession` 记录
  - 记录分数、总题数、正确率、开始时间、结束时间和持续时间
  - 添加学习记录页面，用于查看已保存的练习历史
  - 使用研究启发式设计思路，为未来分析准备数据

- [x] v0.4 — Progress Analysis（进度分析）
  - 基于 V0.3 的 `PracticeSession` 记录构建学习进度面板
  - 展示总练习次数、平均正确率、总练习时长和最近一次练习
  - 添加最近正确率趋势图
  - 对比平假名和片假名练习次数
  - 展示最近练习历史，包括分数、正确率、用时和日期

- [x] v0.4.1 — Kana Pronunciation Guide（假名发音辅助）
  - 基于用户反馈改进平假名和片假名页面
  - 点击假名后，在右侧显示口型图片、romaji、发音提示和笔画提示
  - 帮助初学者不只听到假名读音，也能理解嘴型和发音位置
  - 抽出可复用的 `PronunciationGuidePanel` 组件，供平假名和片假名页面共用
  - 为平假名基础元音加入初始发音种子数据
  - 以平假名 `う` 作为第一个完整示例，接入口型图和笔画提示图
  - 完整发音图片和数据录入延后到长期数据存储策略确定之后再扩展

- [x] v0.5 — Answer Records（逐题答题记录）
  - 保存平假名和片假名练习中的逐题答题记录
  - 记录 `kanaItemId`、`kana`、`correctRomaji`、`selectedRomaji`、`isCorrect`、`answeredAt` 和 `responseTimeMs`
  - 通过 `sessionKey` 将每条 `AnswerRecord` 连接回所属的 `PracticeSession`
  - 学习记录页面可以读取 `AnswerRecord` 数据
  - 基于错误次数和反应时间加入易错假名分析
  - 准备更接近知识追踪需要的数据结构，但不声称已经实现完整知识追踪模型

- [ ] v0.6 — Adaptive Review（自适应复习）
  - 使用 `AnswerRecord` 数据生成易错假名复习
  - 优先练习反复答错或反应较慢的假名
  - 在自适应复习中继续保存 `PracticeSession` 和 `AnswerRecord`

- [ ] v0.7 — Generalized Practice Items and Tags（通用练习项目与标签）
  - 探索超出假名的通用练习项目模型
  - 规划未来字段，例如 `itemType`、`correctAnswer`、`selectedAnswer` 和 `tags`
  - 支持未来的标签，例如 noun、verb、adjective、past tense、present tense 和 grammar patterns

- [ ] v1.0 — Public Demo（公开展示版本）
  - 部署前端和后端
  - 添加文档、截图和架构说明

## AI 辅助说明

本项目由马艺源（Yvonne Buttercup）主导设计、组织和开发，并在 AI 辅助下完成部分学习、解释、调试和代码结构整理。

## 版权说明

本项目中的原创插画、界面视觉素材和自定义录音素材由项目作者制作，未经许可不得复制、转载或用于商业用途。

当前仓库暂未添加开源许可证。项目代码、文档和原创素材的使用权限以后续 LICENSE 文件或作者说明为准。

## 作者

Created by Yvonne Buttercup.
