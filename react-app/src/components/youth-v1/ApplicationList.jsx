import React from "react";

export default function ApplicationList() {
  const applications = [
    { tag: "정책지원", title: "고립·은둔청년 지원사업" },
    { tag: "정책지원", title: "한센병세대" },
    { tag: "정책지원", title: "서울청년정책네트워크" }
  ];

  return (
    <section className="my-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">신청접수중인 정책</h3>
        <p className="text-sm text-gray-600">지금 신청 가능한 청년정책을 확인하고 지원하세요</p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {applications.map((app, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-between p-5 hover:bg-gray-50 transition cursor-pointer ${
              idx !== applications.length - 1 ? 'border-b border-gray-100' : ''
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                {app.tag}
              </span>
              <span className="text-base font-medium text-gray-900">{app.title}</span>
            </div>
            <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
              자세히보기 →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
