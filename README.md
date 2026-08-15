# 📖 말씀 성경 통합 포털 (Bible Hub)

> **말씀을 읽고, 마음에 심고, 삶으로 살아내는 스마트 올인원 성경 & 묵상 포털**

5가지 성경 및 묵상 서비스([말씀성경](https://bible-web-kr.vercel.app/), [72구절 암송](https://72amsong.vercel.app/), [로마서 암송](https://romanamsong.vercel.app/), [성경 챗봇](https://pf.kakao.com/_hRinX), [카카오페이 후원](https://qr.kakaopay.com/Ej9Bn23wT))를 하나로 묶어주는 모던 웹 포털입니다.

---

## 🌟 통합 서비스 목록

| 서비스명 | 주요 기능 및 특징 | 바로가기 |
| :--- | :--- | :--- |
| **📖 말씀성경** | 10개 다역본(개역개정, 쉬운성경, NIV, ESV 등) 대조, 원어 스트롱 사전, 스마트 관주, TTS 음성 낭독, 말씀 카드 제작, 오프라인 PWA | [바로가기](https://bible-web-kr.vercel.app/) |
| **🗂️ 72구절 암송** | 네비게이토 핵심 72구절 암송 훈련, 단계별 빈칸 채우기, 초성 힌트, 음성 낭독, 3단계 마스터 진도 관리 | [바로가기](https://72amsong.vercel.app/) |
| **✝️ 로마서 8장 암송** | 성경의 다이아몬드 로마서 8장 전장 39구절 마스터, 생명의 성령의 법 묵상, 인터랙티브 퀴즈 훈련 | [바로가기](https://romanamsong.vercel.app/) |
| **🤖 성경구절 챗봇** | 기쁨, 슬픔, 위로, 감사 등 내 마음과 상황에 꼭 맞는 성경 말씀을 실시간으로 찾아주는 카카오톡 AI 채널 | [바로가기](https://pf.kakao.com/_hRinX) |
| **💛 카카오페이 후원** | 말씀성경 웹앱 개발 및 지속적인 서버 운영을 위한 따뜻한 응원과 사역 동역 (1초 간편 송금) | [후원하기](https://qr.kakaopay.com/Ej9Bn23wT) |

---

## ✨ 핵심 기능 및 디자인

- **일관된 디자인 시스템**: 기존 서비스들의 시각적 아이덴티티를 계승한 고급스러운 Glassmorphism UI
- **다크 / 라이트 모드**: 브라우저 시스템 설정 감지 및 로컬스토리지 영구 보관
- **오늘의 은혜의 말씀 (Daily Grace)**: 매일 은혜로운 성경 구절 자동 추천 및 새로고침, 원클릭 구절 복사
- **신앙 루틴 4단계 가이드**: 말씀 통독 → 암송 훈련 → 일상 묵상 → 사역 동역으로 이어지는 신앙 라이프 가이드
- **카카오페이 QR 안내 모달**: PC/모바일 모두에서 손쉽게 후원할 수 있는 QR코드 및 바로가기 지원
- **초경량 & 고성능**: 프레임워크 빌드 과정 없이 즉시 실행 및 GitHub Pages / Vercel 배포 가능

---

## 🛠️ 기술 스택

- **Frontend**: Semantic HTML5, Vanilla CSS3 (Custom Design System, CSS Variables, Glassmorphism), Vanilla JavaScript (ES6+)
- **Typography**: Pretendard, Noto Serif KR, Outfit, EB Garamond
- **Icons**: Lucide Icons
- **Deployment**: Vercel / GitHub Pages

---

## 📂 프로젝트 구조

```
├── index.html          # 메인 포털 마크업 및 모달 UI
├── css/
│   └── style.css       # 테마 시스템, 반응형 글래스모피즘, 컴포넌트 스타일
├── js/
│   ├── verses_data.js  # 오늘의 말씀 및 묵상 구절 데이터셋
│   └── app.js          # 테마 전환, 링크 복사, 모달, 인터랙션 로직
├── .gitignore          # 깃 무시 설정 파일
└── README.md           # 프로젝트 소개 문서
```

---

## 💖 사역 후원 안내

모든 서비스는 성도님들의 영적 성장을 위해 무료로 운영되고 있습니다.  
보내주시는 따뜻한 커피 한 잔의 후원은 더 나은 기능 개발과 안정적인 서버 유지에 큰 힘이 됩니다.

- **카카오페이 후원 링크**: [https://qr.kakaopay.com/Ej9Bn23wT](https://qr.kakaopay.com/Ej9Bn23wT)
