import { Link } from 'react-router-dom'

// 강남구 헤더 컴포넌트
export default function GangnamHeader() {
  const menuItems = [
    { name: '종합민원', href: '#' },
    { name: '소통참여', href: '#' },
    { name: '행정정보', href: '#' },
    { name: '강남소식', href: '#' },
    { name: '강남소개', href: '#' },
    { name: '분야별정보', href: '#' },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-main">
        <div className="flex items-center justify-between py-4 flex-wrap gap-4">
          {/* 로고 */}
          <Link to="/" className="text-2xl font-bold text-gangnam-primary">
            강남구
          </Link>

          {/* 네비게이션 */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-700 font-medium hover:text-gangnam-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 헤더 액션 */}
          <div className="flex items-center gap-4">
            <button className="btn-primary text-sm py-2 px-4">
              로그인
            </button>
            
            {/* 검색창 */}
            <div className="flex">
              <input
                type="text"
                placeholder="검색어 입력"
                className="px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gangnam-primary w-48"
              />
              <button className="bg-gangnam-primary text-white px-4 py-2 rounded-r-lg hover:bg-gangnam-secondary transition-colors">
                검색
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
