/* UI Design Library — single-page app. Vanilla JS, no dependencies. */
(function () {
  'use strict';

  var REPO = 'https://github.com/mr-10/ui-design-library';
  var CATEGORIES = ['buttons', 'loaders', 'cards', 'toggle-switches', 'inputs',
    'forms', 'checkboxes', 'patterns', 'radio-buttons', 'tooltips', 'notifications'];
  var FEATURED = [
    ['buttons', 'young-newt-20-by-dexter-st'],
    ['loaders', 'serious-turkey-52-by-abrahamcalsin'],
    ['forms', 'dull-walrus-66-by-micaelgomestavares'],
    ['checkboxes', 'tiny-moose-42-by-ahmed_8975'],
    ['loaders', 'wet-mayfly-23-by-nawsome'],
    ['loaders', 'lucky-hound-44-by-praashoo7'],
    ['buttons', 'brown-turtle-51-by-vinodjangid07'],
    ['tooltips', 'hard-starfish-64-by-mohammad-rahme-576'],
    ['forms', 'short-panther-37-by-d3oxy']
  ];

  /* ---------- helpers ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function debounce(fn, ms) {
    var t; return function () { clearTimeout(t); var a = arguments, c = this; t = setTimeout(function () { fn.apply(c, a); }, ms); };
  }
  function el(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstElementChild; }

  var view = $('#view');
  var manifest = null;
  var catCache = {};      // category -> {category, count, elements}
  var codeCache = {};     // path -> text
  var allLoaded = false;

  function fetchText(path) {
    if (codeCache[path] !== undefined) return Promise.resolve(codeCache[path]);
    return fetch(path).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status + ' for ' + path);
      return r.text();
    }).then(function (t) { codeCache[path] = t; return t; });
  }
  function fetchJSON(path) { return fetchText(path).then(JSON.parse); }
  function loadManifest() {
    if (manifest) return Promise.resolve(manifest);
    return fetchJSON('data/manifest.json').then(function (m) { manifest = m; return m; });
  }
  function loadCategory(cat) {
    if (catCache[cat]) return Promise.resolve(catCache[cat]);
    return fetchJSON('data/' + cat + '.json').then(function (d) { catCache[cat] = d; return d; });
  }
  function loadAllCategories() {
    if (allLoaded) return Promise.resolve();
    return Promise.all(CATEGORIES.map(loadCategory)).then(function () { allLoaded = true; });
  }
  function allElements() {
    var out = [];
    CATEGORIES.forEach(function (c) { if (catCache[c]) out = out.concat(catCache[c].elements); });
    return out;
  }
  function findElement(cat, id) {
    return loadCategory(cat).then(function (d) {
      for (var i = 0; i < d.elements.length; i++) if (d.elements[i].id === id) return d.elements[i];
      return null;
    });
  }

  /* ---------- autoplay driver (injected into preview iframes) ---------- */
  var DRIVER = "(function(){try{"
    + "var TRIGGER='__TRIGGER__',AUTOPLAY=__AUTOPLAY__;"
    + "var reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;"
    + "var speed=1,playing=AUTOPLAY&&!reduced,loop=true,timer=null,phase=false,cycles=0;"
    + "function target(){return document.querySelector('input[type=\"checkbox\"],input[type=\"radio\"]')"
    + "||document.querySelector('button,input,select,textarea,a[href],label,[tabindex]')"
    + "||document.body.firstElementChild;}"
    + "function simClass(on,cls){var el=target();if(!el)return;var n=el;while(n&&n!==document.body){n.classList.toggle(cls,on);n=n.parentElement;}document.body.classList.toggle(cls,on);}"
    + "function step(){if(!playing)return;var el=target();if(!el){schedule();return;}"
    + "try{"
    + "if(TRIGGER==='hover'){simClass(!phase,'uilib-sim-hover');phase=!phase;}"
    + "else if(TRIGGER==='checked'||TRIGGER==='click'){el.click();}"
    + "else if(TRIGGER==='active'){simClass(true,'uilib-sim-active');setTimeout(function(){simClass(false,'uilib-sim-active');},600/speed);}"
    + "else if(TRIGGER==='focus'){el.focus();if((el.tagName==='INPUT'||el.tagName==='TEXTAREA')&&!el.value){el.value='Hello';el.dispatchEvent(new Event('input',{bubbles:true}));}}"
    + "else if(TRIGGER==='static'){document.body.classList.add('uilib-in');}"
    + "}catch(e){}"
    + "if(TRIGGER==='hover'&&phase===false){cycles++;}"
    + "if(!loop&&cycles>=1){playing=false;try{parent.postMessage({uilib:'ended'},'*');}catch(e){}return;}"
    + "schedule();}"
    + "function schedule(){clearTimeout(timer);if(playing){timer=setTimeout(step,1500/speed);}}"
    + "window.addEventListener('message',function(e){var d=e.data||{};if(!d||d.uilib!==1)return;"
    + "if(d.cmd==='play'){playing=true;cycles=0;schedule();}"
    + "if(d.cmd==='pause'){playing=false;clearTimeout(timer);}"
    + "if(d.cmd==='speed'){speed=d.speed||1;}"
    + "if(d.cmd==='loop'){loop=!!d.loop;if(loop&&playing)schedule();}"
    + "});"
    + "if(TRIGGER==='static'){var st=document.createElement('style');st.textContent='.uilib-in{animation:uilibIn .6s ease both}@keyframes uilibIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}';document.head.appendChild(st);}"
    + "if(playing){schedule();}"
    + "}catch(err){}})();";

  function buildSrcdoc(html, trigger, autoplay) {
    var styles = [], m, re = /<style[^>]*>([\s\S]*?)<\/style>/gi;
    while ((m = re.exec(html))) styles.push(m[1]);
    var css = styles.join('\n');
    var extra = '';
    if (!/@media[^{]*hover\s*:/i.test(css)) {
      var sim = css.replace(/:hover/g, '.uilib-sim-hover').replace(/:active/g, '.uilib-sim-active');
      extra += '<style id="uilib-sim">' + sim + '</style>';
    }
    if (!/body\s*\{[^}]*background/i.test(html)) {
      extra += '<style>html,body{background:transparent !important}</style>';
    }
    var driver = DRIVER.replace(/__TRIGGER__/g, trigger).replace(/__AUTOPLAY__/g, autoplay ? '1' : '0');
    var out = html;
    if (out.indexOf('</head>') !== -1) out = out.replace('</head>', extra + '</head>');
    else out = extra + out;
    var tag = '<script>' + driver + '<\/script>';
    if (out.indexOf('</body>') !== -1) out = out.replace('</body>', tag + '</body>');
    else out += tag;
    return out;
  }
  function elementSrcdoc(rec, autoplay) {
    return fetchText(rec.path + 'index.html').then(function (html) {
      return buildSrcdoc(html, rec.trigger, autoplay);
    });
  }
  function previewIframe(rec, autoplay) {
    var f = document.createElement('iframe');
    f.setAttribute('sandbox', 'allow-scripts');
    f.setAttribute('title', rec.name + ' preview');
    f.setAttribute('loading', 'lazy');
    elementSrcdoc(rec, autoplay).then(function (doc) { f.srcdoc = doc; }).catch(function () {
      f.srcdoc = '<p style="font:14px sans-serif;color:#888;padding:20px">Preview could not be loaded.</p>';
    });
    return f;
  }

  /* ---------- state / filters ---------- */
  var filters = { category: 'all', trigger: 'all', tag: 'all', q: '', sort: 'az' };
  var browse = { results: [], shown: 0, loading: false };
  var BATCH = 24;

  function triggerLabel(t) {
    return { 'auto-loop': 'Loop', 'hover': 'Hover', 'click': 'Click', 'focus': 'Focus', 'checked': 'Checked', 'active': 'Active', 'scroll': 'Scroll', 'static': 'Static' }[t] || t;
  }
  function catLabel(c) { return c === 'all' ? 'elements' : c; }

  function applyFilters(list) {
    var q = filters.q.trim().toLowerCase();
    var out = list.filter(function (e) {
      if (filters.category !== 'all' && e.category !== filters.category) return false;
      if (filters.trigger !== 'all' && e.trigger !== filters.trigger) return false;
      if (filters.tag !== 'all' && e.tags.indexOf(filters.tag) === -1) return false;
      if (q) {
        var hay = (e.name + ' ' + e.author + ' ' + e.category + ' ' + e.tags.join(' ') + ' ' + e.description).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });
    if (filters.sort === 'az') out.sort(function (a, b) { return a.name.localeCompare(b.name); });
    else if (filters.sort === 'category') out.sort(function (a, b) { return a.category === b.category ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category); });
    return out;
  }

  /* ---------- router ---------- */
  function parseHash() {
    var h = location.hash || '#/';
    var raw = h.slice(2);
    var qi = raw.indexOf('?');
    var path = qi === -1 ? raw : raw.slice(0, qi);
    var query = qi === -1 ? '' : raw.slice(qi + 1);
    return { path: path, params: new URLSearchParams(query) };
  }
  function go(hash) { location.hash = hash; }

  function route() {
    closeDrawer();
    var r = parseHash();
    var parts = r.path.split('/').filter(Boolean);
    syncTopbar();
    if (parts.length === 0) { renderHome(); return; }
    if (parts[0] === 'browse') { renderBrowse(r.params); return; }
    if (parts.length >= 2 && CATEGORIES.indexOf(parts[0]) !== -1) { renderPreview(parts[0], parts[1], r.params); return; }
    renderNotFound();
  }
  window.addEventListener('hashchange', route);

  function renderNotFound() {
    view.innerHTML = '<div class="empty-state"><h1>Not found</h1><p>That page does not exist.</p><p><a href="#/browse">Browse all elements</a></p></div>';
    document.title = 'Not found — UI Design Library';
  }

  /* ---------- home ---------- */
  function renderHome() {
    document.title = 'UI Design Library — 3,805 copy-paste UI elements';
    var mb = $('#mobilebar'); mb.hidden = true; mb.classList.remove('show');
    view.innerHTML =
      '<section class="hero">' +
        '<h1>Copy-paste UI elements for the <em>modern web</em></h1>' +
        '<p>Buttons, loaders, cards, forms and more — free, open source, ready to ship.</p>' +
        '<span class="total"><b id="homeTotal">…</b> elements · MIT licensed · pure HTML + CSS</span>' +
        '<div class="hero-cta"><a class="btn primary" href="#/browse">Browse all elements</a>' +
        '<a class="btn" href="https://github.com/mr-10/ui-design-library" target="_blank" rel="noopener">View on GitHub</a></div>' +
      '</section>' +
      '<h2 class="strip-title">Fresh from the library</h2>' +
      '<p class="strip-sub">Click any element to see it run.</p>' +
      '<div class="strip" id="strip"><p class="tree-loading">Loading previews…</p></div>' +
      '<div class="steps">' +
        '<div class="step"><span class="num">1</span><h3>Browse</h3><p>Find the element you need by category, trigger, or tag.</p></div>' +
        '<div class="step"><span class="num">2</span><h3>Copy</h3><p>One click copies clean HTML and CSS — no setup, no JavaScript.</p></div>' +
        '<div class="step"><span class="num">3</span><h3>Paste. Ship.</h3><p>Drop it into your project, tweak the colors, and go live.</p></div>' +
      '</div>' +
      '<p class="home-foot">Made with care by <a href="https://github.com/mr-10" target="_blank" rel="noopener">Rakibul Hasan</a> · Elements by the <a href="https://uiverse.io" target="_blank" rel="noopener">Uiverse</a> community, MIT licensed.</p>';
    loadManifest().then(function (m) {
      var t = $('#homeTotal'); if (t) t.textContent = m.total.toLocaleString('en-US');
    });
    var strip = $('#strip');
    Promise.all(FEATURED.map(function (f) { return findElement(f[0], f[1]); })).then(function (recs) {
      if (!strip.isConnected) return;
      strip.innerHTML = '';
      recs.forEach(function (rec) {
        if (!rec) return;
        var card = el(
          '<a class="strip-card" href="#/' + rec.category + '/' + rec.id + '">' +
            '<div class="preview"></div>' +
            '<div class="meta"><div class="name">' + esc(rec.name) + '</div>' +
            '<div class="by">by ' + esc(rec.author) + ' · ' + esc(rec.category) + '</div></div>' +
          '</a>');
        strip.appendChild(card);
        card.querySelector('.preview').appendChild(previewIframe(rec, true));
      });
    });
    setActiveTree(null, null, null);
  }

  /* ---------- browse ---------- */
  var ioCards = null;
  function cardObserver() {
    if (ioCards) return ioCards;
    ioCards = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var holder = en.target;
        var rec = holder._rec;
        if (!rec) return;
        if (en.isIntersecting) {
          if (!holder._frame) {
            holder.querySelector('.ph') && holder.querySelector('.ph').remove();
            holder._frame = previewIframe(rec, false);
            holder.appendChild(holder._frame);
          }
        } else if (holder._frame) {
          holder._frame.remove(); holder._frame = null;
          if (!holder.querySelector('.ph')) holder.appendChild(el('<div class="ph">Paused</div>'));
        }
      });
    }, { rootMargin: '600px' });
    return ioCards;
  }

  function renderBrowse(params) {
    document.title = 'Browse — UI Design Library';
    var mb2 = $('#mobilebar'); mb2.hidden = true; mb2.classList.remove('show');
    if (params.get('cat')) filters.category = params.get('cat');
    if (params.get('trigger')) filters.trigger = params.get('trigger');
    if (params.get('tag')) filters.tag = params.get('tag');
    if (params.get('q') !== null) filters.q = params.get('q');
    if (params.get('sort')) filters.sort = params.get('sort');
    syncTopbar();
    view.innerHTML =
      '<div class="browse-head"><h1>Browse elements</h1><span class="result-count" id="resultCount">Loading…</span></div>' +
      '<div class="browse-controls">' +
        '<select id="catSelect" aria-label="Filter by category"><option value="all">All categories</option>' +
          CATEGORIES.map(function (c) { return '<option value="' + c + '">' + c + '</option>'; }).join('') +
        '</select>' +
        '<select id="sortSelect" aria-label="Sort elements">' +
          '<option value="az">Sort: A to Z</option><option value="category">Sort: by category</option>' +
        '</select>' +
      '</div>' +
      '<div class="grid" id="grid"></div>' +
      '<div class="sentinel" id="sentinel"></div>' +
      '<div class="load-more-wrap"><button class="btn" id="loadMore">Load more</button></div>';
    $('#catSelect').value = filters.category;
    $('#sortSelect').value = filters.sort;
    $('#catSelect').addEventListener('change', function () { filters.category = this.value; updateBrowseUrl(); refreshBrowse(); });
    $('#sortSelect').addEventListener('change', function () { filters.sort = this.value; updateBrowseUrl(); refreshBrowse(); });
    $('#loadMore').addEventListener('click', renderBatch);
    if (browse._sentinel) browse._sentinel.disconnect();
    var sent = new IntersectionObserver(function (es) {
      if (es[0].isIntersecting) renderBatch();
    }, { rootMargin: '400px' });
    sent.observe($('#sentinel'));
    browse._sentinel = sent;
    refreshBrowse();
    setActiveTree(null, null, null);
  }

  function updateBrowseUrl() {
    var p = new URLSearchParams();
    if (filters.category !== 'all') p.set('cat', filters.category);
    if (filters.trigger !== 'all') p.set('trigger', filters.trigger);
    if (filters.tag !== 'all') p.set('tag', filters.tag);
    if (filters.q) p.set('q', filters.q);
    if (filters.sort !== 'az') p.set('sort', filters.sort);
    var h = '#/browse' + (p.toString() ? '?' + p.toString() : '');
    if (location.hash !== h) history.replaceState(null, '', h);
  }

  function refreshBrowse() {
    var grid = $('#grid'), count = $('#resultCount');
    if (!grid) return;
    browse.shown = 0;
    grid.innerHTML = '';
    count.textContent = 'Loading…';
    var needAll = filters.q || filters.category === 'all';
    var ready = needAll ? loadAllCategories() : loadCategory(filters.category);
    ready.then(function () {
      var list = filters.category === 'all' ? allElements() : (catCache[filters.category] ? catCache[filters.category].elements : []);
      browse.results = applyFilters(list);
      updateCount();
      renderBatch();
    }).catch(function () {
      count.textContent = 'Could not load the library data. Please reload the page.';
    });
  }
  function updateCount() {
    var count = $('#resultCount');
    if (!count) return;
    count.textContent = 'Showing ' + browse.shown + ' of ' + browse.results.length.toLocaleString('en-US') + ' ' + catLabel(filters.category);
  }
  function renderBatch() {
    var grid = $('#grid');
    if (!grid || browse.loading) return;
    var next = browse.results.slice(browse.shown, browse.shown + BATCH);
    if (!next.length) { var lm = $('#loadMore'); if (lm) lm.disabled = browse.shown >= browse.results.length; return; }
    var frag = document.createDocumentFragment();
    next.forEach(function (rec) {
      var card = el(
        '<article class="card">' +
          '<div class="preview"><div class="ph">Paused</div></div>' +
          '<div class="meta"><div class="name">' + esc(rec.name) + '</div>' +
          '<div class="by">by ' + esc(rec.author) + ' · ' + esc(rec.category) + '</div>' +
          '<span class="badge ' + esc(rec.trigger) + '">' + esc(triggerLabel(rec.trigger)) + '</span></div>' +
        '</article>');
      card.style.cursor = 'pointer';
      card.addEventListener('click', function () { go('#/' + rec.category + '/' + rec.id); });
      var holder = card.querySelector('.preview');
      holder._rec = rec;
      cardObserver().observe(holder);
      frag.appendChild(card);
    });
    grid.appendChild(frag);
    browse.shown += next.length;
    updateCount();
    if (browse.shown >= browse.results.length) {
      var lm2 = $('#loadMore'); if (lm2) lm2.disabled = true;
    }
    if (!browse.results.length) {
      grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><h2>No elements match</h2><p>Try a different search, category, trigger, or tag.</p></div>';
    }
  }

  /* ---------- top bar / theme ---------- */
  function syncTopbar() {
    document.querySelectorAll('#triggerChips .chip').forEach(function (b) {
      var on = b.dataset.trigger === filters.trigger;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    var ts = $('#tagSelect'); if (ts) ts.value = filters.tag;
    var gs = $('#globalSearch'); if (gs && document.activeElement !== gs) gs.value = filters.q;
  }
  function initTopbar() {
    loadManifest().then(function (m) {
      var ts = $('#tagSelect');
      m.topTags.forEach(function (t) {
        var o = document.createElement('option');
        o.value = t.tag; o.textContent = t.tag + ' (' + t.count + ')';
        ts.appendChild(o);
      });
      ts.value = filters.tag;
    });
    $('#tagSelect').addEventListener('change', function () {
      filters.tag = this.value;
      if (parseHash().path !== 'browse') { go('#/browse'); }
      updateBrowseUrl(); refreshBrowse();
    });
    document.querySelectorAll('#triggerChips .chip').forEach(function (b) {
      b.addEventListener('click', function () {
        filters.trigger = b.dataset.trigger;
        syncTopbar();
        if (parseHash().path !== 'browse') { go('#/browse'); }
        updateBrowseUrl(); refreshBrowse();
      });
    });
    var searchInput = $('#globalSearch');
    searchInput.addEventListener('input', debounce(function () {
      filters.q = searchInput.value;
      if (parseHash().path !== 'browse') { go('#/browse'); }
      updateBrowseUrl(); refreshBrowse();
    }, 250));
    document.addEventListener('keydown', function (e) {
      var tag = (e.target.tagName || '').toLowerCase();
      var typing = tag === 'input' || tag === 'textarea' || tag === 'select' || e.target.isContentEditable;
      if (e.key === '/' && !typing) { e.preventDefault(); searchInput.focus(); searchInput.select(); }
    });
    var themeBtn = $('#themeBtn');
    function applyTheme(t) {
      document.documentElement.setAttribute('data-theme', t);
      themeBtn.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
      try { localStorage.setItem('uilib-theme', t); } catch (e) {}
    }
    var saved = null;
    try { saved = localStorage.getItem('uilib-theme'); } catch (e) {}
    applyTheme(saved || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
    themeBtn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme');
      applyTheme(cur === 'dark' ? 'light' : 'dark');
    });
    $('#menuBtn').addEventListener('click', openDrawer);
    $('#closeSidebar').addEventListener('click', closeDrawer);
    $('#scrim').addEventListener('click', closeDrawer);
  }
  function openDrawer() {
    $('#sidebar').classList.add('open');
    $('#scrim').classList.add('show');
    $('#menuBtn').setAttribute('aria-expanded', 'true');
  }
  function closeDrawer() {
    var sb = $('#sidebar');
    if (!sb) return;
    sb.classList.remove('open');
    $('#scrim').classList.remove('show');
    $('#menuBtn').setAttribute('aria-expanded', 'false');
  }

  /* ---------- sidebar tree ---------- */
  function setActiveTree(cat, id, file) {
    document.querySelectorAll('.tree-row').forEach(function (r) { r.classList.remove('active'); });
    if (cat) {
      var cr = document.querySelector('.tree-row[data-cat="' + cat + '"]');
      if (cr) cr.classList.add('active');
    }
    if (id) {
      var er = document.querySelector('.tree-row[data-el="' + id + '"]');
      if (er) er.classList.add('active');
    }
    if (file) {
      var fr = document.querySelector('.tree-row[data-file="' + file + '"]');
      if (fr) fr.classList.add('active');
    }
  }
  function buildTree() {
    var tree = $('#tree');
    loadManifest().then(function (m) {
      tree.innerHTML = '';
      m.categories.forEach(function (c) {
        var wrap = el('<div class="tree-node"></div>');
        var row = el('<button class="tree-row" role="treeitem" aria-expanded="false" data-cat="' + c.name + '">' +
          '<span class="caret">▶</span><span class="label">' + esc(c.name) + '</span>' +
          '<span class="count">' + c.count.toLocaleString('en-US') + '</span></button>');
        var kids = el('<div class="tree-children" hidden></div>');
        row.addEventListener('click', function () {
          var open = kids.hidden;
          kids.hidden = !open;
          row.classList.toggle('open', open);
          row.setAttribute('aria-expanded', open ? 'true' : 'false');
          if (open && !kids._loaded) {
            kids._loaded = true;
            kids.innerHTML = '<div class="tree-loading">Loading…</div>';
            loadCategory(c.name).then(function (d) {
              kids.innerHTML = '';
              d.elements.forEach(function (rec) { kids.appendChild(elementNode(rec)); });
            });
          }
        });
        wrap.appendChild(row); wrap.appendChild(kids);
        tree.appendChild(wrap);
      });
    });
  }
  function elementNode(rec) {
    var wrap = el('<div class="tree-node"></div>');
    var row = el('<button class="tree-row" role="treeitem" aria-expanded="false" data-el="' + rec.id + '">' +
      '<span class="caret">▶</span><span class="label">' + esc(rec.name) + '</span></button>');
    var kids = el('<div class="tree-children" hidden></div>');
    row.addEventListener('click', function (e) {
      if (e.target.closest('.caret')) {
        var open = kids.hidden;
        kids.hidden = !open;
        row.classList.toggle('open', open);
        row.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (open && !kids._loaded) {
          kids._loaded = true;
          rec.files.forEach(function (f) {
            var tab = f === 'index.html' ? 'html' : f === 'styles.css' ? 'css' : f === 'README.md' ? 'readme' : (f.endsWith('.js') ? 'js' : 'all');
            var fr = el('<button class="tree-row" data-file="' + esc(f) + '"><span class="file-ico">◦</span><span class="label">' + esc(f) + '</span></button>');
            fr.addEventListener('click', function (ev) {
              ev.stopPropagation();
              go('#/' + rec.category + '/' + rec.id + '?tab=' + tab);
              closeDrawer();
            });
            kids.appendChild(fr);
          });
        }
        return;
      }
      go('#/' + rec.category + '/' + rec.id);
      closeDrawer();
    });
    wrap.appendChild(row); wrap.appendChild(kids);
    return wrap;
  }

  /* ---------- preview page ---------- */

  /* ---------- copy ---------- */
  function copyText(text, btn) {
    var done = function () {
      var old = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(function () { btn.textContent = old; }, 2000);
    };
    var fallback = function () {
      var ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); done(); } catch (e) { btn.textContent = 'Copy failed'; }
      ta.remove();
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, fallback);
    } else fallback();
  }

  /* ---------- syntax highlighting (per line, block-comment aware) ---------- */
  /* Placeholders use control chars only, so no highlighter regex can match them. */
  function hl(code, lang) {
    var lines = String(code).replace(/\n$/, '').split('\n');
    var state = { com: false };
    return lines.map(function (ln) { return hlLine(ln, lang, state); });
  }
  function hlLine(line, lang, state) {
    var s = esc(line);
    var store = [];
    function keep(cls, txt) {
      store.push('<span class="' + cls + '">' + txt + '</span>');
      return '' + new Array(store.length + 1).join('') + '';
    }
    function restore(t) {
      var prev;
      do {
        prev = t;
        t = t.replace(/(+)/g, function (m, run) { return store[run.length - 1]; });
      } while (t !== prev);
      return t;
    }
    var out;
    if (lang === 'html') out = hlHtml(s, state, keep);
    else if (lang === 'css' || lang === 'js') out = hlCode(s, lang, state, keep);
    else out = s;
    return restore(out);
  }
  function hlHtml(s, state, keep) {
    if (state.com) {
      var he = s.indexOf('--&gt;');
      if (he === -1) return keep('tok-com', s);
      state.com = false;
      return keep('tok-com', s.slice(0, he + 6)) + hlHtml(s.slice(he + 6), state, keep);
    }
    var hi = s.indexOf('&lt;!--');
    if (hi !== -1) {
      var hce = s.indexOf('--&gt;', hi + 7);
      if (hce === -1) { state.com = true; return hlHtmlText(s.slice(0, hi), keep) + keep('tok-com', s.slice(hi)); }
      return hlHtmlText(s.slice(0, hi), keep) + keep('tok-com', s.slice(hi, hce + 6)) + hlHtml(s.slice(hce + 6), state, keep);
    }
    return hlHtmlText(s, keep);
  }
  function hlHtmlText(s, keep) {
    s = s.replace(/"[^"]*"|'[^']*'/g, function (m) { return keep('tok-str', m); });
    s = s.replace(/([\w-]+)(?==)/g, function (m) { return keep('tok-attr', m); });
    s = s.replace(/&lt;\/?[a-zA-Z][\w-]*(?:\s[^&]*?)?\/?&gt;/g, function (m) { return keep('tok-tag', m); });
    return s;
  }
  function hlCode(s, lang, state, keep) {
    if (state.com) {
      var end = s.indexOf('*/');
      if (end === -1) return keep('tok-com', s);
      state.com = false;
      return keep('tok-com', s.slice(0, end + 2)) + hlCode(s.slice(end + 2), lang, state, keep);
    }
    var ci = s.indexOf('/*');
    if (ci !== -1) {
      var ce = s.indexOf('*/', ci + 2);
      if (ce === -1) { state.com = true; return hlCodeLine(s.slice(0, ci), lang, keep) + keep('tok-com', s.slice(ci)); }
      return hlCodeLine(s.slice(0, ci), lang, keep) + keep('tok-com', s.slice(ci, ce + 2)) + hlCode(s.slice(ce + 2), lang, state, keep);
    }
    return hlCodeLine(s, lang, keep);
  }
  function hlCodeLine(s, lang, keep) {
    if (lang === 'css') {
      s = s.replace(/"[^"]*"|'[^']*'/g, function (m) { return keep('tok-str', m); });
      var bi = s.indexOf('{');
      if (bi !== -1) {
        var sel = s.slice(0, bi);
        if (sel.trim()) sel = keep('tok-sel', sel);
        return sel + hlCssDecl(s.slice(bi), keep);
      }
      return hlCssDecl(s, keep);
    }
    s = s.replace(/"[^"]*"|'[^']*'|`[^`]*`/g, function (m) { return keep('tok-str', m); });
    s = s.replace(/(\/\/.*)$/g, function (m) { return keep('tok-com', m); });
    s = s.replace(/\b(function|const|let|var|return|if|else|for|while|new|class|extends|import|export|from|default|typeof|this|true|false|null|undefined|try|catch|switch|case|break|continue|do|of|in|async|await)\b/g, function (m) { return keep('tok-kw', m); });
    s = s.replace(/\b(\d+(?:\.\d+)?)\b/g, function (m) { return keep('tok-num', m); });
    return s;
  }
  function hlCssDecl(s, keep) {
    s = s.replace(/(#[0-9a-fA-F]{3,8})\b/g, function (m) { return keep('tok-val', m); });
    s = s.replace(/\b(\d+(?:\.\d+)?(?:px|rem|em|%|s|ms|deg|vh|vw)?)\b/g, function (m) { return keep('tok-num', m); });
    s = s.replace(/([a-zA-Z-]+)(?=\s*:)/g, function (m) { return keep('tok-prop', m); });
    s = s.replace(/!important/g, function (m) { return keep('tok-kw', m); });
    return s;
  }
  function codeLinesHTML(code, lang) {
    var lines = hl(code, lang);
    return lines.map(function (ln, i) {
      return '<div class="code-line"><span class="ln">' + (i + 1) + '</span><span class="lc">' + (ln || ' ') + '</span></div>';
    }).join('');
  }

  /* ---------- tiny markdown renderer (element READMEs) ---------- */
  function renderMarkdown(md) {
    var html = esc(md);
    var blocks = [];
    html = html.replace(/```(\w*)\n([\s\S]*?)```/g, function (m, lang, code) {
      blocks.push('<pre><code>' + code.replace(/\n$/, '') + '</code></pre>');
      return '@@MDBLOCK@@' + (blocks.length - 1) + '@@';
    });
    html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>')
      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
      .replace(/^# (.+)$/gm, '<h1>$1</h1>');
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    html = html.replace(/^\s*-\s+(.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>[\s\S]*?<\/li>)/g, '<ul>$1</ul>');
    html = html.replace(/^(?!<[hulp]|@@MDBLOCK@@)(.+)$/gm, '<p>$1</p>');
    html = html.replace(/@@MDBLOCK@@(\d+)@@/g, function (m, n) { return blocks[+n]; });
    return html;
  }
  function bodyMarkup(html) {
    var m = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    return m ? m[1].trim() : html;
  }

  /* ---------- preview page ---------- */
  var previewState = null; // {rec, catData, idx, playing, speed, loop, bg, tab, iframe, files}

  function renderPreview(cat, id, params) {
    var tab = params.get('tab') || 'html';
    document.title = 'Loading… — UI Design Library';
    $('#mobilebar').hidden = false;
    findElement(cat, id).then(function (rec) {
      if (!rec) { renderNotFound(); return; }
      document.title = rec.name + ' — UI Design Library';
      loadCategory(cat).then(function (d) {
        var idx = -1;
        d.elements.forEach(function (e, i) { if (e.id === id) idx = i; });
        openPreview(rec, d, idx, tab);
      });
    });
  }

  function openPreview(rec, catData, idx, tab) {
    var hasJs = rec.files.some(function (f) { return f.slice(-3) === '.js'; });
    var tabs = [['html', 'HTML'], ['css', 'CSS']];
    if (hasJs) tabs.push(['js', 'JS']);
    tabs.push(['readme', 'README'], ['all', 'All-in-one']);
    if (tabs.map(function (t) { return t[0]; }).indexOf(tab) === -1) tab = 'html';
    var prev = idx > 0 ? catData.elements[idx - 1] : null;
    var next = idx >= 0 && idx < catData.elements.length - 1 ? catData.elements[idx + 1] : null;
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    previewState = { rec: rec, catData: catData, idx: idx, playing: !reduced, speed: 1, loop: true, bg: 'light', tab: tab, iframe: null, files: {} };

    view.innerHTML =
      '<div class="crumb"><a href="#/">Home</a> / <a href="#/browse?cat=' + rec.category + '">' + esc(rec.category) + '</a> / ' + esc(rec.name) + '</div>' +
      '<div class="preview-head"><h1>' + esc(rec.name) + '</h1>' +
        '<span class="badge ' + esc(rec.trigger) + '">' + esc(triggerLabel(rec.trigger)) + '</span>' +
        '<span class="author">by ' + esc(rec.author) + '</span>' +
        '<span class="nav-arrows">' +
          '<button class="btn small" id="prevBtn"' + (prev ? '' : ' disabled') + '>← Previous</button>' +
          '<button class="btn small" id="nextBtn"' + (next ? '' : ' disabled') + '>Next →</button>' +
        '</span></div>' +
      '<div class="stage-wrap">' +
        '<div class="stage-toolbar">' +
          '<button class="btn primary" id="playBtn">' + (previewState.playing ? '❚❚ Pause' : '▶ Play') + '</button>' +
          '<button class="btn" id="restartBtn">↻ Restart</button>' +
          '<span class="seg" id="speedSeg" role="group" aria-label="Playback speed">' +
            '<button data-speed="0.5">0.5×</button><button data-speed="1" class="active">1×</button><button data-speed="2">2×</button>' +
          '</span>' +
          '<button class="btn" id="loopBtn" aria-pressed="true">↻ Loop: on</button>' +
          '<span class="spacer"></span>' +
          '<span class="seg" id="bgSeg" role="group" aria-label="Stage background">' +
            '<button data-bg="light" class="active">Light</button><button data-bg="dark">Dark</button><button data-bg="checkered">Checkered</button>' +
          '</span>' +
          '<button class="btn" id="fsBtn">⛶ Fullscreen</button>' +
        '</div>' +
        '<div class="stage bg-light" id="stage">' +
          '<div id="stageFrame" style="width:100%;height:100%"></div>' +
          '<div class="stage-hint">Click Play or the stage to run the demo</div>' +
        '</div>' +
        '<div class="stage-meta">' +
          '<p><span class="label">How it works:</span> ' + esc(rec.description) + ' ' + esc(rec.howItWorks) + '</p>' +
          '<p><span class="label">Runs when:</span> ' + esc(triggerLabel(rec.trigger)) + (rec.needsJs ? ' · needs JavaScript' : ' · pure HTML + CSS') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="code-block">' +
        '<div class="code-head">' +
          '<div class="tabs" role="tablist">' +
            tabs.map(function (t) { return '<button class="tab' + (t[0] === tab ? ' active' : '') + '" data-tab="' + t[0] + '" role="tab">' + t[1] + '</button>'; }).join('') +
          '</div>' +
          '<div class="code-actions">' +
            '<label class="wrap-toggle"><input type="checkbox" id="wrapToggle"> Wrap</label>' +
            '<button class="btn small" id="copyTabBtn">⧉ Copy</button>' +
          '</div>' +
        '</div>' +
        '<div class="code-view" id="codeView"><pre><code id="codeContent">Loading code…</code></pre></div>' +
      '</div>' +
      '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:14px">' +
        '<button class="btn primary" id="copyAllBtn">⧉ Copy all code</button>' +
        '<button class="btn" id="dlBtn">⬇ Download index.html</button>' +
        '<button class="btn" id="openBtn">↗ Open in new tab</button>' +
        '<a class="btn" id="ghBtn" href="' + REPO + '/tree/main/' + rec.path + '" target="_blank" rel="noopener">View on GitHub</a>' +
      '</div>' +
      '<p class="credit">By <strong>' + esc(rec.author) + '</strong> · Original on <a href="' + esc(rec.link) + '" target="_blank" rel="noopener">Uiverse.io</a> · MIT License — free for personal and commercial use.</p>';

    if (prev) $('#prevBtn').addEventListener('click', function () { go('#/' + rec.category + '/' + prev.id); });
    if (next) $('#nextBtn').addEventListener('click', function () { go('#/' + rec.category + '/' + next.id); });

    mountStageFrame();
    wirePreviewControls();
    wireMobileBar();
    showTab(tab);
    ensureTreeOpen(rec.category, rec.id, tab);
    setActiveTree(rec.category, rec.id, tabFile(tab, rec));
  }

  function tabFile(tab, rec) {
    if (tab === 'html') return 'index.html';
    if (tab === 'css') return 'styles.css';
    if (tab === 'readme') return 'README.md';
    if (tab === 'js') { var j = rec.files.filter(function (f) { return f.slice(-3) === '.js'; }); return j[0] || 'index.html'; }
    return 'index.html';
  }

  function mountStageFrame() {
    var st = previewState, holder = $('#stageFrame');
    if (!holder) return;
    holder.innerHTML = '';
    var f = previewIframe(st.rec, st.playing);
    holder.appendChild(f);
    st.iframe = f;
    var stage = $('#stage');
    var overlay = null;
    function showOverlay() {
      if (overlay) return;
      overlay = el('<button class="stage-play" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:transparent;border:0;cursor:pointer" aria-label="Play demo"><span style="background:var(--accent);color:var(--accent-text);border-radius:999px;padding:12px 22px;font-size:15px;font-weight:600;box-shadow:var(--shadow)">▶ Play demo</span></button>');
      overlay.addEventListener('click', function () { setPlaying(true); });
      stage.appendChild(overlay);
    }
    function hideOverlay() { if (overlay) { overlay.remove(); overlay = null; } }
    st._showOverlay = showOverlay; st._hideOverlay = hideOverlay;
    if (!st.playing) showOverlay();
    stage.addEventListener('click', function (e) {
      if (e.target === stage || e.target.classList.contains('stage-hint')) setPlaying(!st.playing);
    });
  }

  function postToFrame(cmd, extra) {
    var st = previewState;
    if (!st || !st.iframe || !st.iframe.contentWindow) return;
    var msg = { uilib: 1, cmd: cmd };
    if (extra) for (var k in extra) msg[k] = extra[k];
    try { st.iframe.contentWindow.postMessage(msg, '*'); } catch (e) {}
  }
  function setPlaying(on) {
    var st = previewState; if (!st) return;
    st.playing = on;
    postToFrame(on ? 'play' : 'pause');
    var b = $('#playBtn');
    if (b) b.textContent = on ? '❚❚ Pause' : '▶ Play';
    var mb = $('#mobilePlay');
    if (mb) mb.textContent = on ? '❚❚ Pause' : '▶ Play';
    if (on) { if (st._hideOverlay) st._hideOverlay(); }
    else if (st._showOverlay) st._showOverlay();
  }
  function wirePreviewControls() {
    var st = previewState;
    $('#playBtn').addEventListener('click', function () { setPlaying(!st.playing); });
    $('#restartBtn').addEventListener('click', function () { mountStageFrame(); });
    $('#speedSeg').addEventListener('click', function (e) {
      var b = e.target.closest('button[data-speed]'); if (!b) return;
      st.speed = parseFloat(b.dataset.speed);
      document.querySelectorAll('#speedSeg button').forEach(function (x) { x.classList.toggle('active', x === b); });
      postToFrame('speed', { speed: st.speed });
    });
    $('#loopBtn').addEventListener('click', function () {
      st.loop = !st.loop;
      this.textContent = '↻ Loop: ' + (st.loop ? 'on' : 'off');
      this.setAttribute('aria-pressed', st.loop ? 'true' : 'false');
      postToFrame('loop', { loop: st.loop });
    });
    $('#bgSeg').addEventListener('click', function (e) {
      var b = e.target.closest('button[data-bg]'); if (!b) return;
      st.bg = b.dataset.bg;
      document.querySelectorAll('#bgSeg button').forEach(function (x) { x.classList.toggle('active', x === b); });
      var stage = $('#stage');
      stage.classList.remove('bg-light', 'bg-dark', 'bg-checkered');
      stage.classList.add('bg-' + st.bg);
    });
    $('#fsBtn').addEventListener('click', function () {
      var stage = $('#stage');
      if (document.fullscreenElement) document.exitFullscreen();
      else if (stage.requestFullscreen) stage.requestFullscreen();
    });
    window.addEventListener('message', function (e) {
      if (e.data && e.data.uilib === 'ended') setPlaying(false);
    });
  }
  function wireMobileBar() {
    var mb = $('#mobilebar');
    mb.classList.add('show');
    var mp = $('#mobilePlay');
    mp.textContent = previewState.playing ? '❚❚ Pause' : '▶ Play';
    mp.onclick = function () { setPlaying(!previewState.playing); };
    $('#mobileCopy').onclick = function () { copyAllCode(this); };
  }

  function loadPreviewFiles() {
    var st = previewState, rec = st.rec;
    var jobs = {
      html: fetchText(rec.path + 'index.html').then(bodyMarkup),
      css: fetchText(rec.path + 'styles.css'),
      all: fetchText(rec.path + 'index.html'),
      readme: fetchText(rec.path + 'README.md')
    };
    var jsFile = rec.files.filter(function (f) { return f.slice(-3) === '.js'; })[0];
    if (jsFile) jobs.js = fetchText(rec.path + jsFile);
    return Promise.all(Object.keys(jobs).map(function (k) {
      return jobs[k].then(function (t) { st.files[k] = t; }).catch(function () { st.files[k] = ''; });
    }));
  }

  function showTab(tab) {
    var st = previewState; if (!st) return;
    st.tab = tab;
    document.querySelectorAll('.tab').forEach(function (b) { b.classList.toggle('active', b.dataset.tab === tab); });
    var cv = $('#codeView');
    if (tab === 'readme') {
      cv.innerHTML = '<div class="readme-view" id="readmeView">Loading…</div>';
      loadPreviewFiles().then(function () {
        var rv = $('#readmeView');
        if (rv) rv.innerHTML = renderMarkdown(st.files.readme || 'No README found.');
      });
      return;
    }
    cv.innerHTML = '<pre><code id="codeContent">Loading code…</code></pre>';
    loadPreviewFiles().then(function () {
      var lang = tab === 'css' ? 'css' : tab === 'js' ? 'js' : 'html';
      var code = st.files[tab] || '';
      var cc = $('#codeContent');
      if (!cc || previewState !== st) return;
      cc.innerHTML = codeLinesHTML(code, lang);
    });
    document.querySelectorAll('.tab').forEach(function (b) {
      b.onclick = function () {
        var p = new URLSearchParams(location.hash.split('?')[1] || '');
        p.set('tab', b.dataset.tab);
        history.replaceState(null, '', '#/' + st.rec.category + '/' + st.rec.id + '?' + p.toString());
        showTab(b.dataset.tab);
        setActiveTree(st.rec.category, st.rec.id, tabFile(b.dataset.tab, st.rec));
      };
    });
    var copyBtn = $('#copyTabBtn');
    if (copyBtn) copyBtn.onclick = function () {
      var t = st.files[st.tab] || '';
      copyText(t, this);
    };
    var wrap = $('#wrapToggle');
    if (wrap) wrap.onchange = function () { cv.classList.toggle('wrap', this.checked); };
    var ca = $('#copyAllBtn');
    if (ca) ca.onclick = function () { copyAllCode(this); };
    var dl = $('#dlBtn');
    if (dl) dl.onclick = function () {
      var blob = new Blob([st.files.all || ''], { type: 'text/html' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = st.rec.id + '.html';
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    };
    var ob = $('#openBtn');
    if (ob) ob.onclick = function () { window.open(st.rec.path + 'index.html', '_blank'); };
  }
  function copyAllCode(btn) {
    var st = previewState; if (!st) return;
    if (st.files.all) { copyText(st.files.all, btn); return; }
    fetchText(st.rec.path + 'index.html').then(function (t) {
      st.files.all = t; copyText(t, btn);
    });
  }

  /* ---------- sidebar expansion for current element ---------- */
  function ensureTreeOpen(cat, id, tab) {
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      var catRow = document.querySelector('.tree-row[data-cat="' + cat + '"]');
      if (!catRow) { if (tries > 14) clearInterval(timer); return; }
      var kids = catRow.parentElement.querySelector('.tree-children');
      if (kids && kids.hidden) catRow.click();
      var elRow = document.querySelector('.tree-row[data-el="' + id + '"]');
      if (elRow) {
        elRow.scrollIntoView({ block: 'nearest' });
        var ek = elRow.parentElement.querySelector('.tree-children');
        if (ek && ek.hidden) {
          var caret = elRow.querySelector('.caret');
          if (caret) caret.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        }
        clearInterval(timer);
      }
      if (tries > 14) clearInterval(timer);
    }, 200);
  }

  /* ---------- keyboard ---------- */
  document.addEventListener('keydown', function (e) {
    var tag = (e.target.tagName || '').toLowerCase();
    var typing = tag === 'input' || tag === 'textarea' || tag === 'select' || e.target.isContentEditable;
    if (typing || !previewState) return;
    var st = previewState;
    if (e.key === 'ArrowLeft' && st.idx > 0) { go('#/' + st.rec.category + '/' + st.catData.elements[st.idx - 1].id); }
    if (e.key === 'ArrowRight' && st.idx >= 0 && st.idx < st.catData.elements.length - 1) { go('#/' + st.rec.category + '/' + st.catData.elements[st.idx + 1].id); }
    if (e.key === ' ') {
      var onPreview = parseHash().path.split('/').length >= 3;
      if (onPreview) { e.preventDefault(); setPlaying(!st.playing); }
    }
  });

  initTopbar();
  buildTree();
  route();
})();
