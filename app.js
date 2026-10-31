(function () {
  // Mbo-opleidingen (DUO) toevoegen aan de lijst; zelfde naam als hbo/wo = één opleiding met meer niveaus
  if (typeof OPLEIDINGEN_MBO === "object") {
    const bestaand = new Map(OPLEIDINGEN.map((o) => [o.n.toLowerCase(), o]));
    OPLEIDINGEN_MBO.forEach((x) => {
      const b = bestaand.get(x.n.toLowerCase());
      if (b) { b.l = [...new Set(b.l.concat("mbo"))]; b.i = [...new Set(b.i.concat(x.i))]; b.mn = x.mn; b.v = [...new Set(b.v.concat(x.v))]; }
      else OPLEIDINGEN.push(x);
    });
    OPLEIDINGEN.sort((p, q) => p.n.localeCompare(q.n, "nl"));
  }
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, attrs = {}, html = "") => {
    const n = document.createElement(tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    n.innerHTML = html;
    return n;
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Engelse termen in uitleg: vertaling tussen haakjes (eerste keer per tekst)
  const termRe = new RegExp("(?<![\\p{L}\\d'-])(" + TERMEN.map((t) => t[0]).sort((x, y) => y.length - x.length)
    .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/ /g, "[ -]?")).join("|") + ")(?![\\p{L}\\d-])", "giu");
  const termMap = new Map(TERMEN.map((t) => [t[0].toLowerCase().replace(/[ -]/g, ""), t[1]]));
  const vt = (s) => {
    const seen = new Set();
    return esc(s).replace(termRe, (m) => {
      const key = m.toLowerCase().replace(/[ -]/g, "");
      const nl = termMap.get(key);
      if (!nl || seen.has(key)) return m;
      seen.add(key);
      return `${m} <span class="nlv">(${nl})</span>`;
    });
  };

  const termNl = (s) => termMap.get(String(s).toLowerCase().replace(/[ -]/g, "")) || null;
  // Onder een naam: Nederlandse vertaling (als de hele naam Engels is) en eventueel een echt andere naam
  function naamRegels(naam, alt, label) {
    let h = "";
    const nl = termNl(naam);
    if (nl) h += `<p class="eng">In het Nederlands: <strong>${esc(nl)}</strong></p>`;
    const kaal = (x) => String(x).toLowerCase().replace(/[^a-z]/g, "");
    if (alt && kaal(alt) !== kaal(naam) && !(nl && kaal(alt).startsWith(kaal(naam)))) h += `<p class="eng">${label || "Ook bekend als"}: ${esc(alt)}</p>`;
    return h;
  }

  function personaHtml(k) {
    return `<div class="personas">${(PERSONAS[k] || []).map((p) => `<div class="persona"><strong>${esc(p.naam)}</strong><span>${esc(p.studie)}</span><p>${vt(p.tekst)}</p></div>`).join("")}</div>`;
  }

  /* ---------- Waar woon je? Afstand en reistijd ---------- */
  const WP = WOONPLAATSEN.map((w) => ({ naam: w[0], prov: w[1], lat: w[2], lon: w[3] }));
  const telNaam = {};
  WP.forEach((w) => (telNaam[w.naam] = (telNaam[w.naam] || 0) + 1));
  const wpLabel = (w) => (telNaam[w.naam] > 1 ? `${w.naam} (${w.prov})` : w.naam);
  const wpByLabel = new Map(WP.map((w) => [wpLabel(w).toLowerCase(), w]));
  let thuis = null;
  try {
    const t = localStorage.getItem("woonplaats");
    if (t) thuis = wpByLabel.get(t.toLowerCase()) || null;
  } catch (e) {}
  const km = (a, b) => {
    const r = Math.PI / 180;
    const x = Math.sin(((b.lat - a.lat) * r) / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(((b.lon - a.lon) * r) / 2) ** 2;
    return 2 * 6371 * Math.asin(Math.sqrt(x));
  };
  const reistijd = (d) => Math.max(10, Math.round((12 + d * 1.15) / 5) * 5);
  const afstandTekst = (d) => `${Math.round(d)} km, ± ${reistijd(d)} min reizen`;
  const woonInput = (id) => `<label class="woon"><span>Waar woon je?</span><input id="${id}" list="woonLijst" placeholder="Bijv. Zwolle" autocomplete="off" value="${thuis ? esc(wpLabel(thuis)) : ""}"></label>`;
  function plekkenVan(naam) {
    const k = String(naam).toLowerCase();
    const ho = (typeof LOC === "object" && LOC[k]) || [];
    const mbo = (typeof LOC_MBO === "object" && LOC_MBO[k]) || [];
    return ho.concat(mbo.map(([ii, pi]) => [MBO_INSTS[ii], MBO_PLEK[pi][0], MBO_PLEK[pi][1], MBO_PLEK[pi][2], MBO_PLEK[pi][3]]));
  }
  function dichtsteBij(naam) {
    const per = {};
    if (!thuis) return per;
    plekkenVan(naam).forEach(([inst, pl, lat, lon, adres]) => {
      const d = km(thuis, { lat, lon });
      if (!per[inst] || d < per[inst].d) per[inst] = { d, pl, adres };
    });
    return per;
  }
  // Hoofdlocatie per school, voor de open dagen
  const instPlek = {};
  if (typeof LOC === "object") Object.values(LOC).forEach((lijst) => lijst.forEach(([inst, pl, lat, lon]) => { if (!instPlek[inst]) instPlek[inst] = { pl, lat, lon }; }));
  if (typeof LOC_MBO === "object") Object.values(LOC_MBO).forEach((lijst) => lijst.forEach(([ii, pi]) => { const inst = MBO_INSTS[ii]; if (!instPlek[inst]) instPlek[inst] = { pl: MBO_PLEK[pi][0], lat: MBO_PLEK[pi][1], lon: MBO_PLEK[pi][2] }; }));
  if (typeof OD_MERK === "object") Object.keys(OD_MERK).forEach((inst) => { const merk = OD_MERK[inst]; if (!instPlek[merk] && instPlek[inst]) instPlek[merk] = instPlek[inst]; });
  let huidigeOpl = null;
  function zetThuis(val) {
    const w = wpByLabel.get(String(val).trim().toLowerCase()) || null;
    thuis = w;
    try { w ? localStorage.setItem("woonplaats", wpLabel(w)) : localStorage.removeItem("woonplaats"); } catch (e) {}
    document.querySelectorAll(".woon input").forEach((i) => { if (w) i.value = wpLabel(w); });
    renderOpenDagen();
    if (typeof renderPlan === "function") renderPlan();
    if (huidigeOpl && $("#detail").open) openOpleiding(huidigeOpl[0], huidigeOpl[1]);
  }

  /* ---------- Gids ---------- */
  const state = { zoek: "", niveau: "", gebied: "" };
  const NIVEAUS = ["mbo", "hbo", "wo"];

  function chip(container, label, key, value) {
    const b = el("button", { type: "button", class: "chip", "aria-pressed": "false" }, esc(label));
    b.addEventListener("click", () => {
      state[key] = state[key] === value ? "" : value;
      renderChips();
      renderList();
    });
    b.dataset.key = key;
    b.dataset.value = value;
    container.appendChild(b);
  }
  function renderChips() {
    document.querySelectorAll("#gids .chip").forEach((b) => {
      b.setAttribute("aria-pressed", String(state[b.dataset.key] === b.dataset.value));
    });
  }

  function haystack(s) {
    return [s.naam, s.engels, s.kort, s.doe, GEBIEDEN[s.gebied].naam, s.kanJe.join(" ")].join(" ").toLowerCase();
  }
  function renderList() {
    const q = state.zoek.trim().toLowerCase();
    const res = STUDIES.filter(
      (s) =>
        (!state.niveau || s.niveau.includes(state.niveau)) &&
        (!state.gebied || s.gebied === state.gebied) &&
        (!q || q.split(/\s+/).every((w) => haystack(s).includes(w)))
    );
    const list = $("#lijst");
    list.innerHTML = "";
    res.forEach((s) => list.appendChild(card(s)));
    $("#leeg").hidden = res.length > 0;
    $("#aantal").textContent = res.length + (res.length === 1 ? " studie" : " studies");
    renderFamilies();
  }

  /* ---------- Alle opleidingen (DUO/RIO), gegroepeerd ---------- */
  const NIV_LABEL = { mbo: "mbo", hbo: "hbo", wo: "wo", ad: "associate degree" };
  const EC_JAAR = { mbo: "1 tot 4 jaar, afhankelijk van het niveau", hbo: "4 jaar", wo: "3 jaar", ad: "2 jaar" };
  const VORM = { voltijd: "voltijd", deeltijd: "deeltijd", duaal: "duaal (leren en werken)", bol: "bol: naar school, met stages", bbl: "bbl: werken en leren, een paar dagen per week werken" };

  function renderFamilies() {
    const q = state.zoek.trim().toLowerCase();
    const words = q ? q.split(/\s+/) : [];
    const wrap = $("#families");
    const open = new Set([...wrap.querySelectorAll("details[open]")].map((d) => d.dataset.fam));
    wrap.innerHTML = "";
    let total = 0;
    FAMILIES.forEach((f) => {
      const items = OPLEIDINGEN.filter((o) => {
        if (o.f !== f.id) return false;
        if (state.niveau && !o.l.includes(state.niveau)) return false;
        if (state.gebied && f.gebied !== state.gebied) return false;
        const h = (o.n + " " + o.e + " " + f.naam + " " + f.uitleg).toLowerCase();
        return words.every((w) => h.includes(w));
      });
      if (!items.length) return;
      total += items.length;
      const d = el("details", { class: "fam", id: "fam-" + f.id });
      d.dataset.fam = f.id;
      if (open.has(f.id) || words.length || state.gebied) d.open = true;
      d.innerHTML =
        `<summary><span class="femoji">${FAM_EXTRA[f.id].e}</span><span class="fname">${esc(f.naam)}</span><span class="fcount">${items.length}</span><span class="fgebied">${esc(GEBIEDEN[f.gebied].naam)}</span></summary>` +
        `<p class="fuitleg">${vt(f.uitleg)}</p>`;
      const ul = el("div", { class: "opl" });
      items.forEach((o) => {
        const b = el(
          "button",
          { type: "button", class: "oplbtn" },
          `<span class="on">${esc(o.n)}</span>` +
            (o.e ? `<span class="oe">${esc(o.e)}</span>` : "") +
            `<span class="badges">${o.l.map((n) => `<span class="badge ${n}">${NIV_LABEL[n]}</span>`).join("")}</span>`
        );
        b.addEventListener("click", () => openOpleiding(o, f));
        ul.appendChild(b);
      });
      d.appendChild(ul);
      wrap.appendChild(d);
    });
    const act = $("#actief");
    act.innerHTML = "";
    const addChip = (txt, reset) => {
      const b = el("button", { type: "button", class: "chip" }, esc(txt) + " ✕");
      b.addEventListener("click", () => { reset(); renderChips(); renderList(); });
      act.appendChild(b);
    };
    if (state.gebied) addChip("Faculteit: " + GEBIEDEN[state.gebied].naam, () => (state.gebied = ""));
    if (state.niveau) addChip("Route: " + state.niveau, () => (state.niveau = ""));
    if (state.zoek) addChip("Zoekterm: " + state.zoek, () => { state.zoek = ""; $("#zoek").value = ""; });
    $("#alleLeeg").hidden = total > 0;
    $("#alleAantal").textContent = OPLEIDINGEN.length;
  }

  function openOpleiding(o, f) {
    huidigeOpl = [o, f];
    const X = FAM_EXTRA[f.id];
    const per = dichtsteBij(o.n);
    const gesorteerd = thuis ? o.i.slice().sort((a, b) => ((per[a] || {}).d ?? 1e9) - ((per[b] || {}).d ?? 1e9)) : o.i;
    const insts = gesorteerd.slice(0, 40);
    let reis = `<div class="reis">${woonInput("woonDialog")}`;
    if (!thuis) {
      reis += `<p>Vul in waar je woont, dan zie je hoe ver elke school is en hoe lang je ongeveer reist.</p>`;
    } else {
      const afst = Object.values(per).map((x) => x.d);
      const best = afst.length ? Math.min(...afst) : null;
      if (best === null) reis += `<p>Van deze opleiding is geen locatie bekend.</p>`;
      else if (best < 25) reis += `<p><strong>Thuis blijven wonen kan prima.</strong> De dichtstbijzijnde school is ${afstandTekst(best)}.</p>`;
      else if (best <= 60) reis += `<p><strong>Reizen kan.</strong> De dichtstbijzijnde school is ${afstandTekst(best)} (enkele reis, indicatie). Veel studenten reizen zo'n afstand dagelijks.</p>`;
      else reis += `<p><strong>Dat is ver weg:</strong> de dichtstbijzijnde school is ${afstandTekst(best)}. De meeste studenten gaan dan op kamers. Begin op tijd met zoeken, want in studentensteden is een kamer vinden niet altijd makkelijk.</p>`;
      if (best !== null && best > 40) {
        const alt = OPLEIDINGEN.filter((x) => x.f === o.f && x.n !== o.n).map((x) => {
          let m = 1e9;
          plekkenVan(x.n).forEach((p) => { const d = km(thuis, { lat: p[2], lon: p[3] }); if (d < m) m = d; });
          return { x, d: m };
        }).filter((z) => z.d <= 35).sort((p, q) => p.d - q.d).slice(0, 5);
        if (alt.length) reis += `<p><strong>Dichterbij, in dezelfde groep:</strong></p><div class="mini">${alt.map((z) => `<button type="button" data-oplnaam="${esc(z.x.n)}">${esc(z.x.n)} <small style="color:var(--muted)">${Math.round(z.d)} km</small></button>`).join("")}</div>`;
      }
    }
    reis += `</div>`;
    $("#detailInhoud").innerHTML =
      `<div class="badges">${o.l.map((n) => `<span class="badge ${n}">${NIV_LABEL[n]}</span>`).join("")}<span class="badge gebied">${esc(f.naam)}</span></div>` +
      `<h2 id="dTitel">${esc(o.n)}</h2>${naamRegels(o.n, o.e, "Internationale naam")}` +
      `<p><button type="button" class="btn ${isFav(o.n) ? "" : "ghost"} favknop" data-fav="${esc(o.n)}">${isFav(o.n) ? "✓ Op mijn lijst" : "+ Zet op mijn lijst"}</button></p>` +
      
      `<h3>Wat betekent dit?</h3><p>${vt(f.uitleg)} Soortgelijke opleidingen vind je in dezelfde groep.</p>` +
      (X ? `<h3>Wat kun je ermee?</h3><ul>${X.kunJe.map((k) => `<li>${vt(k)}</li>`).join("")}</ul>` : "") +
      (X
        ? `<h3>Wat heb je ervoor nodig?</h3><ul><li><strong>Vooropleiding:</strong> ${o.l.map((n) => `voor ${NIV_LABEL[n]}: ${VOOROPLEIDING[n] || ""}`).join(". ")}</li><li>${vt(X.profiel)}</li><li><strong>Het helpt als je:</strong> ${X.eigen.map(vt).join(", ")}</li></ul><p class="praat" style="margin-top:8px">Toelatingseisen verschillen per school. Lees ze altijd bij de opleiding zelf.</p>`
        : "") +
      `<h3>Toelatingsexamen, auditie of selectie?</h3><p>${SELECTIE[f.id] ? esc(SELECTIE[f.id]) + " Kijk bij de opleiding zelf wat er precies gevraagd wordt." : "Meestal niet. Heb je de juiste vooropleiding en meld je je op tijd aan, dan mag je in principe beginnen."}</p>` +
      `<h3>Hoe kom je daar?</h3><ol class="stapjes"><li>Zorg voor de juiste vooropleiding en het juiste profiel.</li><li>Ga naar een open dag of meeloopdag.</li><li>Meld je aan via Studielink: uiterlijk 1 mei${SELECTIE[f.id] ? ", bij selectie of loting vaak al vóór 15 januari" : ""}.</li><li>Doe de studiekeuzecheck.</li><li>Regel je geld bij DUO, en eventueel een kamer.</li></ol><p><a href="#route">Bekijk het hele stappenplan →</a></p>` +
      `<h3>Wie zitten hier? <small>(verzonnen voorbeelden)</small></h3>${personaHtml(f.gebied)}` +
      `<h3>Hoe lang?</h3><p>${o.l.map((n) => `${NIV_LABEL[n]}${n === "mbo" && o.mn && o.mn.length ? " niveau " + o.mn.join(", ") : ""}: ${EC_JAAR[n]}`).join(" · ")}</p>` +
      `<h3>Hoe studeer je?</h3><p>${o.v.map((v) => VORM[v] || v).join(", ") || "onbekend"}</p>` +
      `<h3>Waar kan het? (${o.i.length} ${o.i.length === 1 ? "school" : "scholen"})</h3>${reis}<ul class="scholen">${insts.map((i) => schoolRegel(i, o.n, per[i])).join("")}</ul>` +
      (o.i.length > insts.length ? `<p style="color:var(--muted)">en ${o.i.length - insts.length} andere</p>` : "") +
      `<p class="praat" style="margin-top:16px">Namen kunnen misleiden. Vergelijk altijd het programma van twee scholen en lees de toelatingseisen op de website van de opleiding zelf.</p>`;
    const d = $("#detail");
    if (d.showModal) d.showModal();
    else d.setAttribute("open", "");
  }

  function openFamily(id) {
    state.zoek = "";
    $("#zoek").value = "";
    state.niveau = "";
    state.gebied = "";
    renderChips();
    renderList();
    const d = document.getElementById("fam-" + id);
    if (d) d.open = true;
    go("opleidingen", d ? d.id : "alle");
  }

  function badges(s) {
    return (
      '<div class="badges">' +
      s.niveau.map((n) => `<span class="badge ${n}">${n}</span>`).join("") +
      `<span class="badge gebied">${esc(GEBIEDEN[s.gebied].naam)}</span></div>`
    );
  }
  function card(s) {
    const b = el(
      "button",
      { type: "button", class: "card" },
      badges(s) +
        `<h3>${esc(s.naam)}</h3>${naamRegels(s.naam, s.engels)}<p class="kort">${vt(s.kort)}</p><span class="more">Lees de uitleg →</span>`
    );
    b.addEventListener("click", () => openDetail(s.id));
    return b;
  }

  function openDetail(id) {
    const s = STUDIES.find((x) => x.id === id);
    if (!s) return;
    $("#detailInhoud").innerHTML =
      badges(s) +
      `<h2 id="dTitel">${esc(s.naam)}</h2>${naamRegels(s.naam, s.engels)}` +
      `<h3>In gewone woorden</h3><p>${vt(s.kort)}</p>` +
      `<h3>Wat doe je er?</h3><p>${vt(s.doe)}</p>` +
      `<h3>Wat kun je ermee?</h3><ul>${s.kanJe.map((k) => `<li>${vt(k)}</li>`).join("")}</ul>` +
      `<h3>Wat heb je ervoor nodig?</h3><p>${vt(STUDIE_NODIG[s.id] || "")}</p>` +
      `<h3>Let op</h3><p>${vt(s.let)}</p>` +
      `<h3>Praat erover</h3><p class="praat">${vt(s.praat)}</p>` +
      `<h3>Wie zitten hier? <small>(verzonnen voorbeelden)</small></h3>${personaHtml(s.gebied)}` +
      (STUDIE_FAM[s.id] ? `<p style="margin-top:18px"><button type="button" class="btn" data-famopen="${STUDIE_FAM[s.id]}">Bekijk waar je dit kunt studeren</button></p>` : "");
    const d = $("#detail");
    if (d.showModal) d.showModal();
    else d.setAttribute("open", "");
  }
  $("#detail").addEventListener("click", (e) => {
    if (e.target === $("#detail")) $("#detail").close();
  });

  /* ---------- Test ---------- */
  let who = "leerling";
  let cur = 0;
  const ANTW = ["Totaal niet", "Een beetje", "Neutraal", "Wel", "Heel erg"];
  const form = $("#testForm");

  function buildQuiz() {
    const kept = {};
    form.querySelectorAll("input:checked").forEach((i) => (kept[i.name] = i.value));
    form.querySelectorAll("input[name=kind]:checked").forEach((i) => (kept["kind" + i.value] = "1"));
    form.innerHTML = "";
    const kf = el("fieldset", { class: "q" });
    kf.dataset.part = "Even opwarmen";
    kf.innerHTML = `<legend><span class="nr">0.</span>${
      who === "ouder" ? "Waar wordt je kind blij van? Denk aan vroeger én nu." : "Waar word jij blij van? Denk aan vroeger én nu."
    } <small>(kies er zoveel als je wilt)</small></legend>`;
    const kg = el("div", { class: "kids" });
    KIND.forEach((k, n) => {
      const l = el("label", { class: "kid" });
      const inp = el("input", { type: "checkbox", name: "kind", value: n });
      if (kept["kind" + n]) inp.checked = true;
      l.appendChild(inp);
      l.appendChild(document.createTextNode(k[1]));
      kg.appendChild(l);
    });
    kf.appendChild(kg);
    kf.appendChild(el("p", { class: "hint" }, "Wat je vroeger al leuk vond en nu nog steeds, zegt vaak veel over wat bij je past."));
    form.appendChild(kf);
    const pf = el("fieldset", { class: "q" });
    pf.dataset.part = "Herken je jezelf?";
    pf.innerHTML = `<legend>${who === "ouder" ? "Welke student lijkt het meest op je kind?" : "Welke student lijkt het meest op jou?"}</legend>`;
    const pg = el("div", { class: "pz-grid" });
    Object.keys(PERSONAS).forEach((k) => {
      const p = PERSONAS[k][0];
      const l = el("label", { class: "pz" });
      const inp = el("input", { type: "radio", name: "pz", value: k });
      if (kept.pz === k) inp.checked = true;
      l.appendChild(inp);
      l.insertAdjacentHTML("beforeend", `<strong>${esc(p.naam)}</strong><span>${esc(p.tekst)}</span>`);
      pg.appendChild(l);
    });
    const geen = el("label", { class: "pz pz-geen" });
    const gi = el("input", { type: "radio", name: "pz", value: "" });
    if (kept.pz === "") gi.checked = true;
    geen.appendChild(gi);
    geen.insertAdjacentHTML("beforeend", "<strong>Geen van allen</strong><span>Ik herken me in niemand. Ook prima!</span>");
    pg.appendChild(geen);
    pf.appendChild(pg);
    form.appendChild(pf);
    let nr = 0;
    const section = (titel, sub, prefix, items) => {
      form.appendChild(el("h3", { class: "part" }, `${esc(titel)} <small>${esc(sub)}</small>`));
      items.forEach((txt, i) => {
        nr++;
        const fs = el("fieldset", { class: "q" });
        fs.dataset.part = titel;
        fs.innerHTML = `<legend><span class="nr">${nr}.</span>${vt(txt)}</legend>`;
        const sc = el("div", { class: "scale" });
        ANTW.forEach((a, n) => {
          const l = el("label");
          const inp = el("input", { type: "radio", name: prefix + i, value: n });
          if (kept[prefix + i] === String(n)) inp.checked = true;
          l.appendChild(inp);
          l.appendChild(document.createTextNode(a));
          sc.appendChild(l);
        });
        fs.appendChild(sc);
        form.appendChild(fs);
      });
    };
    const pick = (a) => a.map((v) => (who === "ouder" ? v[2] : v[1]));
    section("Deel 1: waar word je blij van?", "je interesses", "q", pick(VRAGEN));
    section("Deel 2: waar ben je goed in?", "je kwaliteiten", "k", pick(KWAL));
    section("Deel 3: wat telt voor jou in je werk?", "je waarden", "d", pick(DRIJF));
    const tf = el("fieldset", { class: "q" });
    tf.dataset.part = "Nog één ding";
    tf.innerHTML = `<legend>${who === "ouder" ? "Hoe staat je kind tegenover een toelatingsexamen, auditie of portfolio?" : "Hoe sta jij tegenover een toelatingsexamen, auditie of portfolio?"}</legend>`;
    const ts = el("div", { class: "scale drie" });
    ["Prima, daar ga ik voor", "Liever niet, maar het mag", "Liever helemaal niet"].forEach((t, n) => {
      const l = el("label");
      const inp = el("input", { type: "radio", name: "t0", value: n });
      if (kept.t0 === String(n)) inp.checked = true;
      l.appendChild(inp);
      l.appendChild(document.createTextNode(t));
      ts.appendChild(l);
    });
    tf.appendChild(ts);
    form.appendChild(tf);
    const act = el("div", { class: "actions" });
    act.innerHTML =
      '<button class="btn" type="submit" id="klaar" disabled>Bekijk mijn uitslag</button><span class="progress" id="voortgang" aria-live="polite"></span>';
    form.appendChild(act);
    updateProgress();
    initStepper();
  }

  /* Eén vraag tegelijk */
  function initStepper() {
    form.prepend(el("div", { class: "stepper" }, '<div class="sbar"><span id="sfill"></span></div><div class="sdots" id="sdots" aria-label="Spring naar een vraag"></div><div class="smeta"><span id="spart"></span><span id="scount"></span></div>'));
    form.querySelector(".actions").before(el("div", { class: "snav" }, '<button type="button" class="btn ghost" id="vorige">Vorige</button><button type="button" class="btn" id="volgende">Volgende</button>'));
    $("#vorige").addEventListener("click", () => toStep(cur - 1));
    $("#sdots").addEventListener("click", (e) => { const b = e.target.closest("[data-step]"); if (b && !b.disabled) toStep(Number(b.dataset.step)); });
    $("#volgende").addEventListener("click", () => toStep(cur + 1));
    toStep(Math.min(cur, form.querySelectorAll("fieldset.q").length - 1), true);
  }
  function toStep(i, noFocus) {
    const steps = [...form.querySelectorAll("fieldset.q")];
    if (i < 0 || i >= steps.length) return;
    cur = i;
    steps.forEach((s, j) => (s.hidden = j !== i));
    const last = i === steps.length - 1;
    const answered = !steps[i].querySelector("input[type=radio]") || steps[i].querySelector("input:checked");
    $("#sfill").style.width = Math.round((i / (steps.length - 1)) * 100) + "%";
    $("#spart").textContent = steps[i].dataset.part;
    $("#scount").textContent = `${i + 1} van ${steps.length}`;
    // Elke beantwoorde vraag is aanklikbaar, plus de eerste open vraag
    const klaar = steps.map((st) => !st.querySelector("input[type=radio]") || !!st.querySelector("input:checked"));
    const open = klaar.indexOf(false) < 0 ? steps.length - 1 : klaar.indexOf(false);
    $("#sdots").innerHTML = steps.map((st, j) => `<button type="button" data-step="${j}" class="${j === i ? "nu" : klaar[j] ? "klaar" : ""}" ${j > open && !klaar[j] ? "disabled" : ""} aria-label="Vraag ${j + 1}${klaar[j] ? ", beantwoord" : ""}"${j === i ? ' aria-current="step"' : ""}></button>`).join("");
    $("#vorige").disabled = i === 0;
    $("#volgende").hidden = last;
    $("#volgende").disabled = !answered;
    form.querySelector(".actions").hidden = !last;
    if (!noFocus) steps[i].querySelector("input")?.focus({ preventScroll: true });
  }
  form.addEventListener("change", (e) => {
    const steps = [...form.querySelectorAll("fieldset.q")];
    if (e.target.type !== "radio" || steps.indexOf(e.target.closest("fieldset.q")) !== cur) return;
    if (e.target.name === "t0") {
      voegDiepToe();
      setTimeout(() => toStep(cur + 1), 260);
      return;
    }
    if (cur < steps.length - 1) setTimeout(() => toStep(cur + 1), 260);
    else toStep(cur, true);
  });
  function updateProgress() {
    const sets = [...form.querySelectorAll("fieldset.q")].filter((f) => f.querySelector("input[type=radio]"));
    const n = sets.filter((f) => f.querySelector("input:checked")).length;
    $("#voortgang").textContent = `${n} van ${sets.length} ingevuld`;
    $("#klaar").disabled = n < sets.length || !form.querySelector("fieldset.diep");
  }
  form.addEventListener("change", updateProgress);

  document.querySelectorAll(".who .chip").forEach((b) =>
    b.addEventListener("click", () => {
      who = b.dataset.who;
      document.querySelectorAll(".who .chip").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      cur = 0;
      buildQuiz();
      $("#uitslag").hidden = true;
      $(".testgrid").hidden = false;
    })
  );

  function bereken() {
    const score = {};
    const max = {};
    Object.keys(GEBIEDEN).forEach((k) => ((score[k] = 0), (max[k] = 0)));
    VRAGEN.forEach((v, i) => {
      const c = form.querySelector(`input[name="q${i}"]:checked`);
      score[v[0]] += c ? Number(c.value) : 0;
      max[v[0]] += 4;
    });
    const profiel = { kwal: [], drijf: [] };
    [["k", KWAL, "kwal"], ["d", DRIJF, "drijf"]].forEach(([p, lijst, sleutel]) => {
      lijst.forEach((v, i) => {
        const c = form.querySelector(`input[name="${p}${i}"]:checked`);
        const val = c ? Number(c.value) : 0;
        profiel[sleutel].push({ naam: v[0], val });
        for (const g in v[3]) {
          score[g] += val * v[3][g];
          max[g] += 4 * v[3][g];
        }
      });
    });
    const picks = {};
    form.querySelectorAll("input[name=kind]:checked").forEach((i) => {
      const g = KIND[Number(i.value)][0];
      picks[g] = (picks[g] || 0) + 1;
    });
    Object.keys(GEBIEDEN).forEach((k) => {
      score[k] += Math.min(3, (picks[k] || 0) * 1.5);
      max[k] += 3;
    });
    const pz = form.querySelector('input[name="pz"]:checked');
    Object.keys(GEBIEDEN).forEach((k) => { max[k] += 3; if (pz && pz.value === k) score[k] += 3; });
    const rank = Object.keys(score).sort((a, b) => score[b] - score[a]);
    return { score, max, profiel, rank };
  }

  // Doorvragen binnen de twee sterkste richtingen; verfijnt alleen, sluit niets uit
  function voegDiepToe() {
    form.querySelectorAll("fieldset.diep").forEach((f) => f.remove());
    const voor = form.querySelector(".snav");
    bereken().rank.slice(0, 2).forEach((k) => {
      DIEP[k].forEach(([fam, tekst]) => {
        const fs = el("fieldset", { class: "q diep" });
        fs.dataset.part = "Even doorvragen: " + GEBIEDEN[k].naam;
        fs.innerHTML = `<legend>${vt(who === "ouder" ? tekst.replace(/^Ik wil/, "Mijn kind wil") : tekst)}</legend>`;
        const sc = el("div", { class: "scale" });
        ANTW.forEach((t, n) => {
          const l = el("label");
          const inp = el("input", { type: "radio", name: `z_${k}_${fam}`, value: n });
          l.appendChild(inp);
          l.appendChild(document.createTextNode(t));
          sc.appendChild(l);
        });
        fs.appendChild(sc);
        fs.hidden = true;
        form.insertBefore(fs, voor);
      });
    });
    updateProgress();
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const r = bereken();
    const famScore = {};
    form.querySelectorAll("fieldset.diep input:checked").forEach((i) => {
      const fam = i.name.split("_")[2];
      famScore[fam] = Math.max(famScore[fam] || 0, Number(i.value));
    });
    const t = form.querySelector('input[name="t0"]:checked');
    showResult(r.rank, r.score, r.max, r.profiel, famScore, t ? Number(t.value) : 0);
  });

  function topLijst(items) {
    const s = items.slice().sort((a, b) => b.val - a.val).filter((x) => x.val >= 3).slice(0, 3);
    return s.length ? s.map((x) => x.naam) : [];
  }

  function showResult(rank, score, max, profiel, famScore = {}, toel = 0) {
    const top = rank.slice(0, 2);
    const ouder = who === "ouder";
    const pct = (k) => Math.round((score[k] / max[k]) * 100);
    const kw = topLijst(profiel.kwal);
    const dr = topLijst(profiel.drijf);
    const lijstje = (xs) => xs.map((x) => x.toLowerCase()).join(", ").replace(/, ([^,]*)$/, " en $1");
    const famNaam = (f) => esc((FAMILIES.find((x) => x.id === f) || {}).naam || f);
    const fams = Object.keys(famScore).filter((f) => famScore[f] >= 3).sort((a, b) => famScore[b] - famScore[a]).slice(0, 3);
    const delen = [];
    if (kw.length) delen.push(`sterk in ${lijstje(kw)}`);
    if (dr.length) delen.push(`vindt ${lijstje(dr)} belangrijk`);

    let h = `<div class="res-top"><a class="btn" href="#/plan">Maak mijn stappenplan →</a><button type="button" class="btn ghost" id="aanpassen">← Antwoorden aanpassen</button><button type="button" class="btn ghost" id="opnieuw">Opnieuw beginnen</button></div>`;
    h += `<h3>${ouder ? "Dit past bij je kind" : "Dit past bij jou"}</h3>`;
    if (delen.length) h += `<p class="res-jij">${ouder ? "Je kind is" : "Jij bent"} ${delen.join(" en ")}.</p>`;

    h += `<div class="richtingen">` + top.map((k, i) => {
      const g = GEBIEDEN[k];
      const p = (PERSONAS[k] || [])[0];
      const p2 = (PERSONAS[k] || [])[1];
      const eigen = fams.filter((f) => (FAMILIES.find((x) => x.id === f) || {}).gebied === k);
      const knoppen = (eigen.length ? eigen : FAMILIES.filter((f) => f.gebied === k).map((f) => f.id)).slice(0, 3);
      return `<article class="richting"><div class="r-kop"><span class="res-ic">${icon(k, 40)}</span><div><small>Richting ${i + 1} · ${pct(k)}%</small><h4>${esc(g.naam)}</h4></div></div>` +
        `<p class="r-uitleg">${vt(g.uitleg)}</p>` +
        (p ? `<figure class="persona-groot"><blockquote>${vt(p.tekst)}</blockquote><figcaption><strong>${esc(p.naam)}</strong> · ${esc(p.studie)} <small>(voorbeeld)</small></figcaption></figure>` : "") +
        `<p class="r-sub"><strong>Wat kun je ermee?</strong> ${g.kunJe.slice(0, 2).map(vt).join(" · ")}</p>` +
        `<div class="mini">${knoppen.map((f) => `<button type="button" data-fam="${f}">${famNaam(f)}</button>`).join("")}</div>` +
        `<details class="meer"><summary>Meer over ${esc(g.naam)}</summary>` +
        `<h5>Wat de opleidingen gemeen hebben</h5><ul>${g.gemeen.map((t) => `<li>${vt(t)}</li>`).join("")}</ul>` +
        (p2 ? `<h5>Nog een student</h5><p><strong>${esc(p2.naam)}</strong>, ${esc(p2.studie)}: ${vt(p2.tekst)}</p>` : "") +
        `<h5>Studies uitgelegd</h5><div class="mini">${STUDIES.filter((s) => s.gebied === k).map((s) => `<button type="button" data-id="${s.id}">${esc(s.naam)}</button>`).join("")}</div>` +
        `<h5>Om over te praten</h5><ul>${g.praat.map((t) => `<li>${vt(t)}</li>`).join("")}</ul></details></article>`;
    }).join("") + `</div>`;

    const sel = fams.filter((f) => SELECTIE[f]);
    if (sel.length && toel === 2) h += `<p class="praat">Je gaf aan liever geen toelatingsexamen, auditie of portfolio te willen. Let op bij ${sel.map((f) => `<strong>${famNaam(f)}</strong>`).join(" en ")}: ${sel.map((f) => esc(SELECTIE[f])).join(" ")}</p>`;

    h += `<div class="res-rij">` +
      `<div><h5>${ouder ? "Sterke punten" : "Jouw kwaliteiten"}</h5>${kw.length ? `<div class="tags">${kw.map((t) => `<span class="tag2">${esc(t)}</span>`).join("")}</div>` : `<p class="count">Nog niet uitgesproken; dat ontdek je vaak in de praktijk.</p>`}</div>` +
      `<div><h5>${ouder ? "Wat voor je kind telt" : "Wat voor jou telt"}</h5>${dr.length ? `<div class="tags">${dr.map((t) => `<span class="tag2">${esc(t)}</span>`).join("")}</div>` : `<p class="count">Nog niet uitgesproken.</p>`}</div>` +
      `<div class="ook"><h5>Ook het bekijken waard</h5><p><strong>${esc(GEBIEDEN[rank[2]].naam)}</strong>: <button type="button" class="linkbtn" data-gebied="${rank[2]}">bekijk de opleidingen</button></p></div>` +
      `</div>`;

    h += `<details class="meer"><summary>Alle scores en jouw route op de campus</summary><div class="bars">` +
      rank.map((k) => `<div class="bar"><span>${esc(GEBIEDEN[k].naam)}</span><span class="track"><span class="fill" style="width:${pct(k)}%;display:block"></span></span><span>${pct(k)}%</span></div>`).join("") +
      `</div><div class="kaartwrap" id="uitslagKaart" style="margin-top:8px"></div></details>`;
    h += `<details class="meer"><summary>${ouder ? "Tips voor jou als ouder" : "Tips voor jou en wie met je meedenkt"}</summary><ul>` +
      (ouder
        ? ["Laat je kind de Padvinder ook zelf doen en vergelijk de uitslagen.", "Stel vragen in plaats van adviezen te geven. “Wat spreekt je hieraan aan?” werkt beter dan “Dit past bij jou”.", "Plan samen een meeloopdag of open dag."]
        : ["Laat iemand die je goed kent (ouder, mentor, oom of tante) de Padvinder ook over jou invullen. Bekijk samen waar het verschilt.", "Kies twee of drie opleidingen en zoek een open dag of meeloopdag op.", "Je hoeft nu niets te beslissen. Dit is een eerste richting."]
      ).map((t) => `<li>${vt(t)}</li>`).join("") + `</ul></details>`;
    h += `<p class="count" style="margin-top:14px">De Padvinder is een gespreksstarter op basis van interesses, kwaliteiten en waarden, geen wetenschappelijke test.</p>`;

    bewaar("padvinder", { top, fams, toel, datum: new Date().toISOString().slice(0, 10) });
    padvinder = lees("padvinder", null);
    const box = $("#uitslag");
    box.innerHTML = h;
    renderPlan();
    box.hidden = false;
    const uk = $("#uitslagKaart");
    uk.innerHTML = buildMap() + `<div class="kaartleg"><span>Jouw route: de rode paadjes</span><span>Klik op een faculteit voor de opleidingen</span></div>`;
    highlightMap(uk, top);
    highlightMap($("#kaartKaart"), top);
    box.querySelectorAll(".mini button").forEach((b) =>
      b.addEventListener("click", () => (b.dataset.fam ? openFamily(b.dataset.fam) : openDetail(b.dataset.id)))
    );
    $("#aanpassen").addEventListener("click", () => {
      box.hidden = true;
      $(".testgrid").hidden = false;
      toStep(0);
      window.scrollTo({ top: 0, behavior: "instant" });
    });
    $("#opnieuw").addEventListener("click", () => {
      form.reset();
      cur = 0;
      buildQuiz();
      box.hidden = true;
      $(".testgrid").hidden = false;
      window.scrollTo({ top: 0, behavior: "instant" });
    });
    $(".testgrid").hidden = true;
    box.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  /* ---------- Schoolvak -> studie ---------- */
  VAKKEN.forEach((v) => {
    const d = el("details", { class: "fam" });
    d.innerHTML =
      `<summary><span class="fname">${esc(v[0])}</span><span class="fgebied">${v[5].length} beroepen</span></summary>` +
      `<div class="vakbody"><h4>Wat zegt dit vak over jou?</h4>` +
      (VAKKEN_OVERJOU[v[0]] ? `<p><strong>Je bent waarschijnlijk goed in:</strong> ${VAKKEN_OVERJOU[v[0]][0].map(esc).join(", ")}.<br><strong>Je bent waarschijnlijk geïnteresseerd in:</strong> ${VAKKEN_OVERJOU[v[0]][1].map(esc).join(", ")}.</p>` : "") +
      `<h4>Wat je er waarschijnlijk écht leuk aan vindt</h4><p>${vt(v[1])}</p>` +
      `<h4>Wat kun je ermee?</h4><ul class="vakwerk">${v[5].map((t) => `<li>${vt(t)}</li>`).join("")}</ul>` +
      `<h4>Waar dat terugkomt</h4><p>${vt(v[2])}</p>` +
      `<h4>Let op</h4><p>${vt(v[3])}</p>` +
      `<p><button type="button" class="chip" data-fams="${esc(v[4])}">Bekijk die opleidingen</button></p></div>`;
    $("#vakkenLijst").appendChild(d);
  });
  $("#vakkenLijst").addEventListener("click", (e) => {
    const b = e.target.closest("[data-fams]");
    if (!b) return;
    openFamily(b.dataset.fams.split(",")[0].trim());
  });
  NIEUW.forEach((n) => {
    $("#nieuwLijst").appendChild(el("div", { class: "nw" }, `<strong>${vt(n[0])}</strong><span>${vt(n[1])}</span>`));
  });

  /* ---------- Vertaler en woordenlijst ---------- */
  VERTAAL.forEach((v) => {
    const b = el("button", { type: "button", class: "flip", "aria-pressed": "false", "aria-label": `${v[0]}: draai om voor de vertaling` },
      `<span class="flip-in"><span class="front"><small>Engelse naam</small><strong lang="en">${esc(v[0])}</strong><em>Klik om om te draaien ↻</em></span>` +
      `<span class="back"><small>Letterlijk</small><span class="letterlijk">${esc(v[1])}</span><small>Wat het echt is</small><strong>${esc(v[2])}</strong><span class="uitleg">${vt(v[3])}</span></span></span>`);
    b.addEventListener("click", () => b.setAttribute("aria-pressed", String(b.getAttribute("aria-pressed") !== "true")));
    $("#vertaalLijst").appendChild(b);
  });
  WOORDEN.forEach((w) => {
    $("#woordenLijst").appendChild(el("div", { class: "woord" }, `<span class="wemoji">${w[0]}</span><div><strong>${esc(w[1])}</strong><p>${vt(w[2])}</p></div>`));
  });

  /* ---------- Landkaart ---------- */
  const REG = {
    weten: [170, 112, 1],
    tech: [700, 100, 2],
    zorg: [790, 290, 3],
    mens: [410, 235, 4],
    creatief: [185, 345, 5],
    bedrijf: [620, 385, 6]
  };
  const START = [470, 556];
  const COL = { zorg: "#e85d04", weten: "#2d6a4f", tech: "#1d4ed8", mens: "#7c3aed", creatief: "#b8860b", bedrijf: "#374151" };
  const PATHS = {
    creatief: "M470 538 C380 532 305 490 292 445 S238 408 215 396",
    mens: "M470 538 C535 505 490 452 438 425 S345 345 400 296",
    bedrijf: "M470 538 C545 546 612 522 616 470 S618 450 620 445",
    zorg: "M470 538 C620 566 765 505 796 425 S770 372 792 350",
    tech: "M470 538 C525 480 515 425 535 365 S610 260 665 205 S697 180 698 160",
    weten: "M470 538 C425 485 520 425 468 362 S335 338 304 300 S252 242 218 205 S190 190 176 172"
  };
  const DECOR = ["M40 500C100 460 170 505 235 470S330 430 372 458", "M880 400C830 440 860 500 810 540", "M560 150C600 120 640 150 660 118"];
  // Pictogrammen (64x64, lijnen), één kleur
  const ICONS = {
    zorg: `<path d="M32 54C10 38 6 22 17 15c7-4 13 0 15 5 2-5 8-9 15-5 11 7 7 23-15 39Z"/><path d="M12 33h12l5-9 6 17 5-8h12"/>`,
    weten: `<path d="M12 9h16M14 9v34a6 6 0 0 0 12 0V9M14 28h12"/><path d="M36 9h16M38 9v34a6 6 0 0 0 12 0V9M38 22h12"/><circle cx="20" cy="36" r="1.8"/><circle cx="44" cy="33" r="1.8"/><circle cx="43" cy="39" r="1.2"/><path d="M6 56h52"/>`,
    tech: `<path d="M21 19 8 32l13 13M43 19l13 13-13 13M37 14 27 50"/>`,
    mens: `<circle cx="23" cy="21" r="8"/><path d="M8 54c0-14 30-14 30 0"/><circle cx="44" cy="25" r="6.5"/><path d="M36 54c1-9 22-11 24 0"/>`,
    creatief: `<path d="m10 54 4-14L42 12l10 10-28 28Z"/><path d="m36 18 10 10M14 40l10 10"/><path d="M8 58h26"/>`,
    bedrijf: `<path d="M14 52V40M26 52V32M38 52V24M50 52V14"/><path d="M8 58h50"/><path d="m10 30 14-8 10 6 18-20M44 8h8v8"/>`
  };
  function icon(k, s) {
    return `<svg class="ik" viewBox="0 0 64 64" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[k]}</svg>`;
  }
  function building(k) {
    const [cx, cy, n] = REG[k];
    return `<g class="reg" style="--c:${COL[k]}" data-gebied="${k}" tabindex="0" role="button" aria-label="Faculteit ${esc(GEBIEDEN[k].naam)}: bekijk opleidingen">` +
      `<circle class="disc" cx="${cx}" cy="${cy}" r="58"/><circle class="ring" cx="${cx}" cy="${cy}" r="52"/>` +
      `<g class="ico" transform="translate(${cx - 36} ${cy - 36}) scale(1.125)" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${ICONS[k]}</g>` +
      `<g class="bnr"><circle cx="${cx - 46}" cy="${cy - 46}" r="13"/><text x="${cx - 46}" y="${cy - 41}">${n}</text></g>` +
      `<text class="nm" x="${cx}" y="${cy - 74}">${esc(GEBIEDEN[k].naam)}</text></g>`;
  }
  function tree(x, y, i) {
    const r = 11 + (i % 3) * 3;
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="#e6dad6" fill-opacity=".95" stroke="#c4aea7" stroke-width="1.3"/><circle cx="${x - 2}" cy="${y - 3}" r="${r * 0.45}" fill="#f0e8e5" fill-opacity=".95"/>`;
  }
  function buildMap() {
    const TREES = [[30, 40], [64, 66], [330, 60], [360, 36], [540, 70], [570, 44], [870, 50], [846, 78], [34, 215], [66, 238], [880, 200], [868, 470], [840, 500], [880, 540], [60, 420], [100, 450], [330, 560], [364, 584], [560, 590], [250, 580], [420, 120], [900, 330]];
    const trees = TREES.map(([x, y], i) => tree(x, y, i)).join("");
    let contours = "";
    [[200, 70, 30], [200, 70, 60], [200, 70, 95], [720, 560, 50], [720, 560, 95], [720, 560, 140], [880, 300, 40], [880, 300, 80]].forEach(([cx, cy, r]) => {
      contours += `<ellipse cx="${cx}" cy="${cy}" rx="${r * 1.6}" ry="${r}"/>`;
    });
    let roads = DECOR.map((d) => `<path d="${d}" fill="none" stroke="#d62828" stroke-opacity=".35" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 8"/>`).join(""), regs = "";
    Object.keys(REG).forEach((k) => { roads += `<path class="roadedge" d="${PATHS[k]}"/>`; });
    Object.keys(REG).forEach((k) => {
      roads += `<path class="road" data-g="${k}" d="${PATHS[k]}"/>`;
      regs += building(k);
    });
    const pond = `<path d="M40 586C30 566 70 556 112 562S176 580 150 598S52 606 40 586Z" fill="#d3e2f8" stroke="#8aa6d8" stroke-width="1.3"/><path d="M62 580H128M72 588H118" stroke="#8aa6d8" stroke-opacity=".6" stroke-width=".9"/>`;
    return `<svg viewBox="0 0 900 616" role="group" aria-label="Plattegrond van de campus met zes faculteiten">` +
      `<defs><linearGradient id="gras" x1="0" y1="0" x2="0.4" y2="1"><stop offset="0" stop-color="#f7f3f1"/><stop offset="1" stop-color="#ece4e1"/></linearGradient></defs><rect width="900" height="616" fill="url(#gras)"/>` +
      `<g fill="#e7dedb" opacity=".55"><ellipse cx="320" cy="60" rx="190" ry="36"/><ellipse cx="760" cy="470" rx="170" ry="40"/><ellipse cx="90" cy="250" rx="110" ry="34"/><ellipse cx="520" cy="590" rx="160" ry="22"/></g>` +
      `<g fill="none" stroke="#d62828" stroke-opacity=".10" stroke-width="1">${contours}</g>` +
      pond + trees + roads + regs +
      `<g class="hier" transform="translate(${START[0]} ${START[1]})"><rect x="-70" y="-16" width="140" height="32" rx="4" fill="#14213d"/><text y="5" text-anchor="middle" fill="#f4f1ea">HOOFDINGANG</text></g>` +
      `<g transform="translate(850 52)"><circle r="24" fill="none" stroke="#14213d" stroke-width="1.2"/><path d="M0 -20L5 -4L20 0L5 4L0 20L-5 4L-20 0L-5 -4Z" fill="#14213d"/><path d="M0 -20L5 -4L-5 -4Z" fill="#d62828"/><text y="-31" text-anchor="middle" font-family="Segoe UI,system-ui,sans-serif" font-size="13" fill="#14213d">N</text></g>` +
      `</svg>` +
      `<div class="kaartlijst">${Object.keys(REG).map((k) => `<button type="button" style="--c:${COL[k]}" data-gebied="${k}">${icon(k, 40)}<small>Faculteit ${REG[k][2]}</small><strong>${esc(GEBIEDEN[k].naam)}</strong><span>${vt(GEBIEDEN[k].uitleg.split(". ")[0])}.</span></button>`).join("")}</div>`;
  }
  function highlightMap(root, top) {
    root.querySelectorAll("[data-gebied]").forEach((g) => g.classList.remove("top1", "top2"));
    root.querySelectorAll(".road,.roadmid").forEach((p) => p.classList.remove("hot", "hotmid"));
    top.forEach((k, i) => {
      root.querySelectorAll(`[data-gebied="${k}"]`).forEach((g) => g.classList.add("top" + (i + 1)));
      root.querySelectorAll(`.road[data-g="${k}"]`).forEach((p) => p.classList.add("hot"));
      root.querySelectorAll(`.roadmid[data-g="${k}"]`).forEach((p) => p.classList.add("hotmid"));
    });
  }
  function openRegion(k) {
    state.gebied = k;
    state.zoek = "";
    $("#zoek").value = "";
    renderChips();
    renderList();
    go("opleidingen", "alle");
  }

  /* ---------- Schermen: steeds één onderwerp tegelijk ---------- */
  const TEGELS = {
    test: ["#/test", "Welke kant op?", "Doe de Padvinder, in 5 minuten"],
    droom: ["#/droom", "Later word ik de nieuwe…", "Van droombaan naar echte banen"],
    te: ["#/te", "Mensen vinden mij te…", "Je minpunt is ergens een kracht"],
    opleidingen: ["#/opleidingen", "Alle opleidingen", "Mbo, hbo en wo in gewone taal"],
    opendagen: ["#/opendagen", "Open dagen", "Bij jou in de buurt"],
    plan: ["#/plan", "Mijn stappenplan", "Van nu tot je eerste studiedag"],
    ouders: ["#/ouders", "Voor ouders", "Zo voer je het gesprek"],
    route: ["#route", "Hoe kom je daar?", "Aanmelden, toelating, inschrijven"],
    toelating: ["#toelating", "Toelating", "Loting, selectie, portfolio"],
    geld: ["#geld", "Wie betaalt wat?", "Collegegeld, DUO, een kamer"],
    opties: ["#opties", "Buitenland of tussenjaar?", "En later nog switchen"],
    niveaus: ["#niveaus", "Mbo, hbo of wo?", "Drie paden, geen doodlopende"],
    vakken: ["#vakken", "Mijn lievelingsvak", "Wat zegt het over jou, wat kun je ermee?"],
    vertaal: ["#vertaal", "Business wát?", "Engelse studienamen vertaald"],
    woorden: ["#woorden", "Moeilijke woorden", "Van bol tot propedeuse"],
  };
  const tegelHtml = (k) => { const [h, t, sub] = TEGELS[k]; return `<a class="tegel" href="${h}"><strong>${t}</strong><span>${sub}</span></a>`; };
  const VERDER = {
    test: ["droom", "te", "opleidingen", "plan"], droom: ["te", "test", "vakken", "opendagen"], te: ["droom", "test", "vakken", "opleidingen"],
    opleidingen: ["vertaal", "opendagen", "droom", "plan"], opendagen: ["plan", "ouders", "opleidingen", "geld"], plan: ["geld", "opendagen", "toelating", "ouders"],
    uitleg: ["plan", "test", "opendagen", "ouders"], ouders: ["plan", "test", "geld", "opendagen"],
  };
  const UITLEG = ["route", "toelating", "geld", "opties", "niveaus", "vakken", "vertaal", "woorden"];
  $("#uitlegTegels").innerHTML = UITLEG.map(tegelHtml).join("");
  const VIEWS = { start: ["ontdek", "kaart"], droom: ["droom"], te: ["te"], test: ["test"], opleidingen: ["gids", "alle"], opendagen: ["opendagen"], plan: ["plan"], uitleg: ["uitlegmenu", "route", "toelating", "geld", "opties", "niveaus", "vakken", "vertaal", "woorden"], ouders: ["ouders"] };
  let view = "";
  function go(v, target) {
    if (!VIEWS[v]) v = "start";
    // Uitleg: één onderwerp tegelijk, met de onderwerpen als tegels erboven
    const los = v === "uitleg" && UITLEG.includes(target);
    document.querySelectorAll("main > section").forEach((s) => (s.hidden = !VIEWS[v].includes(s.id) || (v === "uitleg" && UITLEG.includes(s.id) && s.id !== target)));
    $("#uitlegmenu").classList.toggle("compact", los);
    document.querySelectorAll("#uitlegTegels .tegel").forEach((a) => a.setAttribute("aria-current", a.getAttribute("href") === "#" + target ? "page" : "false"));
    if (v !== view) {
      view = v;
      $("#verder").hidden = !VERDER[v];
      if (VERDER[v]) $("#verderTegels").innerHTML = VERDER[v].map(tegelHtml).join("");
      $(".hero").hidden = v !== "start";
      document.querySelectorAll(".tabs a").forEach((a) => a.setAttribute("aria-current", a.dataset.view === v ? "page" : "false"));
      if (location.hash !== "#/" + v) history.replaceState(null, "", "#/" + v);
    }
    const t = target && document.getElementById(v === "uitleg" ? "uitlegmenu" : target);
    window.scrollTo({ top: t ? t.getBoundingClientRect().top + window.scrollY - 84 : 0, behavior: "instant" });
  }
  function route() {
    if ($("#detail").open) $("#detail").close();
    const h = location.hash.replace(/^#\/?/, "");
    if (VIEWS[h]) return go(h);
    const v = Object.keys(VIEWS).find((k) => VIEWS[k].includes(h));
    go(v || "start", v ? h : null);
  }
  window.addEventListener("hashchange", route);
  $("#kaartKaart").innerHTML = buildMap() +
    `<div class="kaartleg"><span>Jouw route (na de test)</span><span>Paadje naar een faculteit: via mbo, hbo of wo</span><span>Klik op een faculteit</span></div>`;
  document.addEventListener("click", (e) => {
    const fo = e.target.closest("[data-famopen]");
    if (fo) { $("#detail").close(); openFamily(fo.dataset.famopen); return; }
    const g = e.target.closest("[data-gebied]");
    if (g) openRegion(g.dataset.gebied);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const g = e.target.closest && e.target.closest("[data-gebied]");
    if (g) { e.preventDefault(); openRegion(g.dataset.gebied); }
  });

  /* ---------- Open dagen ---------- */
  const OD = typeof OPEN_DAGEN === "object" ? OPEN_DAGEN : {};
  const vandaag = new Date().toISOString().slice(0, 10);
  const fmt = (d, opt) => new Date(d + "T12:00:00").toLocaleDateString("nl-NL", opt);
  const veiligeUrl = (u) => (u && /^https?:\/\//.test(u) ? u : "");
  let odSoort = "";
  let odNiveau = "";
  // Welke soort onderwijs biedt een school aan (uit de opleidingen); ad telt als hbo
  const instNiv = {};
  if (typeof INST_NIV === "object") Object.keys(INST_NIV).forEach((k) => (instNiv[k] = new Set(INST_NIV[k])));
  if (typeof MBO_INSTS === "object") MBO_INSTS.forEach((k) => (instNiv[k] = instNiv[k] || new Set()).add("mbo"));
  if (typeof OD_MERK === "object") Object.values(OD_MERK).forEach((k) => (instNiv[k] = instNiv[k] || new Set()).add("mbo"));
  function komend(inst) {
    const e = OD[inst] || (typeof OD_MERK === "object" && OD[OD_MERK[inst]]);
    return e && Array.isArray(e.dagen) ? e.dagen.filter((d) => d.datum && (d.eind || d.datum) >= vandaag).sort((a, b) => a.datum.localeCompare(b.datum)) : [];
  }
  function schoolRegel(inst, opleiding, afst) {
    const k = komend(inst)[0];
    const odE = OD[inst] || (typeof OD_MERK === "object" && OD[OD_MERK[inst]]);
    const site = veiligeUrl(odE && odE.site);
    const domein = (typeof DOMEINEN === "object" && DOMEINEN[inst]) || (site ? new URL(site).hostname.replace(/^www[.]/, "") : "");
    const direct = opleiding && typeof MBO_URL === "object" && veiligeUrl(MBO_URL[`${opleiding}|${inst}`]);
    const zoek = direct || "https://duckduckgo.com/?q=" + encodeURIComponent(opleiding ? `${opleiding} ${domein ? "site:" + domein : inst}` : inst);
    let r = `<strong>${esc(inst)}</strong>`;
    if (afst) r += ` <span class="afst">${afst.adres ? esc(afst.adres) + ", " : ""}${esc(afst.pl)} · ${afstandTekst(afst.d)}</span>`;
    if (opleiding) r += ` <a href="${esc(zoek)}" target="_blank" rel="noopener">opleiding bekijken ↗</a>`;
    if (k) r += `<br><span class="od-next">Eerstvolgende ${esc(k.soort || "open dag")}: ${fmt(k.datum, { weekday: "short", day: "numeric", month: "long" })}${k.plaats ? ", " + esc(k.plaats) : ""}</span>`;
    if (site) r += ` · <a href="${esc(site)}" target="_blank" rel="noopener">open dagen ↗</a>`;
    return `<li>${r}</li>`;
  }
  // Ov-route naar de open dag (vanaf je woonplaats als die bekend is)
  function routeLink(r) {
    const doel = `${r.inst}${r.plaats ? ", " + r.plaats : instPlek[r.inst] ? ", " + instPlek[r.inst].pl : ""}`;
    const p = new URLSearchParams({ api: "1", destination: doel, travelmode: "transit" });
    if (thuis) p.set("origin", thuis.naam);
    return "https://www.google.com/maps/dir/?" + p.toString();
  }
  // Scholen met meer locaties: waar is de open dag van jouw opleiding?
  const instLocs = {};
  if (typeof LOC === "object") Object.values(LOC).forEach((l) => l.forEach(([inst, pl]) => { (instLocs[inst] = instLocs[inst] || new Set()).add(pl); }));
  function locatieWaarschuwing(r) {
    const n = instLocs[r.inst] ? instLocs[r.inst].size : 0;
    if (n < 2 || /online/i.test(r.soort || "")) return "";
    return `<span class="od-loc">${r.plaats ? "Deze open dag is in " + esc(r.plaats) + ". " : ""}Let op: deze school zit op ${n} locaties (${[...instLocs[r.inst]].slice(0, 6).map(esc).join(", ")}${n > 6 ? ", …" : ""}). Check vooraf waar jouw opleiding is.</span>`;
  }
  function renderOpenDagen() {
    const q = $("#odZoek").value.trim().toLowerCase();
    const rows = [];
    Object.keys(OD).forEach((inst) => komend(inst).forEach((d) => rows.push(Object.assign({ inst, site: OD[inst].site }, d))));
    rows.sort((a, b) => a.datum.localeCompare(b.datum) || a.inst.localeCompare(b.inst));
    rows.forEach((r) => {
      const p = instPlek[r.inst];
      const viaNaam = r.plaats && WP.find((w) => w.naam.toLowerCase() === String(r.plaats).toLowerCase());
      const loc = viaNaam || p;
      r.km = thuis && loc && !/online/i.test(r.soort || "") ? km(thuis, loc) : null;
    });
    const f = rows.filter((r) => (!q || (r.inst + " " + (r.plaats || "")).toLowerCase().includes(q)) &&
      (!odNiveau || (instNiv[r.inst] && instNiv[r.inst].has(odNiveau))) &&
      (!odSoort || (odSoort === "online" ? /online/i.test(r.soort || "") : odSoort === "dichtbij" ? r.km !== null && r.km <= 50 : !/online/i.test(r.soort || ""))));
    let h = "", maand = "";
    f.forEach((r) => {
      const m = fmt(r.datum, { month: "long", year: "numeric" });
      if (m !== maand) { if (maand) h += "</div>"; h += `<h3 class="od-maand">${m}</h3><div class="od-groep">`; maand = m; }
      const link = veiligeUrl(r.aanmelden) || veiligeUrl(r.site);
      h += `<div class="od-rij"><div class="od-datum"><b>${fmt(r.datum, { day: "numeric" })}</b><span>${fmt(r.datum, { weekday: "short" })}</span></div>` +
        `<div class="od-info"><strong>${esc(r.inst)}</strong>${locatieWaarschuwing(r)}<span>${esc(r.soort || "open dag")}${r.plaats ? " · " + esc(r.plaats) : ""}${r.km !== null ? " · " + afstandTekst(r.km) : ""}${r.tijd ? " · " + esc(r.tijd) : ""}${r.eind && r.eind !== r.datum ? " · t/m " + fmt(r.eind, { day: "numeric", month: "short" }) : ""}</span></div>` +
        `<div class="od-knoppen">` +
        (link ? `<a class="btn ghost od-link" href="${esc(link)}" target="_blank" rel="noopener">${veiligeUrl(r.aanmelden) ? "Aanmelden" : "Info"} ↗</a>` : "") +
        (!/online/i.test(r.soort || "") ? `<a class="od-route" href="${esc(routeLink(r))}" target="_blank" rel="noopener">Route ↗</a>` : "") +
        `</div></div>`;
    });
    if (maand) h += "</div>";
    $("#odLijst").innerHTML = h || (odNiveau === "mbo"
      ? '<p class="empty">Open dagen van het mbo staan er nog niet in. Kijk op de website van het mbo-college in je buurt, of vraag het je mentor of decaan.</p>'
      : '<p class="empty">Geen open dagen gevonden. Probeer een andere school of stad.</p>');
    const scholen = new Set(f.map((r) => r.inst)).size;
    $("#odAantal").textContent = `${f.length} ${f.length === 1 ? "datum" : "data"} bij ${scholen} ${scholen === 1 ? "school" : "scholen"}`;
  }
  $("#odZoek").addEventListener("input", renderOpenDagen);
  document.querySelectorAll("#odNiveau .chip").forEach((b) => b.addEventListener("click", () => {
    odNiveau = b.dataset.n;
    document.querySelectorAll("#odNiveau .chip").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    renderOpenDagen();
  }));
  document.querySelectorAll("#odChips .chip").forEach((b) => b.addEventListener("click", () => {
    odSoort = b.dataset.s;
    document.querySelectorAll("#odChips .chip").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    renderOpenDagen();
  }));

  /* ---------- Stappenplan ---------- */
  $("#routeLijst").innerHTML = ROUTE.map((r) => `<li><span class="r-wanneer">${esc(r[0])}</span><strong>${esc(r[1])}</strong><p>${vt(r[2])}</p></li>`).join("");

  /* ---------- Woonplaats-invoer ---------- */
  $("#odWoon").innerHTML = woonInput("woonOd");
  $("#woonLijst").innerHTML = WP.map((w) => `<option value="${esc(wpLabel(w))}"></option>`).join("");
  document.addEventListener("change", (e) => {
    if (e.target.matches && e.target.matches(".woon input")) zetThuis(e.target.value);
  });
  document.addEventListener("click", (e) => {
    const b = e.target.closest && e.target.closest("[data-oplnaam]");
    if (!b) return;
    const x = OPLEIDINGEN.find((y) => y.n === b.dataset.oplnaam);
    if (x) openOpleiding(x, FAMILIES.find((ff) => ff.id === x.f));
  });

  /* ---------- Gespreksgids ouders ---------- */
  $("#gesprekLijst").innerHTML = GESPREK.map((g) => `<div class="gk"><h4>${esc(g[0])}</h4><p>${vt(g[1])}</p><strong>Vraag bijvoorbeeld</strong><ul>${g[2].map((v) => `<li>${esc(v)}</li>`).join("")}</ul><strong>Liever niet</strong><ul class="niet">${g[3].map((v) => `<li>${esc(v)}</li>`).join("")}</ul></div>`).join("");
  $("#gesprekLastig").innerHTML = GESPREK_LASTIG.map((g) => `<div class="gk"><h4>${esc(g[0])}</h4><p>${vt(g[1])}</p></div>`).join("");

  $("#odTips").innerHTML = OPENDAG_TIPS.map((t) => `<div class="odtip"><h4>${esc(t[0])}</h4><ul>${t[1].map((p) => `<li>${vt(p)}</li>`).join("")}</ul></div>`).join("");

  /* ---------- Mijn stappenplan ---------- */
  function lees(k, d) { try { const v = JSON.parse(localStorage.getItem(k)); return v === null ? d : v; } catch (e) { return d; } }
  function bewaar(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  let favorieten = lees("favorieten", []);
  let afgevinkt = lees("afgevinkt", {});
  let padvinder = lees("padvinder", null);
  const isFav = (n) => favorieten.includes(n);
  const KLASSEN = [["", "Kies…", 0], ["vmbo3", "Vmbo 3", 1], ["vmbo4", "Vmbo 4", 0], ["havo4", "Havo 4", 1], ["havo5", "Havo 5", 0], ["vwo4", "Vwo 4", 2], ["vwo5", "Vwo 5", 1], ["vwo6", "Vwo 6", 0], ["mbo4", "Mbo 4, laatste jaar", 0], ["anders", "Iets anders of een tussenjaar", 0]];
  const nu = new Date();
  const basisJaar = nu.getFullYear() + (nu.getMonth() >= 7 ? 1 : 0);
  const datumTekst = (d) => d.toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
  function startJaar() { const k = KLASSEN.find((x) => x[0] === lees("klas", "")); return basisJaar + (k ? k[2] : 0); }

  function favOpleidingen() { return favorieten.map((n) => OPLEIDINGEN.find((o) => o.n === n)).filter(Boolean); }

  // Open dagen bij de dichtstbijzijnde scholen van je lijst
  function openDagenVoorLijst() {
    const out = [];
    const gezien = new Set();
    favOpleidingen().forEach((o) => {
      const per = dichtsteBij(o.n);
      const scholen = thuis ? o.i.slice().sort((x, y) => ((per[x] || {}).d ?? 1e9) - ((per[y] || {}).d ?? 1e9)).slice(0, 3) : o.i.slice(0, 3);
      scholen.forEach((inst) => {
        const k = komend(inst).find((d) => !/online/i.test(d.soort || "")) || komend(inst)[0];
        if (!k || gezien.has(inst + k.datum)) return;
        gezien.add(inst + k.datum);
        out.push({ inst, opl: o.n, d: per[inst], dag: k, site: OD[inst] && OD[inst].site });
      });
    });
    return out.sort((x, y) => x.dag.datum.localeCompare(y.dag.datum));
  }

  function planStappen() {
    const sj = startJaar();
    const fav = favOpleidingen();
    const fams = [...new Set(fav.map((o) => o.f))];
    const selectie = fams.filter((f) => SELECTIE[f]);
    const verst = thuis && fav.length ? Math.max(...fav.map((o) => { const v = Object.values(dichtsteBij(o.n)).map((x) => x.d); return v.length ? Math.min(...v) : 0; })) : null;
    const od = openDagenVoorLijst();
    const klas = lees("klas", "");
    const mboRoute = klas.startsWith("vmbo") || (fav.length > 0 && fav.every((o) => o.l.length === 1 && o.l[0] === "mbo"));
    const st = [];
    st.push({ id: "padvinder", wanneer: "Nu", titel: "Ontdek wat bij je past", tekst: padvinder ? `Gedaan: je Padvinder wees op <strong>${esc(GEBIEDEN[padvinder.top[0]].naam)}</strong> en <strong>${esc(GEBIEDEN[padvinder.top[1]].naam)}</strong>.` : `Doe de Padvinder (± 5 minuten). <a href="#/test">Start de Padvinder →</a>`, klaar: !!padvinder });
    st.push({ id: "lijst", wanneer: "Nu", titel: "Zet 2 of 3 opleidingen op je lijst", tekst: fav.length ? `Op je lijst: ${fav.map((o) => `<strong>${esc(o.n)}</strong>`).join(", ")}.` : `Open een opleiding en klik op “+ Zet op mijn lijst”. <a href="#/opleidingen">Naar de opleidingen →</a>`, klaar: fav.length >= 2 });
    st.push({ id: "profiel", wanneer: "Nu", titel: "Check of je de juiste vooropleiding en het juiste profiel hebt", tekst: fams.length ? fams.map((f) => `<strong>${esc((FAMILIES.find((x) => x.id === f) || {}).naam || f)}</strong>: ${vt(FAM_EXTRA[f].profiel)}`).join("<br>") : "Dit vul je aan zodra er opleidingen op je lijst staan. Twijfel je? Vraag het je decaan." });
    st.push({ id: "opendag", wanneer: "Najaar en voorjaar", titel: "Ga naar open dagen en meeloopdagen", tekst: od.length ? `<ul class="plan-od">${od.slice(0, 8).map((x) => `<li><strong>${fmt(x.dag.datum, { weekday: "short", day: "numeric", month: "long" })}</strong>: ${esc(x.inst)}${x.d ? ` (${esc(x.d.pl)}, ${Math.round(x.d.d)} km)` : ""}, voor ${esc(x.opl)}${x.site ? ` · <a href="${esc(veiligeUrl(x.site))}" target="_blank" rel="noopener">info ↗</a>` : ""}</li>`).join("")}</ul>Bereid je voor met de tips bij <a href="#/opendagen">Open dagen</a>.` : `Zet opleidingen op je lijst en vul je woonplaats in, dan zie je hier de open dagen dichtbij. Of bekijk alle <a href="#/opendagen">open dagen</a>.` });
    if (selectie.length && !mboRoute) st.push({ id: "fixus", wanneer: `Vóór 15 januari ${sj}`, titel: "Aanmelden voor opleidingen met selectie of loting", tekst: selectie.map((f) => `<strong>${esc(FAMILIES.find((x) => x.id === f).naam)}</strong>: ${esc(SELECTIE[f])}`).join("<br>") + "<br>Check bij de opleiding de precieze datum en wat je moet inleveren.", datum: new Date(sj, 0, 15) });
    st.push({ id: "digid", wanneer: "Ruim op tijd", titel: "Vraag een DigiD aan", tekst: mboRoute ? "Die heb je nodig voor DUO, bijvoorbeeld voor je studentenreisproduct. Aanvragen kost een paar dagen, want je krijgt een brief met een code." : "Die heb je nodig voor Studielink en DUO. Aanvragen kost een paar dagen, want je krijgt een brief met een code." });
    if (mboRoute) st.push({ id: "aanmelden", wanneer: `Vóór 1 april ${sj}`, titel: "Aanmelding: bij de mbo-school", tekst: "Je meldt je aan via de website van de mbo-school zelf. Doe je dat vóór 1 april, dan heb je toelatingsrecht: de school moet je dan toelaten als je aan de vooropleidingseisen voldoet. Je mag je bij meer opleidingen aanmelden.", datum: new Date(sj, 3, 1) });
    else st.push({ id: "aanmelden", wanneer: `Vóór 1 mei ${sj}`, titel: "Aanmelding: via Studielink", tekst: "Dan heb je recht op een studiekeuzecheck en word je in principe toegelaten als je aan de eisen voldoet. Je mag je voor meer opleidingen aanmelden.", datum: new Date(sj, 4, 1) });
    if (!mboRoute) st.push({ id: "toelating", wanneer: `Voorjaar ${sj}`, titel: "Toelating: word je toegelaten?", tekst: (selectie.length ? `Voor je lijst geldt: ${selectie.map((f) => `<strong>${esc(FAMILIES.find((x) => x.id === f).naam)}</strong>: ${esc(SELECTIE[f])}`).join(" ")}<br>` : "Voor de opleidingen op je lijst geldt meestal: juiste vooropleiding en op tijd aangemeld, dan mag je beginnen.<br>") + `Andere vormen: loting, portfolio, auditie, aanvullende eisen. <a href="#toelating">Lees wat die betekenen →</a>` });
    if (mboRoute) st.push({ id: "check", wanneer: `Voorjaar ${sj}`, titel: "Toelating: het intakegesprek", tekst: "Na je aanmelding nodigt de school je uit voor een intake: een gesprek over wie je bent, wat je wilt en wat je nodig hebt. Soms hoort er een opdracht of test bij. Het is geen examen. Voor sommige opleidingen gelden extra eisen, zoals een sporttest of een medische keuring." });
    else st.push({ id: "check", wanneer: `Mei – juni ${sj}`, titel: "Doe de studiekeuzecheck", tekst: "Een opdracht, vragenlijst of gesprek. Het is een advies, geen examen." });
    if (mboRoute) st.push({ id: "duo", wanneer: `Zomer ${sj}`, titel: "Geld en reizen regelen", tekst: "Ben je jonger dan 18, dan vraag je bij DUO een studentenreisproduct aan voor het ov. Vanaf je 18e kun je studiefinanciering krijgen en betaal je lesgeld (bij bol). Verdienen je ouders weinig? Dan kun je vaak een aanvullende beurs krijgen. <a href='#geld'>Wie betaalt wat? →</a>" });
    else st.push({ id: "duo", wanneer: `Vóór 1 juni ${sj}`, titel: "Geld regelen bij DUO", tekst: "Vraag minstens drie maanden voor de start studiefinanciering aan bij DUO. Verdienen je ouders weinig of hebben ze geen inkomen? Dan kun je vaak een aanvullende beurs krijgen. Je studentenreisproduct vraag je ook bij DUO aan. <a href='#geld'>Wie betaalt wat? →</a>", datum: new Date(sj, 5, 1) });
    if (mboRoute) st.push({ id: "inschrijving", wanneer: `Voor de start ${sj}`, titel: "Inschrijving: de onderwijsovereenkomst", tekst: "Ben je toegelaten, dan teken je een onderwijsovereenkomst met de school (ben je jonger dan 18, dan tekent ook je ouder of verzorger). Bij bbl heb je ook een leerbaan nodig; de school helpt je die te vinden." });
    else st.push({ id: "inschrijving", wanneer: `Vóór 31 augustus ${sj}`, titel: "Inschrijving: maak het definitief", tekst: "Ben je toegelaten, dan schrijf je je definitief in via Studielink en regel je de betaling van het collegegeld (meestal met een machtiging). Pas dan sta je echt ingeschreven.", datum: new Date(sj, 7, 31) });
    if (verst !== null && verst > 60) {
      st.push({ id: "wonen", wanneer: `Voorjaar en zomer ${sj}`, titel: "Kamer zoeken en regelen", tekst: `Een opleiding op je lijst is ongeveer ${Math.round(verst)} km van huis; dan gaan de meeste studenten op kamers.<ul class="plan-od">${KAMER_CHECKLIST.map((k) => `<li><strong>${esc(k[0])}:</strong> ${vt(k[1])}</li>`).join("")}</ul>Liever niet verhuizen? Kijk bij de opleiding naar <strong>alternatieven dichterbij</strong>.` });
    } else {
      st.push({ id: "wonen", wanneer: `Zomer ${sj}`, titel: "Reizen met het ov", tekst: verst !== null ? `De opleidingen op je lijst zijn vanuit huis te doen (tot ± ${Math.round(verst)} km, ± ${reistijd(verst)} min). Vraag je studentenreisproduct aan bij DUO en maak de reis een keer op een gewone schooldag.` : "Vul je woonplaats in, dan kijkt de site of reizen met het ov of op kamers gaan het handigst is." });
    }
    if (lees("optie_buitenland", false)) st.push({ id: "buitenland", wanneer: `Uiterlijk winter ${sj - 1}`, titel: "Studeren in het buitenland voorbereiden", tekst: vt(OPTIES[0][1]) });
    if (lees("optie_tussenjaar", false)) st.push({ id: "tussenjaar", wanneer: "Voor je eindexamen", titel: "Tussenjaar plannen", tekst: vt(OPTIES[1][1]) });
    st.push({ id: "zorg", wanneer: "Zodra je 18 wordt", titel: "Zorgverzekering en zorgtoeslag", tekst: "Vanaf je 18e moet je zelf een zorgverzekering hebben. Met een laag inkomen kun je zorgtoeslag krijgen." });
    st.push({ id: "start", wanneer: `September ${sj}`, titel: "Je eerste studiedag", tekst: "De introductieweek helpt je je weg te vinden. Vragen? Elke opleiding heeft studieadviseurs bij wie je terechtkunt.", datum: new Date(sj, 8, 1) });
    return st;
  }

  function renderPlan() {
    const sel = $("#planKlas");
    if (!sel.options.length) sel.innerHTML = KLASSEN.map((k) => `<option value="${k[0]}">${esc(k[1])}</option>`).join("");
    sel.value = lees("klas", "");
    $("#planWoon").innerHTML = woonInput("woonPlan");
    const fav = favOpleidingen();
    $("#planLijst").innerHTML = `<h3>Mijn lijst</h3>` + (fav.length
      ? `<div class="mini">${fav.map((o) => `<span class="favitem"><button type="button" data-oplnaam="${esc(o.n)}">${esc(o.n)}</button><button type="button" class="favweg" data-fav="${esc(o.n)}" aria-label="Haal ${esc(o.n)} van je lijst">✕</button></span>`).join("")}</div>`
      : `<p class="count">Nog leeg. Open een opleiding en klik op “+ Zet op mijn lijst”.${padvinder ? " Tip: begin bij de groepen uit je Padvinder: " + (padvinder.fams || []).map((f) => `<button type="button" class="linkbtn" data-fam="${f}">${esc((FAMILIES.find((x) => x.id === f) || {}).naam || f)}</button>`).join(", ") : ""}</p>`);
    $("#planLijst").querySelectorAll("[data-fam]").forEach((b) => b.addEventListener("click", () => openFamily(b.dataset.fam)));
    $("#planStappen").innerHTML = planStappen().map((x) => {
      const af = x.klaar || afgevinkt[x.id];
      return `<li class="${af ? "af" : ""}"><span class="r-wanneer">${esc(x.wanneer)}</span><label class="vink"><input type="checkbox" data-stap="${x.id}" ${af ? "checked" : ""} ${x.klaar ? "disabled" : ""}><strong>${esc(x.titel)}</strong></label><p>${x.tekst}</p></li>`;
    }).join("");
  }

  $("#planKlas").addEventListener("change", (e) => { bewaar("klas", e.target.value); renderPlan(); });
  [["optBuitenland", "optie_buitenland"], ["optTussenjaar", "optie_tussenjaar"]].forEach(([id, k]) => {
    $("#" + id).checked = lees(k, false);
    $("#" + id).addEventListener("change", (e) => { bewaar(k, e.target.checked); renderPlan(); });
  });
  document.addEventListener("change", (e) => {
    const c = e.target.closest && e.target.closest("[data-stap]");
    if (!c) return;
    afgevinkt[c.dataset.stap] = c.checked;
    bewaar("afgevinkt", afgevinkt);
    c.closest("li").classList.toggle("af", c.checked);
  });
  document.addEventListener("click", (e) => {
    const b = e.target.closest && e.target.closest("[data-fav]");
    if (!b) return;
    const n = b.dataset.fav;
    favorieten = isFav(n) ? favorieten.filter((x) => x !== n) : favorieten.concat(n);
    bewaar("favorieten", favorieten);
    if (huidigeOpl && $("#detail").open && huidigeOpl[0].n === n) openOpleiding(huidigeOpl[0], huidigeOpl[1]);
    renderPlan();
  });
  $("#planHulp").innerHTML = [
    ["Je decaan of mentor", "Helpen bij studiekeuze is hun werk, en het kost je niets. Vraag om een gesprek; neem je Padvinder-uitslag en je lijst mee."],
    ["Studenten zelf", "Op open dagen en meeloopdagen lopen studenten rond om je vragen te beantwoorden. Vraag wat ze vooraf hadden willen weten."],
    ["De opleiding", "Elke opleiding heeft voorlichters of studieadviseurs die je mag mailen of bellen, ook over toelating en geld."],
    ["DUO", "Voor studiefinanciering, aanvullende beurs en je studentenreisproduct. Twijfel je over geld? Bel of mail hen; je hoeft het niet alleen uit te zoeken."],
    ["Iemand die je vertrouwt", "Een oom of tante, trainer, buurvrouw of oudere vriend die gestudeerd heeft. Laat diegene de Padvinder ook over jou invullen."]
  ].map((h) => `<div class="gk licht"><h4>${esc(h[0])}</h4><p>${vt(h[1])}</p></div>`).join("");
  $("#planPrint").addEventListener("click", () => { document.body.classList.add("print-plan"); window.print(); setTimeout(() => document.body.classList.remove("print-plan"), 500); });
  $("#planAgenda").addEventListener("click", () => {
    const d8 = (d) => d.getFullYear() + String(d.getMonth() + 1).padStart(2, "0") + String(d.getDate()).padStart(2, "0");
    const ev = [];
    planStappen().filter((x) => x.datum).forEach((x) => ev.push([d8(x.datum), x.titel]));
    openDagenVoorLijst().forEach((x) => ev.push([x.dag.datum.replace(/-/g, ""), `${x.dag.soort || "Open dag"} ${x.inst}`]));
    const regels = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Wat studeer je eigenlijk//NL"];
    ev.forEach(([d, t], i) => regels.push("BEGIN:VEVENT", `UID:wsje-${i}-${d}@watstudeerje`, `DTSTAMP:${d8(new Date())}T000000Z`, `DTSTART;VALUE=DATE:${d}`, `SUMMARY:${t.replace(/[,;]/g, " ")}`, "END:VEVENT"));
    regels.push("END:VCALENDAR");
    const url = URL.createObjectURL(new Blob([regels.join("\r\n")], { type: "text/calendar" }));
    const l = document.createElement("a");
    l.href = url;
    l.download = "mijn-stappenplan.ics";
    l.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });

  /* ---------- Toelating, geld, kamers, opties ---------- */
  const kaartjes = (lijst) => lijst.map((x) => `<div class="gk licht"><h4>${esc(x[0])}</h4><p>${vt(x[1])}</p></div>`).join("");
  $("#toelatingLijst").innerHTML = kaartjes(TOELATING);
  $("#geldLijst").innerHTML = kaartjes(GELD);
  $("#optiesLijst").innerHTML = kaartjes(OPTIES);
  $("#kamerLijst").innerHTML = KAMER_CHECKLIST.map((k) => `<li><span class="r-wanneer">${esc(k[0])}</span><p>${vt(k[1])}</p></li>`).join("");

  /* ---------- Koelkastversie: doorstroomschema op één A4 ---------- */
  function koelkastHtml() {
    const sj = startJaar();
    const fav = favOpleidingen();
    const metSelectie = fav.some((o) => SELECTIE[o.f]);
    const vak = (t) => `<span class="kk-vak"></span>${t}`;
    const stap = (titel, wanneer, extra) => `<div class="kk-stap"><strong>${titel}</strong><span>${wanneer}</span>${extra ? `<em>${extra}</em>` : ""}<i class="kk-vink"></i></div>`;
    const pijl = `<div class="kk-pijl">→</div>`;
    const rijen = fav.map((o) => {
      const per = dichtsteBij(o.n);
      const scholen = thuis ? o.i.slice().sort((x, y) => ((per[x] || {}).d ?? 1e9) - ((per[y] || {}).d ?? 1e9)) : o.i;
      const inst = scholen[0];
      const p = per[inst];
      const od = komend(inst).find((d) => !/online/i.test(d.soort || "")) || komend(inst)[0];
      const sel = SELECTIE[o.f];
      return `<tr><td>${vak("")}<strong>${esc(o.n)}</strong></td><td>${esc(inst || "")}${p ? `<br><small>${esc(p.pl)}, ${Math.round(p.d)} km</small>` : ""}</td><td>${od ? fmt(od.datum, { weekday: "short", day: "numeric", month: "short" }) : "zie site school"}</td><td>${sel ? esc(sel) : "Juiste vooropleiding is genoeg"}</td><td><strong>${sel ? "15 jan " + sj : "1 mei " + sj}</strong></td></tr>`;
    }).join("");
    return `<div class="kk-kop"><div><h1>Mijn route naar september ${sj}</h1><p>Naam: ______________________ &nbsp; Klas: ${esc((KLASSEN.find((k) => k[0] === lees("klas", "")) || ["", "______"])[1])}</p></div><div class="kk-merk">Wat studeer je eigenlijk?</div></div>` +
      `<div class="kk-flow">` +
      stap("1. Ontdekken", "nu", "Padvinder, mijn lijst") + pijl +
      stap("2. Open dagen", "najaar en voorjaar", "kijk, vraag, vergelijk") + pijl +
      stap("3. Aanmelding", metSelectie ? `vóór 15 jan (selectie)<br>vóór 1 mei ${sj}` : `vóór 1 mei ${sj}`, "via Studielink, met DigiD") + pijl +
      stap("4. Toelating", `voorjaar ${sj}`, "studiekeuzecheck, evt. selectie") + pijl +
      stap("5. Inschrijving", `vóór 31 aug ${sj}`, "collegegeld regelen") + pijl +
      stap("6. Start", `september ${sj}`, "introductieweek") +
      `</div>` +
      `<h2>Mijn opleidingen</h2>` +
      (rijen ? `<table class="kk-tabel"><thead><tr><th>Opleiding</th><th>School (dichtstbij)</th><th>Open dag</th><th>Toelating</th><th>Aanmelden vóór</th></tr></thead><tbody>${rijen}</tbody></table>` : `<p class="kk-leeg">Nog geen opleidingen op je lijst. Zet er 2 of 3 op je lijst en print opnieuw.<br><br>1. ______________________ &nbsp; 2. ______________________ &nbsp; 3. ______________________</p>`) +
      `<div class="kk-onder"><div><h2>Niet vergeten</h2><ul>` +
      [`DigiD aanvragen`, `Studiefinanciering bij DUO, vóór 1 juni ${sj}`, `Studentenreisproduct bij DUO`, `Reizen of een kamer zoeken`, `Zorgverzekering vanaf je 18e`].map((t) => `<li>${vak(t)}</li>`).join("") +
      `</ul></div><div><h2>Hulp nodig?</h2><p>Je decaan of mentor, studenten op open dagen, de studieadviseur van de opleiding en DUO helpen je graag. Je hoeft het niet alleen te doen.</p><p class="kk-url">${esc(location.origin + location.pathname)}</p></div></div>`;
  }
  $("#planKoelkast").addEventListener("click", () => {
    $("#koelkast").innerHTML = koelkastHtml();
    const st = document.createElement("style");
    st.id = "kkPagina";
    st.textContent = "@page{size:A4 landscape;margin:12mm}";
    document.head.appendChild(st);
    document.body.classList.add("print-koelkast");
    window.print();
    setTimeout(() => { document.body.classList.remove("print-koelkast"); st.remove(); }, 800);
  });

  /* ---------- Droombanen ---------- */
  const famNm = (f) => esc((FAMILIES.find((x) => x.id === f) || {}).naam || f);
  $("#droomLijst").innerHTML = DROOM.map((d, i) => `<button type="button" class="droom" data-droom="${i}"><small>Later word ik de nieuwe</small><strong>${esc(d[0])}</strong><span>${esc(d[1])}</span><em>Wat heb je nodig? →</em></button>`).join("");
  document.addEventListener("click", (e) => {
    const b = e.target.closest && e.target.closest("[data-droom]");
    if (!b) return;
    const d = DROOM[Number(b.dataset.droom)];
    huidigeOpl = null;
    $("#detailInhoud").innerHTML = `<div class="badges"><span class="badge gebied">Droombaan · knipoog</span></div><h2 id="dTitel">De nieuwe ${esc(d[0])}</h2><p class="eng">${esc(d[1])}</p>` +
      `<p class="praat">${vt(d[2])}</p>` +
      `<h3>Wat heb je ervoor nodig?</h3><p>${vt(d[3])}</p>` +
      `<h3>Nog meer banen in dit vak</h3><ul class="banen">${d[4].map(([baan, niv]) => `<li><strong>${vt(baan)}</strong> <span class="badge">${esc(niv)}</span></li>`).join("")}</ul>` +
      `<h3>Opleidingen bekijken</h3><div class="mini">${d[5].map((f) => `<button type="button" data-famopen="${f}">${famNm(f)}</button>`).join("")}</div>`;
    $("#detail").showModal();
  });

  /* ---------- Mensen vinden mij te … ---------- */
  $("#teChips").innerHTML = TE.map((t, i) => `<button type="button" class="chip" data-te="${i}" aria-pressed="false">te ${esc(t[0])}</button>`).join("");
  $("#teChips").addEventListener("click", (e) => {
    const b = e.target.closest("[data-te]");
    if (!b) return;
    const t = TE[Number(b.dataset.te)];
    document.querySelectorAll("#teChips .chip").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    const k = $("#teKaart");
    k.innerHTML = `<p class="te-kop"><span class="te-oud">Te ${esc(t[0])}?</span> <span class="te-nieuw">Nee: ${esc(t[1])}.</span></p><p>${vt(t[2])}</p><p><strong>Hier is het een kracht:</strong></p><div class="mini">${t[3].map((f) => `<button type="button" data-famopen="${f}">${famNm(f)}</button>`).join("")}</div>`;
    k.hidden = false;
  });

  /* ---------- Printen: elk scherm en elke kaart ---------- */
  function printMet(klasse) {
    const dicht = [...document.querySelectorAll("main details:not([open])")];
    dicht.forEach((d) => (d.open = true));
    document.body.classList.add(klasse);
    window.print();
    setTimeout(() => { document.body.classList.remove(klasse); dicht.forEach((d) => (d.open = false)); }, 600);
  }
  $("#printPagina").addEventListener("click", () => printMet("print-scherm"));
  $("#printDialoog").addEventListener("click", () => printMet("print-dialoog"));

  /* ---------- Licht / donker ---------- */
  $("#thema").addEventListener("click", () => {
    const root = document.documentElement;
    const nuDonker = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = nuDonker ? "light" : "dark";
    try { localStorage.setItem("thema", root.dataset.theme); } catch (e) {}
  });

  /* ---------- Init ---------- */
  const nc = $("#niveauChips");
  NIVEAUS.forEach((n) => chip(nc, n, "niveau", n));
  const gc = $("#gebiedChips");
  Object.keys(GEBIEDEN).forEach((k) => chip(gc, GEBIEDEN[k].naam, "gebied", k));
  $("#zoek").addEventListener("input", (e) => {
    state.zoek = e.target.value;
    renderList();
    if (state.zoek && view !== "opleidingen") go("opleidingen");
  });
  renderChips();
  renderList();
  buildQuiz();
  renderOpenDagen();
  renderPlan();
  route();
})();
