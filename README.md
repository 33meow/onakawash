# onakawash

Language: [English](./README.md) | [中文](./README.zh-CN.md)

## Project Introduction

onakawash is a Japanese kana learning website for beginners.

This project currently mainly includes Hiragana, Katakana, audio playback, a multilingual homepage, and data connection between the frontend and the Spring Boot backend.

The project is still under development.

## Repository Structure

This repository contains the frontend of onakawash.

The backend is maintained in a separate Spring Boot repository.

* Frontend: Next.js, React, TypeScript
* Backend: Java, Spring Boot

## Current Features

* Custom visual design homepage
* Chinese / English / Korean language switcher
* Hiragana learning page
* Katakana learning page
* Click a kana to play audio
* Stop the previous audio when a new kana is clicked
* Frontend connected with Spring Boot backend
* Hiragana and Katakana pages load kana data from backend APIs
* Data organized by basic sounds, dakuten/handakuten sounds, and combination sounds
* Hiragana and Katakana practice pages
* Practice entry links from the kana learning pages
* 10-question multiple-choice practice sessions
* Immediate answer feedback, locked options, score, and accuracy summary
* Multilingual UI text for kana pages and practice pages

## Kana Data Flow

The frontend no longer uses local kana data arrays as the main data source.

Current page data flow:

```text
/hiragana page  -> fetch http://localhost:8080/hiragana
/katakana page  -> fetch http://localhost:8080/katakana
```

Kana content, audio paths, image paths, section groups, and display order should be maintained in the backend `data.sql` file.

Frontend kana pages receive grouped JSON data from the Spring Boot backend and render it in the browser.

## Practice Mode

v0.2 adds a basic practice mode for Hiragana and Katakana.

Each practice session contains 10 questions. Each question shows one kana character and four romaji text options. After the user answers, the options are locked and the page shows immediate feedback. At the end of the session, the page shows the final score and accuracy.

Practice data is loaded from the existing backend kana APIs. Practice records are not saved to the backend in v0.2. Learning records and progress tracking are planned for v0.3 and later.

## Tech Stack and Creative Tools

### Frontend

* Next.js
* React
* TypeScript
* CSS

### Backend

* Java
* Spring Boot

### Creative Tools

* Procreate: used for creating original illustrations and UI visual assets
* 123APPS Online Voice Recorder: used for creating custom kana audio materials

### Development Tools

* VS Code
* IntelliJ IDEA
* Git
* GitHub

## How to Run Locally

### Frontend

This repository contains the frontend of onakawash.

Install dependencies:

```bash
npm install
```

Start the frontend development server:

```bash
npm run dev
```

Open in the browser:

```txt
http://localhost:3000
```

### Backend

The backend is maintained in a separate Spring Boot repository.

To run the backend locally, open the backend project in IntelliJ IDEA and click the green Run button.

It can also be started with Maven Wrapper on Windows:

```bash
.\mvnw.cmd spring-boot:run
```

## Project Status

This project is still under development.

Current focus:

* Stabilizing v0.2 Practice Mode
* Testing Hiragana and Katakana practice flows
* Preparing for v0.3 Learning Records
* Continuing interface improvements with original illustrations

## Roadmap

- [x] v0.1 — Kana Data Flow
  - Load Hiragana and Katakana data from the H2 database
  - Return grouped kana sections through Spring Boot APIs
  - Render kana tables in the Next.js frontend

- [x] v0.2 — Practice Mode
  - Add quiz-based kana practice
  - Support Hiragana and Katakana practice
  - Add practice entry links from kana pages
  - Use 10-question sessions with four romaji options per question
  - Lock answer options after the user answers
  - Show immediate feedback, score, and accuracy
  - Keep practice records frontend-only in this version

- [ ] v0.3 — Learning Records
  - Save practice results to the backend
  - Store correctness and response time

- [ ] v0.4 — Learning Analytics
  - Show accuracy, weak kana, and practice history

- [ ] v1.0 — Public Demo
  - Deploy frontend and backend
  - Add documentation, screenshots, and architecture notes

## AI Assistance Statement

This project is led in design, organization, and development by Ma Yiyuan (Yvonne Buttercup), with AI assistance for part of the learning, explanation, debugging, and code structure organization.

## Copyright Notice

The original illustrations, UI visual assets, and custom audio materials in this project are created by the project author. They may not be copied, redistributed, or used for commercial purposes without permission.

This repository does not currently include an open-source license. The usage rights of the project code, documentation, and original assets are subject to a future LICENSE file or author statement.

## Author

Created by Yvonne Buttercup.
