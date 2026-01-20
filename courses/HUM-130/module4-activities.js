// Module 4 Complete Activity Data - Tolkien's Legendarium
const module4Activities = {
    la1: {
        questions: [
            { term: "Legendarium", def: "Tolkien's vast interconnected mythology for Middle-earth" },
            { term: "Ainulindalë", def: "The creation myth of Middle-earth through the Music of the Ainur" },
            { term: "Eru Ilúvatar", def: "The supreme deity who created the Ainur and all of Eä" },
            { term: "Valar", def: "The fourteen powerful Ainur who entered Arda to shape the world" },
            { term: "Maiar", def: "Lesser spirits serving the Valar; includes Gandalf and Sauron" },
            { term: "Melkor", def: "Most powerful Ainu who introduced discord; became Morgoth, first Dark Lord" },
            { term: "One Ring", def: "Cursed artifact of power; parallels Norse Andvaranaut" },
            { term: "Númenor", def: "Atlantis-like island kingdom of men that fell due to pride" },
            { term: "Kalevala", def: "Finnish epic that influenced Tolkien's storytelling style" },
            { term: "Andvaranaut", def: "Cursed ring from Norse mythology that influenced the One Ring" },
            { term: "Tuatha Dé Danann", def: "Irish mythological race that influenced Tolkien's elves" },
            { term: "Middle-earth", def: "The world of mortals; derived from Norse Midgard" },
            { term: "Gandalf", def: "Name taken from Norse Völuspá; wizard serving as mentor" },
            { term: "Eucatastrophe", def: "Tolkien's term for sudden joyous turn in narrative" },
            { term: "Quenya", def: "High elvish language influenced by Finnish" }
        ]
    },
    la2: {
        questions: [
            { q: "Who is the supreme deity in Tolkien's mythology?", answers: ["Melkor", "Manwë", "Eru Ilúvatar ✓", "Sauron"], correct: 2 },
            { q: "The Ainulindalë describes creation through:", answers: ["Battle", "Music ✓", "Speech", "Light"], correct: 1 },
            { q: "Which Finnish epic influenced Tolkien's work?", answers: ["Edda", "Beowulf", "Kalevala ✓", "Nibelungenlied"], correct: 2 },
            { q: "The fall of Númenor parallels which Greek myth?", answers: ["Troy", "Atlantis ✓", "Thebes", "Sparta"], correct: 1 },
            { q: "What type of being is Gandalf?", answers: ["Vala", "Maiar ✓", "Elf", "Human"], correct: 1 },
            { q: "The One Ring is most inspired by which Norse object?", answers: ["Mjolnir", "Gungnir", "Andvaranaut ✓", "Gram"], correct: 2 },
            { q: "Tolkien's dwarves are named from which source?", answers: ["Greek mythology", "Celtic tales", "Norse Völuspá ✓", "Biblical texts"], correct: 2 },
            { q: "What was Tolkien's profession?", answers: ["Novelist only", "Historian", "Philologist/linguist ✓", "Archaeologist"], correct: 2 },
            { q: "Middle-earth derives from which Norse term?", answers: ["Asgard", "Valhalla", "Midgard ✓", "Jotunheim"], correct: 2 },
            { q: "Melkor's introduction of discord parallels which concept?", answers: ["Original sin/fall ✓", "Greek hubris", "Norse Ragnarok", "Hindu karma"], correct: 0 }
        ]
    },
    la3: {
        categorization: {
            title: "Mythological Sources in Middle-earth",
            instructions: "Categorize each Middle-earth element by its primary mythological source tradition.",
            categories: ["Norse", "Finnish", "Celtic", "Greek/Roman", "Christian", "Original"],
            items: [
                { text: "Dwarves and their names (Thorin, Gandalf from Völuspá)", answer: "Norse" },
                { text: "Quenya language structure", answer: "Finnish" },
                { text: "Elves as immortal, declining race", answer: "Celtic" },
                { text: "Númenor's fall due to pride and reaching for immortality", answer: "Greek/Roman" },
                { text: "Eru Ilúvatar as supreme creator", answer: "Christian" },
                { text: "One Ring as cursed object leading to corruption", answer: "Norse" },
                { text: "Creation through Music of the Ainur", answer: "Original" },
                { text: "Gandalf's death and return as 'the White'", answer: "Christian" },
                { text: "Story of Túrin Turambar", answer: "Finnish" },
                { text: "Hobbits as small, provincial people", answer: "Original" },
                { text: "Mercy as transformative power (Gollum, Ring destruction)", answer: "Christian" },
                { text: "Elves departing Middle-earth for the West", answer: "Celtic" }
            ]
        }
    }
};

// Module 4 Discussion Board 2
const module4Discussion = {
    title: "Discussion Board 2: Tolkien's Mythological Sources",
    prompt: `**Discussion Prompt** (300-350 words):

Analyze how J.R.R. Tolkien synthesized real-world mythologies to create Middle-earth. Choose ONE of the following to analyze:

**Option 1: Norse Mythology in Middle-earth**
- How does the One Ring parallel the cursed Andvaranaut from the Völsunga Saga?
- Analyze how Tolkien used Norse sources (Edda, Völuspá) for dwarves, names, and runes
- What aspects of Norse fatalism (Ragnarok) appear in the War of the Ring?
- How does Tolkien transform these elements rather than simply copying them?

**Option 2: Finnish Epic (Kalevala) and Elvish Culture**
- How did the Kalevala inspire Tolkien's Silmarillion and elvish languages?
- Analyze parallels between Väinämöinen and characters like Elrond or Círdan
- How does Finnish mythology's sense of loss/fading influence the elves leaving Middle-earth?
- What makes Quenya more than just "Finnish with different words"?

**Option 3: Christian Themes in a Pagan Framework**
- Analyze how Eru Ilúvatar, the Valar, and creation through music reflect Christian cosmology
- How does the fall of Númenor parallel Atlantis AND Biblical flood narratives?
- Examine eucatastrophe (sudden joyous turn) as Tolkien's Christian narrative philosophy
- How does Tolkien balance Christian themes with pagan mythology without preaching?

**Option 4: Celtic/Arthurian Elements**
- How do the elves reflect Celtic Tuatha Dé Danann rather than Germanic elves?
- Analyze Aragorn's arc as an Arthurian "once and future king" narrative
- What role do "fairylands" (Lothlórien, Rivendell) play similar to Celtic Otherworlds?
- How does the broken sword Narsil/Andúril echo Excalibur mythology?

**Initial Post Requirements** (300-350 words):
- Choose ONE option and provide specific examples from Tolkien's works
- Compare Middle-earth elements to their real-world mythological sources
- Analyze how Tolkien TRANSFORMS source material rather than copying it
- Explain why this synthesis matters for understanding modern fantasy`,
    rubric: "Discussion Rubric (see Rubrics tab)",
    pointsBreakdown: {
        initialPost: 40,
        peerResponses: 40,
        analysisDepth: 20
    }
};

// Module 4 Quiz - Tolkien's Legendarium
const module4Quiz = {
    questions: [
        {
            q: "Who is the supreme deity in Tolkien's mythology?",
            answers: ["Melkor", "Manwë", "Eru Ilúvatar ✓", "Sauron"],
            correct: 2
        },
        {
            q: "The Ainulindalë describes the creation of the world through:",
            answers: [
                "Battle between gods",
                "The Music of the Ainur ✓",
                "Divine speech",
                "Sacrifice"
            ],
            correct: 1
        },
        {
            q: "Which Finnish epic heavily influenced Tolkien's Silmarillion?",
            answers: ["The Edda", "Beowulf", "The Kalevala ✓", "Nibelungenlied"],
            correct: 2
        },
        {
            q: "The fall of Númenor in Tolkien's mythology parallels which Greek legend?",
            answers: ["Troy", "Atlantis ✓", "Thebes", "Sparta"],
            correct: 1
        },
        {
            q: "What type of being is Gandalf in Tolkien's cosmology?",
            answers: ["Vala", "Maiar ✓", "Elf", "Enhanced human"],
            correct: 1
        },
        {
            q: "The One Ring was inspired by which cursed object from Norse mythology?",
            answers: [
                "Mjolnir (Thor's hammer)",
                "Gungnir (Odin's spear)",
                "Andvaranaut (cursed ring) ✓",
                "Gram (Sigurd's sword)"
            ],
            correct: 2
        },
        {
            q: "The names of Tolkien's dwarves come from which Norse text?",
            answers: ["Prose Edda", "Völuspá ✓", "Hávamál", "Beowulf"],
            correct: 1
        },
        {
            q: "Melkor's introduction of discord into the Music parallels which concept?",
            answers: [
                "The fall of Lucifer/original sin ✓",
                "Greek hubris only",
                "Norse Ragnarok",
                "Hindu karma"
            ],
            correct: 0
        },
        {
            q: "The term 'Middle-earth' derives from which Norse cosmological realm?",
            answers: ["Asgard", "Valhalla", "Midgard ✓", "Jotunheim"],
            correct: 2
        },
        {
            q: "Tolkien's elves are most influenced by which mythological tradition?",
            answers: [
                "Greek nymphs",
                "Norse dwarves",
                "Celtic Tuatha Dé Danann ✓",
                "Roman gods"
            ],
            correct: 2
        }
    ]
};

// Module 4 Project Checkpoint 4 (Tolkien)
const module4Project = {
    title: "Portfolio Checkpoint 4: Tolkien's Middle-earth Mythology",
    instructions: `**Checkpoint 4: Exploring Tolkien's Legendarium** (100 points)

**CHOOSE ONE OPTION**:

**OPTION 1: Middle-earth Mythology Map**
Create visual map showing how real-world myths influenced Middle-earth
- Norse sources (dwarves, runes, Andvaranaut → One Ring)
- Finnish sources (Kalevala → Silmarillion, Quenya language)
- Celtic/Arthurian (elves, broken sword, returning king)
- Christian themes (Eru, eucatastrophe, sacrifice)
- Include images and connecting lines
- 150-200 word reflection

**OPTION 2: Comparative Creation Myth Poster**
Compare Ainulindalë (Tolkien's creation) to ONE real creation myth
- Visual side-by-side comparison
- Show: chaos→creation, divine beings, introduction of evil, world-shaping
- 150-200 word analysis of how Tolkien synthesized myths

**OPTION 3: Character Archetype Gallery**
Create character cards for 6-8 LOTR characters showing their mythological archetypes
- Gandalf (Mentor/Odin), Aragorn (Arthur), Gollum (Trickster/Shadow), etc.
- Each card: image + archetype + real myth parallel
- 150-200 word reflection on universal patterns

**OPTION 4: Ring Symbolism Infographic**
Visual analysis of the One Ring as mythological symbol
- Connect to Norse Andvaranaut, Greek hubris, power/corruption themes
- Show ring's journey through LOTR
- 150-200 word reflection on why cursed objects resonate in mythology

**Tools**: Canva, PowerPoint, hand-drawn, poster, digital collage`,
    rubric: "Project Checkpoint Rubric (see Rubrics tab)"
};

// Module 4 Midterm Exam
const module4Midterm = {
    title: "Midterm Exam: Mythology Foundations (Modules 1-4)",
    instructions: "Comprehensive exam covering creation myths, hero's journey, Star Wars, and Tolkien. 25 questions, 90 minutes.",
    questions: [
        { q: "Which Egyptian deity created the world through speech/thought?", answers: ["Osiris", "Atum/Ra ✓", "Set", "Anubis"], correct: 1 },
        { q: "The Hero's Journey has how many stages according to Joseph Campbell?", answers: ["10", "12 ✓", "15", "8"], correct: 1 },
        { q: "In Star Wars, who serves as Luke's primary mentor in A New Hope?", answers: ["Yoda", "Obi-Wan Kenobi ✓", "Han Solo", "Leia"], correct: 1 },
        { q: "Tolkien's supreme deity is called:", answers: ["Manwë", "Melkor", "Eru Ilúvatar ✓", "Sauron"], correct: 2 },
        { q: "Which creation myth involves cosmic eggs?", answers: ["Egyptian", "Greek", "Chinese (Pangu) ✓", "Norse"], correct: 2 },
        { q: "The 'Ordeal' stage represents:", answers: ["Call to adventure", "Hero's greatest test/death-rebirth ✓", "Meeting mentor", "Returning home"], correct: 1 },
        { q: "Darth Vader functions as which archetype for Luke?", answers: ["Mentor", "Trickster", "Shadow ✓", "Anima"], correct: 2 },
        { q: "Which epic influenced Tolkien's work?", answers: ["Edda", "Beowulf", "Kalevala ✓", "Nibelungenlied"], correct: 2 },
        { q: "In Popol Vuh, Maya gods create humans from:", answers: ["Clay", "Maize/corn ✓", "Wood", "Stone"], correct: 1 },
        { q: "Gilgamesh seeks immortality after whose death?", answers: ["His father", "Enkidu ✓", "His wife", "Humbaba"], correct: 1 },
        { q: "What is Campbell's 'monomyth'?", answers: ["Single myth theory", "Universal Hero's Journey pattern ✓", "Greek mythology only", "Creation myths"], correct: 1 },
        { q: "Star Wars drew from which samurai filmmaker?", answers: ["Ozu", "Kurosawa ✓", "Mizoguchi", "Kitano"], correct: 1 },
        { q: "The One Ring parallels which Norse object?", answers: ["Mjolnir", "Gungnir", "Andvaranaut ✓", "Gram"], correct: 2 },
        { q: "Which stage: hero refuses the adventure?", answers: ["Ordinary World", "Call to Adventure", "Refusal of Call ✓", "Meeting Mentor"], correct: 2 },
        { q: "Yoda represents which archetype?", answers: ["Mentor ✓", "Shadow", "Trickster", "Herald"], correct: 0 },
        { q: "Tolkien's creation through music appears in:", answers: ["Silmarillion ✓", "Hobbit", "LOTR only", "Unfinished Tales"], correct: 0 },
        { q: "Greek 'hubris' means:", answers: ["Fate", "Excessive pride ✓", "Glory", "Homecoming"], correct: 1 },
        { q: "Luke's journey mirrors which classical hero?", answers: ["Odysseus ✓", "Achilles", "Hector", "Ajax"], correct: 0 },
        { q: "Middle-earth derives from Norse:", answers: ["Asgard", "Valhalla", "Midgard ✓", "Jotunheim"], correct: 2 },
        { q: "The 'elixir' is:", answers: ["Magic potion", "Knowledge/gift hero brings back ✓", "Treasure only", "Weapon"], correct: 1 },
        { q: "Force in Star Wars parallels:", answers: ["Technology", "Universal spiritual energy/Tao ✓", "Magic spells", "Political power"], correct: 1 },
        { q: "Tolkien's eucatastrophe means:", answers: ["Disaster", "Sudden joyous turn ✓", "Evil victory", "Character death"], correct: 1 },
        { q: "Which is NOT a creation type?", answers: ["Ex nihilo", "Emergence", "World parent", "Hero's journey ✓"], correct: 3 },
        { q: "Han Solo sometimes acts as:", answers: ["Mentor", "Shadow", "Trickster ✓", "Threshold guardian"], correct: 2 },
        { q: "Gandalf is a:", answers: ["Vala", "Maiar ✓", "Elf", "Human wizard"], correct: 1 }
    ]
};
