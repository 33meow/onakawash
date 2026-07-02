# onakawash

Language: [English](./README.md) | [中文](./README.zh-CN.md)

## Project Introduction

onakawash is a Japanese kana learning website for beginners.

This project currently mainly includes Hiragana, Katakana, audio playback, a multilingual homepage, practice mode, Learning Records, and data connection between the frontend and the Spring Boot backend.

onakawash is also a personal learning and software engineering project. The V0.3 Learning Records architecture was redesigned after studying academic research on learning data and knowledge tracking. V0.5 extends that direction by recording item-level answer interactions through `AnswerRecord`. The project itself is not a research project, but it reflects an effort to learn from academic literature and apply research-informed design ideas to a real software system.

The project is still under development.

## Repository Structure

This repository contains the frontend of onakawash.

The backend is maintained in a separate Spring Boot repository.

* Frontend: Next.js, React, TypeScript
* Backend: Java, Spring Boot

## Current Features

* Custom visual design homepage
* Chinese / English / Korean / Vietnamese language switcher
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
* Learning Records page for viewing saved practice session history
* Practice session results saved to the Spring Boot backend
* PracticeSession records with score, total questions, accuracy, session timing, and practice metadata
* Progress Dashboard with summary metrics, accuracy trend, practice type comparison, and recent session history
* Kana Pronunciation Guide prototype for Hiragana and Katakana learning pages
* Initial pronunciation seed data for basic Hiragana vowels, including a full image-based guide for Hiragana `u`
* AnswerRecord data collection for individual Hiragana and Katakana practice answers
* Weak kana analytics based on item-level answer records
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

Practice data is loaded from the existing backend kana APIs. In v0.2, practice records were frontend-only. In v0.3, completed Hiragana and Katakana practice sessions can be saved to the backend as Learning Records.

In V0.5, practice mode also creates item-level `AnswerRecord` data. This means each completed practice round now produces:

```text
PracticeSession = one completed practice round
AnswerRecord = one answered question inside that round
```

Each `AnswerRecord` stores the kana item, the correct romaji, the selected romaji, whether the answer was correct, the response time, and the shared `sessionKey` that connects it back to the full practice session.

## Learning Records and Research-Informed Design

V0.3 adds the Learning Records module. This version was directly inspired by studying academic research on learning data and knowledge tracking. The goal was not to copy a paper, but to understand why learning systems record certain data fields and what future analysis those records can support.

The key design idea is:

```text
Record data today that can support meaningful analysis tomorrow.
```

V0.3 records one `PracticeSession` per completed practice round. Each record stores the practice type, practice mode, score, total questions, accuracy, start time, finish time, duration, and session key. This round-level record makes it possible to analyze overall progress across practice sessions.

V0.5 adds `AnswerRecord`, which stores one row for each answered question. This item-level data includes the kana item ID, kana character, correct romaji, selected romaji, correctness, answer time, response time, and the same `sessionKey` used by the parent `PracticeSession`.

```text
PracticeSession fields:
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

AnswerRecord fields:
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

The current `AnswerRecord` implementation is still kana-specific. It does not claim to be a full knowledge tracing model, but it prepares the project for future learning analytics by recording the kind of interaction data that can later support weak-point analysis and adaptive review.

Learning Records in V0.3 are therefore more than a simple history page. They are the data foundation for:

* V0.4 Progress Analysis
* V0.4.1 Kana Pronunciation Guide
* V0.5 Answer Records
* V0.6 Adaptive Review
* Future learning analytics features

During local development, the backend still uses an H2 in-memory database to avoid polluting the project with repeated test records. A persistent database strategy is planned for a later stage.

## Project Evolution

The project has evolved in stages:

```text
v0.1 Kana Data Flow
-> v0.2 Practice Mode
-> v0.3 Learning Records
-> v0.4 Progress Dashboard
-> v0.4.1 Kana Pronunciation Guide
-> v0.5 Answer Records
```

v0.1 focused on moving kana data out of frontend hardcoded arrays and into the Spring Boot backend. v0.2 added real practice interactions. v0.3 connects those interactions to a backend record system, so completed practice sessions can become structured learning data. v0.4 turns those records into a Progress Dashboard with summary metrics, accuracy trends, practice type comparison, and recent session history. v0.4.1 adds a first pronunciation guide prototype, inspired by user feedback that audio alone may not be enough for beginners to understand how to pronounce kana. v0.5 adds item-level `AnswerRecord` data, so the system can now record each answered question instead of only the final session result.

This evolution reflects the project's broader direction: building a personal Japanese learning platform that connects practical software engineering with research-informed thinking about learning records, progress analysis, item-level interaction data, and future adaptive review.

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

* V0.5 Answer Records completed
* Item-level answer data is saved for Hiragana and Katakana practice
* Weak kana analytics are shown on the Learning Records page
* V0.4.1 Kana Pronunciation Guide prototype completed
* Planning future adaptive review based on weak kana and response patterns
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

- [x] v0.3 — Learning Records
  - Save Hiragana and Katakana practice results to the backend
  - Store round-level `PracticeSession` records
  - Record score, total questions, accuracy, start time, finish time, and duration
  - Add a Learning Records page for viewing saved practice session history
  - Use research-informed design thinking to prepare data for future analysis

- [x] v0.4 — Progress Analysis
  - Build a Progress Dashboard on top of V0.3 `PracticeSession` records
  - Show overview metrics including total sessions, average accuracy, total duration, and latest practice
  - Add a recent accuracy trend chart
  - Compare Hiragana and Katakana practice session counts
  - Display recent session history with score, accuracy, duration, and date

- [x] v0.4.1 — Kana Pronunciation Guide
  - Improve the Hiragana and Katakana pages based on user feedback
  - Show mouth-shape images, romaji, pronunciation tips, and stroke hints when a kana is selected
  - Help beginners understand not only what a kana sounds like, but also how to pronounce it
  - Add a reusable `PronunciationGuidePanel` component shared by Hiragana and Katakana pages
  - Include seed data for basic Hiragana vowels
  - Include a full image-based guide for Hiragana `u` as the first complete example
  - Defer full pronunciation image/data expansion until the long-term data storage strategy is finalized

- [x] v0.5 — Answer Records
  - Save item-level answer records for Hiragana and Katakana practice
  - Store `kanaItemId`, `kana`, `correctRomaji`, `selectedRomaji`, `isCorrect`, `answeredAt`, and `responseTimeMs`
  - Connect each `AnswerRecord` to its parent `PracticeSession` through `sessionKey`
  - Fetch `AnswerRecord` data on the Learning Records page
  - Add weak kana analytics based on wrong answers and response time
  - Prepare a more KT-ready data structure without claiming to implement a complete KT model

- [ ] v0.6 — Adaptive Review
  - Use `AnswerRecord` data to generate weak-kana review sessions
  - Prioritize kana with repeated mistakes or slow response times
  - Keep saving both `PracticeSession` and `AnswerRecord` data during adaptive review

- [ ] v0.7 — Generalized Practice Items and Tags
  - Explore a more general practice item model beyond kana
  - Plan future fields such as `itemType`, `correctAnswer`, `selectedAnswer`, and `tags`
  - Support future tags such as noun, verb, adjective, past tense, present tense, and grammar patterns

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
