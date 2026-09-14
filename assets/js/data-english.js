/* ============================================================
   英文單字庫（兩條不一樣的探險路線・嬨嬨走森林、寬寬走海洋，各走各的）
   資料格式（每個單字一行，複製就能新增）：
   { en:"英文", zh:"中文", ex:"英文例句", emoji:"表情符號", topic:"主題" }
   - 參考 US HMH Into Reading G2/G3 常見字，拼字皆已校對。
   - 每個字都挑「畫得出來」的，配一個最貼切的 emoji。
   - topic 必須和該程度 topics 陣列中的字串完全一致。
   ============================================================ */
window.DATA_ENGLISH = {
  levels: {
    cici: {
      label: "嬨嬨的森林路線 🌲",
      topics: ["大自然 Nature", "動物 Animals", "天氣 Weather", "交通工具 Transport"],
      words: [
        // ---- 大自然 Nature ----
        { en: "forest",   zh: "森林",   ex: "A forest is full of tall green trees.",     emoji: "🌲", topic: "大自然 Nature" },
        { en: "mountain", zh: "山",     ex: "We climbed to the top of the mountain.",     emoji: "⛰️", topic: "大自然 Nature" },
        { en: "ocean",    zh: "海洋",   ex: "The ocean is deep and very blue.",           emoji: "🌊", topic: "大自然 Nature" },
        { en: "island",   zh: "島嶼",   ex: "A small island sits out in the sea.",        emoji: "🏝️", topic: "大自然 Nature" },
        { en: "desert",   zh: "沙漠",   ex: "The desert is hot, dry, and sandy.",         emoji: "🏜️", topic: "大自然 Nature" },
        { en: "rainbow",  zh: "彩虹",   ex: "A rainbow appears after the rain.",          emoji: "🌈", topic: "大自然 Nature" },
        { en: "cactus",   zh: "仙人掌", ex: "A cactus can live in the dry desert.",       emoji: "🌵", topic: "大自然 Nature" },
        { en: "flower",   zh: "花朵",   ex: "She picked a pink flower in the park.",      emoji: "🌸", topic: "大自然 Nature" },
        { en: "leaf",     zh: "葉子",   ex: "A green leaf fell down from the tree.",      emoji: "🍃", topic: "大自然 Nature" },
        { en: "rock",     zh: "岩石",   ex: "The big rock is heavy and hard.",            emoji: "🪨", topic: "大自然 Nature" },

        // ---- 動物 Animals ----
        { en: "elephant",  zh: "大象",   ex: "The elephant has a long gray trunk.",        emoji: "🐘", topic: "動物 Animals" },
        { en: "giraffe",   zh: "長頸鹿", ex: "A giraffe has a very long neck.",            emoji: "🦒", topic: "動物 Animals" },
        { en: "dolphin",   zh: "海豚",   ex: "The dolphin jumps out of the water.",        emoji: "🐬", topic: "動物 Animals" },
        { en: "penguin",   zh: "企鵝",   ex: "A penguin cannot fly, but it can swim.",     emoji: "🐧", topic: "動物 Animals" },
        { en: "kangaroo",  zh: "袋鼠",   ex: "The kangaroo hops on its strong legs.",      emoji: "🦘", topic: "動物 Animals" },
        { en: "butterfly", zh: "蝴蝶",   ex: "A butterfly has pretty, colorful wings.",    emoji: "🦋", topic: "動物 Animals" },
        { en: "squirrel",  zh: "松鼠",   ex: "The squirrel hides nuts under the tree.",    emoji: "🐿️", topic: "動物 Animals" },
        { en: "zebra",     zh: "斑馬",   ex: "A zebra has black and white stripes.",       emoji: "🦓", topic: "動物 Animals" },
        { en: "turtle",    zh: "海龜",   ex: "The turtle walks slowly on the sand.",       emoji: "🐢", topic: "動物 Animals" },
        { en: "whale",     zh: "鯨魚",   ex: "A whale is the biggest animal in the sea.",  emoji: "🐳", topic: "動物 Animals" },

        // ---- 天氣 Weather ----
        { en: "sunny",     zh: "晴朗",   ex: "It is sunny, so we can play outside.",       emoji: "☀️", topic: "天氣 Weather" },
        { en: "cloudy",    zh: "多雲",   ex: "The sky is gray and cloudy today.",          emoji: "☁️", topic: "天氣 Weather" },
        { en: "rainy",     zh: "下雨",   ex: "On a rainy day, I stay inside and read.",    emoji: "🌧️", topic: "天氣 Weather" },
        { en: "snowy",     zh: "下雪",   ex: "It is snowy, so we can build a snowman.",    emoji: "🌨️", topic: "天氣 Weather" },
        { en: "windy",     zh: "有風",   ex: "It is windy, and my hat flew away.",         emoji: "💨", topic: "天氣 Weather" },
        { en: "stormy",    zh: "暴風雨", ex: "The stormy night was loud and dark.",        emoji: "⛈️", topic: "天氣 Weather" },
        { en: "lightning", zh: "閃電",   ex: "Lightning flashed across the dark sky.",     emoji: "⚡", topic: "天氣 Weather" },
        { en: "umbrella",  zh: "雨傘",   ex: "I opened my umbrella when the rain began.",  emoji: "☂️", topic: "天氣 Weather" },
        { en: "foggy",     zh: "起霧",   ex: "It was so foggy that I could not see far.",  emoji: "🌫️", topic: "天氣 Weather" },
        { en: "tornado",   zh: "龍捲風", ex: "A tornado can spin very fast and strong.",   emoji: "🌪️", topic: "天氣 Weather" },

        // ---- 交通工具 Transport ----
        { en: "airplane",   zh: "飛機",   ex: "The airplane flies high above the clouds.",  emoji: "✈️", topic: "交通工具 Transport" },
        { en: "train",      zh: "火車",   ex: "We took a train to visit my grandma.",       emoji: "🚆", topic: "交通工具 Transport" },
        { en: "bicycle",    zh: "腳踏車", ex: "I ride my bicycle to school every day.",     emoji: "🚲", topic: "交通工具 Transport" },
        { en: "helicopter", zh: "直升機", ex: "The helicopter can go straight up in the air.", emoji: "🚁", topic: "交通工具 Transport" },
        { en: "sailboat",   zh: "帆船",   ex: "The sailboat moves along with the wind.",    emoji: "⛵", topic: "交通工具 Transport" },
        { en: "fire truck", zh: "消防車", ex: "The red fire truck raced to the fire.",      emoji: "🚒", topic: "交通工具 Transport" },
        { en: "ambulance",  zh: "救護車", ex: "The ambulance takes sick people to the hospital.", emoji: "🚑", topic: "交通工具 Transport" },
        { en: "motorcycle", zh: "機車",   ex: "He wears a helmet when he rides his motorcycle.", emoji: "🏍️", topic: "交通工具 Transport" },
        { en: "ship",       zh: "輪船",   ex: "The big ship sails across the ocean.",       emoji: "🚢", topic: "交通工具 Transport" },
        { en: "scooter",    zh: "滑板車", ex: "She rides her scooter around the park.",     emoji: "🛴", topic: "交通工具 Transport" }
      ]
    },
    kuan: {
      label: "寬寬的海洋路線 🌊",
      topics: ["科學 Science", "太空 Space", "地理 Geography", "職業 Jobs"],
      words: [
        // ---- 科學 Science ----
        { en: "telescope",   zh: "望遠鏡", ex: "We used a telescope to look at the moon.",       emoji: "🔭", topic: "科學 Science" },
        { en: "microscope",  zh: "顯微鏡", ex: "A microscope makes tiny things look much bigger.", emoji: "🔬", topic: "科學 Science" },
        { en: "magnet",      zh: "磁鐵",   ex: "The magnet pulls the metal paper clips toward it.", emoji: "🧲", topic: "科學 Science" },
        { en: "battery",     zh: "電池",   ex: "The toy stopped working when the battery died.", emoji: "🔋", topic: "科學 Science" },
        { en: "thermometer", zh: "溫度計", ex: "The thermometer shows how hot or cold it is.",   emoji: "🌡️", topic: "科學 Science" },
        { en: "skeleton",    zh: "骨骼",   ex: "The human skeleton has more than two hundred bones.", emoji: "💀", topic: "科學 Science" },
        { en: "dinosaur",    zh: "恐龍",   ex: "This dinosaur lived millions of years ago.",     emoji: "🦕", topic: "科學 Science" },
        { en: "germ",        zh: "細菌",   ex: "Wash your hands to keep the germs away.",         emoji: "🦠", topic: "科學 Science" },
        { en: "gear",        zh: "齒輪",   ex: "The gears turn to make the clock work.",          emoji: "⚙️", topic: "科學 Science" },
        { en: "test tube",   zh: "試管",   ex: "The scientist poured water into the test tube.",  emoji: "🧪", topic: "科學 Science" },

        // ---- 太空 Space ----
        { en: "rocket",    zh: "火箭",   ex: "The rocket blasted off into space.",             emoji: "🚀", topic: "太空 Space" },
        { en: "planet",    zh: "行星",   ex: "Earth is the third planet from the sun.",        emoji: "🪐", topic: "太空 Space" },
        { en: "astronaut", zh: "太空人", ex: "The astronaut floated inside the space station.", emoji: "🧑‍🚀", topic: "太空 Space" },
        { en: "satellite", zh: "衛星",   ex: "A satellite orbits high above our planet.",      emoji: "🛰️", topic: "太空 Space" },
        { en: "comet",     zh: "彗星",   ex: "The comet has a long, glowing tail.",            emoji: "☄️", topic: "太空 Space" },
        { en: "galaxy",    zh: "銀河",   ex: "Our galaxy holds billions of shining stars.",    emoji: "🌌", topic: "太空 Space" },
        { en: "Earth",     zh: "地球",   ex: "Earth is the only planet we know with life.",    emoji: "🌍", topic: "太空 Space" },
        { en: "moon",      zh: "月亮",   ex: "The moon glows brightly in the night sky.",      emoji: "🌕", topic: "太空 Space" },
        { en: "meteor",    zh: "流星",   ex: "We made a wish on a falling meteor.",            emoji: "🌠", topic: "太空 Space" },
        { en: "alien",     zh: "外星人", ex: "Some people wonder if aliens live on other planets.", emoji: "👽", topic: "太空 Space" },

        // ---- 地理 Geography ----
        { en: "volcano",  zh: "火山",     ex: "Hot lava poured out of the volcano.",            emoji: "🌋", topic: "地理 Geography" },
        { en: "iceberg",  zh: "冰山",     ex: "Most of an iceberg is hidden under the water.",  emoji: "🧊", topic: "地理 Geography" },
        { en: "canyon",   zh: "峽谷",     ex: "The river carved a deep canyon over time.",      emoji: "🏞️", topic: "地理 Geography" },
        { en: "globe",    zh: "地球儀",   ex: "I spun the globe to find my country.",           emoji: "🌐", topic: "地理 Geography" },
        { en: "map",      zh: "地圖",     ex: "We used a map to find the hidden trail.",        emoji: "🗺️", topic: "地理 Geography" },
        { en: "compass",  zh: "指南針",   ex: "A compass always points to the north.",          emoji: "🧭", topic: "地理 Geography" },
        { en: "castle",   zh: "城堡",     ex: "The old castle stood on top of the hill.",       emoji: "🏰", topic: "地理 Geography" },
        { en: "bridge",   zh: "橋樑",     ex: "The long bridge crosses over the wide river.",   emoji: "🌉", topic: "地理 Geography" },
        { en: "beach",    zh: "海灘",     ex: "We built a sandcastle on the sunny beach.",      emoji: "🏖️", topic: "地理 Geography" },
        { en: "fountain", zh: "噴泉",     ex: "Water sprayed high into the air from the fountain.", emoji: "⛲", topic: "地理 Geography" },

        // ---- 職業 Jobs ----
        { en: "doctor",         zh: "醫生",   ex: "The doctor checked my throat and my ears.",   emoji: "🧑‍⚕️", topic: "職業 Jobs" },
        { en: "teacher",        zh: "老師",   ex: "Our teacher explained the new math lesson.",  emoji: "🧑‍🏫", topic: "職業 Jobs" },
        { en: "firefighter",    zh: "消防員", ex: "The brave firefighter put out the flames.",   emoji: "🧑‍🚒", topic: "職業 Jobs" },
        { en: "police officer", zh: "警察",   ex: "The police officer helped us cross the busy street.", emoji: "👮", topic: "職業 Jobs" },
        { en: "farmer",         zh: "農夫",   ex: "The farmer grows corn and wheat in the field.", emoji: "🧑‍🌾", topic: "職業 Jobs" },
        { en: "chef",           zh: "廚師",   ex: "The chef cooked a delicious bowl of soup.",   emoji: "🧑‍🍳", topic: "職業 Jobs" },
        { en: "scientist",      zh: "科學家", ex: "The scientist studies how plants grow.",      emoji: "🧑‍🔬", topic: "職業 Jobs" },
        { en: "artist",         zh: "藝術家", ex: "The artist painted a beautiful mountain scene.", emoji: "🧑‍🎨", topic: "職業 Jobs" },
        { en: "pilot",          zh: "飛行員", ex: "The pilot landed the plane safely.",          emoji: "🧑‍✈️", topic: "職業 Jobs" },
        { en: "detective",      zh: "偵探",   ex: "The detective looked for clues to solve the case.", emoji: "🕵️", topic: "職業 Jobs" }
      ]
    }
  },
  // 每日一句（成長型思維，首頁與英文區輪流出現）
  daily: [
    { en: "Every day is a new adventure.",         zh: "每天都是一場新的冒險。" },
    { en: "Mistakes help me learn and grow.",      zh: "犯錯能幫助我學習與成長。" },
    { en: "I can do hard things if I keep trying.", zh: "只要持續努力，我就能完成困難的事。" },
    { en: "A little progress each day adds up.",    zh: "每天進步一點點，慢慢就會積少成多。" },
    { en: "Believe in yourself and try your best.", zh: "相信自己，並且全力以赴。" },
    { en: "Reading a book opens up a new world.",   zh: "翻開一本書，就打開了一個嶄新的世界。" },
    { en: "Kind words can make someone's day.",     zh: "一句友善的話，能讓別人一整天都開心。" },
    { en: "Practice makes progress, not perfect.",  zh: "練習帶來的是進步，而不是完美。" },
    { en: "It's okay to ask for help.",             zh: "尋求幫助是完全沒問題的。" },
    { en: "Never give up on what you love.",         zh: "永遠不要放棄你所熱愛的事物。" }
  ]
};
