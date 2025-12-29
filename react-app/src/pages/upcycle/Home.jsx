import { Link } from 'react-router-dom'
import UpcycleHeader from '../../components/upcycle/Header'
import UpcycleBanner from '../../components/upcycle/Banner'

// 업사이클센터 메인 (체험교육 소개)
export default function UpcycleHome() {
  // 이미지 fallback SVG
  const fallbackSvg = (text) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect fill='%23ddd' width='100%25' height='100%25'/%3E%3Ctext x='50%25' y='50%25' font-size='32' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(text)}%3C/text%3E%3C/svg%3E`

  const sections = [
    {
      icon: '📚',
      title: '정규수업',
      image: '/images/regular-class.jpg',
      description: '주 1회 정기적인 업사이클 교육 프로그램으로 기초부터 심화까지 다양한 난이도로 구성되어 있습니다. 경험 많은 강사들과 함께 실용적인 기술을 배워보세요.',
      subDescription: '매주 화요일, 수요일, 목요일, 금요일에 진행되며 정원은 10~15명입니다.',
      buttonText: '정규수업 보기',
      buttonLink: '/upcycle/classes',
      primary: true,
    },
    {
      icon: '🎯',
      title: '특별 워크숍',
      image: '/images/workshop.jpg',
      description: '계절별 특별 프로그램과 게스트 강사 초청 워크숍으로 새로운 기법과 트렌드를 배우실 수 있습니다.',
      subDescription: '한정된 정원으로 진행되어 소규모 집중 교육이 가능합니다.',
      buttonText: '특별 워크숍 보기',
      onClick: () => alert('준비 중입니다.'),
      primary: false,
    },
    {
      icon: '👥',
      title: '단체 프로그램',
      image: '/images/group-program.jpg',
      description: '학교, 기업, 단체를 위한 맞춤형 교육 프로그램입니다. 환경 교육, 팀 빌딩, 사회공헌 활동 등 다양한 목적으로 활용 가능합니다.',
      subDescription: '최소 10명 이상의 단체에 한해 신청 가능하며 별도의 가격 협의가 가능합니다.',
      buttonText: '문의하기',
      onClick: () => alert('문의: 02-1234-5678'),
      primary: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <UpcycleHeader />
      <UpcycleBanner />

      <main className="container-main py-12">
        {/* 페이지 헤더 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">체험교육신청</h2>
          <p className="text-gray-600">다양한 체험교육 프로그램을 소개합니다</p>
        </div>

        {/* 섹션들 */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className={`card overflow-hidden flex flex-col md:flex-row ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* 이미지 영역 */}
              <div className="md:w-2/5 h-64 md:h-auto bg-gray-200 overflow-hidden">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = fallbackSvg(section.title)
                  }}
                />
              </div>

              {/* 콘텐츠 영역 */}
              <div className="md:w-3/5 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {section.icon} {section.title}
                </h3>
                <p className="text-gray-600 mb-3">{section.description}</p>
                <p className="text-gray-500 text-sm mb-6">{section.subDescription}</p>
                
                {section.buttonLink ? (
                  <Link
                    to={section.buttonLink}
                    className={section.primary ? 'btn-primary inline-block' : 'btn-secondary inline-block'}
                  >
                    {section.buttonText}
                  </Link>
                ) : (
                  <button
                    onClick={section.onClick}
                    className={section.primary ? 'btn-primary' : 'btn-secondary'}
                  >
                    {section.buttonText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
        <div className="container-main text-center text-sm">
          <p>© 2024 광명 업사이클센터. All rights reserved.</p>
          <p className="mt-2">경기도 광명시 광명로 123</p>
        </div>
      </footer>
    </div>
  )
}
