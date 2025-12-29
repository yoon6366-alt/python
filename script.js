// 검색 기능
function performSearch() {
    const query = document.getElementById('search-input').value;
    if (query.trim() === '') {
        alert('검색어를 입력하세요.');
    } else {
        alert('"' + query + '" 검색 결과를 표시합니다. (실제 검색 기능은 구현 필요)');
        // 실제로는 검색 API나 페이지 이동 추가 가능
    }
}
document.addEventListener('DOMContentLoaded', function() {
    console.log('강남구 홈페이지가 로드되었습니다.'); // 콘솔에 메시지 출력 (개발자 도구에서 확인 가능)

    // 메뉴 링크에 클릭 이벤트 추가 (예시로 alert 표시)
    const menuLinks = document.querySelectorAll('nav ul li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // 기본 링크 동작 방지
            alert('메뉴: ' + this.textContent + ' 페이지로 이동합니다. (실제 링크는 구현 필요)');
        });
    });

    // 자주찾는서비스 버튼에 추가 기능 (이미 onclick으로 alert 있음, 여기서는 확장 가능)
    // 예: 버튼 클릭 시 페이지 이동이나 다른 동작 추가 가능
    const serviceButtons = document.querySelectorAll('.service-buttons button');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 추가 동작 예시: 콘솔에 로그 출력
            console.log('서비스 버튼 클릭: ' + this.textContent);
        });
    });

    // 생생현장 이미지에 클릭 이벤트 추가 (예시)
    const images = document.querySelectorAll('#live-scene img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            alert('이미지 확대 보기 기능은 구현되지 않았습니다. (추가 개발 필요)');
        });
    });

    // 주요서비스 아이콘 클릭 이벤트
    const iconItems = document.querySelectorAll('.icon-item');
    iconItems.forEach(item => {
        item.addEventListener('click', function() {
            const serviceName = this.querySelector('p').textContent;
            alert(serviceName + ' 페이지로 이동합니다. (실제 링크는 구현 필요)');
        });
    });
});

// 추가 함수 예시: 공지사항이나 알림판에 동적 콘텐츠 추가 가능
function addNotice(text) {
    const noticeList = document.querySelector('.notice ul');
    const newItem = document.createElement('li');
    newItem.textContent = text;
    noticeList.appendChild(newItem);
}

// 사용 예: addNotice('새 공지사항 추가'); // 이 줄을 주석 해제하여 테스트 가능