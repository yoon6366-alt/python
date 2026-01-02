import React, { useState, useEffect } from "react";

const regions = ["전체", "서울", "경기", "인천", "부산", "대구", "광주", "대전", "울산", "세종"];
const ages = ["전체", "10대", "20대", "30대", "40대+"];
const statuses = ["전체", "모집중", "마감", "상시"];

export default function FilterBar({ categoryValue = "전체", onCategoryChange, onChange }) {
  const [selected, setSelected] = useState({
    category: categoryValue,
    region: "전체",
    age: "전체",
    status: "전체"
  });

  // 외부 categoryValue 변경 시 내부 동기화
  useEffect(() => {
    setSelected(prev => ({ ...prev, category: categoryValue }));
  }, [categoryValue]);

  function handleChange(type, value) {
    setSelected(prev => {
      const next = { ...prev, [type]: value };
      if (type === "category" && onCategoryChange) onCategoryChange(value);
      if (onChange) onChange(next);
      return next;
    });
  }

  function handleReset() {
    setSelected({ category: categoryValue, region: "전체", age: "전체", status: "전체" });
    if (onChange) onChange({ category: categoryValue, region: "전체", age: "전체", status: "전체" });
  }

  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-wrap gap-4 items-center mb-6 sticky top-0 z-40">
      {/* 카테고리 버튼은 상단 아이콘바에서 대체 */}
      <select className="input-field" value={selected.region} onChange={e=>handleChange("region",e.target.value)}>
        {regions.map(r=>(<option key={r}>{r}</option>))}
      </select>
      <select className="input-field" value={selected.age} onChange={e=>handleChange("age",e.target.value)}>
        {ages.map(a=>(<option key={a}>{a}</option>))}
      </select>
      <select className="input-field" value={selected.status} onChange={e=>handleChange("status",e.target.value)}>
        {statuses.map(s=>(<option key={s}>{s}</option>))}
      </select>
      <button className="btn-secondary ml-2" onClick={handleReset}>초기화</button>
    </div>
  );
}
