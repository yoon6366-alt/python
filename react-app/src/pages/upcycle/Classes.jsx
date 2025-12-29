import UpcycleHeader from '../../components/upcycle/Header'
import UpcycleBanner from '../../components/upcycle/Banner'
import EducationCard from '../../components/upcycle/EducationCard'
import Breadcrumb from '../../components/common/Breadcrumb'
import { educationData } from '../../data/educationData'

// 정규수업 목록 페이지
export default function UpcycleClasses() {
  const breadcrumbItems = [
    { label: '체험교육신청', href: '/upcycle' },
    { label: '정규수업' },
  ]

  const educations = Object.values(educationData)

  return (
    <div className="min-h-screen bg-gray-50">
      <UpcycleHeader />
      <UpcycleBanner />

      <main className="container-main py-12">
        <Breadcrumb items={breadcrumbItems} />

        {/* 페이지 헤더 */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">정규수업</h2>
          <p className="text-gray-600">정기적인 업사이클 교육 프로그램</p>
        </div>

        {/* 교육 카드 그리드 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {educations.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
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
