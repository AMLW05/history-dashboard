// Module 5 Complete Activity Data - Harry Potter
const module5Activities = {
    la1: {
        questions: [
            { term: "Chosen One", def: "Prophesied hero destined to defeat great evil; Harry's role" },
            { term: "Horcrux", def: "Dark object containing a fragment of a wizard's soul; grants immortality" },
            { term: "Deathly Hallows", def: "Three legendary objects: Elder Wand, Resurrection Stone, Invisibility Cloak" },
            { term: "Basilisk", def: "Serpent king from Greek mythology that kills with its gaze" },
            { term: "Patronus", def: "Protective charm manifesting as an animal spirit guide" },
            { term: "Phoenix", def: "Immortal bird of Greek/Egyptian mythology; symbol of rebirth" },
            { term: "Prophecy", def: "Prediction binding Harry and Voldemort in conflict" },
            { term: "Alchemy", def: "Medieval tradition of transformation; Nicolas Flamel reference" },
            { term: "Animagus", def: "Wizard who can transform into an animal; shapeshifter archetype" },
            { term: "Dementor", def: "Soul-sucking creature; represents depression and despair" },
            { term: "Sorting Hat", def: "Magical object determining student's house; choice and destiny" },
            { term: "Platform 9¾", def: "Threshold between mundane and magical worlds" },
            { term: "Thestrals", def: "Creatures visible only to those who've witnessed death" },
            { term: "Philosopher's Stone", def: "Legendary alchemical substance granting immortality" },
            { term: "Tale of Three Brothers", def: "In-universe fable explaining Deathly Hallows' origin" }
        ]
    },
    la2: {
        questions: [
            { q: "Who serves as Harry's primary mentor figure?", answers: ["Sirius Black", "Remus Lupin", "Albus Dumbledore ✓", "Hagrid"], correct: 2 },
            { q: "The Basilisk originates from which mythology?", answers: ["Norse", "Greek ✓", "Celtic", "Egyptian"], correct: 1 },
            { q: "Platform 9¾ symbolizes:", answers: ["A train station", "Threshold between worlds ✓", "A mathematical concept", "Dumbledore's office"], correct: 1 },
            { q: "Which character represents the 'Shadow' archetype?", answers: ["Hermione", "Ron", "Voldemort ✓", "Luna"], correct: 2 },
            { q: "The phoenix Fawkes symbolizes:", answers: ["Death", "Rebirth and loyalty ✓", "Evil", "Knowledge"], correct: 1 },
            { q: "What makes Harry 'the Chosen One'?", answers: ["His wealth", "Random selection", "Prophecy naming him ✓", "His intelligence"], correct: 2 },
            { q: "Horcruxes parallel which mythological concept?", answers: ["Selling one's soul/splitting self for immortality ✓", "Hero's weapons", "Magic spells", "Greek temples"], correct: 0 },
            { q: "The Deathly Hallows represent:", answers: ["School supplies", "Mastery over death ✓", "Dumbledore's possessions", "Tournament prizes"], correct: 1 },
            { q: "Which creature appears in both Greek and Egyptian mythology?", answers: ["Basilisk", "Phoenix", "Sphinx", "All of these ✓"], correct: 3 },
            { q: "Harry's sacrifice in the Forest parallels which mythological theme?", answers: ["Theft", "Revenge", "Willing sacrifice saves others ✓", "Cowardice"], correct: 2 }
        ]
    },
    la3: {
        matching: {
            title: "Magical Creatures - Mythological Origins",
            instructions: "Match each Harry Potter creature to its original mythological tradition.",
            items: [
                { creature: "Basilisk (King of Serpents)", origin: "Greek mythology" },
                { creature: "Phoenix (Fawkes)", origin: "Greek/Egyptian mythology" },
                { creature: "Centaur (Firenze)", origin: "Greek mythology" },
                { creature: "Hippogriff (Buckbeak)", origin: "Medieval European legend" },
                { creature: "Sphinx (Triwizard Tournament)", origin: "Greek/Egyptian mythology" },
                { creature: "Banshee", origin: "Celtic mythology" },
                { creature: "Veela", origin: "Slavic mythology" },
                { creature: "Grindylow", origin: "English folklore" },
                { creature: "Kappa", origin: "Japanese mythology" },
                { creature: "Thestral", origin: "Original creation" },
                { creature: "House-elf", origin: "Germanic/Scandinavian folklore" },
                { creature: "Dragon (various types)", origin: "Multiple traditions (European, Chinese)" }
            ]
        }
    }
};

// Module 5 Quiz - Harry Potter
const module5Quiz = {
    questions: [
        {
            q: "The prophecy naming Harry as the 'Chosen One' parallels which mythological concept?",
            answers: [
                "Random selection",
                "Messianic prophecy/destined hero ✓",
                "Democratic election",
                "Family inheritance only"
            ],
            correct: 1
        },
        {
            q: "The basilisk in Harry Potter originates from which mythology?",
            answers: ["Norse", "Greek ✓", "Celtic", "Egyptian only"],
            correct: 1
        },
        {
            q: "Platform 9¾ symbolically represents:",
            answers: [
                "A mathematical concept",
                "The threshold between mundane and magical worlds ✓",
                "A train schedule",
                "Hogwarts' founding date"
            ],
            correct: 1
        },
        {
            q: "Which character primarily represents the 'Shadow' archetype in Harry Potter?",
            answers: ["Dumbledore", "Hermione", "Voldemort ✓", "Ron"],
            correct: 2
        },
        {
            q: "The phoenix Fawkes symbolizes:",
            answers: [
                "Death and endings",
                "Rebirth, renewal, and loyalty ✓",
                "Evil magic",
                "Academic knowledge only"
            ],
            correct: 1
        },
        {
            q: "Horcruxes in Harry Potter parallel which mythological concept?",
            answers: [
                "Splitting one's soul for immortality ✓",
                "Hero's weapons",
                "Magic spells only",
                "Temple offerings"
            ],
            correct: 0
        },
        {
            q: "The Deathly Hallows (Elder Wand, Resurrection Stone, Invisibility Cloak) represent:",
            answers: [
                "School supplies",
                "Mastery over death ✓",
                "Random treasures",
                "Tournament prizes"
            ],
            correct: 1
        },
        {
            q: "Which mythological tradition does the centaur Firenze represent?",
            answers: ["Norse", "Greek ✓", "Egyptian", "Celtic"],
            correct: 1
        },
        {
            q: "Harry's willing sacrifice in the Forbidden Forest parallels which mythological theme?",
            answers: [
                "Revenge",
                "Theft",
                "Sacrificial love saves others ✓",
                "Cowardice"
            ],
            correct: 2
        },
        {
            q: "The Sorting Hat's function is most similar to which mythological concept?",
            answers: [
                "Random chance",
                "Destiny balanced with choice ✓",
                "Divine punishment",
                "Military draft"
            ],
            correct: 1
        }
    ]
};

// Module 5 Project Checkpoint 5 (Harry Potter)
const module5Project = {
    title: "Portfolio Checkpoint 5: Harry Potter Mythology Analysis",
    instructions: `**Checkpoint 5: Harry Potter & Mythological Patterns** (100 points)

**CHOOSE ONE OPTION**:

**OPTION 1: Archetype Character Web**
Create visual web connecting Harry Potter characters to Jungian archetypes
- Hero (Harry), Shadow (Voldemort), Mentor (Dumbledore), Trickster (Weasley twins), etc.
- Show connections between characters and archetypes with images
- 150-200 word reflection on why these archetypes are universal

**OPTION 2: Harry vs. Classical Hero Comparison**
Visual comparison of Harry Potter to ONE classical hero (Perseus, King Arthur, Odysseus)
- Side-by-side chart showing parallel elements
- Orphan origins, prophecy, magical objects, mentors, final battles
- 150-200 word analysis of ancient patterns in modern storytelling

**OPTION 3: Deathly Hallows = Holy Grail Infographic**
Create infographic comparing Deathly Hallows quest to Grail mythology
- Show parallels: three sacred objects, quest structure, accepting death vs. immortality
- Visual representation of both quests
- 150-200 word reflection on why quest myths persist

**OPTION 4: Death & Resurrection Visual Essay**
Analyze King's Cross limbo scene as mythological katabasis (underworld journey)
- Compare to Orpheus, Gilgamesh, Odysseus underworld journeys
- Visual timeline or poster format
- 150-200 word reflection on death/rebirth in mythology

**Tools**: Canva, PowerPoint, hand-drawn web, poster, digital collage`,
    rubric: "Project Checkpoint Rubric (see Rubrics tab)"
};
