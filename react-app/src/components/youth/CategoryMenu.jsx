import React from "react";

export default function CategoryMenu() {
  const categories = [
    { icon: "🏢", label: "공간장" },
    { icon: "💼", label: "일자" },
    { icon: "💡", label: "창업" },
    { icon: "🏠", label: "주거" },
    { icon: "❤️", label: "건강" },
    { icon: "🎓", label: "교육" },
    { icon: "✏️", label: "정책교안" },
    { icon: "💕", label: "심리상담" },
    { icon: "🎨", label: "생활지원" },
    { icon: "📝", label: "문의사항" },
    { icon: "📄", label: "정책자료" }
  ];

  return (
    <section className="my-6">
      <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
        <div className="grid grid-cols-4 md:grid-cols-11 gap-3 md:gap-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="flex flex-col items-center justify-center p-3 rounded-xl transition hover:bg-blue-50"
              aria-label={cat.label}
            >
              <span className="text-2xl md:text-3xl mb-2">{cat.icon}</span>
              <span className="text-xs md:text-sm text-gray-700 font-medium">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
