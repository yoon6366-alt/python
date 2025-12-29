// 업사이클센터 배너 컴포넌트
export default function UpcycleBanner() {
  return (
    <section className="relative h-72 overflow-hidden">
      {/* 배경 이미지 (fallback gradient) */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600">
        <img
          src="/images/banner.jpg"
          alt="광명업사이클센터 배너"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
      </div>

      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
        <h2 className="text-4xl font-bold mb-2">The Moment of Inspiration</h2>
        <p className="text-lg">지속가능한 생활을 위한 업사이클 교육</p>
      </div>
    </section>
  )
}
