import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UpcycleHeader from '../../components/upcycle/Header'

// 신청 완료 페이지
export default function UpcycleComplete() {
  const [applicationData, setApplicationData] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('applicationData')
    if (saved) {
      setApplicationData(JSON.parse(saved))
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <UpcycleHeader />

      <main className="container-main py-12">
        <div className="max-w-lg mx-auto text-center">
          <div className="card p-8">
            {/* 성공 아이콘 */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              신청이 완료되었습니다!
            </h1>
            <p className="text-gray-600 mb-8">
              교육 신청이 정상적으로 접수되었습니다.
            </p>

            {applicationData && (
              <div className="bg-gray-50 rounded-lg p-6 text-left mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  신청 정보
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">신청자</span>
                    <span className="text-gray-800 font-medium">
                      {applicationData.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">연락처</span>
                    <span className="text-gray-800">{applicationData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">이메일</span>
                    <span className="text-gray-800">{applicationData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">신청 교육</span>
                    <span className="text-gray-800">{applicationData.education}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">신청일시</span>
                    <span className="text-gray-800">{applicationData.date}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <Link to="/upcycle" className="btn-primary flex-1">
                홈으로
              </Link>
              <Link to="/upcycle/classes" className="btn-secondary flex-1">
                다른 교육 보기
              </Link>
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
