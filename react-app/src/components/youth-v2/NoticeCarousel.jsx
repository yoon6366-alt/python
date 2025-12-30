import React from "react";

export default function NoticeCarousel() {
  const notices = [
    { category: "기본공지", title: "청년몽땅만족도 조사이벤트 당첨자 발표", date: "2025-12-29" },
    { category: "기본공지", title: "2026년 서울청년정책네트워크 모집 공고", date: "2025-12-29" },
    { category: "알림게시", title: "2026년 서울영케어러스 인턴십 모집", date: "2025-12-24" }
  ];

  return (
    <section className="my-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">공지사항</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">많이찾는게시판</span>
          <button className="text-sm text-blue-600 hover:underline">더보기 →</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {notices.map((notice, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer"
          >
            <span className="inline-block px-3 py-1 bg-green-50 text-green-700 rounded text-xs font-semibold mb-3">
              {notice.category}
            </span>
            <h4 className="text-base font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
              {notice.title}
            </h4>
            <span className="text-xs text-gray-500">{notice.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
