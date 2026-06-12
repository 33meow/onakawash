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
* 数据按照清音、浊音/半浊音、拗音分类

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

* 完善五十音学习页面
* 添加更多音频文件
* 优化前后端数据结构
* 使用原创插画改进界面设计

## 后续计划

* 用户注册与登录
* 数据库接入
* 学习进度记录
* 假名详情页
* 更多原创插画和音频素材
* 线上部署

## AI 辅助说明

本项目由马艺源（Yvonne Buttercup）主导设计、组织和开发，并在 AI 辅助下完成部分学习、解释、调试和代码结构整理。

## 版权说明

本项目中的原创插画、界面视觉素材和自定义录音素材由项目作者制作，未经许可不得复制、转载或用于商业用途。

当前仓库暂未添加开源许可证。项目代码、文档和原创素材的使用权限以后续 LICENSE 文件或作者说明为准。

## 作者

Created by Yvonne Buttercup.
