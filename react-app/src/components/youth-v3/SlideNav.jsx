import React from "react";

export default function SlideNav() {
  return (
    <div className="bg-gray-100/50 rounded-xl p-4 mb-8 shadow-sm">
      <div className="flex justify-center items-center gap-3">
        <button
          aria-label="이전"
          className="w-10 h-10 rounded-full bg-white hover:bg-blue-100 shadow-md text-blue-700 text-xl flex items-center justify-center transition hover:shadow-lg"
        >
          &#8592;
        </button>
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>
        <button
          aria-label="다음"
          className="w-10 h-10 rounded-full bg-white hover:bg-blue-100 shadow-md text-blue-700 text-xl flex items-center justify-center transition hover:shadow-lg"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
