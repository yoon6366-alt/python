/**
 * S연구원 메인페이지 스크립트
 * - 배너 슬라이더 (3초 자동 재생, 좌측 슬라이드)
 * - 연구자료 필터 기능
 */

class BannerSlider {
  constructor() {
    this.track = document.getElementById('bannerTrack');
    this.slides = document.querySelectorAll('.banner-slide');
    this.indicators = document.querySelectorAll('.banner-indicator');
    this.prevBtn = document.querySelector('.banner-prev');
    this.nextBtn = document.querySelector('.banner-next');
    this.playBtn = document.querySelector('.banner-play');
    
    this.currentIndex = 0;
    this.totalSlides = this.slides.length;
    this.autoPlayInterval = null;
    this.isPlaying = true;
    this.autoPlayDelay = 3000; // 3초
    
    if (this.track && this.slides.length > 0) {
      this.init();
    }
  }
  
  init() {
    this.bindEvents();
    this.startAutoPlay();
    this.updateIndicators();
  }
  
  bindEvents() {
    // 이전/다음 버튼
    this.prevBtn?.addEventListener('click', () => this.prev());
    this.nextBtn?.addEventListener('click', () => this.next());
    
    // 재생/일시정지 버튼
    this.playBtn?.addEventListener('click', () => this.toggleAutoPlay());
    
    // 인디케이터 클릭
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index));
    });
    
    // 키보드 네비게이션
    document.addEventListener('keydown', (e) => {
      if (e.target.closest('.hero-banner')) {
        if (e.key === 'ArrowLeft') {
          this.prev();
        } else if (e.key === 'ArrowRight') {
          this.next();
        }
      }
    });
    
    // 마우스 호버 시 일시정지
    this.track?.closest('.hero-banner')?.addEventListener('mouseenter', () => {
      if (this.isPlaying) {
        this.pauseAutoPlay();
      }
    });
    
    this.track?.closest('.hero-banner')?.addEventListener('mouseleave', () => {
      if (this.isPlaying) {
        this.startAutoPlay();
      }
    });
    
    // 터치 스와이프 지원
    let touchStartX = 0;
    let touchEndX = 0;
    
    this.track?.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    this.track?.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe(touchStartX, touchEndX);
    }, { passive: true });
  }
  
  handleSwipe(startX, endX) {
    const threshold = 50;
    const diff = startX - endX;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        this.next();
      } else {
        this.prev();
      }
    }
  }
  
  goToSlide(index) {
    this.currentIndex = index;
    this.updateSlider();
    this.resetAutoPlay();
  }
  
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
    this.updateSlider();
    this.resetAutoPlay();
  }
  
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
    this.updateSlider();
    this.resetAutoPlay();
  }
  
  updateSlider() {
    const translateX = -this.currentIndex * 100;
    this.track.style.transform = `translateX(${translateX}%)`;
    this.updateIndicators();
  }
  
  updateIndicators() {
    this.indicators.forEach((indicator, index) => {
      const isActive = index === this.currentIndex;
      indicator.classList.toggle('bg-white', isActive);
      indicator.classList.toggle('bg-white/40', !isActive);
      indicator.classList.toggle('w-12', isActive);
      indicator.classList.toggle('w-8', !isActive);
      indicator.setAttribute('aria-selected', isActive);
    });
  }
  
  startAutoPlay() {
    this.pauseAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, this.autoPlayDelay);
  }
  
  pauseAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
  
  resetAutoPlay() {
    if (this.isPlaying) {
      this.startAutoPlay();
    }
  }
  
  toggleAutoPlay() {
    this.isPlaying = !this.isPlaying;
    
    const pauseIcon = this.playBtn?.querySelector('.pause-icon');
    const playIcon = this.playBtn?.querySelector('.play-icon');
    
    if (this.isPlaying) {
      this.startAutoPlay();
      pauseIcon?.classList.remove('hidden');
      playIcon?.classList.add('hidden');
      this.playBtn?.setAttribute('aria-label', '자동 재생 일시정지');
    } else {
      this.pauseAutoPlay();
      pauseIcon?.classList.add('hidden');
      playIcon?.classList.remove('hidden');
      this.playBtn?.setAttribute('aria-label', '자동 재생 시작');
    }
    
    this.playBtn?.setAttribute('data-playing', this.isPlaying);
  }
}

class ResearchFilter {
  constructor() {
    this.filterButtons = document.querySelectorAll('.filter-btn');
    this.cards = document.querySelectorAll('.research-card');
    this.currentFilter = 'all';
    
    if (this.filterButtons.length > 0 && this.cards.length > 0) {
      this.init();
    }
  }
  
  init() {
    this.bindEvents();
    this.updateFilterStyles();
  }
  
  bindEvents() {
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        this.setFilter(filter);
      });
    });
  }
  
  setFilter(filter) {
    this.currentFilter = filter;
    this.filterCards();
    this.updateFilterStyles();
  }
  
  filterCards() {
    this.cards.forEach(card => {
      const category = card.dataset.category;
      const shouldShow = this.currentFilter === 'all' || category === this.currentFilter;
      
      if (shouldShow) {
        card.style.display = '';
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        
        requestAnimationFrame(() => {
          card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        });
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  updateFilterStyles() {
    this.filterButtons.forEach(btn => {
      const isActive = btn.dataset.filter === this.currentFilter;
      
      btn.classList.toggle('bg-primary', isActive);
      btn.classList.toggle('text-white', isActive);
      btn.classList.toggle('bg-white', !isActive);
      btn.classList.toggle('text-gray-600', !isActive);
      btn.classList.toggle('border', !isActive);
      btn.classList.toggle('border-gray-200', !isActive);
      btn.classList.toggle('hover:text-primary', !isActive);
      btn.classList.toggle('hover:border-primary', !isActive);
      
      btn.setAttribute('aria-selected', isActive);
    });
  }
}

/**
 * 영상콘텐츠 캐러셀 + 필터
 */
class VideoCarousel {
  constructor() {
    this.track = document.getElementById('videoCarouselTrack');
    this.cards = document.querySelectorAll('.video-card');
    this.filterButtons = document.querySelectorAll('.video-filter-btn');
    this.prevBtn = document.querySelector('.video-carousel-prev');
    this.nextBtn = document.querySelector('.video-carousel-next');
    
    this.currentIndex = 0;
    this.visibleCards = 2; // 데스크탑: 2열
    this.currentFilter = 'all';
    this.filteredCards = [...this.cards];
    
    if (this.track && this.cards.length > 0) {
      this.init();
    }
  }
  
  init() {
    this.updateVisibleCards();
    this.bindEvents();
    this.updateCarousel();
    this.updateNavButtons();
    
    window.addEventListener('resize', () => {
      this.updateVisibleCards();
      this.currentIndex = 0;
      this.updateCarousel();
      this.updateNavButtons();
    });
  }
  
  updateVisibleCards() {
    if (window.innerWidth < 640) {
      this.visibleCards = 1;
    } else {
      this.visibleCards = 2;
    }
  }
  
  bindEvents() {
    this.prevBtn?.addEventListener('click', () => this.prev());
    this.nextBtn?.addEventListener('click', () => this.next());
    
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        this.setFilter(filter);
      });
    });
  }
  
  setFilter(filter) {
    this.currentFilter = filter;
    this.currentIndex = 0;
    this.filterCards();
    this.updateFilterStyles();
    this.updateCarousel();
    this.updateNavButtons();
  }
  
  filterCards() {
    this.cards.forEach(card => {
      const category = card.dataset.category;
      const shouldShow = this.currentFilter === 'all' || category === this.currentFilter;
      card.style.display = shouldShow ? '' : 'none';
    });
    
    this.filteredCards = [...this.cards].filter(card => {
      const category = card.dataset.category;
      return this.currentFilter === 'all' || category === this.currentFilter;
    });
  }
  
  updateFilterStyles() {
    this.filterButtons.forEach(btn => {
      const isActive = btn.dataset.filter === this.currentFilter;
      
      if (isActive) {
        btn.classList.add('bg-primary', 'text-white');
        btn.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-200', 'hover:text-primary', 'hover:border-primary');
      } else {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-200', 'hover:text-primary', 'hover:border-primary');
      }
      
      btn.setAttribute('aria-selected', isActive);
    });
  }
  
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarousel();
      this.updateNavButtons();
    }
  }
  
  next() {
    const maxIndex = Math.max(0, this.filteredCards.length - this.visibleCards);
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
      this.updateCarousel();
      this.updateNavButtons();
    }
  }
  
  updateCarousel() {
    const cardWidth = 100 / this.visibleCards;
    const translateX = -this.currentIndex * cardWidth;
    this.track.style.transform = `translateX(${translateX}%)`;
  }
  
  updateNavButtons() {
    const maxIndex = Math.max(0, this.filteredCards.length - this.visibleCards);
    
    if (this.prevBtn) {
      this.prevBtn.disabled = this.currentIndex === 0;
    }
    if (this.nextBtn) {
      this.nextBtn.disabled = this.currentIndex >= maxIndex;
    }
  }
}

/**
 * 지식콘텐츠 캐러셀 + 필터
 */
class KnowledgeCarousel {
  constructor() {
    this.track = document.getElementById('knowledgeCarouselTrack');
    this.cards = document.querySelectorAll('.knowledge-card');
    this.filterButtons = document.querySelectorAll('.knowledge-filter-btn');
    this.prevBtn = document.querySelector('.knowledge-carousel-prev');
    this.nextBtn = document.querySelector('.knowledge-carousel-next');
    
    this.currentIndex = 0;
    this.visibleCards = 3; // 데스크탑: 3열
    this.currentFilter = 'all';
    this.filteredCards = [...this.cards];
    
    if (this.track && this.cards.length > 0) {
      this.init();
    }
  }
  
  init() {
    this.updateVisibleCards();
    this.bindEvents();
    this.updateCarousel();
    this.updateNavButtons();
    
    window.addEventListener('resize', () => {
      this.updateVisibleCards();
      this.currentIndex = 0;
      this.updateCarousel();
      this.updateNavButtons();
    });
  }
  
  updateVisibleCards() {
    if (window.innerWidth < 640) {
      this.visibleCards = 1;
    } else if (window.innerWidth < 1024) {
      this.visibleCards = 2;
    } else {
      this.visibleCards = 3;
    }
  }
  
  bindEvents() {
    this.prevBtn?.addEventListener('click', () => this.prev());
    this.nextBtn?.addEventListener('click', () => this.next());
    
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        this.setFilter(filter);
      });
    });
  }
  
  setFilter(filter) {
    this.currentFilter = filter;
    this.currentIndex = 0;
    this.filterCards();
    this.updateFilterStyles();
    this.updateCarousel();
    this.updateNavButtons();
  }
  
  filterCards() {
    this.cards.forEach(card => {
      const category = card.dataset.category;
      const shouldShow = this.currentFilter === 'all' || category === this.currentFilter;
      card.style.display = shouldShow ? '' : 'none';
    });
    
    this.filteredCards = [...this.cards].filter(card => {
      const category = card.dataset.category;
      return this.currentFilter === 'all' || category === this.currentFilter;
    });
  }
  
  updateFilterStyles() {
    this.filterButtons.forEach(btn => {
      const isActive = btn.dataset.filter === this.currentFilter;
      
      if (isActive) {
        btn.classList.add('bg-primary', 'text-white');
        btn.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-200', 'hover:text-primary', 'hover:border-primary');
      } else {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-200', 'hover:text-primary', 'hover:border-primary');
      }
      
      btn.setAttribute('aria-selected', isActive);
    });
  }
  
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarousel();
      this.updateNavButtons();
    }
  }
  
  next() {
    const maxIndex = Math.max(0, this.filteredCards.length - this.visibleCards);
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
      this.updateCarousel();
      this.updateNavButtons();
    }
  }
  
  updateCarousel() {
    const cardWidth = 100 / this.visibleCards;
    const translateX = -this.currentIndex * cardWidth;
    this.track.style.transform = `translateX(${translateX}%)`;
  }
  
  updateNavButtons() {
    const maxIndex = Math.max(0, this.filteredCards.length - this.visibleCards);
    
    if (this.prevBtn) {
      this.prevBtn.disabled = this.currentIndex === 0;
    }
    if (this.nextBtn) {
      this.nextBtn.disabled = this.currentIndex >= maxIndex;
    }
  }
}

/**
 * 데스크탑 영상콘텐츠 필터 (그리드용)
 */
class VideoDesktopFilter {
  constructor() {
    this.filterButtons = document.querySelectorAll('.video-filter-btn-desktop');
    this.cards = document.querySelectorAll('.video-card-desktop');
    this.currentFilter = 'all';
    
    // 영상 데이터 배열 (필터링용)
    this.videoData = [
      { category: 'video-report', title: '2026년 서울시 도시재생 정책 방향 영상보고서', date: '2026.01.05', duration: '12:34', color: 'primary' },
      { category: 'video-sketch', title: 'S연구원 신년 워크숍 현장 스케치', date: '2026.01.04', duration: '05:21', color: 'emerald' },
      { category: 'video-report', title: '스마트시티 기술 도입 현황 및 발전전략 브리핑', date: '2026.01.03', duration: '18:45', color: 'primary' },
      { category: 'video-sketch', title: '도시연구 세미나 현장 방문기', date: '2026.01.02', duration: '03:45', color: 'emerald' },
      { category: 'video-report', title: '대중교통 이용실태 분석 및 개선방안 발표', date: '2026.01.01', duration: '15:22', color: 'primary' },
      { category: 'video-sketch', title: '청년정책 연구 현장 인터뷰', date: '2025.12.30', duration: '07:18', color: 'emerald' }
    ];
    
    if (this.filterButtons.length > 0) {
      this.init();
    }
  }
  
  init() {
    this.bindEvents();
  }
  
  bindEvents() {
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        this.setFilter(filter);
      });
    });
  }
  
  setFilter(filter) {
    this.currentFilter = filter;
    this.updateFilterStyles();
    this.updateCard();
  }
  
  updateFilterStyles() {
    this.filterButtons.forEach(btn => {
      const isActive = btn.dataset.filter === this.currentFilter;
      
      if (isActive) {
        btn.classList.add('bg-primary', 'text-white');
        btn.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-200', 'hover:text-primary', 'hover:border-primary');
      } else {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-200', 'hover:text-primary', 'hover:border-primary');
      }
      
      btn.setAttribute('aria-selected', isActive);
    });
  }
  
  updateCard() {
    const filteredData = this.currentFilter === 'all' 
      ? this.videoData 
      : this.videoData.filter(v => v.category === this.currentFilter);
    
    if (filteredData.length > 0 && this.cards.length > 0) {
      const card = this.cards[0];
      const data = filteredData[0];
      
      // 카테고리 배지 업데이트
      const badge = card.querySelector('span[class*="bg-primary"], span[class*="bg-emerald"]');
      if (badge) {
        badge.textContent = data.category === 'video-report' ? '영상보고서' : '영상스케치';
        badge.className = `absolute top-3 right-3 px-2.5 py-1 text-xs font-semibold text-white ${data.color === 'primary' ? 'bg-primary/90' : 'bg-emerald-600/90'} backdrop-blur-sm rounded`;
      }
      
      // 제목 업데이트
      const title = card.querySelector('h3');
      if (title) {
        title.textContent = data.title;
      }
      
      // 날짜 업데이트
      const dateEl = card.querySelector('p');
      if (dateEl) {
        dateEl.textContent = data.date;
      }
      
      // 재생시간 업데이트
      const duration = card.querySelector('span[class*="bg-black"]');
      if (duration) {
        duration.textContent = data.duration;
      }
      
      // 배경색 업데이트
      const bg = card.querySelector('div[class*="bg-gradient"]');
      if (bg) {
        bg.className = `absolute inset-0 bg-gradient-to-br ${data.color === 'primary' ? 'from-primary/80 to-primary-dark' : 'from-emerald-600 to-emerald-800'} flex items-center justify-center`;
      }
      
      // 재생버튼 색상 업데이트
      const playIcon = card.querySelector('.w-16 svg');
      if (playIcon) {
        playIcon.className = `w-8 h-8 ${data.color === 'primary' ? 'text-primary' : 'text-emerald-600'} ml-1`;
      }
      
      card.dataset.category = data.category;
    }
  }
}

/**
 * 데스크탑 지식콘텐츠 필터 (그리드용)
 */
class KnowledgeDesktopFilter {
  constructor() {
    this.filterButtons = document.querySelectorAll('.knowledge-filter-btn-desktop');
    this.cards = document.querySelectorAll('.knowledge-card-desktop');
    this.currentFilter = 'all';
    
    // 지식콘텐츠 데이터 배열 (필터링용)
    this.knowledgeData = [
      { category: 'infographic', title: '서울시 인구 변화 추이 한눈에 보기', date: '2026.01.05', color: 'violet' },
      { category: 'cardnews', title: '알아두면 쓸모있는 도시재생 이야기', date: '2026.01.04', color: 'rose' },
      { category: 'infographic', title: '2025년 서울시 경제지표 분석 인포그래픽', date: '2026.01.03', color: 'violet' },
      { category: 'cardnews', title: '청년을 위한 주거 지원 정책 A to Z', date: '2026.01.02', color: 'rose' },
      { category: 'infographic', title: '서울시 녹색교통 현황과 미래 전망', date: '2026.01.01', color: 'violet' },
      { category: 'cardnews', title: '문화예술 지원 정책 쉽게 알아보기', date: '2025.12.30', color: 'rose' }
    ];
    
    if (this.filterButtons.length > 0) {
      this.init();
    }
  }
  
  init() {
    this.bindEvents();
  }
  
  bindEvents() {
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        this.setFilter(filter);
      });
    });
  }
  
  setFilter(filter) {
    this.currentFilter = filter;
    this.updateFilterStyles();
    this.updateCards();
  }
  
  updateFilterStyles() {
    this.filterButtons.forEach(btn => {
      const isActive = btn.dataset.filter === this.currentFilter;
      
      if (isActive) {
        btn.classList.add('bg-primary', 'text-white');
        btn.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-200', 'hover:text-primary', 'hover:border-primary');
      } else {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-200', 'hover:text-primary', 'hover:border-primary');
      }
      
      btn.setAttribute('aria-selected', isActive);
    });
  }
  
  updateCards() {
    const filteredData = this.currentFilter === 'all' 
      ? this.knowledgeData 
      : this.knowledgeData.filter(k => k.category === this.currentFilter);
    
    this.cards.forEach((card, index) => {
      if (index < filteredData.length) {
        const data = filteredData[index];
        
        // 카테고리 배지 업데이트
        const badge = card.querySelector('span[class*="bg-violet"], span[class*="bg-rose"]');
        if (badge) {
          badge.textContent = data.category === 'infographic' ? '인포그래픽' : '카드뉴스';
          badge.className = `absolute top-2 right-2 px-2 py-0.5 text-[10px] font-semibold text-white ${data.color === 'violet' ? 'bg-violet-600/90' : 'bg-rose-600/90'} backdrop-blur-sm rounded`;
        }
        
        // 제목 업데이트
        const title = card.querySelector('h3');
        if (title) {
          title.textContent = data.title;
        }
        
        // 날짜 업데이트
        const dateEl = card.querySelector('p');
        if (dateEl) {
          dateEl.textContent = data.date;
        }
        
        // 배경색 업데이트
        const bg = card.querySelector('div[class*="bg-gradient"]');
        if (bg) {
          bg.className = `relative aspect-[4/3] bg-gradient-to-br ${data.color === 'violet' ? 'from-violet-500 to-violet-700' : 'from-rose-500 to-rose-700'} overflow-hidden rounded-lg`;
        }
        
        card.dataset.category = data.category;
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new BannerSlider();
  new ResearchFilter();
  new VideoCarousel();
  new KnowledgeCarousel();
  new VideoDesktopFilter();
  new KnowledgeDesktopFilter();
});
