// Extra uitleg per groep: wat kun je ermee, wat heb je nodig
const VOOROPLEIDING = {
  mbo: "een vmbo-diploma; voor niveau 4 meestal vmbo-tl/gl of kader. Zonder diploma kan Entree (niveau 1)",
  hbo: "havo, vwo of mbo-4",
  wo: "vwo (of een hbo-propedeuse)",
  ad: "havo, vwo of mbo-4"
};
const FAM_EXTRA = {
  onderwijs: { e: "🍎", kunJe: ["Leraar op de basisschool of middelbare school", "Onderwijskundige of schoolleider", "Begeleider of remedial teacher", "Opleider of trainer in bedrijven"], profiel: "Vaak geen vast profiel, maar je moet goed zijn in taal en rekenen (toets bij de pabo). Voor een tweedegraads lerarenopleiding helpt het als je het vak zelf goed beheerst.", eigen: ["Geduld en uitleggen", "Plezier in kinderen of jongeren", "Rustig blijven in een drukke klas"] },
  design: { e: "🎨", kunJe: ["Ontwerper of vormgever", "Art director of creatief concept bedenken", "Maker van film, foto of games", "Interieurontwerper of modeontwerper"], profiel: "Meestal toelating via portfolio of talentselectie. Je profiel is minder belangrijk dan wat je zelf laat zien.", eigen: ["Nieuwsgierig en doorzetten", "Tegen kritiek kunnen", "Zelf veel maken en oefenen"] },
  muziek: { e: "🎭", kunJe: ["Musicus, acteur of danser", "Docent muziek of theater", "Regisseur of producent", "Podium- of festivalwerk"], profiel: "Toelating gaat via een auditie of selectie. De vooropleiding telt minder zwaar.", eigen: ["Veel oefenen en discipline", "Tegen afwijzing kunnen", "Durven laten zien wat je maakt"] },
  talen: { e: "📚", kunJe: ["Vertaler of tolk", "Docent of tekstschrijver", "Onderzoeker", "Werken bij musea, uitgeverijen of de overheid"], profiel: "Op het wo meestal vwo. Je moet goed zijn in lezen en schrijven in de taal of het vak dat je kiest.", eigen: ["Veel lezen en schrijven", "Nieuwsgierig naar cultuur", "Precies met woorden zijn"] },
  gedrag: { e: "🧠", kunJe: ["Psycholoog (na een master en vervolgopleiding)", "Onderzoeker of beleidsmedewerker", "Coach, trainer of HR-adviseur", "Werken bij overheid, zorg of bedrijven"], profiel: "Op het wo meestal vwo. Wiskunde A of B helpt, want er is veel statistiek.", eigen: ["Statistiek moet niet eng zijn", "Nieuwsgierig naar mensen", "Zelf onderzoek willen doen"] },
  communicatie: { e: "📣", kunJe: ["Communicatieadviseur of woordvoerder", "Journalist of redacteur", "Contentmaker of social media-specialist", "Marketingcommunicatie"], profiel: "Meestal geen vast profiel. Bij journalistiek is vaak een selectie of schrijfopdracht.", eigen: ["Goed schrijven", "Nieuwsgierig en snel werken", "Makkelijk contact maken"] },
  economie: { e: "💶", kunJe: ["Accountant of financieel adviseur", "Econoom of analist", "Belastingadviseur", "Werken bij een bank of verzekeraar"], profiel: "Economie en wiskunde (A of B) helpen. Voor wo-economie en econometrie is wiskunde B vaak belangrijk.", eigen: ["Goed met cijfers", "Nauwkeurig", "Interesse in geld en markten"] },
  management: { e: "🧩", kunJe: ["Manager of teamleider", "Adviseur of consultant", "Ondernemer", "Projectleider"], profiel: "Meestal geen vast profiel. Economie en wiskunde A helpen. Bij Engelstalige varianten wordt je Engels getoetst.", eigen: ["Samenwerken en organiseren", "Presenteren", "Leiding durven nemen"] },
  marketing: { e: "🛍️", kunJe: ["Marketeer of merkmanager", "Accountmanager of verkoper", "Productmanager", "E-commerce-specialist"], profiel: "Geen vast profiel. Economie of wiskunde A kan helpen.", eigen: ["Creatief én analytisch", "Klantgericht", "Plezier in overtuigen"] },
  recht: { e: "⚖️", kunJe: ["Advocaat of rechter (met vervolgopleiding)", "Jurist bij overheid of bedrijf", "Beleidsadviseur", "Notaris of belastingadviseur (na een master)"], profiel: "Geen vast profiel, maar je moet veel lezen en goed redeneren. Op het wo is vwo gebruikelijk.", eigen: ["Veel lezen en onthouden", "Argumenten bedenken", "Precies werken"] },
  natuur: { e: "🔬", kunJe: ["Onderzoeker", "Labmedewerker", "Docent natuurwetenschappen", "Adviseur bij overheid of industrie"], profiel: "Vaak een natuurprofiel (N&T of N&G). Voor natuurkunde, scheikunde en wiskunde is wiskunde B meestal nodig.", eigen: ["Doorzetten", "Nauwkeurig", "Plezier in uitzoeken waarom"] },
  ict: { e: "💻", kunJe: ["Software developer", "Data-analist of data scientist", "Security specialist", "Systeembeheerder of IT-consultant"], profiel: "Wiskunde wordt vaak gevraagd (A, B of C). Voor het wo vaak wiskunde B. Voor het hbo kan ook mbo-ICT.", eigen: ["Logisch nadenken", "Geduld bij fouten zoeken", "Zelf willen uitproberen"] },
  techniek: { e: "⚙️", kunJe: ["Ingenieur of ontwerper", "Technisch adviseur", "Productiemanager", "Onderzoeker in de industrie"], profiel: "Op het wo meestal N&T met wiskunde B. Voor het hbo ook N&G, of mbo-techniek.", eigen: ["Praktisch en nieuwsgierig", "Plezier in rekenen en bouwen", "Samenwerken in een project"] },
  bouw: { e: "🏗️", kunJe: ["Architect of bouwkundig ontwerper", "Constructeur of projectleider", "Planoloog of stedenbouwkundige", "Uitvoerder op de bouw"], profiel: "Een natuurprofiel helpt, voor het wo vaak wiskunde B. Voor hbo ook mbo-bouw.", eigen: ["Ruimtelijk inzicht", "Tekenen en ontwerpen", "Praktisch denken"] },
  groen: { e: "🌱", kunJe: ["Ecoloog of natuurbeheerder", "Adviseur duurzaamheid of landbouw", "Agrarisch ondernemer", "Dierverzorger of dierenarts (met selectie)"], profiel: "Een natuurprofiel helpt. Voor het hbo ook mbo-groen. Diergeneeskunde heeft selectie.", eigen: ["Graag buiten werken", "Zorg voor dieren of planten", "Praktisch werken"] },
  zorg: { e: "🩺", kunJe: ["Verpleegkundige", "Arts, tandarts of apotheker (wo)", "Verloskundige", "Medisch of laboratoriumtechnicus"], profiel: "Meestal Natuur & Gezondheid (N&G) of N&T. Geneeskunde, tandheelkunde en verloskunde hebben vaak loting of selectie.", eigen: ["Medeleven en verantwoordelijkheid", "Tegen stress en onregelmatige uren kunnen", "Netjes en precies"] },
  therapie: { e: "🏃", kunJe: ["Fysiotherapeut", "Ergotherapeut of logopedist", "Sportcoach of leefstijlcoach", "Diëtist"], profiel: "Natuur & Gezondheid of N&T helpt. Er zijn vaak veel aanmeldingen, dus selectie of loting.", eigen: ["Contact met mensen", "Geduld", "Plezier in bewegen en gezondheid"] },
  sociaal: { e: "🤝", kunJe: ["Maatschappelijk werker", "Jeugdzorgwerker", "Wijkcoach of jongerenwerker", "Begeleider in de gehandicaptenzorg"], profiel: "Geen vast profiel. Mbo-4, havo of vwo.", eigen: ["Goed luisteren", "Grenzen kunnen stellen", "Veerkracht"] },
  horeca: { e: "🏨", kunJe: ["Hotelmanager of restaurantmanager", "Eventplanner", "Reisadviseur", "Facility manager"], profiel: "Geen vast profiel. Talen en klantgerichtheid helpen. Vaak veel stage in de praktijk.", eigen: ["Gastvrij en flexibel", "Organiseren", "Werken als anderen vrij zijn"] },
  veilig: { e: "🛡️", kunJe: ["Beveiligingsadviseur", "Politie of defensie (met selectie)", "Logistiek manager", "Piloot of scheepsofficier (met selectie)"], profiel: "Politie, defensie en luchtvaart hebben strenge selecties (gezondheid, conditie). Logistiek en beveiliging zijn toegankelijker.", eigen: ["Alert en verantwoordelijk", "Fit en gezond", "Rustig onder druk"] }
};

// Wat heb je nodig, per uitgelichte studie
const STUDIE_NODIG = {
  verpleegkunde: "Mbo-4 of hbo: havo of mbo-4. Natuur & Gezondheid helpt. Je moet tegen nachtdiensten, ziekte en verdriet kunnen.",
  fysio: "Havo of vwo (of mbo-4 met extra eisen). Natuur & Gezondheid of N&T. Er is vaak selectie of loting. Goed zijn in bewegen helpt niet, maar je moet wel gemotiveerd zijn voor veel anatomie.",
  sport: "Havo of vwo. Geen vast profiel, wel conditie en belangstelling voor bewegen. Soms een sporttest.",
  ba: "Havo of vwo. Geen vast profiel. Economie en wiskunde A helpen. Je moet goed kunnen samenwerken en presenteren.",
  iba: "Havo of vwo. Goed Engels: de opleiding is Engelstalig. Soms een taaltest of motivatiegesprek.",
  marketing: "Havo, vwo of mbo-4. Geen vast profiel. Economie of wiskunde A helpt.",
  hrm: "Havo, vwo of mbo-4. Goed met mensen kunnen praten en je kunt omgaan met vertrouwelijke dingen.",
  informatica: "Hbo: havo, vwo of mbo-ICT. Wo: vwo met wiskunde B (soms wiskunde A of C volstaat). Je moet logisch kunnen denken.",
  datascience: "Wiskunde A of B, voor het wo meestal wiskunde B. Programmeren leer je op de opleiding. Doorzetten bij moeilijke wiskunde.",
  softdev: "Mbo: vmbo-diploma (voor mbo-4 vaak vmbo tl of kader). Je hoeft nog niet te kunnen programmeren, wel logisch denken.",
  ct: "Wiskunde A, B of C; soms aanvullende toets of motivatiebrief. Je moet zowel techniek als bedenken leuk vinden.",
  ido: "Meestal N&T met wiskunde B voor het wo. Voor het hbo ook N&G of mbo-techniek. Tekenen of ontwerpen helpt, je krijgt het ook geleerd.",
  cmd: "Havo, vwo of mbo-4. Geen vast profiel. Vaak een motivatie- of portfolio-opdracht. Je moet kunnen samenwerken.",
  mediamaker: "Vmbo-diploma, vaak een intakegesprek of portfolio. Plezier in zelf maken is belangrijker dan een mooie vooropleiding.",
  mic: "Havo of vwo. Geen vast profiel. Goed kunnen schrijven en lezen.",
  creativebiz: "Havo, vwo of mbo-4. Vaak een motivatie en een idee. Je moet creatief zijn én durven te ondernemen.",
  psychologie: "Wo: vwo, wiskunde A of B helpt voor de statistiek. Hbo: havo, vwo of mbo-4. Veel lezen en leren van onderzoek.",
  sw: "Mbo-4 of havo. Geen vast profiel. Ervaring met vrijwilligerswerk of bijbaantjes in de zorg of jeugdwerk helpt.",
  recht: "Wo: vwo, geen vast profiel. Veel lezen en schrijven, vaak een BSA waarbij je minstens 45 van de 60 punten moet halen in het eerste jaar.",
  pabo: "Havo, vwo of mbo-4 (mbo-4 met extra vakken). Toets op taal en rekenen vóór of tijdens de opleiding.",
  biomed: "Vwo met natuurprofiel (N&G of N&T). Wiskunde en scheikunde helpen. Soms een extra toets of selectie.",
  las: "Vwo, vaak selectie met motivatiebrief en gesprek. Je moet zelf kunnen plannen en kiezen.",
  biologie: "Hbo: havo of mbo-groen. Wo: vwo met natuurprofiel. Buiten werken, lab en data allemaal mogelijk."
};

// Woordenlijst
const WOORDEN = [
  ["🎓", "Bachelor", "De eerste opleiding op hbo of wo. Duur: 4 jaar (hbo) of 3 jaar (wo)."],
  ["🎒", "Master", "Een vervolgopleiding na je bachelor, meestal 1 of 2 jaar. Voor sommige beroepen heb je er een nodig, zoals psycholoog."],
  ["📊", "ECTS (studiepunten)", "De ‘munteenheid’ van studeren. 60 punten is een jaar fulltime studeren. Een bachelor op het hbo is 240, op het wo 180."],
  ["🥇", "Associate degree (AD)", "Een korte hbo-opleiding van 2 jaar. Je kunt daarna werken of doorstromen naar de bachelor."],
  ["🌱", "Propedeuse", "Het eerste jaar van je hbo- of wo-opleiding. Als je dit haalt, krijg je een getuigschrift."],
  ["⚠️", "BSA (bindend studieadvies)", "Haal je in het eerste jaar te weinig punten, dan moet je stoppen met de opleiding. Meestal 45 van de 60 punten op het hbo."],
  ["🎟️", "Numerus fixus, loting, selectie", "Een opleiding heeft maar beperkte plekken. Je wordt toegelaten via een loting, of via selectie (brief, gesprek, test)."],
  ["🧬", "Profiel (N&T, N&G, E&M, C&M)", "Je profielkeuze op havo of vwo: Natuur & Techniek, Natuur & Gezondheid, Economie & Maatschappij, Cultuur & Maatschappij. Sommige studies eisen een bepaald profiel."],
  ["🏫", "Hogeschool of universiteit", "Hogeschool (hbo) is praktijkgericht voor een beroep. Universiteit (wo) is theoretisch en gericht op onderzoek."],
  ["🔁", "Voltijd, deeltijd, duaal", "Voltijd is fulltime studeren. Deeltijd is naast je werk of gezin. Duaal is combineren van een opleiding met een betaalde baan."],
  ["🧪", "Minor", "Een half jaar waarin je iets anders kiest dan je studie: een ander vak, een andere stad of het buitenland."],
  ["💼", "Stage", "Werken bij een echt bedrijf of instelling als onderdeel van je studie. Op het hbo vaak 3 maanden tot een half jaar."],
  ["🔎", "Meeloopdag, open dag, proefstuderen", "Je loopt een dag mee met studenten of bezoekt de school. Met één dag weet je vaak al of een opleiding bij je past."],
  ["🔀", "Doorstromen", "Van mbo naar hbo, of van hbo naar wo. Het kan, soms met een extra schakeljaar of toets."],
  ["📋", "Accreditatie", "Een officiële goedkeuring dat een opleiding aan de kwaliteitseisen voldoet. Alleen dan krijg je een erkend diploma."],
  ["💸", "Studiefinanciering en collegegeld", "Je betaalt collegegeld, en kunt een beurs en lening krijgen via DUO. De regels veranderen, dus check de actuele bedragen op duo.nl."]
];

// Engelse naam -> letterlijke vertaling -> wat het echt is
const VERTAAL = [
  ["Creative Technology", "Creatieve technologie", "Slimme dingen bedenken en bouwen", "Je bouwt interactieve producten, zoals een game, een slimme lamp of een app. Een mix van techniek en ontwerpen."],
  ["Business Administration", "Bedrijfsbeheer", "Bedrijfskunde", "Hoe een bedrijf werkt: geld, mensen, markt en strategie."],
  ["Communication & Multimedia Design", "Communicatie- en multimediaontwerp", "Websites en apps ontwerpen", "Je bedenkt en maakt websites, apps en beelden waar mensen iets mee doen."],
  ["Liberal Arts & Sciences", "Vrije kunsten en wetenschappen", "Zelf je vakken samenstellen", "Een brede universitaire opleiding waarin je zelf kiest wat je leert, van natuur tot maatschappij."],
  ["Facility Management", "Beheer van voorzieningen", "Gebouwen en diensten regelen", "Je zorgt dat een gebouw goed werkt: schoonmaak, catering, veiligheid en ruimte."],
  ["Human Resource Management", "Beheer van ‘menselijke middelen’", "Personeelszaken", "Je zorgt dat een organisatie de juiste mensen heeft en dat zij gezond en gemotiveerd werken."],
  ["Mechatronics", "Mechatronica: mechanica + elektronica", "Robots en slimme machines", "Mechanica, elektronica en software tegelijk. Denk aan robots, drones en slimme productiemachines."],
  ["Cyber Security", "Digitale beveiliging", "Computers en data beschermen", "Je beschermt systemen en gegevens tegen hackers en snapt hoe aanvallen werken."],
  ["Applied Data Science & AI", "Toegepaste datawetenschap en kunstmatige intelligentie", "Data en slimme computers", "Je haalt inzichten uit data en laat computers dingen leren. Veel programmeren en statistiek."],
  ["Industrial Design Engineering", "Industrieel ontwerp en techniek", "Producten ontwerpen", "Je ontwerpt producten die werken én mooi zijn, van koptelefoon tot medisch apparaat."],
  ["Sports Management", "Sportbeheer", "Sportorganisaties leiden", "Je organiseert sport, evenementen en clubs. Meer bedrijfskunde dan zelf sporten."],
  ["Logistics Engineering", "Logistieke techniek", "Goederenstromen organiseren", "Hoe komt iets van een fabriek naar jouw huis? Dat ontwerp en regel je."]
];

// Engelse termen in de uitleg met hun gewone Nederlandse woord.
// De site zet de vertaling er automatisch tussen haakjes achter (eerste keer per tekst).
const TERMEN = [
  ["account manager", "vertegenwoordiger"],
  ["business administration", "bedrijfskunde"],
  ["international business", "internationaal ondernemen"],
  ["human resource management", "personeelszaken"],
  ["creative technology", "creatieve techniek"],
  ["creative business", "creatief ondernemen"],
  ["marketing management", "reclame, verkoop en bedrijfsvoering"],
  ["facility management", "beheer van gebouwen en diensten"],
  ["facility manager", "hoofd facilitaire zaken"],
  ["industrial design engineering", "industrieel productontwerpen"],
  ["applied data science", "toegepaste datawetenschap"],
  ["artificial intelligence", "kunstmatige intelligentie"],
  ["applied psychology", "toegepaste psychologie"],
  ["psychology", "psychologie"],
  ["social work", "sociaal werk"],
  ["international law", "internationaal recht"],
  ["law", "rechten"],
  ["computer science", "informatica"],
  ["physiotherapy", "fysiotherapie"],
  ["nursing", "verpleegkunde"],
  ["sports studies", "sportopleiding"],
  ["human movement", "bewegingswetenschappen"],
  ["biomedical sciences", "biomedische wetenschappen"],
  ["biology", "biologie"],
  ["future planet studies", "studie naar de toekomst van de aarde"],
  ["university college", "kleinschalige, brede universitaire bachelor"],
  ["primary education", "basisonderwijs"],
  ["media design", "mediaontwerp"],
  ["media creator", "mediamaker"],
  ["communication", "communicatie"],
  ["mechatronics", "mechatronica"],
  ["cyber security", "digitale beveiliging"],
  ["sports management", "leiding geven aan sportorganisaties"],
  ["logistics engineering", "logistieke techniek"],
  ["data science", "datawetenschap"],
  ["data scientist", "datawetenschapper"],
  ["software developer", "softwareontwikkelaar"],
  ["game developer", "maker van computerspellen"],
  ["developer", "ontwikkelaar"],
  ["machine-learning engineer", "ontwikkelaar van zelflerende computersystemen"],
  ["machine learning", "zelflerende computersystemen"],
  ["design engineer", "technisch ontwerper"],
  ["engineering", "techniek"],
  ["engineer", "ingenieur"],
  ["UX- of UI-designer", "ontwerper van apps en websites, gericht op de gebruiker"],
  ["webdesigner", "websiteontwerper"],
  ["designer", "ontwerper"],
  ["design", "ontwerp"],
  ["security specialist", "beveiligingsspecialist"],
  ["security", "beveiliging"],
  ["IT-consultant", "ICT-adviseur"],
  ["consultant", "adviseur"],
  ["marketeer", "specialist in reclame en verkoop"],
  ["marketing", "reclame en verkoop"],
  ["innovatiemanager", "leider van vernieuwingsprojecten"],
  ["productmanager", "verantwoordelijke voor een product"],
  ["hotelmanager", "hoteldirecteur"],
  ["restaurantmanager", "bedrijfsleider van een restaurant"],
  ["HR-manager", "hoofd personeelszaken"],
  ["HR-adviseur", "personeelsadviseur"],
  ["HRM", "personeelszaken"],
  ["HR", "personeelszaken"],
  ["management", "leidinggeven en organiseren"],
  ["manager", "leidinggevende"],
  ["recruiter", "personeelswerver"],
  ["leefstijlcoach", "begeleider bij een gezonde leefstijl"],
  ["coachen", "begeleiden"],
  ["coach", "begeleider"],
  ["e-commerce", "online verkoop"],
  ["social media", "sociale media"],
  ["contentstrateeg", "bedenker van wat een organisatie online publiceert"],
  ["contentmaker", "maker van online teksten, foto's en video's"],
  ["content", "teksten, foto's en video's"],
  ["prototypes", "proefmodellen"],
  ["prototype", "proefmodel"],
  ["pitchen", "je idee kort presenteren"],
  ["front-end", "de voorkant van websites en apps"],
  ["compliance", "toezicht op het naleven van regels"],
  ["portfolio", "map met je eigen werk"],
  ["zzp'er", "zelfstandige zonder personeel"],
  ["start-ups", "jonge, snelgroeiende bedrijven"],
  ["eventplanner", "evenementenorganisator"],
  ["art director", "creatief leider"],
  ["minor", "keuzeblok"],
  ["associate degree", "tweejarige hbo-opleiding"],
  ["feedback", "reactie op je werk"],
  ["business", "zakenwereld"],
  ["Python", "een programmeertaal"],
  ["AI", "kunstmatige intelligentie"]
];

// Doorvragen: na de gewone vragen wordt verder gevraagd binnen je twee sterkste richtingen.
// Dit verfijnt alleen welke groep opleidingen het best past; de andere richtingen tellen gewoon mee.
// [groep, vraag]. Voor ouders wordt "Ik wil" automatisch "Mijn kind wil".
const DIEP = {
  tech: [["ict", "Ik wil software, apps of slimme systemen bouwen."], ["techniek", "Ik wil machines, energie of robots ontwerpen."], ["bouw", "Ik wil gebouwen, wegen of wijken ontwerpen."]],
  zorg: [["zorg", "Ik wil zieke mensen verzorgen of behandelen."], ["therapie", "Ik wil mensen helpen bewegen, herstellen of fit blijven."], ["natuur", "Ik wil in een lab uitzoeken hoe ziektes ontstaan."]],
  weten: [["natuur", "Ik wil proeven doen en dingen meten in een lab."], ["groen", "Ik wil buiten werken met natuur, dieren of voedsel."], ["ict", "Ik wil met data en computers grote vragen beantwoorden."]],
  creatief: [["design", "Ik wil beelden, ontwerpen of films maken."], ["muziek", "Ik wil muziek maken, spelen of dansen op een podium."], ["communicatie", "Ik wil schrijven en verhalen vertellen."]],
  mens: [["onderwijs", "Ik wil kinderen of jongeren iets leren."], ["sociaal", "Ik wil mensen met problemen verder helpen."], ["recht", "Ik wil bezig zijn met regels, recht en politiek."], ["gedrag", "Ik wil snappen hoe mensen denken en doen."], ["talen", "Ik wil talen, culturen of geschiedenis bestuderen."]],
  bedrijf: [["management", "Ik wil leidinggeven en dingen organiseren."], ["marketing", "Ik wil verkopen en klanten overtuigen."], ["economie", "Ik wil met geld, cijfers en economie werken."], ["horeca", "Ik wil werken in gastvrijheid, reizen of evenementen."]]
};

// Waar je vaak een toelatingsexamen, auditie, portfolio, loting of selectie tegenkomt
const SELECTIE = {
  design: "Vaak een portfolio of toelatingsopdracht.",
  muziek: "Bijna altijd een auditie.",
  zorg: "Bij onder meer geneeskunde, tandheelkunde en verloskunde selectie of loting.",
  therapie: "Bij onder meer fysiotherapie vaak selectie.",
  veilig: "Bij politie, defensie en luchtvaart een strenge selectie.",
  groen: "Bij diergeneeskunde selectie.",
  gedrag: "Bij sommige universiteiten selectie voor psychologie."
};

// Persona's: verzonnen voorbeelden van studenten, om je in te herkennen (of juist niet)
const PERSONAS = {
  tech: [
    { naam: "Daan, 19", studie: "hbo Informatica", tekst: "Gamede veel en begon zelf kleine programma's te maken. Puzzelt door tot iets werkt en werkt het liefst met een paar mensen aan één project." },
    { naam: "Noor, 18", studie: "wo Werktuigbouwkunde", tekst: "Vond wiskunde prima, maar het bouwen van een zeepkist het leukst. Wil later meewerken aan duurzame energie." }
  ],
  zorg: [
    { naam: "Lisa, 18", studie: "hbo Verpleegkunde", tekst: "Werkte als bijbaan in een verpleeghuis en merkte dat ze rustig blijft als het spannend wordt. Houdt van afwisseling en van mensen." },
    { naam: "Youssef, 19", studie: "hbo Fysiotherapie", tekst: "Voetbalt al jaren en kwam zelf bij de fysio na een blessure. Snapt graag hoe het lichaam werkt en coacht nu de jeugd." }
  ],
  weten: [
    { naam: "Emma, 18", studie: "wo Biomedische wetenschappen", tekst: "Wil van alles weten waarom het zo werkt. Vindt het niet erg om lang aan één vraag te werken en houdt van precies werk." },
    { naam: "Bram, 19", studie: "hbo Bos- en natuurbeheer", tekst: "Zit het liefst buiten, kent alle vogels in de buurt en wil iets doen aan natuur en klimaat." }
  ],
  creatief: [
    { naam: "Sara, 18", studie: "hbo Communicatie & multimediaontwerp", tekst: "Maakt al jaren eigen video's en ontwerpen. Kan goed tegen kritiek en wil dingen maken waar mensen iets mee doen." },
    { naam: "Milan, 20", studie: "Conservatorium", tekst: "Speelt sinds zijn achtste gitaar en oefent elke dag. Weet dat het een harde wereld is, maar kan zich niets anders voorstellen." }
  ],
  mens: [
    { naam: "Fatima, 18", studie: "hbo Pabo", tekst: "Gaf bijles aan kinderen uit de buurt en vond het mooiste als het kwartje viel. Geduldig en goed in uitleggen." },
    { naam: "Thomas, 19", studie: "wo Rechten", tekst: "Kan eindeloos discussiëren en leest graag. Wil weten hoe regels werken en wat eerlijk is." }
  ],
  bedrijf: [
    { naam: "Jesse, 18", studie: "hbo Bedrijfskunde", tekst: "Had een bijbaan in de supermarkt en dacht steeds na over hoe het slimmer kon. Neemt graag de leiding in een groep." },
    { naam: "Mila, 19", studie: "hbo Hotelmanagement", tekst: "Werkte in een strandtent en vindt het heerlijk als gasten een goede avond hebben. Organiseert graag en is flexibel." }
  ]
};

// Stappenplan: hoe kom je daar? (algemene regels; check altijd de opleiding zelf)
const ROUTE = [
  ["Havo 4 / vwo 4–5", "Kies je profiel en ontdek wat je leuk vindt", "Je profiel bepaalt voor een deel welke studies open staan. Twijfel je? Een breed profiel houdt meer deuren open."],
  ["Najaar en voorjaar", "Ga naar open dagen en meeloopdagen", "Bekijk in het tabblad Open dagen wanneer scholen open zijn. Eén dag meelopen zegt meer dan tien websites."],
  ["Uiterlijk 15 januari", "Aanmelden bij loting of selectie", "Voor opleidingen met een beperkt aantal plekken (numerus fixus) meld je je vóór 15 januari aan via Studielink, de landelijke aanmeldsite."],
  ["Uiterlijk 1 mei", "Aanmelden via Studielink", "Voor de meeste opleidingen meld je je vóór 1 mei aan. Dan heb je recht op een studiekeuzecheck en word je in principe toegelaten als je aan de eisen voldoet."],
  ["Mei – juni", "De studiekeuzecheck", "Veel opleidingen nodigen je uit voor een kennismaking: een opdracht, vragenlijst of gesprek. Het is een advies, geen examen."],
  ["Minstens 3 maanden voor de start", "Geld regelen bij DUO", "Vraag studiefinanciering aan bij DUO, de dienst die het geld voor je studie regelt. Daarvoor heb je je DigiD nodig."],
  ["Voorjaar en zomer", "Woonruimte en reizen", "Ga je op kamers, begin dan vroeg met zoeken. Blijf je thuis wonen, kijk dan hoe lang je reist. Met je studentenreisproduct van DUO reis je goedkoper met het ov."],
  ["Vanaf je 18e", "Zorgverzekering en andere zaken", "Vanaf je 18e moet je zelf een zorgverzekering hebben. Misschien kun je zorgtoeslag krijgen."],
  ["September", "Je eerste studiedag", "De introductieweek helpt je je weg te vinden. Het eerste jaar heet de propedeuse."]
];

// Uitgelichte studie -> groep in de lijst met alle opleidingen
const STUDIE_FAM = { verpleegkunde: "zorg", fysio: "therapie", sport: "therapie", ba: "management", iba: "management", marketing: "marketing", hrm: "management", informatica: "ict", datascience: "ict", ct: "ict", ido: "techniek", cmd: "design", mic: "communicatie", creativebiz: "design", psychologie: "gedrag", sw: "sociaal", recht: "recht", pabo: "onderwijs", biomed: "natuur", las: "natuur", biologie: "natuur" };

// Gespreksgids voor ouders: [titel, waarom, vragen om te stellen, liever niet zeggen]
const GESPREK = [
  ["1. Het gesprek beginnen", "Kies een ontspannen moment: in de auto, tijdens het koken of bij een wandeling. Niet vlak na een slecht cijfer of als er haast is.",
    ["Waar ben je de laatste tijd mee bezig dat je echt leuk vindt?", "Waar raak je de tijd bij kwijt?", "Wat vinden je vrienden van hun studiekeuze?"],
    ["“Je moet nu toch eens weten wat je wilt.”", "“Toen ik zo oud was als jij …”"]],
  ["2. Doorvragen zonder te sturen", "Je hoeft geen antwoord te hebben. Vraag door op wat je kind zegt, ook als het vaag is.",
    ["Wat spreekt je daar precies in aan?", "Hoe zie je een gewone werkdag voor je?", "Wat zou je juist níét willen doen?"],
    ["“Daar kun je toch niks mee verdienen.”", "“Dat is niks voor jou.”"]],
  ["3. Samen uitzoeken", "Maak het concreet. Vul allebei de Padvinder in en vergelijk de uitslagen: de verschillen zijn het interessantste gesprek.",
    ["Welke twee of drie opleidingen zullen we beter bekijken?", "Naar welke open dag gaan we samen?", "Kennen we iemand die dit werk doet en die je iets kunt vragen?"],
    ["“Ik zoek het wel voor je uit.”"]],
  ["4. Afspraken maken en loslaten", "Spreek af wie wat doet en wanneer, bijvoorbeeld aanmelden vóór 1 mei. Maar laat de keuze bij je kind.",
    ["Wat is je volgende stap, en wanneer doe je die?", "Waar kan ik je mee helpen?"],
    ["“Ik weet wat het beste voor je is.”"]]
];
const GESPREK_LASTIG = [
  ["Als je kind het echt niet weet", "Dat is heel normaal, ook op 17. Kies dan voor iets breds, ga naar meeloopdagen, praat met de decaan of overweeg een tussenjaar met een duidelijk plan. Een verkeerde keuze is niet erg: overstappen kan."],
  ["Als jullie het oneens zijn", "Vraag eerst waaróm je kind iets wil, en zoek het daarna samen uit: bekijk de opleiding, ga naar een open dag, zoek iemand die het werk doet. Jouw zorg mag je noemen, maar het blijft de keuze van je kind."],
  ["Als het over geld gaat", "Studeren kost geld: collegegeld, boeken en misschien een kamer. Via DUO, de dienst die studiefinanciering regelt, krijgt je kind een basisbeurs en/of kan het lenen. Kijk samen op duo.nl wat dat voor jullie betekent."]
];

// Open dag voorbereiden: [titel, punten]
const OPENDAG_TIPS = [
  ["Vooraf", ["Meld je aan als dat moet; vaak krijg je dan een programma en een plattegrond.", "Kies twee of drie voorlichtingen of proefcolleges die je echt wilt zien.", "Schrijf je vragen op: over het programma, stages, toetsen en werk na de studie.", "Doe de Padvinder en lees de uitleg van de opleiding hier, dan weet je waar je op moet letten."]],
  ["Wie gaat er mee, en waarom?", ["Waarom: met z'n tweeën zie en hoor je meer, en je hebt iemand om het na afloop mee te bespreken. Dat helpt je kiezen.", "Rol van een ouder of begeleider: luisteren, praktische vragen stellen (over geld, reizen, wonen) en achteraf doorvragen. Niet het woord voeren.", "Rol van een vriend of vriendin: samen de sfeer proeven en eerlijk tegen elkaar zeggen wat je ervan vond. Zeker handig als jullie hetzelfde overwegen.", "Geen ouder die mee kan? Neem iemand anders mee die je vertrouwt, of ga alleen: studenten en voorlichters helpen je graag, en alleen praat je vaak makkelijker.", "Spreek vooraf af: jij stelt de vragen, wie meegaat mag aanvullen."]],
  ["Hoe kom je daar?", ["Plan je reis vooraf met de routeknop bij de open dag; op open dagen is het druk in trein en bus.", "Kom ongeveer een half uur voor het begin, zodat je rustig de weg vindt.", "Welke locatie? Veel scholen zitten in meer steden. Check op welke locatie jouw opleiding is; die staat op de aanmeldpagina of in je bevestigingsmail, net als het gebouw.", "Reis je straks elke dag? Doe de reis dan op een gewone schooldag, zo weet je hoe lang het echt duurt."]],
  ["Vragen om te stellen", ["Hoe ziet een gewone week eruit: hoeveel uur les en hoeveel zelfstudie?", "Hoe is het eerste jaar opgebouwd, en wat is het bindend studieadvies?", "Wanneer en waar loop je stage?", "Wat doen oud-studenten nu voor werk?", "Vraag studenten: wat had je willen weten voordat je begon?"]],
  ["Daarna", ["Schrijf meteen op wat je goed en minder goed vond.", "Vergelijk minstens twee opleidingen of scholen.", "Twijfel je nog? Plan een meeloopdag: dan loop je een echte lesdag mee."]]
];


// Toelating: de mogelijkheden
const TOELATING = [
  ["Gewoon toegelaten", "Bij de meeste opleidingen: heb je de juiste vooropleiding en meld je je vóór 1 mei aan, dan mag je beginnen."],
  ["Loting of selectie (numerus fixus)", "Beperkt aantal plekken. Aanmelden vóór 15 januari; daarna volgt een selectie (opdrachten, toets, gesprek) of een loting."],
  ["Portfolio of toelatingsopdracht", "Vooral bij kunst en ontwerp. Je laat werk zien of maakt een opdracht. Begin ruim op tijd met verzamelen."],
  ["Auditie", "Bij muziek, dans en theater. Je speelt, danst of acteert voor een commissie."],
  ["Aanvullende eisen of een toets", "Mis je een vak? Soms kun je dat inhalen met een cursus of toets (deficiëntie wegwerken). Ben je 21 of ouder zonder het juiste diploma, dan is er vaak een toelatingstoets (21+-toets)."]
];

// Wie betaalt wat?
const GELD = [
  ["Collegegeld", "Elk jaar te betalen aan de school, meestal met een machtiging. Kan door jou of je ouders; je kunt er ook voor lenen bij DUO (collegegeldkrediet)."],
  ["Studiefinanciering", "Van DUO: een basisbeurs (hoger als je uitwonend bent) en je kunt lenen. Verdienen je ouders weinig, dan krijg je vaak een aanvullende beurs."],
  ["Wat ouders bijdragen", "DUO gaat ervan uit dat ouders die genoeg verdienen bijdragen. Kunnen of willen ze dat niet? Praat erover, en kijk bij DUO wat er dan kan."],
  ["Wonen", "Kamerhuur, gas en licht. Op een zelfstandige woning met eigen voordeur kun je vanaf je 18e huurtoeslag krijgen; op een gewone studentenkamer meestal niet."],
  ["Reizen", "Met het studentenreisproduct van DUO reis je gratis of met korting met het ov. Je kiest zelf een week- of weekendabonnement."],
  ["Boeken en spullen", "Boeken, een laptop en soms materiaal. Vraag op de open dag hoeveel dat ongeveer kost."],
  ["Zorgverzekering", "Vanaf je 18e verplicht en zelf te betalen. Met een laag inkomen krijg je zorgtoeslag."],
  ["Bijbaan", "Veel studenten werken een paar uur per week. Let op dat je studie voorgaat, zeker in het eerste jaar."]
];

// Kamer: wat regel je en wanneer
const KAMER_CHECKLIST = [
  ["Zodra je weet in welke stad", "Schrijf je in bij kamersites en studentenhuisvesters in die stad. Bij sommige tel je inschrijfduur: hoe eerder, hoe beter."],
  ["Voorjaar", "Reageer op kamers, ga hospiteren (kennismaken met de huisgenoten) en kijk naar de echte kosten per maand."],
  ["Voor je tekent", "Lees het huurcontract: huurprijs, borg, servicekosten en opzegtermijn. Betaal nooit vooraf aan iemand die je niet kunt controleren."],
  ["Zomer", "Verhuizen, je adres binnen vijf dagen wijzigen bij de gemeente, en een inboedel- en aansprakelijkheidsverzekering regelen."],
  ["Na verhuizen", "Laat DUO weten dat je uitwonend bent (dat scheelt in je beurs) en vraag eventueel huurtoeslag aan."]
];

// Buitenland en tussenjaar
const OPTIES = [
  ["Studeren in het buitenland", "Kan in België, Duitsland, het Verenigd Koninkrijk of verder. Aanmeldingsdata en toelatingseisen verschillen per land, vaak al in de winter. Studiefinanciering kun je onder voorwaarden meenemen; check dat bij DUO. Begin minstens een jaar van tevoren."],
  ["Een tussenjaar", "Werken, vrijwilligerswerk, reizen of een cursus. Kan heel goed, maar maak een plan: wat wil je doen, en wanneer meld je je aan? De gewone deadlines (15 januari en 1 mei) gelden dan in het jaar dat je wilt beginnen."],
  ["Eerst iets anders, later switchen", "Een verkeerde keuze is niet erg. Je kunt na het eerste jaar overstappen, of na een associate degree of mbo doorstromen."]
];

// "Later word ik de nieuwe …": een knipoog, met daarachter echte routes en banen.
// [wie, rol, knipoog, wat heb je nodig, [[baan, niveau]], [groepen]]
const DROOM = [
  ["Rembrandt", "schilder", "Je eigen werk ooit in het Rijksmuseum? Mooi doel. Maar ook zonder Nachtwacht kun je van beeld je werk maken.", "Een kunstacademie (hbo) met toelating via portfolio, en heel veel oefenen. Weinig kunstenaars leven alleen van hun eigen werk; de meesten combineren het met ander werk.", [["Illustrator", "hbo"], ["Grafisch vormgever", "mbo / hbo"], ["Restaurator van schilderijen", "wo"], ["Decorbouwer voor theater en film", "mbo"], ["Docent beeldende vorming", "hbo"], ["Museumeducator", "hbo / wo"]], ["design", "onderwijs"]],
  ["André Kuipers", "astronaut", "Nederland heeft maar een handvol astronauten gehad. Maar de ruimtevaart heeft duizenden andere banen, ook in Nederland.", "Astronauten hebben meestal een universitaire studie in techniek, natuurkunde of geneeskunde, jaren werkervaring, en ze worden streng geselecteerd door ESA.", [["Lucht- en ruimtevaartingenieur", "wo"], ["Vliegtuigmonteur", "mbo"], ["Software-ontwikkelaar voor satellieten", "hbo / wo"], ["Satellietdata-analist", "hbo / wo"], ["Sterrenkundige", "wo"], ["Technicus bij het ruimtevaartcentrum ESTEC in Noordwijk", "mbo / hbo"]], ["techniek", "natuur", "ict"]],
  ["Max Verstappen", "Formule 1-coureur", "Wereldkampioen worden is lastig. Maar een F1-team heeft honderden mensen in dienst, en die zijn allemaal nodig om te winnen.", "Coureurs beginnen meestal al heel jong met karten. Bij een raceteam werken kan via techniek, data of organisatie.", [["Automonteur of racemonteur", "mbo"], ["Autotechnicus", "hbo"], ["Data-engineer in de autosport", "hbo / wo"], ["Aerodynamica-ingenieur", "wo"], ["Bandenspecialist", "mbo"], ["Teammanager of evenementenorganisator", "hbo"]], ["techniek", "ict"]],
  ["Vivianne Miedema", "profvoetballer", "Prof worden lukt maar weinigen. Maar sport is een grote werkgever, ook naast het veld.", "Talent, heel veel trainen en een goede jeugdopleiding. Een opleiding ernaast is slim: een sportcarrière is kort.", [["Sportcoach of trainer", "mbo / hbo"], ["Fysiotherapeut", "hbo"], ["Sportjournalist", "hbo"], ["Data-analist bij een club", "hbo / wo"], ["Sportmarketeer", "hbo"], ["Beheerder van sportvelden", "mbo"]], ["therapie", "communicatie", "marketing"]],
  ["Martin Garrix", "dj en producer", "Grote podia? Achter elk optreden zit een heel team dat het mogelijk maakt.", "Vooral veel zelf maken en oefenen. Een muziek- of mediaopleiding op mbo of hbo, of het conservatorium, kan helpen.", [["Geluidstechnicus", "mbo / hbo"], ["Lichttechnicus", "mbo"], ["Muziekproducent", "hbo"], ["Evenementenorganisator", "mbo / hbo"], ["Muziekdocent", "hbo"]], ["muziek", "design", "horeca"]],
  ["Doutzen Kroes", "topmodel", "De catwalk is klein, de modewereld groot.", "Model word je vooral via een bureau. Wie de mode in wil, kan ook kiezen voor ontwerp, fotografie of de zakelijke kant.", [["Modeontwerper", "mbo / hbo"], ["Fotograaf", "mbo / hbo"], ["Stylist", "mbo"], ["Visagist", "mbo"], ["Marketeer in de mode", "hbo"], ["Inkoper voor een modeketen", "hbo"]], ["design", "marketing"]],
  ["Arjen Lubach", "tv-presentator", "Op tv komen maar weinig mensen. Maar media maken, dat doen er veel meer.", "Presentatoren komen uit allerlei hoeken: journalistiek, theater of gewoon heel veel zelf maken. Een media- of journalistiekopleiding helpt.", [["Journalist of redacteur", "hbo"], ["Cameraman", "mbo"], ["Video-editor", "mbo / hbo"], ["Contentmaker", "mbo / hbo"], ["Programmamaker", "hbo"], ["Communicatieadviseur", "hbo"]], ["communicatie", "design"]],
  ["Aletta Jacobs", "arts", "Zij was de eerste vrouw in Nederland die mocht studeren aan een universiteit, en ze moest ervoor vechten. Jij gelukkig niet meer.", "Geneeskunde is een universitaire studie met selectie, meestal met het profiel Natuur & Gezondheid. Daarna specialiseer je nog jaren.", [["Arts", "wo"], ["Verpleegkundige", "mbo / hbo"], ["Doktersassistent", "mbo"], ["Verloskundige", "hbo"], ["Apotheker", "wo"], ["Ambulanceverpleegkundige", "hbo + vervolg"]], ["zorg"]],
  ["Freek Vonk", "bioloog", "Haaien zoeken voor de camera is één kant. Biologie heeft veel meer kanten.", "Biologie studeer je op hbo of wo. Wie liever buiten en praktisch werkt, vindt ook veel op het mbo.", [["Bioloog of onderzoeker", "wo"], ["Dierverzorger", "mbo"], ["Boswachter", "mbo / hbo"], ["Ecoloog", "hbo / wo"], ["Dierenarts", "wo"], ["Natuurgids of educator", "hbo"]], ["groen", "natuur"]],
  ["Sergio Herman", "sterrenkok", "Een Michelinster is zeldzaam. Goede koks zijn overal nodig.", "Kok word je op het mbo, en daarna door veel te werken en te leren in goede keukens.", [["Kok", "mbo"], ["Patissier", "mbo"], ["Restaurantmanager", "mbo / hbo"], ["Voedingsmiddelentechnoloog", "hbo"], ["Hotelmanager", "hbo"], ["Ondernemer met een eigen zaak", "mbo / hbo"]], ["horeca"]],
  ["Steve Jobs", "tech-ondernemer", "Een eigen techbedrijf begint vaak klein, op een zolderkamer of in een studentenhuis.", "Er is geen vaste route. Een opleiding in ICT, ontwerp of bedrijfskunde helpt, en vooral veel zelf bouwen en uitproberen.", [["Softwareontwikkelaar", "mbo / hbo / wo"], ["UX-ontwerper", "hbo"], ["Productmanager", "hbo / wo"], ["Data-analist", "hbo / wo"], ["Ondernemer", "elk niveau"]], ["ict", "management"]],
  ["Dick Bruna", "tekenaar van Nijntje", "Met een paar lijnen een figuur maken die de hele wereld kent. Daar is veel oefening voor nodig.", "Een opleiding illustratie, animatie of grafisch ontwerp op mbo of hbo, en een portfolio dat laat zien wat jij kunt.", [["Illustrator", "hbo"], ["Animator", "mbo / hbo"], ["Ontwerper van games", "mbo / hbo"], ["Grafisch ontwerper", "mbo / hbo"], ["Kinderboekenmaker", "elk niveau"]], ["design", "communicatie"]]
];

// "Mensen vinden mij te …": een minpunt dat ergens een kracht is.
// [te …, ander woord, waarom het een kracht is, [groepen]]
const TE = [
  ["druk", "vol energie", "Je hebt energie voor tien. In werk waar je veel beweegt en snel schakelt, zoals sport, evenementen of de spoedeisende hulp, is dat goud waard.", ["therapie", "horeca", "zorg"]],
  ["stil", "rustig en geconcentreerd", "Je kunt lang ergens in opgaan zonder afgeleid te raken. Handig bij onderzoek, programmeren, in een lab of bij het controleren van cijfers.", ["natuur", "ict", "economie"]],
  ["eigenwijs", "zelfstandig, met een eigen koers", "Je laat je niet zomaar overhalen. Ondernemers, onderzoekers en ontwerpers hebben dat nodig om iets nieuws te maken.", ["management", "natuur", "design"]],
  ["gevoelig", "empathisch", "Je voelt goed aan wat er met anderen aan de hand is. In de zorg, het sociaal werk, de psychologie of de kunst is dat een kracht.", ["zorg", "sociaal", "gedrag"]],
  ["kritisch", "scherp", "Je ziet snel wat niet klopt. Juristen, journalisten en accountants doen niet anders.", ["recht", "communicatie", "economie"]],
  ["perfectionistisch", "nauwkeurig", "Bijna goed is voor jou niet goed. In een lab, de techniek of bij het controleren van geld is dat precies wat nodig is.", ["natuur", "techniek", "economie"]],
  ["dromerig", "vol verbeelding", "Je hoofd zit vol ideeën. Ontwerpers, schrijvers en makers leven daarvan.", ["design", "muziek", "communicatie"]],
  ["bazig", "een natuurlijke leider", "Je neemt makkelijk de leiding. Teams, projecten en bedrijven hebben mensen nodig die knopen doorhakken.", ["management", "veilig", "horeca"]],
  ["nieuwsgierig", "onderzoekend", "Je wilt altijd weten hoe het zit. Onderzoekers, journalisten en psychologen moeten precies dat.", ["natuur", "communicatie", "gedrag"]],
  ["praatgraag", "een verbinder", "Je kunt met iedereen praten. In verkoop, communicatie en het onderwijs is dat je belangrijkste gereedschap.", ["marketing", "onderwijs", "communicatie"]],
  ["chaotisch", "flexibel", "Je raakt niet in paniek als plannen veranderen. Bij evenementen, in de horeca of op een filmset is improviseren een vak.", ["horeca", "design", "muziek"]],
  ["ongeduldig", "een doener", "Je wilt resultaat zien. In de techniek, de bouw of de beveiliging pak je dingen direct aan.", ["techniek", "bouw", "veilig"]],
  ["bemoeizuchtig", "betrokken", "Je trekt je het lot van anderen aan. Sociaal werkers, coaches en mensen op personeelszaken doen dat de hele dag.", ["sociaal", "gedrag", "management"]],
  ["serieus", "verantwoordelijk", "Je neemt dingen niet licht op. Daar ben je blij mee in de zorg, de rechtspraak of als je met geld van anderen werkt.", ["zorg", "recht", "economie"]]
];
