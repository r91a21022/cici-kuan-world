/* ============================================================
   核心引擎：角色、分頁、音效、慶祝、語音、存檔、徽章
   全部離線可用，不連外部服務。
   ============================================================ */
window.Core = (function () {
  const cfg = window.SITE_CONFIG || {};

  /* ---------- 安全的本機存檔（無痕視窗也不會壞） ---------- */
  function safeGet(k, def) {
    try { const v = localStorage.getItem(k); return v == null ? def : JSON.parse(v); }
    catch (e) { return def; }
  }
  function safeSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  /* ---------- 角色 ---------- */
  const PROFILES = {
    cici:  { name: "嬨嬨", art: () => ART.cici(), tag: "跳繩星球" },
    kuan:  { name: "寬寬", art: () => ART.kuan(), tag: "武術道場" },
    guest: { name: "一起玩", art: () => ART.owl(), tag: "訪客" }
  };
  let profile = safeGet("xkxk.profile", null);

  function pkey(sub) { return "xkxk." + (profile || "guest") + "." + sub; }
  function load(sub, def) { return safeGet(pkey(sub), def); }
  function save(sub, val) { safeSet(pkey(sub), val); }

  function setProfile(p) {
    profile = p;
    safeSet("xkxk.profile", p);
    paintProfilePill();
    document.dispatchEvent(new CustomEvent("profilechange", { detail: p }));
  }
  function paintProfilePill() {
    const pill = document.getElementById("profilePill");
    if (!pill || !profile) return;
    pill.querySelector(".ava").innerHTML = PROFILES[profile].art();
    pill.querySelector(".pname").textContent = PROFILES[profile].name;
  }

  /* ---------- 設定：音效、注音 ---------- */
  let settings = safeGet("xkxk.settings", { sound: true, zhuyin: false });
  function applySettings() {
    document.body.classList.toggle("show-zhuyin", !!settings.zhuyin);
    const sb = document.getElementById("btnSound");
    const zb = document.getElementById("btnZhuyin");
    if (sb) { sb.classList.toggle("on", !!settings.sound); sb.textContent = settings.sound ? "🔊" : "🔈"; }
    if (zb) zb.classList.toggle("on", !!settings.zhuyin);
  }
  function toggleSound() { settings.sound = !settings.sound; safeSet("xkxk.settings", settings); applySettings(); if (settings.sound) ding(); }
  function toggleZhuyin() {
    settings.zhuyin = !settings.zhuyin; safeSet("xkxk.settings", settings); applySettings();
    if (window.Zhuyin) Zhuyin.setOn(settings.zhuyin);
  }

  /* ---------- 音效（用瀏覽器內建，不需要音檔） ---------- */
  let actx;
  function tone(freq, dur, type, when, vol) {
    if (!settings.sound) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = type || "sine"; o.frequency.value = freq;
      const t = actx.currentTime + (when || 0);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(vol || 0.18, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(actx.destination);
      o.start(t); o.stop(t + dur);
    } catch (e) {}
  }
  function ding() { tone(660, 0.16, "sine", 0); tone(990, 0.22, "sine", 0.09); }
  function blip() { tone(300, 0.18, "triangle", 0, 0.14); }
  function pop() { tone(520, 0.12, "square", 0, 0.12); }

  /* ---------- 灑彩帶 ---------- */
  function confetti() {
    const cv = document.getElementById("confetti");
    if (!cv) return;
    const ctx = cv.getContext("2d");
    cv.width = innerWidth; cv.height = innerHeight;
    const colors = ["#FFC53D", "#FF7EB6", "#35BDCB", "#7B61FF", "#58C08A", "#FF7A59"];
    const bits = [];
    for (let i = 0; i < 90; i++) {
      bits.push({ x: Math.random() * cv.width, y: -20 - Math.random() * cv.height * 0.4,
        r: 5 + Math.random() * 7, c: colors[i % colors.length],
        vy: 2 + Math.random() * 3.5, vx: -1.5 + Math.random() * 3, a: Math.random() * 6, va: -0.2 + Math.random() * 0.4 });
    }
    let frames = 0;
    (function loop() {
      frames++;
      ctx.clearRect(0, 0, cv.width, cv.height);
      bits.forEach(b => {
        b.y += b.vy; b.x += b.vx; b.a += b.va;
        ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.a);
        ctx.fillStyle = b.c; ctx.fillRect(-b.r / 2, -b.r / 2, b.r, b.r * 0.6); ctx.restore();
      });
      if (frames < 110) requestAnimationFrame(loop);
      else ctx.clearRect(0, 0, cv.width, cv.height);
    })();
  }

  /* ---------- 小提示 ---------- */
  function toast(msg, good) {
    const wrap = document.getElementById("toastWrap");
    if (!wrap) return;
    const t = document.createElement("div");
    t.className = "toast" + (good ? " good" : "");
    t.textContent = msg;
    wrap.appendChild(t);
    setTimeout(() => { t.style.opacity = "0"; t.style.transition = "opacity .3s"; }, 1800);
    setTimeout(() => t.remove(), 2200);
  }
  function celebrate(msg) { confetti(); ding(); toast(msg || "太棒了！", true); }

  /* ---------- 把英文唸出來 ---------- */
  let _voices = [];
  function loadVoices() { try { _voices = speechSynthesis.getVoices() || []; } catch (e) {} }
  if ("speechSynthesis" in window) { loadVoices(); try { speechSynthesis.addEventListener("voiceschanged", loadVoices); } catch (e) {} }
  function speak(text, lang) {
    try {
      if (!("speechSynthesis" in window)) { toast("這個裝置不支援發音，看文字就好"); return; }
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang || "en-US"; u.rate = 0.9; u.pitch = 1.05;
      if (!_voices.length) loadVoices();
      const want = (lang || "en").slice(0, 2).toLowerCase();
      const v = _voices.find(vo => vo.lang && vo.lang.toLowerCase().indexOf(want) === 0);
      if (v) u.voice = v;
      u.onerror = function (e) { if (e && (e.error === "interrupted" || e.error === "canceled")) return; toast("這個裝置的發音好像沒打開，看文字也 OK"); };
      try { speechSynthesis.resume(); } catch (e) {}
      speechSynthesis.speak(u);
    } catch (e) { toast("這個裝置不支援發音，看文字就好"); }
  }

  /* ---------- 徽章（榮譽牆） ---------- */
  function awardBadge(id, label) {
    const b = load("badges", {});
    if (!b[id]) { b[id] = { label: label, at: Date.now() }; save("badges", b); celebrate("獲得新徽章：" + label); }
  }
  function getBadges() { return load("badges", {}); }

  /* ---------- 分頁切換 ---------- */
  const ZONE = { home: "home", english: "english", jump: "jump", wushu: "wushu",
    wishes: "family", honors: "family", dad: "family", about: "family" };
  function route(hash) {
    const name = (hash || location.hash || "#home").replace("#", "") || "home";
    const views = document.querySelectorAll(".view");
    let found = false;
    views.forEach(v => {
      const on = v.id === "view-" + name;
      v.hidden = !on; if (on) found = true;
    });
    if (!found) { location.hash = "#home"; return; }
    document.body.setAttribute("data-zone", ZONE[name] || "home");
    document.querySelectorAll("[data-nav]").forEach(a =>
      a.classList.toggle("on", a.getAttribute("data-nav") === name));
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.dispatchEvent(new CustomEvent("viewenter", { detail: name }));
  }

  /* ---------- 進站密碼（可選） ---------- */
  function gate(done) {
    const pw = (cfg.gatePassword || "").trim();
    if (!pw || sessionStorage.getItem("xkxk.gateok")) { done(); return; }
    const ov = document.getElementById("gate");
    ov.hidden = false;
    const input = document.getElementById("gateInput");
    const btn = document.getElementById("gateBtn");
    function tryOpen() {
      if (input.value === pw) { sessionStorage.setItem("xkxk.gateok", "1"); ov.hidden = true; done(); }
      else { input.value = ""; input.placeholder = "再試一次"; blip(); ov.querySelector(".box").animate(
        [{ transform: "translateX(-6px)" }, { transform: "translateX(6px)" }, { transform: "translateX(0)" }], { duration: 250 }); }
    }
    btn.onclick = tryOpen;
    input.addEventListener("keydown", e => { if (e.key === "Enter") tryOpen(); });
    input.focus();
  }

  /* ---------- 誰在玩：角色選擇 ---------- */
  function chooseWho(done) {
    if (profile) { paintProfilePill(); done(); return; }
    const ov = document.getElementById("who");
    ov.hidden = false;
    ov.querySelector('[data-who="cici"] .art').innerHTML = ART.cici();
    ov.querySelector('[data-who="kuan"] .art').innerHTML = ART.kuan();
    ov.querySelectorAll(".who-card").forEach(c => c.addEventListener("click", () => {
      setProfile(c.getAttribute("data-who")); pop(); ov.hidden = true; done();
    }));
  }

  return {
    load, save, safeGet, safeSet,
    get profile() { return profile; }, setProfile, PROFILES, paintProfilePill,
    settings, applySettings, toggleSound, toggleZhuyin,
    ding, blip, pop, confetti, toast, celebrate, speak,
    awardBadge, getBadges, route, gate, chooseWho
  };
})();
