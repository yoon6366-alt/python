import { Routes, Route } from 'react-router-dom'

// 강남구 페이지
import GangnamHome from './pages/gangnam/Home'
import YouthHome from './pages/youth/Home'
import YouthHomeV1 from './pages/youth-v1/Home'
import YouthHomeV2 from './pages/youth-v2/Home'
import YouthHomeV3 from './pages/youth-v3/Home'

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
      
      {/* 청년 포털 - 버전별 */}
      <Route path="/youth" element={<YouthHome />} />
      <Route path="/youth-v1" element={<YouthHomeV1 />} />
      <Route path="/youth-v2" element={<YouthHomeV2 />} />
      <Route path="/youth-v3" element={<YouthHomeV3 />} />
    </Routes>
  )
}

export default App
