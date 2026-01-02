import React from "react";

export default function CategoryMenu() {
  const categories = [
    { icon: "📁", label: "공간장", color: "text-blue-500" },
    { icon: "✱", label: "주거", color: "text-blue-500" },
    { icon: "📋", label: "교육", color: "text-blue-500" },
    { icon: "🎯", label: "동호교양", color: "text-purple-500" },
    { icon: "☀", label: "건강", color: "text-orange-500" },
    { icon: "💼", label: "심리상담", color: "text-teal-500" },
    { icon: "🎤", label: "생활지원", color: "text-green-500" },
    { icon: "📂", label: "문의사항", color: "text-yellow-600" }
  ];

  return (
    <section className="my-8">
      <div className="flex justify-center items-center gap-8 md:gap-12">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className="flex flex-col items-center justify-center transition hover:opacity-70"
            aria-label={cat.label}
          >
            <span className={`text-3xl md:text-4xl mb-2 ${cat.color}`}>{cat.icon}</span>
            <span className="text-xs md:text-sm text-gray-700 font-medium">{cat.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
