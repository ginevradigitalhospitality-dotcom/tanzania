/* Karibu Tanzania – comportamenti comuni: menu, barra di lettura, torna su, tema */
/* Caricamento dei contenuti modificabili (cartella data/, si modificano con Pages CMS).
   Nei testi di fauna e piatti, *parola* diventa corsivo. */
window.KT = window.KT || {};
KT.dati = function (nomi, cb) {
  var VAR = { piatti: 'PIATTI', fauna: 'FAUNA', avvisi: 'AVVISI' };
  var CORSIVO = { piatti: 1, fauna: 1 };
  function em(v) {
    if (typeof v === 'string') return v.replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
    if (Array.isArray(v)) return v.map(em);
    if (v && typeof v === 'object') { for (var k in v) v[k] = em(v[k]); }
    return v;
  }
  Promise.all(nomi.map(function (n) {
    return fetch('data/' + n + '.json').then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (j) { window[VAR[n]] = CORSIVO[n] ? em(j) : j; })
      .catch(function (e) { window[VAR[n]] = null; if (window.console) console.error('Contenuto non caricato: data/' + n + '.json', e); });
  })).then(function () { try { cb(); } catch (e) { if (window.console) console.error(e); } });
};
(function () {
  var INDICE = [
    { t: '1 · Introduzione', voci: [['Benvenuti in Tanzania', 'index.html#benvenuti'], ['Due dritte al volo', 'index.html#dritte'], ['Tips', 'index.html#tips'], ['Prima di partire', 'index.html#partire'], ['Viaggio responsabile', 'index.html#sostenibile']] },
    { t: '2 · Fauna', voci: [['Atlante delle specie', 'fauna.html#atlante'], ['Checklist «Avvistati!»', 'fauna.html#checklist'], ['Birdwatching', 'fauna.html#birdwatching'], ['Altopiani e Kitulo', 'fauna.html#altopiani'], ['Come si legge la savana', 'fauna.html#savana']] },
    { t: '3 · Informazioni pratiche', voci: [['Arrivare e muoversi', 'info.html#arrivare'], ['Dove alloggiare', 'info.html#dormire'], ['Mangiare e bere', 'info.html#mangiare'], ['Salute', 'info.html#salute'], ['Connessione', 'info.html#connessione'], ['Feste', 'info.html#feste'], ['Safari e galateo', 'info.html#safari'], ['Attività all\'aperto', 'info.html#aperto'], ['Sicurezza', 'info.html#sicurezza'], ['Cultura, usi e costumi', 'info.html#cultura'], ['Acquisti', 'info.html#acquisti'], ['Viaggiare in gruppo', 'info.html#gruppo'], ['Da sapere', 'info.html#dasapere']] },
    { t: '4 · La guida per tappe', voci: [['La mappa dei luoghi', 'tappe.html#percorso'], ['Dar es Salaam', 'tappe.html#dar'], ['Mbeya e Mpanga Kipengere', 'tappe.html#mpanga'], ['Mavanga', 'tappe.html#mavanga'], ['Iringa', 'tappe.html#iringa'], ['Ruaha', 'tappe.html#ruaha'], ['Cultura masai', 'tappe.html#masai'], ['Mikumi', 'tappe.html#mikumi']] },
    { t: '5 · Approfondimenti', voci: [['Storia'], ['Letture'], ['Musica'], ['Frasario swahili'], ['Glossario']] }
  ];
  var menu = document.getElementById('menu');
  if (menu) {
    var html = '<div class="wrap"><div><span class="logo">Karibu <span>Tanzania</span></span><button class="btn" data-chiudi>✕ Chiudi</button></div><ol>';
    INDICE.forEach(function (g) {
      html += '<li><h3>' + g.t + '</h3><ul>';
      g.voci.forEach(function (v) {
        html += v[1] ? '<li><a href="' + v[1] + '">' + v[0] + '</a></li>' : '<li class="presto">' + v[0] + ' <small>(in arrivo)</small></li>';
      });
      html += '</ul></li>';
    });
    menu.innerHTML = html + '</ol></div>';
    var apri = document.querySelector('[data-apri-menu]');
    function chiudi() { menu.classList.remove('aperto'); document.body.style.overflow = ''; if (apri) apri.focus(); }
    if (apri) apri.addEventListener('click', function () { menu.classList.add('aperto'); document.body.style.overflow = 'hidden'; menu.querySelector('[data-chiudi]').focus(); });
    menu.addEventListener('click', function (e) { if (e.target.closest('[data-chiudi]') || e.target.closest('a')) chiudi(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu.classList.contains('aperto')) chiudi(); });
  }
  var bar = document.querySelector('.progress'), top = document.querySelector('.top-btn');
  function onScroll() {
    var h = document.documentElement, max = h.scrollHeight - h.clientHeight;
    if (bar) bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    if (top) top.classList.toggle('vis', h.scrollTop > 700);
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  if (top) top.addEventListener('click', function () { window.scrollTo({ top: 0 }); });
  // testi delle pagine modificati dal pannello (data/testi/<pagina>.json)
  var blocchi = document.querySelectorAll('[data-t]');
  if (blocchi.length && window.fetch) {
    var nome = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '') || 'index';
    fetch('data/testi/' + nome + '.json').then(function (r) { return r.ok ? r.json() : null; }).then(function (J) {
      if (!J) return;
      Array.prototype.forEach.call(blocchi, function (el) {
        var k = el.getAttribute('data-t').split('.'), b = J[k[0]] && J[k[0]][+k[1]];
        if (!b || typeof b.testo !== 'string') return;
        var h = b.testo.trim();
        if (/^<p[\s>]/i.test(h)) { // l'editor racchiude il testo in paragrafi: li togliamo
          var tmp = document.createElement('div'); tmp.innerHTML = h;
          var figli = Array.prototype.slice.call(tmp.children);
          if (figli.every(function (p) { return p.tagName === 'P'; })) h = figli.map(function (p) { return p.innerHTML; }).filter(function (x) { return x.replace(/<br\s*\/?>/g, '').trim(); }).join('<br><br>');
        }
        if (!h.replace(/<br\s*\/?>/g, '').trim()) { el.hidden = true; return; }
        el.hidden = false;
        if (el.innerHTML.trim() !== h) el.innerHTML = h;
      });
    }).catch(function () {});
  }
  // uso offline: registra il service worker (funziona solo su https o localhost)
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }
  // tema chiaro/scuro (preferenza salvata solo su questo telefono)
  var tb = document.querySelector('[data-tema]');
  try { var t = localStorage.getItem('kt-tema'); if (t) document.documentElement.setAttribute('data-theme', t); } catch (e) {}
  if (tb) tb.addEventListener('click', function () {
    var cur = document.documentElement.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    var nuovo = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nuovo);
    try { localStorage.setItem('kt-tema', nuovo); } catch (e) {}
  });
})();
