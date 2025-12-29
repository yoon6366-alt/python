import GangnamHeader from '../../components/gangnam/Header'
import { Link } from 'react-router-dom'

// 강남구 홈페이지 메인
export default function GangnamHome() {
  const services = [
    { icon: '📅', name: '공공서비스예약' },
    { icon: '📢', name: '응답소(민원신고)' },
    { icon: '💼', name: '서울일자리' },
    { icon: '🏠', name: '부동산정보' },
    { icon: '📚', name: '서울런' },
    { icon: '❤️', name: '서울복지포털' },
    { icon: '🏡', name: '서울주거포털' },
    { icon: '👨‍🎓', name: '청년몽땅정보통' },
    { icon: '📱', name: '내 손안에 서울' },
  ]

  const quickServices = [
    '전자민원',
    '예약서비스',
    '취업정보',
    '문화행사',
    '교통정보',
    '주차정보',
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <GangnamHeader />

      {/* 히어로 배너 */}
      <section className="bg-gradient-to-r from-gangnam-primary to-gangnam-secondary text-white">
        <div className="container-main py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">
                강남구의 새로운 소식을 만나보세요
              </h2>
              <p className="text-xl mb-8 opacity-90">
                강남구청이 제공하는 다양한 서비스와 정보를 확인하세요.
              </p>
              <button className="bg-white text-gangnam-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                자세히 보기
              </button>
            </div>
            <div className="flex-shrink-0">
              <div className="w-80 h-60 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-6xl">🏛️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 주요 서비스 */}
      <section className="py-12">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">주요서비스</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {services.map((service) => (
              <button
                key={service.name}
                className="flex flex-col items-center p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                onClick={() => alert(`${service.name} 페이지로 이동합니다.`)}
              >
                <span className="text-3xl mb-2">{service.icon}</span>
                <span className="text-sm text-gray-700 text-center">
                  {service.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 자주찾는 서비스 */}
      <section className="py-12 bg-white">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">자주찾는 서비스</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickServices.map((service) => (
              <button
                key={service}
                className="py-4 px-6 border border-gray-200 rounded-lg text-gray-700 font-medium hover:border-gangnam-primary hover:text-gangnam-primary transition-colors"
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 공지사항 & 업사이클센터 링크 */}
      <section className="py-12">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-8">
            {/* 공지사항 */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">공지사항</h3>
              <ul className="space-y-3">
                <li className="flex justify-between text-sm">
                  <a href="#" className="text-gray-700 hover:text-gangnam-primary">
                    2024년 주민세 납부 안내
                  </a>
                  <span className="text-gray-400">2024.12.15</span>
                </li>
                <li className="flex justify-between text-sm">
                  <a href="#" className="text-gray-700 hover:text-gangnam-primary">
                    강남구 겨울철 도로 관리 계획
                  </a>
                  <span className="text-gray-400">2024.12.10</span>
                </li>
                <li className="flex justify-between text-sm">
                  <a href="#" className="text-gray-700 hover:text-gangnam-primary">
                    2025년 주민 건강검진 일정
                  </a>
                  <span className="text-gray-400">2024.12.05</span>
                </li>
              </ul>
            </div>

            {/* 업사이클센터 바로가기 */}
            <Link
              to="/upcycle"
              className="card p-6 bg-gradient-to-br from-green-50 to-blue-50 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                🌱 광명 업사이클센터
              </h3>
              <p className="text-gray-600 mb-4">
                지속가능한 미래를 위한 업사이클 교육 프로그램에 참여하세요.
              </p>
              <span className="text-upcycle-primary font-medium">
                교육 신청하기 →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container-main text-center text-sm">
          <p>© 2024 강남구청. All rights reserved.</p>
          <p className="mt-2">서울특별시 강남구 학동로 426 (삼성동)</p>
        </div>
      </footer>
    </div>
  )
}
