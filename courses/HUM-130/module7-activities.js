// Module 7 Complete Activity Data - Mythology in Popular Culture
const module7Activities = {
    la1: {
        questions: [
            { term: "Brand Mythology", def: "Corporate storytelling using mythological archetypes for identity" },
            { term: "Transmedia", def: "Storytelling across multiple platforms (film, games, web, TV)" },
            { term: "Digital Folklore", def: "Modern myths spread through internet and social media" },
            { term: "Creepypasta", def: "Internet horror stories functioning as urban legends" },
            { term: "Meme", def: "Cultural unit transmitted virally; modern oral tradition" },
            { term: "Urban Legend", def: "Contemporary folklore presented as true story" },
            { term: "Viral Narrative", def: "Story spreading rapidly through digital networks" },
            { term: "Archetype Marketing", def: "Using mythic characters to sell products (hero, rebel, sage)" },
            { term: "Slender Man", def: "Internet-created monster becoming modern folklore entity" },
            { term: "SCP Foundation", def: "Collaborative fiction creating modern mythology database" },
            { term: "World-Building", def: "Creating detailed fictional universes (games, franchises)" },
            { term: "Franchise Mythology", def: "Extended universe continuity (MCU, Star Wars)" },
            { term: "Fan Canon", def: "Community-accepted interpretations and additions to myths" },
            { term: "Easter Egg", def: "Hidden mythological reference in media" },
            { term: "Retcon", def: "Retroactive continuity change in established mythology" }
        ]
    },
    la2: {
        questions: [
            { q: "Nike's brand name references:", answers: ["A river", "Greek goddess of victory ✓", "A mountain", "A hero"], correct: 1 },
            { q: "Which video game series heavily uses Norse mythology?", answers: ["Mario", "God of War ✓", "Pac-Man", "Tetris"], correct: 1 },
            { q: "Creepypasta functions as:", answers: ["Cooking instructions", "Modern urban legends/digital folklore ✓", "Pasta recipe", "Italian tradition"], correct: 1 },
            { q: "The 'Hero's Journey' appears in:", answers: ["Star Wars only", "Harry Potter only", "Most video game narratives ✓", "None of these"], correct: 2 },
            { q: "Slender Man demonstrates:", answers: ["Traditional folklore", "Internet creating new mythology ✓", "Ancient legend", "Historical fact"], correct: 1 },
            { q: "Studio Ghibli films often feature:", answers: ["Historical battles", "Japanese folklore and Shinto mythology ✓", "Western myths only", "No mythology"], correct: 1 },
            { q: "The Marvel Cinematic Universe functions as:", answers: ["Documentary", "Modern shared mythology/franchise ✓", "Historical record", "Educational program"], correct: 1 },
            { q: "Brands use mythological archetypes to:", answers: ["Confuse customers", "Create identity and emotional connection ✓", "Lower prices", "Avoid marketing"], correct: 1 },
            { q: "Internet memes parallel which traditional form?", answers: ["Written novels", "Oral tradition and folk sayings ✓", "Mathematical proofs", "Legal documents"], correct: 1 },
            { q: "The Legend of Zelda draws from:", answers: ["Celtic, Arthurian, and Japanese mythology ✓", "Only Roman myths", "Historical events only", "No mythological sources"], correct: 0 }
        ]
    },
    la3: {
        categorization: {
            title: "Pop Culture Mythology Types",
            instructions: "Categorize each example by the type of modern mythology it represents.",
            categories: ["Video Game Mythology", "Brand Mythology", "Internet Folklore", "Anime/Studio Ghibli", "Streaming Series Mythology"],
            items: [
                { item: "God of War series using Norse and Greek pantheons", category: "Video Game Mythology" },
                { item: "Nike as Greek goddess of victory", category: "Brand Mythology" },
                { item: "Slender Man urban legend", category: "Internet Folklore" },
                { item: "Princess Mononoke featuring forest spirits and gods", category: "Anime/Studio Ghibli" },
                { item: "The Witcher adapting Slavic mythology", category: "Streaming Series Mythology" },
                { item: "Apple's creation myth (garage startup, visionary founder)", category: "Brand Mythology" },
                { item: "SCP Foundation collaborative horror mythology", category: "Internet Folklore" },
                { item: "Spirited Away with bathhouse for spirits", category: "Anime/Studio Ghibli" },
                { item: "American Gods (series) bringing old gods to modern America", category: "Streaming Series Mythology" },
                { item: "Zelda's Triforce and recurring hero's journey", category: "Video Game Mythology" },
                { item: "Jeff Bezos as modern Midas (everything turns to Amazon)", category: "Brand Mythology" },
                { item: "Five Nights at Freddy's lore and fan theories", category: "Internet Folklore" }
            ]
        }
    }
};

// Module 7 Quiz - Pop Culture Mythology
const module7Quiz = {
    questions: [
        {
            q: "The Nike brand name references:",
            answers: [
                "A river in Greece",
                "Greek goddess of victory ✓",
                "A mountain",
                "A Greek hero"
            ],
            correct: 1
        },
        {
            q: "Which video game series heavily incorporates Norse and Greek mythology?",
            answers: ["Mario", "God of War ✓", "Pac-Man", "Tetris"],
            correct: 1
        },
        {
            q: "'Creepypasta' functions as:",
            answers: [
                "Italian cooking tradition",
                "Modern urban legends spread digitally ✓",
                "Pasta brand",
                "Ancient folklore only"
            ],
            correct: 1
        },
        {
            q: "The 'Hero's Journey' structure appears in:",
            answers: [
                "Star Wars only",
                "Harry Potter only",
                "Most major video game narratives ✓",
                "None of these"
            ],
            correct: 2
        },
        {
            q: "Slender Man demonstrates:",
            answers: [
                "Traditional pre-internet folklore",
                "Internet creating new mythology in real-time ✓",
                "Ancient medieval legend",
                "Historical documented fact"
            ],
            correct: 1
        },
        {
            q: "Studio Ghibli films (Spirited Away, Princess Mononoke) often feature:",
            answers: [
                "Historical battles only",
                "Japanese Shinto and folklore mythology ✓",
                "Western myths exclusively",
                "No mythological elements"
            ],
            correct: 1
        },
        {
            q: "The Marvel Cinematic Universe functions as:",
            answers: [
                "Documentary series",
                "Modern shared franchise mythology ✓",
                "Historical record",
                "Educational programming only"
            ],
            correct: 1
        },
        {
            q: "Brands use mythological archetypes in advertising to:",
            answers: [
                "Confuse customers",
                "Create emotional connection and identity ✓",
                "Lower prices",
                "Avoid marketing costs"
            ],
            correct: 1
        },
        {
            q: "Internet memes parallel which traditional cultural form?",
            answers: [
                "Written academic texts",
                "Oral tradition and folk sayings ✓",
                "Mathematical proofs",
                "Legal contracts"
            ],
            correct: 1
        },
        {
            q: "The Legend of Zelda video game series draws from:",
            answers: [
                "Celtic, Arthurian, and Japanese mythology ✓",
                "Only Roman myths",
                "Historical events exclusively",
                "No mythological sources"
            ],
            correct: 0
        }
    ]
};

// Module 7 - Final Portfolio Project
const module7FinalPortfolio = {
    title: "Final Portfolio: Mythology from Ancient Times to Modern Pop Culture",
    instructions: `**Final Portfolio Project** (200 points)

**Overview**: Compile, revise, and synthesize your three checkpoint pieces plus a comprehensive reflective essay analyzing mythological patterns from ancient times through modern pop culture.

**Components**:

**Part 1: Revised Checkpoint Pieces** (90 points total)
- Checkpoint 1 (Creation Myths) - REVISED based on instructor feedback (30 pts)
- Checkpoint 2 (Star Wars Hero's Journey) - REVISED (30 pts)
- Checkpoint 3 (Harry Potter Archetypes OR Superhero Analysis) - REVISED (30 pts)

**Part 2: Comprehensive Synthesis Essay** (80 points)
Write a 1,500-2,000 word essay answering:

**"How do mythological patterns persist, evolve, and function from ancient times through modern pop culture?"**

Your essay should:
- Identify 3-5 persistent mythological patterns across your checkpoint pieces (creation, heroism, archetypes, sacrifice, transformation, etc.)
- Analyze HOW and WHY these patterns change across different time periods and cultures
- Explain the psychological, social, and cultural FUNCTIONS myths serve (ancient and modern)
- Use specific examples from ancient myths AND modern pop culture analyzed in your checkpoints
- Demonstrate understanding of Joseph Campbell, Carl Jung, AND course material on specific mythologies

**Structure**:
- Introduction with clear thesis about mythological persistence and evolution
- 3-5 body paragraphs analyzing different patterns
- Conclusion reflecting on why humans continue creating/consuming myths

**Part 3: Creative Culmination** (30 points)
Create ONE of the following:

**Option A: Visual Mythology Map**
- Infographic showing how one mythological pattern (Hero's Journey, creation, sacrifice, etc.) appears across 6+ examples from ancient to modern

**Option B: Original Modern Myth**
- Write a short story (1,000-1,500 words) consciously using mythological patterns studied in class
- Include 1-page analysis explaining which patterns you used and why

**Option C: Multimedia Presentation**
- 8-10 slide presentation tracing one mythological pattern from ancient to modern
- Include images, quotes, and analysis

**Submission Requirements**:
- All pieces in ONE compiled PDF or Google Doc portfolio
- Table of contents
- Revised checkpoint pieces showing improvement from original submissions
- Synthesis essay (1,500-2,000 words)
- Creative culmination piece
- Full bibliography of ALL sources used throughout the semester (MLA or APA)

**Due Date**: Finals Week (See Canvas for specific deadline)`,
    rubric: "Final Portfolio Rubric (see Rubrics tab)",
    exampleTopics: [
        "How sacrifice mythology evolves from Odin's self-sacrifice to Tony Stark's snap",
        "The persistence of the mentor's death from Enkidu to Obi-Wan to Dumbledore",
        "Creation from chaos: From Tiamat to Thanos' snap and reconstruction",
        "Trickster figures from Loki (Norse) to Loki (MCU) to Joker's chaotic function",
        "Female archetypes evolving from passive princesses to Rey and Wonder Woman",
        "Chosen One mythology from Moses to Neo to Harry Potter",
        "The underworld journey: From Gilgamesh's quest to Orpheus to Inception"
    ]
};
