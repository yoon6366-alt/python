import { Routes, Route } from 'react-router-dom'

// 강남구 페이지
import GangnamHome from './pages/gangnam/Home'

// 업사이클센터 페이지
import UpcycleHome from './pages/upcycle/Home'
import UpcycleClasses from './pages/upcycle/Classes'
import UpcycleDetail from './pages/upcycle/Detail'
import UpcycleApply from './pages/upcycle/Apply'
import UpcycleComplete from './pages/upcycle/Complete'

function App() {
  return (
    <Routes>
      {/* 강남구 홈페이지 */}
      <Route path="/" element={<GangnamHome />} />

      {/* 업사이클센터 */}
      <Route path="/upcycle" element={<UpcycleHome />} />
      <Route path="/upcycle/classes" element={<UpcycleClasses />} />
      <Route path="/upcycle/detail/:id" element={<UpcycleDetail />} />
      <Route path="/upcycle/apply/:id" element={<UpcycleApply />} />
      <Route path="/upcycle/complete" element={<UpcycleComplete />} />
    </Routes>
  )
}

export default App
