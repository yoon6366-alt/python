import React from "react";

export default function InfoCards() {
  const cards = [
    { 
      title: "청년몽땅 준스기업 세계 강연", 
      tag: "청년돕기 체험행사민간정책",
      badge: "청년돕기",
      image: "/images/youth-card1.jpg",
      fallbackBg: "bg-blue-500"
    },
    { 
      title: "청년웹사 특별지원", 
      tag: "심사면접+HOT정책",
      badge: "심사면접+HOT정책",
      image: "/images/youth-card2.jpg",
      fallbackBg: "bg-purple-500"
    },
    { 
      title: "청년미래직업 훈련", 
      tag: "청년돕기 체험행사민간정책",
      badge: "청년돕기",
      image: "/images/youth-card3.jpg",
      fallbackBg: "bg-indigo-600"
    },
    { 
      title: "청년자리 근속청년업 지원...", 
      tag: "심사면접+HOT정책",
      badge: "심사면접+HOT정책",
      image: "/images/youth-card4.jpg",
      fallbackBg: "bg-green-600"
    }
  ];

  return (
    <section className="my-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">맞춤형 정보</h3>
        <p className="text-sm text-gray-600">청년몽땅정보통이 추천하는 정책을 만나보세요</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100"
          >
            {/* 이미지 영역 */}
            <div className={`h-48 ${card.fallbackBg} relative overflow-hidden`}>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                }}
              />
            </div>
            
            {/* 텍스트 영역 */}
            <div className="p-5">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold mb-3">
                {card.badge}
              </span>
              <h4 className="text-base font-bold text-gray-900 mb-2 leading-tight">{card.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
