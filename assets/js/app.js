/* ============================================================
   互動邏輯：把資料變成畫面，接上所有互動與存檔。
   ============================================================ */
(function () {
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const C = window.Core;

  /* 徽章目錄（榮譽牆會顯示，達成才點亮） */
  const BADGES = [
    { id:"en_first",   emoji:"🌱", label:"英文第一步", desc:"解鎖第一張單字卡" },
    { id:"en_10",      emoji:"📚", label:"單字小達人", desc:"解鎖 10 張單字卡" },
    { id:"en_25",      emoji:"🏆", label:"單字探險家", desc:"解鎖 25 張單字卡" },
    { id:"listen_win", emoji:"👂", label:"聽力尋寶",   desc:"聽力尋寶答對一次" },
    { id:"jump_diary", emoji:"📔", label:"練習日記",   desc:"記錄 5 次練習" },
    { id:"wushu_5",    emoji:"🔥", label:"勤練不輟",   desc:"武術打卡 5 次" },
    { id:"wish_first", emoji:"💫", label:"許願第一發", desc:"許下第一個願望" }
  ];
  function shortName(n){ return String(n).split("・").pop(); }
  function allBadges() {
    var list = BADGES.slice();
    (window.DATA_JUMP.stages || []).forEach(function (s) { list.push({ id:"jump_"+s.id, emoji:s.emoji, label:"跳繩・"+shortName(s.name), desc:"過關："+s.goal }); });
    (window.DATA_WUSHU.stages || []).forEach(function (s) { list.push({ id:"wushu_"+s.id, emoji:s.emoji, label:"武術・"+shortName(s.name), desc:"過關："+s.goal }); });
    return list;
  }

  /* 影片：用不追蹤 cookie 的網域嵌入，並附上 YouTube 連結當退路 */
  function ytEmbed(id) {
    return `<div class="video16"><iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0&autoplay=1" title="示範影片" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
  }
  /* 影片卡：顯示真實 YouTube 縮圖＋播放鍵，點下去就地播放。
     縮圖載入失敗會自動隱藏，露出底下彩色卡，不會出現破圖。 */
  function videoFacade(id, title) {
    return `<a class="vcard" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener" aria-label="播放影片">
      <span class="vthumb"><img src="https://i.ytimg.com/vi/${id}/mqdefault.jpg" alt="" loading="lazy" onerror="this.style.display='none'"><span class="vplay">▶</span></span>
      <span class="vinfo"><span class="vtitle">${title || "影片"}</span><span class="vhint">在 YouTube 看 ▶</span></span>
    </a>`;
  }
  function motivationBlock(v) {
    if (!v) return "";
    return `<div class="vlabel">🎬 ${v.title}</div>${videoFacade(v.id, v.title)}<a class="ytlink" href="https://youtu.be/${v.id}" target="_blank" rel="noopener">在 YouTube 開啟 ↗</a>`;
  }
  function esc(s) { return String(s || "").replace(/"/g, "&quot;"); }
  function renderHeroes(elSel, heroes) {
    var el = document.querySelector(elSel);
    if (!el || !heroes || !heroes.length) return;
    el.innerHTML = `<div class="vgrid">${heroes.map(function (h) {
      return `<div class="vwrap">${videoFacade(h.id, h.title)}${h.note ? `<p class="muted vnote">${h.note}</p>` : ""}</div>`;
    }).join("")}</div>`;
  }

  /* 今日挑戰：3 選 1，自己選、做完撒花 */
  function renderChallenge(zoneKey, list, elSel) {
    var el = document.querySelector(elSel); if (!el || !list || !list.length) return;
    var day = new Date().toISOString().slice(0, 10);
    var seed = 0; for (var i = 0; i < day.length; i++) seed += day.charCodeAt(i);
    var picks = [], used = {};
    for (var k = 0; k < 3 && k < list.length; k++) { var idx = (seed + k * 7) % list.length; while (used[idx]) idx = (idx + 1) % list.length; used[idx] = 1; picks.push(list[idx]); }
    var st = C.load(zoneKey + ".challenge", {});
    var doneToday = st.date === day && st.done;
    var chosen = st.date === day ? st.chosen : null;
    el.innerHTML = `<p class="lead" style="margin-bottom:10px">今天想挑戰哪一個？自己選一個！</p>
      <div class="chip-row">${picks.map(function (p) { return `<button class="chip ${p === chosen ? 'on' : ''}" data-c="${esc(p)}">${p}</button>`; }).join("")}</div>
      <button class="btn block" id="${zoneKey}ChallDone" style="margin-top:14px">${doneToday ? '今天挑戰完成 ✓' : '我完成挑戰了！'}</button>`;
    el.querySelectorAll(".chip").forEach(function (c) {
      c.onclick = function () { el.querySelectorAll(".chip").forEach(function (x) { x.classList.remove("on"); }); c.classList.add("on"); C.save(zoneKey + ".challenge", { date: day, chosen: c.dataset.c, done: doneToday }); C.pop(); };
    });
    document.getElementById(zoneKey + "ChallDone").onclick = function () {
      var s2 = C.load(zoneKey + ".challenge", {});
      C.save(zoneKey + ".challenge", { date: day, chosen: s2.chosen || picks[0], done: true });
      C.celebrate("今天的挑戰完成！你很棒"); renderChallenge(zoneKey, list, elSel);
      if (window.Zhuyin) Zhuyin.refresh();
    };
  }

  /* 秀給爸媽看：按下記錄這一刻，爸媽可留言 */
  function renderShowParent(zoneKey, elSel) {
    var el = document.querySelector(elSel); if (!el) return;
    el.innerHTML = `<button class="btn sun big block" id="${zoneKey}ShowBtn">📣 我要秀給爸爸媽媽看</button>
      <div id="${zoneKey}ParentBox" hidden style="margin-top:14px">
        <p class="lead">爸爸媽媽，寫一句話給他：</p>
        <div class="wish-input" style="margin-top:8px"><textarea id="${zoneKey}ParentText" placeholder="例如：你今天好認真，媽媽好感動！"></textarea></div>
        <button class="btn ghost" id="${zoneKey}ParentSave" style="margin-top:8px">留言 💛</button>
      </div>
      <div class="log-list" id="${zoneKey}ParentList" style="margin-top:14px"></div>`;
    function paint() { document.getElementById(zoneKey + "ParentList").innerHTML = C.load(zoneKey + ".parentNotes", []).slice(-5).reverse().map(function (n) { return `<div class="log-item"><span>💛</span><span>${n.t}</span></div>`; }).join(""); }
    paint();
    document.getElementById(zoneKey + "ShowBtn").onclick = function () { C.celebrate("太棒了！快把爸爸媽媽拉過來看"); document.getElementById(zoneKey + "ParentBox").hidden = false; };
    document.getElementById(zoneKey + "ParentSave").onclick = function () {
      var t = document.getElementById(zoneKey + "ParentText").value.trim(); if (!t) return;
      var ns = C.load(zoneKey + ".parentNotes", []); ns.push({ t: t, at: Date.now() }); C.save(zoneKey + ".parentNotes", ns);
      document.getElementById(zoneKey + "ParentText").value = ""; C.toast("留言收到了 💛", true); paint();
      if (window.Zhuyin) Zhuyin.refresh();
    };
  }

  /* 跳繩節拍器 */
  var metroTimer = null;
  function renderMetronome(elSel) {
    var el = document.querySelector(elSel); if (!el) return;
    el.innerHTML = `<div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
      <div class="metro-dot" id="metroDot"></div>
      <div style="flex:1;min-width:200px">
        <label style="font-weight:800">速度：<span id="metroBpm">120</span> BPM</label>
        <input type="range" id="metroRange" min="60" max="180" value="120" style="width:100%;margin-top:8px">
      </div>
      <button class="btn" id="metroToggle">▶ 開始</button>
    </div>`;
    var range = document.getElementById("metroRange"), bpmL = document.getElementById("metroBpm"), dot = document.getElementById("metroDot"), tog = document.getElementById("metroToggle");
    function tick() { dot.classList.remove("beat"); void dot.offsetWidth; dot.classList.add("beat"); C.pop(); }
    function stop(keep) { if (metroTimer) { clearInterval(metroTimer); metroTimer = null; } if (!keep) tog.textContent = "▶ 開始"; }
    function start() { stop(true); metroTimer = setInterval(tick, 60000 / (+range.value)); tick(); tog.textContent = "⏸ 停止"; }
    range.oninput = function () { bpmL.textContent = range.value; if (metroTimer) start(); };
    tog.onclick = function () { if (metroTimer) stop(); else start(); };
  }

  /* 通用闖關引擎：跳繩和武術共用 */
  function renderStageZone(cfg) {
    var data = cfg.data, zk = cfg.zoneKey, stages = data.stages || [];
    var cleared = C.load(zk + ".stages", {});
    var firstUndone = stages.findIndex(function (s) { return !cleared[s.id]; });
    if (firstUndone < 0) firstUndone = stages.length;
    var prog = "";
    stages.forEach(function (s, i) {
      var cls = cleared[s.id] ? "done" : (i === firstUndone ? "now" : "");
      prog += `<div class="stage-dot ${cls}">${cleared[s.id] ? "✓" : (i + 1)}</div>`;
      if (i < stages.length - 1) prog += `<div class="stage-line"></div>`;
    });
    document.querySelector(cfg.progressEl).innerHTML = prog;

    var el = document.querySelector(cfg.stagesEl);
    el.innerHTML = stages.map(function (s) {
      var done = !!cleared[s.id];
      return `<div class="stage ${done ? 'done' : ''}">
        <div class="stage-head"><span class="em">${s.emoji}</span><h3>${s.name}</h3></div>
        <div class="stage-goal">🎯 ${s.goal}</div>
        ${s.video ? `<div class="vlabel">🎬 看示範動作</div>${videoFacade(s.video.id, s.video.title)}` : ''}
        <ul class="steps">${s.steps.map(function (t, i) { return `<li><span class="n">${i + 1}</span><span>${t}</span></li>`; }).join("")}</ul>
        <button class="btn clearbtn block" data-stage="${s.id}">${done ? '已過關 ✓' : '我過關了！'}</button>
      </div>`;
    }).join("");

    el.querySelectorAll(".clearbtn").forEach(function (btn) {
      btn.onclick = function () {
        var id = btn.dataset.stage, cl = C.load(zk + ".stages", {});
        cl[id] = !cl[id]; C.save(zk + ".stages", cl);
        if (cl[id]) {
          var s = stages.find(function (x) { return x.id === id; });
          C.awardBadge(zk + "_" + id, (zk === "jump" ? "跳繩・" : "武術・") + shortName(s.name));
          C.celebrate("過關！太強了！");
        }
        renderStageZone(cfg);
      };
    });
  }

  /* ---------- 頁首與首頁的圖 ---------- */
  function paintStaticArt() {
    $$("[data-art='logo']").forEach(e => e.innerHTML = ART.logo());
    const hh = $("[data-art='hero-home']");
    if (hh) hh.innerHTML = `<div style="flex:1;max-width:210px">${ART.cici()}</div><div style="flex:1;max-width:210px">${ART.kuan()}</div>`;
    const ho = $("[data-art='hero-owl']");
    if (ho) ho.innerHTML = `<div style="display:flex;gap:4px;align-items:flex-end"><div style="flex:1;max-width:175px">${ART.cici()}</div><div style="flex:1;max-width:175px">${ART.kuan()}</div></div>`;
    const dj = $("[data-art='door-jump']"); if (dj) dj.innerHTML = ART.cici();
    const dw = $("[data-art='door-wushu']"); if (dw) dw.innerHTML = ART.kuan();
    const de = $("[data-art='door-english']");
    if (de) de.innerHTML = `<div style="display:flex;gap:1px"><div style="flex:1">${ART.cici()}</div><div style="flex:1">${ART.kuan()}</div></div>`;
    const hj = $("[data-art='hero-jump']"); if (hj) hj.innerHTML = ART.cici();
    const hw = $("[data-art='hero-wushu']"); if (hw) hw.innerHTML = ART.kuan();
  }

  /* ---------- 首頁：每日一句 + 計數器 ---------- */
  let counterMounted = false;
  function renderHome() {
    const d = DATA_ENGLISH.daily[new Date().getDate() % DATA_ENGLISH.daily.length];
    const box = $("#dailyLine");
    if (box) box.innerHTML = `<b>${d.en}</b><span class="muted">　${d.zh}</span>
      <button class="say btn ghost" style="min-height:40px;padding:0 16px" id="daySay">🔊 唸給我聽</button>`;
    const say = $("#daySay"); if (say) say.onclick = () => C.speak(d.en);
    var pr = C.profile === "kuan" ? "kuan" : "cici";
    var set = (window.DATA_ENCOURAGE && DATA_ENCOURAGE[pr]) || [];
    var enc = $("#dailyEncourage");
    if (enc && set.length) {
      var q = set[new Date().getDate() % set.length];
      enc.innerHTML = `<div class="ava2">${pr === "kuan" ? ART.kuan() : ART.cici()}</div>
        <div><div class="eyebrow">今天給${pr === "kuan" ? "寬寬" : "嬨嬨"}的一句話</div><p class="enc-quote">${q}</p></div>`;
    }
    if (!counterMounted) { C.mountCounter(); counterMounted = true; }
    if (window.Zhuyin) Zhuyin.refresh();
  }

  /* ---------- 英文區（看誰在玩自動分難度＋八種玩法） ---------- */
  var enMode = "vocab";
  function renderEnglish() {
    var play = $("#enPlay");
    if (!window.Games || !window.DATA_ENGLISH || !DATA_ENGLISH.levels) { if (play) play.innerHTML = "<p class='muted'>英文內容載入中，稍等一下…</p>"; return; }
    var lv = Games.level();
    var w = C.profile === "kuan" ? "寬寬" : "嬨嬨";
    $("#enWho").innerHTML = "<div class='eyebrow'>現在是 " + w + " 的英文</div><p class='lead' style='margin-top:6px'>難度：<b>" + (lv ? lv.label : "") + "</b>。想換人玩，點右上角的頭像。</p>";
    $("#enModes").innerHTML = Games.MODES.map(function (m) {
      return "<button class='mode-btn " + (m.id === enMode ? "on" : "") + "' data-m='" + m.id + "'><span class='me'>" + m.emoji + "</span><b>" + m.name + "</b><small>" + m.skill + "</small></button>";
    }).join("");
    $$("#enModes .mode-btn").forEach(function (b) { b.onclick = function () { enMode = b.dataset.m; renderEnglish(); }; });
    var mode = Games.MODES.find(function (m) { return m.id === enMode; });
    if (mode && play) mode.fn(play);
    if (window.Zhuyin) Zhuyin.refresh();
  }

  /* ---------- 跳繩星球 ---------- */
  function renderJump() {
    var c = DATA_JUMP.course;
    $("#courseCard").innerHTML = `<div class="ci">🎓</div><div class="ct"><b>${c.name}</b><small>${c.desc}</small></div>
      <a class="btn" href="${c.url}" target="_blank" rel="noopener">進入課程 →</a>`;
    renderHeroes("#jumpHeroes", DATA_JUMP.heroes);
    renderStageZone({ data: DATA_JUMP, zoneKey: "jump", stagesEl: "#jumpStages", progressEl: "#jumpProgress" });
    renderJumpLog();
    renderCountdown();
    $("#jumpFact").textContent = DATA_JUMP.facts[Math.floor(Math.random() * DATA_JUMP.facts.length)];
    renderChallenge("jump", DATA_JUMP.challenges, "#jumpChallenge");
    renderMetronome("#jumpMetronome");
    renderShowParent("jump", "#jumpShowParent");
    renderSpiritSafety(DATA_JUMP, "#jumpSpirit", "#jumpSafety");
    if (window.Zhuyin) Zhuyin.refresh();
  }
  function renderSpiritSafety(data, spiritSel, safetySel) {
    var sp = document.querySelector(spiritSel), sa = document.querySelector(safetySel);
    if (sp && data.spirit) sp.innerHTML = `<div class="eyebrow">${data.spirit.title}</div><p class="lead" style="margin-top:8px">${data.spirit.text}</p>`;
    if (sa && data.safety) sa.innerHTML = `<h3 style="margin-bottom:10px">🛡️ ${data.safety.title}</h3><ul class="steps">${data.safety.points.map(function (p) { return '<li><span class="n">✓</span><span>' + p + '</span></li>'; }).join("")}</ul>`;
  }
  function renderJumpLog() {
    const log = C.load("jump.log", []);
    const last = log.slice(-7);
    const max = Math.max(1, ...last.map(x => x.mins || 0));
    $("#jumpBars").innerHTML = last.length ? last.map(x =>
      `<div class="bar" style="height:${Math.round((x.mins/max)*100)}%"><span>${x.mins}</span><small>${(x.date||'').slice(5)}</small></div>`
    ).join("") : `<p class="muted">還沒有紀錄，練完按下面記一筆，這裡就會長出你的進步。</p>`;
    $("#jumpLogList").innerHTML = log.slice(-6).reverse().map(x =>
      `<div class="log-item"><span>${x.date}</span><span>${x.mins} 分鐘・最高 ${x.best} 下${x.note?'・'+x.note:''}</span></div>`).join("");
  }
  function renderCountdown() {
    const target = C.load("jump.race", "");
    const box = $("#countdown");
    if (!target) { box.innerHTML = `<p class="muted">設定下一次比賽的日期，就會開始倒數。</p>`; return; }
    const diff = new Date(target + "T00:00:00") - new Date();
    if (diff <= 0) { box.innerHTML = `<div class="quote" style="margin:0">比賽加油，你準備好了！</div>`; return; }
    const days = Math.floor(diff/86400000), hrs = Math.floor(diff/3600000)%24, mins = Math.floor(diff/60000)%60;
    box.innerHTML = `<div class="count-box"><b>${days}</b><small>天</small></div>
      <div class="count-box"><b>${hrs}</b><small>時</small></div>
      <div class="count-box"><b>${mins}</b><small>分</small></div>`;
  }

  /* ---------- 武術道場 ---------- */
  function renderWushu() {
    renderHeroes("#wushuHeroes", DATA_WUSHU.heroes);
    renderStageZone({ data: DATA_WUSHU, zoneKey: "wushu", stagesEl: "#wushuStages", progressEl: "#wushuProgress" });
    renderWushuLog();
    $("#virtueLine").textContent = DATA_WUSHU.virtues[new Date().getDate() % DATA_WUSHU.virtues.length];
    if ($("#wushuFact")) $("#wushuFact").textContent = DATA_WUSHU.facts[Math.floor(Math.random() * DATA_WUSHU.facts.length)];
    renderChallenge("wushu", DATA_WUSHU.challenges, "#wushuChallenge");
    renderShowParent("wushu", "#wushuShowParent");
    renderSpiritSafety(DATA_WUSHU, "#wushuSpirit", "#wushuSafety");
    if (window.Zhuyin) Zhuyin.refresh();
  }
  function renderWushuLog() {
    const log = C.load("wushu.log", []);
    $("#wushuCount").textContent = log.length;
    $("#wushuLogList").innerHTML = log.slice(-6).reverse().map(x =>
      `<div class="log-item"><span>${x.date}</span><span>${x.item}・${x.mins} 分鐘</span></div>`).join("")
      || `<p class="muted">今天練了什麼？打一次卡，這裡就會記起來。</p>`;
  }

  /* ---------- 許願池 ---------- */
  let wishWho = "cici";
  function renderWishes() {
    $$("#wishWho .chip").forEach(c => c.classList.toggle("on", c.dataset.who === wishWho));
    const list = C.safeGet("xkxk.wishes", []);
    $("#wishList").innerHTML = list.slice().reverse().map(w =>
      `<div class="wish"><div class="who">${w.who}</div><div>${w.text}</div><div class="when">${w.date}</div></div>`).join("")
      || `<p class="muted">還沒有願望。想要網站多一個什麼，打在上面按下許願吧。</p>`;
    if (window.Zhuyin) Zhuyin.refresh();
  }

  /* ---------- 榮譽牆 ---------- */
  function renderHonors() {
    const got = C.getBadges();
    const who = C.profile ? C.PROFILES[C.profile].name : "";
    $("#honorWho").textContent = who;
    $("#honorGrid").innerHTML = allBadges().map(b => `
      <div class="medal ${got[b.id]?'':'locked'}">
        <div class="disc">${b.emoji}</div>
        <b>${b.label}</b><small>${b.desc}</small>
      </div>`).join("");
    const n = Object.keys(got).length;
    $("#honorCount").textContent = `${who} 已經收集 ${n} 個徽章`;
  }

  /* ---------- 綁定固定按鈕 ---------- */
  function wireStatic() {
    $("#btnSound").onclick = () => C.toggleSound();
    $("#btnZhuyin").onclick = () => C.toggleZhuyin();
    $("#profilePill").onclick = () => { C.setProfile(C.profile === "cici" ? "kuan" : "cici"); C.toast("換人玩囉：" + C.PROFILES[C.profile].name); };

    // 跳繩：記一筆練習
    $("#jumpLogForm").addEventListener("submit", e => {
      e.preventDefault();
      const log = C.load("jump.log", []);
      log.push({ date: $("#jDate").value || new Date().toISOString().slice(0,10),
        mins: +$("#jMins").value || 0, best: +$("#jBest").value || 0, note: $("#jNote").value.trim() });
      C.save("jump.log", log);
      if (log.length >= 5) C.awardBadge("jump_diary", "練習日記");
      e.target.reset(); C.celebrate("記好了，你今天很棒！"); renderJumpLog();
    });
    $("#raceSave").onclick = () => { C.save("jump.race", $("#raceDate").value); renderCountdown(); C.toast("比賽日設定好了"); };

    // 武術：打卡
    $("#wushuLogForm").addEventListener("submit", e => {
      e.preventDefault();
      const log = C.load("wushu.log", []);
      log.push({ date: new Date().toISOString().slice(0,10), item: $("#wItem").value, mins: +$("#wMins").value || 0 });
      C.save("wushu.log", log);
      if (log.length >= 5) C.awardBadge("wushu_5", "勤練不輟");
      e.target.reset(); C.celebrate("打卡成功，紮實又一天！"); renderWushuLog();
    });

    // 許願
    $$("#wishWho .chip").forEach(c => c.onclick = () => { wishWho = c.dataset.who; renderWishes(); });
    $("#wishForm").addEventListener("submit", e => {
      e.preventDefault();
      const text = $("#wishText").value.trim(); if (!text) return;
      const list = C.safeGet("xkxk.wishes", []);
      list.push({ who: wishWho === "cici" ? "嬨嬨" : wishWho === "kuan" ? "寬寬" : "全家",
        text, date: new Date().toLocaleDateString("zh-TW") });
      C.safeSet("xkxk.wishes", list);
      C.awardBadge("wish_first", "許願第一發");
      $("#wishText").value = ""; C.celebrate("願望投進許願池了！"); renderWishes();
    });
  }

  /* ---------- 依分區重畫 ---------- */
  function renderProfileViews() {
    C.paintProfilePill(); renderEnglish(); renderJump(); renderWushu(); renderHonors();
  }

  document.addEventListener("viewenter", e => {
    const v = e.detail;
    if (v === "home") renderHome();
    if (v === "english") renderEnglish();
    if (v === "jump") renderJump();
    if (v === "wushu") renderWushu();
    if (v === "wishes") renderWishes();
    if (v === "honors") renderHonors();
  });
  document.addEventListener("profilechange", renderProfileViews);
  window.addEventListener("hashchange", () => C.route());

  /* 讓 core 能呼叫計數器 */
  C.mountCounter = function () {
    const el = $("#counterDigits"), lbl = $("#counterLabel");
    if (el) window.Counter.mount(el, lbl);
  };

  /* ---------- 啟動 ---------- */
  function boot() {
    paintStaticArt();
    C.applySettings();
    wireStatic();
    renderProfileViews();
    renderHome(); renderWishes();
    C.route(location.hash);
    if (window.Zhuyin && C.settings && C.settings.zhuyin) Zhuyin.setOn(true);
  }
  C.gate(() => C.chooseWho(boot));
})();
