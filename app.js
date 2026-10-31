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
    uk.innerHTML = buildMap() + `<div class="kaartleg"><span>🔴 Jouw route: de rode paadjes</span><span>👆 Klik op een faculteit voor de opleidingen</span></div>`;
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
    zorg: [170, 125, "🩺", "#ffc9c2"], weten: [450, 125, "🔬", "#cfe8c4"], tech: [730, 125, "💻", "#c3d7ff"],
    mens: [170, 305, "🤝", "#e1d2ff"], creatief: [450, 305, "🎨", "#ffe39b"], bedrijf: [730, 305, "💼", "#b8ecd9"]
  };
  const START = [450, 480];
  function buildMap() {
    let roads = "", regs = "";
    Object.keys(REG).forEach((k) => {
      const [cx, cy] = REG[k];
      const d = `M${START[0]} ${START[1] - 18} C ${START[0]} ${cy + 140}, ${cx} ${cy + 150}, ${cx} ${cy + 62}`;
      roads += `<path class="road" data-g="${k}" d="${d}"/><path class="roadmid" data-g="${k}" d="${d}"/>`;
    });
    Object.keys(REG).forEach((k) => {
      const [cx, cy, em, fill] = REG[k];
      regs += `<g class="reg" data-gebied="${k}" tabindex="0" role="button" aria-label="Faculteit ${esc(GEBIEDEN[k].naam)}: bekijk opleidingen">` +
        `<rect x="${cx - 105}" y="${cy - 52}" width="210" height="108" rx="8" fill="${fill}"/>` +
        `<rect class="roof" x="${cx - 114}" y="${cy - 72}" width="228" height="26" rx="6" fill="#101a33"/>` +
        `<text x="${cx}" y="${cy - 54}" font-size="12" text-anchor="middle" fill="#fff" letter-spacing="3">FACULTEIT</text>` +
        `<text x="${cx}" y="${cy - 8}" font-size="34" text-anchor="middle">${em}</text>` +
        `<text x="${cx}" y="${cy + 24}" font-size="15" text-anchor="middle" fill="#101a33">${esc(GEBIEDEN[k].naam)}</text>` +
        `<rect x="${cx - 10}" y="${cy + 34}" width="20" height="22" rx="3" fill="#101a33"/></g>`;
    });
    const TREES = [[40, 45], [310, 40], [600, 50], [870, 45], [40, 215], [610, 215], [870, 215], [40, 420], [300, 420], [610, 420], [870, 440], [120, 495], [780, 495], [250, 275], [660, 255], [345, 175], [575, 175]];
    const trees = TREES.map(([x, y], i) => `<g transform="translate(${x} ${y})"><rect x="-3" y="4" width="6" height="14" fill="#8a6a3d"/><circle cy="-5" r="${i % 3 ? 17 : 21}" fill="${i % 2 ? "#5aa05a" : "#6bb36b"}" stroke="#2f6b3a" stroke-width="2"/></g>`).join("");
    return `<svg viewBox="0 0 900 520" role="group" aria-label="Campuskaart met zes faculteiten">` +
      `<rect width="900" height="520" fill="#cfe3b5"/>` +
      `<g stroke="#bcd7a0" stroke-width="2" fill="none"><path d="M0 60 C200 20 380 80 560 40 S800 20 900 50"/><path d="M0 220 C150 190 330 250 520 215 S800 190 900 230"/><path d="M0 410 C170 380 330 430 520 400 S780 380 900 410"/></g>` +
      `<ellipse cx="300" cy="212" rx="62" ry="30" fill="#8ec5ea" stroke="#4f8fba" stroke-width="3"/><ellipse cx="292" cy="208" rx="22" ry="7" fill="#fff" opacity=".45"/>` +
      trees +
      roads + regs +
      `<g class="hier" transform="translate(${START[0]} ${START[1]})"><circle class="pulse" r="22" fill="#ff5d4a"/>` +
      `<rect x="-52" y="-46" width="10" height="34" fill="#8a6a3d" stroke="#101a33" stroke-width="2"/><rect x="42" y="-46" width="10" height="34" fill="#8a6a3d" stroke="#101a33" stroke-width="2"/><rect x="-66" y="-58" width="132" height="20" rx="10" fill="#ff5d4a" stroke="#101a33" stroke-width="2"/><text y="-44" text-anchor="middle" font-size="11" fill="#fff" letter-spacing="2">HOOFDINGANG</text>` +
      `<circle r="9" fill="#ffc531" stroke="#101a33" stroke-width="3"/>` +
      `<rect x="-62" y="16" width="124" height="26" rx="13" fill="#101a33"/><text y="34" text-anchor="middle" font-size="13" fill="#fff">JIJ BENT HIER</text></g>` +
      `<g transform="translate(850 55)"><circle r="34" fill="none" stroke="#101a33" stroke-width="2"/><polygon points="0,-32 6,-6 32,0 6,6 0,32 -6,6 -32,0 -6,-6" fill="#101a33"/><polygon points="0,-32 6,-6 -6,-6" fill="#ff5d4a"/><text y="-40" text-anchor="middle" font-size="14" font-weight="800" fill="#101a33">N</text></g>` +
      `</svg>`;
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
    `<div class="kaartleg"><span>🔴 Jouw route (na de test)</span><span>🟫 Paadje naar een faculteit: via mbo, hbo of wo</span><span>👆 Klik op een faculteit</span></div>`;
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
