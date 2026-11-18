/* Service worker di Karibu Tanzania: rende la guida consultabile senza connessione.
   - Testi, dati e pagine: prima la rete (così le modifiche online arrivano subito), poi la copia salvata.
   - Immagini, font, librerie e mappa: prima la copia salvata, poi la rete.
   Versione: 20261118-1236 (generato automaticamente: per aggiornarlo rigenera il file). */
var VERSIONE = 'kt-20261118-1236';
var BASE = 'kt-base-' + VERSIONE, FOTO = 'kt-foto', EXTRA = 'kt-extra', MAPPA = 'kt-mappa';
var ELENCO = [
  './assets/fauna.js',
  './assets/guida.css',
  './assets/guida.js',
  './data/avvisi.json',
  './data/fauna.json',
  './data/foto-crediti.js',
  './data/foto-crediti-2.js',
  './data/foto-crediti-3.js',
  './data/foto-crediti-4.js',
  './data/foto-crediti-5.js',
  './data/piatti.json',
  './data/testi/fauna.json',
  './data/testi/index.json',
  './data/testi/info.json',
  './data/testi/tappe.json',
  './fauna.html',
  './img/altopiani-panorama.jpg',
  './img/cibo/chai.jpg',
  './img/cibo/chapati.jpg',
  './img/cibo/chipsi.jpg',
  './img/cibo/kachumbari.jpg',
  './img/cibo/maharage.jpg',
  './img/cibo/mandazi.jpg',
  './img/cibo/mchicha.jpg',
  './img/cibo/mishkaki.jpg',
  './img/cibo/mtori.jpg',
  './img/cibo/ndizi.jpg',
  './img/cibo/nyama.jpg',
  './img/cibo/pilau.jpg',
  './img/cibo/samaki.jpg',
  './img/cibo/ugali.jpg',
  './img/cibo/ulanzi.jpg',
  './img/cibo/vitumbua.jpg',
  './img/fauna/thumb/abbott.jpg',
  './img/fauna/thumb/agama.jpg',
  './img/fauna/thumb/alcelafo.jpg',
  './img/fauna/thumb/antilope-nera.jpg',
  './img/fauna/thumb/antilope-roana.jpg',
  './img/fauna/thumb/babbuino.jpg',
  './img/fauna/thumb/bianconero.jpg',
  './img/fauna/thumb/bucorvo.jpg',
  './img/fauna/thumb/bufalo.jpg',
  './img/fauna/thumb/bushbuck.jpg',
  './img/fauna/thumb/camaleonte.jpg',
  './img/fauna/thumb/caracal.jpg',
  './img/fauna/thumb/cenerino.jpg',
  './img/fauna/thumb/cicogna-bianca.jpg',
  './img/fauna/thumb/cisticola.jpg',
  './img/fauna/thumb/civetta.jpg',
  './img/fauna/thumb/cobo.jpg',
  './img/fauna/thumb/coccodrillo.jpg',
  './img/fauna/thumb/colobo.jpg',
  './img/fauna/thumb/commelina.jpg',
  './img/fauna/thumb/decken.jpg',
  './img/fauna/thumb/diadema.jpg',
  './img/fauna/thumb/dierama.jpg',
  './img/fauna/thumb/dikdik.jpg',
  './img/fauna/thumb/dorsobianco.jpg',
  './img/fauna/thumb/duiker.jpg',
  './img/fauna/thumb/eland.jpg',
  './img/fauna/thumb/elefante.jpg',
  './img/fauna/thumb/facocero.jpg',
  './img/fauna/thumb/faraone.jpg',
  './img/fauna/thumb/galago.jpg',
  './img/fauna/thumb/galago-grande.jpg',
  './img/fauna/thumb/gatto-selvatico.jpg',
  './img/fauna/thumb/genetta.jpg',
  './img/fauna/thumb/ghepardo.jpg',
  './img/fauna/thumb/ghiandaia-eu.jpg',
  './img/fauna/thumb/ginepro.jpg',
  './img/fauna/thumb/giocoliera.jpg',
  './img/fauna/thumb/giraffa.jpg',
  './img/fauna/thumb/gloriosa.jpg',
  './img/fauna/thumb/gnu.jpg',
  './img/fauna/thumb/grant.jpg',
  './img/fauna/thumb/gru.jpg',
  './img/fauna/thumb/gruccione-eu.jpg',
  './img/fauna/thumb/gruccione-min.jpg',
  './img/fauna/thumb/iena-macchiata.jpg',
  './img/fauna/thumb/iena-striata.jpg',
  './img/fauna/thumb/impala.jpg',
  './img/fauna/thumb/inseparabile.jpg',
  './img/fauna/thumb/ippopotamo.jpg',
  './img/fauna/thumb/kipunji.jpg',
  './img/fauna/thumb/klipspringer.jpg',
  './img/fauna/thumb/kudu-maggiore.jpg',
  './img/fauna/thumb/kudu-minore.jpg',
  './img/fauna/thumb/leone.jpg',
  './img/fauna/thumb/leopardo.jpg',
  './img/fauna/thumb/licaone.jpg',
  './img/fauna/thumb/lobelia.jpg',
  './img/fauna/thumb/lontra.jpg',
  './img/fauna/thumb/malachite.jpg',
  './img/fauna/thumb/mamba.jpg',
  './img/fauna/thumb/mangusta-codabianca.jpg',
  './img/fauna/thumb/mangusta-egiziana.jpg',
  './img/fauna/thumb/mangusta-nana.jpg',
  './img/fauna/thumb/mangusta-snella.jpg',
  './img/fauna/thumb/mangusta-striata.jpg',
  './img/fauna/thumb/marabu.jpg',
  './img/fauna/thumb/marziale.jpg',
  './img/fauna/thumb/moraea.jpg',
  './img/fauna/thumb/msuyae.jpg',
  './img/fauna/thumb/orchidee.jpg',
  './img/fauna/thumb/orecchiuto.jpg',
  './img/fauna/thumb/oribi.jpg',
  './img/fauna/thumb/otocione.jpg',
  './img/fauna/thumb/pescatrice.jpg',
  './img/fauna/thumb/pettolilla.jpg',
  './img/fauna/thumb/pitone.jpg',
  './img/fauna/thumb/potamochero.jpg',
  './img/fauna/thumb/protea.jpg',
  './img/fauna/thumb/protele.jpg',
  './img/fauna/thumb/puku.jpg',
  './img/fauna/thumb/rapace.jpg',
  './img/fauna/thumb/ratel.jpg',
  './img/fauna/thumb/redunca.jpg',
  './img/fauna/thumb/rinoceronte-nero.jpg',
  './img/fauna/thumb/rondine-blu.jpg',
  './img/fauna/thumb/ruahae.jpg',
  './img/fauna/thumb/sciacallo-gualdrappa.jpg',
  './img/fauna/thumb/sciacallo-striato.jpg',
  './img/fauna/thumb/sellata.jpg',
  './img/fauna/thumb/serpentario.jpg',
  './img/fauna/thumb/serval.jpg',
  './img/fauna/thumb/steenbok.jpg',
  './img/fauna/thumb/steppe.jpg',
  './img/fauna/thumb/struzzo.jpg',
  './img/fauna/thumb/superbo.jpg',
  './img/fauna/thumb/tartaruga-frittella.jpg',
  './img/fauna/thumb/tartaruga-leopardo.jpg',
  './img/fauna/thumb/tempeli.jpg',
  './img/fauna/thumb/tessitore.jpg',
  './img/fauna/thumb/varano.jpg',
  './img/fauna/thumb/vedova-montana.jpg',
  './img/fauna/thumb/vervet.jpg',
  './img/fauna/thumb/vipera.jpg',
  './img/fauna/thumb/zebra.jpg',
  './img/hero-fauna.jpg',
  './img/hero-info.jpg',
  './img/hero-intro.jpg',
  './img/icone/icona-192.png',
  './img/icone/icona-512.png',
  './img/kimani.jpg',
  './img/savana/s-baobab.jpg',
  './img/savana/s-bufaga.jpg',
  './img/savana/s-orme-leopardo.jpg',
  './img/savana/s-scavo.jpg',
  './img/savana/s-sterco-elefante.jpg',
  './img/savana/s-termitaio.jpg',
  './img/tappe/askari.jpg',
  './img/tappe/dar.jpg',
  './img/tappe/iringa.jpg',
  './img/tappe/isimila.jpg',
  './img/tappe/masai.jpg',
  './img/tappe/mavanga.jpg',
  './img/tappe/mikumi.jpg',
  './img/tappe/ruaha.jpg',
  './index.html',
  './info.html',
  './manifest.webmanifest',
  './tappe.html'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(BASE).then(function (c) {
    // file per file: se uno manca, gli altri vengono salvati comunque
    return Promise.all(ELENCO.map(function (u) { return c.add(u).catch(function () {}); }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k.indexOf('kt-base-') === 0 && k !== BASE; })
      .map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

function primaRete(req) {
  return new Promise(function (resolve) {
    var finito = false;
    var t = setTimeout(function () { // connessione lentissima: dopo 4 s usa la copia salvata
      caches.match(req).then(function (r) { if (r && !finito) { finito = true; resolve(r); } });
    }, 4000);
    fetch(req).then(function (res) {
      if (res && res.ok) { var copia = res.clone(); caches.open(BASE).then(function (c) { c.put(req, copia); }); }
      clearTimeout(t); if (!finito) { finito = true; resolve(res); }
    }).catch(function () {
      clearTimeout(t);
      caches.match(req).then(function (r) { if (!finito) { finito = true; resolve(r || caches.match('./index.html')); } });
    });
  });
}

function primaCopia(req, nome, limite) {
  return caches.match(req).then(function (r) {
    if (r) return r;
    return fetch(req).then(function (res) {
      if (res && (res.ok || res.type === 'opaque')) {
        var copia = res.clone();
        caches.open(nome).then(function (c) {
          c.put(req, copia);
          if (limite) c.keys().then(function (k) { if (k.length > limite) c.delete(k[0]); });
        });
      }
      return res;
    });
  });
}

self.addEventListener('fetch', function (e) {
  var req = e.request; if (req.method !== 'GET') return;
  var u = new URL(req.url);
  if (u.hostname === 'tile.openstreetmap.org') { e.respondWith(primaCopia(req, MAPPA, 400)); return; }
  if (u.origin !== location.origin) { e.respondWith(primaCopia(req, EXTRA)); return; } // font, Leaflet
  if (/\.(jpg|jpeg|png|webp|svg)$/i.test(u.pathname)) { e.respondWith(primaCopia(req, u.pathname.indexOf('/img/fauna/') >= 0 ? FOTO : BASE)); return; }
  e.respondWith(primaRete(req));
});
