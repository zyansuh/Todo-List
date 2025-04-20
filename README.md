```markdown
# 📝 Todo-List

Next.js 기반의 간단하고 강력한 투두 리스트 애플리케이션입니다.  
할 일 추가, 수정, 삭제 기능은 물론 필터, 정렬, 다크모드, 애니메이션 등 다양한 기능을 제공합니다.

## 🔧 사용 기술 스택

- **Next.js**
- **TypeScript**
- **React Query**
- **Zustand**
- **Styled-Components**
- **json-server** (Mock API)
- **Framer Motion** (애니메이션)
- **Lucide-react** (아이콘)

## 📁 프로젝트 구조

src/
├── app/
│   └── page.tsx               # 메인 페이지
├── components/                # 재사용 가능한 컴포넌트들
│   ├── TodoForm.tsx
│   ├── TodoItem.tsx
│   ├── TodoList.tsx
│   ├── FilterTabs.tsx
│   └── ThemeToggle.tsx
├── hooks/                     # 커스텀 훅
│   └── useTodos.ts
├── lib/                       # API 함수 모음
│   └── api.ts
├── types/                     # Type 정의
│   └── todo.ts
├── styles/
│   └── global.css
└── db.json                    # json-server를 위한 더미 데이터


## ✅ 주요 기능

- [x] 투두 리스트 조회 (React Query)
- [x] 새로운 할 일 추가
- [x] 할 일 수정 / 삭제
- [x] 완료 여부 토글
- [x] 완료된 항목 필터링
- [x] 다크모드 지원
- [x] 날짜 추가 (Due Date)
- [x] 애니메이션 효과
- [x] 반응형 디자인 지원

## 🚀 실행 방법

1. 레포지토리 클론

git clone https://github.com/zyansuh/Todo-List.git
cd Todo-List

2. 패키지 설치

npm install

3. json-server 실행 (다른 터미널에서)

npx json-server --watch db.json --port 4000

4. 개발 서버 실행

npm run dev

5. 브라우저에서 확인

http://localhost:3000

## 🌐 배포

https://todo-list-bice-two-76.vercel.app/


## 👤 개발자

- **지안 서 (zyansuh)**
- [GitHub 프로필](https://github.com/zyansuh)
