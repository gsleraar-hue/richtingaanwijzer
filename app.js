(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, attrs = {}, html = "") => {
    const n = document.createElement(tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    n.innerHTML = html;
    return n;
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

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
        `<p class="fuitleg">${esc(f.uitleg)}</p>`;
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
    const X = FAM_EXTRA[f.id];
    const insts = o.i.slice(0, 40);
    $("#detailInhoud").innerHTML =
      `<div class="badges">${o.l.map((n) => `<span class="badge ${n}">${NIV_LABEL[n]}</span>`).join("")}<span class="badge gebied">${esc(f.naam)}</span></div>` +
      `<h2 id="dTitel">${esc(o.n)}</h2>` +
      (o.e ? `<p style="color:var(--muted)">Internationale naam: ${esc(o.e)}</p>` : "") +
      `<h3>Wat betekent dit?</h3><p>${esc(f.uitleg)} Soortgelijke opleidingen vind je in dezelfde groep.</p>` +
      (X ? `<h3>Wat kun je ermee?</h3><ul>${X.kunJe.map((k) => `<li>${esc(k)}</li>`).join("")}</ul>` : "") +
      (X
        ? `<h3>Wat heb je ervoor nodig?</h3><ul><li><strong>Vooropleiding:</strong> ${o.l.map((n) => `voor ${NIV_LABEL[n]}: ${VOOROPLEIDING[n]}`).join(". ")}</li><li>${esc(X.profiel)}</li><li><strong>Het helpt als je:</strong> ${X.eigen.map(esc).join(", ")}</li></ul><p class="praat" style="margin-top:8px">Toelatingseisen verschillen per school. Lees ze altijd bij de opleiding zelf.</p>`
        : "") +
      `<h3>Hoe lang?</h3><p>${o.l.map((n) => `${NIV_LABEL[n]}: ${EC_JAAR[n]}`).join(" · ")}</p>` +
      `<h3>Hoe studeer je?</h3><p>${o.v.map((v) => VORM[v] || v).join(", ") || "onbekend"}</p>` +
      `<h3>Waar kan het? (${o.i.length} ${o.i.length === 1 ? "school" : "scholen"})</h3><ul>${insts.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` +
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
    if (d) {
      d.open = true;
      d.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
        `<h3>${esc(s.naam)}</h3><p class="eng">Ook bekend als: ${esc(s.engels)}</p><p class="kort">${esc(s.kort)}</p><span class="more">Lees de uitleg →</span>`
    );
    b.addEventListener("click", () => openDetail(s.id));
    return b;
  }

  function openDetail(id) {
    const s = STUDIES.find((x) => x.id === id);
    if (!s) return;
    $("#detailInhoud").innerHTML =
      badges(s) +
      `<h2 id="dTitel">${esc(s.naam)}</h2><p class="eng" style="color:var(--muted)">Ook bekend als: ${esc(s.engels)}</p>` +
      `<h3>In gewone woorden</h3><p>${esc(s.kort)}</p>` +
      `<h3>Wat doe je er?</h3><p>${esc(s.doe)}</p>` +
      `<h3>Wat kun je ermee?</h3><ul>${s.kanJe.map((k) => `<li>${esc(k)}</li>`).join("")}</ul>` +
      `<h3>Wat heb je ervoor nodig?</h3><p>${esc(STUDIE_NODIG[s.id] || "")}</p>` +
      `<h3>Let op</h3><p>${esc(s.let)}</p>` +
      `<h3>Praat erover</h3><p class="praat">${esc(s.praat)}</p>`;
    const d = $("#detail");
    if (d.showModal) d.showModal();
    else d.setAttribute("open", "");
  }
  $("#detail").addEventListener("click", (e) => {
    if (e.target === $("#detail")) $("#detail").close();
  });

  /* ---------- Test ---------- */
  let who = "leerling";
  const ANTW = ["Totaal niet", "Een beetje", "Wel", "Heel erg"];
  const form = $("#testForm");

  function buildQuiz() {
    const kept = {};
    form.querySelectorAll("input:checked").forEach((i) => (kept[i.name] = i.value));
    form.querySelectorAll("input[name=kind]:checked").forEach((i) => (kept["kind" + i.value] = "1"));
    form.innerHTML = "";
    const kf = el("fieldset", { class: "q" });
    kf.innerHTML = `<legend><span class="nr">0.</span>${
      who === "ouder" ? "Waar werd je kind blij van toen het klein was?" : "Waar werd jij als kind blij van?"
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
    kf.appendChild(el("p", { class: "hint" }, "Wat je als kind leuk vond, zegt vaak iets over wat je nu nog steeds fijn vindt."));
    form.appendChild(kf);
    let nr = 0;
    const section = (titel, sub, prefix, items) => {
      form.appendChild(el("h3", { class: "part" }, `${esc(titel)} <small>${esc(sub)}</small>`));
      items.forEach((txt, i) => {
        nr++;
        const fs = el("fieldset", { class: "q" });
        fs.innerHTML = `<legend><span class="nr">${nr}.</span>${esc(txt)}</legend>`;
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
    const act = el("div", { class: "actions" });
    act.innerHTML =
      '<button class="btn" type="submit" id="klaar" disabled>Bekijk mijn uitslag</button><span class="progress" id="voortgang" aria-live="polite"></span>';
    form.appendChild(act);
    updateProgress();
  }
  function updateProgress() {
    const n = form.querySelectorAll("input[type=radio]:checked").length;
    const tot = VRAGEN.length + KWAL.length + DRIJF.length;
    $("#voortgang").textContent = `${n} van ${tot} ingevuld`;
    $("#klaar").disabled = n < tot;
  }
  form.addEventListener("change", updateProgress);

  document.querySelectorAll(".who .chip").forEach((b) =>
    b.addEventListener("click", () => {
      who = b.dataset.who;
      document.querySelectorAll(".who .chip").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      buildQuiz();
      $("#uitslag").hidden = true;
    })
  );

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const score = {};
    const max = {};
    Object.keys(GEBIEDEN).forEach((k) => ((score[k] = 0), (max[k] = 0)));
    VRAGEN.forEach((v, i) => {
      const c = form.querySelector(`input[name="q${i}"]:checked`);
      score[v[0]] += c ? Number(c.value) : 0;
      max[v[0]] += 3;
    });
    const profiel = { kwal: [], drijf: [] };
    [["k", KWAL, "kwal"], ["d", DRIJF, "drijf"]].forEach(([p, lijst, sleutel]) => {
      lijst.forEach((v, i) => {
        const c = form.querySelector(`input[name="${p}${i}"]:checked`);
        const val = c ? Number(c.value) : 0;
        profiel[sleutel].push({ naam: v[0], val });
        for (const g in v[3]) {
          score[g] += val * v[3][g];
          max[g] += 3 * v[3][g];
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
    showResult(rank, score, max, profiel);
  });

  function topLijst(items) {
    const s = items.slice().sort((a, b) => b.val - a.val).filter((x) => x.val >= 2).slice(0, 3);
    return s.length ? s.map((x) => x.naam) : [];
  }

  function showResult(rank, score, max, profiel) {
    const top = rank.slice(0, 2);
    const ouder = who === "ouder";
    const pct = (k) => Math.round((score[k] / max[k]) * 100);
    const flat = pct(rank[0]) - pct(rank[5]) < 25;

    let h = `<h3>${ouder ? "Wat opvalt bij je kind" : "Jouw richting"}</h3>`;
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

    top.forEach((k) => {
      const g = GEBIEDEN[k];
      h += `<h3 style="margin-top:26px;font-size:1.2rem">${esc(g.naam)}</h3><p>${esc(g.uitleg)}</p>`;
      h += `<h4>Dit hebben deze opleidingen gemeen</h4><ul>${g.gemeen.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
      h += `<h4>Wat kun je ermee?</h4><ul>${g.kunJe.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
      h += `<p style="margin-top:8px"><strong>Studies om te bekijken:</strong></p><div class="mini">` +
        STUDIES.filter((s) => s.gebied === k).map((s) => `<button type="button" data-id="${s.id}">${esc(s.naam)} <small style="color:var(--muted)">(${s.niveau.join("/")})</small></button>`).join("") +
        "</div>";
      h += `<p style="margin-top:10px"><strong>Alle opleidingen in deze richting:</strong></p><div class="mini">` +
        FAMILIES.filter((f) => f.gebied === k).map((f) => `<button type="button" data-fam="${f.id}">${esc(f.naam)}</button>`).join("") +
        "</div>";
    });

    h += `<h4>Praat hier samen over</h4><ul>` +
      top.flatMap((k) => GEBIEDEN[k].praat).map((p) => `<li>${esc(p)}</li>`).join("") + "</ul>";

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
      ).map((t) => `<li>${esc(t)}</li>`).join("") + "</ul>";

    h += `<div class="actions" style="margin-top:20px"><a class="btn" href="#gids" style="text-decoration:none">Alle studies bekijken</a><button class="btn ghost" type="button" id="opnieuw">Test opnieuw doen</button></div>`;
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
    $("#opnieuw").addEventListener("click", () => {
      form.reset();
      buildQuiz();
      box.hidden = true;
      $("#test").scrollIntoView();
    });
    box.focus();
    box.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ---------- Schoolvak -> studie ---------- */
  VAKKEN.forEach((v) => {
    const d = el("details", { class: "fam" });
    d.innerHTML =
      `<summary><span class="fname">${esc(v[0])}</span></summary>` +
      `<div class="vakbody"><h4>Wat je er waarschijnlijk écht leuk aan vindt</h4><p>${esc(v[1])}</p>` +
      `<h4>Waar dat terugkomt</h4><p>${esc(v[2])}</p>` +
      `<h4>Let op</h4><p>${esc(v[3])}</p>` +
      `<p><button type="button" class="chip" data-fams="${esc(v[4])}">Bekijk die opleidingen</button></p></div>`;
    $("#vakkenLijst").appendChild(d);
  });
  $("#vakkenLijst").addEventListener("click", (e) => {
    const b = e.target.closest("[data-fams]");
    if (!b) return;
    openFamily(b.dataset.fams.split(",")[0].trim());
  });
  NIEUW.forEach((n) => {
    $("#nieuwLijst").appendChild(el("div", { class: "nw" }, `<strong>${esc(n[0])}</strong><span>${esc(n[1])}</span>`));
  });

  /* ---------- Vertaler en woordenlijst ---------- */
  VERTAAL.forEach((v) => {
    const b = el("button", { type: "button", class: "flip", "aria-pressed": "false" },
      `<span class="front"><small>Engelse naam</small><strong>${esc(v[0])}</strong><em>Klik: wat is dit echt?</em></span>` +
      `<span class="back"><small>Eigenlijk</small><strong>${esc(v[1])}</strong><span>${esc(v[2])}</span></span>`);
    b.addEventListener("click", () => b.setAttribute("aria-pressed", String(b.getAttribute("aria-pressed") !== "true")));
    $("#vertaalLijst").appendChild(b);
  });
  WOORDEN.forEach((w) => {
    $("#woordenLijst").appendChild(el("div", { class: "woord" }, `<span class="wemoji">${w[0]}</span><div><strong>${esc(w[1])}</strong><p>${esc(w[2])}</p></div>`));
  });

  /* ---------- Landkaart ---------- */
  const REG = {
    zorg: [130, 135, "#e7b9ad", "#c99688", "gable"],
    weten: [450, 135, "#b9d3b0", "#94b58a", "dome"],
    tech: [770, 135, "#a9c2d6", "#86a3bc", "flat"],
    mens: [130, 365, "#cdbbe0", "#aa97c2", "clock"],
    creatief: [450, 365, "#f0cf8e", "#d3ad66", "wave"],
    bedrijf: [770, 365, "#a8d4c4", "#86b5a3", "tower"]
  };
  const START = [450, 548];
  const ROOF = "#46564f";
  const PATHS = {
    mens: "M450 530 C330 530 160 525 130 485",
    creatief: "M450 530 C450 515 450 500 450 485",
    bedrijf: "M450 530 C570 530 740 525 770 485",
    weten: "M450 530 C340 515 292 400 294 280 C296 256 390 256 450 253",
    zorg: "M450 530 C340 515 292 400 294 280 C296 252 190 256 130 253",
    tech: "M450 530 C560 515 608 400 606 280 C604 252 710 256 770 253"
  };
  function roofSVG(type, x, y, w, cx, fill) {
    switch (type) {
      case "gable":
        return `<path d="M${x - 10} ${y + 3} Q${x + 22} ${y - 5} ${cx} ${y - 40} Q${x + w - 22} ${y - 5} ${x + w + 10} ${y + 3}Z" fill="${ROOF}"/>`;
      case "dome":
        return `<rect x="${x - 8}" y="${y - 6}" width="${w + 16}" height="14" rx="7" fill="#3a4842"/><path d="M${cx - 52} ${y - 4} A52 52 0 0 1 ${cx + 52} ${y - 4}Z" fill="${ROOF}"/><circle cx="${cx}" cy="${y - 58}" r="5" fill="#d6a243"/>`;
      case "flat":
        return `<rect x="${x - 8}" y="${y - 8}" width="${w + 16}" height="16" rx="8" fill="${ROOF}"/><path d="M${cx + 44} ${y - 8}V${y - 36}" stroke="${ROOF}" stroke-width="3" stroke-linecap="round"/><circle cx="${cx + 44}" cy="${y - 38}" r="5" fill="#d6a243"/>`;
      case "clock":
        return `<path d="M${x - 10} ${y + 3} Q${x + 22} ${y - 5} ${cx} ${y - 36} Q${x + w - 22} ${y - 5} ${x + w + 10} ${y + 3}Z" fill="${ROOF}"/><circle cx="${cx}" cy="${y - 8}" r="13" fill="#fffdf8" stroke="#3a4842" stroke-width="3"/><path d="M${cx} ${y - 8}V${y - 16}M${cx} ${y - 8}L${cx + 6} ${y - 5}" stroke="#3a4842" stroke-width="2" stroke-linecap="round" fill="none"/>`;
      case "wave":
        return `<path d="M${x - 10} ${y + 6} C${x + 30} ${y - 36} ${cx - 25} ${y + 20} ${cx} ${y - 12} S${x + w - 30} ${y - 36} ${x + w + 10} ${y + 6}Z" fill="${ROOF}"/>`;
      default:
        return `<rect x="${cx - 34}" y="${y - 48}" width="68" height="50" rx="16" fill="${fill}"/><circle cx="${cx}" cy="${y - 28}" r="9" fill="rgba(255,255,255,.8)"/><rect x="${x - 8}" y="${y - 8}" width="${w + 16}" height="16" rx="8" fill="${ROOF}"/><path d="M${cx - 40} ${y - 46} Q${cx} ${y - 78} ${cx + 40} ${y - 46}Z" fill="${ROOF}"/>`;
    }
  }
  function building(k) {
    const [cx, cy, fill, side, type] = REG[k];
    const w = 170, h = 96, x = cx - w / 2, y = cy - 38;
    const win = [0, 1, 2, 3].map((i) => {
      const x0 = x + 18 + i * 38;
      return `<path d="M${x0} ${y + 60}V${y + 38}a11 11 0 0 1 22 0V${y + 60}Z" fill="rgba(255,253,248,.8)" stroke="rgba(29,43,40,.25)"/>`;
    }).join("");
    return `<g class="reg" data-gebied="${k}" tabindex="0" role="button" aria-label="Faculteit ${esc(GEBIEDEN[k].naam)}: bekijk opleidingen">` +
      `<g class="shape"><ellipse cx="${cx + 12}" cy="${y + h + 4}" rx="${w * 0.62}" ry="9" fill="rgba(20,40,30,.18)"/>` +
      `<path d="M${x + w} ${y + 10}Q${x + w + 14} ${y + 4} ${x + w + 26} ${y + 8}V${y + h - 8}Q${x + w + 14} ${y + h - 2} ${x + w} ${y + h}Z" fill="${side}"/>` +
      `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}"/>${win}` +
      `<path d="M${cx - 13} ${y + h}V${y + h - 26}a13 13 0 0 1 26 0V${y + h}Z" fill="#35504a"/>` +
      roofSVG(type, x, y, w, cx, fill) + `</g>` +
      `<rect class="pill" x="${cx - 92}" y="${y + h + 12}" width="184" height="44" rx="22"/>` +
      `<text class="pl" x="${cx}" y="${y + h + 29}" text-anchor="middle">FACULTEIT</text>` +
      `<text class="pn" x="${cx}" y="${y + h + 47}" text-anchor="middle">${esc(GEBIEDEN[k].naam)}</text>` +
      `<g class="flag" transform="translate(${x + w + 6} ${y - 30})"><path d="M0 46V0" stroke="#46564f" stroke-width="3" stroke-linecap="round"/><path d="M0 2C14 -4 24 8 40 2V24C24 30 14 18 0 24Z" fill="#c4573f"/><text class="n1" x="18" y="19">1</text><text class="n2" x="18" y="19">2</text></g></g>`;
  }
  function tree(x, y, i) {
    const r = i % 3 ? 17 : 22;
    return `<g transform="translate(${x} ${y})"><ellipse cx="6" cy="${r + 2}" rx="${r}" ry="6" fill="rgba(20,40,30,.14)"/><rect x="-3" y="2" width="6" height="${r}" fill="#8a6a3d"/>` +
      `<circle cx="-6" cy="-2" r="${r - 4}" fill="#5f9f63"/><circle cx="8" cy="-4" r="${r - 5}" fill="#6db371"/><circle cy="-10" r="${r - 4}" fill="${i % 2 ? "#5aa05e" : "#76bb78"}"/></g>`;
  }
  function buildMap() {
    const TREES = [[28, 40], [300, 36], [600, 36], [872, 40], [34, 255], [866, 255], [24, 470], [878, 470], [240, 360], [662, 360], [358, 112], [542, 112], [820, 575], [590, 570], [330, 585]];
    const trees = TREES.map(([x, y], i) => tree(x, y, i)).join("");
    let roads = "", regs = "";
    Object.keys(REG).forEach((k) => {
      roads += `<path class="roadedge" d="${PATHS[k]}"/>`;
    });
    Object.keys(REG).forEach((k) => {
      roads += `<path class="road" data-g="${k}" d="${PATHS[k]}"/><path class="roadmid" data-g="${k}" d="${PATHS[k]}"/>`;
      regs += building(k);
    });
    return `<svg viewBox="0 0 900 616" role="group" aria-label="Campuskaart met zes faculteiten">` +
      `<defs><linearGradient id="gras" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6e7c3"/><stop offset="1" stop-color="#bfd9a4"/></linearGradient>` +
      `<linearGradient id="water" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a7d2ea"/><stop offset="1" stop-color="#6fa9cc"/></linearGradient></defs>` +
      `<rect width="900" height="616" fill="url(#gras)"/>` +
      `<g fill="#b7d29b" opacity=".7"><ellipse cx="300" cy="60" rx="160" ry="34"/><ellipse cx="700" cy="270" rx="150" ry="30"/><ellipse cx="170" cy="260" rx="120" ry="26"/><ellipse cx="560" cy="590" rx="140" ry="22"/></g>` +
      `<ellipse cx="108" cy="578" rx="66" ry="20" fill="url(#water)" stroke="#5f93b5" stroke-width="2"/><ellipse cx="94" cy="573" rx="24" ry="5" fill="#fff" opacity=".4"/>` +
      trees + roads + regs +
      `<ellipse cx="450" cy="545" rx="86" ry="21" fill="#f1e6c6" stroke="#cdbd91" stroke-width="3"/>` +
      `<g class="hier" transform="translate(${START[0]} ${START[1]})"><circle class="pulse" r="22" fill="#c4573f"/>` +
      `<rect x="-66" y="-18" width="14" height="38" rx="6" fill="#8a6a3d"/><circle cx="-59" cy="-22" r="7" fill="#d6a243"/><rect x="52" y="-18" width="14" height="38" rx="6" fill="#8a6a3d"/><circle cx="59" cy="-22" r="7" fill="#d6a243"/>` +
      `<circle r="10" fill="#c4573f" stroke="#fffdf8" stroke-width="3"/>` +
      `<rect x="-64" y="28" width="128" height="28" rx="14" fill="#1f423a"/><text y="47" text-anchor="middle" fill="#fff">JIJ BENT HIER</text></g>` +
      `<g transform="translate(850 52)"><circle r="27" fill="rgba(255,253,248,.7)" stroke="#1d2b28" stroke-width="1.5"/><path d="M0 -22L6 -4L22 0L6 4L0 22L-6 4L-22 0L-6 -4Z" fill="#1d2b28"/><path d="M0 -22L6 -4L-6 -4Z" fill="#c4573f"/><text y="-33" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="13" fill="#1d2b28">N</text></g>` +
      `</svg>` +
      `<div class="kaartlijst">${Object.keys(REG).map((k) => `<button type="button" data-gebied="${k}"><small>Faculteit</small><strong>${esc(GEBIEDEN[k].naam)}</strong><span>${esc(GEBIEDEN[k].uitleg.split(". ")[0])}.</span></button>`).join("")}</div>`;
  }
  function highlightMap(root, top) {
    root.querySelectorAll(".reg").forEach((g) => g.classList.remove("top1", "top2"));
    root.querySelectorAll(".road,.roadmid").forEach((p) => p.classList.remove("hot", "hotmid"));
    top.forEach((k, i) => {
      root.querySelector(`.reg[data-gebied="${k}"]`)?.classList.add("top" + (i + 1));
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
    $("#alle").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  $("#kaartKaart").innerHTML = buildMap() +
    `<div class="kaartleg"><span>Jouw route (na de test)</span><span>Paadje naar een faculteit: via mbo, hbo of wo</span><span>Klik op een faculteit</span></div>`;
  document.addEventListener("click", (e) => {
    const g = e.target.closest("[data-gebied]");
    if (g) openRegion(g.dataset.gebied);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const g = e.target.closest && e.target.closest("[data-gebied]");
    if (g) { e.preventDefault(); openRegion(g.dataset.gebied); }
  });

  /* ---------- Init ---------- */
  const nc = $("#niveauChips");
  NIVEAUS.forEach((n) => chip(nc, n, "niveau", n));
  const gc = $("#gebiedChips");
  Object.keys(GEBIEDEN).forEach((k) => chip(gc, GEBIEDEN[k].naam, "gebied", k));
  $("#zoek").addEventListener("input", (e) => {
    state.zoek = e.target.value;
    renderList();
    if (state.zoek && !["#gids", "#alle"].includes(location.hash)) $("#gids").scrollIntoView({ behavior: "smooth" });
  });
  renderChips();
  renderList();
  buildQuiz();
})();
