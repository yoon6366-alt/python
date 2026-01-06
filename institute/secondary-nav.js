/**
 * S연구원 세컨더리 내비게이션
 * - 브레드크럼 드롭다운 (1뎁스, 2뎁스)
 * - 키보드 내비게이션 (Arrow keys, Tab, Enter, Escape)
 * - ARIA 속성 관리
 * - 반응형 모바일 드로어
 * - URL 파라미터 기반 현재 페이지 감지
 */

// 메뉴 데이터 구조
const MENU_DATA = {
  research: {
    label: '연구',
    pages: [
      { id: 'reports', label: '연구보고서', description: '서울시 정책 수립에 필요한 심층 연구 결과물을 제공합니다.' },
      { id: 'books', label: '단행본', description: '연구 성과를 정리한 단행본을 확인하세요.' },
      { id: 'policy', label: '정책리포트', description: '정책 현안에 대한 분석과 제언을 담은 리포트입니다.' },
      { id: 'urban', label: '도시연구', description: '도시 문제 해결을 위한 연구 자료입니다.' },
      { id: 'academic', label: '학술행사자료', description: '학술대회 및 세미나 발표 자료를 제공합니다.' }
    ]
  },
  trends: {
    label: '동향',
    pages: [
      { id: 'global', label: '세계도시정책동향', description: '세계 주요 도시의 정책 동향을 분석합니다.' },
      { id: 'economy', label: '경제동향', description: '서울시 경제 동향을 모니터링합니다.' },
      { id: 'consumption', label: '소비경기지수', description: '서울시 소비경기지수를 분석합니다.' },
      { id: 'sentiment', label: '소비자체감', description: '서울시 소비자체감지수를 분석합니다.' },
      { id: 'data', label: '데이터로 본 도시', description: '데이터 기반의 도시 분석 자료입니다.' }
    ]
  },
  media: {
    label: '미디어',
    pages: [
      { id: 'infographic', label: '인포그래픽', description: '연구 결과를 시각화한 인포그래픽입니다.' },
      { id: 'cardnews', label: '카드뉴스', description: '주요 이슈를 카드뉴스로 전달합니다.' },
      { id: 'curation', label: '이슈큐레이션', description: '주요 이슈를 큐레이션합니다.' },
      { id: 'economicnote', label: '경제이슈노트', description: '경제 이슈를 정리한 노트입니다.' }
    ]
  },
  community: {
    label: '소통',
    pages: [
      { id: 'notice', label: '공지사항', description: 'S연구원의 공지사항을 확인하세요.' },
      { id: 'press', label: '보도자료', description: '언론 보도자료를 제공합니다.' },
      { id: 'jobs', label: '채용공고', description: '채용 정보를 확인하세요.' },
      { id: 'faq', label: '자주묻는질문', description: '자주 묻는 질문과 답변입니다.' },
      { id: 'cooperation', label: '협력연구 제안', description: '연구 협력을 제안해 주세요.' }
    ]
  },
  about: {
    label: '소개',
    pages: [
      { id: 'intro', label: 'S연구원은', description: 'S연구원에 대해 소개합니다.' },
      { id: 'purpose', label: '설립목적 및 기능', description: 'S연구원의 설립목적과 기능을 안내합니다.' },
      { id: 'greeting', label: '원장 인사말', description: 'S연구원 원장 인사말입니다.' },
      { id: 'history', label: '연혁', description: 'S연구원의 연혁을 소개합니다.' },
      { id: 'organization', label: '조직도', description: 'S연구원의 조직 구성을 확인하세요.' },
      { id: 'partners', label: '연구협력기관', description: '연구 협력 기관을 소개합니다.' },
      { id: 'location', label: '오시는 길', description: 'S연구원 위치 및 오시는 방법입니다.' }
    ]
  }
};

class SecondaryNav {
  constructor() {
    // URL 파라미터 파싱
    this.params = new URLSearchParams(window.location.search);
    this.currentCategory = this.params.get('cat') || 'research';
    this.currentPage = this.params.get('page') || 'reports';
    this.currentSub = this.params.get('sub') || null;
    
    // DOM Elements
    this.dropdowns = document.querySelectorAll('.nav-dropdown');
    this.mobileToggle = document.querySelector('.mobile-nav-toggle');
    this.mobileDrawer = document.getElementById('mobile-nav-drawer');
    this.mobileBackdrop = document.querySelector('.mobile-nav-backdrop');
    this.mobileDepth1Items = document.querySelectorAll('.mobile-depth1-item');
    this.mobileDepth2List = document.querySelector('.mobile-depth2-list');
    
    // State
    this.activeDropdown = null;
    this.isMobileDrawerOpen = false;
    
    this.init();
  }
  
  init() {
    this.updatePageInfo();
    this.bindEvents();
    this.setupAccessibility();
  }
  
  // 현재 페이지 정보 업데이트
  updatePageInfo() {
    const categoryData = MENU_DATA[this.currentCategory];
    if (!categoryData) return;
    
    const pageData = categoryData.pages.find(p => p.id === this.currentPage);
    if (!pageData) return;
    
    // 페이지 타이틀 업데이트
    const pageTitle = document.getElementById('page-title');
    const pageDescription = document.querySelector('.page-hero p');
    const documentTitle = document.querySelector('title');
    const breadcrumbCurrent = document.querySelector('.breadcrumb-current');
    const mobileBreadcrumb = document.querySelector('.mobile-breadcrumb');
    
    let displayTitle = pageData.label;
    let displayDescription = pageData.description;
    

    if (pageTitle) pageTitle.textContent = displayTitle;
    if (pageDescription) pageDescription.textContent = displayDescription;
    if (documentTitle) documentTitle.textContent = `${displayTitle} - S연구원`;
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = displayTitle;
    if (mobileBreadcrumb) mobileBreadcrumb.textContent = `${categoryData.label} > ${displayTitle}`;
    
    // 드롭다운 라벨 업데이트
    const depth1Label = document.querySelector('[data-dropdown="depth1"] .dropdown-label');
    const depth2Label = document.querySelector('[data-dropdown="depth2"] .dropdown-label');
    
    if (depth1Label) depth1Label.textContent = categoryData.label;
    if (depth2Label) depth2Label.textContent = displayTitle;
    
    // 드롭다운 리스트 업데이트
    this.updateDropdownLists();
    
    // 모바일 리스트 업데이트
    this.updateMobileLists();
  }
  
  // 드롭다운 리스트 동적 업데이트
  updateDropdownLists() {
    const depth1List = document.getElementById('dropdown-depth1');
    const depth2List = document.getElementById('dropdown-depth2');
    
    // 1뎁스 리스트 업데이트
    if (depth1List) {
      depth1List.innerHTML = Object.entries(MENU_DATA).map(([key, data]) => {
        const isSelected = key === this.currentCategory;
        const firstPage = data.pages[0];
        const href = `subpage.html?cat=${key}&page=${firstPage.id}`;
        return `
          <li role="option" aria-selected="${isSelected}">
            <a href="${href}" class="block px-4 py-2.5 text-sm ${isSelected ? 'text-primary bg-primary/5 font-medium' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}">${data.label}</a>
          </li>
        `;
      }).join('');
    }
    
    // 2뎁스 리스트 업데이트
    if (depth2List) {
      const categoryData = MENU_DATA[this.currentCategory];
      if (categoryData) {
        depth2List.innerHTML = categoryData.pages.map(page => {
          const isSelected = page.id === this.currentPage;
          const href = `subpage.html?cat=${this.currentCategory}&page=${page.id}`;
          return `
            <li role="option" aria-selected="${isSelected}">
              <a href="${href}" class="block px-4 py-2.5 text-sm ${isSelected ? 'text-primary bg-primary/5 font-medium' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}">${page.label}</a>
            </li>
          `;
        }).join('');
      }
    }
  }
  
  // 모바일 리스트 업데이트
  updateMobileLists() {
    // 1뎁스 활성화 상태 업데이트
    this.mobileDepth1Items.forEach(item => {
      const category = item.dataset.category;
      const isSelected = category === this.currentCategory;
      
      item.classList.toggle('text-primary', isSelected);
      item.classList.toggle('bg-primary/5', isSelected);
      item.classList.toggle('font-medium', isSelected);
      item.classList.toggle('border-primary', isSelected);
      item.classList.toggle('text-gray-700', !isSelected);
      item.classList.toggle('border-transparent', !isSelected);
      item.setAttribute('aria-selected', isSelected);
    });
    
    // 2뎁스 리스트 업데이트
    if (this.mobileDepth2List) {
      const categoryData = MENU_DATA[this.currentCategory];
      if (categoryData) {
        this.mobileDepth2List.innerHTML = categoryData.pages.map(page => {
          const isSelected = page.id === this.currentPage;
          const href = `subpage.html?cat=${this.currentCategory}&page=${page.id}${page.children ? '&sub=' + page.children[0].id : ''}`;
          return `
            <li role="option" aria-selected="${isSelected}">
              <a href="${href}" class="block px-3 py-3 ${isSelected ? 'text-primary bg-primary/5 font-medium' : 'text-gray-700 hover:text-primary hover:bg-gray-50'}">${page.label}</a>
            </li>
          `;
        }).join('');
      }
    }
  }
  
  bindEvents() {
    // 데스크톱 드롭다운 이벤트
    this.dropdowns.forEach(dropdown => {
      const btn = dropdown.querySelector('.nav-dropdown-btn');
      const list = dropdown.querySelector('.nav-dropdown-list');
      
      if (btn && list) {
        // 클릭 토글
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.toggleDropdown(dropdown);
        });
        
        // 키보드 이벤트
        btn.addEventListener('keydown', (e) => this.handleDropdownKeyDown(e, dropdown));
        list.addEventListener('keydown', (e) => this.handleListKeyDown(e, dropdown));
        
        // 포커스 아웃
        dropdown.addEventListener('focusout', (e) => {
          setTimeout(() => {
            if (!dropdown.contains(document.activeElement)) {
              this.closeDropdown(dropdown);
            }
          }, 0);
        });
      }
    });
    
    // 모바일 토글 버튼
    if (this.mobileToggle) {
      this.mobileToggle.addEventListener('click', () => this.toggleMobileDrawer());
    }
    
    // 모바일 백드롭 클릭
    if (this.mobileBackdrop) {
      this.mobileBackdrop.addEventListener('click', () => this.closeMobileDrawer());
    }
    
    // 모바일 1뎁스 아이템 클릭
    this.mobileDepth1Items.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const category = item.dataset.category;
        this.currentCategory = category;
        this.currentPage = MENU_DATA[category].pages[0].id;
        this.updateMobileLists();
      });
    });
    
    // 문서 클릭 시 드롭다운 닫기
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        this.closeAllDropdowns();
      }
    });
    
    // ESC 키로 닫기
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllDropdowns();
        this.closeMobileDrawer();
      }
    });
  }
  
  setupAccessibility() {
    this.dropdowns.forEach(dropdown => {
      const btn = dropdown.querySelector('.nav-dropdown-btn');
      const list = dropdown.querySelector('.nav-dropdown-list');
      
      if (btn && list) {
        btn.setAttribute('aria-expanded', 'false');
        list.setAttribute('aria-hidden', 'true');
      }
    });
  }
  
  // 드롭다운 토글
  toggleDropdown(dropdown) {
    const isOpen = dropdown.classList.contains('is-open');
    
    this.closeAllDropdowns();
    
    if (!isOpen) {
      this.openDropdown(dropdown);
    }
  }
  
  openDropdown(dropdown) {
    const btn = dropdown.querySelector('.nav-dropdown-btn');
    const list = dropdown.querySelector('.nav-dropdown-list');
    const arrow = dropdown.querySelector('.dropdown-arrow');
    
    dropdown.classList.add('is-open');
    btn?.setAttribute('aria-expanded', 'true');
    list?.classList.remove('opacity-0', 'invisible', '-translate-y-2');
    list?.classList.add('opacity-100', 'visible', 'translate-y-0');
    list?.setAttribute('aria-hidden', 'false');
    arrow?.classList.add('rotate-180');
    
    this.activeDropdown = dropdown;
    
    // 첫 번째 아이템에 포커스
    const firstItem = list?.querySelector('a');
    if (firstItem) firstItem.focus();
  }
  
  closeDropdown(dropdown) {
    const btn = dropdown.querySelector('.nav-dropdown-btn');
    const list = dropdown.querySelector('.nav-dropdown-list');
    const arrow = dropdown.querySelector('.dropdown-arrow');
    
    dropdown.classList.remove('is-open');
    btn?.setAttribute('aria-expanded', 'false');
    list?.classList.add('opacity-0', 'invisible', '-translate-y-2');
    list?.classList.remove('opacity-100', 'visible', 'translate-y-0');
    list?.setAttribute('aria-hidden', 'true');
    arrow?.classList.remove('rotate-180');
    
    if (this.activeDropdown === dropdown) {
      this.activeDropdown = null;
    }
  }
  
  closeAllDropdowns() {
    this.dropdowns.forEach(dropdown => this.closeDropdown(dropdown));
  }
  
  // 드롭다운 버튼 키보드 핸들러
  handleDropdownKeyDown(e, dropdown) {
    const { key } = e;
    
    switch (key) {
      case 'Enter':
      case ' ':
      case 'ArrowDown':
        e.preventDefault();
        this.openDropdown(dropdown);
        break;
      case 'ArrowUp':
        e.preventDefault();
        this.openDropdown(dropdown);
        const list = dropdown.querySelector('.nav-dropdown-list');
        const lastItem = list?.querySelector('li:last-child a');
        if (lastItem) lastItem.focus();
        break;
      case 'Escape':
        this.closeDropdown(dropdown);
        dropdown.querySelector('.nav-dropdown-btn')?.focus();
        break;
    }
  }
  
  // 드롭다운 리스트 키보드 핸들러
  handleListKeyDown(e, dropdown) {
    const { key } = e;
    const list = dropdown.querySelector('.nav-dropdown-list');
    const items = Array.from(list?.querySelectorAll('a') || []);
    const currentIndex = items.indexOf(document.activeElement);
    
    switch (key) {
      case 'ArrowDown':
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % items.length;
        items[nextIndex]?.focus();
        break;
      case 'ArrowUp':
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        items[prevIndex]?.focus();
        break;
      case 'Home':
        e.preventDefault();
        items[0]?.focus();
        break;
      case 'End':
        e.preventDefault();
        items[items.length - 1]?.focus();
        break;
      case 'Escape':
        e.preventDefault();
        this.closeDropdown(dropdown);
        dropdown.querySelector('.nav-dropdown-btn')?.focus();
        break;
      case 'Tab':
        this.closeDropdown(dropdown);
        break;
    }
  }
  
  // 모바일 드로어 토글
  toggleMobileDrawer() {
    if (this.isMobileDrawerOpen) {
      this.closeMobileDrawer();
    } else {
      this.openMobileDrawer();
    }
  }
  
  openMobileDrawer() {
    if (!this.mobileDrawer || !this.mobileBackdrop || !this.mobileToggle) return;
    
    this.mobileDrawer.classList.remove('translate-y-full');
    this.mobileDrawer.classList.add('translate-y-0');
    this.mobileDrawer.setAttribute('aria-hidden', 'false');
    
    this.mobileBackdrop.classList.remove('opacity-0', 'invisible');
    this.mobileBackdrop.classList.add('opacity-100', 'visible');
    
    this.mobileToggle.setAttribute('aria-expanded', 'true');
    this.mobileToggle.querySelector('svg')?.classList.add('rotate-180');
    
    this.isMobileDrawerOpen = true;
    
    // 스크롤 방지
    document.body.style.overflow = 'hidden';
  }
  
  closeMobileDrawer() {
    if (!this.mobileDrawer || !this.mobileBackdrop || !this.mobileToggle) return;
    
    this.mobileDrawer.classList.add('translate-y-full');
    this.mobileDrawer.classList.remove('translate-y-0');
    this.mobileDrawer.setAttribute('aria-hidden', 'true');
    
    this.mobileBackdrop.classList.add('opacity-0', 'invisible');
    this.mobileBackdrop.classList.remove('opacity-100', 'visible');
    
    this.mobileToggle.setAttribute('aria-expanded', 'false');
    this.mobileToggle.querySelector('svg')?.classList.remove('rotate-180');
    
    this.isMobileDrawerOpen = false;
    
    // 스크롤 복원
    document.body.style.overflow = '';
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new SecondaryNav();
});
