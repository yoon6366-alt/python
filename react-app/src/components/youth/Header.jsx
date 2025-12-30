import React, { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container-main">
        {/* 상단 영역 */}
        <div className="flex items-center justify-between py-3">
          {/* 왼쪽: 햄버거 메뉴 + 로고 */}
          <div className="flex items-center gap-3">
            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="메뉴 열기"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <div className="flex items-center gap-2">
              <img 
                src="/images/youth-logo.png" 
                alt="서울청년포털" 
                className="h-8"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <h1 className="text-xl md:text-2xl font-bold">
                <span className="text-blue-600">청년몽땅</span>
                <span className="text-purple-600">정보통</span>
              </h1>
            </div>
          </div>

          {/* 오른쪽: 검색창 + 버튼들 */}
          <div className="flex items-center gap-3">
            {/* 검색창 */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
              <input
                type="text"
                placeholder="청년정책을 검색하세요"
                className="bg-transparent outline-none text-sm flex-1 text-gray-700 placeholder-gray-500"
              />
              <button aria-label="검색">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* 맞춤서비스 */}
            <button className="hidden md:flex items-center gap-1 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              맞춤서비스
            </button>

            {/* 신청하기 */}
            <button className="hidden md:flex items-center gap-1 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              신청하기
            </button>

            {/* 서울영테크 */}
            <button className="hidden md:flex items-center gap-1 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              서울영테크
            </button>

            {/* 로그인 */}
            <a href="#" className="hidden md:block text-sm text-gray-700 hover:text-blue-600 transition">
              로그인
            </a>
          </div>
        </div>

        {/* 하단 메뉴 */}
        <nav className="flex items-center gap-8 py-3 border-t border-gray-100">
          <a href="#" className="text-base font-medium text-gray-900 hover:text-blue-600 transition">청년정책</a>
          <a href="#" className="text-base font-medium text-gray-900 hover:text-blue-600 transition">일자리</a>
          <a href="#" className="text-base font-medium text-gray-900 hover:text-blue-600 transition">주거</a>
          <a href="#" className="text-base font-medium text-gray-900 hover:text-blue-600 transition">금융복지</a>
          <a href="#" className="text-base font-medium text-gray-900 hover:text-blue-600 transition">교육문화</a>
          <a href="#" className="text-base font-medium text-gray-900 hover:text-blue-600 transition">참여소통</a>
        </nav>
      </div>

      {/* 모바일 메뉴 (햄버거 클릭 시) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container-main py-4 flex flex-col gap-3">
            <a href="#" className="text-base font-medium text-gray-900 hover:text-blue-600 py-2">청년정책</a>
            <a href="#" className="text-base font-medium text-gray-900 hover:text-blue-600 py-2">일자리</a>
            <a href="#" className="text-base font-medium text-gray-900 hover:text-blue-600 py-2">주거</a>
            <a href="#" className="text-base font-medium text-gray-900 hover:text-blue-600 py-2">금융복지</a>
            <a href="#" className="text-base font-medium text-gray-900 hover:text-blue-600 py-2">교육문화</a>
            <a href="#" className="text-base font-medium text-gray-900 hover:text-blue-600 py-2">참여소통</a>
            <hr className="my-2" />
            <a href="#" className="text-sm text-gray-700 hover:text-blue-600 py-2">맞춤서비스</a>
            <a href="#" className="text-sm text-gray-700 hover:text-blue-600 py-2">신청하기</a>
            <a href="#" className="text-sm text-gray-700 hover:text-blue-600 py-2">서울영테크</a>
            <a href="#" className="text-sm text-gray-700 hover:text-blue-600 py-2">로그인</a>
          </nav>
        </div>
      )}
    </header>
  );
}
