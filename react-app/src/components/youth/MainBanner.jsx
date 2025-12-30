import React from "react";

export default function MainBanner() {
  return (
    <section
      className="relative w-full mt-6 mb-4 min-h-[320px] md:min-h-[400px] p-12 md:p-16 text-white overflow-hidden cursor-pointer group rounded-2xl"
      aria-label="주요 정책 안내 배너"
    >
      {/* 배경 이미지 */}
      <div 
        className="absolute inset-0 rounded-2xl"
        style={{
          backgroundImage: 'url(/images/youth-banner-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* 배경 이미지 오버레이 (그라데이션) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-blue-700/45 to-blue-800/50 rounded-2xl" />
      
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex items-center h-full">
        {/* 메인 타이틀 */}
        <div className="flex items-center justify-between w-full">
          <div className="flex-1">
            <p className="text-base md:text-lg mb-3 opacity-95 font-medium">고립 · 은둔청년 지원 사업 참여자 모집</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight drop-shadow-lg">고립 · 은둔청년 지원 사업 참여자 모집</h2>
            <p className="text-lg md:text-xl opacity-95">서울청년포털</p>
          </div>
          
          {/* 우측 화살표 */}
          <button className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 transition-all group-hover:translate-x-1 backdrop-blur-sm" aria-label="다음 배너">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
