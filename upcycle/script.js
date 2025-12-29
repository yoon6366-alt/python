/* ========================================
   광명업사이클센터 교육신청 - 자바스크립트
   ======================================== */

// 교육 데이터 정의 (각 교육의 상세정보)
const educationData = {
    1: {
        title: '폐기 가방에서 스타일링 가방으로',
        instructor: '홍길동',
        schedule: '매주 화요일 10:00~12:00',
        capacity: '15명',
        price: '50,000원 / 4주',
        description: '낡은 가방을 세련된 가방으로 리뉴얼하는 기초 기술을 배웁니다.',
        image: 'images/education1.jpg'
    },
    2: {
        title: '낡은 옷에서 새로운 디자인으로',
        instructor: '김영희',
        schedule: '매주 목요일 14:00~16:00',
        capacity: '12명',
        price: '45,000원 / 4주',
        description: '헌 옷을 새로운 의류나 액세서리로 변신시키는 방법을 배웁니다.',
        image: 'images/education2.jpg'
    },
    3: {
        title: '폐목재로 만드는 생활용품',
        instructor: '박준호',
        schedule: '매주 수요일 15:00~17:00',
        capacity: '10명',
        price: '60,000원 / 4주',
        description: '폐기되는 목재를 활용하여 실용적인 생활용품을 만드는 기술을 습득합니다.',
        image: 'images/education3.jpg'
    },
    4: {
        title: '플라스틱 재활용 공예',
        instructor: '이지은',
        schedule: '매주 금요일 10:00~12:00',
        capacity: '15명',
        price: '50,000원 / 4주',
        description: '버려지는 플라스틱을 활용하여 새로운 작품을 창작합니다.',
        image: 'images/education4.jpg'
    }
};

// 현재 선택된 교육 ID
let selectedEducationId = 1;

/**
 * 페이지 전환 함수
 * @param {string} pageId - 표시할 페이지의 ID (page1, page2, page3 등)
 * @param {number} educationId - 선택한 교육 ID (선택사항)
 */
function showPage(pageId, educationId) {
    // 모든 페이지 숨기기
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // 선택한 페이지만 표시
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo(0, 0); // 페이지 맨 위로 스크롤
    }

    // 교육 선택 시 상세정보 업데이트 (페이지3으로 이동할 때)
    if (pageId === 'page3' && educationId) {
        selectedEducationId = educationId;
        updateEducationDetail(educationId);
    }

    // 페이지4 (신청 양식)로 이동할 때 선택한 교육 정보 표시
    if (pageId === 'page4') {
        const education = educationData[selectedEducationId];
        document.getElementById('education').value = education.title;
    }
}

/**
 * 교육 상세정보 업데이트 (페이지3)
 * @param {number} educationId - 선택한 교육 ID
 */
function updateEducationDetail(educationId) {
    const education = educationData[educationId];

    if (education) {
        // 제목 업데이트
        document.getElementById('detail-title').textContent = education.title;
        document.getElementById('detail-title-h2').textContent = education.title;

        // 상세정보 업데이트
        document.getElementById('detail-instructor').textContent = education.instructor;
        document.getElementById('detail-schedule').textContent = education.schedule;
        document.getElementById('detail-capacity').textContent = education.capacity;
        document.getElementById('detail-price').textContent = education.price;
        document.getElementById('detail-description').textContent = education.description;

        // 이미지 업데이트
        const detailImg = document.getElementById('detail-img');
        detailImg.src = education.image;
    }
}

/**
 * 주차 정보 표시 (알럿창으로 안내)
 */
function showParkingInfo() {
    alert('주차비 안내\n\n• 1회당: 2,000원\n• 월정액: 50,000원\n\n주차장 이용 시 상기 요금이 부과됩니다.');
    document.getElementById('parkingInfo').style.display = 'block';
}

/**
 * 주차 정보 숨김
 */
function hideParkingInfo() {
    document.getElementById('parkingInfo').style.display = 'none';
}

/**
 * 신청 양식 검증 및 제출
 * @param {Event} event - 폼 제출 이벤트
 */
document.addEventListener('DOMContentLoaded', function() {
    const applicationForm = document.getElementById('applicationForm');

    if (applicationForm) {
        applicationForm.addEventListener('submit', function(event) {
            event.preventDefault(); // 기본 폼 제출 방지

            // 양식 검증
            if (!validateForm()) {
                alert('내용을 확인해주세요');
                return;
            }

            // 폼 데이터 수집
            const formData = new FormData(applicationForm);

            // 신청 정보를 페이지5에 표시하기 위해 저장
            saveApplicationData(formData);

            // 페이지5 (완료 페이지)로 이동
            showPage('page5');
        });
    }

    // 초기 페이지 설정 (페이지1 표시)
    showPage('page1');
});

/**
 * 양식 검증 함수
 * @returns {boolean} 검증 결과
 */
function validateForm() {
    // 필수 입력 필드 확인
    const name = document.getElementById('name').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const birthdate = document.getElementById('birthdate').value;
    const phone = document.getElementById('phone').value.trim();
    const residence = document.getElementById('residence').value;
    const email = document.getElementById('email').value.trim();
    const period = document.getElementById('period').value;
    const parking = document.querySelector('input[name="parking"]:checked');
    const terms = document.getElementById('terms').checked;
    const privacy = document.getElementById('privacy').checked;

    // 각 필드 검증
    if (!name) {
        console.error('이름이 입력되지 않음');
        return false;
    }

    if (!gender) {
        console.error('성별이 선택되지 않음');
        return false;
    }

    if (!birthdate) {
        console.error('생년월일이 입력되지 않음');
        return false;
    }

    if (!phone) {
        console.error('휴대폰 번호가 입력되지 않음');
        return false;
    }

    // 휴대폰 번호 형식 검증 (10~11자리, 숫자와 하이픈만)
    const phonePattern = /^[0-9\-]{10,}$/;
    if (!phonePattern.test(phone)) {
        console.error('휴대폰 번호 형식이 올바르지 않음');
        return false;
    }

    if (!residence) {
        console.error('거주 지역이 선택되지 않음');
        return false;
    }

    if (!email) {
        console.error('이메일이 입력되지 않음');
        return false;
    }

    // 이메일 형식 검증
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        console.error('이메일 형식이 올바르지 않음');
        return false;
    }

    if (!period) {
        console.error('수강 기간이 선택되지 않음');
        return false;
    }

    if (!parking) {
        console.error('주차 여부가 선택되지 않음');
        return false;
    }

    if (!terms) {
        console.error('약관에 동의하지 않음');
        return false;
    }

    if (!privacy) {
        console.error('개인정보처리방침에 동의하지 않음');
        return false;
    }

    // 모든 검증 통과
    return true;
}

/**
 * 신청 데이터 저장 및 페이지5에 표시
 * @param {FormData} formData - 폼 데이터
 */
function saveApplicationData(formData) {
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const education = document.getElementById('education').value;

    // 현재 날짜/시간 생성
    const now = new Date();
    const dateString = now.toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });

    // 페이지5에 신청 정보 표시
    document.getElementById('completion-name').textContent = name;
    document.getElementById('completion-phone').textContent = phone;
    document.getElementById('completion-email').textContent = email;
    document.getElementById('completion-education').textContent = education;
    document.getElementById('completion-date').textContent = dateString;

    // 로컬스토리지에 저장 (선택사항 - 새로고침 후에도 데이터 유지)
    const applicationData = {
        name: name,
        phone: phone,
        email: email,
        education: education,
        date: dateString,
        formData: Object.fromEntries(formData)
    };
    localStorage.setItem('applicationData', JSON.stringify(applicationData));

    // 콘솔에 로그 출력 (개발용)
    console.log('신청 데이터:', applicationData);
}

/**
 * 주차비 정보 호버 이벤트 (선택사항)
 * 이미 CSS tooltip으로 구현되어 있지만, JavaScript로도 추가 가능
 */
document.addEventListener('DOMContentLoaded', function() {
    const helpIcon = document.querySelector('.help-icon');

    if (helpIcon) {
        // 마우스 오버 시 알럿 표시 (선택사항)
        helpIcon.addEventListener('click', function(event) {
            // CSS tooltip이 이미 구현되어 있으므로 여기서는 추가 동작 없음
            // 필요 시 alert을 표시하려면 아래를 활성화:
            // alert('주차비: 1회당 2,000원 (월정액: 50,000원)');
            event.stopPropagation();
        });
    }
});

/**
 * 카드 클릭으로 페이지 이동 (페이지 2에서)
 * HTML의 onclick 속성으로 처리 중
 */

/**
 * 엔터 키로 폼 제출 방지 (필요시)
 */
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter' && event.target.tagName !== 'TEXTAREA') {
                event.preventDefault();
                // 탭 키로 다음 필드로 이동하도록
                const form = this.form;
                const inputs = Array.from(form.querySelectorAll('input, select, textarea, button'));
                const index = inputs.indexOf(this);
                if (inputs[index + 1]) {
                    inputs[index + 1].focus();
                }
            }
        });
    });
});

// ===== 페이지 로드 시 실행 =====
window.addEventListener('load', function() {
    console.log('페이지 로드 완료');
    
    // 저장된 신청 데이터가 있으면 불러오기
    const savedData = localStorage.getItem('applicationData');
    if (savedData) {
        console.log('저장된 데이터:', JSON.parse(savedData));
    }
});