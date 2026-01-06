/**
 * 사이트맵 페이지 스크립트
 * - MENU_DATA 기반 사이트맵 렌더링
 * - 표 형태 2열 레이아웃
 */

// 메뉴 데이터 (index.html 메가메뉴와 동일)
const MENU_DATA = {
  research: {
    label: '연구',
    pages: [
      { id: 'reports', label: '연구보고서' },
      { id: 'books', label: '단행본' },
      { id: 'policy', label: '정책리포트' },
      { id: 'urban', label: '도시연구' },
      { id: 'academic', label: '학술행사자료' }
    ]
  },
  trends: {
    label: '동향',
    pages: [
      { id: 'global', label: '세계도시정책동향' },
      { 
        id: 'monitoring', 
        label: '경제모니터링',
        subPages: [
          { id: 'economy', label: '경제동향' },
          { id: 'consumption', label: '소비경기지수' },
          { id: 'sentiment', label: '소비자체감' }
        ]
      },
      { id: 'data', label: '데이터로 본 도시' }
    ]
  },
  media: {
    label: '미디어',
    pages: [
      { id: 'infographic', label: '인포그래픽' },
      { id: 'cardnews', label: '카드뉴스' },
      { 
        id: 'weekly', 
        label: '주간브리프',
        subPages: [
          { id: 'curation', label: '이슈큐레이션' },
          { id: 'economicnote', label: '경제이슈노트' }
        ]
      }
    ]
  },
  community: {
    label: '소통',
    pages: [
      { id: 'notice', label: '공지사항' },
      { id: 'press', label: '보도자료' },
      { id: 'jobs', label: '채용공고' },
      { id: 'faq', label: '자주묻는질문' },
      { id: 'cooperation', label: '협력연구 제안' }
    ]
  },
  about: {
    label: '소개',
    pages: [
      { 
        id: 'intro', 
        label: 'S연구원은',
        subPages: [
          { id: 'purpose', label: '설립목적 및 기능' },
          { id: 'greeting', label: '원장 인사말' },
          { id: 'history', label: '연혁' }
        ]
      },
      { id: 'organization', label: '조직도' },
      { id: 'partners', label: '연구협력기관' },
      { id: 'location', label: '오시는 길' }
    ]
  }
};

class Sitemap {
  constructor() {
    this.container = document.getElementById('sitemap-container');
    this.init();
  }

  init() {
    if (!this.container) return;
    this.renderSitemap();
  }

  renderSitemap() {
    const html = Object.entries(MENU_DATA).map(([categoryKey, categoryData]) => {
      return this.renderCategory(categoryKey, categoryData);
    }).join('');

    this.container.innerHTML = html;
  }

  renderCategory(categoryKey, categoryData) {
    // 2depth 메뉴를 4개씩 묶기
    const pages = categoryData.pages;
    const chunkedPages = [];
    for (let i = 0; i < pages.length; i += 4) {
      chunkedPages.push(pages.slice(i, i + 4));
    }

    const rowsHTML = chunkedPages.map((chunk, chunkIndex) => {
      const isFirst = chunkIndex === 0;
      const rowspanAttr = isFirst ? ` rowspan="${chunkedPages.length}"` : '';
      const depth1Cell = isFirst ? `
        <td${rowspanAttr} class="w-1/4 px-6 py-6 border border-gray-200 bg-gray-50 align-top">
          <h3 class="text-lg font-bold text-gray-900">${categoryData.label}</h3>
        </td>
      ` : '';

      const depth2CellsHTML = chunk.map(page => {
        const hasSubPages = page.subPages && page.subPages.length > 0;
        const pageURL = hasSubPages 
          ? `subpage.html?cat=${categoryKey}&page=${page.subPages[0].id}` 
          : `subpage.html?cat=${categoryKey}&page=${page.id}`;
        
        // 3depth 메뉴가 있는 경우 처리
        const depth3HTML = hasSubPages ? `
          <div class="mt-2 space-y-1">
            ${page.subPages.map(subPage => `
              <a href="subpage.html?cat=${categoryKey}&page=${subPage.id}" class="block text-xs text-gray-500 hover:text-primary transition-colors">
                - ${subPage.label}
              </a>
            `).join('')}
          </div>
        ` : '';

        return `
          <div class="p-3">
            <a href="${pageURL}" class="block group">
              <div class="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                ${page.label}
              </div>
            </a>
            ${depth3HTML}
          </div>
        `;
      }).join('');

      return `
        <tr>
          ${depth1Cell}
          <td class="w-3/4 border border-gray-200">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
              ${depth2CellsHTML}
            </div>
          </td>
        </tr>
      `;
    }).join('');

    return `
      <div class="overflow-x-auto">
        <table class="w-full border-collapse">
          <tbody>
            ${rowsHTML}
          </tbody>
        </table>
      </div>
    `;
  }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
  new Sitemap();
});
