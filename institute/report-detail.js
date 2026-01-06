/**
 * 연구보고서 상세페이지 스크립트
 * - 상세검색 모달 제어
 * - 날짜 빠른 선택 기능
 */

class ReportDetailPage {
  constructor() {
    this.modal = document.getElementById('advanced-search-modal');
    this.openBtn = document.getElementById('advanced-search-toggle');
    this.closeBtn = document.getElementById('close-modal-btn');
    this.cancelBtn = document.getElementById('cancel-btn');
    this.searchBtn = document.getElementById('search-btn');
    this.resetBtn = document.getElementById('reset-btn');
    this.dateQuickBtns = document.querySelectorAll('.date-quick-btn');
    this.dateStartInput = document.getElementById('modal-date-start');
    this.dateEndInput = document.getElementById('modal-date-end');

    this.init();
  }

  init() {
    // 모달 열기/닫기 이벤트
    if (this.openBtn) {
      this.openBtn.addEventListener('click', () => this.openModal());
    }
    
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.closeModal());
    }
    
    if (this.cancelBtn) {
      this.cancelBtn.addEventListener('click', () => this.closeModal());
    }

    // 모달 배경 클릭 시 닫기
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.closeModal();
        }
      });
    }

    // ESC 키로 모달 닫기
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal && !this.modal.classList.contains('hidden')) {
        this.closeModal();
      }
    });

    // 날짜 빠른 선택 버튼
    this.dateQuickBtns.forEach(btn => {
      btn.addEventListener('click', () => this.handleDateQuickSelect(btn));
    });

    // 검색 버튼
    if (this.searchBtn) {
      this.searchBtn.addEventListener('click', () => this.handleSearch());
    }

    // 초기화 버튼
    if (this.resetBtn) {
      this.resetBtn.addEventListener('click', () => this.handleReset());
    }
  }

  openModal() {
    if (this.modal) {
      this.modal.classList.remove('hidden');
      this.modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal() {
    if (this.modal) {
      this.modal.classList.add('hidden');
      this.modal.classList.remove('flex');
      document.body.style.overflow = '';
    }
  }

  handleDateQuickSelect(btn) {
    const days = btn.dataset.days;
    const today = new Date();
    const endDate = this.formatDate(today);

    if (days === 'all') {
      // 전체 선택 시 날짜 초기화
      this.dateStartInput.value = '';
      this.dateEndInput.value = '';
    } else {
      const startDate = new Date();
      startDate.setDate(today.getDate() - parseInt(days));
      this.dateStartInput.value = this.formatDate(startDate);
      this.dateEndInput.value = endDate;
    }

    // 활성 상태 표시
    this.dateQuickBtns.forEach(b => {
      b.classList.remove('bg-primary', 'text-white', 'border-primary');
      b.classList.add('border-gray-300');
    });
    btn.classList.add('bg-primary', 'text-white', 'border-primary');
    btn.classList.remove('border-gray-300');
  }

  formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  handleSearch() {
    // 검색 로직 구현 (실제로는 서버에 요청)
    const keyword = document.getElementById('modal-keyword').value;
    const author = document.getElementById('modal-author').value;
    const dateStart = this.dateStartInput.value;
    const dateEnd = this.dateEndInput.value;
    
    const divisions = Array.from(document.querySelectorAll('input[name="division"]:checked'))
      .map(cb => cb.value);
    
    const topics = Array.from(document.querySelectorAll('input[name="topic"]:checked'))
      .map(cb => cb.value);

    console.log('검색 조건:', {
      keyword,
      author,
      dateStart,
      dateEnd,
      divisions,
      topics
    });

    // TODO: 실제 검색 로직 구현
    alert('검색 기능은 추후 구현됩니다.');
    this.closeModal();
  }

  handleReset() {
    // 모든 입력 필드 초기화
    document.getElementById('modal-keyword').value = '';
    document.getElementById('modal-author').value = '';
    this.dateStartInput.value = '';
    this.dateEndInput.value = '';
    
    // 모든 체크박스 초기화 (구분의 '전체'만 체크)
    document.querySelectorAll('input[name="division"]').forEach(cb => {
      cb.checked = cb.value === 'all';
    });
    
    document.querySelectorAll('input[name="topic"]').forEach(cb => {
      cb.checked = false;
    });

    // 날짜 빠른 선택 버튼 스타일 초기화
    this.dateQuickBtns.forEach(btn => {
      btn.classList.remove('bg-primary', 'text-white', 'border-primary');
      btn.classList.add('border-gray-300');
    });
  }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
  new ReportDetailPage();
});
