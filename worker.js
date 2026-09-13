// 家人密碼鎖（伺服器端）。
// 只有在 Cloudflare 設定了 SITE_PASSWORD 這個變數時才會啟用；
// 沒設定時，網站照常開放（不會把自己鎖在外面）。
export default {
  async fetch(request, env) {
    const password = env.SITE_PASSWORD;
    if (password) {
      const header = request.headers.get("Authorization") || "";
      let ok = false;
      if (header.startsWith("Basic ")) {
        try {
          const decoded = atob(header.slice(6));
          const supplied = decoded.slice(decoded.indexOf(":") + 1);
          ok = supplied === password;
        } catch (e) { ok = false; }
      }
      if (!ok) {
        return new Response("這是嬨嬨寬寬的小天地，請輸入家人密碼。", {
          status: 401,
          headers: {
            "WWW-Authenticate": 'Basic realm="嬨嬨寬寬的小天地", charset="UTF-8"',
            "Content-Type": "text/plain; charset=utf-8"
          }
        });
      }
    }
    return env.ASSETS.fetch(request);
  }
};
