// Ziekenhuisopleidingen (in-service, CZO-erkend). Staan niet in DUO/RIO, want je volgt ze in dienst van een ziekenhuis.
// Bronnen: vacatures en opleidingspagina's van de ziekenhuizen; coördinaten via PDOK Locatieserver (01-11-2026).
// Velden zoals in opleidingen.js, plus: is (in-service), uitleg (wat doe je), kunJe (werk), eisen (vooropleiding), duur.
const OPLEIDINGEN_INSERVICE = [
  { n: "Operatieassistent", e: "Operating Room Assistant", f: "zorg", l: ["hbo"], v: ["inservice"], is: true,
    uitleg: "Je werkt op de operatiekamer (OK) en assisteert de chirurg tijdens de operatie. Je zorgt dat alle instrumenten steriel en klaar liggen, je geeft ze aan en je houdt in de gaten dat alles volgens de regels gaat.",
    kunJe: ["Operatieassistent op de OK van een ziekenhuis of een zelfstandig behandelcentrum", "Je kunt je specialiseren, bijvoorbeeld in hart-, hersen- of kinderchirurgie", "Later doorgroeien naar praktijkopleider, teamleider of de opleiding tot anesthesiemedewerker"],
    eisen: "een havo- of vwo-diploma, of een afgerond mbo 4 (vaak in de zorg). Biologie of een zorgopleiding helpt.",
    eigen: ["rustig blijft als het spannend wordt", "precies en geconcentreerd kunt werken, soms uren achter elkaar", "goed in een team werkt", "tegen bloed kunt"],
    duur: "ongeveer 3 jaar (soms 2,5)",
    i: ["Amsterdam UMC", "UMC Utrecht", "Erasmus MC", "LUMC", "Radboudumc", "UMCG", "Maastricht UMC+", "Jeroen Bosch Ziekenhuis", "Martini Ziekenhuis", "St. Antonius Ziekenhuis"] },
  { n: "Anesthesiemedewerker", e: "Anaesthesia Assistant", f: "zorg", l: ["hbo"], v: ["inservice"], is: true,
    uitleg: "Je werkt op de operatiekamer samen met de anesthesioloog. Je bereidt de narcose voor, bewaakt de patiënt tijdens de operatie (ademhaling, hartslag, bloeddruk) en grijpt in als er iets misgaat.",
    kunJe: ["Anesthesiemedewerker op de OK, de recovery of de pijnpoli van een ziekenhuis", "Je kunt je specialiseren, bijvoorbeeld in kinder- of hartanesthesie", "Later doorgroeien naar sedatiepraktijkspecialist, praktijkopleider of teamleider"],
    eisen: "een havo- of vwo-diploma, of een afgerond mbo 4 (vaak in de zorg). Biologie, scheikunde of een zorgopleiding helpt.",
    eigen: ["snel kunt schakelen als er iets misgaat", "technische apparatuur leuk vindt", "patiënten op hun gemak kunt stellen vlak voor een operatie", "nauwkeurig bent"],
    duur: "ongeveer 3 jaar",
    i: ["Amsterdam UMC", "UMC Utrecht", "Erasmus MC", "LUMC", "Radboudumc", "UMCG", "Maastricht UMC+", "Jeroen Bosch Ziekenhuis"] },
];
// Locatie per ziekenhuis: [plaats, lat, lon, adres]
const ZH_PLEK = {
  "Amsterdam UMC": ["Amsterdam", 52.295, 4.9579, "Meibergdreef 9"],
  "UMC Utrecht": ["Utrecht", 52.086, 5.1796, "Heidelberglaan 100"],
  "Erasmus MC": ["Rotterdam", 51.9109, 4.4681, "Dr. Molewaterplein 40"],
  "LUMC": ["Leiden", 52.1663, 4.479, "Albinusdreef 2"],
  "Radboudumc": ["Nijmegen", 51.8236, 5.8611, "Geert Grooteplein Zuid 10"],
  "UMCG": ["Groningen", 53.221, 6.5771, "Hanzeplein 1"],
  "Maastricht UMC+": ["Maastricht", 50.8352, 5.7132, "P. Debyelaan 25"],
  "Jeroen Bosch Ziekenhuis": ["'s-Hertogenbosch", 51.6854, 5.2785, "Henri Dunantstraat 1"],
  "Martini Ziekenhuis": ["Groningen", 53.1917, 6.5518, "Van Swietenplein 1"],
  "St. Antonius Ziekenhuis": ["Nieuwegein", 52.0258, 5.084, "Koekoekslaan 1"],
};
OPLEIDINGEN_INSERVICE.forEach((o) => { o.p = [...new Set(o.i.map((z) => ZH_PLEK[z][0]))]; o.ec = {}; });
const LOC_INSERVICE = Object.fromEntries(OPLEIDINGEN_INSERVICE.map((o) => [o.n.toLowerCase(), o.i.map((z) => [z, ...ZH_PLEK[z]])]));
