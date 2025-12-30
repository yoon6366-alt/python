import React from "react";

export default function SlideNav() {
  return (
    <div className="flex justify-center items-center gap-2 mb-6">
      <button
        aria-label="이전"
        className="w-10 h-10 rounded-full bg-white/80 hover:bg-blue-100 shadow text-blue-700 text-xl flex items-center justify-center transition"
      >
        &#8592;
      </button>
      <button
        aria-label="다음"
        className="w-10 h-10 rounded-full bg-white/80 hover:bg-blue-100 shadow text-blue-700 text-xl flex items-center justify-center transition"
      >
        &#8594;
      </button>
    </div>
  );
}
