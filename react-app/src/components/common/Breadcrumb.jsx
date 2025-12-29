import { Link } from 'react-router-dom'

// Breadcrumb 컴포넌트
export default function Breadcrumb({ items }) {
  return (
    <nav className="text-sm text-gray-600 mb-6">
      {items.map((item, index) => (
        <span key={index}>
          {index > 0 && <span className="mx-2">{'>'}</span>}
          {item.href ? (
            <Link to={item.href} className="hover:text-upcycle-primary">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-800 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
