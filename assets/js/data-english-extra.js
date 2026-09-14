/* ============================================================
   英文進階練習庫（文法 / 拼字 / 閱讀）
   cici（嬨嬨，森林路線）＝基礎，建立信心，句子短、字詞簡單；
   kuan（寬寬，海洋路線）＝進階，句子更長、詞彙更難，需要多一點理解。
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
      { q: "My mom is kind. ___ is a nurse.",   options: ["He", "She", "It"],              answer: 1, zh: "媽媽是女生，用 She。" },
      { q: "I have two ___.",                   options: ["hand", "hands", "handes"],      answer: 1, zh: "兩隻手，複數加 -s。" },
      { q: "I eat ___ egg for breakfast.",      options: ["a", "an", "the"],               answer: 1, zh: "egg 是母音開頭，用 an。" },
      { q: "She reads ___ book before bed.",    options: ["a", "an", "some"],              answer: 0, zh: "book 是子音開頭，用 a。" },
      { q: "I ___ a happy girl.",               options: ["is", "are", "am"],              answer: 2, zh: "主詞是 I，用 am。" },
      { q: "The ball ___ red and round.",       options: ["is", "are", "am"],              answer: 0, zh: "主詞單數 ball，用 is。" },
      { q: "___ apples are sweet.",             options: ["This", "These", "That"],        answer: 1, zh: "apples 是複數，用 These。" },
      { q: "Look at ___ birds over there.",     options: ["this", "that", "those"],        answer: 2, zh: "遠處又是複數的鳥，用 those。" },
      { q: "My dad ___ pancakes on Sunday.",    options: ["make", "makes", "making"],      answer: 1, zh: "第三人稱單數，動詞加 -s。" },
      { q: "The socks are ___ the drawer.",     options: ["in", "on", "under"],            answer: 0, zh: "在抽屜裡面，用 in。" },
      { q: "The cup is ___ the table.",         options: ["in", "on", "under"],            answer: 1, zh: "在桌面上，用 on。" },
      { q: "The ball rolled ___ the chair.",    options: ["in", "on", "under"],            answer: 2, zh: "滾到椅子下面，用 under。" },
      { q: "Tom is my brother. ___ is tall.",   options: ["He", "She", "It"],              answer: 0, zh: "Tom 是男生，用 He。" },
      { q: "I like the cat. ___ is soft.",      options: ["He", "She", "It"],              answer: 2, zh: "動物或東西用 It。" },
      { q: "Look! The dog ___ now.",            options: ["run", "runs", "is running"],    answer: 2, zh: "現在正在做，用 is 加動詞 -ing。" },
      { q: "___ a cat on the mat.",             options: ["There is", "There are", "They are"], answer: 0, zh: "一隻是單數，用 There is。" },
      { q: "___ three ducks in the pond.",      options: ["There is", "There are", "They are"], answer: 1, zh: "三隻是複數，用 There are。" }
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
      { q: "It was raining, ___ we stayed inside.",      options: ["because", "but", "so"],                          answer: 2, zh: "說明結果，用 so。" },
      { q: "My sister ___ her keys yesterday.",          options: ["loses", "lost", "losed"],                        answer: 1, zh: "lose 的過去式是 lost。" },
      { q: "The children ___ a sandcastle on the beach.", options: ["builded", "built", "build"],                    answer: 1, zh: "build 的過去式是 built。" },
      { q: "Last winter ___ the coldest one in years.",  options: ["was", "were", "is"],                             answer: 0, zh: "主詞單數 winter，過去式用 was。" },
      { q: "The twins ___ born on the same day.",        options: ["was", "were", "is"],                             answer: 1, zh: "主詞複數 twins，過去式用 were。" },
      { q: "Mount Everest is the ___ mountain in the world.", options: ["taller", "tallest", "most tall"],           answer: 1, zh: "三者以上最高，用最高級 tallest。" },
      { q: "This puzzle is ___ than the last one.",      options: ["difficult", "difficulter", "more difficult"],    answer: 2, zh: "較長的形容詞比較級用 more。" },
      { q: "The dancer moved ___ across the stage.",     options: ["graceful", "gracefully", "grace"],               answer: 1, zh: "修飾動詞要用副詞 gracefully。" },
      { q: "That is my ___ bicycle, not mine.",          options: ["brother", "brothers", "brother's"],              answer: 2, zh: "單數所有格用 's。" },
      { q: "We took umbrellas ___ the sky looked dark.", options: ["because", "but", "so"],                          answer: 0, zh: "說明原因，用 because。" },
      { q: "I studied hard, ___ I still felt nervous.",  options: ["because", "but", "so"],                          answer: 1, zh: "表示轉折，用 but。" },
      { q: "The bridge was closed, ___ we found another road.", options: ["because", "but", "so"],                   answer: 2, zh: "說明結果，用 so。" },
      { q: "___ many colorful fish in the coral reef.",  options: ["There is", "There are", "There was"],            answer: 1, zh: "現在式又是複數，用 There are。" },
      { q: "Right now, the students ___ quietly in the library.", options: ["read", "reads", "are reading"],         answer: 2, zh: "現在正在進行，用 are 加動詞 -ing。" },
      { q: "My grandfather ___ tomatoes in his garden every summer.", options: ["grow", "grows", "growing"],         answer: 1, zh: "第三人稱單數，動詞加 -s。" },
      { q: "A cheetah runs ___ than any other animal.",  options: ["fast", "faster", "fastest"],                     answer: 1, zh: "有 than，用比較級 faster。" },
      { q: "Today I feel ___ than I did yesterday.",     options: ["good", "better", "gooder"],                      answer: 1, zh: "good 的比較級是 better。" }
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
      { word: "window", zh: "窗戶",   hint: "You look through it to see outside." },
      { word: "banana", zh: "香蕉",   hint: "A long, yellow fruit that monkeys love." },
      { word: "chair",  zh: "椅子",   hint: "You sit on it at the table." },
      { word: "bread",  zh: "麵包",   hint: "A soft food you can make toast with." },
      { word: "river",  zh: "河流",   hint: "Water that flows all the way to the sea." },
      { word: "sister", zh: "姊妹",   hint: "A girl with the same mom and dad as you." },
      { word: "garden", zh: "花園",   hint: "A place outside where plants grow." },
      { word: "rainbow", zh: "彩虹",  hint: "A colorful arc in the sky after rain." },
      { word: "yellow", zh: "黃色",   hint: "The color of the sun and a lemon." },
      { word: "orange", zh: "橘子",   hint: "A round fruit with the same name as its color." },
      { word: "cheese", zh: "起司",   hint: "A yellow food made from milk." },
      { word: "monkey", zh: "猴子",   hint: "An animal that likes to climb trees." },
      { word: "pillow", zh: "枕頭",   hint: "You rest your head on it to sleep." },
      { word: "kitten", zh: "小貓",   hint: "A baby cat." },
      { word: "basket", zh: "籃子",   hint: "You put fruit or toys in it." }
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
      { word: "tomorrow",  zh: "明天",   hint: "The day that comes after today." },
      { word: "computer",  zh: "電腦",   hint: "A machine you use to type and play games." },
      { word: "kangaroo",  zh: "袋鼠",   hint: "An animal from Australia that hops and has a pouch." },
      { word: "telephone", zh: "電話",   hint: "You use it to call and talk to people." },
      { word: "breakfast", zh: "早餐",   hint: "The first meal you eat in the morning." },
      { word: "playground", zh: "遊樂場", hint: "A place with swings and slides for kids." },
      { word: "wonderful", zh: "很棒的", hint: "Very good and full of joy." },
      { word: "dangerous", zh: "危險的", hint: "Not safe, and it could hurt you." },
      { word: "furniture", zh: "家具",   hint: "Chairs, tables, and beds in a home." },
      { word: "crocodile", zh: "鱷魚",   hint: "A big reptile with sharp teeth in rivers." },
      { word: "delicious", zh: "美味的", hint: "Tasting really, really good." },
      { word: "afternoon", zh: "下午",   hint: "The time after lunch and before evening." },
      { word: "grandmother", zh: "祖母", hint: "The mother of your mom or dad." },
      { word: "vacation",  zh: "假期",   hint: "A trip you take to rest and have fun." },
      { word: "excited",   zh: "興奮的", hint: "Very happy and full of energy about something." }
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
      },
      {
        title: "The Big Red Bus",
        text: "Jack rides the bus to school. The bus is big and red. He waves to his friends on the way.",
        q: "What color is the bus?",
        options: ["yellow", "red", "green"],
        answer: 1
      },
      {
        title: "Snack Time",
        text: "It is snack time. Nina opens her lunchbox. She has an apple and a cookie. She shares the cookie with her friend.",
        q: "What does Nina share?",
        options: ["the apple", "the cookie", "the lunchbox"],
        answer: 1
      },
      {
        title: "The Rainy Day",
        text: "It is raining outside. Leo puts on his boots. He jumps in the puddles. He has so much fun.",
        q: "What does Leo jump in?",
        options: ["the puddles", "the leaves", "the sand"],
        answer: 0
      },
      {
        title: "My New Ball",
        text: "Emma got a new ball. It is round and blue. She kicks it in the yard. Her dog runs after it.",
        q: "Who runs after the ball?",
        options: ["Emma", "her dog", "her mom"],
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
      },
      {
        title: "The Library Card",
        text: "Maya wanted to borrow books from the library, but she did not have a card. The kind librarian showed her how to sign up. Maya wrote her name and address on a small form. A few minutes later, she had her very own library card. Now she can borrow up to five books at a time. Maya felt proud and grown-up.",
        q: "How many books can Maya borrow at a time?",
        options: ["three", "five", "ten"],
        answer: 1
      },
      {
        title: "The Snowman Contest",
        text: "The whole neighborhood joined the snowman contest on Saturday. Ethan and his sister rolled three big balls of snow. They used a carrot for the nose and two stones for the eyes. An old scarf kept the snowman warm. Their snowman did not win first prize, but it was the tallest one on the street.",
        q: "What did they use for the snowman's nose?",
        options: ["a stone", "a carrot", "a scarf"],
        answer: 1
      },
      {
        title: "Lost and Found",
        text: "On the way home, Daniel found a small brown wallet on the sidewalk. Inside, he saw some money and a photo of a smiling family. Instead of keeping it, Daniel took the wallet to the police station. The officer thanked him and promised to find the owner. Two days later, the owner called to say thank you.",
        q: "What did Daniel do with the wallet?",
        options: ["kept the money", "took it to the police", "threw it away"],
        answer: 1
      },
      {
        title: "The School Garden",
        text: "Every spring, the students plant a garden behind their school. This year they planted carrots, beans, and sunflowers. The children take turns watering the plants and pulling out the weeds. By summer, the sunflowers grew taller than the teacher. When the vegetables were ready, the class made a big salad to share.",
        q: "What grew taller than the teacher?",
        options: ["the beans", "the carrots", "the sunflowers"],
        answer: 2
      }
    ]
  }
};
