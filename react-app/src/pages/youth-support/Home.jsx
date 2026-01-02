import React, { useState } from "react";
import FilterBar from "../../components/youth-support/FilterBar";
import CardGrid from "../../components/youth-support/CardGrid";
import CategoryIconBar from "../../components/youth-support/CategoryIconBar";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  // 추후 filter 상태를 CardGrid에 내려줄 수 있음
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container-main py-8">
        <h2 className="text-2xl font-bold mb-6">청년지원정보</h2>
        <CategoryIconBar selected={selectedCategory} onSelect={setSelectedCategory} />
        <FilterBar categoryValue={selectedCategory} onCategoryChange={setSelectedCategory} />
        <CardGrid />
      </div>
    </div>
  );
}
