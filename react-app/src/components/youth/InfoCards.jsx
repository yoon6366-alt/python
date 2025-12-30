import React from "react";

export default function InfoCards() {
  const cards = [
    { title: "서울 동아리 ON", tag: "심화프로그램+HOT정책", bg: "bg-green-500", textColor: "text-white" },
    { title: "희망두배 청년통장", tag: "핫이슈+HOT정책", bg: "bg-purple-500", textColor: "text-white" },
    { title: "서울시 청년수당", tag: "서울시+HOT정책", bg: "bg-indigo-600", textColor: "text-white" },
    { title: "서울 동작형 청년 신혼부부 전세임대주택 입주자...", tag: "연구+HOT정책", bg: "bg-green-600", textColor: "text-white" }
  ];

  return (
    <section className="my-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">맞춤형 정보</h3>
        <p className="text-sm text-gray-600">현재참여중인청소년 청년의 관심사 및 정보제공</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`${card.bg} ${card.textColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden min-h-[160px] flex flex-col justify-between`}
          >
            <div>
              <span className="inline-block px-3 py-1 bg-black/20 rounded-full text-xs font-semibold mb-3">HOT</span>
              <h4 className="text-lg font-bold mb-2 leading-tight">{card.title}</h4>
            </div>
            <p className="text-sm opacity-90">{card.tag}</p>
            
            {/* 장식 요소 */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
