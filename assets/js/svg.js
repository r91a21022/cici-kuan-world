/* ============================================================
   全站可愛圖案（向量 SVG）
   全部用程式畫出來，不連外部圖片，所以永遠不會破圖，離線也看得到。
   畫風：皮卡丘風（紅圓臉頰、大眼睛、圓潤）。
   兔兔是姐姐嬨嬨（跳繩姿勢），老虎是弟弟寬寬（紮馬步姿勢）。
   ============================================================ */
window.ART = (function () {

  /* 總站小徽章：兩顆星星＋一個家 */
  function logo() {
    return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#FFC53D"/><stop offset="1" stop-color="#FF7A59"/></linearGradient></defs>
      <path d="M32 6 L56 24 V54 a4 4 0 0 1-4 4 H12 a4 4 0 0 1-4-4 V24 Z" fill="url(#lg)"/>
      <path d="M32 6 L56 24 H8 Z" fill="#FF9F45"/>
      <circle cx="24" cy="40" r="8" fill="#fff"/><circle cx="40" cy="40" r="8" fill="#fff"/>
      <path d="M24 35 l1.6 3.4 3.7.4-2.8 2.5.8 3.6-3.3-1.9-3.3 1.9.8-3.6-2.8-2.5 3.7-.4z" fill="#FF7EB6"/>
      <path d="M40 35 l1.6 3.4 3.7.4-2.8 2.5.8 3.6-3.3-1.9-3.3 1.9.8-3.6-2.8-2.5 3.7-.4z" fill="#35BDCB"/>
    </svg>`;
  }

  /* 嬨嬨：跳繩中的兔兔（皮卡丘風） */
  function cici() {
    return `<svg viewBox="0 0 200 212" xmlns="http://www.w3.org/2000/svg" aria-label="嬨嬨的兔兔在跳繩">
      <defs><radialGradient id="ciciG" cx="42%" cy="34%" r="72%">
        <stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#FFDCEC"/></radialGradient></defs>
      <ellipse cx="100" cy="200" rx="40" ry="8" fill="#000" opacity=".07"/>
      <path d="M56 112 C60 58 140 58 144 112" fill="none" stroke="#8A5CFF" stroke-width="6" stroke-linecap="round"/>
      <ellipse cx="100" cy="120" rx="28" ry="30" fill="url(#ciciG)"/>
      <ellipse cx="86" cy="150" rx="13" ry="10" fill="url(#ciciG)"/><ellipse cx="114" cy="150" rx="13" ry="10" fill="url(#ciciG)"/>
      <path d="M80 114 Q62 112 52 118" fill="none" stroke="#FFE7F0" stroke-width="13" stroke-linecap="round"/>
      <path d="M120 114 Q138 112 148 118" fill="none" stroke="#FFE7F0" stroke-width="13" stroke-linecap="round"/>
      <circle cx="50" cy="119" r="8" fill="url(#ciciG)"/><circle cx="150" cy="119" r="8" fill="url(#ciciG)"/>
      <rect x="46" y="116" width="8" height="18" rx="4" fill="#6B41E0"/><rect x="146" y="116" width="8" height="18" rx="4" fill="#6B41E0"/>
      <path d="M50 122 C64 184 136 184 150 122" fill="none" stroke="#8A5CFF" stroke-width="6" stroke-linecap="round"/>
      <g transform="rotate(-10 100 66)"><ellipse cx="80" cy="22" rx="12" ry="34" fill="url(#ciciG)"/><ellipse cx="80" cy="24" rx="6" ry="22" fill="#FF9CC6"/></g>
      <g transform="rotate(10 100 66)"><ellipse cx="120" cy="22" rx="12" ry="34" fill="url(#ciciG)"/><ellipse cx="120" cy="24" rx="6" ry="22" fill="#FF9CC6"/></g>
      <circle cx="100" cy="66" r="42" fill="url(#ciciG)"/>
      <circle cx="74" cy="78" r="10" fill="#FF5D8F"/><circle cx="126" cy="78" r="10" fill="#FF5D8F"/>
      <ellipse cx="86" cy="64" rx="7.5" ry="10" fill="#3A2233"/><ellipse cx="114" cy="64" rx="7.5" ry="10" fill="#3A2233"/>
      <circle cx="83" cy="60" r="2.6" fill="#fff"/><circle cx="111" cy="60" r="2.6" fill="#fff"/>
      <path d="M94 78 Q100 84 106 78" fill="none" stroke="#B4557E" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M100 72 l-3 4 h6 z" fill="#FF8FB4"/>
    </svg>`;
  }

  /* 寬寬：紮馬步的老虎（皮卡丘風） */
  function kuan() {
    return `<svg viewBox="0 0 200 212" xmlns="http://www.w3.org/2000/svg" aria-label="寬寬的老虎在紮馬步">
      <defs><radialGradient id="kuanG" cx="42%" cy="32%" r="72%">
        <stop offset="0" stop-color="#FFD265"/><stop offset="1" stop-color="#FF9E2E"/></radialGradient></defs>
      <ellipse cx="100" cy="200" rx="52" ry="8" fill="#000" opacity=".08"/>
      <path d="M84 140 L64 166 L64 190" fill="none" stroke="#FBA23C" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M116 140 L136 166 L136 190" fill="none" stroke="#FBA23C" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>
      <ellipse cx="64" cy="192" rx="15" ry="8" fill="#F0912E"/><ellipse cx="136" cy="192" rx="15" ry="8" fill="#F0912E"/>
      <ellipse cx="100" cy="122" rx="34" ry="29" fill="url(#kuanG)"/>
      <path d="M80 114 Q67 124 66 132" fill="none" stroke="#F0912E" stroke-width="15" stroke-linecap="round"/>
      <path d="M120 114 Q133 124 134 132" fill="none" stroke="#F0912E" stroke-width="15" stroke-linecap="round"/>
      <circle cx="66" cy="133" r="12" fill="url(#kuanG)"/><circle cx="134" cy="133" r="12" fill="url(#kuanG)"/>
      <path d="M60 131 q6 -4 12 0 M60 135 q6 -3 12 0" fill="none" stroke="#E0954A" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M122 131 q6 -4 12 0 M122 135 q6 -3 12 0" fill="none" stroke="#E0954A" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="66" cy="32" r="18" fill="url(#kuanG)"/><circle cx="66" cy="32" r="9" fill="#FF8A6B"/>
      <circle cx="134" cy="32" r="18" fill="url(#kuanG)"/><circle cx="134" cy="32" r="9" fill="#FF8A6B"/>
      <circle cx="100" cy="66" r="43" fill="url(#kuanG)"/>
      <path d="M58 50 h84 l-5 15 h-74 z" fill="#E5484D"/><path d="M138 57 l18 6 -17 5z" fill="#C1272D"/><path d="M62 57 l-18 6 17 5z" fill="#C1272D"/>
      <path d="M83 40 v10 M100 38 v10 M117 40 v10" stroke="#C9702E" stroke-width="4" stroke-linecap="round"/>
      <circle cx="72" cy="80" r="11" fill="#FF5D3C" opacity=".8"/><circle cx="128" cy="80" r="11" fill="#FF5D3C" opacity=".8"/>
      <ellipse cx="85" cy="66" rx="8" ry="11" fill="#2F1E14"/><ellipse cx="115" cy="66" rx="8" ry="11" fill="#2F1E14"/>
      <circle cx="82" cy="62" r="2.8" fill="#fff"/><circle cx="112" cy="62" r="2.8" fill="#fff"/>
      <path d="M100 78 l-4 5 h8 z" fill="#7A4420"/>
      <path d="M100 83 q-6 6 -12 2 M100 83 q6 6 12 2" fill="none" stroke="#7A4420" stroke-width="2.4" stroke-linecap="round"/>
    </svg>`;
  }

  /* 英文區：戴探險帽的貓頭鷹（同樣加上紅臉頰，跟兔兔老虎一家人） */
  function owl() {
    return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="英文探險貓頭鷹">
      <defs><radialGradient id="owlG" cx="42%" cy="32%" r="72%">
        <stop offset="0" stop-color="#35D6C4"/><stop offset="1" stop-color="#12A99C"/></radialGradient></defs>
      <ellipse cx="100" cy="184" rx="46" ry="9" fill="#000" opacity=".08"/>
      <path d="M150 40 v70" stroke="#B5895A" stroke-width="5" stroke-linecap="round"/>
      <path d="M150 44 h34 l-8 9 8 9 h-34 z" fill="#FFC53D"/>
      <text x="153" y="60" font-size="13" font-weight="900" fill="#7A5230" font-family="sans-serif">ABC</text>
      <ellipse cx="100" cy="120" rx="52" ry="54" fill="url(#owlG)"/>
      <ellipse cx="100" cy="132" rx="40" ry="40" fill="#D7F5F1"/>
      <circle cx="78" cy="132" r="9" fill="#FF6FA0" opacity=".55"/><circle cx="122" cy="132" r="9" fill="#FF6FA0" opacity=".55"/>
      <circle cx="80" cy="108" r="20" fill="#fff"/><circle cx="120" cy="108" r="20" fill="#fff"/>
      <circle cx="82" cy="110" r="10" fill="#37302B"/><circle cx="118" cy="110" r="10" fill="#37302B"/>
      <circle cx="85" cy="107" r="3" fill="#fff"/><circle cx="121" cy="107" r="3" fill="#fff"/>
      <path d="M92 122 l8 8 8-8 z" fill="#FF9F45"/>
      <path d="M58 74 h84 l-6 16 h-72 z" fill="#8B5E34"/>
      <ellipse cx="100" cy="74" rx="46" ry="12" fill="#A5713F"/>
      <path d="M78 74 h44 v-4 a22 14 0 0 0-44 0 z" fill="#C89B6A"/>
      <path d="M52 150 q-14 6 -10 18 M148 150 q14 6 10 18" fill="none" stroke="#0E8F86" stroke-width="8" stroke-linecap="round"/>
      <path d="M88 168 h8 v10 h-8z M104 168 h8 v10 h-8z" fill="#FF9F45"/>
    </svg>`;
  }

  function blob(color) {
    return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="position:absolute;inset:0;width:100%;height:100%;z-index:-1">
      <circle cx="40" cy="46" r="26" fill="${color}" opacity=".18"/>
      <circle cx="164" cy="150" r="34" fill="${color}" opacity=".14"/>
      <path d="M150 40 l3 7 7 3 -7 3 -3 7 -3-7 -7-3 7-3z" fill="${color}" opacity=".4"/>
      <path d="M28 150 l3 7 7 3 -7 3 -3 7 -3-7 -7-3 7-3z" fill="${color}" opacity=".35"/>
    </svg>`;
  }

  /* 跳繩分解動作圖：三步驟 */
  function stepRope() {
    function fig(x, pose) {
      var s = `<circle cx="${x}" cy="46" r="15" fill="#FFDDB0"/><circle cx="${x-5}" cy="44" r="2" fill="#4A3527"/><circle cx="${x+5}" cy="44" r="2" fill="#4A3527"/>`;
      if (pose === 1) s += `<path d="M${x} 61 v40" stroke="#8A5CFF" stroke-width="8" stroke-linecap="round"/><path d="M${x} 70 l-16 22 M${x} 70 l16 22" stroke="#8A5CFF" stroke-width="6" stroke-linecap="round"/><path d="M${x} 101 l-12 26 M${x} 101 l12 26" stroke="#8A5CFF" stroke-width="7" stroke-linecap="round"/><path d="M${x-22} 132 h44" stroke="#E85A97" stroke-width="4" stroke-linecap="round"/><path d="M${x-16} 92 v40 M${x+16} 92 v40" stroke="#E85A97" stroke-width="3"/>`;
      if (pose === 2) s += `<path d="M${x} 61 v34" stroke="#8A5CFF" stroke-width="8" stroke-linecap="round"/><path d="M${x} 68 l-18 8 M${x} 68 l18 8" stroke="#8A5CFF" stroke-width="6" stroke-linecap="round"/><path d="M${x} 95 l-13 18 M${x} 95 l13 18" stroke="#8A5CFF" stroke-width="7" stroke-linecap="round"/><path d="M${x-26} 120 q26 14 52 0" fill="none" stroke="#bbb" stroke-width="2" stroke-dasharray="3 3"/>`;
      if (pose === 3) s += `<path d="M${x} 61 v34" stroke="#8A5CFF" stroke-width="8" stroke-linecap="round"/><path d="M${x} 68 l-16 14 M${x} 68 l16 14" stroke="#8A5CFF" stroke-width="6" stroke-linecap="round"/><path d="M${x} 95 l-12 16 M${x} 95 l12 16" stroke="#8A5CFF" stroke-width="7" stroke-linecap="round"/><path d="M${x-30} 60 C${x-40} 130 ${x+40} 130 ${x+30} 60" fill="none" stroke="#E85A97" stroke-width="4"/>`;
      return s;
    }
    return `<svg viewBox="0 0 600 190" xmlns="http://www.w3.org/2000/svg" aria-label="跳繩三步驟">
      <rect x="6" y="6" width="188" height="178" rx="18" fill="#F6F0FF"/>
      <rect x="206" y="6" width="188" height="178" rx="18" fill="#F6F0FF"/>
      <rect x="406" y="6" width="188" height="178" rx="18" fill="#F6F0FF"/>
      <circle cx="30" cy="30" r="13" fill="#8A5CFF"/><text x="30" y="35" font-size="15" font-weight="900" fill="#fff" text-anchor="middle">1</text>
      <circle cx="230" cy="30" r="13" fill="#8A5CFF"/><text x="230" y="35" font-size="15" font-weight="900" fill="#fff" text-anchor="middle">2</text>
      <circle cx="430" cy="30" r="13" fill="#8A5CFF"/><text x="430" y="35" font-size="15" font-weight="900" fill="#fff" text-anchor="middle">3</text>
      ${fig(100,1)}${fig(300,2)}${fig(500,3)}
      <text x="100" y="176" font-size="15" font-weight="800" fill="#5B4B7A" text-anchor="middle">踩繩調長度</text>
      <text x="300" y="176" font-size="15" font-weight="800" fill="#5B4B7A" text-anchor="middle">徒手先跳跳看</text>
      <text x="500" y="176" font-size="15" font-weight="800" fill="#5B4B7A" text-anchor="middle">轉繩一次一跳</text>
    </svg>`;
  }

  /* 紮馬步姿勢重點圖 */
  function stepMabu() {
    return `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" aria-label="馬步姿勢重點">
      <rect x="6" y="6" width="408" height="248" rx="18" fill="#FDECEC"/>
      <circle cx="210" cy="70" r="22" fill="#FFD9A8"/><circle cx="202" cy="67" r="2.6" fill="#4A3527"/><circle cx="218" cy="67" r="2.6" fill="#4A3527"/>
      <path d="M210 92 v46" stroke="#C1272D" stroke-width="12" stroke-linecap="round"/>
      <circle cx="180" cy="120" r="9" fill="#E5484D"/><circle cx="240" cy="120" r="9" fill="#E5484D"/>
      <path d="M188 118 h44" stroke="#C1272D" stroke-width="7"/>
      <path d="M210 132 L168 168 L168 210" fill="none" stroke="#F0912E" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M210 132 L252 168 L252 210" fill="none" stroke="#F0912E" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M150 224 h120" stroke="#B08" stroke-width="0" />
      <path d="M150 226 h120" stroke="#7A5230" stroke-width="3" stroke-dasharray="4 4"/>
      <path d="M150 238 h120" fill="none" stroke="#C13438" stroke-width="2.5" marker-start="url(#am)" marker-end="url(#am)"/>
      <defs><marker id="am" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M8 1L2 5L8 9" fill="none" stroke="#C13438" stroke-width="1.6"/></marker></defs>
      <text x="210" y="252" font-size="14" font-weight="800" fill="#C13438" text-anchor="middle">兩腳約兩個肩膀寬</text>
      <path d="M300 168 h40" stroke="#2E8B62" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="322" y="160" font-size="14" font-weight="800" fill="#2E8B62" text-anchor="middle">屈膝下蹲</text>
      <path d="M120 100 h-40" stroke="#2E8B62" stroke-width="2.5" stroke-dasharray="4 4"/>
      <text x="86" y="92" font-size="14" font-weight="800" fill="#2E8B62" text-anchor="middle">背挺直</text>
    </svg>`;
  }

  function emojiBadge(emoji, size) {
    size = size || 74;
    return `<div style="width:${size}px;height:${size}px;border-radius:50%;display:grid;place-items:center;
      font-size:${Math.round(size*0.56)}px;line-height:1;
      background:radial-gradient(circle at 35% 30%, #fff, var(--accent-soft));
      box-shadow:inset 0 0 0 3px #fff, 0 4px 10px rgba(0,0,0,.1)">${emoji}</div>`;
  }

  return { logo, cici, kuan, owl, blob, emojiBadge, stepRope, stepMabu };
})();
