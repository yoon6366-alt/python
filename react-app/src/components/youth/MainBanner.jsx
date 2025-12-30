import React from "react";

export default function MainBanner() {
  const categories = [
    { icon: "🏢", label: "공간장", color: "hover:bg-blue-50" },
    { icon: "💼", label: "일자", color: "hover:bg-blue-50" },
    { icon: "💡", label: "창업", color: "hover:bg-blue-50" },
    { icon: "🏠", label: "주거", color: "hover:bg-blue-50" },
    { icon: "❤️", label: "건강", color: "hover:bg-blue-50" },
    { icon: "📚", label: "교육", color: "hover:bg-blue-50" },
    { icon: "✏️", label: "정책교안", color: "hover:bg-blue-50" },
    { icon: "💕", label: "심리상담", color: "hover:bg-blue-50" },
    { icon: "🎨", label: "생활지원", color: "hover:bg-blue-50" },
    { icon: "📝", label: "문의사항", color: "hover:bg-blue-50" },
    { icon: "📄", label: "정책자료", color: "hover:bg-blue-50" }
  ];

  return (
    <section
      className="relative w-full mt-6 mb-8 p-8 md:p-12 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white overflow-hidden"
      aria-label="주요 정책 안내 배너"
    >
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* 메인 타이틀 */}
        <div className="mb-6">
          <p className="text-sm md:text-base mb-2 opacity-90">고립 · 은둔청년 지원 사업 참여자 모집</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">고립 · 은둔청년 지원 사업 참여자 모집</h2>
          <p className="text-base md:text-lg opacity-90">서울청년포털</p>
        </div>

        {/* 카테고리 아이콘 메뉴 */}
        <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl">
          <div className="grid grid-cols-4 md:grid-cols-11 gap-3 md:gap-4">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`flex flex-col items-center justify-center p-3 rounded-xl transition ${cat.color}`}
                aria-label={cat.label}
              >
                <span className="text-2xl md:text-3xl mb-2">{cat.icon}</span>
                <span className="text-xs md:text-sm text-gray-700 font-medium">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
