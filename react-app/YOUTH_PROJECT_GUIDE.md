# 청년포털 프로젝트 가이드

## 📌 프로젝트 개요
한국 정부 스타일의 청년 정책 정보 포털 웹사이트

## 🚀 실행 방법
```bash
cd react-app
npm run dev
```
개발 서버: http://localhost:5173

## 🎨 버전별 URL 접근

| URL | 버전 | 주요 특징 |
|-----|------|----------|
| `/youth` | 최신 (개발 중) | Glassmorphism 디자인 |
| `/youth-v1` | 버전 1 | 초기 세련된 디자인 |
| `/youth-v2` | 버전 2 | 배경이미지 + 카테고리 분리 |
| `/youth-v3` | 버전 3 | 아이콘 변경 + 배너 내 슬라이드 |

## 📂 프로젝트 구조

```
react-app/
├── src/
│   ├── components/
│   │   ├── youth/          # 최신 버전 컴포넌트
│   │   ├── youth-v1/       # 버전1 컴포넌트
│   │   ├── youth-v2/       # 버전2 컴포넌트
│   │   └── youth-v3/       # 버전3 컴포넌트
│   ├── pages/
│   │   ├── youth/          # 최신 버전 페이지
│   │   ├── youth-v1/       # 버전1 페이지
│   │   ├── youth-v2/       # 버전2 페이지
│   │   └── youth-v3/       # 버전3 페이지
│   └── App.jsx            # 라우팅 설정
└── public/
    └── images/            # 이미지 리소스
```

## 🎯 주요 컴포넌트

### 최신 버전 (Glassmorphism)
- **Header.jsx** - 상단 네비게이션 (햄버거 메뉴, 검색창, 맞춤서비스 등)
- **CustomSearch.jsx** - 맞춤형 정책 검색창 (최상단 배치)
- **MainBanner.jsx** - 메인 배너 (배경이미지 + 슬라이드 네비게이션)
- **CategoryMenu.jsx** - 카테고리 아이콘 메뉴
- **InfoCards.jsx** - 맞춤형 정보 카드 (이미지 지원)
- **SupportInfo.jsx** - 청년지원정보
- **BannerAd.jsx** - 배너 광고
- **NoticeCarousel.jsx** - 공지사항
- **ApplicationList.jsx** - 신청접수중 정책
- **AgencyCards.jsx** - 서울시청년기관
- **HashtagSection.jsx** - 해시태그 섹션

## 🎨 디자인 컨셉

### Glassmorphism 스타일
- 반투명 배경 (`bg-white/20` ~ `bg-white/90`)
- 백드롭 블러 효과 (`backdrop-blur-md`)
- 반투명 테두리 (`border-white/30`)
- 그라데이션 배경
- 부드러운 그림자 효과

### 색상 팔레트
- **주요 색상**: 파랑(Blue) - 정책/정부 이미지
- **보조 색상**: 보라(Purple) - 포인트
- **배경**: 그레이(Gray-50) - 깔끔한 느낌
- **텍스트**: 검정/그레이 - 가독성

## 🌐 웹 접근성
- 최소 폰트 크기 16px
- 충분한 명도 대비
- aria-label 속성 적용
- 키보드 네비게이션 지원
- 반응형 디자인 (모바일/태블릿/PC)

## 📸 이미지 관리

이미지는 `public/images/` 폴더에 저장:
- `youth-banner-bg.jpg` - 메인 배너 배경
- `youth-card1~4.jpg` - 맞춤형 정보 카드 이미지
- Fallback: 이미지 없을 시 색상 배경 표시

## 🔧 커스텀 CSS 클래스

```css
/* Tailwind 유틸리티 클래스 주로 사용 */
.container-main - 최대 너비 + 중앙 정렬
.btn-primary - 주요 버튼 스타일
.card - 카드 스타일 (rounded + shadow + hover)
.input-field - 입력 필드 스타일
```

## 📋 개발 체크리스트

### 새 기능 추가 시
1. [ ] 컴포넌트 생성 (`src/components/youth/`)
2. [ ] 페이지 생성 (`src/pages/youth/`)
3. [ ] App.jsx에 라우트 추가
4. [ ] 이미지 리소스 추가 (필요 시)
5. [ ] Glassmorphism 스타일 적용
6. [ ] 웹 접근성 확인
7. [ ] 반응형 테스트

## 🎯 향후 개선 사항
- [ ] 실제 데이터 API 연동
- [ ] 검색 기능 구현
- [ ] 필터링 기능 추가
- [ ] 페이지네이션
- [ ] 로그인/회원가입 기능
- [ ] 다크모드 지원

## 📝 Git 브랜치 관리

| 브랜치 | 용도 |
|--------|------|
| `main` | 버전1 (초기 세련된 디자인) |
| `youth-version2` | 버전2 (배경이미지 + 카테고리) |
| `youth-version3` | 버전3 (아이콘 + 슬라이드) |

### 브랜치 전환
```bash
git checkout main              # 버전1로 이동
git checkout youth-version2    # 버전2로 이동
git checkout youth-version3    # 버전3로 이동
```

## 🐛 문제 해결

### 개발 서버가 안 열릴 때
```bash
# react-app 폴더로 이동 확인
cd c:\Users\name\python\react-app
npm run dev
```

### 이미지가 안 보일 때
- `public/images/` 폴더에 이미지 확인
- 브라우저 캐시 삭제 (Ctrl + Shift + R)
- 이미지 경로 확인 (`/images/파일명.jpg`)

### 스타일이 적용 안 될 때
- 개발 서버 재시작
- Tailwind CSS 클래스명 확인
- 브라우저 콘솔 에러 확인

## 📞 참고 자료
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [React Router 문서](https://reactrouter.com/)
- [Glassmorphism 가이드](https://hype4.academy/tools/glassmorphism-generator)
- 원본 참고 사이트: https://youth.seoul.go.kr/

---

**마지막 업데이트**: 2025년 12월 30일
