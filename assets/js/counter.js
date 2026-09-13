/* ============================================================
   訪客計數器
   有設定 Supabase 就用雲端共享的真實數字（全家跨裝置同一個數）。
   沒設定就用本機數字，網站照常運作、不會出錯。
   ============================================================ */
window.Counter = (function () {
  const cfg = window.SITE_CONFIG || {};
  const LOCAL_KEY = "xkxk.localVisits";

  function renderDigits(el, n) {
    const s = String(Math.max(0, n));
    el.innerHTML = "";
    const odo = document.createElement("div");
    odo.className = "odo";
    for (const ch of s) {
      const d = document.createElement("div");
      d.className = "digit";
      d.textContent = ch;
      odo.appendChild(d);
    }
    el.appendChild(odo);
  }

  function localCount() {
    let n = parseInt(localStorage.getItem(LOCAL_KEY) || "0", 10);
    // 同一次開啟只加一次
    if (!sessionStorage.getItem("xkxk.counted")) {
      n += 1;
      localStorage.setItem(LOCAL_KEY, String(n));
      sessionStorage.setItem("xkxk.counted", "1");
    }
    return n + (cfg.counterBase || 0);
  }

  async function supabaseCount() {
    // 用 Supabase 的 REST，呼叫一個資料庫函式 increment_visits() 回傳最新總數
    const base = cfg.supabaseUrl.replace(/\/$/, "");
    const res = await fetch(base + "/rest/v1/rpc/increment_visits", {
      method: "POST",
      headers: {
        "apikey": cfg.supabaseAnonKey,
        "Authorization": "Bearer " + cfg.supabaseAnonKey,
        "Content-Type": "application/json"
      },
      body: "{}"
    });
    if (!res.ok) throw new Error("counter http " + res.status);
    const data = await res.json();
    const total = typeof data === "number" ? data : (data && data.total) || 0;
    return total + (cfg.counterBase || 0);
  }

  async function mount(el, labelEl) {
    const useCloud = cfg.supabaseUrl && cfg.supabaseAnonKey;
    try {
      const n = useCloud ? await supabaseCount() : localCount();
      renderDigits(el, n);
      if (labelEl) labelEl.querySelector("small").textContent = useCloud ? "全家一起看的人次" : "這台裝置看過的次數";
    } catch (e) {
      // 雲端失敗也不讓網站壞掉，退回本機
      renderDigits(el, localCount());
      if (labelEl) labelEl.querySelector("small").textContent = "這台裝置看過的次數";
    }
  }

  return { mount };
})();
