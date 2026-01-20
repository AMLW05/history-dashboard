// Module 1 Complete Activity Data - Introduction to Mythology & Creation Myths
const module1Activities = {
    la1: {
        questions: [
            { term: "Myth", def: "A traditional story that explains natural phenomena, cultural practices, or the origins of the world and humanity" },
            { term: "Archetype", def: "A universal symbol, character, or pattern that appears across cultures and time periods" },
            { term: "Cosmogony", def: "A creation myth explaining the origin of the universe or cosmos" },
            { term: "Theogony", def: "A myth describing the birth and genealogy of gods" },
            { term: "Pantheon", def: "The collective gods and goddesses of a particular mythology or religion" },
            { term: "Etiological Myth", def: "A story that explains why something exists or why things are the way they are" },
            { term: "Ex Nihilo", def: "Creation 'from nothing' - a type of creation myth where a deity creates the world without pre-existing materials" },
            { term: "Emergence Myth", def: "Creation story where humans or the world emerge from underground or another realm" },
            { term: "World Parent Myth", def: "Creation through separation of primordial parents (sky and earth)" },
            { term: "Cosmic Egg", def: "Creation myth where the universe hatches from a primordial egg" },
            { term: "Trickster", def: "An archetype character who breaks rules, challenges authority, and creates through disruption" },
            { term: "Primordial Chaos", def: "The formless void or disorder that exists before creation in many mythologies" },
            { term: "Sacred Time", def: "The mythical time of origins when gods and heroes shaped the world" },
            { term: "Oral Tradition", def: "The passing down of stories, myths, and cultural knowledge through spoken word rather than writing" },
            { term: "Apotheosis", def: "The elevation of someone to divine status; transformation into a god" }
        ]
    },
    la2: {
        questions: [
            { q: "In Greek mythology, who created humans from clay?", answers: ["Zeus", "Prometheus ✓", "Hephaestus", "Athena"], correct: 1 },
            { q: "Which creation myth features the cosmic ocean Nun from which the first god emerges?", answers: ["Greek", "Norse", "Egyptian ✓", "Mesopotamian"], correct: 2 },
            { q: "In Norse mythology, the world was created from the body of which giant?", answers: ["Loki", "Ymir ✓", "Surtr", "Fenrir"], correct: 1 },
            { q: "According to the Popol Vuh, the Maya gods created humans on which attempt?", answers: ["First attempt", "Second attempt", "Third attempt", "Fourth attempt ✓"], correct: 3 },
            { q: "In Mesopotamian mythology, which epic contains a flood story similar to Noah's Ark?", answers: ["Epic of Gilgamesh ✓", "Enuma Elish", "Atrahasis", "All of these ✓"], correct: 3 },
            { q: "Which Indigenous American creation type describes people emerging from the underworld?", answers: ["Ex nihilo", "Cosmic egg", "Emergence myth ✓", "World parent"], correct: 2 },
            { q: "In Chinese mythology, which being separated yin and yang to create the world?", answers: ["Jade Emperor", "Nuwa", "Pangu ✓", "Fuxi"], correct: 2 },
            { q: "What is the primary function of creation myths in a society?", answers: ["Entertainment only", "Establish cultural identity and worldview ✓", "Record historical facts", "Predict the future"], correct: 1 },
            { q: "In Hindu cosmology, who is the creator god within the Trimurti?", answers: ["Brahma ✓", "Vishnu", "Shiva", "Krishna"], correct: 0 },
            { q: "Which civilization's creation myth features the mound emerging from the primordial waters?", answers: ["Greek", "Roman", "Norse", "Egyptian ✓"], correct: 3 }
        ]
    },
    la3: {
        categorization: {
            title: "Creation Myth Type Categorization",
            instructions: "Categorize each creation myth by its type: Ex Nihilo (from nothing), Emergence (from underworld), World Parent (separation), or Cosmic Egg.",
            categories: ["Ex Nihilo", "Emergence", "World Parent", "Cosmic Egg"],
            items: [
                { text: "Genesis (Judeo-Christian): God speaks the world into existence", answer: "Ex Nihilo" },
                { text: "Rangi and Papa (Māori): Sky father and earth mother separated by their children", answer: "World Parent" },
                { text: "Hopi Creation: People climb through worlds to reach the current surface world", answer: "Emergence" },
                { text: "Pangu (Chinese): Giant emerges from cosmic egg and separates yin and yang", answer: "Cosmic Egg" },
                { text: "Navajo Creation: People ascend through four or five colored worlds", answer: "Emergence" },
                { text: "Geb and Nut (Egyptian): Earth god and sky goddess separated by air god Shu", answer: "World Parent" },
                { text: "Brahma (Hindu): Creator god emerges from golden egg floating in cosmic waters", answer: "Cosmic Egg" },
                { text: "Allah (Islamic): God creates universe by divine command 'Be, and it is'", answer: "Ex Nihilo" },
                { text: "Ymir (Norse): World created from body parts of slain primordial giant", answer: "World Parent" },
                { text: "Pueblo emergence: People and animals climb through sipapuni (hole) from underworld", answer: "Emergence" },
                { text: "Orphic tradition (Greek): Cosmic egg laid by primordial night goddess", answer: "Cosmic Egg" },
                { text: "Zulu creation: Unkulunkulu emerges from reeds and creates everything", answer: "Ex Nihilo" }
            ]
        }
    }
};

// Module 1 Quiz (10 questions covering all MLOs)
const module1Quiz = {
    questions: [
        {
            q: "Which of the following BEST defines a myth?",
            answers: [
                "A false or fictional story",
                "A traditional story explaining natural phenomena or cultural origins ✓",
                "An ancient religious text",
                "A fairy tale for children"
            ],
            correct: 1
        },
        {
            q: "What is the primary difference between a myth and a legend?",
            answers: [
                "Myths involve gods and creation; legends involve historical figures and events ✓",
                "Myths are true; legends are false",
                "Legends are older than myths",
                "There is no difference"
            ],
            correct: 0
        },
        {
            q: "An 'ex nihilo' creation myth involves:",
            answers: [
                "Humans emerging from underground",
                "Parents separating to form sky and earth",
                "Creation from nothing by a supreme being ✓",
                "The world hatching from an egg"
            ],
            correct: 2
        },
        {
            q: "Which culture's mythology features Ymir, the frost giant from whose body the world was created?",
            answers: [
                "Greek",
                "Egyptian",
                "Norse ✓",
                "Mesopotamian"
            ],
            correct: 2
        },
        {
            q: "What function do etiological myths primarily serve?",
            answers: [
                "Predict future events",
                "Explain why things exist or happen ✓",
                "Record historical battles",
                "Teach mathematics"
            ],
            correct: 1
        },
        {
            q: "In many Indigenous American creation stories, humans emerge from:",
            answers: [
                "The ocean",
                "Clay shaped by gods",
                "Underworld through multiple levels ✓",
                "Fallen stars"
            ],
            correct: 2
        },
        {
            q: "The concept of 'archetype' refers to:",
            answers: [
                "Ancient archaeological sites",
                "Universal symbols or patterns recurring across cultures ✓",
                "The first version of a written myth",
                "A type of creation myth"
            ],
            correct: 1
        },
        {
            q: "Which of these is an example of a World Parent creation myth?",
            answers: [
                "God speaks the world into existence",
                "Sky father and earth mother are separated ✓",
                "Humans emerge from underground",
                "The universe forms from a cosmic egg"
            ],
            correct: 1
        },
        {
            q: "What role does 'primordial chaos' play in many creation myths?",
            answers: [
                "It is the final state after destruction",
                "It is the formless state before creation begins ✓",
                "It describes human rebellion against gods",
                "It represents modern disorder"
            ],
            correct: 1
        },
        {
            q: "Why do creation myths often reflect cultural values?",
            answers: [
                "They are written by philosophers",
                "They establish what the culture considers important, sacred, or ideal ✓",
                "They copy values from other cultures",
                "They don't reflect cultural values"
            ],
            correct: 1
        }
    ]
};

// Module 1 Quiz (10 questions covering all MLOs)
const module1Quiz = {
    questions: [
        {
            q: "Which of the following BEST defines a myth?",
            answers: [
                "A false or fictional story",
                "A traditional story explaining natural phenomena or cultural origins ✓",
                "An ancient religious text",
                "A fairy tale for children"
            ],
            correct: 1
        },
        {
            q: "What is the primary difference between a myth and a legend?",
            answers: [
                "Myths involve gods and creation; legends involve historical figures and events ✓",
                "Myths are true; legends are false",
                "Legends are older than myths",
                "There is no difference"
            ],
            correct: 0
        },
        {
            q: "An 'ex nihilo' creation myth involves:",
            answers: [
                "Humans emerging from underground",
                "Parents separating to form sky and earth",
                "Creation from nothing by a supreme being ✓",
                "The world hatching from an egg"
            ],
            correct: 2
        },
        {
            q: "Which culture's mythology features Ymir, the frost giant from whose body the world was created?",
            answers: [
                "Greek",
                "Egyptian",
                "Norse ✓",
                "Mesopotamian"
            ],
            correct: 2
        },
        {
            q: "What function do etiological myths primarily serve?",
            answers: [
                "Predict future events",
                "Explain why things exist or happen ✓",
                "Record historical battles",
                "Teach mathematics"
            ],
            correct: 1
        },
        {
            q: "In many Indigenous American creation stories, humans emerge from:",
            answers: [
                "The ocean",
                "Clay shaped by gods",
                "Underworld through multiple levels ✓",
                "Fallen stars"
            ],
            correct: 2
        },
        {
            q: "The concept of 'archetype' refers to:",
            answers: [
                "Ancient archaeological sites",
                "Universal symbols or patterns recurring across cultures ✓",
                "The first version of a written myth",
                "A type of creation myth"
            ],
            correct: 1
        },
        {
            q: "Which of these is an example of a World Parent creation myth?",
            answers: [
                "God speaks the world into existence",
                "Sky father and earth mother are separated ✓",
                "Humans emerge from underground",
                "The universe forms from a cosmic egg"
            ],
            correct: 1
        },
        {
            q: "What role does 'primordial chaos' play in many creation myths?",
            answers: [
                "It is the final state after destruction",
                "It is the formless state before creation begins ✓",
                "It describes human rebellion against gods",
                "It represents modern disorder"
            ],
            correct: 1
        },
        {
            q: "Why do creation myths often reflect cultural values?",
            answers: [
                "They are written by philosophers",
                "They establish what the culture considers important, sacred, or ideal ✓",
                "They copy values from other cultures",
                "They don't reflect cultural values"
            ],
            correct: 1
        }
    ]
};

// Module 1 Project Checkpoint
const module1Project = {
    title: "Module 1 Project Checkpoint: Choosing Your Modern Myth (50 points)",
    instructions: `**Module Theme**: Origins of Everything
**Inquiry Question**: What makes a story become a myth?

**This checkpoint is GRADED and submitted to Canvas**

---

## **Project Overview: Modern Myth Analysis Journey**

Throughout this course, you will analyze ONE modern myth (Star Wars, Lord of the Rings, Harry Potter, or a Superhero universe) through the lens of classical mythology. This project builds across the semester.

---

## **PART A: Choose Your Modern Myth (20 points)**

Select ONE of the following for your semester-long analysis:

1. **Star Wars** (Original or sequel trilogy, or The Mandalorian)
2. **The Lord of the Rings / The Hobbit** (Books or films)
3. **Harry Potter** (Series or specific books/films)
4. **Marvel Cinematic Universe** (Focus on one character or team)
5. **DC Universe** (Focus on one character or team)
6. **Other** (Get instructor approval first - must be substantial mythological narrative)

**Submit:**
- Your chosen modern myth
- Which specific story/character you'll focus on
- Why this resonates with you personally (100-150 words)

---

## **PART B: Initial Analysis - Creation & Origins (30 points)**

Write 300-400 words addressing:

1. **What is the creation story or origin myth of your chosen universe?**
   - How did this world/universe begin?
   - What powers or beings created it?
   - What type of creation myth does it most resemble? (Ex nihilo, emergence, world parent, cosmic egg)

2. **What values does this creation story establish?**
   - What does the creation story tell us about good vs. evil?
   - What's considered sacred or important?
   - How does order emerge from chaos?

3. **Comparison to Classical Creation Myths**
   - Which ancient creation myth does this most resemble? (Greek, Norse, Egyptian, etc.)
   - What patterns or archetypes appear in both?
   - What's unique or different about the modern version?

**Required Elements:**
- Clear thesis statement about the mythological nature of your chosen story
- At least 3 specific examples from your modern myth
- At least 2 connections to classical mythology discussed in Module 1
- Proper citations if using external sources

---

## **Grading Rubric:**

**Part A (20 points):**
- Clear selection and justification: 10 points
- Personal connection explanation: 10 points

**Part B (30 points):**
- Analysis of creation/origin elements: 10 points
- Identification of cultural values: 10 points
- Comparison to classical myths: 10 points

**Total: 50 points**

---

## **Tips for Success:**

✅ Be specific - use character names, plot events, specific scenes
✅ Go deeper than surface similarities - explain WHY patterns appear
✅ Connect to course concepts (archetypes, cosmogony, etiological myths)
✅ Write in clear academic prose (no casual texting language)
✅ Proofread for grammar and spelling

**Due Date:** See Canvas module for specific deadline
**Submission:** Upload as Word document or PDF to Canvas`
};

// Rubric Data (matching HIS-131 structure)
const rubricData = {
    rubric1: {
        title: "Project Checkpoint Rubric",
        totalPoints: "50-100 points (varies by checkpoint)",
        criteria: [
            {
                name: "Mythological Analysis Depth",
                points: "30-40",
                excellent: "Demonstrates sophisticated understanding of mythological patterns, archetypes, and themes. Makes insightful connections between ancient and modern myths with specific, detailed examples.",
                proficient: "Shows solid understanding of mythological concepts. Makes clear connections with appropriate examples.",
                developing: "Shows basic understanding but analysis lacks depth. Examples are general rather than specific.",
                unsatisfactory: "Minimal mythological analysis. Few or no connections to course concepts."
            },
            {
                name: "Specific Evidence & Examples",
                points: "20-30",
                excellent: "Provides abundant specific examples from chosen modern myth (character names, plot events, scenes, quotes). Cites ancient myths accurately for comparison.",
                proficient: "Provides adequate specific examples. Most claims supported by evidence.",
                developing: "Examples are general or vague. Some claims unsupported.",
                unsatisfactory: "Few specific examples. Claims largely unsupported."
            },
            {
                name: "Critical Thinking & Insight",
                points: "15-20",
                excellent: "Goes beyond surface similarities to explain WHY patterns appear. Analyzes cultural significance and contemporary relevance.",
                proficient: "Explains connections clearly. Discusses significance.",
                developing: "Mostly describes rather than analyzes. Limited discussion of significance.",
                unsatisfactory: "Only surface-level description. No analysis of significance."
            }
        ]
    },
    rubric2: {
        title: "Discussion Board Rubric",
        totalPoints: "100 points",
        criteria: [
            {
                name: "Initial Post - Content & Analysis",
                points: "40",
                excellent: "Addresses all discussion questions thoroughly with specific examples from course materials and chosen modern myth. Demonstrates critical thinking and original insight. 300-400 words.",
                proficient: "Addresses discussion questions with adequate detail. Shows understanding of concepts. 250-350 words.",
                developing: "Addresses questions superficially. Limited examples or analysis. 200-250 words.",
                unsatisfactory: "Minimal engagement with questions. No examples or analysis. Below 200 words."
            },
            {
                name: "Peer Responses (2 required)",
                points: "30",
                excellent: "Each response is substantive (100+ words). Engages meaningfully with classmate's ideas. Respectful and collegial tone.",
                proficient: "Adequate responses (75-100 words each). Engages with classmate's ideas. Respectful.",
                developing: "Brief responses (50-75 words). Minimal engagement.",
                unsatisfactory: "Very brief or missing responses. No real engagement."
            }
        ]
    },
    rubric3: {
        title: "Final Portfolio Project Rubric",
        totalPoints: "200 points",
        criteria: [
            {
                name: "Hero's Journey Analysis",
                points: "40",
                excellent: "Complete, detailed mapping of all 12 Hero's Journey stages with specific scenes/events from chosen myth. Demonstrates mastery of monomyth framework.",
                proficient: "Identifies all 12 stages with good examples. Explains most functions.",
                developing: "Identifies most stages but some are unclear or incorrect. Limited explanation.",
                unsatisfactory: "Missing stages or mostly incorrect. No explanations."
            },
            {
                name: "Archetype Analysis",
                points: "40",
                excellent: "Identifies and analyzes 5+ archetypes with specific character examples and behaviors. Draws insightful parallels to classical mythological figures.",
                proficient: "Identifies 5 archetypes with good examples. Makes clear parallels.",
                developing: "Identifies fewer than 5 archetypes or analysis is superficial.",
                unsatisfactory: "Few archetypes identified. No analysis."
            },
            {
                name: "Comparative Mythology Essay",
                points: "50",
                excellent: "Sophisticated 1000-1500 word essay with clear thesis. Identifies and analyzes multiple mythological sources. Explains contemporary relevance.",
                proficient: "Clear 800-1000 word essay with thesis. Identifies mythological sources. Discusses contemporary relevance.",
                developing: "Brief essay (600-800 words) or unclear thesis. Limited discussion.",
                unsatisfactory: "Very brief (under 600 words) or no clear thesis."
            }
        ]
    }
};
