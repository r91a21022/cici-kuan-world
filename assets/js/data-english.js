/* ============================================================
   英文單字庫（兩條不一樣的探險路線・嬨嬨走森林、寬寬走海洋，各走各的）
   資料格式（每個單字一行，複製就能新增）：
   { en:"英文", zh:"中文", ex:"英文例句", emoji:"表情符號", topic:"主題" }
   - 嬨嬨（森林路線）偏基礎、建立信心；寬寬（海洋路線）偏進階、字較難。
   - 每個字都挑「畫得出來」的，配一個最貼切的 emoji。
   - topic 必須和該路線 topics 陣列中的字串完全一致。
   ============================================================ */
window.DATA_ENGLISH = {
  levels: {
    cici: {
      label: "嬨嬨的森林路線 🌲",
      topics: ["大自然 Nature", "動物 Animals", "天氣 Weather", "交通工具 Transport", "食物 Food", "身體 Body"],
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
        { en: "river",    zh: "河流",   ex: "The river flows down to the sea.",           emoji: "🏞️", topic: "大自然 Nature" },
        { en: "waterfall",zh: "瀑布",   ex: "Water drops down the tall waterfall.",       emoji: "💦", topic: "大自然 Nature" },
        { en: "cave",     zh: "洞穴",   ex: "A bat sleeps inside the dark cave.",         emoji: "🕳️", topic: "大自然 Nature" },
        { en: "grass",    zh: "草地",   ex: "We sat on the soft green grass.",            emoji: "🌱", topic: "大自然 Nature" },

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
        { en: "lion",      zh: "獅子",   ex: "The lion is the king of the animals.",       emoji: "🦁", topic: "動物 Animals" },
        { en: "monkey",    zh: "猴子",   ex: "A monkey swings from tree to tree.",         emoji: "🐒", topic: "動物 Animals" },
        { en: "panda",     zh: "熊貓",   ex: "The panda loves to eat green bamboo.",       emoji: "🐼", topic: "動物 Animals" },
        { en: "owl",       zh: "貓頭鷹", ex: "An owl stays awake all through the night.",  emoji: "🦉", topic: "動物 Animals" },

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
        { en: "hot",       zh: "炎熱",   ex: "It is hot, so I drink a lot of water.",      emoji: "🥵", topic: "天氣 Weather" },
        { en: "cold",      zh: "寒冷",   ex: "It is cold, so I wear a warm coat.",         emoji: "🥶", topic: "天氣 Weather" },
        { en: "warm",      zh: "溫暖",   ex: "Spring days are warm and gentle.",           emoji: "🌤️", topic: "天氣 Weather" },
        { en: "thunder",   zh: "打雷",   ex: "The loud thunder made the baby cry.",        emoji: "🌩️", topic: "天氣 Weather" },

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
        { en: "scooter",    zh: "滑板車", ex: "She rides her scooter around the park.",     emoji: "🛴", topic: "交通工具 Transport" },
        { en: "bus",        zh: "公車",   ex: "We wait at the stop for the yellow bus.",    emoji: "🚌", topic: "交通工具 Transport" },
        { en: "taxi",       zh: "計程車", ex: "Mom called a taxi to take us home.",         emoji: "🚕", topic: "交通工具 Transport" },
        { en: "subway",     zh: "捷運",   ex: "The subway runs under the busy city.",       emoji: "🚇", topic: "交通工具 Transport" },
        { en: "truck",      zh: "卡車",   ex: "The truck carries boxes to the store.",      emoji: "🚚", topic: "交通工具 Transport" },

        // ---- 食物 Food ----
        { en: "apple",     zh: "蘋果",   ex: "I eat a red apple after lunch.",             emoji: "🍎", topic: "食物 Food" },
        { en: "banana",    zh: "香蕉",   ex: "A monkey peels the yellow banana.",          emoji: "🍌", topic: "食物 Food" },
        { en: "bread",     zh: "麵包",   ex: "We buy fresh bread at the bakery.",          emoji: "🍞", topic: "食物 Food" },
        { en: "milk",      zh: "牛奶",   ex: "I drink a glass of warm milk at night.",     emoji: "🥛", topic: "食物 Food" },
        { en: "egg",       zh: "蛋",     ex: "Mom fried an egg for breakfast.",            emoji: "🥚", topic: "食物 Food" },
        { en: "rice",      zh: "米飯",   ex: "We eat rice with our dinner.",               emoji: "🍚", topic: "食物 Food" },
        { en: "noodles",   zh: "麵條",   ex: "The hot noodles taste really good.",         emoji: "🍜", topic: "食物 Food" },
        { en: "cheese",    zh: "起司",   ex: "A mouse loves to nibble the cheese.",        emoji: "🧀", topic: "食物 Food" },
        { en: "carrot",    zh: "胡蘿蔔", ex: "A rabbit crunches on an orange carrot.",     emoji: "🥕", topic: "食物 Food" },
        { en: "grape",     zh: "葡萄",   ex: "Purple grapes grow in big bunches.",         emoji: "🍇", topic: "食物 Food" },
        { en: "cookie",    zh: "餅乾",   ex: "I baked a sweet cookie with my dad.",        emoji: "🍪", topic: "食物 Food" },
        { en: "watermelon",zh: "西瓜",   ex: "We share a juicy watermelon in summer.",     emoji: "🍉", topic: "食物 Food" },

        // ---- 身體 Body ----
        { en: "eye",   zh: "眼睛", ex: "I close my eyes when I go to sleep.",          emoji: "👁️", topic: "身體 Body" },
        { en: "ear",   zh: "耳朵", ex: "We hear music with our ears.",                emoji: "👂", topic: "身體 Body" },
        { en: "nose",  zh: "鼻子", ex: "My nose can smell the yummy cake.",           emoji: "👃", topic: "身體 Body" },
        { en: "mouth", zh: "嘴巴", ex: "I open my mouth to say hello.",               emoji: "👄", topic: "身體 Body" },
        { en: "tooth", zh: "牙齒", ex: "Brush every tooth to keep it clean.",         emoji: "🦷", topic: "身體 Body" },
        { en: "hand",  zh: "手",   ex: "I wave my hand to my friend.",                emoji: "✋", topic: "身體 Body" },
        { en: "foot",  zh: "腳",   ex: "I put my foot into the warm sock.",           emoji: "🦶", topic: "身體 Body" },
        { en: "arm",   zh: "手臂", ex: "She hugs the puppy with both arms.",          emoji: "💪", topic: "身體 Body" },
        { en: "leg",   zh: "腿",   ex: "A runner has two strong legs.",               emoji: "🦵", topic: "身體 Body" },
        { en: "brain", zh: "大腦", ex: "My brain helps me think and learn.",          emoji: "🧠", topic: "身體 Body" },
        { en: "bone",  zh: "骨頭", ex: "A dog likes to chew on a bone.",              emoji: "🦴", topic: "身體 Body" },
        { en: "heart", zh: "心臟", ex: "My heart beats fast when I run.",             emoji: "❤️", topic: "身體 Body" }
      ]
    },
    kuan: {
      label: "寬寬的海洋路線 🌊",
      topics: ["科學 Science", "太空 Space", "地理 Geography", "職業 Jobs", "情緒 Feelings", "運動 Sports"],
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
        { en: "atom",        zh: "原子",   ex: "Everything is made of tiny atoms.",               emoji: "⚛️", topic: "科學 Science" },
        { en: "robot",       zh: "機器人", ex: "The robot can follow the commands we give it.",   emoji: "🤖", topic: "科學 Science" },
        { en: "energy",      zh: "能量",   ex: "The sun gives us light and energy.",              emoji: "⚡", topic: "科學 Science" },
        { en: "crystal",     zh: "結晶",   ex: "The clear crystal sparkled in the light.",        emoji: "💎", topic: "科學 Science" },

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
        { en: "sun",       zh: "太陽",   ex: "The sun is a giant ball of burning gas.",        emoji: "☀️", topic: "太空 Space" },
        { en: "star",      zh: "星星",   ex: "Each star is a sun far, far away.",              emoji: "⭐", topic: "太空 Space" },
        { en: "spaceship", zh: "太空船", ex: "The spaceship traveled past many planets.",      emoji: "🛸", topic: "太空 Space" },
        { en: "black hole",zh: "黑洞",   ex: "A black hole pulls in everything nearby.",       emoji: "🕳️", topic: "太空 Space" },

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
        { en: "jungle",   zh: "叢林",     ex: "Many wild animals live in the green jungle.",    emoji: "🌴", topic: "地理 Geography" },
        { en: "waterfall",zh: "瀑布",     ex: "The waterfall crashes down onto the rocks.",     emoji: "💦", topic: "地理 Geography" },
        { en: "harbor",   zh: "港口",     ex: "Many boats rest safely in the harbor.",          emoji: "⚓", topic: "地理 Geography" },
        { en: "continent",zh: "大陸",     ex: "Asia is the largest continent on Earth.",        emoji: "🌎", topic: "地理 Geography" },

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
        { en: "detective",      zh: "偵探",   ex: "The detective looked for clues to solve the case.", emoji: "🕵️", topic: "職業 Jobs" },
        { en: "engineer",       zh: "工程師", ex: "The engineer designed a strong new bridge.",  emoji: "🧑‍🔧", topic: "職業 Jobs" },
        { en: "dentist",        zh: "牙醫",   ex: "The dentist keeps my teeth healthy.",         emoji: "🦷", topic: "職業 Jobs" },
        { en: "writer",         zh: "作家",   ex: "The writer told an exciting adventure story.", emoji: "✍️", topic: "職業 Jobs" },
        { en: "singer",         zh: "歌手",   ex: "The singer has a clear and lovely voice.",    emoji: "🎤", topic: "職業 Jobs" },

        // ---- 情緒 Feelings ----
        { en: "happy",     zh: "開心的",   ex: "I feel happy when I play with my friends.",   emoji: "😊", topic: "情緒 Feelings" },
        { en: "sad",       zh: "難過的",   ex: "She felt sad when her balloon flew away.",    emoji: "😢", topic: "情緒 Feelings" },
        { en: "angry",     zh: "生氣的",   ex: "He was angry when the game was unfair.",      emoji: "😠", topic: "情緒 Feelings" },
        { en: "scared",    zh: "害怕的",   ex: "The loud thunder made the cat scared.",       emoji: "😨", topic: "情緒 Feelings" },
        { en: "excited",   zh: "興奮的",   ex: "We were excited about the school trip.",      emoji: "🤩", topic: "情緒 Feelings" },
        { en: "tired",     zh: "疲累的",   ex: "After the long race, I was very tired.",      emoji: "😴", topic: "情緒 Feelings" },
        { en: "proud",     zh: "驕傲的",   ex: "I felt proud when I finished my drawing.",    emoji: "😌", topic: "情緒 Feelings" },
        { en: "shy",       zh: "害羞的",   ex: "The shy boy hid behind his mother.",          emoji: "😳", topic: "情緒 Feelings" },
        { en: "brave",     zh: "勇敢的",   ex: "The brave girl spoke in front of the class.", emoji: "🦁", topic: "情緒 Feelings" },
        { en: "nervous",   zh: "緊張的",   ex: "I felt nervous before the big test.",         emoji: "😰", topic: "情緒 Feelings" },
        { en: "calm",      zh: "平靜的",   ex: "Take a deep breath and stay calm.",           emoji: "🧘", topic: "情緒 Feelings" },
        { en: "surprised", zh: "驚訝的",   ex: "She was surprised by the birthday party.",    emoji: "😲", topic: "情緒 Feelings" },

        // ---- 運動 Sports ----
        { en: "basketball", zh: "籃球",   ex: "He threw the basketball into the hoop.",       emoji: "🏀", topic: "運動 Sports" },
        { en: "soccer",     zh: "足球",   ex: "We kicked the soccer ball across the field.",  emoji: "⚽", topic: "運動 Sports" },
        { en: "baseball",   zh: "棒球",   ex: "She hit the baseball over the fence.",         emoji: "⚾", topic: "運動 Sports" },
        { en: "swimming",   zh: "游泳",   ex: "Swimming is fun on a hot summer day.",         emoji: "🏊", topic: "運動 Sports" },
        { en: "running",    zh: "跑步",   ex: "Running every day makes my legs stronger.",    emoji: "🏃", topic: "運動 Sports" },
        { en: "tennis",     zh: "網球",   ex: "They played tennis at the park.",              emoji: "🎾", topic: "運動 Sports" },
        { en: "badminton",  zh: "羽毛球", ex: "We hit the birdie high in badminton.",         emoji: "🏸", topic: "運動 Sports" },
        { en: "cycling",    zh: "騎自行車", ex: "Cycling up the hill is hard but fun.",        emoji: "🚴", topic: "運動 Sports" },
        { en: "skating",    zh: "溜冰",   ex: "She is skating fast on the smooth ice.",       emoji: "⛸️", topic: "運動 Sports" },
        { en: "volleyball", zh: "排球",   ex: "The team hit the volleyball over the net.",    emoji: "🏐", topic: "運動 Sports" },
        { en: "table tennis", zh: "桌球", ex: "We played table tennis after school.",         emoji: "🏓", topic: "運動 Sports" },
        { en: "jump rope",  zh: "跳繩",   ex: "Jump rope is great exercise for everyone.",    emoji: "🪢", topic: "運動 Sports" }
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
    { en: "Never give up on what you love.",         zh: "永遠不要放棄你所熱愛的事物。" },
    { en: "Trying something new is brave.",          zh: "嘗試新的事物，就是一種勇敢。" },
    { en: "My brain grows every time I practice.",   zh: "每一次練習，我的大腦都會長大一點。" },
    { en: "Slow and steady goes a long way.",        zh: "穩穩地慢慢走，反而走得最遠。" },
    { en: "I can learn a lot from my friends.",      zh: "我可以從朋友身上學到很多。" },
    { en: "Hard work can beat talent.",              zh: "努力可以勝過天分。" },
    { en: "Being kind is a kind of strong.",         zh: "善良，也是一種強大。" },
    { en: "Every expert was once a beginner.",       zh: "每一個高手，都曾經是新手。" },
    { en: "I choose to keep going.",                 zh: "我選擇繼續走下去。" },
    { en: "Small steps can reach big places.",       zh: "小小的步伐，也能走到很遠的地方。" },
    { en: "Curiosity makes learning fun.",           zh: "好奇心讓學習變得有趣。" }
  ]
};
