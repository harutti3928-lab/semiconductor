/* site.js — 半導体物理学ノート 共通ナビゲーション */
(function () {
  var PAGES = [
    { path: 'index.html',                             title: 'トップページ',                     section: '' },
    { path: 'notes/03_carrier-statistics.html',       title: '第3回 キャリア統計',               section: 'キャリア統計' },
    { path: 'notes/04_pn-junction.html',              title: '第4回 pn接合',                     section: '接合・MIS' },
    { path: 'notes/05_metal-semiconductor-mis.html',  title: '第5回 金属半導体接合とMIS構造',    section: '接合・MIS' },
    { path: 'notes/06_heterostructure-nanostructure.html', title: '第6回 ヘテロ接合とナノ構造',  section: 'ヘテロ構造・光物性' },
    { path: 'notes/07_optical-properties.html',       title: '第7回 光学的性質',                 section: 'ヘテロ構造・光物性' },
    { path: 'notes/08_optoelectronic-devices.html',   title: '第8回 光デバイス',                 section: 'ヘテロ構造・光物性' },
    { path: 'notes/09_transistors.html',              title: '第9回 トランジスタ',               section: 'トランジスタ' },
    { path: 'notes/10_transport-scattering.html',     title: '第10回 伝導と散乱',                section: '輸送・量子効果' },
    { path: 'notes/11_2deg-quantum-transport.html',   title: '第11回 2次元電子系と量子輸送',     section: '輸送・量子効果' }
  ];

  var KNOWN_DIRS = ['notes'];

  /* ── URL helpers ────────────────────────── */
  function getBase() {
    var parts = window.location.pathname.replace(/\\/g, '/').split('/');
    parts.pop(); // filename
    var dir = parts.pop(); // parent dir
    return KNOWN_DIRS.indexOf(dir) >= 0 ? '../' : './';
  }

  function getCurrentPage() {
    var pname = window.location.pathname.replace(/\\/g, '/');
    var filename = pname.split('/').pop() || 'index.html';
    var dir = pname.split('/').slice(-2, -1)[0] || '';
    for (var i = 0; i < PAGES.length; i++) {
      var p = PAGES[i];
      var pFile = p.path.split('/').pop();
      var pDir  = p.path.indexOf('/') >= 0 ? p.path.split('/')[0] : '';
      if (pFile === filename && (pDir === '' || pDir === dir)) return i;
    }
    return -1;
  }

  /* ── Sidebar ────────────────────────────── */
  function buildSidebar(idx, base) {
    var html = '<div class="sidebar-header">'
      + '<a href="' + base + 'index.html" class="sidebar-home">半導体物理学ノート</a>'
      + '</div>'
      + '<nav class="sidebar-toc">'
      + '<span class="toc-label">このページ</span>'
      + '<ul id="toc-list"></ul>'
      + '</nav>'
      + '<nav class="sidebar-pages">'
      + '<span class="toc-label">全ページ</span>'
      + buildPageNav(idx, base)
      + '</nav>';
    return html;
  }

  function buildPageNav(currentIdx, base) {
    var sections = {};
    var order = [];
    PAGES.forEach(function (p) {
      if (!p.section) return;
      if (!sections[p.section]) { sections[p.section] = []; order.push(p.section); }
      sections[p.section].push(p);
    });
    var html = '';
    order.forEach(function (sec) {
      html += '<div class="pages-section" data-s="' + sec + '">'
        + '<span class="pages-section-title">' + sec + '</span><ul>';
      sections[sec].forEach(function (p) {
        var pi = PAGES.indexOf(p);
        var cls = pi === currentIdx ? ' class="current"' : '';
        html += '<li' + cls + '><a href="' + base + p.path + '">' + p.title + '</a></li>';
      });
      html += '</ul></div>';
    });
    return html;
  }

  /* ── TOC from h2 headings ────────────────── */
  function buildTOC() {
    var main = document.querySelector('main');
    var list = document.getElementById('toc-list');
    if (!main || !list) return;
    var h2s = main.querySelectorAll('h2');
    if (!h2s.length) {
      var toc = list.closest('.sidebar-toc');
      if (toc) toc.style.display = 'none';
      return;
    }
    h2s.forEach(function (h, i) {
      if (!h.id) h.id = 'sec-' + i;
      var li = document.createElement('li');
      var a  = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent.trim();
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  /* ── Next / Prev ────────────────────────── */
  function injectNextPrev(idx, base) {
    var footer = document.querySelector('footer');
    if (!footer) return;
    var prev = idx > 0 ? PAGES[idx - 1] : null;
    var next = idx < PAGES.length - 1 ? PAGES[idx + 1] : null;
    var nav = document.createElement('nav');
    nav.className = 'page-nav';
    nav.innerHTML =
      (prev
        ? '<a href="' + base + prev.path + '" class="page-nav-prev">← ' + prev.title + '</a>'
        : '<span class="page-nav-placeholder"></span>')
      + (next
        ? '<a href="' + base + next.path + '" class="page-nav-next">' + next.title + ' →</a>'
        : '<span class="page-nav-placeholder"></span>');
    footer.insertBefore(nav, footer.firstChild);
  }

  /* ── Active section via IntersectionObserver ── */
  function setupActiveSection() {
    var h2s = Array.from(document.querySelectorAll('main h2[id]'));
    if (!h2s.length || !window.IntersectionObserver) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          document.querySelectorAll('#toc-list a').forEach(function (a) {
            a.classList.remove('active');
          });
          var a = document.querySelector('#toc-list a[href="#' + e.target.id + '"]');
          if (a) a.classList.add('active');
        }
      });
    }, { rootMargin: '-5% 0px -75% 0px', threshold: 0 });
    h2s.forEach(function (h) { obs.observe(h); });
  }

  /* ── Bootstrap ─────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    var base = getBase();
    var idx  = getCurrentPage();

    /* Sidebar */
    var aside = document.createElement('aside');
    aside.className = 'site-sidebar';
    aside.id = 'site-sidebar';
    aside.innerHTML = buildSidebar(idx, base);
    document.body.insertBefore(aside, document.body.firstChild);
    document.body.classList.add('has-sidebar');

    /* Mobile toggle */
    var btn = document.createElement('button');
    btn.className = 'sidebar-toggle';
    btn.setAttribute('aria-label', 'サイドバーを開く');
    btn.innerHTML = '&#9776;';
    btn.addEventListener('click', function () { aside.classList.toggle('open'); });
    document.body.insertBefore(btn, aside.nextSibling);

    buildTOC();
    if (idx >= 0) injectNextPrev(idx, base);
    setupActiveSection();
  });
})();
