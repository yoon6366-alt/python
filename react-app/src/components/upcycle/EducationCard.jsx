import { useNavigate } from 'react-router-dom'

// 교육 카드 컴포넌트
export default function EducationCard({ education }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/upcycle/detail/${education.id}`)
  }

  // 이미지 fallback SVG
  const fallbackSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='250'%3E%3Crect fill='%23ddd' width='100%25' height='100%25'/%3E%3Ctext x='50%25' y='50%25' font-size='24' text-anchor='middle' dy='.3em'%3E교육 이미지%3C/text%3E%3C/svg%3E`

  return (
    <div
      onClick={handleClick}
      onKeyPress={(e) => e.key === 'Enter' && handleClick()}
      role="button"
      tabIndex={0}
      className="card cursor-pointer overflow-hidden group"
    >
      {/* 이미지 */}
      <div className="h-48 overflow-hidden">
        <img
          src={education.image}
          alt={education.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = fallbackSvg
          }}
        />
      </div>

      {/* 콘텐츠 */}
      <div className="p-5">
        {/* 뱃지 */}
        <span className="inline-block bg-upcycle-primary text-white text-xs px-3 py-1 rounded-full mb-3">
          {education.badge}
        </span>

        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-upcycle-primary transition-colors">
          {education.title}
        </h3>

        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">강사:</span> {education.instructor}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">일정:</span> {education.schedule}
        </p>
        <p className="text-sm text-gray-600 mb-3">
          <span className="font-medium">정원:</span> {education.capacity}
        </p>

        <p className="text-sm text-gray-500 line-clamp-2">
          {education.description}
        </p>
      </div>
    </div>
  )
}
