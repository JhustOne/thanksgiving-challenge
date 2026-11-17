// Thanksgiving Challenge - Questions, Foods & Data Bank
// Intermediate level (A2 - B1) with authentic culture & vocabulary

const THANKSGIVING_DATA = {
  // ==========================================
  // 1. BUILD YOUR FEAST - FOOD ITEMS
  // ==========================================
  traditionalFoods: [
    {
      id: "turkey",
      name: "Roast Turkey",
      desc: "The centerpiece of the Thanksgiving table.",
      fact: "Over 46 million turkeys are eaten in the US every Thanksgiving!",
      icon: "🦃"
    },
    {
      id: "mashed_potatoes",
      name: "Mashed Potatoes & Gravy",
      desc: "Creamy potatoes topped with rich savory gravy.",
      fact: "Potatoes were not served at the first Thanksgiving in 1621!",
      icon: "🥔"
    },
    {
      id: "cranberry_sauce",
      name: "Cranberry Sauce",
      desc: "Sweet and tart sauce made from red berries.",
      fact: "Native Americans used cranberries both for food and natural red dye.",
      icon: "🍒"
    },
    {
      id: "pumpkin_pie",
      name: "Pumpkin Pie",
      desc: "Warm spiced pie topped with whipped cream.",
      fact: "About 50 million pumpkin pies are baked for Thanksgiving each year!",
      icon: "🥧"
    },
    {
      id: "green_beans",
      name: "Green Bean Casserole",
      desc: "Green beans baked with cream of mushroom and crispy onions.",
      fact: "Invented in 1955 by the Campbell Soup Company test kitchen.",
      icon: "🍲"
    },
    {
      id: "cornbread",
      name: "Sweet Cornbread",
      desc: "Golden bread made from ground cornmeal.",
      fact: "Corn was a staple food taught to Pilgrims by the Wampanoag tribe.",
      icon: "🍞"
    },
    {
      id: "sweet_potatoes",
      name: "Sweet Potato Casserole",
      desc: "Baked sweet potatoes often topped with melted marshmallows.",
      fact: "Marshmallows became a popular topping in the early 1900s.",
      icon: "🍠"
    },
    {
      id: "stuffing",
      name: "Herb Bread Stuffing",
      desc: "Seasoned bread cubes with celery, onions, and herbs.",
      fact: "In the American South, stuffing is often called 'dressing'!",
      icon: "🥖"
    }
  ],

  distractorFoods: [
    {
      id: "pizza",
      name: "Pepperoni Pizza",
      desc: "Tasty, but definitely not a traditional Thanksgiving meal!",
      icon: "🍕"
    },
    {
      id: "burger",
      name: "Cheeseburger",
      desc: "Great for a 4th of July BBQ, but not for Thanksgiving dinner!",
      icon: "🍔"
    },
    {
      id: "tacos",
      name: "Mexican Tacos",
      desc: "Delicious on Taco Tuesday, but not traditional in November!",
      icon: "🌮"
    },
    {
      id: "fries",
      name: "French Fries",
      desc: "Fast food fries don't belong on the Thanksgiving banquet table!",
      icon: "🍟"
    },
    {
      id: "sushi",
      name: "Sushi Rolls",
      desc: "Fresh and Japanese, but Pilgrims definitely didn't eat sushi!",
      icon: "🍣"
    },
    {
      id: "hotdog",
      name: "Hot Dog",
      desc: "A baseball stadium classic, not a Thanksgiving feast dish!",
      icon: "🌭"
    },
    {
      id: "donut",
      name: "Glazed Donuts",
      desc: "Sweet breakfast snack, but Thanksgiving prefers Pumpkin Pie!",
      icon: "🍩"
    },
    {
      id: "ramen",
      name: "Ramen Noodles",
      desc: "College student favorite, but not a holiday harvest dish!",
      icon: "🍜"
    }
  ],

  // ==========================================
  // 2. MEMORY MATCH - VOCABULARY PAIRS
  // ==========================================
  memoryPairs: [
    { id: "turkey", word: "Roast Turkey", hint: "Main dish", icon: "🦃" },
    { id: "pumpkin", word: "Pumpkin Pie", hint: "Autumn dessert", icon: "🥧" },
    { id: "cornucopia", word: "Cornucopia", hint: "Horn of plenty", icon: "🧺" },
    { id: "harvest", word: "Autumn Harvest", hint: "Gathering crops", icon: "🌾" },
    { id: "pilgrims", word: "Pilgrims", hint: "Early settlers", icon: "🎩" },
    { id: "mayflower", word: "Mayflower", hint: "Historic ship", icon: "⛵" },
    { id: "cranberry", word: "Cranberries", hint: "Tart red berries", icon: "🍒" },
    { id: "gratitude", word: "Gratitude", hint: "Giving thanks", icon: "❤️" },
    { id: "parade", word: "Macy's Parade", hint: "Giant balloons", icon: "🎈" },
    { id: "wishbone", word: "Wishbone", hint: "Lucky tradition", icon: "🦴" },
    { id: "family", word: "Family Feast", hint: "Dinner gathering", icon: "👨‍👩‍👧‍👦" },
    { id: "acorn", word: "Oak Acorn", hint: "Autumn seed", icon: "🌰" },
    { id: "corn", word: "Sweet Corn", hint: "Golden crop", icon: "🌽" },
    { id: "leaves", word: "Autumn Leaves", hint: "Falling foliage", icon: "🍂" }
  ],

  // ==========================================
  // 3. TRIVIA RUSH - COMPREHENSIVE QUESTION BANK (35+ Questions)
  // ==========================================
  triviaPool: [
    {
      question: "In the United States, on which day is Thanksgiving officially celebrated?",
      options: [
        "The fourth Thursday of November",
        "The last Friday of October",
        "The second Monday of November",
        "The first Sunday of December"
      ],
      correct: 0,
      explanation: "By law, Thanksgiving in the US is always held on the fourth Thursday of November."
    },
    {
      question: "What was the name of the famous ship that brought the Pilgrims to America in 1620?",
      options: ["The Mayflower", "The Santa Maria", "The Titanic", "The Golden Hind"],
      correct: 0,
      explanation: "The Mayflower transported 102 passengers across the Atlantic Ocean in 1620."
    },
    {
      question: "Which Native American tribe celebrated the famous 1621 harvest feast with the Pilgrims?",
      options: ["The Wampanoag", "The Cherokee", "The Apache", "The Navajo"],
      correct: 0,
      explanation: "The Wampanoag people and chief Massasoit joined the Pilgrims in Plymouth."
    },
    {
      question: "Which US President declared Thanksgiving a permanent national annual holiday in 1863?",
      options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Franklin D. Roosevelt"],
      correct: 0,
      explanation: "Abraham Lincoln proclaimed Thanksgiving a national holiday during the Civil War in 1863."
    },
    {
      question: "What sound does an adult male turkey make in English?",
      options: ["Gobble gobble", "Cluck cluck", "Oink oink", "Quack quack"],
      correct: 0,
      explanation: "Male turkeys make a distinct 'gobble gobble' sound, while females make clicks and clucks."
    },
    {
      question: "What is the traditional Thanksgiving ceremony performed by the US President at the White House?",
      options: [
        "Pardoning a live turkey",
        "Baking the largest pie",
        "Planting a corn field",
        "Running a Thanksgiving marathon"
      ],
      correct: 0,
      explanation: "Every year, the US President grants an official 'pardon' to a turkey, saving it from being eaten."
    },
    {
      question: "Which famous department store has organized the giant balloon parade in New York City since 1924?",
      options: ["Macy's", "Walmart", "Target", "Harrods"],
      correct: 0,
      explanation: "The Macy's Thanksgiving Day Parade features giant character balloons through Manhattan."
    },
    {
      question: "What two people break apart after dinner to see who gets good luck and a secret wish?",
      options: ["The wishbone", "The bread crust", "The pumpkin stem", "The corn cob"],
      correct: 0,
      explanation: "Two people pull the turkey wishbone until it snaps; whoever gets the bigger piece gets a wish!"
    },
    {
      question: "Which sport is traditionally watched by millions of American families on Thanksgiving afternoon?",
      options: ["American Football (NFL)", "Ice Hockey", "Baseball", "Cricket"],
      correct: 0,
      explanation: "Thanksgiving football games, especially with the Detroit Lions and Dallas Cowboys, are a big tradition."
    },
    {
      question: "What is the shopping day right after Thanksgiving Day known as worldwide?",
      options: ["Black Friday", "Cyber Sunday", "Golden Saturday", "Boxing Day"],
      correct: 0,
      explanation: "Black Friday marks the official kickoff of the winter holiday shopping season with huge sales."
    },
    {
      question: "What is the horn-shaped basket overflowing with fruits, vegetables, and wheat called?",
      options: ["Cornucopia", "Sombrero", "Casserole", "Chalice"],
      correct: 0,
      explanation: "The Cornucopia, or 'Horn of Plenty', symbolizes abundance and a bountiful harvest."
    },
    {
      question: "In American English, what does the word 'gratitude' mean?",
      options: [
        "The feeling of being thankful and appreciative",
        "The act of eating a huge meal",
        "A traditional dance for the harvest",
        "Traveling a long distance to see family"
      ],
      correct: 0,
      explanation: "'Gratitude' is the warm feeling of appreciation and thankfulness."
    },
    {
      question: "Which sweet and tart red fruit sauce is served with Thanksgiving turkey?",
      options: ["Cranberry sauce", "Apple marmalade", "Strawberry syrup", "Tomato ketchup"],
      correct: 0,
      explanation: "Cranberries are one of the few fruits native to North America and a Thanksgiving staple."
    },
    {
      question: "Where did the Mayflower Pilgrims originally establish their settlement in North America?",
      options: ["Plymouth, Massachusetts", "Miami, Florida", "Los Angeles, California", "Chicago, Illinois"],
      correct: 0,
      explanation: "The Pilgrims landed in Plymouth Rock, Massachusetts in December 1620."
    },
    {
      question: "How long did the original 1621 harvest celebration between Pilgrims and Native Americans last?",
      options: ["Three days", "One single dinner", "A full month", "Two weeks"],
      correct: 0,
      explanation: "Historical accounts show the first feast lasted three full days of feasting, games, and diplomacy."
    },
    {
      question: "Which native North American leader helped the Pilgrims learn how to plant corn and catch fish?",
      options: ["Squanto (Tisquantum)", "Geronimo", "Sitting Bull", "Pocahontas"],
      correct: 0,
      explanation: "Squanto spoke English and taught the Pilgrims vital survival and agricultural techniques."
    },
    {
      question: "Which of the following is the most popular Thanksgiving dessert across the United States?",
      options: ["Pumpkin Pie", "Chocolate Cake", "Lemon Gelato", "Tiramisu"],
      correct: 0,
      explanation: "Pumpkin pie seasoned with cinnamon, ginger, nutmeg, and cloves is the #1 holiday dessert."
    },
    {
      question: "What is the seasoned mixture of diced bread, herbs, celery, and onions called?",
      options: ["Stuffing (or Dressing)", "Porridge", "Pancake batter", "Coleslaw"],
      correct: 0,
      explanation: "Stuffing is traditionally baked inside the turkey or in a separate casserole dish."
    },
    {
      question: "Why do families often share 'What they are thankful for' around the dinner table?",
      options: [
        "To reflect on blessings and express appreciation",
        "To decide who washes the dirty dishes",
        "To see who can speak English the fastest",
        "To wait for the food to cool down"
      ],
      correct: 0,
      explanation: "Expressing thankfulness for health, family, and friendships is the heart of the celebration."
    },
    {
      question: "What is a baby or young turkey called in English?",
      options: ["A poult", "A puppy", "A kitten", "A calf"],
      correct: 0,
      explanation: "A baby turkey is called a 'poult', while an adult male is a 'tom' and an adult female is a 'hen'."
    },
    {
      question: "What other country celebrates Thanksgiving, but on the second Monday of October?",
      options: ["Canada", "Australia", "Japan", "Brazil"],
      correct: 0,
      explanation: "Canada celebrates Thanksgiving in mid-October because their autumn harvest arrives earlier."
    },
    {
      question: "What color are ripe cranberries before they are harvested from flooded bogs?",
      options: ["Deep red", "Bright yellow", "Dark purple", "Forest green"],
      correct: 0,
      explanation: "Commercial cranberries are brilliant deep red and float to the surface when farmers flood the bogs."
    },
    {
      question: "Benjamin Franklin famously admired the wild turkey. What did he consider it to be?",
      options: [
        "A respectable and truly native American bird",
        "A noisy farm animal with no intelligence",
        "The fastest running bird in the forest",
        "A creature that should never be eaten"
      ],
      correct: 0,
      explanation: "Franklin praised the wild turkey as a respectable bird of courage compared to the bald eagle."
    },
    {
      question: "Which spice blend is typically used in pumpkin pie?",
      options: [
        "Cinnamon, nutmeg, ginger, and cloves",
        "Garlic, black pepper, and oregano",
        "Chili powder and cumin",
        "Mint, basil, and rosemary"
      ],
      correct: 0,
      explanation: "'Pumpkin Pie Spice' is a warm aromatic blend of cinnamon, ginger, nutmeg, allspice, and cloves."
    },
    {
      question: "What do Americans commonly do with leftover turkey the days after Thanksgiving?",
      options: [
        "Make turkey sandwiches and soups",
        "Freeze it for next year's holiday",
        "Send it by mail to distant relatives",
        "Feed it all to neighborhood birds"
      ],
      correct: 0,
      explanation: "Leftover turkey sandwiches with cranberry sauce and stuffing are a beloved tradition!"
    },
    {
      question: "What is the phrase Americans commonly say to greet each other on this holiday?",
      options: [
        "Happy Thanksgiving!",
        "Merry Thanksgiving!",
        "Cheery Harvest!",
        "Sweet November Day!"
      ],
      correct: 0,
      explanation: "The standard and universally used greeting is 'Happy Thanksgiving!'."
    },
    {
      question: "Which vegetable is famously topped with sweet miniature marshmallows in a holiday casserole?",
      options: ["Sweet potatoes (Yams)", "Broccoli", "Eggplants", "Cucumbers"],
      correct: 0,
      explanation: "Sweet potato casserole with brown sugar and toasted marshmallows is a classic sweet side dish."
    },
    {
      question: "In the 1621 first Thanksgiving, what meat did the Wampanoag bring as a contribution?",
      options: ["Five deer (venison)", "A roasted pig", "Fresh salmon", "Wild buffalo"],
      correct: 0,
      explanation: "Historical letters describe that the Wampanoag hunters brought five deer to the three-day feast."
    },
    {
      question: "What do people call a large, abundant, and celebratory meal with many courses?",
      options: ["A feast", "A snack", "A diet", "A picnic"],
      correct: 0,
      explanation: "A 'feast' is a rich, bountiful meal prepared for many people to celebrate a special occasion."
    },
    {
      question: "Before 1863, who campaigned for 36 years through letters to US Presidents to make Thanksgiving a holiday?",
      options: ["Sarah Josepha Hale", "Betsy Ross", "Susan B. Anthony", "Eleanor Roosevelt"],
      correct: 0,
      explanation: "Sarah Josepha Hale (who also wrote the poem 'Mary Had a Little Lamb') advocated tirelessly for the holiday."
    }
  ],

  // ==========================================
  // 4. CATEGORY WHEEL - SPECIFIC THEMATIC POOLS
  // ==========================================
  wheelCategories: {
    history: {
      name: "History & Pilgrims",
      color: "#D84315",
      icon: "🏛️",
      questions: [
        {
          question: "What year did the Pilgrims arrive at Plymouth aboard the Mayflower?",
          options: ["1620", "1492", "1776", "1865"],
          correct: 0,
          explanation: "The Mayflower anchored at Provincetown and then Plymouth in late 1620."
        },
        {
          question: "Who was the governor of Plymouth Colony who organized the 1621 celebration?",
          options: ["William Bradford", "John Smith", "George Washington", "Benjamin Franklin"],
          correct: 0,
          explanation: "Governor William Bradford invited the local Wampanoag allies to celebrate their first successful harvest."
        },
        {
          question: "Which US President officially established the fourth Thursday of November as Thanksgiving in 1941?",
          options: ["Franklin D. Roosevelt", "Theodore Roosevelt", "Abraham Lincoln", "Dwight Eisenhower"],
          correct: 0,
          explanation: "FDR signed the federal law fixing the date to the fourth Thursday to lengthen the holiday shopping season."
        },
        {
          question: "What agreement was signed aboard the Mayflower establishing democratic self-governance?",
          options: ["The Mayflower Compact", "The Declaration of Independence", "The Bill of Rights", "The Magna Carta"],
          correct: 0,
          explanation: "The Mayflower Compact was the first governing document of Plymouth Colony signed in 1620."
        },
        {
          question: "Why did the Pilgrims leave England and sail to the New World?",
          options: [
            "In search of religious freedom",
            "To discover gold and diamonds",
            "To escape a royal war",
            "To study tropical plants"
          ],
          correct: 0,
          explanation: "The Pilgrims sought freedom to practice their Puritan religious faith without state interference."
        }
      ]
    },

    food: {
      name: "Food & Feast",
      color: "#E65100",
      icon: "🍗",
      questions: [
        {
          question: "What warm liquid sauce made from meat juices and flour is poured over turkey and mashed potatoes?",
          options: ["Gravy", "Caramel", "Vinaigrette", "Mustard"],
          correct: 0,
          explanation: "Savory gravy made from the pan drippings of the roast turkey is poured over meat and potatoes."
        },
        {
          question: "Which of these ingredients is essential for making traditional pumpkin pie filling?",
          options: ["Evaporated milk & eggs", "Olive oil & vinegar", "Tomato paste", "Chocolate chips"],
          correct: 0,
          explanation: "Custard pie filling combines pumpkin puree, eggs, evaporated milk or cream, sugar, and warm spices."
        },
        {
          question: "What is the green casserole dish baked with cream of mushroom soup and crunchy fried onions?",
          options: ["Green Bean Casserole", "Spinach Lasagna", "Broccoli Soup", "Pea Salad"],
          correct: 0,
          explanation: "Green Bean Casserole is one of the most beloved savory side dishes on American holiday tables."
        },
        {
          question: "How do fresh cranberries bounce when they are ripe and good quality?",
          options: ["They bounce like small rubber balls", "They shatter into pieces", "They sink like rocks", "They don't bounce at all"],
          correct: 0,
          explanation: "Ripe, healthy cranberries have tiny air pockets inside that make them bounce high and float in water!"
        },
        {
          question: "What golden grain did Native Americans introduce to early settlers that saved them from hunger?",
          options: ["Maize (Corn)", "Barley", "Oats", "White Rice"],
          correct: 0,
          explanation: "Maize was unknown in Europe and became the foundation of early American agriculture and diet."
        }
      ]
    },

    traditions: {
      name: "Traditions & Parades",
      color: "#C2185B",
      icon: "🎈",
      questions: [
        {
          question: "What giant feature makes the Macy's Thanksgiving Day Parade famous worldwide?",
          options: [
            "Giant helium character balloons floating between skyscrapers",
            "A live race of running turkeys through the streets",
            "Fireworks over the ocean at noon",
            "A costume contest for pet dogs"
          ],
          correct: 0,
          explanation: "Massive balloons of cartoon characters like Snoopy, Pikachu, and SpongeBob float down NYC streets."
        },
        {
          question: "Which two NFL football teams ALWAYS host a game at home on Thanksgiving Day?",
          options: [
            "Detroit Lions and Dallas Cowboys",
            "New York Giants and Miami Dolphins",
            "Green Bay Packers and Chicago Bears",
            "San Francisco 49ers and Seattle Seahawks"
          ],
          correct: 0,
          explanation: "The Detroit Lions (since 1934) and Dallas Cowboys (since 1966) host annual Thanksgiving NFL classics."
        },
        {
          question: "What happens to the turkeys that are granted an official Presidential pardon?",
          options: [
            "They live happily on a protected university farm or sanctuary",
            "They are sent to a wildlife park in Africa",
            "They are released into the wild Rocky Mountains",
            "They are kept as pets inside the Oval Office"
          ],
          correct: 0,
          explanation: "Pardoned turkeys retire to peaceful university agricultural sanctuaries like Virginia Tech."
        },
        {
          question: "What is the morning 5K fun run organized in many American towns on Thanksgiving called?",
          options: ["The Turkey Trot", "The Pilgrim Sprint", "The Harvest Marathon", "The Autumn Dash"],
          correct: 0,
          explanation: "Thousands run in 'Turkey Trots' on Thanksgiving morning, often dressed in silly turkey hats!"
        },
        {
          question: "Who traditionally sits at the head of the Thanksgiving table to carve the roast turkey?",
          options: [
            "A family host or elder",
            "The youngest child in the room",
            "A professional chef hired for the day",
            "Whoever runs to the table first"
          ],
          correct: 0,
          explanation: "The host or elder usually carves the turkey with a carving knife before serving everyone."
        }
      ]
    },

    vocabulary: {
      name: "Vocabulary & Riddles",
      color: "#2E7D32",
      icon: "🧩",
      questions: [
        {
          question: "Riddle: 'I wear a red snood on my beak, I have feathers, and I say gobble. What am I?'",
          options: ["A Turkey", "An Eagle", "A Rooster", "A Duck"],
          correct: 0,
          explanation: "The fleshy growth over a turkey's beak is called a 'snood'!"
        },
        {
          question: "What does the English idiom 'to talk turkey' mean in casual conversation?",
          options: [
            "To speak frankly, honestly, and get down to business",
            "To imitate bird sounds in public",
            "To order too much food at a restaurant",
            "To tell funny jokes at a dinner party"
          ],
          correct: 0,
          explanation: "'To talk turkey' means to have a serious, direct, and practical discussion without wasting time."
        },
        {
          question: "Riddle: 'I am an orange sphere grown in autumn patches, baked into sweet pies with whipped cream. What am I?'",
          options: ["A Pumpkin", "An Orange", "A Carrot", "A Sweet Peach"],
          correct: 0,
          explanation: "Pumpkins are harvested in autumn and made into the iconic holiday pie."
        },
        {
          question: "What is the meaning of the English word 'Bountiful'?",
          options: [
            "Abundant, plentiful, and generously provided",
            "Very tiny and hard to find",
            "Extremely cold like winter snow",
            "Expensive and luxurious"
          ],
          correct: 0,
          explanation: "'Bountiful' describes something that is provided in large, generous quantities, like a bountiful harvest."
        },
        {
          question: "What do we call the act of gathering mature crops from agricultural fields at the end of autumn?",
          options: ["The Harvest", "The Planting", "The Hibernation", "The Migration"],
          correct: 0,
          explanation: "The 'harvest' is the season and process of gathering ripe grains, fruits, and vegetables."
        }
      ]
    }
  }
};
