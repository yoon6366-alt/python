import React from "react";

export default function AgencyCards() {
  const agencies = [
    { 
      title: "서울공역청년센터",
      desc: "협력하는 서울의 미래, 도약하는 청년의 성장을 응원합니다",
      icon: "🏢"
    },
    { 
      title: "서울청년센터",
      desc: "함께하는 일상에서의 성장과 변화, 도전이 함께할 청년센터",
      icon: "🎯"
    },
    { 
      title: "서울청년상담",
      desc: "청년의 든든한 친구, 힘이되어주는 서울청년상담",
      icon: "💬"
    },
    { 
      title: "서울청년정책네트워크",
      desc: "함께하는 정책, 함께하는 성장을 만들어갑니다",
      icon: "🤝"
    }
  ];

  return (
    <section className="my-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">서울시청년기관</h3>
        <p className="text-sm text-gray-600">서울시 청년을 위한 다양한 지원기관을 만나보세요</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {agencies.map((agency, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100"
          >
            <div className="text-4xl mb-4">{agency.icon}</div>
            <h4 className="text-lg font-bold text-gray-900 mb-3">{agency.title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{agency.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
