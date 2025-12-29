import { useParams, Link } from 'react-router-dom'
import UpcycleHeader from '../../components/upcycle/Header'
import Breadcrumb from '../../components/common/Breadcrumb'
import { educationData } from '../../data/educationData'

// 교육 상세 페이지
export default function UpcycleDetail() {
  const { id } = useParams()
  const education = educationData[id]

  if (!education) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">교육 정보를 찾을 수 없습니다.</p>
      </div>
    )
  }

  const breadcrumbItems = [
    { label: '체험교육신청', href: '/upcycle' },
    { label: '정규수업', href: '/upcycle/classes' },
    { label: education.title },
  ]

  // 이미지 fallback
  const fallbackSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='400'%3E%3Crect fill='%23ddd' width='100%25' height='100%25'/%3E%3Ctext x='50%25' y='50%25' font-size='32' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(education.title)}%3C/text%3E%3C/svg%3E`

  return (
    <div className="min-h-screen bg-gray-50">
      <UpcycleHeader />

      <main className="container-main py-12">
        <Breadcrumb items={breadcrumbItems} />

        <div className="card overflow-hidden">
          <div className="md:flex">
            {/* 이미지 */}
            <div className="md:w-2/5">
              <img
                src={education.image}
                alt={education.title}
                className="w-full h-64 md:h-full object-cover"
                onError={(e) => {
                  e.target.src = fallbackSvg
                }}
              />
            </div>

            {/* 상세 정보 */}
            <div className="md:w-3/5 p-8">
              <span className="inline-block bg-upcycle-primary text-white text-sm px-4 py-1 rounded-full mb-4">
                {education.badge}
              </span>

              <h1 className="text-2xl font-bold text-gray-800 mb-6">
                {education.title}
              </h1>

              <div className="space-y-4 mb-8">
                <div className="flex border-b border-gray-100 pb-3">
                  <span className="w-24 text-gray-500 font-medium">강사</span>
                  <span className="text-gray-800">{education.instructor}</span>
                </div>
                <div className="flex border-b border-gray-100 pb-3">
                  <span className="w-24 text-gray-500 font-medium">일정</span>
                  <span className="text-gray-800">{education.schedule}</span>
                </div>
                <div className="flex border-b border-gray-100 pb-3">
                  <span className="w-24 text-gray-500 font-medium">정원</span>
                  <span className="text-gray-800">{education.capacity}</span>
                </div>
                <div className="flex border-b border-gray-100 pb-3">
                  <span className="w-24 text-gray-500 font-medium">수강료</span>
                  <span className="text-upcycle-primary font-semibold">
                    {education.price}
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  교육 내용
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {education.description}
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  to={`/upcycle/apply/${id}`}
                  className="btn-primary flex-1 text-center"
                >
                  수강 신청하기
                </Link>
                <Link
                  to="/upcycle/classes"
                  className="btn-secondary flex-1 text-center"
                >
                  목록으로
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
        <div className="container-main text-center text-sm">
          <p>© 2024 광명 업사이클센터. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
