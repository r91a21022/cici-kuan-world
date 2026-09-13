/* ============================================================
   英文遊戲引擎：聽、說、讀、寫、文法、閱讀，加上連連看、翻牌配對。
   內容依「誰在玩」自動切換難度：嬨嬨走 Grade 2、寬寬走 Grade 3。
   資料來自 data-english.js（單字）與 data-english-extra.js（文法/拼字/閱讀）。
   ============================================================ */
window.Games = (function () {
  var C = window.Core;
  function who() { return (C && C.profile === "kuan") ? "kuan" : "cici"; }
  function level() { return (window.DATA_ENGLISH && DATA_ENGLISH.levels) ? DATA_ENGLISH.levels[who()] : null; }
  function extra() {
    var e = window.DATA_ENGLISH_EXTRA, w = who();
    if (!e) return null;
    return { grammar: (e.grammar || {})[w] || [], spelling: (e.spelling || {})[w] || [], reading: (e.reading || {})[w] || [] };
  }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function h(html) { var d = document.createElement("div"); d.innerHTML = html; return d.firstElementChild; }
  function badge(id, label) { if (C) C.awardBadge(id, label); }
  function refreshZ() { if (window.Zhuyin) Zhuyin.refresh(); }

  /* ---------- 讀：單字圖鑑（翻卡） ---------- */
  function vocab(host) {
    var lv = level(); if (!lv) { host.innerHTML = "<p class='muted'>單字載入中…</p>"; return; }
    var st = { topic: lv.topics[0] };
    function unlocked() { return C.load("en." + who() + ".unlocked", {}); }
    function draw() {
      var un = unlocked();
      host.innerHTML =
        "<div class='topic-tabs' style='margin-bottom:12px'>" +
        lv.topics.map(function (t) { return "<button class='topic-tab " + (t === st.topic ? "on" : "") + "' data-t='" + t + "'>" + t + "</button>"; }).join("") +
        "</div><div class='card-grid' id='gVocab'></div>";
      host.querySelectorAll(".topic-tab").forEach(function (b) { b.onclick = function () { st.topic = b.dataset.t; draw(); }; });
      var pool = lv.words.filter(function (w) { return w.topic === st.topic; });
      host.querySelector("#gVocab").innerHTML = pool.map(function (w) {
        return "<div class='flip " + (un[w.en] ? "done" : "") + "' data-en='" + w.en + "'><div class='flip-inner'>" +
          "<div class='flip-face flip-front'>" + ART.emojiBadge(w.emoji) + "<div class='tapword'>點我翻開</div></div>" +
          "<div class='flip-face flip-back'><div class='en'>" + w.en + "</div><div class='zh'>" + w.zh + "</div><div class='ex'>" + w.ex + "</div><button class='say'>🔊 唸一次</button></div>" +
          "</div></div>";
      }).join("");
      host.querySelectorAll("#gVocab .flip").forEach(function (card) {
        var w = pool.find(function (x) { return x.en === card.dataset.en; });
        card.addEventListener("click", function (e) {
          var opening = !card.classList.contains("open");
          card.classList.toggle("open");
          if (opening) {
            C.speak(w.en); C.pop();
            var u = unlocked(); if (!u[w.en]) { u[w.en] = true; C.save("en." + who() + ".unlocked", u); card.classList.add("done");
              badge("en_first", "英文第一步");
              var n = Object.keys(u).length; if (n >= 10) badge("en_10", "單字小達人"); if (n >= 25) badge("en_25", "單字探險家"); }
          }
          if (e.target.classList.contains("say")) { e.stopPropagation(); C.speak(w.en); }
        });
      });
      refreshZ();
    }
    draw();
  }

  /* ---------- 聽：聽力尋寶 ---------- */
  function listen(host) {
    var lv = level(); if (!lv || lv.words.length < 4) { host.innerHTML = "<p class='muted'>單字載入中…</p>"; return; }
    function round() {
      var picks = shuffle(lv.words).slice(0, 4);
      var target = picks[Math.floor(Math.random() * picks.length)];
      host.innerHTML = "<p class='lead'>聽聽看，點出正確的那一個。</p>" +
        "<button class='btn ghost' id='gReplay' style='margin:10px 0'>🔊 再聽一次</button>" +
        "<div class='treasure-choices'>" + picks.map(function (w) { return "<button class='pick' data-en='" + w.en + "'>" + ART.emojiBadge(w.emoji, 84) + "</button>"; }).join("") + "</div>";
      host.querySelector("#gReplay").onclick = function () { C.speak(target.en); };
      host.querySelectorAll(".pick").forEach(function (p) {
        p.onclick = function () {
          if (p.dataset.en === target.en) { p.classList.add("right"); badge("listen_win", "聽力尋寶"); C.celebrate("答對了！"); setTimeout(round, 900); }
          else { p.classList.add("wrong"); C.blip(); C.toast("再試一次，你可以的"); setTimeout(function () { p.classList.remove("wrong"); }, 500); }
        };
      });
      setTimeout(function () { C.speak(target.en); }, 300);
      refreshZ();
    }
    round();
  }

  /* ---------- 說：跟我唸 ---------- */
  function speakGame(host) {
    var lv = level(); if (!lv) { host.innerHTML = "<p class='muted'>單字載入中…</p>"; return; }
    var pool = shuffle(lv.words), idx = 0;
    function draw() {
      var w = pool[idx % pool.length];
      host.innerHTML = "<div class='panel center'><div class='eyebrow'>跟我唸</div>" +
        "<div style='font-size:40px;margin:10px'>" + w.emoji + "</div>" +
        "<div style='font-size:30px;font-weight:900;color:var(--accent-deep)'>" + w.en + "</div>" +
        "<div class='muted' style='margin:6px 0 14px'>" + w.zh + "</div>" +
        "<button class='btn' id='gHear'>🔊 先聽老師唸</button> " +
        "<button class='btn sun' id='gDone'>我唸完了！👍</button></div>";
      host.querySelector("#gHear").onclick = function () { C.speak(w.en); };
      host.querySelector("#gDone").onclick = function () { C.celebrate("唸得很棒！"); badge("speak_try", "開口說英文"); idx++; draw(); };
      setTimeout(function () { C.speak(w.en); }, 250);
      refreshZ();
    }
    draw();
  }

  /* ---------- 寫：Spelling Bee 拼字挑戰 ---------- */
  function spell(host) {
    var ex = extra(); if (!ex || !ex.spelling.length) { host.innerHTML = "<p class='muted'>拼字題載入中…</p>"; return; }
    var pool = shuffle(ex.spelling), idx = 0;
    function draw() {
      var it = pool[idx % pool.length];
      host.innerHTML = "<div class='panel center'><div class='eyebrow'>Spelling Bee 拼字挑戰</div>" +
        "<p class='lead' style='margin:8px 0'>聽發音，把單字拼出來</p>" +
        "<p class='muted'>" + it.hint + "（" + it.zh + "）</p>" +
        "<button class='btn ghost' id='gHear' style='margin:12px 0'>🔊 再聽一次</button>" +
        "<div class='field' style='max-width:320px;margin:0 auto'><input id='gSpell' type='text' autocomplete='off' autocapitalize='off' placeholder='在這裡打出來' style='text-align:center;font-size:22px;letter-spacing:3px'></div>" +
        "<div id='gMsg' style='min-height:24px;margin-top:8px;font-weight:800'></div>" +
        "<button class='btn' id='gCheck' style='margin-top:6px'>檢查 ✅</button></div>";
      host.querySelector("#gHear").onclick = function () { C.speak(it.word); };
      var input = host.querySelector("#gSpell"), msg = host.querySelector("#gMsg");
      function check() {
        var v = (input.value || "").trim().toLowerCase();
        if (!v) { msg.textContent = "先打出你聽到的單字"; msg.style.color = "var(--coral)"; return; }
        if (v === it.word.toLowerCase()) { msg.textContent = "✓ 完全正確！"; msg.style.color = "var(--grass)"; C.celebrate("拼對了！"); badge("spell_win", "拼字高手"); setTimeout(function () { idx++; draw(); }, 900); }
        else { msg.textContent = "再試一次，仔細聽每個音"; msg.style.color = "var(--coral)"; C.blip(); }
      }
      host.querySelector("#gCheck").onclick = check;
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") check(); });
      setTimeout(function () { C.speak(it.word); input.focus(); }, 250);
      refreshZ();
    }
    draw();
  }

  /* ---------- 文法闖關 ---------- */
  function grammar(host) {
    var ex = extra(); if (!ex || !ex.grammar.length) { host.innerHTML = "<p class='muted'>文法題載入中…</p>"; return; }
    var pool = shuffle(ex.grammar), idx = 0, correct = 0;
    function draw() {
      var q = pool[idx % pool.length];
      host.innerHTML = "<div class='panel'><div class='eyebrow'>文法闖關　第 " + ((idx % pool.length) + 1) + " 題</div>" +
        "<p class='lead' style='margin:10px 0;font-size:22px'>" + q.q.replace("___", "<b style='color:var(--accent-deep)'>＿＿</b>") + "</p>" +
        "<p class='muted'>" + (q.zh || "") + "</p>" +
        "<div class='stack' style='margin-top:12px'>" + q.options.map(function (o, i) { return "<button class='btn ghost block gOpt' data-i='" + i + "' style='justify-content:flex-start'>" + o + "</button>"; }).join("") + "</div>" +
        "<div id='gMsg' style='min-height:24px;margin-top:10px;font-weight:800'></div></div>";
      host.querySelectorAll(".gOpt").forEach(function (b) {
        b.onclick = function () {
          var msg = host.querySelector("#gMsg");
          if (+b.dataset.i === q.answer) { b.style.background = "var(--grass)"; b.style.color = "#fff"; correct++; C.celebrate("答對了！"); badge("grammar_win", "文法達人"); setTimeout(function () { idx++; draw(); }, 800); }
          else { b.style.background = "#FDE1E1"; msg.textContent = "再想想，正確的是別的喔"; msg.style.color = "var(--coral)"; C.blip(); }
        };
      });
      refreshZ();
    }
    draw();
  }

  /* ---------- 閱讀角 ---------- */
  function reading(host) {
    var ex = extra(); if (!ex || !ex.reading.length) { host.innerHTML = "<p class='muted'>閱讀題載入中…</p>"; return; }
    var pool = shuffle(ex.reading), idx = 0;
    function draw() {
      var r = pool[idx % pool.length];
      host.innerHTML = "<div class='panel'><div class='eyebrow'>故事閱讀角</div>" +
        "<h3 style='margin:8px 0'>" + r.title + " <button class='say btn ghost' id='gHear' style='min-height:36px;padding:0 12px'>🔊 唸給我聽</button></h3>" +
        "<p class='lead' style='line-height:1.9'>" + r.text + "</p>" +
        "<p style='font-weight:800;margin-top:12px'>" + r.q + "</p>" +
        "<div class='stack' style='margin-top:8px'>" + r.options.map(function (o, i) { return "<button class='btn ghost block gOpt' data-i='" + i + "' style='justify-content:flex-start'>" + o + "</button>"; }).join("") + "</div>" +
        "<div id='gMsg' style='min-height:24px;margin-top:10px;font-weight:800'></div></div>";
      host.querySelector("#gHear").onclick = function () { C.speak(r.text); };
      host.querySelectorAll(".gOpt").forEach(function (b) {
        b.onclick = function () {
          var msg = host.querySelector("#gMsg");
          if (+b.dataset.i === r.answer) { b.style.background = "var(--grass)"; b.style.color = "#fff"; C.celebrate("讀懂了，太厲害！"); badge("read_win", "閱讀高手"); setTimeout(function () { idx++; draw(); }, 900); }
          else { b.style.background = "#FDE1E1"; msg.textContent = "再讀一次故事，答案就在裡面"; msg.style.color = "var(--coral)"; C.blip(); }
        };
      });
      refreshZ();
    }
    draw();
  }

  /* ---------- 連連看：英文配中文 ---------- */
  function match(host) {
    var lv = level(); if (!lv || lv.words.length < 5) { host.innerHTML = "<p class='muted'>單字載入中…</p>"; return; }
    function round() {
      var set = shuffle(lv.words).slice(0, 5);
      var left = set.slice(), right = shuffle(set);
      var sel = null, done = 0;
      host.innerHTML = "<p class='lead'>把英文和中文連起來（先點英文，再點它的中文）</p>" +
        "<div style='display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px'>" +
        "<div class='stack' id='gL'>" + left.map(function (w) { return "<button class='btn ghost block mItem' data-k='" + w.en + "'>" + w.emoji + " " + w.en + "</button>"; }).join("") + "</div>" +
        "<div class='stack' id='gR'>" + right.map(function (w) { return "<button class='btn ghost block mItem' data-k='" + w.en + "'>" + w.zh + "</button>"; }).join("") + "</div></div>";
      host.querySelectorAll("#gL .mItem").forEach(function (b) { b.onclick = function () { host.querySelectorAll("#gL .mItem").forEach(function (x) { x.style.outline = ""; }); b.style.outline = "4px solid var(--accent)"; sel = b; C.speak(b.dataset.k); }; });
      host.querySelectorAll("#gR .mItem").forEach(function (b) {
        b.onclick = function () {
          if (!sel) { C.toast("先點左邊的英文"); return; }
          if (sel.dataset.k === b.dataset.k) { sel.disabled = b.disabled = true; sel.style.background = b.style.background = "var(--grass)"; sel.style.color = b.style.color = "#fff"; sel.style.outline = ""; C.pop(); done++; sel = null; if (done === set.length) { C.celebrate("全部連對了！"); badge("match_win", "連連看高手"); setTimeout(round, 1000); } }
          else { C.blip(); C.toast("不是這一個，再看看"); }
        };
      });
      refreshZ();
    }
    round();
  }

  /* ---------- 翻牌配對：找出英文和圖案的一對 ---------- */
  function memory(host) {
    var lv = level(); if (!lv || lv.words.length < 6) { host.innerHTML = "<p class='muted'>單字載入中…</p>"; return; }
    function round() {
      var set = shuffle(lv.words).slice(0, 6);
      var cards = [];
      set.forEach(function (w) { cards.push({ k: w.en, face: w.emoji, big: true }); cards.push({ k: w.en, face: w.en, big: false }); });
      cards = shuffle(cards);
      var open = [], lock = false, matched = 0;
      host.innerHTML = "<p class='lead'>翻牌找一對：圖案配英文</p><div class='mem-grid'>" +
        cards.map(function (c, i) { return "<button class='mem-card' data-i='" + i + "' data-k='" + c.k + "'><span class='mem-face'>" + (c.big ? "<span style='font-size:34px'>" + c.face + "</span>" : "<b>" + c.face + "</b>") + "</span><span class='mem-back'>?</span></button>"; }).join("") + "</div>";
      host.querySelectorAll(".mem-card").forEach(function (b) {
        b.onclick = function () {
          if (lock || b.classList.contains("flip") || b.classList.contains("matched")) return;
          b.classList.add("flip"); open.push(b);
          if (open.length === 2) {
            lock = true;
            if (open[0].dataset.k === open[1].dataset.k) { setTimeout(function () { open.forEach(function (x) { x.classList.add("matched"); }); C.speak(open[0].dataset.k); C.pop(); open = []; lock = false; matched++; if (matched === set.length) { C.celebrate("全部配對成功！"); badge("memory_win", "記憶王"); setTimeout(round, 1000); } }, 400); }
            else { setTimeout(function () { open.forEach(function (x) { x.classList.remove("flip"); }); open = []; lock = false; }, 800); }
          }
        };
      });
      refreshZ();
    }
    round();
  }

  var MODES = [
    { id: "vocab", name: "單字圖鑑", emoji: "📖", skill: "讀", fn: vocab },
    { id: "listen", name: "聽力尋寶", emoji: "👂", skill: "聽", fn: listen },
    { id: "speak", name: "跟我唸", emoji: "🎤", skill: "說", fn: speakGame },
    { id: "spell", name: "拼字 Bee", emoji: "🐝", skill: "寫", fn: spell },
    { id: "grammar", name: "文法闖關", emoji: "🧩", skill: "文法", fn: grammar },
    { id: "reading", name: "故事閱讀", emoji: "📚", skill: "閱讀", fn: reading },
    { id: "match", name: "連連看", emoji: "🔗", skill: "玩", fn: match },
    { id: "memory", name: "翻牌配對", emoji: "🃏", skill: "玩", fn: memory }
  ];

  return { MODES: MODES, level: level, extra: extra, who: who };
})();
