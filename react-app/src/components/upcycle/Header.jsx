import { Link, useLocation } from 'react-router-dom'

// 업사이클센터 헤더 컴포넌트
export default function UpcycleHeader() {
  const location = useLocation()
  
  const menuItems = [
    { name: '센터소개', href: '/upcycle' },
    { name: '전시행사', href: '/upcycle' },
    { name: '체험교육신청', href: '/upcycle', active: true },
    { name: '공모사업신청', href: '/upcycle' },
    { name: '에코소재중개', href: '/upcycle' },
    { name: '에코가게', href: '/upcycle' },
    { name: '공지사항', href: '/upcycle' },
  ]

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="container-main">
        <div className="flex items-center justify-between py-4 flex-wrap gap-4">
          {/* 로고 */}
          <Link to="/upcycle" className="flex flex-col">
            <span className="text-xl font-semibold text-gray-800">
              광명 업사이클센터
            </span>
            <span className="text-sm text-gray-500">
              지속가능한 미래를 만드는 공간
            </span>
          </Link>

          {/* 네비게이션 */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${
                      item.active
                        ? 'text-upcycle-primary border-upcycle-primary'
                        : 'text-gray-700 border-transparent hover:text-upcycle-primary hover:border-upcycle-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
