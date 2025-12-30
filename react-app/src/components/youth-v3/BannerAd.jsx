import React from "react";

export default function BannerAd() {
  return (
    <section className="my-12">
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl overflow-hidden relative">
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">청년센터와 적극 협업한 서비스 제공중입니다!</h3>
            <p className="text-sm opacity-90">청년 여러분의 목소리에 귀 기울이겠습니다</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white text-purple-600 rounded-full font-bold hover:bg-gray-100 transition">
              청년지원사업
            </button>
            <button className="px-6 py-3 bg-white/20 backdrop-blur text-white rounded-full font-bold hover:bg-white/30 transition">
              청년정책포럼
            </button>
          </div>
        </div>
        
        {/* 장식 요소 */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full -ml-24 -mb-24" />
      </div>
    </section>
  );
}
