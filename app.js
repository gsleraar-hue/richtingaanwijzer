(function () {
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
  const plekkenVan = (naam) => (typeof LOC === "object" && LOC[String(naam).toLowerCase()]) || [];
  function dichtsteBij(naam) {
    const per = {};
    if (!thuis) return per;
    plekkenVan(naam).forEach(([inst, pl, lat, lon]) => {
      const d = km(thuis, { lat, lon });
      if (!per[inst] || d < per[inst].d) per[inst] = { d, pl };
    });
    return per;
  }
  // Hoofdlocatie per school, voor de open dagen
  const instPlek = {};
  if (typeof LOC === "object") Object.values(LOC).forEach((lijst) => lijst.forEach(([inst, pl, lat, lon]) => { if (!instPlek[inst]) instPlek[inst] = { pl, lat, lon }; }));
  let huidigeOpl = null;
  function zetThuis(val) {
    const w = wpByLabel.get(String(val).trim().toLowerCase()) || null;
    thuis = w;
    try { w ? localStorage.setItem("woonplaats", wpLabel(w)) : localStorage.removeItem("woonplaats"); } catch (e) {}
    document.querySelectorAll(".woon input").forEach((i) => { if (w) i.value = wpLabel(w); });
    renderOpenDagen();
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
  const NIV_LABEL = { hbo: "hbo", wo: "wo", ad: "associate degree" };
  const EC_JAAR = { hbo: "4 jaar", wo: "3 jaar", ad: "2 jaar" };
  const VORM = { voltijd: "voltijd", deeltijd: "deeltijd", duaal: "duaal (leren en werken)" };

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
      
      `<h3>Wat betekent dit?</h3><p>${vt(f.uitleg)} Soortgelijke opleidingen vind je in dezelfde groep.</p>` +
      (X ? `<h3>Wat kun je ermee?</h3><ul>${X.kunJe.map((k) => `<li>${vt(k)}</li>`).join("")}</ul>` : "") +
      (X
        ? `<h3>Wat heb je ervoor nodig?</h3><ul><li><strong>Vooropleiding:</strong> ${o.l.map((n) => `voor ${NIV_LABEL[n]}: ${VOOROPLEIDING[n]}`).join(". ")}</li><li>${vt(X.profiel)}</li><li><strong>Het helpt als je:</strong> ${X.eigen.map(vt).join(", ")}</li></ul><p class="praat" style="margin-top:8px">Toelatingseisen verschillen per school. Lees ze altijd bij de opleiding zelf.</p>`
        : "") +
      `<h3>Toelatingsexamen, auditie of selectie?</h3><p>${SELECTIE[f.id] ? esc(SELECTIE[f.id]) + " Kijk bij de opleiding zelf wat er precies gevraagd wordt." : "Meestal niet. Heb je de juiste vooropleiding en meld je je op tijd aan, dan mag je in principe beginnen."}</p>` +
      `<h3>Hoe kom je daar?</h3><ol class="stapjes"><li>Zorg voor de juiste vooropleiding en het juiste profiel.</li><li>Ga naar een open dag of meeloopdag.</li><li>Meld je aan via Studielink: uiterlijk 1 mei${SELECTIE[f.id] ? ", bij selectie of loting vaak al vóór 15 januari" : ""}.</li><li>Doe de studiekeuzecheck.</li><li>Regel je geld bij DUO, en eventueel een kamer.</li></ol><p><a href="#route">Bekijk het hele stappenplan →</a></p>` +
      `<h3>Wie zitten hier? <small>(verzonnen voorbeelden)</small></h3>${personaHtml(f.gebied)}` +
      `<h3>Hoe lang?</h3><p>${o.l.map((n) => `${NIV_LABEL[n]}: ${EC_JAAR[n]}`).join(" · ")}</p>` +
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
    form.prepend(el("div", { class: "stepper" }, '<div class="sbar"><span id="sfill"></span></div><div class="smeta"><span id="spart"></span><span id="scount"></span></div>'));
    form.querySelector(".actions").before(el("div", { class: "snav" }, '<button type="button" class="btn ghost" id="vorige">Vorige</button><button type="button" class="btn" id="volgende">Volgende</button>'));
    $("#vorige").addEventListener("click", () => toStep(cur - 1));
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
    const flat = pct(rank[0]) - pct(rank[5]) < 25;

    let h = `<div class="res-top"><button type="button" class="btn ghost" id="aanpassen">← Antwoorden aanpassen</button><button type="button" class="btn ghost" id="opnieuw">Opnieuw beginnen</button></div>` +
      `<h3>${ouder ? "Wat opvalt bij je kind" : "Jouw richting"}</h3>`;
    h += flat
      ? `<p>Je scores liggen dicht bij elkaar. Dat is heel gewoon: er is nog niets uitgesloten. Kijk vooral naar de bovenste twee en blijf breed verkennen.</p>`
      : `<p>${ouder ? "Je kind lijkt" : "Je lijkt"} vooral te passen bij <strong>${esc(GEBIEDEN[top[0]].naam)}</strong> en <strong>${esc(GEBIEDEN[top[1]].naam)}</strong>. Dat is een richting, geen vonnis.</p>`;

    h += `<div class="borden" aria-hidden="true"><div class="bord l">${esc(GEBIEDEN[top[0]].naam)}</div><div class="bord r">${esc(GEBIEDEN[top[1]].naam)}</div></div>`;
    h += `<div class="kaartwrap" id="uitslagKaart" style="margin-top:8px"></div>`;
    h += '<div class="bars">' +
      rank.map((k) => `<div class="bar"><span>${esc(GEBIEDEN[k].naam)}</span><span class="track"><span class="fill" style="width:${pct(k)}%;display:block"></span></span><span>${pct(k)}%</span></div>`).join("") +
      "</div>";

    const kw = topLijst(profiel.kwal);
    const dr = topLijst(profiel.drijf);
    h += `<h4>${ouder ? "Sterke punten van je kind" : "Jouw kwaliteiten"}</h4>` +
      (kw.length ? `<div class="tags">${kw.map((t) => `<span class="tag2">${esc(t)}</span>`).join("")}</div>` : `<p>Geen uitgesproken sterke punten aangegeven. Dat kan kloppen: veel mensen weten dit pas als ze het in de praktijk proberen.</p>`);
    h += `<h4>${ouder ? "Wat voor je kind telt" : "Wat voor jou telt"}</h4>` +
      (dr.length ? `<div class="tags">${dr.map((t) => `<span class="tag2">${esc(t)}</span>`).join("")}</div>` : `<p>Geen uitgesproken waarden aangegeven.</p>`);

    // Jij als student
    const lijstje = (xs) => xs.map((x) => x.toLowerCase()).join(", ").replace(/, ([^,]*)$/, " en $1");
    const delen = [];
    if (kw.length) delen.push(`sterk in ${lijstje(kw)}`);
    if (dr.length) delen.push(`${ouder ? "vindt" : "vindt"} ${lijstje(dr)} belangrijk`);
    h += `<div class="jij"><h4>${ouder ? "Je kind als student" : "Jij als student"}</h4><p>${ouder ? "Je kind is" : "Jij bent"} ${delen.length ? delen.join(" en ") : "nog volop aan het ontdekken wat bij je past"}. ` +
      `${ouder ? "Waarschijnlijk voelt je kind zich" : "Waarschijnlijk voel jij je"} thuis tussen studenten in <strong>${esc(GEBIEDEN[top[0]].naam)}</strong> en <strong>${esc(GEBIEDEN[top[1]].naam)}</strong>. Hieronder zie je wie je daar tegenkomt.</p></div>`;

    // Doorvragen: welke groepen passen het best
    const fams = Object.keys(famScore).filter((f) => famScore[f] >= 3).sort((a, b) => famScore[b] - famScore[a]).slice(0, 3);
    if (fams.length) {
      const famNaam = (f) => esc((FAMILIES.find((x) => x.id === f) || {}).naam || f);
      h += `<h4>Hier pas je waarschijnlijk het best</h4><div class="mini">${fams.map((f) => `<button type="button" data-fam="${f}">${famNaam(f)}</button>`).join("")}</div>`;
      const sel = fams.filter((f) => SELECTIE[f]);
      if (sel.length) {
        h += `<p class="praat">${toel === 2 ? "Je gaf aan liever geen toelatingsexamen, auditie of portfolio te willen. Let op: " : "Goed om te weten: "}` +
          sel.map((f) => `<strong>${famNaam(f)}</strong>: ${esc(SELECTIE[f])}`).join(" ") +
          `${toel === 2 ? " Vaak zijn er vergelijkbare opleidingen zonder selectie; vraag ernaar op de open dag." : ""}</p>`;
      }
    }

    top.forEach((k) => {
      const g = GEBIEDEN[k];
      h += `<h3 style="margin-top:30px;font-size:1.5rem;display:flex;align-items:center;gap:14px"><span class="res-ic">${icon(k, 44)}</span>${esc(g.naam)}</h3><p>${vt(g.uitleg)}</p>`;
      h += `<h4>Dit hebben deze opleidingen gemeen</h4><ul>${g.gemeen.map((t) => `<li>${vt(t)}</li>`).join("")}</ul>`;
      h += `<h4>Wat kun je ermee?</h4><ul>${g.kunJe.map((t) => `<li>${vt(t)}</li>`).join("")}</ul>`;
      h += `<h4>Wie zitten hier? <small>(verzonnen voorbeelden)</small></h4>${personaHtml(k)}`;
      h += `<p style="margin-top:8px"><strong>Studies om te bekijken:</strong></p><div class="mini">` +
        STUDIES.filter((s) => s.gebied === k).map((s) => `<button type="button" data-id="${s.id}">${esc(s.naam)} <small style="color:var(--muted)">(${s.niveau.join("/")})</small></button>`).join("") +
        "</div>";
      h += `<p style="margin-top:10px"><strong>Alle opleidingen in deze richting:</strong></p><div class="mini">` +
        FAMILIES.filter((f) => f.gebied === k).map((f) => `<button type="button" data-fam="${f.id}">${esc(f.naam)}</button>`).join("") +
        "</div>";
    });

    h += `<div class="ook"><h4>Ook het bekijken waard</h4><p><strong>${esc(GEBIEDEN[rank[2]].naam)}</strong> scoort ook goed. Niets is uitgesloten: <button type="button" class="linkbtn" data-gebied="${rank[2]}">bekijk die opleidingen</button>.</p></div>`;

    h += `<h4>Praat hier samen over</h4><ul>` +
      top.flatMap((k) => GEBIEDEN[k].praat).map((p) => `<li>${vt(p)}</li>`).join("") + "</ul>";

    h += `<h4>${ouder ? "Voor jou als ouder" : "Voor jou en je ouders"}</h4><ul>` +
      (ouder
        ? [
            "Laat je kind de test ook zelf maken en vergelijk de uitslagen. De verschillen zijn het interessantste gespreksonderwerp.",
            "Stel vragen in plaats van adviezen te geven. “Wat spreekt je hieraan aan?” werkt beter dan “Dit past bij jou”.",
            "Plan samen een meeloopdag of open dag bij één of twee opleidingen uit de lijst."
          ]
        : [
            "Laat je ouders de test ook invullen over jou. Bekijk samen waar het verschilt.",
            "Kies twee of drie studies uit de lijst en zoek een open dag of meeloopdag op.",
            "Je hoeft nu niets te beslissen. Dit is een eerste richting."
          ]
      ).map((t) => `<li>${vt(t)}</li>`).join("") + "</ul>";

    h += `<div class="actions" style="margin-top:20px"><a class="btn" href="#/opleidingen" style="text-decoration:none">Alle studies bekijken</a></div>`;
    h += `<p style="color:var(--muted);font-size:.9rem;margin-top:14px">Deze test is een gespreksstarter op basis van interesses, kwaliteiten en waarden, geen wetenschappelijk testresultaat.</p>`;

    const box = $("#uitslag");
    box.innerHTML = h;
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
      `<div class="vakbody"><h4>Wat je er waarschijnlijk écht leuk aan vindt</h4><p>${vt(v[1])}</p>` +
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
  const COL = { zorg: "#e8467c", weten: "#12a06e", tech: "#2f6fed", mens: "#7c4dff", creatief: "#e0a800", bedrijf: "#0e9aa7" };
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
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="#cdd8ee" fill-opacity=".9" stroke="#9fb0d4" stroke-width="1.3"/><circle cx="${x - 2}" cy="${y - 3}" r="${r * 0.45}" fill="#dde5f5" fill-opacity=".95"/>`;
  }
  function buildMap() {
    const TREES = [[30, 40], [64, 66], [330, 60], [360, 36], [540, 70], [570, 44], [870, 50], [846, 78], [34, 215], [66, 238], [880, 200], [868, 470], [840, 500], [880, 540], [60, 420], [100, 450], [330, 560], [364, 584], [560, 590], [250, 580], [420, 120], [900, 330]];
    const trees = TREES.map(([x, y], i) => tree(x, y, i)).join("");
    let contours = "";
    [[200, 70, 30], [200, 70, 60], [200, 70, 95], [720, 560, 50], [720, 560, 95], [720, 560, 140], [880, 300, 40], [880, 300, 80]].forEach(([cx, cy, r]) => {
      contours += `<ellipse cx="${cx}" cy="${cy}" rx="${r * 1.6}" ry="${r}"/>`;
    });
    let roads = DECOR.map((d) => `<path d="${d}" fill="none" stroke="#3157d5" stroke-opacity=".35" stroke-width="3" stroke-linecap="round" stroke-dasharray="1 8"/>`).join(""), regs = "";
    Object.keys(REG).forEach((k) => { roads += `<path class="roadedge" d="${PATHS[k]}"/>`; });
    Object.keys(REG).forEach((k) => {
      roads += `<path class="road" data-g="${k}" d="${PATHS[k]}"/>`;
      regs += building(k);
    });
    const pond = `<path d="M40 586C30 566 70 556 112 562S176 580 150 598S52 606 40 586Z" fill="#d3e2f8" stroke="#8aa6d8" stroke-width="1.3"/><path d="M62 580H128M72 588H118" stroke="#8aa6d8" stroke-opacity=".6" stroke-width=".9"/>`;
    return `<svg viewBox="0 0 900 616" role="group" aria-label="Plattegrond van de campus met zes faculteiten">` +
      `<defs><linearGradient id="gras" x1="0" y1="0" x2="0.4" y2="1"><stop offset="0" stop-color="#f0f4fc"/><stop offset="1" stop-color="#e2e9f6"/></linearGradient></defs><rect width="900" height="616" fill="url(#gras)"/>` +
      `<g fill="#dbe3f3" opacity=".55"><ellipse cx="320" cy="60" rx="190" ry="36"/><ellipse cx="760" cy="470" rx="170" ry="40"/><ellipse cx="90" cy="250" rx="110" ry="34"/><ellipse cx="520" cy="590" rx="160" ry="22"/></g>` +
      `<g fill="none" stroke="#3157d5" stroke-opacity=".10" stroke-width="1">${contours}</g>` +
      pond + trees + roads + regs +
      `<g class="hier" transform="translate(${START[0]} ${START[1]})"><rect x="-70" y="-16" width="140" height="32" rx="4" fill="#14213d"/><text y="5" text-anchor="middle" fill="#f4f1ea">HOOFDINGANG</text></g>` +
      `<g transform="translate(850 52)"><circle r="24" fill="none" stroke="#14213d" stroke-width="1.2"/><path d="M0 -20L5 -4L20 0L5 4L0 20L-5 4L-20 0L-5 -4Z" fill="#14213d"/><path d="M0 -20L5 -4L-5 -4Z" fill="#e8337a"/><text y="-31" text-anchor="middle" font-family="Segoe UI,system-ui,sans-serif" font-size="13" fill="#14213d">N</text></g>` +
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
  const VIEWS = { start: ["kaart"], test: ["test"], opleidingen: ["gids", "alle"], opendagen: ["opendagen"], uitleg: ["route", "niveaus", "vakken", "vertaal", "woorden"], ouders: ["ouders"] };
  let view = "";
  function go(v, target) {
    if (!VIEWS[v]) v = "start";
    if (v !== view) {
      view = v;
      document.querySelectorAll("main > section").forEach((s) => (s.hidden = !VIEWS[v].includes(s.id)));
      $(".hero").hidden = v !== "start";
      document.querySelectorAll(".tabs a").forEach((a) => a.setAttribute("aria-current", a.dataset.view === v ? "page" : "false"));
      if (location.hash !== "#/" + v) history.replaceState(null, "", "#/" + v);
    }
    const t = target && document.getElementById(target);
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
  function komend(inst) {
    const e = OD[inst];
    return e && Array.isArray(e.dagen) ? e.dagen.filter((d) => d.datum && (d.eind || d.datum) >= vandaag).sort((a, b) => a.datum.localeCompare(b.datum)) : [];
  }
  function schoolRegel(inst, opleiding, afst) {
    const k = komend(inst)[0];
    const site = veiligeUrl(OD[inst] && OD[inst].site);
    const domein = (typeof DOMEINEN === "object" && DOMEINEN[inst]) || (site ? new URL(site).hostname.replace(/^www[.]/, "") : "");
    const zoek = "https://duckduckgo.com/?q=" + encodeURIComponent(opleiding ? `${opleiding} ${domein ? "site:" + domein : inst}` : inst);
    let r = `<strong>${esc(inst)}</strong>`;
    if (afst) r += ` <span class="afst">${esc(afst.pl)} · ${afstandTekst(afst.d)}</span>`;
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
      (!odSoort || (odSoort === "online" ? /online/i.test(r.soort || "") : odSoort === "dichtbij" ? r.km !== null && r.km <= 50 : !/online/i.test(r.soort || ""))));
    let h = "", maand = "";
    f.forEach((r) => {
      const m = fmt(r.datum, { month: "long", year: "numeric" });
      if (m !== maand) { if (maand) h += "</div>"; h += `<h3 class="od-maand">${m}</h3><div class="od-groep">`; maand = m; }
      const link = veiligeUrl(r.aanmelden) || veiligeUrl(r.site);
      h += `<div class="od-rij"><div class="od-datum"><b>${fmt(r.datum, { day: "numeric" })}</b><span>${fmt(r.datum, { weekday: "short" })}</span></div>` +
        `<div class="od-info"><strong>${esc(r.inst)}</strong><span>${esc(r.soort || "open dag")}${r.plaats ? " · " + esc(r.plaats) : ""}${r.km !== null ? " · " + afstandTekst(r.km) : ""}${r.tijd ? " · " + esc(r.tijd) : ""}${r.eind && r.eind !== r.datum ? " · t/m " + fmt(r.eind, { day: "numeric", month: "short" }) : ""}</span></div>` +
        `<div class="od-knoppen">` +
        (link ? `<a class="btn ghost od-link" href="${esc(link)}" target="_blank" rel="noopener">${veiligeUrl(r.aanmelden) ? "Aanmelden" : "Info"} ↗</a>` : "") +
        (!/online/i.test(r.soort || "") ? `<a class="od-route" href="${esc(routeLink(r))}" target="_blank" rel="noopener">Route ↗</a>` : "") +
        `</div></div>`;
    });
    if (maand) h += "</div>";
    $("#odLijst").innerHTML = h || '<p class="empty">Geen open dagen gevonden. Probeer een andere school of stad.</p>';
    const scholen = new Set(f.map((r) => r.inst)).size;
    $("#odAantal").textContent = `${f.length} ${f.length === 1 ? "datum" : "data"} bij ${scholen} ${scholen === 1 ? "school" : "scholen"}`;
  }
  $("#odZoek").addEventListener("input", renderOpenDagen);
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
  $("#printGesprek").addEventListener("click", () => { document.body.classList.add("print-gesprek"); window.print(); setTimeout(() => document.body.classList.remove("print-gesprek"), 500); });

  $("#odTips").innerHTML = OPENDAG_TIPS.map((t) => `<div class="odtip"><h4>${esc(t[0])}</h4><ul>${t[1].map((p) => `<li>${vt(p)}</li>`).join("")}</ul></div>`).join("");

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
  route();
})();
