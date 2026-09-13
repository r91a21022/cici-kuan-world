/* ============================================================
   英文進階練習庫（文法 / 拼字 / 閱讀）
   對應美國 HMH Into Reading 二、三年級風格。
   cici（嬨嬨）＝美國二年級程度，建立信心；
   kuan（寬寬）＝美國三年級程度，雙語班、較強。
   格式：
     grammar：{ q:"含 ___ 的句子", options:[三選項], answer:正解索引, zh:"繁中提示" }
     spelling：{ word:"正確拼字", zh:"繁中意思", hint:"一句英文小提示" }
     reading：{ title, text, q, options:[三選項], answer:正解索引 }
   每題只有一個正解，錯的選項也要合理。英文皆已校對拼字。
   ============================================================ */
window.DATA_ENGLISH_EXTRA = {
  grammar: {
    cici: [
      { q: "The two ___ are playing.",        options: ["cat", "cats", "cates"],        answer: 1, zh: "兩隻貓，複數要加 -s。" },
      { q: "I have three ___.",                 options: ["box", "boxs", "boxes"],         answer: 2, zh: "box 的複數是 boxes。" },
      { q: "She ___ happy today.",              options: ["is", "are", "am"],              answer: 0, zh: "主詞是 She，用 is。" },
      { q: "They ___ my good friends.",         options: ["is", "are", "am"],              answer: 1, zh: "主詞是 They，用 are。" },
      { q: "I want to eat ___ apple.",          options: ["a", "an", "and"],               answer: 1, zh: "apple 是母音開頭，用 an。" },
      { q: "He has ___ big dog.",               options: ["a", "an", "some"],              answer: 0, zh: "dog 是子音開頭，用 a。" },
      { q: "___ books are new.",                options: ["This", "These", "That"],        answer: 1, zh: "books 是複數，用 These。" },
      { q: "___ cat is sleeping.",              options: ["This", "These", "Those"],       answer: 0, zh: "cat 是單數，用 This。" },
      { q: "He ___ to school every day.",       options: ["go", "goes", "going"],          answer: 1, zh: "第三人稱單數，動詞加 -es。" },
      { q: "The little bird ___ in the sky.",   options: ["fly", "flys", "flies"],         answer: 2, zh: "fly 變第三人稱單數是 flies。" },
      { q: "The fish swims ___ the water.",     options: ["in", "on", "under"],            answer: 0, zh: "在裡面用 in。" },
      { q: "The cat sits ___ the roof.",        options: ["in", "on", "under"],            answer: 1, zh: "在表面上用 on。" },
      { q: "The dog hides ___ the bed.",        options: ["in", "on", "under"],            answer: 2, zh: "在下面用 under。" },
      { q: "My mom is kind. ___ is a nurse.",   options: ["He", "She", "It"],              answer: 1, zh: "媽媽是女生，用 She。" }
    ],
    kuan: [
      { q: "Yesterday, I ___ to the park.",             options: ["walk", "walked", "walking"],                     answer: 1, zh: "昨天發生，用過去式 walked。" },
      { q: "He ___ to school by bus yesterday.",         options: ["go", "went", "goed"],                            answer: 1, zh: "go 的過去式是 went。" },
      { q: "We ___ pizza for dinner last night.",        options: ["eat", "ate", "eaten"],                           answer: 1, zh: "eat 的過去式是 ate。" },
      { q: "A cat is ___ than a lion.",                  options: ["small", "smaller", "smallest"],                  answer: 1, zh: "兩者比較，形容詞加 -er。" },
      { q: "This book is ___ than that one.",            options: ["interesting", "interestinger", "more interesting"], answer: 2, zh: "較長的形容詞用 more。" },
      { q: "She ___ a brand-new bike.",                  options: ["have", "has", "having"],                         answer: 1, zh: "第三人稱單數用 has。" },
      { q: "They ___ two friendly dogs.",                options: ["have", "has", "haves"],                          answer: 0, zh: "主詞 They 用 have。" },
      { q: "I ___ at home all day yesterday.",           options: ["was", "were", "is"],                             answer: 0, zh: "主詞 I 的過去式 be 動詞用 was。" },
      { q: "They ___ very happy at the party.",          options: ["was", "were", "are"],                            answer: 1, zh: "主詞 They 的過去式用 were。" },
      { q: "The turtle walks very ___.",                 options: ["slow", "slowly", "slowness"],                    answer: 1, zh: "修飾動詞要用副詞 slowly。" },
      { q: "This is ___ book; it belongs to Sara.",      options: ["Sara", "Saras", "Sara's"],                       answer: 2, zh: "表示所有格，用 's。" },
      { q: "I stayed home ___ I was sick.",              options: ["because", "but", "so"],                          answer: 0, zh: "說明原因，用 because。" },
      { q: "I like tea, ___ I don't like coffee.",       options: ["because", "but", "so"],                          answer: 1, zh: "表示相反轉折，用 but。" },
      { q: "It was raining, ___ we stayed inside.",      options: ["because", "but", "so"],                          answer: 2, zh: "說明結果，用 so。" }
    ]
  },
  spelling: {
    cici: [
      { word: "rabbit", zh: "兔子",   hint: "A small animal with long ears." },
      { word: "happy",  zh: "快樂的", hint: "The way you feel when you smile." },
      { word: "water",  zh: "水",     hint: "You drink it when you are thirsty." },
      { word: "friend", zh: "朋友",   hint: "A person you like to play with." },
      { word: "school", zh: "學校",   hint: "A place where children go to learn." },
      { word: "apple",  zh: "蘋果",   hint: "A round red or green fruit." },
      { word: "flower", zh: "花",     hint: "A pretty plant that grows in a garden." },
      { word: "house",  zh: "房子",   hint: "A building where people live." },
      { word: "table",  zh: "桌子",   hint: "You eat your dinner on it." },
      { word: "sunny",  zh: "晴朗的", hint: "Full of bright light from the sun." },
      { word: "green",  zh: "綠色",   hint: "The color of grass and leaves." },
      { word: "mouse",  zh: "老鼠",   hint: "A tiny animal that likes cheese." },
      { word: "cookie", zh: "餅乾",   hint: "A sweet, flat, baked treat." },
      { word: "pencil", zh: "鉛筆",   hint: "You use it to write and draw." },
      { word: "tiger",  zh: "老虎",   hint: "A big wild cat with orange stripes." },
      { word: "window", zh: "窗戶",   hint: "You look through it to see outside." }
    ],
    kuan: [
      { word: "elephant",  zh: "大象",   hint: "A huge gray animal with a long trunk." },
      { word: "butterfly", zh: "蝴蝶",   hint: "An insect with big, colorful wings." },
      { word: "dinosaur",  zh: "恐龍",   hint: "A giant animal that lived long ago." },
      { word: "mountain",  zh: "山",     hint: "A very high hill made of rock." },
      { word: "birthday",  zh: "生日",   hint: "The special day you were born each year." },
      { word: "library",   zh: "圖書館", hint: "A quiet place where you borrow books." },
      { word: "sandwich",  zh: "三明治", hint: "Food made with two slices of bread." },
      { word: "umbrella",  zh: "雨傘",   hint: "You hold it to stay dry in the rain." },
      { word: "hospital",  zh: "醫院",   hint: "A place where doctors help sick people." },
      { word: "calendar",  zh: "日曆",   hint: "It shows the days, weeks, and months." },
      { word: "chocolate", zh: "巧克力", hint: "A sweet brown treat many people love." },
      { word: "vegetable", zh: "蔬菜",   hint: "A healthy plant food like a carrot." },
      { word: "important", zh: "重要的", hint: "Something that matters a lot." },
      { word: "adventure", zh: "冒險",   hint: "An exciting and unusual trip." },
      { word: "beautiful", zh: "美麗的", hint: "Very pretty and nice to look at." },
      { word: "tomorrow",  zh: "明天",   hint: "The day that comes after today." }
    ]
  },
  reading: {
    cici: [
      {
        title: "The Lost Kite",
        text: "Sam flew his red kite. The wind was strong. The kite went high into the sky.",
        q: "What color was the kite?",
        options: ["blue", "red", "green"],
        answer: 1
      },
      {
        title: "Mia's Pet",
        text: "Mia has a pet dog. The dog is named Spot. Spot likes to run and jump. Mia and Spot play every day.",
        q: "What is the dog's name?",
        options: ["Max", "Spot", "Rex"],
        answer: 1
      },
      {
        title: "A Hot Day",
        text: "The sun is hot today. Tom and his mom go to the beach. They swim in the sea. Then they build a sandcastle.",
        q: "Where do they go?",
        options: ["the park", "the beach", "the zoo"],
        answer: 1
      },
      {
        title: "Books for Lily",
        text: "Lily loves to read. She goes to the library. She picks three books. She reads them at home.",
        q: "How many books does Lily pick?",
        options: ["two", "three", "four"],
        answer: 1
      }
    ],
    kuan: [
      {
        title: "Ben's Little Plant",
        text: "Ben wanted to grow a plant. He put a small seed in a pot of soil. Every morning, he gave it water and set it near the sunny window. After two weeks, a tiny green leaf appeared. Ben was very happy to see his plant grow.",
        q: "What did Ben put in the pot first?",
        options: ["a leaf", "a seed", "a flower"],
        answer: 1
      },
      {
        title: "A Trip to the Zoo",
        text: "The class went on a trip to the zoo. First, they saw the tall giraffes eating leaves. Next, they watched the monkeys swing from tree to tree. The lion was sleeping in the shade. At the end of the day, everyone was tired but happy.",
        q: "What were the monkeys doing?",
        options: ["sleeping", "eating leaves", "swinging from trees"],
        answer: 2
      },
      {
        title: "The Backyard Treasure",
        text: "Anna found an old map in the attic. The map showed a path to a hidden treasure in the backyard. She counted ten steps to the big oak tree. Under the tree, she dug a small hole and found a box of shiny old coins. Anna could not wait to show her family.",
        q: "Where was the treasure hidden?",
        options: ["in the attic", "in the backyard", "at school"],
        answer: 1
      },
      {
        title: "The Big Race",
        text: "It was the day of the big race. Leo felt nervous, but he remembered to take a deep breath. When the whistle blew, he ran as fast as he could. He did not come in first, but he beat his own best time. Leo learned that trying his best was what mattered most.",
        q: "How did Leo feel before the race?",
        options: ["nervous", "angry", "sleepy"],
        answer: 0
      }
    ]
  }
};
