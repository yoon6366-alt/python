// 교육 데이터
export const educationData = {
  1: {
    id: 1,
    title: '폐기 가방에서 스타일링 가방으로',
    instructor: '홍길동',
    schedule: '매주 화요일 10:00~12:00',
    capacity: '15명',
    price: '50,000원 / 4주',
    description: '낡은 가방을 세련된 가방으로 리뉴얼하는 기초 기술을 배웁니다.',
    image: '/images/education1.jpg',
    badge: '정규수업'
  },
  2: {
    id: 2,
    title: '낡은 옷에서 새로운 디자인으로',
    instructor: '김영희',
    schedule: '매주 목요일 14:00~16:00',
    capacity: '12명',
    price: '45,000원 / 4주',
    description: '헌 옷을 새로운 의류나 액세서리로 변신시키는 방법을 배웁니다.',
    image: '/images/education2.jpg',
    badge: '정규수업'
  },
  3: {
    id: 3,
    title: '폐목재로 만드는 생활용품',
    instructor: '박준호',
    schedule: '매주 수요일 15:00~17:00',
    capacity: '10명',
    price: '60,000원 / 4주',
    description: '폐기되는 목재를 활용하여 실용적인 생활용품을 만드는 기술을 습득합니다.',
    image: '/images/education3.jpg',
    badge: '정규수업'
  },
  4: {
    id: 4,
    title: '플라스틱 재활용 공예',
    instructor: '이지은',
    schedule: '매주 금요일 10:00~12:00',
    capacity: '15명',
    price: '50,000원 / 4주',
    description: '버려지는 플라스틱을 활용하여 새로운 작품을 창작합니다.',
    image: '/images/education4.jpg',
    badge: '정규수업'
  }
}

// 지역 옵션
export const residenceOptions = [
  '광명시',
  '서울시',
  '안양시',
  '부천시',
  '시흥시',
  '기타'
]

// 수강 기간 옵션
export const periodOptions = [
  { value: '4weeks', label: '4주 과정' },
  { value: '8weeks', label: '8주 과정' },
  { value: '12weeks', label: '12주 과정' }
]
