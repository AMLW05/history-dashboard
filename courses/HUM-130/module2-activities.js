// Module 2 Complete Activity Data - Hero's Journey & Epic Tales
const module2Activities = {
    la1: {
        questions: [
            { term: "Monomyth", def: "Joseph Campbell's term for the Hero's Journey - a universal narrative pattern" },
            { term: "Arete", def: "Greek concept of excellence and virtue; heroic excellence" },
            { term: "Hubris", def: "Excessive pride leading to the hero's downfall" },
            { term: "Gilgamesh", def: "Mesopotamian hero-king seeking immortality; oldest recorded epic" },
            { term: "Odysseus", def: "Greek hero of cunning intelligence; protagonist of Homer's Odyssey" },
            { term: "Beowulf", def: "Anglo-Saxon hero who battles Grendel, Grendel's mother, and a dragon" },
            { term: "Rama", def: "Hindu hero-avatar; prince whose story is told in the Ramayana" },
            { term: "Call to Adventure", def: "The event disrupting the hero's ordinary world and initiating the journey" },
            { term: "Threshold Guardian", def: "Character or obstacle testing the hero before the journey begins" },
            { term: "Ordeal", def: "The central crisis or death/rebirth moment in the hero's journey" },
            { term: "Elixir", def: "The knowledge, treasure, or wisdom the hero brings back to benefit others" },
            { term: "Katabasis", def: "Descent to the underworld; common hero's journey element" },
            { term: "Nostos", def: "Greek concept of homecoming after journey; return of the hero" },
            { term: "Kleos", def: "Greek concept of glory or fame achieved through great deeds" },
            { term: "Wyrd", def: "Anglo-Saxon concept of fate or destiny" }
        ]
    },
    la2: {
        questions: [
            { q: "Which hero seeks immortality after his friend Enkidu's death?", answers: ["Odysseus", "Beowulf", "Gilgamesh ✓", "Rama"], correct: 2 },
            { q: "In the Hero's Journey, who guides and teaches the hero?", answers: ["Shadow", "Mentor ✓", "Trickster", "Herald"], correct: 1 },
            { q: "Odysseus' ten-year journey home after the Trojan War demonstrates which concept?", answers: ["Katabasis", "Nostos ✓", "Arete", "Wyrd"], correct: 1 },
            { q: "What does Beowulf battle in his final confrontation?", answers: ["Grendel", "Grendel's mother", "A dragon ✓", "The sea"], correct: 2 },
            { q: "Which hero is known primarily for cunning rather than strength?", answers: ["Gilgamesh", "Beowulf", "Odysseus ✓", "Achilles"], correct: 2 },
            { q: "The 'Ordeal' stage of the Hero's Journey represents:", answers: ["The call to adventure", "The hero's greatest test/death-rebirth ✓", "Returning home", "Refusal to go"], correct: 1 },
            { q: "What do most heroes bring back to their community?", answers: ["Treasure only", "Weapons", "Knowledge/wisdom ✓", "Nothing"], correct: 2 },
            { q: "Which culture's hero is Rama?", answers: ["Greek", "Norse", "Hindu ✓", "Celtic"], correct: 2 },
            { q: "Hubris in Greek tragedy typically leads to:", answers: ["Victory", "Wisdom", "The hero's downfall ✓", "Marriage"], correct: 2 },
            { q: "The 'Ordinary World' stage shows:", answers: ["The hero's life before adventure ✓", "The final battle", "The mentor's death", "Return home"], correct: 0 }
        ]
    },
    la3: {
        sequencing: {
            title: "Hero's Journey Stages - Correct Order",
            instructions: "Arrange the 12 stages of Campbell's Hero's Journey in the correct sequence from beginning to end.",
            stages: [
                { stage: "1. Ordinary World", order: 1 },
                { stage: "2. Call to Adventure", order: 2 },
                { stage: "3. Refusal of the Call", order: 3 },
                { stage: "4. Meeting the Mentor", order: 4 },
                { stage: "5. Crossing the Threshold", order: 5 },
                { stage: "6. Tests, Allies, and Enemies", order: 6 },
                { stage: "7. Approach to the Inmost Cave", order: 7 },
                { stage: "8. Ordeal (Death & Rebirth)", order: 8 },
                { stage: "9. Reward (Seizing the Sword)", order: 9 },
                { stage: "10. The Road Back", order: 10 },
                { stage: "11. Resurrection", order: 11 },
                { stage: "12. Return with the Elixir", order: 12 }
            ]
        }
    }
};

// Module 2 Discussion Board 1: Heroic Ideals
const module2Discussion = {
    title: "Discussion Board 1: Heroic Ideals & Portfolio Piece #2",
    prompt: `**Connection to Portfolio**: This discussion helps you develop ideas for your Piece #2 (Hero's Journey Analysis) that you'll create for your Module 7 portfolio.

**Discussion Prompt** (300-350 words):

Analyze how the Hero's Journey appears in ONE classical epic tale (Gilgamesh, The Odyssey, Beowulf, or Ramayana). Consider:

**Option 1: Gilgamesh - Mortality and Wisdom**
- How does Gilgamesh's journey transform him from a tyrant to a wise leader?
- Which Hero's Journey stages are most prominent in his quest for immortality?
- What "elixir" (wisdom) does he bring back to Uruk?
- How does his friendship with Enkidu catalyze his transformation?

**Option 2: Odysseus - Cunning vs. Strength**
- How does The Odyssey subvert expectations of heroism through cunning rather than strength?
- Analyze Odysseus's katabasis (descent to Hades) as the "Ordeal" stage
- How does the theme of nostos (homecoming) shape his journey?
- What wisdom does Odysseus gain through suffering?

**Option 3: Beowulf - Glory vs. Mortality**
- How does Beowulf's final dragon fight differ from his earlier victories?
- Analyze the role of wyrd (fate) in shaping Beowulf's heroic journey
- How does the epic balance Christian and pagan values?
- What does Beowulf's death reveal about heroism and legacy?

**Option 4: Ramayana - Dharma and Duty**
- How does Rama's adherence to dharma (duty) shape his heroic journey?
- Analyze the role of Sita and the challenges of the Agni Pariksha (test by fire)
- How do the helpers (Hanuman, Lakshmana) reflect different aspects of heroism?
- What does the Ramayana teach about righteous kingship?

**Initial Post Requirements** (300-350 words):
- Choose ONE epic and clearly state your choice
- Include specific examples from the text (scenes, character actions, quotes)
- Connect at least 3 Hero's Journey stages to your chosen epic
- Explain what makes your chosen figure heroic in their cultural context

**Peer Response Requirements** (100-150 words each, respond to TWO peers):
- Compare your epic's hero to a classmate's different epic hero
- Identify universal patterns AND cultural differences in heroism
- Build on their analysis with additional examples or counterpoints`,
    rubric: "Discussion Rubric (see Rubrics tab)",
    pointsBreakdown: {
        initialPost: 40,
        peerResponses: 40,
        historicalAccuracy: 20
    }
};

// Module 2 Quiz - Hero's Journey & Epic Tales
const module2Quiz = {
    questions: [
        {
            q: "Joseph Campbell's 'monomyth' or 'Hero's Journey' contains how many stages?",
            answers: ["8 stages", "10 stages", "12 stages ✓", "15 stages"],
            correct: 2
        },
        {
            q: "In the Hero's Journey, what is the 'Call to Adventure'?",
            answers: [
                "The hero's final battle",
                "The event that disrupts the ordinary world and begins the journey ✓",
                "The hero's return home",
                "The hero's death"
            ],
            correct: 1
        },
        {
            q: "Which Mesopotamian hero sought immortality after his friend Enkidu's death?",
            answers: ["Odysseus", "Beowulf", "Gilgamesh ✓", "Rama"],
            correct: 2
        },
        {
            q: "Greek 'arete' refers to:",
            answers: [
                "Excessive pride",
                "Excellence and virtue ✓",
                "Fate or destiny",
                "Homecoming"
            ],
            correct: 1
        },
        {
            q: "The 'Ordeal' stage of the Hero's Journey represents:",
            answers: [
                "The initial call to adventure",
                "The hero's greatest test or death/rebirth moment ✓",
                "Meeting the mentor",
                "Returning home"
            ],
            correct: 1
        },
        {
            q: "Odysseus is known primarily for which quality?",
            answers: [
                "Physical strength",
                "Cunning intelligence ✓",
                "Divine parentage",
                "Immortality"
            ],
            correct: 1
        },
        {
            q: "In Beowulf, the hero's final battle is against:",
            answers: ["Grendel", "Grendel's mother", "A dragon ✓", "An army"],
            correct: 2
        },
        {
            q: "What does 'hubris' typically lead to in Greek mythology?",
            answers: [
                "Victory and glory",
                "Divine favor",
                "The hero's downfall ✓",
                "Immortality"
            ],
            correct: 2
        },
        {
            q: "The 'elixir' the hero brings back represents:",
            answers: [
                "A magic potion",
                "Treasure and gold",
                "Knowledge or wisdom that benefits others ✓",
                "A weapon"
            ],
            correct: 2
        },
        {
            q: "Which hero is the protagonist of the Hindu epic Ramayana?",
            answers: ["Gilgamesh", "Odysseus", "Beowulf", "Rama ✓"],
            correct: 3
        }
    ]
};

// Module 2 Project Checkpoint 2
const module2Project = {
    title: "Portfolio Checkpoint 2: Hero's Journey Analysis",
    instructions: `**Checkpoint 2: Hero's Journey in Epic Tales or Modern Media** (100 points)

**CHOOSE ONE OPTION**:

**OPTION 1: Hero's Journey Wheel - Star Wars**
Create a visual 12-stage Hero's Journey wheel/diagram for Luke Skywalker (Original Trilogy)
- Map all 12 Campbell stages to specific scenes
- Include images from the films for each stage
- 100-150 word reflection on Luke as modern mythological hero

**OPTION 2: Hero's Journey Wheel - Classical Epic**
Create visual Hero's Journey wheel for Gilgamesh, Odysseus, Beowulf, or Rama
- Map all 12 stages to the ancient epic
- Include relevant artwork or imagery
- 100-150 word reflection on ancient vs. modern heroism

**OPTION 3: Comparative Hero Chart**
Create side-by-side comparison of TWO heroes (one ancient, one modern)
- Show how both follow the Hero's Journey pattern
- Visual chart or infographic format
- 150-200 word analysis of similarities and differences

**OPTION 4: Personal Hero's Journey Map**
Map a challenge YOU faced using Campbell's Hero's Journey
- Identify your 12 stages in visual format
- Explain your mentors, allies, ordeal, and elixir
- 200-250 word reflection on how myth helps understand personal growth

**Tools**: PowerPoint, Canva, hand-drawn (photographed), poster, digital art`,
    rubric: "Project Checkpoint Rubric (see Rubrics tab)"
};
