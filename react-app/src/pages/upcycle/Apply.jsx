import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import UpcycleHeader from '../../components/upcycle/Header'
import Breadcrumb from '../../components/common/Breadcrumb'
import { educationData, residenceOptions, periodOptions } from '../../data/educationData'

// 수강 신청 폼 페이지
export default function UpcycleApply() {
  const { id } = useParams()
  const navigate = useNavigate()
  const education = educationData[id]

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    birthdate: '',
    phone: '',
    residence: '',
    email: '',
    period: '',
    parking: '',
    terms: false,
    privacy: false,
  })

  const [errors, setErrors] = useState({})

  if (!education) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">교육 정보를 찾을 수 없습니다.</p>
      </div>
    )
  }

  const breadcrumbItems = [
    { label: '체험교육신청', href: '/upcycle' },
    { label: '정규수업', href: '/upcycle/classes' },
    { label: education.title, href: `/upcycle/detail/${id}` },
    { label: '수강신청' },
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    // 에러 클리어
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요'
    }
    if (!formData.gender) {
      newErrors.gender = '성별을 선택해주세요'
    }
    if (!formData.birthdate) {
      newErrors.birthdate = '생년월일을 입력해주세요'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = '휴대폰 번호를 입력해주세요'
    } else if (!/^[0-9\-]{10,}$/.test(formData.phone)) {
      newErrors.phone = '올바른 휴대폰 번호 형식이 아닙니다'
    }
    if (!formData.residence) {
      newErrors.residence = '거주 지역을 선택해주세요'
    }
    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다'
    }
    if (!formData.period) {
      newErrors.period = '수강 기간을 선택해주세요'
    }
    if (!formData.parking) {
      newErrors.parking = '주차 여부를 선택해주세요'
    }
    if (!formData.terms) {
      newErrors.terms = '이용약관에 동의해주세요'
    }
    if (!formData.privacy) {
      newErrors.privacy = '개인정보처리방침에 동의해주세요'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      alert('입력 내용을 확인해주세요')
      return
    }

    // 신청 데이터 저장
    const applicationData = {
      ...formData,
      education: education.title,
      date: new Date().toLocaleString('ko-KR'),
    }
    localStorage.setItem('applicationData', JSON.stringify(applicationData))

    // 완료 페이지로 이동
    navigate('/upcycle/complete')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <UpcycleHeader />

      <main className="container-main py-12">
        <Breadcrumb items={breadcrumbItems} />

        <div className="max-w-2xl mx-auto">
          <div className="card p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">수강 신청</h1>
            <p className="text-gray-600 mb-8">{education.title}</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 이름 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  이름 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="이름을 입력하세요"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* 성별 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  성별 <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === 'male'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    남성
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === 'female'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    여성
                  </label>
                </div>
                {errors.gender && (
                  <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
                )}
              </div>

              {/* 생년월일 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  생년월일 <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  className={`input-field ${errors.birthdate ? 'border-red-500' : ''}`}
                />
                {errors.birthdate && (
                  <p className="text-red-500 text-sm mt-1">{errors.birthdate}</p>
                )}
              </div>

              {/* 휴대폰 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  휴대폰 번호 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                  placeholder="010-1234-5678"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* 거주 지역 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  거주 지역 <span className="text-red-500">*</span>
                </label>
                <select
                  name="residence"
                  value={formData.residence}
                  onChange={handleChange}
                  className={`input-field ${errors.residence ? 'border-red-500' : ''}`}
                >
                  <option value="">선택하세요</option>
                  {residenceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.residence && (
                  <p className="text-red-500 text-sm mt-1">{errors.residence}</p>
                )}
              </div>

              {/* 이메일 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* 수강 기간 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  수강 기간 <span className="text-red-500">*</span>
                </label>
                <select
                  name="period"
                  value={formData.period}
                  onChange={handleChange}
                  className={`input-field ${errors.period ? 'border-red-500' : ''}`}
                >
                  <option value="">선택하세요</option>
                  {periodOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.period && (
                  <p className="text-red-500 text-sm mt-1">{errors.period}</p>
                )}
              </div>

              {/* 주차 여부 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  주차 여부 <span className="text-red-500">*</span>
                  <span className="ml-2 text-xs text-gray-500">
                    (주차비: 1회당 2,000원)
                  </span>
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="parking"
                      value="yes"
                      checked={formData.parking === 'yes'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    예
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="parking"
                      value="no"
                      checked={formData.parking === 'no'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    아니오
                  </label>
                </div>
                {errors.parking && (
                  <p className="text-red-500 text-sm mt-1">{errors.parking}</p>
                )}
              </div>

              {/* 약관 동의 */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="mt-1 mr-3"
                  />
                  <span className="text-sm text-gray-700">
                    이용약관에 동의합니다 <span className="text-red-500">*</span>
                  </span>
                </label>
                {errors.terms && (
                  <p className="text-red-500 text-sm">{errors.terms}</p>
                )}

                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mt-1 mr-3"
                  />
                  <span className="text-sm text-gray-700">
                    개인정보처리방침에 동의합니다 <span className="text-red-500">*</span>
                  </span>
                </label>
                {errors.privacy && (
                  <p className="text-red-500 text-sm">{errors.privacy}</p>
                )}
              </div>

              {/* 제출 버튼 */}
              <div className="flex gap-4 pt-4">
                <button type="submit" className="btn-primary flex-1">
                  신청하기
                </button>
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="btn-secondary flex-1"
                >
                  취소
                </button>
              </div>
            </form>
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
