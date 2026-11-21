/* UI Design Library — single-page app. Vanilla JS, no dependencies. */
(function () {
  'use strict';

  var REPO = 'https://github.com/mr-10/ui-design-library';
  var CATEGORIES = ['buttons', 'loaders', 'cards', 'toggle-switches', 'inputs',
    'forms', 'checkboxes', 'patterns', 'radio-buttons', 'tooltips', 'notifications'];
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

  /* ---------- auto-fit driver (injected into preview iframes) ----------
     No autoplay, no simulated interaction. The driver only (a) measures
     #stage (incl. the hover/active/checked state, forced transiently for
     measurement and removed before the preview is shown) and scales it to
     fit the box, clamped 0.25–1.6, (b) pauses CSS animations when the
     parent asks or the system prefers reduced motion, and (c) blocks
     form submits / link navigation inside the iframe. MODE 'fit':
     measure and scale. MODE 'vp': no measuring — the parent scales the
     whole 800x500 iframe instead. */
  var DRIVER = "(function(){try{"
    + "var TRIGGER='__TRIGGER__',MODE='__MODE__',OVR=__OVERRIDE__,PAUSED=__PAUSED__;"
    + "var reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;"
    + "var stage=document.getElementById('stage');"
    + "function target(){return document.querySelector('input[type=\"checkbox\"],input[type=\"radio\"]')"
    + "||document.querySelector('button,input,select,textarea,a[href],label,[tabindex]')"
    + "||document.body.firstElementChild;}"
    + "function simClass(on,cls){var el=target();if(!el)return;var n=el;while(n&&n!==document.body){n.classList.toggle(cls,on);n=n.parentElement;}document.body.classList.toggle(cls,on);}"
    + "function union(){var r=null;function add(x){if(!x)return;if(x.width===0&&x.height===0)return;if(!r)r={l:x.left,t:x.top,r:x.right,b:x.bottom};else{r.l=Math.min(r.l,x.left);r.t=Math.min(r.t,x.top);r.r=Math.max(r.r,x.right);r.b=Math.max(r.b,x.bottom);}}"
    + "if(stage)add(stage.getBoundingClientRect());"
    + "var all=document.querySelectorAll('body *');for(var i=0;i<all.length;i++)add(all[i].getBoundingClientRect());return r;}"
    + "function fit(){if(MODE!=='fit'||!stage)return;"
    + "if(window.__uilibMode==='actual'){stage.style.transform='scale(1)';return;}"
    + "var kill=document.createElement('style');kill.textContent='*{transition:none!important}';document.head.appendChild(kill);"
    + "var el=target(),savedChecked=null,simForced='';"
    + "try{"
    + "var u=null,factor=0.8;"
    + "if(TRIGGER==='hover'){"
    + "simClass(false,'uilib-sim-hover');document.body.offsetHeight;var uOff=union();"
    + "simClass(true,'uilib-sim-hover');simForced='uilib-sim-hover';document.body.offsetHeight;var uOn=union();"
    + "u=uOn;if(uOff&&uOn&&(uOn.r-uOn.l>(uOff.r-uOff.l)*1.1||uOn.b-uOn.t>(uOff.b-uOff.t)*1.1))factor=0.7;"
    + "}else if(TRIGGER==='active'||TRIGGER==='click'){"
    + "simClass(true,'uilib-sim-active');simForced='uilib-sim-active';document.body.offsetHeight;u=union();"
    + "}else if(TRIGGER==='checked'){"
    + "if(el&&(el.type==='checkbox'||el.type==='radio')){savedChecked=el.checked;el.checked=true;document.body.offsetHeight;u=union();}"
    + "else{u=union();}"
    + "}else{u=union();}"
    + "if(!u)return;var cw=u.r-u.l,ch=u.b-u.t;if(cw<=0||ch<=0)return;"
    + "var boxW=document.documentElement.clientWidth,boxH=document.documentElement.clientHeight;"
    + "if(OVR&&OVR.padding!=null)factor=1-OVR.padding*2;"
    + "var s;if(OVR&&OVR.scale)s=OVR.scale;else{s=Math.min(boxW*factor/cw,boxH*factor/ch);s=Math.max(0.25,Math.min(1.6,s));if(OVR&&OVR.minScale)s=Math.min(Math.max(s,OVR.minScale),boxW*factor/cw,boxH*factor/ch);}"
    + "stage.style.transform='scale('+s+')';"
    + "var de=document.documentElement;"
    + "de.dataset.uilibScale=s.toFixed(3);de.dataset.uilibContentW=Math.round(cw);de.dataset.uilibContentH=Math.round(ch);"
    + "de.dataset.uilibFitW=Math.round(cw*s);de.dataset.uilibFitH=Math.round(ch*s);de.dataset.uilibBoxW=boxW;de.dataset.uilibBoxH=boxH;"
    + "try{parent.postMessage({uilib:'measured',scale:s,contentW:cw,contentH:ch,fitW:cw*s,fitH:ch*s,boxW:boxW,boxH:boxH},'*');}catch(e){}"
    + "}finally{kill.remove();if(simForced)simClass(false,simForced);if(savedChecked!==null&&el)el.checked=savedChecked;}}"
    + "var fitT=null;function refit(){clearTimeout(fitT);fitT=setTimeout(fit,120);}"
    + "function scheduleFit(){var done=false;function go(){if(done)return;done=true;if(window.requestAnimationFrame)requestAnimationFrame(fit);else fit();}"
    + "var to=setTimeout(go,1500);var p=[];"
    + "if(document.fonts&&document.fonts.ready)p.push(document.fonts.ready);"
    + "var im=document.images,pend=[];for(var i=0;i<im.length;i++)if(!im[i].complete)pend.push(im[i]);"
    + "if(pend.length)p.push(new Promise(function(res){var n=pend.length;pend.forEach(function(x){x.onload=x.onerror=function(){if(--n<=0)res();};});}));"
    + "Promise.all(p).then(function(){clearTimeout(to);go();});}"
    + "window.addEventListener('message',function(e){var d=e.data||{};if(!d||d.uilib!==1)return;"
    + "if(d.cmd==='setPaused'){document.documentElement.classList.toggle('uilib-paused',!!d.paused);}"
    + "if(d.cmd==='mode'){window.__uilibMode=d.mode;if(d.mode==='actual'){if(stage)stage.style.transform='scale(1)';}else{fit();}}"
    + "if(d.cmd==='remeasure'){refit();}"
    + "});"
    + "window.addEventListener('resize',refit);"
    + "if(window.ResizeObserver&&stage){try{var ro=new ResizeObserver(refit);ro.observe(stage);if(stage.firstElementChild)ro.observe(stage.firstElementChild);}catch(e){}}"
    + "if(document.fonts&&document.fonts.ready){document.fonts.ready.then(function(){refit();});}"
    + "setTimeout(refit,2500);"
    + "/* Pause-all + reduced motion: gate CSS animations on a class. */"
    + "var ps=document.createElement('style');ps.textContent='html.uilib-paused *,html.uilib-paused *::before,html.uilib-paused *::after{animation-play-state:paused!important}';document.head.appendChild(ps);"
    + "if(PAUSED||reduced){document.documentElement.classList.add('uilib-paused');}"
    + "/* Block navigation inside the preview: forms never submit away and links never leave. */"
    + "document.addEventListener('submit',function(e){e.preventDefault();},true);"
    + "document.addEventListener('click',function(e){var a=e.target&&e.target.closest?e.target.closest('a[href]'):null;if(a)e.preventDefault();},true);"
    + "if(OVR&&OVR.background){document.body.style.background=OVR.background;}"
    + "scheduleFit();"
    + "}catch(err){}})();";

  /* The reshape's injected body-centering rule (first <style> in index.html).
     Auto-fit centers with its own reset, so this rule is removed in fit mode. */
  var INJECTED_BODY = /body\s*\{\s*display:\s*flex;\s*min-height:\s*100vh;\s*align-items:\s*center;\s*justify-content:\s*center;\s*margin:\s*0;\s*\}/;

  function isVp(rec) {
    var ovr = window.__uilibOverrides && window.__uilibOverrides[rec.id];
    return !!(rec.vp || (ovr && ovr.width && ovr.height));
  }

  function buildSrcdoc(html, trigger, rec) {
    var ovr = (window.__uilibOverrides && window.__uilibOverrides[rec.id]) || null;
    var vp = isVp(rec);
    var styles = [], m, re = /<style[^>]*>([\s\S]*?)<\/style>/gi;
    while ((m = re.exec(html))) styles.push(m[1]);
    var css = styles.join('\n').replace(INJECTED_BODY, '');
    var hasBodyBg = /body\s*\{[^}]*background/i.test(css);
    /* Duplicate (never replace) the :hover/:active rules so the sim class
       also matches them for the one-time fit measurement. The element's
       real :hover/:active/:focus/:checked CSS stays intact, so real
       interaction works. The sim class is forced only inside fit() and
       removed before the preview is shown. */
    var sim = '';
    var dup = css.replace(/:hover/g, '.uilib-sim-hover').replace(/:active/g, '.uilib-sim-active');
    if (dup !== css) sim = dup;
    var paused = (window.__uilibPaused || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) ? '1' : '0';
    var driver = DRIVER.replace(/__TRIGGER__/g, trigger)
      .replace(/__MODE__/g, vp ? 'vp' : 'fit')
      .replace(/__OVERRIDE__/g, ovr ? JSON.stringify(ovr) : 'null')
      .replace(/__PAUSED__/g, paused);
    var tag = '<script>' + driver + '<\/script>';
    if (vp) {
      /* Virtual viewport: the element fills the iframe as before; the parent
         scales the whole 800x500 iframe to fit the box. */
      var extra = '';
      if (sim) extra += '<style id="uilib-sim">' + sim + '</style>';
      if (!hasBodyBg) extra += '<style>html,body{background:transparent !important}</style>';
      var out = html;
      if (out.indexOf('</head>') !== -1) out = out.replace('</head>', extra + '</head>');
      else out = extra + out;
      if (out.indexOf('</body>') !== -1) out = out.replace('</body>', tag + '</body>');
      else out += tag;
      return out;
    }
    /* Fit mode: fresh document, reset + #stage wrapper the driver measures. */
    var bodyM = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    var bodyContent = bodyM ? bodyM[1] : html;
    var reset = '<style>html,body{margin:0;padding:0;height:100%;overflow:hidden}'
      + 'body{display:grid;place-items:center;place-content:center}'
      + (hasBodyBg ? '' : 'body{background:transparent}')
      + '#stage{width:max-content;max-width:100%;height:max-content;max-height:100%;transform-origin:center center;touch-action:manipulation}'
      + '</style>';
    var simStyle = sim ? '<style id="uilib-sim">' + sim + '</style>' : '';
    return '<!doctype html><html><head><meta charset="utf-8">'
      + '<style>' + css + '</style>' + simStyle + reset + '</head>'
      + '<body><div id="stage">' + bodyContent + '</div>'
      + tag + '</body></html>';
  }
  function elementSrcdoc(rec) {
    function attempt() {
      return fetchText(rec.path + 'index.html').then(function (html) {
        return buildSrcdoc(html, rec.trigger, rec);
      });
    }
    // One retry: a single failed fetch (blip, slow connection) should not
    // leave a card stuck on "Preview could not be loaded".
    return attempt().catch(function () {
      return new Promise(function (resolve) {
        setTimeout(function () { resolve(attempt()); }, 800);
      });
    });
  }
  function previewIframe(rec) {
    var f = document.createElement('iframe');
    f.setAttribute('sandbox', 'allow-scripts');
    f.setAttribute('title', rec.name + ' preview');
    f.setAttribute('loading', 'lazy');
    if (isVp(rec)) {
      var ovr = (window.__uilibOverrides && window.__uilibOverrides[rec.id]) || null;
      f.className = 'vp-frame';
      f._vpW = (ovr && ovr.width) || 800;
      f._vpH = (ovr && ovr.height) || 500;
      f.style.width = f._vpW + 'px';
      f.style.height = f._vpH + 'px';
    }
    elementSrcdoc(rec).then(function (doc) { f.srcdoc = doc; }).catch(function () {
      f.srcdoc = '<p style="font:14px sans-serif;color:#888;padding:20px">Preview could not be loaded.</p>';
    });
    return f;
  }

  /* ---------- virtual-viewport scaling (parent side) ---------- */
  var vpRO = null;
  function fitVpFrame(holder) {
    var f = holder.querySelector('iframe.vp-frame');
    if (!f) return;
    var bw = holder.clientWidth, bh = holder.clientHeight;
    if (!bw || !bh) return;
    var vw = f._vpW || 800, vh = f._vpH || 500;
    var s = holder._fitMode === 'actual' ? 1 : Math.min(bw / vw, bh / vh);
    f.style.transform = 'translate(-50%,-50%) scale(' + s + ')';
  }
  function vpObserver() {
    if (vpRO) return vpRO;
    vpRO = new ResizeObserver(function (entries) {
      entries.forEach(function (en) { fitVpFrame(en.target); });
    });
    return vpRO;
  }
  /* Append an iframe to a preview holder; scales virtual-viewport frames. */
  function attachPreview(holder, rec) {
    var f = previewIframe(rec);
    holder.appendChild(f);
    if (f.classList.contains('vp-frame')) {
      fitVpFrame(holder);
      vpObserver().observe(holder);
    }
    return f;
  }

  /* Per-element preview overrides (data/overrides.json). Loaded once at boot;
     missing file means no overrides. */
  window.__uilibOverrides = {};
  function loadOverrides() {
    return fetch('data/overrides.json').then(function (r) {
      if (!r.ok) return {};
      return r.json();
    }).then(function (o) {
      window.__uilibOverrides = o || {};
    }).catch(function () { window.__uilibOverrides = {}; });
  }

  /* ---------- state / filters ---------- */
  var filters = { category: 'all', trigger: 'all', tag: 'all', q: '', sort: 'random' };
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
    else if (filters.sort === 'random') { // Uiverse default: reshuffle on every browse render
      for (var i = out.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = out[i]; out[i] = out[j]; out[j] = t; }
    }
    return out;
  }

  /* ---------- router ---------- */
  var navGen = 0; // increments on every navigation; async renders bail if it changed
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
    navGen++;
    closeDrawer();
    var r = parseHash();
    var parts = r.path.split('/').filter(Boolean);
    syncTopbar();
    if (parts.length === 0) { renderHome(); return; }
    if (parts[0] === 'browse') { renderBrowse(r.params); return; }
    if (parts[0] === 'ai-agents') { renderAiAgents(); return; }
    if (parts.length >= 2 && CATEGORIES.indexOf(parts[0]) !== -1) { renderPreview(parts[0], parts[1], r.params); return; }
    renderNotFound();
  }
  window.addEventListener('hashchange', route);

  function renderNotFound() {
    view.innerHTML = '<div class="empty-state"><h1>Not found</h1><p>That page does not exist.</p><p><a href="#/browse">Browse all elements</a></p></div>';
    document.title = 'Not found — UI Design Library';
  }

  /* ---------- use with AI agents ---------- */
  var MCP_CONFIG = '{\n  "mcpServers": {\n    "ui-design-library": {\n      "command": "npx",\n      "args": ["-y", "ui-design-library-mcp"]\n    }\n  }\n}';
  function renderAiAgents() {
    document.title = 'Use with AI agents — UI Design Library';
    var mb = $('#mobilebar'); mb.hidden = true; mb.classList.remove('show');
    view.innerHTML =
      '<div class="crumb"><a href="#/">Home</a> / Use with AI agents</div>' +
      '<section class="doc">' +
        '<h1>Use with AI agents</h1>' +
        '<p>Give your AI coding assistant access to all 3,805 elements through the ' +
        '<a href="https://github.com/mr-10/ui-design-library/tree/main/mcp" target="_blank" rel="noopener">ui-design-library-mcp</a> ' +
        'server (npm package <code>ui-design-library-mcp</code>, free, no login, no API key). ' +
        'It searches the library, fetches one element at a time, and keeps the author credit.</p>' +
        '<h2>1. Add the server</h2>' +
        '<p>Copy this config into your client:</p>' +
        '<pre class="cfg" id="mcpCfg">' + esc(MCP_CONFIG) + '</pre>' +
        '<p><button class="btn small" id="copyCfgBtn">⧉ Copy config</button></p>' +
        '<h3>Claude Desktop</h3><p>Paste it into your Claude Desktop config file (<code>claude_desktop_config.json</code>), then restart Claude Desktop.</p>' +
        '<h3>Claude Code</h3><p>Or run this once in your terminal:</p>' +
        '<pre class="cfg">claude mcp add ui-design-library -- npx -y ui-design-library-mcp</pre>' +
        '<h3>Cursor, VS Code and Windsurf</h3><p>Paste the same config into the MCP settings of your editor (Cursor: Settings → MCP; VS Code: the MCP extension settings; Windsurf: MCP settings).</p>' +
        '<h2>2. Ask for an element</h2>' +
        '<p>Try it in a chat with your agent:</p>' +
        '<pre class="cfg">You: Add a glowing hover button to my page.\n\nAgent: (calls search_elements "glowing hover button", then\nget_element for the best match, and adds it with the author credit.)</pre>' +
        '<h2>3. Or use the command line</h2>' +
        '<pre class="cfg">npx -y ui-design-library-mcp --help   # starts the MCP server (stdio)\nui-lib search "glowing button"        # search from your terminal\nui-lib get &lt;id&gt; --format react     # get one element as a React component\nui-lib add &lt;id&gt; --dir ./components  # save it into your project</pre>' +
        '<p>Full reference: <a href="https://github.com/mr-10/ui-design-library/tree/main/mcp#readme" target="_blank" rel="noopener">mcp/README.md</a>. ' +
        'Machine-readable data: <a href="https://mr-10.github.io/ui-design-library/data/index.min.json">index</a> · ' +
        '<a href="https://mr-10.github.io/ui-design-library/llms.txt">llms.txt</a>.</p>' +
      '</section>';
    var btn = $('#copyCfgBtn');
    if (btn) btn.addEventListener('click', function () {
      copyText(MCP_CONFIG, btn);
    });
    setActiveTree(null, null, null);
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
      '<p class="home-foot">Made with care by <a href="https://github.com/mr-10" target="_blank" rel="noopener">Rakibul Hasan</a> · Elements by the <a href="https://uiverse.io" target="_blank" rel="noopener">Uiverse</a> community, MIT licensed. · <a href="#/ai-agents">Use with AI agents (MCP)</a></p>';
    loadManifest().then(function (m) {
      var t = $('#homeTotal'); if (t) t.textContent = m.total.toLocaleString('en-US');
    });
    var strip = $('#strip');
    // The strip uses data/featured.json (9 records, ~5 KB) instead of the
    // five whole category files (~1.3 MB) — keeps the home page fast.
    fetchJSON('data/featured.json').then(function (d) { return d.elements; }).then(function (recs) {
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
        attachPreview(card.querySelector('.preview'), rec);
      });
    });
    setActiveTree(null, null, null);
  }

  /* ---------- browse ---------- */
  var ioCards = null;
  function cardObserver() {
    if (ioCards) return ioCards;
    // Observe the whole card, not just its preview box: a card whose preview
    // has scrolled just off the top (name still visible) must keep its
    // preview loaded, or it looks broken. The frame is removed only once
    // the whole card is well out of view.
    ioCards = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var holder = en.target.querySelector('.preview');
        if (!holder) return;
        var rec = holder._rec;
        if (!rec) return;
        if (en.isIntersecting) {
          if (!holder._frame) {
            holder.querySelector('.ph') && holder.querySelector('.ph').remove();
            // Creating the iframe is not "playing": the driver never
            // clicks, focuses, types, or simulates anything inside it.
            holder._frame = attachPreview(holder, rec);
          }
        } else if (holder._frame) {
          // Off screen: the iframe is removed (CSS animations stop with
          // it). If this card was the active one, it is deactivated too.
          var cardEl = en.target;
          if (activeCard === cardEl) deactivateCard(cardEl);
          holder._frame.remove(); holder._frame = null;
          if (!holder.querySelector('.ph')) holder.appendChild(el('<div class="ph">Paused</div>'));
        }
      });
    }, { rootMargin: '200px' });
    return ioCards;
  }

  /* ---------- scroll-safe grid: shield + one active card ----------
     Every preview iframe starts with pointer-events: none under a
     transparent shield, so scrolling/swiping over a card never touches
     the element. Tapping the preview activates that one card only:
     the shield is hidden, the iframe takes real events, and an
     "Interactive" badge appears. Deactivate by tapping outside the
     card, pressing Esc, or scrolling more than 40px. The "Tap to
     interact" hint fades after the first activation (localStorage). */
  var activeCard = null;
  var activeScrollY = 0;
  function activateCard(card) {
    if (activeCard && activeCard !== card) deactivateCard(activeCard);
    if (activeCard === card) return;
    activeCard = card;
    activeScrollY = window.scrollY;
    card.classList.add('active');
    try {
      if (!localStorage.getItem('uilib-hint-seen')) {
        localStorage.setItem('uilib-hint-seen', '1');
        document.body.classList.add('hint-seen');
      }
    } catch (e) {}
  }
  function deactivateCard(card) {
    if (!card) return;
    card.classList.remove('active');
    if (activeCard === card) activeCard = null;
  }
  if (!activateCard._bound) {
    activateCard._bound = true;
    try {
      if (localStorage.getItem('uilib-hint-seen')) document.body.classList.add('hint-seen');
    } catch (e) {}
    document.addEventListener('click', function (e) {
      if (!activeCard) return;
      if (!activeCard.contains(e.target)) deactivateCard(activeCard);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && activeCard) deactivateCard(activeCard);
    });
    window.addEventListener('scroll', function () {
      if (!activeCard) return;
      if (Math.abs(window.scrollY - activeScrollY) > 40) deactivateCard(activeCard);
    }, { passive: true });
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
          '<option value="random">Sort: Random</option><option value="az">Sort: A to Z</option><option value="category">Sort: by category</option>' +
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
    if (filters.sort !== 'random') p.set('sort', filters.sort);
    var h = '#/browse' + (p.toString() ? '?' + p.toString() : '');
    if (location.hash !== h) history.replaceState(null, '', h);
  }

  function refreshBrowse() {
    var grid = $('#grid'), count = $('#resultCount');
    if (!grid) return;
    browse.shown = 0;
    browse.results = [];
    browse.loading = true;
    browse.gen = (browse.gen || 0) + 1;
    var gen = browse.gen;
    grid.innerHTML = '';
    count.textContent = 'Loading…';
    var needAll = filters.q || filters.category === 'all';
    var ready = needAll ? loadAllCategories() : loadCategory(filters.category);
    ready.then(function () {
      if (gen !== browse.gen) return; // a newer refresh superseded this one
      browse.loading = false;
      var list = filters.category === 'all' ? allElements() : (catCache[filters.category] ? catCache[filters.category].elements : []);
      browse.results = applyFilters(list);
      updateCount();
      renderBatch();
    }).catch(function () {
      if (gen !== browse.gen) return;
      browse.loading = false;
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
    var lm = $('#loadMore');
    if (!browse.results.length) {
      grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><h2>No elements match</h2><p>Try a different search, category, trigger, or tag.</p></div>';
      updateCount();
      if (lm) lm.disabled = true;
      return;
    }
    if (!next.length) { if (lm) lm.disabled = browse.shown >= browse.results.length; return; }
    var frag = document.createDocumentFragment();
    next.forEach(function (rec) {
      var card = el(
        '<article class="card" tabindex="0" role="link" aria-label="' + esc(rec.name) + ' — ' + esc(rec.category) + ' element, open preview">' +
          '<div class="preview"><div class="ph">Paused</div>' +
            '<div class="shield"><span class="hint">Tap to interact</span></div>' +
            '<span class="active-badge">Interactive</span>' +
            '<a class="get-code" href="#/' + rec.category + '/' + rec.id + '" tabindex="-1">&lt;/&gt; Get code</a></div>' +
          '<div class="meta"><div class="name">' + esc(rec.name) + '</div>' +
          '<div class="by">by ' + esc(rec.author) + ' · ' + esc(rec.category) + '</div>' +
          '<div class="meta-row"><span class="badge ' + esc(rec.trigger) + '">' + esc(triggerLabel(rec.trigger)) + '</span>' +
          '<button class="btn small open-btn" type="button">Open ↗</button></div></div>' +
        '</article>');
      /* Preview area: tap to activate (interact), never navigates.
         Footer / Open button: navigate to the preview page. */
      card.querySelector('.shield').addEventListener('click', function (e) {
        e.stopPropagation();
        activateCard(card);
      });
      card.querySelector('.meta').addEventListener('click', function () { go('#/' + rec.category + '/' + rec.id); });
      card.addEventListener('keydown', function (e) {
        if (e.target !== card) return; // a button inside the card handles its own keys
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go('#/' + rec.category + '/' + rec.id); }
      });
      var holder = card.querySelector('.preview');
      holder._rec = rec;
      cardObserver().observe(card);
      frag.appendChild(card);
    });
    grid.appendChild(frag);
    browse.shown += next.length;
    updateCount();
    if (lm) lm.disabled = browse.shown >= browse.results.length;
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
    /* Pause all animations: pauses CSS animations inside every loaded
       preview iframe (driver toggles an html.uilib-paused class).
       Starts paused when the system prefers reduced motion. */
    var pauseBtn = $('#pauseBtn');
    window.__uilibPaused = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    function applyPaused(p) {
      window.__uilibPaused = p;
      if (!pauseBtn) return;
      pauseBtn.setAttribute('aria-pressed', p ? 'true' : 'false');
      pauseBtn.textContent = p ? '▶ Animations' : '⏸ Animations';
      pauseBtn.title = p ? 'Resume all animations' : 'Pause all animations';
      postToAllFrames('setPaused', { paused: p });
    }
    if (pauseBtn) {
      applyPaused(window.__uilibPaused);
      pauseBtn.addEventListener('click', function () { applyPaused(!window.__uilibPaused); });
    }
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
  var previewState = null; // {rec, catData, idx, bg, fitMode, tab, iframe, files}

  function renderPreview(cat, id, params) {
    var tab = params.get('tab') || 'html';
    var gen = navGen;
    document.title = 'Loading… — UI Design Library';
    $('#mobilebar').hidden = false;
    findElement(cat, id).then(function (rec) {
      if (gen !== navGen) return; // user navigated away while loading
      if (!rec) { renderNotFound(); return; }
      document.title = rec.name + ' — UI Design Library';
      loadCategory(cat).then(function (d) {
        if (gen !== navGen) return;
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

    previewState = { rec: rec, catData: catData, idx: idx, bg: 'dark', fitMode: 'fit', tab: tab, iframe: null, files: {} };

    view.innerHTML =
      '<div class="crumb"><a href="#/">Home</a> / <a href="#/browse?cat=' + rec.category + '">' + esc(rec.category) + '</a> / ' + esc(rec.name) + '</div>' +
      '<div class="preview-head"><h1>' + esc(rec.name) + '</h1>' +
        '<span class="badge ' + esc(rec.trigger) + '">' + esc(triggerLabel(rec.trigger)) + '</span>' +
        '<span class="author">by ' + esc(rec.author) + '</span>' +
        '<span class="nav-arrows">' +
          '<button class="btn small" id="prevBtn"' + (prev ? '' : ' disabled') + '>← Previous</button>' +
          '<button class="btn small" id="nextBtn"' + (next ? '' : ' disabled') + '>Next →</button>' +
        '</span></div>' +
      '<div class="preview-layout">' +
      '<div class="stage-wrap">' +
        '<div class="stage-toolbar">' +
          '<button class="btn primary" id="resetBtn">↻ Reset</button>' +
          '<span class="spacer"></span>' +
          '<span class="seg" id="bgSeg" role="group" aria-label="Stage background">' +
            '<button data-bg="light">Light</button><button data-bg="dark" class="active">Dark</button><button data-bg="checkered">Checkered</button>' +
          '</span>' +
          '<span class="seg" id="fitSeg" role="group" aria-label="Preview size">' +
            '<button data-fit="fit" class="active">Fit</button><button data-fit="actual">100%</button>' +
          '</span>' +
          '<button class="btn" id="fsBtn">⛶ Fullscreen</button>' +
        '</div>' +
        '<div class="stage bg-dark" id="stage">' +
          '<div id="stageFrame" style="width:100%;height:100%"></div>' +
          '<div class="stage-hex" id="stageHex">#212121</div>' +
        '</div>' +
        '<div class="stage-meta">' +
          '<p class="live-note">This is a live component. Hover it, click it, type in it.</p>' +
          '<p><span class="label">How it works:</span> ' + esc(rec.description) + ' ' + esc(rec.howItWorks) + '</p>' +
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
    holder._fitMode = st.fitMode;
    st.iframe = attachPreview(holder, st.rec);
  }

  function postToFrame(cmd, extra) {
    var st = previewState;
    if (!st || !st.iframe || !st.iframe.contentWindow) return;
    var msg = { uilib: 1, cmd: cmd };
    if (extra) for (var k in extra) msg[k] = extra[k];
    try { st.iframe.contentWindow.postMessage(msg, '*'); } catch (e) {}
  }
  /* Post a driver command to every loaded preview iframe on the page
     (grid, strip and preview stage). Used by the Pause-all toggle. */
  function postToAllFrames(cmd, extra) {
    var msg = { uilib: 1, cmd: cmd };
    if (extra) for (var k in extra) msg[k] = extra[k];
    document.querySelectorAll('iframe').forEach(function (f) {
      try { if (f.contentWindow) f.contentWindow.postMessage(msg, '*'); } catch (e) {}
    });
  }
  function applyFitMode() {
    var st = previewState;
    if (!st) return;
    var holder = $('#stageFrame');
    if (holder) {
      holder._fitMode = st.fitMode;
      if (st.iframe && st.iframe.classList.contains('vp-frame')) fitVpFrame(holder);
      else postToFrame('mode', { mode: st.fitMode });
    }
    document.querySelectorAll('#fitSeg button').forEach(function (x) {
      x.classList.toggle('active', x.dataset.fit === st.fitMode);
    });
  }
  function wirePreviewControls() {
    var st = previewState;
    $('#resetBtn').addEventListener('click', function () { mountStageFrame(); });
    $('#fitSeg').addEventListener('click', function (e) {
      var b = e.target.closest('button[data-fit]'); if (!b) return;
      st.fitMode = b.dataset.fit;
      applyFitMode();
    });
    $('#bgSeg').addEventListener('click', function (e) {
      var b = e.target.closest('button[data-bg]'); if (!b) return;
      st.bg = b.dataset.bg;
      document.querySelectorAll('#bgSeg button').forEach(function (x) { x.classList.toggle('active', x === b); });
      var stage = $('#stage');
      stage.classList.remove('bg-light', 'bg-dark', 'bg-checkered');
      stage.classList.add('bg-' + st.bg);
      var hex = $('#stageHex');
      if (hex) hex.textContent = st.bg === 'dark' ? '#212121' : st.bg === 'light' ? '#ffffff' : 'checkered';
      postToFrame('remeasure');
    });
    $('#fsBtn').addEventListener('click', function () {
      var stage = $('#stage');
      if (document.fullscreenElement) document.exitFullscreen();
      else if (stage.requestFullscreen) stage.requestFullscreen();
    });
  }
  function wireMobileBar() {
    var mb = $('#mobilebar');
    mb.classList.add('show');
    $('#mobileReset').onclick = function () { mountStageFrame(); };
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
  });

  initTopbar();
  buildTree();
  loadOverrides().then(function () { route(); });
})();
