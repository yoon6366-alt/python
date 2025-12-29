# Copilot Instructions

## 프로젝트 개요
한국어 정부/공공기관 스타일 웹사이트 컬렉션 (React + Tailwind CSS)
- **`/`**: 강남구 홈페이지 포털
- **`/upcycle/*`**: 광명 업사이클센터 교육신청 시스템

## 기술 스택
- **프레임워크**: React 18 + Vite
- **스타일링**: Tailwind CSS
- **라우팅**: React Router v6
- **상태 관리**: useState, localStorage

## 프로젝트 구조
```
react-app/
├── src/
│   ├── components/          # 재사용 컴포넌트
│   │   ├── gangnam/         # 강남구 전용 (Header.jsx)
│   │   ├── upcycle/         # 업사이클 전용 (Header, Banner, EducationCard)
│   │   └── common/          # 공통 (Breadcrumb)
│   ├── pages/               # 페이지 컴포넌트
│   │   ├── gangnam/Home.jsx
│   │   └── upcycle/         # Home, Classes, Detail, Apply, Complete
│   ├── data/                # 정적 데이터
│   │   └── educationData.js
│   ├── App.jsx              # 라우트 정의
│   └── index.css            # Tailwind + 커스텀 클래스
└── tailwind.config.js       # 커스텀 색상 정의
```

## Tailwind 컨벤션

### 커스텀 색상 (`tailwind.config.js`)
```javascript
colors: {
  gangnam: { primary: '#0064FF', secondary: '#0052CC' },  // 토스 스타일
  upcycle: { primary: '#0066cc', secondary: '#2c5aa0' },
}
```

### 커스텀 컴포넌트 클래스 (`index.css`)
```css
@layer components {
  .btn-primary { @apply bg-gangnam-primary text-white px-6 py-3 rounded-lg... }
  .card { @apply bg-white rounded-xl shadow-md hover:shadow-lg... }
  .input-field { @apply w-full px-4 py-3 border border-gray-300 rounded-lg... }
  .container-main { @apply max-w-container mx-auto px-4; }
}
```

## 코드 패턴

### 이미지 Fallback
```jsx
<img
  src={education.image}
  onError={(e) => { e.target.src = fallbackSvg }}
/>
```

### 폼 검증
```javascript
const validateForm = () => {
  const phonePattern = /^[0-9\-]{10,}$/
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // errors 상태로 에러 메시지 관리
}
```

### 데이터 관리
- 정적 데이터: `src/data/educationData.js`
- 클라이언트 저장: `localStorage.setItem('applicationData', JSON.stringify(data))`

## 개발 워크플로우
```bash
cd react-app
npm install          # 의존성 설치
npm run dev          # 개발 서버 (http://localhost:5173)
npm run build        # 프로덕션 빌드
```

## 새 기능 추가
1. **새 페이지**: `src/pages/`에 컴포넌트 생성 → `App.jsx`에 Route 추가
2. **새 컴포넌트**: `src/components/[도메인]/`에 생성
3. **새 데이터**: `src/data/educationData.js`에 추가
4. **새 스타일**: Tailwind 유틸리티 또는 `index.css`의 `@layer components`
