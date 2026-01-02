import React from "react";

export default function BannerGrid() {
  return (
    <section className="my-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px]">
        {/* 메인 배너 (좌측 상단, 큰 영역) */}
        <div 
          className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg"
          style={{
            backgroundImage: 'url(/images/youth-banner-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* 오버레이 */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-600/35 to-blue-700/40 backdrop-blur-sm rounded-2xl" />
          
          <div className="relative z-10 h-full flex flex-col justify-between p-8">
            <div>
              <p className="text-white text-sm md:text-base mb-2 opacity-90">고립 · 은둔청년 지원 사업 참여자 모집</p>
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                고립 · 은둔청년 지원 사업<br/>참여자 모집
              </h2>
              <p className="text-white text-base opacity-90">서울청년포털</p>
            </div>
            
            {/* 슬라이드 네비게이션 */}
            <div className="flex justify-center items-center gap-3">
              <button className="w-8 h-8 rounded-full bg-white/30 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center transition">
                ←
              </button>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span className="w-2 h-2 rounded-full bg-white/40"></span>
                <span className="w-2 h-2 rounded-full bg-white/40"></span>
              </div>
              <button className="w-8 h-8 rounded-full bg-white/30 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center transition">
                →
              </button>
            </div>
          </div>
        </div>

        {/* 서브 배너 1 (우측 상단) */}
        <div className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg bg-gradient-to-br from-indigo-500 to-purple-600">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
            <span className="text-xs font-semibold mb-2 opacity-90">청년 복지</span>
            <h3 className="text-xl font-bold mb-2">청년수당 신청</h3>
            <p className="text-sm opacity-90">최대 50만원 지원</p>
          </div>
        </div>

        {/* 서브 배너 2 (우측 하단) */}
        <div className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg bg-gradient-to-br from-green-500 to-teal-600">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
            <span className="text-xs font-semibold mb-2 opacity-90">주거 지원</span>
            <h3 className="text-xl font-bold mb-2">청년 전월세 대출</h3>
            <p className="text-sm opacity-90">저금리 특별 지원</p>
          </div>
        </div>
      </div>
    </section>
  );
}
