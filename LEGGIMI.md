# Karibu Tanzania — come pubblicare e modificare la guida

Questa cartella contiene il sito completo. Si pubblica gratis con **GitHub Pages** e poi si modifica dal browser, anche dal telefono.

---

## 1. Pubblicare il sito (una volta sola, circa 15 minuti)

### Cosa serve
- Un account GitHub gratuito: <https://github.com/signup>
- **GitHub Desktop**, il programma ufficiale di GitHub, per caricare tutti i file in una volta: <https://desktop.github.com>.
  Il sito ha più di 200 file e dal browser se ne possono caricare al massimo 100 per volta.

### Passaggi
1. Installa GitHub Desktop e accedi con il tuo account GitHub.
2. Menu **File → Add local repository…** e scegli questa cartella (`tanzania-guida`).
   GitHub Desktop dirà che non è ancora un repository: clicca **create a repository**.
   - Nome: per esempio `tanzania` (diventerà parte dell'indirizzo del sito)
   - Lascia il resto com'è e clicca **Create repository**.
3. Nella colonna a sinistra compaiono tutti i file del sito. In basso, nel campo **Summary**, scrivi `Prima versione` e clicca **Commit to main**.
4. Clicca **Publish repository** in alto.
   - **Togli la spunta da «Keep this code private»**: con l'account gratuito GitHub Pages funziona solo con repository pubblici.
   - Clicca **Publish repository**.
5. Apri il repository su github.com (in GitHub Desktop: **Repository → View on GitHub**).
6. Vai su **Settings → Pages** (menu a sinistra).
   - *Source*: **Deploy from a branch**
   - *Branch*: **main** e cartella **/ (root)** → **Save**
7. Dopo 1–2 minuti, in cima alla stessa pagina compare l'indirizzo del sito:
   `https://TUONOME.github.io/tanzania/`
   Quello è il link da mandare al gruppo.

> ⚠️ **Il sito è pubblico**: chiunque abbia il link può vederlo (anche se nessuno lo troverà per caso).
> Non inserire mai numeri di telefono, nomi e cognomi dei partecipanti, foto di bambini del villaggio, indirizzi esatti degli alloggi.

---

## 2. Modificare le informazioni (dal browser o dal telefono)

1. Apri il repository su github.com (dal telefono va bene anche l'app GitHub).
2. Entra nella cartella `data` e apri il file da modificare (vedi sotto).
3. Clicca sulla **matita ✏️** in alto a destra («Edit this file»).
4. Fai le modifiche e clicca **Commit changes…** → di nuovo **Commit changes**.
5. Entro 1–2 minuti il sito è aggiornato. Chi lo apre online vede subito la nuova versione.

### Quale file modificare

| Cosa vuoi cambiare | File |
|---|---|
| Itinerario giorno per giorno, tappe e linee della mappa | `data/itinerario.js` |
| Schede della fauna (testi, probabilità di avvistamento) | `data/fauna-blocco1.js` … `data/fauna-blocco5.js` |
| Crediti delle foto | `data/foto-crediti*.js` |
| Il progetto del villaggio (attività, regole, domande) | `data/mavanga.js` |
| Piatti di «Mangiare e bere» | `data/piatti.js` |
| Testi delle pagine (benvenuto, consigli, valigia, tappe…) | `index.html`, `fauna.html`, `info.html`, `tappe.html` |

### Regole per non rompere niente
- Cambia solo il testo **tra gli apici** `'…'`.
- Un apostrofo dentro il testo si scrive con la barra: `l\'alba`, `un\'aquila`.
- Non cancellare virgole, parentesi `{ }` `[ ]` e apici.
- Se dopo una modifica una parte della pagina sparisce, probabilmente manca una virgola o un apice: vedi il punto 3.

---

## 3. Se qualcosa va storto

Ogni modifica è salvata nella **cronologia**, e si può sempre tornare indietro.

1. Apri il file su github.com e clicca **History** (in alto a destra).
2. Scegli la versione funzionante, apri il menu **…** e poi **View file**: copia il testo.
3. Torna al file, clicca la matita, incolla il testo e fai **Commit changes**.

Oppure da GitHub Desktop: scheda **History**, tasto destro sulla modifica sbagliata → **Revert changes in commit**, poi **Push origin**.

---

## 4. Per i compagni di viaggio: usare la guida senza connessione

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
- `sw.js` è il service worker per l'offline. Pagine e dati sono caricati **prima dalla rete** (le modifiche arrivano subito), immagini e librerie **prima dalla copia salvata**.
  Se aggiungi nuove pagine o immagini funzionano comunque: vengono salvate la prima volta che si aprono.
- Le foto vengono da Wikimedia Commons con licenze libere; autore e licenza sono indicati nelle didascalie.
