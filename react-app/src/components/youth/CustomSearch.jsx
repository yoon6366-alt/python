import React from "react";

export default function CustomSearch() {
  return (
    <section className="my-12">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center gap-4 mb-4">
          <h3 className="text-xl font-bold text-white">맞춤형 정책검색</h3>
          <span className="text-sm text-gray-400">⚙️</span>
        </div>
        
        <form className="flex flex-col md:flex-row items-stretch gap-3">
          <select className="px-4 py-3 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500 outline-none text-sm" aria-label="시/군구 선택">
            <option>시/군구</option>
            <option>전체</option>
            <option>강남구</option>
            <option>강동구</option>
          </select>
          
          <select className="px-4 py-3 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500 outline-none text-sm" aria-label="정책상태 선택">
            <option>정책상태</option>
            <option>진행중</option>
            <option>마감</option>
          </select>
          
          <select className="px-4 py-3 rounded-lg bg-gray-700 text-white border-none focus:ring-2 focus:ring-blue-500 outline-none text-sm" aria-label="연령 선택">
            <option>연령 선택</option>
            <option>19-24세</option>
            <option>25-29세</option>
            <option>30-34세</option>
          </select>
          
          <input
            type="text"
            className="flex-1 px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border-none focus:ring-2 focus:ring-blue-500 outline-none text-sm"
            placeholder="정책명을 입력하세요."
            aria-label="정책명 검색"
          />
          
          <button
            type="submit"
            className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition shadow-lg hover:shadow-xl"
          >
            검색
          </button>
        </form>
      </div>
    </section>
  );
}
