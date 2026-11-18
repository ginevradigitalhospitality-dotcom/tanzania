# Karibu Tanzania — come modificare la guida

Il sito è online: **https://ginevradigitalhospitality-dotcom.github.io/tanzania/**
I file sono nel repository GitHub `ginevradigitalhospitality-dotcom/tanzania`.

---

## 1. Modificare i contenuti con il pannello (come WordPress)

Non serve toccare codice: si compilano dei moduli.

### La prima volta
1. Apri **https://app.pagescms.org** e clicca **Sign in with GitHub**.
2. Autorizza Pages CMS e, quando lo chiede, **installa l'app** solo sul repository **tanzania**.
3. Scegli il repository **tanzania**. A sinistra compaiono le sezioni modificabili.

### Le sezioni
| Sezione del pannello | Dove compare sul sito |
|---|---|
| 📣 Avvisi per il gruppo | in cima alla home (solo quelli con «Pubblicato» attivo) |
| 🍲 Piatti | Informazioni pratiche → Mangiare e bere |
| 🦁 Fauna | le 106 schede dell'atlante |
| ✏️ Testi delle pagine | tutti i testi di Home, Day by day, Informazioni pratiche, Guida per tappe e Fauna, divisi per capitolo |

### Come si salva
Modifica i campi e clicca **Save**. Dopo 1–3 minuti il sito è aggiornato (se non vedi la modifica, ricarica la pagina).

- Nei testi di fauna e piatti, `*parola*` diventa *corsivo*.
- Le foto caricate dal pannello devono essere piccole (circa 500–1000 px di larghezza).

> ⚠️ **Il sito è pubblico**: chiunque abbia il link può vederlo.
> Non inserire mai numeri di telefono, nomi e cognomi dei partecipanti, foto di bambini del villaggio, indirizzi esatti degli alloggi.

Nei «Testi delle pagine» ogni capitolo contiene i suoi blocchi (paragrafi, voci di elenco, titoli, box), in ordine. Il campo grigio «Dove si trova» indica quale blocco stai modificando. Per far sparire un blocco, svuota il testo.

---

## 2. Se qualcosa va storto

Ogni salvataggio resta nella **cronologia** e si può sempre tornare indietro.

1. Su github.com apri il repository **tanzania** e il file da recuperare (per esempio `data/avvisi.json`).
2. Clicca **History**, scegli la versione funzionante e copiane il contenuto.
3. Oppure chiedi aiuto: con la cronologia si recupera qualsiasi versione.

---

## 3. Per i compagni di viaggio: usare la guida senza connessione

1. **Prima di partire, con il wifi**, apri il link della guida sul telefono.
2. Aggiungila alla schermata Home:
   - **iPhone (Safari)**: tasto Condividi → *Aggiungi alla schermata Home*
   - **Android (Chrome)**: menu ⋮ → *Installa app* o *Aggiungi a schermata Home*
3. Apri la pagina **Fauna** e tocca **«Salva tutte le foto per l'offline»** (circa 12 MB).
4. Apri anche la home e scorri la mappa: le zone viste vengono salvate.

Da quel momento la guida, le schede, la checklist «Avvistati!» e la valigia funzionano anche senza rete.
Quando torna la connessione, la guida si aggiorna da sola con le eventuali modifiche.

---

## Note tecniche (per chi se ne intende)

- Sito statico in HTML, CSS e JavaScript, senza build. Unica libreria esterna: Leaflet 1.9.4 (cdnjs).
  Mappe © OpenStreetMap, font Google Fonts.
- I contenuti modificabili sono file JSON nella cartella `data/`; il pannello è configurato in `.pages.yml`.
- `sw.js` è il service worker per l'offline. Pagine e dati sono caricati **prima dalla rete** (le modifiche arrivano subito), immagini e librerie **prima dalla copia salvata**.
  Se aggiungi nuove pagine o immagini funzionano comunque: vengono salvate la prima volta che si aprono.
- Le foto vengono da Wikimedia Commons con licenze libere; autore e licenza sono indicati nelle didascalie.
