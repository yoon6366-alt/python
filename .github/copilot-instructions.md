src/components/
├── gangnam/Header.jsx    # gangnam-primary 색상 사용
├── upcycle/              # upcycle-primary 색상 사용
│   ├── Header.jsx
│   ├── Banner.jsx
│   └── EducationCard.jsx
└── common/Breadcrumb.jsx # 공용 (도메인 색상 주의)

# Copilot Instructions

## 프로젝트 개요
**react-app/** 폴더가 메인 개발 경로입니다. 정부/공공기관 스타일의 웹사이트로, 강남구와 업사이클센터(광명) 도메인을 통합합니다. 레거시 HTML은 참고용(`gangnam/`, `upcycle/`).

## 아키텍처 및 주요 구조

- **라우팅**: `src/App.jsx`에서 `react-router-dom` 기반으로 도메인별 라우트 분기
  - `/` → `pages/gangnam/Home.jsx` (강남구)
  - `/upcycle/*` → `pages/upcycle/` 하위 (Home, Classes, Detail/:id, Apply/:id, Complete)
- **컴포넌트 분리**: 도메인별 폴더(`components/gangnam/`, `components/upcycle/`), 공용은 `components/common/`
- **정적 데이터**: `src/data/educationData.js`에서 교육 정보(ID 기반 객체) 관리
- **상태/데이터 전달**: 페이지 간 데이터는 `localStorage` 활용 (예: 신청정보 → Complete.jsx에서 조회)

## 개발 워크플로우

- **개발 서버 실행**: `cd react-app && npm run dev` (Vite, http://localhost:5173)
- **스타일**: Tailwind CSS + `index.css`의 커스텀 컴포넌트 클래스(`btn-primary`, `card`, `container-main` 등)
- **컴포넌트/페이지 추가**: 도메인별 폴더에 생성 후, 라우트(App.jsx) 등록
- **정적 데이터 확장**: 교육/기관 등은 `educationData.js`에 추가

## 프로젝트별/도메인별 컨벤션

- **도메인별 색상**: Tailwind 커스텀 컬러(`text-gangnam-primary`, `bg-upcycle-secondary` 등) 반드시 사용
- **공용 컴포넌트**: `Breadcrumb.jsx` 등은 도메인 색상에 주의해 스타일 지정
- **이미지 Fallback**: 모든 `<img>`에 fallback SVG 적용 필수
  ```jsx
  <img src={data.image} onError={e => { e.target.src = fallbackSvg }} />
  ```
- **폼 검증**: `Apply.jsx` 참고, 전화/이메일 정규식, 입력 시 해당 필드 에러만 제거
  ```js
  const [errors, setErrors] = useState({})
  // 전화: /^[0-9\-]{10,}$/
  // 이메일: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  ```
- **카드/버튼/입력**: 반복되는 UI는 `index.css`의 커스텀 클래스(`card`, `btn-primary`, `input-field` 등) 사용
- **레이아웃**: `container-main`(max-width: 1200px, mx-auto)로 통일

## 데이터 흐름 및 예시

- **정적 데이터**: `src/data/educationData.js`에서 관리, ID로 조회
- **페이지 간 데이터 전달**: 신청 완료 등은 `localStorage`에 저장 후, Complete 페이지에서 조회/표시

## 새 기능 추가 체크리스트
1. **페이지**: `src/pages/[도메인]/`에 생성, `App.jsx` 라우트 추가
2. **컴포넌트**: `src/components/[도메인]/` (공용은 `common/`)
3. **데이터**: 필요시 `src/data/educationData.js` 확장
4. **스타일**: Tailwind 유틸리티 우선, 반복 패턴은 `@layer components`로 커스텀

## 참고/예시 파일
- 라우팅: [src/App.jsx](react-app/src/App.jsx)
- 도메인별 헤더: [components/gangnam/Header.jsx](react-app/src/components/gangnam/Header.jsx), [components/upcycle/Header.jsx](react-app/src/components/upcycle/Header.jsx)
- 공용 컴포넌트: [components/common/Breadcrumb.jsx](react-app/src/components/common/Breadcrumb.jsx)
- 데이터: [data/educationData.js](react-app/src/data/educationData.js)
- 폼/검증: [pages/upcycle/Apply.jsx](react-app/src/pages/upcycle/Apply.jsx)
- 이미지 fallback: [pages/upcycle/Detail.jsx](react-app/src/pages/upcycle/Detail.jsx)

---
의문점/누락된 패턴이 있으면 피드백 바랍니다.
