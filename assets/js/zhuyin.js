/* ============================================================
   全站注音：把畫面上每一個中文字都自動標上正確的注音。
   用 pinyin-pro 字庫（會看前後文判斷破音字），再把拼音轉成注音。
   開關一按，整個畫面所有中文字都有注音；再按一次全部拿掉。
   ============================================================ */
window.Zhuyin = (function () {
  var PP = window.pinyinPro;
  if (PP && PP.customPinyin) {
    /* 修正繁體常見破音字（字庫預設會讀錯的幾個） */
    PP.customPinyin({
      "許": "xǔ", "著": "zhe",
      "什麼": "shén me", "怎麼": "zěn me", "這麼": "zhè me",
      "那麼": "nà me", "多麼": "duō me", "為什麼": "wèi shén me",
      "覺得": "jué de", "記得": "jì de"
    });
  }

  var INI = { zh:"ㄓ",ch:"ㄔ",sh:"ㄕ",b:"ㄅ",p:"ㄆ",m:"ㄇ",f:"ㄈ",d:"ㄉ",t:"ㄊ",n:"ㄋ",l:"ㄌ",g:"ㄍ",k:"ㄎ",h:"ㄏ",j:"ㄐ",q:"ㄑ",x:"ㄒ",r:"ㄖ",z:"ㄗ",c:"ㄘ",s:"ㄙ" };
  var FIN = { i:"ㄧ",u:"ㄨ","ü":"ㄩ",a:"ㄚ",o:"ㄛ",e:"ㄜ","ê":"ㄝ",ai:"ㄞ",ei:"ㄟ",ao:"ㄠ",ou:"ㄡ",an:"ㄢ",en:"ㄣ",ang:"ㄤ",eng:"ㄥ",er:"ㄦ",ong:"ㄨㄥ",ia:"ㄧㄚ",ie:"ㄧㄝ",iao:"ㄧㄠ",iou:"ㄧㄡ",iu:"ㄧㄡ",ian:"ㄧㄢ","in":"ㄧㄣ",iang:"ㄧㄤ",ing:"ㄧㄥ",iong:"ㄩㄥ",ua:"ㄨㄚ",uo:"ㄨㄛ",uai:"ㄨㄞ",ui:"ㄨㄟ",uei:"ㄨㄟ",uan:"ㄨㄢ",un:"ㄨㄣ",uen:"ㄨㄣ",uang:"ㄨㄤ",ueng:"ㄨㄥ","üe":"ㄩㄝ","üan":"ㄩㄢ","ün":"ㄩㄣ" };
  var TONE = { 1:"",2:"ˊ",3:"ˇ",4:"ˋ",0:"˙",5:"˙" };
  var EMPTY = ["zh","ch","sh","r","z","c","s"];
  var INI_ORDER = ["zh","ch","sh","b","p","m","f","d","t","n","l","g","k","h","j","q","x","r","z","c","s"];
  var TONEMAP = { "ā":"a","á":"a","ǎ":"a","à":"a","ō":"o","ó":"o","ǒ":"o","ò":"o","ē":"e","é":"e","ě":"e","è":"e","ī":"i","í":"i","ǐ":"i","ì":"i","ū":"u","ú":"u","ǔ":"u","ù":"u","ǖ":"ü","ǘ":"ü","ǚ":"ü","ǜ":"ü","ê":"ê","v":"ü" };

  function stripTone(py) {
    var out = ""; for (var i = 0; i < py.length; i++) { var ch = py[i]; out += (TONEMAP[ch] !== undefined ? TONEMAP[ch] : ch); } return out.toLowerCase();
  }

  function syl(none, num) {
    if (!none) return "";
    var s = none; var ini = "";
    for (var i = 0; i < INI_ORDER.length; i++) { if (s.indexOf(INI_ORDER[i]) === 0) { ini = INI_ORDER[i]; break; } }
    var fin = s.slice(ini.length);
    if (fin[0] === "y") { var r = fin.slice(1); if (r === "") fin = "i"; else if (r[0] === "u") fin = "ü" + r.slice(1); else if (r[0] === "i") fin = r; else fin = "i" + r; }
    else if (fin[0] === "w") { var r2 = fin.slice(1); if (r2 === "") fin = "u"; else if (r2[0] === "u") fin = r2; else fin = "u" + r2; }
    if ((ini === "j" || ini === "q" || ini === "x") && fin[0] === "u") fin = "ü" + fin.slice(1);
    var finZ = (EMPTY.indexOf(ini) >= 0 && fin === "i") ? "" : FIN[fin];
    if (finZ === undefined) finZ = "";
    var body = (INI[ini] || "") + finZ;
    if (!body) body = none;
    if (num === 0 || num === 5) return "˙" + body;
    return body + (TONE[num] || "");
  }

  var CJK = /[㐀-鿿豈-﫿]/;

  /* 一段字串 → [{ch, zhuyin|null}]（英文、標點的 zhuyin 為 null） */
  function analyze(text) {
    var arr = PP ? PP.pinyin(text, { type: "all" }) : null;
    var out = [];
    if (!arr) { for (var i = 0; i < text.length; i++) out.push({ ch: text[i], z: null }); return out; }
    for (var j = 0; j < arr.length; j++) {
      var a = arr[j];
      if (a.isZh && CJK.test(a.origin)) out.push({ ch: a.origin, z: syl(stripTone(a.pinyin || ""), a.num) });
      else out.push({ ch: a.origin, z: null });
    }
    return out;
  }

  function skip(node) {
    var el = node.parentElement;
    while (el) {
      var t = el.tagName;
      if (t === "SCRIPT" || t === "STYLE" || t === "RUBY" || t === "RT" || t === "TEXTAREA" || t === "OPTION" || t === "SELECT" || t === "svg") return true;
      if (el.namespaceURI === "http://www.w3.org/2000/svg") return true;
      el = el.parentElement;
    }
    return false;
  }

  function annotate(root) {
    root = root || document.body;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (!n.nodeValue || !CJK.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        if (skip(n)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = []; var cur; while ((cur = walker.nextNode())) nodes.push(cur);
    nodes.forEach(function (node) {
      var parts = analyze(node.nodeValue);
      var frag = document.createDocumentFragment();
      var buf = "";
      function flush() { if (buf) { frag.appendChild(document.createTextNode(buf)); buf = ""; } }
      parts.forEach(function (p) {
        if (p.z) {
          flush();
          var ruby = document.createElement("ruby");
          ruby.className = "zy";
          ruby.appendChild(document.createTextNode(p.ch));
          var rt = document.createElement("rt");
          rt.textContent = p.z;
          ruby.appendChild(rt);
          frag.appendChild(ruby);
        } else { buf += p.ch; }
      });
      flush();
      node.parentNode.replaceChild(frag, node);
    });
  }

  function remove(root) {
    root = root || document.body;
    var rubies = root.querySelectorAll("ruby.zy");
    rubies.forEach(function (ruby) {
      var base = ruby.firstChild ? ruby.firstChild.nodeValue : "";
      ruby.parentNode.replaceChild(document.createTextNode(base), ruby);
    });
  }

  var on = false;
  function setOn(v) { on = !!v; if (on) annotate(document.body); else remove(document.body); }
  function refresh() { if (on) annotate(document.body); }
  function isOn() { return on; }

  return { annotate: annotate, remove: remove, setOn: setOn, refresh: refresh, isOn: isOn, convert: analyze };
})();
