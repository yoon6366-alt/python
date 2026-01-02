import React from "react";

const categories = [
  { key: "공간장", label: "공간장", icon: "/images/cat_space.png" },
  { key: "주거", label: "주거", icon: "/images/cat_home.png" },
  { key: "교육", label: "교육", icon: "/images/cat_edu.png" },
  { key: "정책코칭", label: "정책코칭", icon: "/images/cat_coach.png" },
  { key: "건강", label: "건강", icon: "/images/cat_health.png" },
  { key: "심리상담", label: "심리상담", icon: "/images/cat_ment.png" },
  { key: "생활지원", label: "생활지원", icon: "/images/cat_life.png" },
  { key: "문의사항", label: "문의사항", icon: "/images/cat_qna.png" },
];

export default function CategoryIconBar({ selected, onSelect }) {
  return (
    <nav className="flex justify-center gap-6 md:gap-10 py-4 bg-white rounded-xl shadow mb-6">
      {categories.map(cat => (
        <button
          key={cat.key}
          className={`flex flex-col items-center focus:outline-none group ${selected===cat.key?"text-blue-600 font-bold":"text-gray-700"}`}
          onClick={()=>onSelect && onSelect(cat.key)}
        >
          <img
            src={cat.icon}
            alt={cat.label}
            className={`w-10 h-10 mb-1 ${selected===cat.key?"drop-shadow-lg scale-110":"opacity-80 group-hover:scale-105"}`}
            onError={e=>e.target.style.display='none'}
          />
          <span className="text-xs md:text-sm mt-1">{cat.label}</span>
        </button>
      ))}
    </nav>
  );
}
