# onakawash

语言：[English](./README.md) | [中文](./README.zh-CN.md)

## 项目介绍

onakawash 是一个面向日语初学者的五十音学习网站。

这个项目目前主要包含平假名、片假名、音频播放、多语言首页，以及前端和 Spring Boot 后端的数据连接。

项目仍在开发中。

## 仓库结构

本仓库是 onakawash 的前端仓库。

后端部分维护在另一个 Spring Boot 仓库中。

* 前端：Next.js、React、TypeScript
* 后端：Java、Spring Boot

## 当前功能

* 自定义视觉设计首页
* 中文 / 英文 / 韩文语言切换
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
* 假名页面和练习页面支持中文 / 英文 / 韩文界面文字

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

练习题数据来自现有的后端假名 API。v0.2 暂时不把练习记录保存到后端。学习记录、正确率统计和进度追踪计划放到 v0.3 及之后阶段。

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

* 稳定 v0.2 练习模式
* 测试平假名和片假名练习流程
* 准备 v0.3 学习记录功能
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

- [ ] v0.3 — Learning Records（学习记录）
  - 将练习结果保存到后端
  - 记录正确率和答题时间

- [ ] v0.4 — Learning Analytics（学习分析）
  - 展示正确率、薄弱假名和练习历史

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
