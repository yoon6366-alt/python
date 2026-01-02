import React from "react";

const dummyData = [
  { title: "게시요청 가이드", tag: "공지", image: "/images/card1.png" },
  { title: "공유주방 대관 안내", tag: "공간", image: "/images/card2.png" },
  { title: "교육실 대관 안내", tag: "교육", image: "/images/card3.png" },
  { title: "물품대여 안내", tag: "공간", image: "/images/card4.png" },
  { title: "청년공간 청년재능 모집", tag: "사회참여", image: "/images/card5.png" },
  { title: "기후탄성, 고추장 만들기", tag: "생활지원", image: "/images/card6.png" },
  { title: "희망도서 신청", tag: "생활지원", image: "/images/card7.png" },
  { title: "대관 안내", tag: "공간", image: "/images/card8.png" }
];

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {dummyData.map((card, idx) => (
        <div key={idx} className="card p-0 overflow-hidden cursor-pointer hover:shadow-xl transition">
          <div className="h-40 bg-gray-100 flex items-center justify-center">
            <img src={card.image} alt={card.title} className="h-full object-contain" onError={e=>e.target.style.display='none'} />
          </div>
          <div className="p-4">
            <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full mb-2">{card.tag}</span>
            <h4 className="text-base font-bold text-gray-900 mb-1">{card.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
