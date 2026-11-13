/* ==========================================================================
   MAVANGA – la settimana nel villaggio (giorni 3–9)
   --------------------------------------------------------------------------
   Questo file lo compili tu. Compare nella pagina «La guida per tappe»,
   nella sezione Mavanga.

   COME SI MODIFICA
   - Scrivi solo tra gli apici '…'. Un apostrofo si scrive \'  (es. l\'acqua).
   - Un campo lasciato vuoto ('') compare sul sito come «Da completare»:
     così il gruppo vede cosa manca.
   - Negli elenchi [ … ] ogni voce è tra apici e separata da una virgola.
     Puoi aggiungere o togliere voci.

   ⚠️ IL SITO È PUBBLICO. NON SCRIVERE MAI:
   numeri di telefono, nomi e cognomi (dei partecipanti, dei bambini, delle
   famiglie ospitanti), indirizzi esatti, foto di bambini.
   Per i contatti scrivi «chiedete al coordinatore».
   ========================================================================== */

window.MAVANGA = {

  aggiornato: '',          // es. '20/11/2026'

  progetto: {
    titolo: '',            // es. 'Sostegno alla scuola primaria di Mavanga'
    associazione: '',      // l'organizzazione o la parrocchia che segue il progetto
    descrizione: ''        // 3–5 righe: chi sono, da quanto lavorano qui, a cosa serve il nostro aiuto
  },

  // Le attività previste (dal programma WeRoad: correggile e completale)
  attivita: [
    'Supporto agli insegnanti durante le lezioni a scuola (inglese di base, giochi didattici, disegno).',
    'Giochi e partite di calcio con i ragazzi nel pomeriggio.',
    'Piccoli lavori di sistemazione della scuola o del centro sanitario (pittura, pulizia, piccole riparazioni).',
    'Domenica 6 dicembre: la messa con la comunità.'
  ],

  // Una giornata tipo, es. 'Colazione alle 7:30, a scuola dalle 8 alle 13, pranzo…'
  giornata: '',

  // Dove dormiamo e mangiamo (senza indirizzo!), es. 'Nella foresteria della parrocchia, camere da 4…'
  alloggio: '',

  // Regole del villaggio concordate con chi ci ospita
  regole: [
    'Abiti che coprano spalle e ginocchia, soprattutto a scuola e a messa.',
    'Foto alle persone solo dopo aver chiesto. Ai bambini, solo con il permesso degli insegnanti, e mai pubblicate online.',
    'Niente regali, caramelle o soldi dati direttamente ai bambini: tutto passa dal progetto.',
    'Alcol e fumo lontano dalla scuola e dalla chiesa.'
  ],

  // Cosa portare per il progetto (solo ciò che è stato concordato)
  portare: [
    ''
  ],

  // Domande frequenti del gruppo: { d: 'domanda', r: 'risposta' }
  domande: [
    { d: 'C\'è la corrente elettrica per ricaricare il telefono?', r: '' },
    { d: 'Si può bere l\'acqua del villaggio?', r: '' },
    { d: 'C\'è campo per il telefono?', r: '' }
  ]
};
