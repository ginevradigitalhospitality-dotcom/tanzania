/* Atlante della fauna: griglia, filtri, ricerca, scheda di dettaglio, checklist «Avvistati!» */
KT.dati(['fauna'], function () {
  var DATI = window.FAUNA || [], FOTO = window.FOTO || {};
  var PARCHI = { ruaha: 'Ruaha', mikumi: 'Mikumi', mpanga: 'Mpanga Kipengere' };
  var CAT = { big5: 'Big Five', predatori: 'Predatori', erbivori: 'Grandi erbivori', antilopi: 'Antilopi', primati: 'Primati', rettili: 'Rettili', uccelli: 'Uccelli', altopiani: 'Altopiani', flora: 'Fiori e piante' };
  var IUCN = { LC: 'Minor preoccupazione', NT: 'Quasi minacciata', VU: 'Vulnerabile', EN: 'In pericolo', CR: 'In pericolo critico', DD: 'Dati insufficienti', NE: 'Non valutata' };
  var PROB = { alta: 'alta', media: 'media', rara: 'rara' };
  var KEY = 'kt-avvistati';
  var stato = { cat: 'tutte', parco: 'tutti', prob: 'tutte', q: '' };
  var visti = carica();

  function carica() { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; } }
  function salva() { try { localStorage.setItem(KEY, JSON.stringify(visti)); } catch (e) {} }
  function norm(s) { return (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function $(s) { return document.querySelector(s); }

  function badgeParchi(sp) {
    return Object.keys(PARCHI).map(function (k) {
      var v = sp.dove[k];
      return v ? '<span class="pk ' + v + '">' + PARCHI[k] + ' · ' + PROB[v] + '</span>'
               : '<span class="pk no" title="Assente o non documentata">' + PARCHI[k] + ' · —</span>';
    }).join('');
  }
  function passa(sp) {
    if (stato.cat !== 'tutte' && sp.cat !== stato.cat) return false;
    var vals = stato.parco === 'tutti' ? Object.keys(PARCHI).map(function (k) { return sp.dove[k]; }) : [sp.dove[stato.parco]];
    if (stato.parco !== 'tutti' && !vals[0]) return false;
    if (stato.prob !== 'tutte' && vals.indexOf(stato.prob) < 0) return false;
    if (stato.q) {
      var t = norm([sp.it, sp.en, sp.sw, sp.sci, (sp.alias || []).join(' ')].join(' '));
      if (t.indexOf(norm(stato.q)) < 0) return false;
    }
    return true;
  }

  function renderGriglia() {
    var g = $('#griglia'), n = 0, html = '';
    DATI.forEach(function (sp) {
      if (!passa(sp)) return; n++;
      var f = FOTO[sp.id];
      html += '<article class="fc' + (sp.fuori ? ' fuori' : '') + '">' +
        '<button class="fc-apri" data-id="' + sp.id + '" aria-label="Apri la scheda: ' + esc(sp.it) + '">' +
        '<div class="fc-img">' + (f ? '<img src="img/fauna/thumb/' + sp.id + '.jpg" alt="' + esc(sp.alt || ('Foto di ' + sp.it.toLowerCase() + (f && f.luogo ? ' (' + f.luogo + ')' : ''))) + '" loading="lazy" width="480" height="360">' : '<span>nessuna foto con licenza libera</span>') + '</div>' +
        '<div class="fc-body"><p class="fc-cat">' + CAT[sp.cat] + (sp.notturno ? ' · <span title="Attiva soprattutto di notte">☾ notturna</span>' : '') + (sp.migratore ? ' · <span title="Presente soprattutto tra ottobre e aprile">✈ migratore</span>' : '') + '</p>' +
        '<h3>' + esc(sp.it) + '</h3><p class="fc-alt">' + esc(sp.en) + ' · <b lang="sw">' + esc(sp.sw) + '</b> · <i>' + esc(sp.sci) + '</i></p>' +
        '<div class="parks">' + (sp.fuori ? '<span class="pk no">Non presente nel nostro itinerario</span>' : badgeParchi(sp)) + '</div></div></button>' +
        (sp.fuori ? '' : '<button class="chk' + (visti[sp.id] ? ' fatto' : '') + '" data-visto="' + sp.id + '" aria-pressed="' + !!visti[sp.id] + '" aria-label="Segna ' + esc(sp.it) + ' come avvistato">✓</button>') +
        '</article>';
    });
    g.innerHTML = html || '<p class="nota">Nessuna specie corrisponde ai filtri. Prova a toglierne qualcuno.</p>';
    $('#conteggio').textContent = n + (n === 1 ? ' specie' : ' specie') + ' su ' + DATI.length;
  }

  function sezione(titolo, testo) { return testo ? '<h4>' + titolo + '</h4><p>' + testo + '</p>' : ''; }
  function apri(id, daHash) {
    var sp = DATI.filter(function (s) { return s.id === id; })[0]; if (!sp) return;
    var f = FOTO[id], d = $('#scheda');
    var dove = sp.fuori ? '<p class="box b-att"><span>' + sp.doveNota + '</span></p>' :
      '<div class="parks grandi">' + badgeParchi(sp) + '</div>' + (sp.doveNota ? '<p class="nota">' + sp.doveNota + '</p>' : '');
    d.querySelector('.sc-corpo').innerHTML =
      (f ? '<figure class="sc-foto"><img src="img/fauna/' + id + '.jpg" alt="' + esc(sp.alt || ('Foto di ' + sp.it.toLowerCase() + (f && f.luogo ? ' (' + f.luogo + ')' : ''))) + '"><figcaption>' + (f.luogo ? esc(f.luogo) + ' · ' : '') + 'Foto: ' + esc(f.autore) + ' · <a href="' + f.page + '" target="_blank" rel="noopener">' + esc(f.licenza) + ', Wikimedia Commons</a></figcaption></figure>' : '') +
      '<div class="sc-testo"><p class="kicker">' + CAT[sp.cat] + '</p><h2 id="sc-titolo">' + esc(sp.it) + '</h2>' +
      '<dl class="nomi"><div><dt>Inglese</dt><dd>' + esc(sp.en) + '</dd></div><div><dt>Swahili</dt><dd lang="sw">' + esc(sp.sw) + '</dd></div><div><dt>Scientifico</dt><dd><i>' + esc(sp.sci) + '</i></dd></div>' +
      '<div><dt>IUCN</dt><dd><span class="iucn ' + sp.iucn + '">' + sp.iucn + '</span> ' + IUCN[sp.iucn] + '</dd></div></dl>' +
      '<h4>Dove avvistarla</h4>' + dove +
      '<h4>Come riconoscerla</h4><p class="misure">' + sp.misure + '</p><p>' + sp.riconoscere + '</p>' +
      (sp.simili ? '<div class="box b-sap"><h4>Da non confondere con…</h4><p>' + sp.simili + '</p></div>' : '') +
      sezione('Comportamento', sp.comportamento) + sezione('Alimentazione', sp.alimentazione) + sezione('Vita sociale', sp.sociale) +
      (sp.curiosita ? '<div class="box b-top"><h4>Lo sapevi che…</h4><p>' + sp.curiosita + '</p></div>' : '') +
      (sp.consiglio ? '<div class="box b-cons"><h4>Il consiglio dell\'autore</h4><p>' + sp.consiglio + '</p></div>' : '') +
      (sp.fuori ? '' : '<button class="btn pieno sc-visto" data-visto="' + id + '">' + (visti[id] ? '✓ Avvistato!' : 'Segna come avvistato') + '</button>') +
      '</div>';
    if (!d.open) { d.showModal ? d.showModal() : d.setAttribute('open', ''); }
    d.querySelector('.sc-corpo').scrollTop = 0;
    if (!daHash) history.replaceState(null, '', '#' + id);
  }
  function chiudiScheda() { var d = $('#scheda'); if (d.open) d.close ? d.close() : d.removeAttribute('open'); history.replaceState(null, '', location.pathname + '#atlante'); }

  function toggle(id) {
    if (visti[id]) delete visti[id]; else visti[id] = new Date().toISOString().slice(0, 10);
    salva(); renderGriglia(); renderChecklist();
    var b = document.querySelector('.sc-visto[data-visto="' + id + '"]');
    if (b) b.textContent = visti[id] ? '✓ Avvistato!' : 'Segna come avvistato';
  }

  function renderChecklist() {
    var box = $('#lista'), tot = 0, fatti = 0, html = '';
    Object.keys(CAT).forEach(function (c) {
      var specie = DATI.filter(function (s) { return s.cat === c && !s.fuori; });
      if (!specie.length) return;
      html += '<fieldset><legend>' + CAT[c] + '</legend>';
      specie.forEach(function (s) {
        tot++; if (visti[s.id]) fatti++;
        html += '<label><input type="checkbox" data-visto="' + s.id + '"' + (visti[s.id] ? ' checked' : '') + '> ' + esc(s.it) + ' <small lang="sw">' + esc(s.sw) + '</small>' + (visti[s.id] ? ' <small class="data">' + visti[s.id].split('-').reverse().join('/') + '</small>' : '') + '</label>';
      });
      html += '</fieldset>';
    });
    box.innerHTML = html;
    $('#punteggio').textContent = fatti + ' / ' + tot;
    $('#barra-visti').style.width = (tot ? fatti / tot * 100 : 0) + '%';
  }

  function testoLista() {
    var r = ['I miei avvistamenti in Tanzania 🦁', ''];
    DATI.forEach(function (s) { if (visti[s.id]) r.push('✓ ' + s.it + ' (' + s.sw + ')'); });
    r.push('', 'Totale: ' + Object.keys(visti).length + ' specie');
    return r.join('\n');
  }

  document.addEventListener('click', function (e) {
    var v = e.target.closest('[data-visto]');
    if (v && v.tagName !== 'INPUT') { e.preventDefault(); toggle(v.getAttribute('data-visto')); return; }
    var a = e.target.closest('.fc-apri'); if (a) { apri(a.getAttribute('data-id')); return; }
    var ch = e.target.closest('[data-filtro]');
    if (ch) {
      stato.cat = ch.getAttribute('data-filtro');
      document.querySelectorAll('[data-filtro]').forEach(function (x) { x.setAttribute('aria-pressed', x === ch); });
      renderGriglia();
    }
    if (e.target.closest('.sc-chiudi')) chiudiScheda();
  });
  document.addEventListener('change', function (e) {
    if (e.target.matches('input[data-visto]')) toggle(e.target.getAttribute('data-visto'));
    if (e.target.id === 'f-parco') { stato.parco = e.target.value; renderGriglia(); }
    if (e.target.id === 'f-prob') { stato.prob = e.target.value; renderGriglia(); }
  });
  $('#cerca').addEventListener('input', function (e) { stato.q = e.target.value.trim(); renderGriglia(); });
  var d = $('#scheda');
  d.addEventListener('click', function (e) { if (e.target === d) chiudiScheda(); });
  d.addEventListener('cancel', function (e) { e.preventDefault(); chiudiScheda(); });
  $('#copia').addEventListener('click', function () {
    var t = testoLista(), b = this;
    function ok() { b.textContent = '✓ Copiata: incollala su WhatsApp'; setTimeout(function () { b.textContent = 'Copia la mia lista'; }, 2500); }
    if (navigator.share) { navigator.share({ text: t }).catch(function () {}); return; }
    if (navigator.clipboard) navigator.clipboard.writeText(t).then(ok, function () { prompt('Copia il testo:', t); });
    else prompt('Copia il testo:', t);
  });
  $('#azzera').addEventListener('click', function () { if (confirm('Cancellare tutti gli avvistamenti salvati su questo telefono?')) { visti = {}; salva(); renderGriglia(); renderChecklist(); } });

  // Salvataggio di tutte le foto grandi per l'uso offline (passano dal service worker)
  var bOff = $('#salva-offline'), sOff = $('#stato-offline');
  if (bOff) {
    if (!('serviceWorker' in navigator) || !('caches' in window)) {
      bOff.disabled = true; sOff.textContent = ' Questo browser non permette il salvataggio offline.';
    } else {
      caches.open('kt-foto').then(function (c) { return c.keys(); }).then(function (k) {
        var tot = Object.keys(FOTO).filter(function (id) { return DATI.some(function (s) { return s.id === id; }); }).length;
        if (k.length >= tot && tot) sOff.textContent = ' ✓ Foto già salvate su questo telefono.';
      }).catch(function () {});
      bOff.addEventListener('click', function () {
        var ids = DATI.filter(function (s) { return FOTO[s.id]; }).map(function (s) { return s.id; });
        var fatti = 0, errori = 0; bOff.disabled = true;
        (function prossimo(i) {
          if (i >= ids.length) {
            bOff.disabled = false;
            sOff.textContent = errori ? ' Salvate ' + fatti + ' foto, ' + errori + ' non riuscite: riprovate con una connessione migliore.' : ' ✓ Tutte le ' + fatti + ' foto sono salvate su questo telefono.';
            return;
          }
          sOff.textContent = ' Salvataggio… ' + (i + 1) + ' / ' + ids.length;
          fetch('img/fauna/' + ids[i] + '.jpg').then(function (r) { if (r.ok) fatti++; else errori++; }, function () { errori++; })
            .then(function () { prossimo(i + 1); });
        })(0);
      });
    }
  }

  renderGriglia(); renderChecklist();
  function daHash() { var id = location.hash.slice(1); if (id && DATI.some(function (s) { return s.id === id; })) apri(id, true); }
  window.addEventListener('hashchange', daHash); daHash();
});
