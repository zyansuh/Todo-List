<div align="center">
  <h1>📝 Todo-List</h1>
  <p>Next.js 기반의 심플하고 강력한 투두 리스트 애플리케이션</p>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=Zustand&logoColor=white">
  <img src="https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
  <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
  <img src="https://img.shields.io/badge/Framer Motion-EF007B?style=for-the-badge&logo=framer&logoColor=white">
</div>

---

## 🔥 주요 기능

- ✅ 투두 항목 조회 / 추가 / 삭제 / 수정
- ✅ 완료 여부 토글
- ✅ 완료/미완료 필터링
- ✅ 날짜(기한) 기능
- ✅ 다크 모드 지원
- ✅ 애니메이션 적용
- ✅ 반응형 UI 디자인
- ✅ json-server 기반 Mock API

---

## 📂 폴더 구조

```
src/
├── app/
│   └── page.tsx               # 메인 페이지
├── components/                # UI 컴포넌트들
│   ├── TodoForm.tsx
│   ├── TodoItem.tsx
│   ├── TodoList.tsx
│   ├── FilterTabs.tsx
│   └── ThemeToggle.tsx
├── hooks/                     # 커스텀 훅
│   └── useTodos.ts
├── lib/                       # API 호출
│   └── api.ts
├── types/                     # Type 정의
│   └── todo.ts
├── styles/
│   └── global.css
└── db.json                    # json-server 용 데이터
```

---

## ⚙️ 실행 방법

1. 레포지토리 클론

```bash
git clone https://github.com/zyansuh/Todo-List.git
cd Todo-List
```

2. 패키지 설치

```bash
npm install
```

3. json-server 실행

```bash
npx json-server --watch db.json --port 4000
```

4. 개발 서버 실행

```bash
npm run dev
```

5. 브라우저에서 확인

```
http://localhost:3000
```

---

## 📚 STACKS

<div align=center> 
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"> 
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=Zustand&logoColor=white">
  <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
  <img src="https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
  <img src="https://img.shields.io/badge/FramerMotion-EF007B?style=for-the-badge&logo=framer&logoColor=white">
  <img src="https://img.shields.io/badge/json--server-000000?style=for-the-badge&logo=JSON&logoColor=white">
</div>

---

## 🌐 배포 링크

👉 [https://todo-list-bice-two-76.vercel.app](https://todo-list-bice-two-76.vercel.app)

---

## 👤 만든 사람

**지안 서 (zyansuh)**  
[🔗 GitHub 프로필](https://github.com/zyansuh)
```
