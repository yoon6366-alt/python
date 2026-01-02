import React from "react";

export default function HashtagSection() {
  const hashtags = [
    { tag: "정책아이디어", icon: "💡", color: "bg-pink-100 text-pink-700 hover:bg-pink-200" },
    { tag: "장애", icon: "🤝", color: "bg-blue-100 text-blue-700 hover:bg-blue-200" },
    { tag: "기업탐방", icon: "🚀", color: "bg-purple-100 text-purple-700 hover:bg-purple-200" },
    { tag: "그룹상담", icon: "💬", color: "bg-green-100 text-green-700 hover:bg-green-200" },
    { tag: "무료대관", icon: "🎪", color: "bg-orange-100 text-orange-700 hover:bg-orange-200" },
    { tag: "예술인공모", icon: "🎨", color: "bg-red-100 text-red-700 hover:bg-red-200" },
    { tag: "원데이상담", icon: "📞", color: "bg-indigo-100 text-indigo-700 hover:bg-indigo-200" },
    { tag: "주거교육", icon: "🏠", color: "bg-teal-100 text-teal-700 hover:bg-teal-200" },
    { tag: "정책참여", icon: "✋", color: "bg-cyan-100 text-cyan-700 hover:bg-cyan-200" },
    { tag: "창업교육", icon: "💼", color: "bg-yellow-100 text-yellow-700 hover:bg-yellow-200" }
  ];

  return (
    <section className="my-12 mb-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">더 많은 정보가 궁금하다면?</h3>
        <p className="text-sm text-gray-600">관심 있는 주제를 선택하여 관련 정보를 확인하세요</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3">
        {hashtags.map((item, idx) => (
          <button
            key={idx}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-full ${item.color} font-semibold text-sm shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}
          >
            <span>{item.icon}</span>
            <span>#{item.tag}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
