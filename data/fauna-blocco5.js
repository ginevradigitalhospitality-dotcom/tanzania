/* Atlante fauna – Blocco 5: altopiani meridionali (Mpanga Kipengere, Kitulo, Livingstone) e flora. Dati verificati l'11/11/2026.
   dove: alta | media | rara | null (assente o non documentata). Kitulo non è nell'itinerario: indicato in doveNota. */
window.FAUNA = (window.FAUNA || []).concat([
{
  id: 'kipunji', cat: 'altopiani', it: 'Kipunji', en: 'Kipunji (highland mangabey)', sw: 'Kipunji', sci: 'Rungwecebus kipunji', iucn: 'EN', alias: ['mangabey'],
  dove: { ruaha: null, mikumi: null, mpanga: null },
  doveNota: 'Vive solo in due zone della Tanzania. Circa il 90% della popolazione si trova nel complesso forestale Rungwe–Livingstone, che comprende la foresta di Livingstone nel Parco Nazionale di Kitulo, il blocco forestale più grande della catena dei Kipengere. Il resto vive nella foresta di Ndundulu, sui Monti Udzungwa. Per Mpanga Kipengere non ci sono segnalazioni.',
  misure: 'Circa 10–16 kg · lunghezza 85–90 cm più la coda.',
  riconoscere: 'Scimmia di foresta bruno-grigiastra, con una cresta di pelo eretta sulla testa e lunghe basette ai lati della faccia scura. La coda è lunga, con la punta più chiara. La foto della scheda è un\'illustrazione scientifica: le foto libere di questa specie sono rarissime.',
  comportamento: 'Vive in alto, tra le chiome della foresta montana, tra 1.300 e 2.450 m. Ha un richiamo particolare, un «honk-bark» rauco e profondo, diverso da quello di tutte le altre scimmie africane.',
  alimentazione: 'Foglie, frutti, germogli, corteccia, licheni, insetti.',
  sociale: 'Gruppi di 25–40 individui con più maschi.',
  curiosita: 'È stata scoperta dagli scienziati solo nel 2003, anche se le comunità locali la conoscevano da sempre. Nel 2006 è stata descritta come appartenente a un genere nuovo, <em>Rungwecebus</em>, dal nome del Monte Rungwe: era il primo genere nuovo di scimmia africana dal 1923. Grazie alla protezione delle foreste, dal primo censimento la popolazione è cresciuta di circa due terzi.'
},
{
  id: 'abbott', cat: 'altopiani', it: 'Cefalofo di Abbott', en: 'Abbott\'s duiker', sw: '—', sci: 'Cephalophus spadix', iucn: 'EN',
  dove: { ruaha: null, mikumi: null, mpanga: null },
  doveNota: 'Endemico delle foreste montane della Tanzania: Kilimanjaro, Usambara, Udzungwa e la foresta di Livingstone a Kitulo. È schivissimo e quasi solo le fototrappole riescono a documentarlo. Per Mpanga Kipengere non ci sono dati.',
  misure: '50–60 kg · altezza al garrese circa 65 cm.',
  riconoscere: 'Grande cefalofo bruno scuro, quasi nero, con la testa più chiara e una cresta di pelo rossiccio tra le corna, corte e appuntite.',
  simili: 'Il cefalofo comune è molto più piccolo, grigio-bruno e vive nella savana.',
  comportamento: 'Notturno e solitario, nel fitto della foresta.',
  alimentazione: 'Frutti caduti, foglie, germogli.',
  sociale: 'Solitario o in coppia.',
  curiosita: 'È uno dei cefalofi più minacciati d\'Africa, a causa della caccia con i lacci e del disboscamento. Nella foresta di Livingstone è stato documentato soprattutto con le fototrappole dei ricercatori che studiano il kipunji.'
},
{
  id: 'seedeater', cat: 'altopiani', it: 'Verzellino dei Kipengere', en: 'Kipengere seedeater', sw: '—', sci: 'Crithagra melanochroa', iucn: 'LC', alias: ['Tanzania seedeater', 'Serinus melanochrous', 'endemico'],
  dove: { ruaha: null, mikumi: null, mpanga: 'rara' },
  doveNota: 'Prende il nome proprio dalla catena dei Kipengere. È endemico della Tanzania: vive solo nei margini delle foreste montane e negli arbusteti degli altopiani di Njombe e Mbeya (Kipengere, Monte Rungwe) e dei Monti Udzungwa.',
  misure: '15 cm · circa 20 g.',
  riconoscere: 'Piccolo fringillide (parente dei verzellini e dei canarini) bruno scuro e striato, con il becco conico e robusto e una sottile banda chiara sopra l\'occhio. Va cercato ai margini della foresta. Non ho trovato foto con licenza libera.',
  comportamento: 'Discreto, si muove tra i cespugli e le chiome basse in coppie o piccoli gruppi.',
  alimentazione: 'Semi, gemme, frutti.',
  sociale: 'Coppie e piccoli gruppi.',
  curiosita: 'È classificato «a minor preoccupazione», ma BirdLife segnala che la popolazione non è mai stata stimata e probabilmente sta calando per la conversione delle foreste in campi e piantagioni di pini ed eucalipti. Un avvistamento documentato (con foto o su eBird) ha un vero valore scientifico.'
},
{
  id: 'rondine-blu', cat: 'altopiani', it: 'Rondine blu', en: 'Blue swallow', sw: 'Mbayuwayu (nome generico delle rondini)', sci: 'Hirundo atrocaerulea', iucn: 'VU', migratore: true,
  dove: { ruaha: null, mikumi: null, mpanga: 'rara' },
  doveNota: 'Si riproduce nelle praterie umide d\'altura dell\'Africa australe e orientale. Arriva a fine settembre e riparte ad aprile per svernare tra Kenya e Uganda. L\'altopiano di Kitulo è un\'area chiave per la specie. Nel resto della Tanzania meridionale la popolazione è stimata in circa mille individui, sparsi nelle praterie degli altopiani: un avvistamento a Mpanga Kipengere a dicembre è possibile, ma raro.',
  misure: '18–25 cm compresa la coda · circa 13 g.',
  riconoscere: 'Rondine blu-nera metallizzata, uniforme, senza bianco. I maschi hanno filamenti della coda lunghissimi.',
  simili: 'La rondine comune europea, presente in inverno, ha la gola rossa e il ventre chiaro.',
  comportamento: 'Vola basso sopra le praterie di montagna e nidifica in buchi del terreno, doline e vecchie tane di oritteropo.',
  alimentazione: 'Insetti catturati in volo.',
  sociale: 'Coppie territoriali sparse.',
  curiosita: 'È una delle rondini più minacciate d\'Africa: secondo l\'ultima stima la popolazione mondiale conta tra 1.169 e 1.338 coppie. Ogni ettaro di prateria d\'altura convertito in pineta o in campo coltivato le toglie un pezzo di casa.'
},
{
  id: 'vedova-montana', cat: 'altopiani', it: 'Vedova di palude montana', en: 'Mountain marsh widowbird', sw: '—', sci: 'Euplectes psammacromius', iucn: 'LC', alias: ['vedova', 'Euplectes hartlaubi'],
  dove: { ruaha: null, mikumi: null, mpanga: 'rara' },
  doveNota: 'Vive nelle praterie umide d\'altura del sud-ovest della Tanzania, del nord del Malawi e dello Zambia. È tra le specie che Wikipedia indica come caratteristiche della riserva di Mpanga Kipengere (come «marsh widowbird»).',
  misure: 'Il maschio in abito nuziale misura fino a 35–40 cm, coda compresa.',
  riconoscere: 'Il maschio in abito nuziale è nero, con le spalle giallo-arancio e una coda lunga e larga che sventola in volo. Le femmine e i maschi in abito invernale sono bruni e striati, simili a passeri.',
  comportamento: 'Nella stagione delle piogge i maschi fanno voli di parata lenti e ondeggianti sopra le paludi, con la coda aperta.',
  alimentazione: 'Semi di graminacee, insetti.',
  sociale: 'I maschi difendono territori in cui nidificano più femmine.',
  curiosita: 'A dicembre la stagione riproduttiva è nel pieno: è il momento migliore per vedere i maschi nell\'abito più spettacolare.'
},
{
  id: 'cisticola', cat: 'altopiani', it: 'Beccamoschino di Njombe', en: 'Churring cisticola', sw: '—', sci: 'Cisticola njombe', iucn: 'LC', alias: ['cisticola'],
  dove: { ruaha: null, mikumi: null, mpanga: 'media' },
  doveNota: 'Vive solo nelle praterie d\'altura del sud-ovest della Tanzania e del nord del Malawi. Il nome scientifico viene proprio da Njombe, la regione di Mpanga Kipengere e di Mavanga.',
  misure: '13 cm · circa 12 g.',
  riconoscere: 'Piccolo uccellino bruno striato, con la testa rossiccia e la coda corta. Come tutti i beccamoschini si riconosce più dal canto che dall\'aspetto.',
  comportamento: 'Canta da un fusto d\'erba o da un cespuglio, con un trillo ronzante, «churring», che gli dà il nome inglese.',
  alimentazione: 'Piccoli insetti.',
  sociale: 'Coppie territoriali.',
  curiosita: 'Il genere <em>Cisticola</em> conta decine di specie quasi identiche, e i birdwatcher le distinguono soprattutto ascoltandole. È lo stesso genere del beccamoschino che vive nei canneti e nei campi italiani.'
},
{
  id: 'tempeli', cat: 'altopiani', it: 'Camaleonte dal naso tubercolato', en: 'Tubercle-nosed chameleon', sw: 'Kinyonga', sci: 'Trioceros tempeli', iucn: 'NE', alias: ['camaleonte', 'Chamaeleo tempeli'],
  dove: { ruaha: null, mikumi: null, mpanga: 'rara' },
  doveNota: 'Vive sugli alberi e i cespugli delle foreste montane del sud-ovest della Tanzania, tra 1.500 e 2.400 m: Udzungwa, monti dell\'Ubena (Njombe) e dell\'Ukinga (Makete). La foto della scheda è stata scattata a Kitulo. Non ho trovato una valutazione IUCN pubblicata.',
  misure: 'Circa 15–20 cm compresa la coda.',
  riconoscere: 'Verde o bruno, con una piccola protuberanza tubercolata sul muso e due «barbe» di scaglie sotto la gola (in inglese è chiamato anche <em>double-bearded chameleon</em>).',
  simili: 'Il camaleonte dal collo a lembi della savana è più grande, ha lembi mobili dietro la testa e non ha protuberanze sul muso.',
  comportamento: 'Lento e mimetico. Di notte, con la torcia, appare pallido sui rami.',
  alimentazione: 'Insetti.',
  sociale: 'Solitario.',
  curiosita: 'La Tanzania è uno dei paesi più ricchi di camaleonti al mondo, e molte specie vivono su una sola catena montuosa. Ogni altopiano è come un\'isola.'
},
{
  id: 'msuyae', cat: 'altopiani', it: 'Camaleonte di Msuya', en: 'Southern Highlands one-horned chameleon', sw: 'Kinyonga', sci: 'Kinyongia msuyae', iucn: 'NE', alias: ['camaleonte'],
  dove: { ruaha: null, mikumi: null, mpanga: null },
  doveNota: 'Descritto nel 2015 su quattro frammenti di foresta: due sui Monti Udzungwa e due sui Monti Livingstone, a sud-est degli altopiani di Njombe. Per Mpanga Kipengere non ci sono segnalazioni. Non risulta ancora una valutazione IUCN.',
  misure: '10–16 cm compresa la coda.',
  riconoscere: 'Bruno o verde, punteggiato di piccole squame azzurre. I maschi hanno sul muso un corto «corno» che si biforca alla punta.',
  comportamento: 'Vive sugli alberi nei margini della foresta montana.',
  alimentazione: 'Insetti.',
  sociale: 'Solitario.',
  curiosita: 'Porta il nome di Charles A. Msuya, il naturalista tanzaniano che raccolse il primo esemplare. È un esempio di quante specie restino da scoprire negli altopiani meridionali, che gli studiosi considerano tra le zone meno esplorate dell\'Africa orientale.'
},
{
  id: 'orchidee', cat: 'flora', it: 'Orchidee di terra (Disa)', en: 'Ground orchids', sw: '—', sci: 'Disa erubescens subsp. carsonii (sin. Disa stolzii) e altre', iucn: 'NE', alias: ['orchidea', 'orchidee', 'Satyrium', 'Habenaria', 'Holothrix'],
  dove: { ruaha: null, mikumi: null, mpanga: 'rara' },
  doveNota: 'A Kitulo sono state censite circa 45 specie di orchidee terrestri. Secondo l\'ente del turismo tanzaniano 31 sono endemiche della Tanzania, e almeno 3 vivono solo nel parco. La fioritura va da novembre ad aprile, con il picco tra dicembre e marzo: siamo nel momento giusto. Le praterie d\'altura di Mpanga Kipengere hanno ambienti simili, ma non ci sono censimenti pubblicati.',
  misure: 'Steli fiorali da 20 a 60 cm.',
  riconoscere: 'Le Disa hanno fiori arancio, rossi o rosati, con un sepalo superiore a forma di cappuccio. A Kitulo crescono insieme a <em>Satyrium</em> (fiori con due speroni), <em>Habenaria</em> (fiori verdi-bianchi a frange) e <em>Holothrix</em>.',
  comportamento: 'Crescono nell\'erba delle praterie umide. Dopo la fioritura la pianta si ritira in un tubero sotterraneo fino alle piogge successive.',
  curiosita: 'I tuberi di queste orchidee sono la base del <em>chikanda</em>, o <em>kinaka</em>, una specie di «salame vegetale» molto apprezzato in Zambia. La raccolta e il contrabbando di milioni di tuberi dagli altopiani della Tanzania meridionale sono una delle principali minacce per le orchidee della zona.',
  consiglio: 'Fotografate, non raccogliete. Per le foto ravvicinate inginocchiatevi sul sentiero, invece di camminare nell\'erba: è lì che crescono le piante più giovani.'
},
{
  id: 'gloriosa', cat: 'flora', it: 'Gloriosa (giglio di fuoco)', en: 'Flame lily', sw: '—', sci: 'Gloriosa superba', iucn: 'NE', alias: ['giglio'],
  dove: { ruaha: 'rara', mikumi: 'rara', mpanga: 'rara' },
  doveNota: 'Diffusa in gran parte dell\'Africa tropicale, dalla savana agli altopiani. Fiorisce con le piogge, arrampicandosi sui cespugli. La foto della scheda è stata scattata a Kitulo.',
  misure: 'Pianta rampicante fino a 2–3 m · fiori di 8–10 cm.',
  riconoscere: 'Fiori rosso fuoco bordati di giallo, con i petali ondulati e piegati all\'indietro come fiamme. Le foglie terminano con un viticcio.',
  comportamento: 'Si arrampica usando la punta delle foglie come viticci.',
  curiosita: 'È il fiore nazionale dello Zimbabwe. Tutta la pianta, e in particolare il tubero, è molto velenosa: contiene colchicina.',
  consiglio: 'Non toccatela e non lasciatela toccare ai bambini dei villaggi durante le attività. Lavatevi le mani se la maneggiate per sbaglio.'
},
{
  id: 'protea', cat: 'flora', it: 'Protea d\'altura', en: 'Protea', sw: '—', sci: 'Protea sp.', iucn: 'NE', alias: ['protea'],
  dove: { ruaha: null, mikumi: null, mpanga: 'rara' },
  doveNota: 'Gli arbusti di protea crescono nelle praterie e sui pendii rocciosi d\'altura. La foto è stata scattata a Kitulo. Non identifico la specie esatta: in Tanzania meridionale ne vivono diverse.',
  misure: 'Arbusti da 1 a 4 m · infiorescenze di 6–12 cm.',
  riconoscere: 'Arbusti con foglie dure e coriacee. Le grandi infiorescenze a coppa, crema o rosate, sono circondate da brattee simili a petali.',
  comportamento: 'Resiste agli incendi stagionali delle praterie grazie alla corteccia spessa, e ricaccia dalla base.',
  curiosita: 'Le protee sono il simbolo del Sudafrica e del Capo, ma la famiglia ha origini antichissime, nel supercontinente Gondwana. Le specie degli altopiani tanzaniani sono le «cugine» tropicali delle protee del Capo.'
},
{
  id: 'dierama', cat: 'flora', it: 'Dierama (canna d\'angelo)', en: 'Angel\'s fishing rod', sw: '—', sci: 'Dierama pendulum', iucn: 'NE', alias: ['iris'],
  dove: { ruaha: null, mikumi: null, mpanga: 'rara' },
  doveNota: 'La pianta della foto, scattata nelle praterie di Kitulo, è identificata dall\'autore come <em>Dierama pendulum</em>; in Africa orientale vivono anche specie molto simili. Il genere appartiene alla famiglia degli iris ed è tipica delle praterie montane dell\'Africa orientale e australe.',
  misure: 'Steli sottili e arcuati, alti 60–150 cm.',
  riconoscere: 'Fiori a campanula rosa-magenta, che pendono da steli lunghissimi e sottili, piegati come canne da pesca. Le foglie sono strette, simili all\'erba.',
  curiosita: 'In inglese si chiama <em>angel\'s fishing rod</em>, «canna da pesca degli angeli»: con il vento i fiori oscillano come esche appese a una lenza.'
},
{
  id: 'lobelia', cat: 'flora', it: 'Lobelia di Mildbraed', en: 'Mildbraed\'s lobelia', sw: '—', sci: 'Lobelia mildbraedii', iucn: 'NE', alias: ['lobelia'],
  dove: { ruaha: null, mikumi: null, mpanga: 'rara' },
  doveNota: 'Fotografata a Kitulo, nelle zone umide d\'altura. Le lobelie giganti sono tra le piante più caratteristiche delle montagne dell\'Africa orientale.',
  misure: 'Rosetta di foglie da cui spunta una spiga fiorale alta 1–2 m.',
  riconoscere: 'Una lunga colonna cilindrica, fitta di fiori e brattee verdi o bluastre, che si alza da una rosetta di foglie.',
  comportamento: 'Cresce lentamente per anni prima di produrre la grande spiga fiorale, impollinata soprattutto da uccelli e insetti.',
  curiosita: 'Le lobelie giganti si sono evolute in modo indipendente su diverse montagne africane: è un esempio classico di «evoluzione convergente». Anche sul Kilimanjaro e sul Kenya ne vivono specie simili.'
},
{
  id: 'moraea', cat: 'flora', it: 'Moraea di Kitulo', en: 'Moraea', sw: '—', sci: 'Moraea callista', iucn: 'NE', alias: ['iris', 'giaggiolo'],
  dove: { ruaha: null, mikumi: null, mpanga: 'rara' },
  doveNota: 'Endemica della Tanzania, secondo le banche dati botaniche (POWO). I campioni noti vengono dall\'area di Kitulo, nel distretto di Makete, nella stessa regione di Njombe.',
  misure: 'Pianta erbacea alta 30–50 cm · fiori di 5–7 cm.',
  riconoscere: 'Un piccolo iris selvatico: tre grandi petali esterni viola-azzurri, con una macchia gialla alla base, e tre petali interni più piccoli.',
  comportamento: 'Ogni fiore dura spesso un solo giorno, ma la pianta ne produce molti in successione.',
  curiosita: 'Il genere <em>Moraea</em> conta circa 200 specie, quasi tutte africane. È uno dei generi di bulbose più ricchi del continente.'
},
{
  id: 'commelina', cat: 'flora', it: 'Commelina di Kitulo', en: 'Kitulo dayflower', sw: '—', sci: 'Commelina kituloensis', iucn: 'NE', alias: ['commelina'],
  dove: { ruaha: null, mikumi: null, mpanga: null },
  doveNota: 'Il nome stesso dice dove vive: le poche raccolte note vengono dalle praterie di Kitulo, a oltre 2.700 m. Non risultano segnalazioni da Mpanga Kipengere.',
  misure: 'Pianta erbacea bassa · fiori di 2–3 cm.',
  riconoscere: 'Fiori bianchi o azzurro chiaro con due petali più grandi, che spuntano da una brattea verde ripiegata a barchetta.',
  comportamento: 'Come tutte le commeline, i fiori si aprono al mattino e appassiscono in giornata (in inglese sono le <em>dayflower</em>).',
  curiosita: 'Molte piante di Kitulo sono state descritte da raccolte fatte in pochi punti del plateau. Una foto ben fatta, con la data e il luogo, può essere utile ai botanici: caricatela su iNaturalist.'
},
{
  id: 'ginepro', cat: 'flora', it: 'Ginepro africano («cedro» dell\'Africa orientale)', en: 'East African pencil cedar', sw: '—', sci: 'Juniperus procera', iucn: 'LC', alias: ['cedro', 'ginepro'],
  dove: { ruaha: null, mikumi: null, mpanga: 'rara' },
  doveNota: 'È uno degli alberi tipici delle foreste montane secche dell\'Africa orientale, presente anche nelle foreste di Kitulo e degli altopiani meridionali. Molte delle foreste della riserva di Mpanga Kipengere sono di tipo montano.',
  misure: 'Albero alto 25–40 m (eccezionalmente oltre).',
  riconoscere: 'Conifera alta e slanciata, con la chioma conica e scura, la corteccia fibrosa bruno-rossiccia e le foglie piccole, a squame. Le «bacche» sono bluastre.',
  comportamento: 'Cresce nelle foreste montane tra circa 1.500 e 3.000 m.',
  curiosita: 'È il ginepro più alto del mondo e l\'unico che cresce naturalmente nell\'emisfero australe. Il suo legno profumato e resistente alle termiti è stato sfruttato a lungo per pali, matite e costruzioni, e in molte zone è diventato raro.'
}
]);
