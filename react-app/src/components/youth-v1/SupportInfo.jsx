import React from "react";

export default function SupportInfo() {
  const cards = [
    { 
      tag: "게시자료 가이드", 
      title: "게시자료 가이드",
      desc: "프로그램 게시요청 가이드",
      img: "/images/guide.png"
    },
    { 
      tag: "서울청년정책네트워크",
      title: "청년에게 필요한 청년 지원은?",
      desc: "서울청년센터 4호점, 25년 6차 남녀수요조사: 청년이...",
      img: "/images/survey.png"
    },
    { 
      tag: "배드민턴장 대관",
      title: "노원구체육관(실내체육관) 대관",
      desc: "배드민턴장 대관정보",
      img: "/images/badminton.png"
    },
    { 
      tag: "족구장 대관",
      title: "노원구체육관(실내체육관) 족구장 대관",
      desc: "족구장 대관정보",
      img: "/images/footvolley.png"
    }
  ];

  return (
    <section className="my-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">청년지원정보</h3>
        <p className="text-sm text-gray-600">청년을 위해 준비한 최신 프로그램 및 정책을 만나보세요</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23E5E7EB' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='16' fill='%239CA3AF'%3E이미지%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            <div className="p-5">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold mb-3">
                {card.tag}
              </span>
              <h4 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">{card.title}</h4>
              <p className="text-sm text-gray-600 line-clamp-2">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
