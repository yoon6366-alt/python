# Copilot Instructions

## 프로젝트 개요
한국어 정부/공공기관 스타일 웹사이트. **주요 개발은 `react-app/` 폴더에서 진행**.
- `gangnam/`, `upcycle/`: 레거시 HTML 버전 (참고용)
- `react-app/`: **메인 React 앱** - 두 프로젝트 통합

## 아키텍처 (React 앱)

### 라우트 구조 (`App.jsx`)
| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | `pages/gangnam/Home` | 강남구 메인 |
| `/upcycle/*` | `pages/upcycle/*` | 업사이클센터 (Home → Classes → Detail/:id → Apply/:id → Complete) |

### 컴포넌트 구조
```
src/components/
├── gangnam/Header.jsx    # gangnam-primary 색상 사용
├── upcycle/              # upcycle-primary 색상 사용
│   ├── Header.jsx
│   ├── Banner.jsx
│   └── EducationCard.jsx
└── common/Breadcrumb.jsx # 공용 (도메인 색상 주의)
```

## 핵심 컨벤션

### 1. 도메인별 색상 사용 (필수)
```jsx
// 강남구 컴포넌트
className="text-gangnam-primary bg-gangnam-secondary"

// 업사이클 컴포넌트
className="text-upcycle-primary bg-upcycle-secondary"
```

### 2. 커스텀 CSS 클래스 (`index.css`)
```jsx
// 버튼: btn-primary, btn-secondary
// 카드: card (rounded-xl + shadow + hover)
// 입력: input-field (focus:ring-gangnam-primary)
// 레이아웃: container-main (max-w-1200px + mx-auto)
```

### 3. 이미지 Fallback 필수
```jsx
<img
  src={data.image}
  onError={(e) => { e.target.src = fallbackSvg }}
/>
```

### 4. 폼 검증 패턴 (`Apply.jsx` 참고)
```javascript
const [errors, setErrors] = useState({})
// 검증: /^[0-9\-]{10,}$/ (전화), /^[^\s@]+@[^\s@]+\.[^\s@]+$/ (이메일)
// 에러 클리어: handleChange 시 해당 필드 에러 제거
```

### 5. 데이터 흐름
- 정적 데이터: `src/data/educationData.js` (ID 기반 객체)
- 페이지 간 전달: `localStorage` → `Complete.jsx`에서 조회

## 개발 명령어
```bash
cd react-app && npm run dev  # http://localhost:5173
```

## 새 기능 추가 체크리스트
1. **페이지**: `src/pages/[도메인]/` + `App.jsx` Route 추가
2. **컴포넌트**: `src/components/[도메인]/` (공용은 `common/`)
3. **데이터**: `src/data/educationData.js` 확장
4. **스타일**: Tailwind 유틸리티 우선, 반복 패턴은 `@layer components`
