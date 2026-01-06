/**
 * S연구원 GNB & Mega Menu
 * - 호버/클릭으로 메가메뉴 열기
 * - 키보드 내비게이션 (Arrow keys, Tab, Escape)
 * - ARIA 속성 관리
 * - 바깥쪽 클릭/ESC로 닫기
 * - 3depth 서브메뉴 토글
 */

class MegaMenu {
  constructor() {
    // DOM Elements
    this.header = document.querySelector('header');
    this.gnbLinks = document.querySelectorAll('.gnb-link');
    this.megaPanels = document.querySelectorAll('.mega-panel');
    this.backdrop = document.querySelector('.mega-backdrop');
    this.depth2Btns = document.querySelectorAll('.depth2-btn');
    
    // State
    this.activePanel = null;
    this.isOpen = false;
    this.hoverTimeout = null;
    this.closeTimeout = null;
    
    // Settings
    this.hoverDelay = 100;
    this.closeDelay = 150;
    
    this.init();
  }
  
  init() {
    this.bindEvents();
    this.setupAccessibility();
  }
  
  bindEvents() {
    // GNB Link events
    this.gnbLinks.forEach((link, index) => {
      link.addEventListener('mouseenter', (e) => this.handleMouseEnter(e, link));
      link.addEventListener('mouseleave', (e) => this.handleMouseLeave(e));
      link.addEventListener('click', (e) => this.handleClick(e, link));
      link.addEventListener('keydown', (e) => this.handleKeyDown(e, link, index));
    });
    
    // Mega panel events
    this.megaPanels.forEach(panel => {
      panel.addEventListener('mouseenter', () => this.cancelClose());
      panel.addEventListener('mouseleave', (e) => this.handlePanelMouseLeave(e));
      panel.addEventListener('keydown', (e) => this.handlePanelKeyDown(e));
    });
    
    // 3depth toggle buttons
    this.depth2Btns.forEach(btn => {
      btn.addEventListener('click', (e) => this.handleDepth2Click(e, btn));
    });
    
    // Backdrop click
    if (this.backdrop) {
      this.backdrop.addEventListener('click', () => this.closeMenu());
    }
    
    // Document events
    document.addEventListener('keydown', (e) => this.handleDocumentKeyDown(e));
    document.addEventListener('click', (e) => this.handleDocumentClick(e));
    document.addEventListener('focusin', (e) => this.handleFocusIn(e));
  }
  
  setupAccessibility() {
    this.gnbLinks.forEach(link => {
      link.setAttribute('aria-expanded', 'false');
    });
    
    this.megaPanels.forEach(panel => {
      panel.setAttribute('aria-hidden', 'true');
    });
  }
  
  // 3depth toggle
  handleDepth2Click(e, btn) {
    e.preventDefault();
    e.stopPropagation();
    
    const parentItem = btn.closest('.depth2-item');
    if (!parentItem) return;
    
    // Close other open depth3 menus
    document.querySelectorAll('.depth2-item.has-depth3.is-open').forEach(item => {
      if (item !== parentItem) {
        item.classList.remove('is-open');
      }
    });
    
    // Toggle current
    parentItem.classList.toggle('is-open');
  }
  
  // Mouse Handlers
  handleMouseEnter(e, link) {
    this.cancelClose();
    
    clearTimeout(this.hoverTimeout);
    this.hoverTimeout = setTimeout(() => {
      this.openMenu(link);
    }, this.hoverDelay);
  }
  
  handleMouseLeave(e) {
    clearTimeout(this.hoverTimeout);
    this.scheduleClose();
  }
  
  handlePanelMouseLeave(e) {
    const relatedTarget = e.relatedTarget;
    if (relatedTarget && relatedTarget.closest('.gnb-link')) {
      return;
    }
    this.scheduleClose();
  }
  
  // Click Handlers
  handleClick(e, link) {
    // a 태그인 경우 기본 링크 동작 허용 (페이지 이동)
    if (link.tagName === 'A' && link.href) {
      // 메가메뉴가 열려있고 같은 메뉴를 클릭한 경우에만 메뉴 닫기
      if (this.isOpen && this.activePanel === this.getPanelForLink(link)) {
        // 페이지 이동 허용 (preventDefault 호출 안 함)
        return;
      }
      // 페이지 이동 허용
      return;
    }
    
    // button 태그인 경우 기존 동작 (메가메뉴 토글)
    e.preventDefault();
    
    if (this.isOpen && this.activePanel === this.getPanelForLink(link)) {
      this.closeMenu();
    } else {
      this.openMenu(link);
    }
  }
  
  handleDocumentClick(e) {
    if (!this.isOpen) return;
    
    const isInsideHeader = e.target.closest('header');
    if (!isInsideHeader) {
      this.closeMenu();
    }
  }
  
  // Keyboard Handlers
  handleKeyDown(e, link, index) {
    const { key } = e;
    
    switch (key) {
      case 'Enter':
      case ' ':
        // a 태그인 경우 Enter 키로 페이지 이동 허용
        if (link.tagName === 'A' && link.href && key === 'Enter') {
          return; // 기본 동작 허용 (페이지 이동)
        }
        e.preventDefault();
        this.openMenu(link);
        this.focusFirstMenuItem();
        break;
        
      case 'ArrowDown':
        e.preventDefault();
        if (this.isOpen) {
          this.focusFirstMenuItem();
        } else {
          this.openMenu(link);
          this.focusFirstMenuItem();
        }
        break;
        
      case 'ArrowRight':
        e.preventDefault();
        this.focusNextGnbLink(index);
        break;
        
      case 'ArrowLeft':
        e.preventDefault();
        this.focusPrevGnbLink(index);
        break;
        
      case 'Escape':
        if (this.isOpen) {
          e.preventDefault();
          this.closeMenu();
          link.focus();
        }
        break;
        
      case 'Tab':
        if (this.isOpen && !e.shiftKey) {
          e.preventDefault();
          this.focusFirstMenuItem();
        }
        break;
    }
  }
  
  handlePanelKeyDown(e) {
    const { key } = e;
    
    if (key === 'Escape') {
      e.preventDefault();
      this.closeMenu();
      this.getActiveGnbLink()?.focus();
    }
  }
  
  handleDocumentKeyDown(e) {
    if (e.key === 'Escape' && this.isOpen) {
      this.closeMenu();
      this.getActiveGnbLink()?.focus();
    }
  }
  
  // Focus Handlers
  handleFocusIn(e) {
    if (!this.isOpen) return;
    
    const isInsideMenu = e.target.closest('.mega-panel') || e.target.closest('.gnb-link');
    if (!isInsideMenu) {
      this.closeMenu();
    }
  }
  
  focusNextGnbLink(currentIndex) {
    const nextIndex = (currentIndex + 1) % this.gnbLinks.length;
    this.gnbLinks[nextIndex].focus();
    
    if (this.isOpen) {
      this.openMenu(this.gnbLinks[nextIndex]);
    }
  }
  
  focusPrevGnbLink(currentIndex) {
    const prevIndex = (currentIndex - 1 + this.gnbLinks.length) % this.gnbLinks.length;
    this.gnbLinks[prevIndex].focus();
    
    if (this.isOpen) {
      this.openMenu(this.gnbLinks[prevIndex]);
    }
  }
  
  focusFirstMenuItem() {
    const menuItems = this.getMenuItems();
    if (menuItems.length > 0) {
      menuItems[0].focus();
    }
  }
  
  // Menu Operations
  openMenu(link) {
    const panel = this.getPanelForLink(link);
    if (!panel) return;
    
    if (this.activePanel && this.activePanel !== panel) {
      this.deactivatePanel(this.activePanel);
      this.deactivateLink(this.getActiveGnbLink());
    }
    
    this.activateLink(link);
    this.activatePanel(panel);
    
    this.activePanel = panel;
    this.isOpen = true;
    
    if (this.backdrop) {
      this.backdrop.classList.add('is-visible');
    }
  }
  
  closeMenu() {
    if (!this.isOpen) return;
    
    this.cancelClose();
    
    // Close all depth3 menus
    document.querySelectorAll('.depth2-item.has-depth3.is-open').forEach(item => {
      item.classList.remove('is-open');
    });
    
    this.gnbLinks.forEach(link => this.deactivateLink(link));
    this.megaPanels.forEach(panel => this.deactivatePanel(panel));
    
    if (this.backdrop) {
      this.backdrop.classList.remove('is-visible');
    }
    
    this.activePanel = null;
    this.isOpen = false;
  }
  
  scheduleClose() {
    this.closeTimeout = setTimeout(() => {
      this.closeMenu();
    }, this.closeDelay);
  }
  
  cancelClose() {
    clearTimeout(this.closeTimeout);
  }
  
  // Panel/Link Activation
  activateLink(link) {
    link.setAttribute('aria-expanded', 'true');
  }
  
  deactivateLink(link) {
    if (link) {
      link.setAttribute('aria-expanded', 'false');
    }
  }
  
  activatePanel(panel) {
    panel.removeAttribute('hidden');
    panel.setAttribute('aria-hidden', 'false');
    panel.classList.add('is-active');
  }
  
  deactivatePanel(panel) {
    panel.setAttribute('aria-hidden', 'true');
    panel.classList.remove('is-active');
    
    setTimeout(() => {
      if (!panel.classList.contains('is-active')) {
        panel.setAttribute('hidden', '');
      }
    }, 250);
  }
  
  // Utilities
  getPanelForLink(link) {
    const panelId = link.getAttribute('aria-controls');
    return document.getElementById(panelId);
  }
  
  getActiveGnbLink() {
    return document.querySelector('.gnb-link[aria-expanded="true"]');
  }
  
  getMenuItems() {
    if (!this.activePanel) return [];
    return Array.from(this.activePanel.querySelectorAll('a, button'));
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new MegaMenu();
});
