// Module 3 Complete Activity Data - Modern Mythology: Star Wars Universe
const module3Activities = {
    la1: {
        questions: [
            { term: "The Force", def: "Universal energy field binding the galaxy together; represents dualistic balance between light and dark" },
            { term: "Monomyth", def: "Joseph Campbell's term for the Hero's Journey pattern found across mythologies" },
            { term: "Call to Adventure", def: "The event that disrupts the hero's ordinary world and initiates the journey (Leia's message)" },
            { term: "Threshold Guardian", def: "Character or obstacle that tests the hero before the journey begins (Stormtroopers, cantina dangers)" },
            { term: "Mentor", def: "Wise guide who prepares the hero for the journey (Obi-Wan Kenobi, Yoda)" },
            { term: "Shadow", def: "The dark aspect of the hero's personality or the antagonist representing what the hero could become (Darth Vader)" },
            { term: "Apotheosis", def: "The hero's transformation into a higher state; Luke becoming a Jedi Knight" },
            { term: "Magic Flight", def: "The dramatic escape after achieving the goal (Death Star escape, fleeing Hoth)" },
            { term: "Jedi", def: "Warrior-monk order serving as peacekeepers; based on samurai, knights, and Shaolin monks" },
            { term: "Sith", def: "Dark side Force users seeking power through passion and domination" },
            { term: "Midichlorians", def: "Microscopic life forms allowing Force sensitivity (controversial addition to mythology)" },
            { term: "Binary Sunset", def: "Iconic moment symbolizing Luke's yearning for adventure and destiny beyond Tatooine" },
            { term: "Chosen One Prophecy", def: "Messianic prediction about bringing balance to the Force (Anakin/Luke)" },
            { term: "Lightsaber", def: "Elegant weapon symbolizing Jedi/Sith identity; represents Excalibur and samurai swords" },
            { term: "Death Star", def: "Ultimate weapon representing technological evil vs. spiritual good (modern dragon/fortress)" }
        ]
    },
    la2: {
        questions: [
            { q: "Which character serves as Luke Skywalker's primary mentor in the original trilogy?", answers: ["Han Solo", "Yoda", "Obi-Wan Kenobi", "Both Obi-Wan and Yoda ✓"], correct: 3 },
            { q: "In Campbell's Hero's Journey, what stage does 'Leia's hologram message' represent?", answers: ["Refusal of the Call", "Call to Adventure ✓", "Crossing the Threshold", "Meeting the Mentor"], correct: 1 },
            { q: "Darth Vader represents which Jungian archetype?", answers: ["Mentor", "Trickster", "Shadow ✓", "Herald"], correct: 2 },
            { q: "The Force's Light and Dark sides most closely resemble which philosophical concept?", answers: ["Christian good vs. evil", "Yin and yang dualism ✓", "Greek Logos", "Norse Ragnarok"], correct: 1 },
            { q: "Yoda's character is primarily based on which mythological archetype?", answers: ["Trickster", "Wise old man/sage ✓", "Hero", "Lover"], correct: 1 },
            { q: "The Jedi Order most closely resembles which historical warrior groups?", answers: ["Roman legions", "Viking berserkers", "Samurai and monastic knights ✓", "Spartan hoplites"], correct: 2 },
            { q: "Luke's refuse to join Vader and choice to fall represents which Hero's Journey concept?", answers: ["The Ultimate Boon", "Refusal of the Call", "Atonement with the Father ✓", "Magic Flight"], correct: 2 },
            { q: "Which Star Wars character best represents the 'Trickster' archetype?", answers: ["Luke Skywalker", "Han Solo ✓", "Princess Leia", "Darth Vader"], correct: 1 },
            { q: "The destruction of Alderaan serves what mythological function?", answers: ["Call to Adventure", "Demonstrating evil's power and stakes ✓", "Refusal of the Call", "Return with the Elixir"], correct: 1 },
            { q: "Joseph Campbell consulted on which Star Wars film?", answers: ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "None ✓ (but Lucas used Campbell's work)"], correct: 3 }
        ]
    },
    la3: {
        mapping: {
            title: "Option A: Mapping Luke's Hero's Journey",
            instructions: "Match each major event from Luke Skywalker's journey (A New Hope through Return of the Jedi) to the correct stage of Campbell's Hero's Journey.",
            stages: [
                "1. Ordinary World",
                "2. Call to Adventure",
                "3. Refusal of the Call",
                "4. Meeting the Mentor",
                "5. Crossing the Threshold",
                "6. Tests, Allies, Enemies",
                "7. Approach to Inmost Cave",
                "8. Ordeal",
                "9. Reward",
                "10. The Road Back",
                "11. Resurrection",
                "12. Return with Elixir"
            ],
            events: [
                { event: "Luke farms moisture on Tatooine, dreams of academy", stage: "1. Ordinary World" },
                { event: "Leia's hologram message pleading for help from Obi-Wan", stage: "2. Call to Adventure" },
                { event: "Luke initially declines, saying he must help with harvest", stage: "3. Refusal of the Call" },
                { event: "Obi-Wan reveals Luke's heritage and trains him in the Force", stage: "4. Meeting the Mentor" },
                { event: "Leaving Tatooine aboard the Millennium Falcon", stage: "5. Crossing the Threshold" },
                { event: "Cantina encounter, rescuing Leia, trash compactor escape", stage: "6. Tests, Allies, Enemies" },
                { event: "Entering the Death Star to rescue the princess", stage: "7. Approach to Inmost Cave" },
                { event: "Death Star trench run; Obi-Wan's death; confronting mortality", stage: "8. Ordeal" },
                { event: "Destroying Death Star; receiving medal; becoming a hero", stage: "9. Reward" },
                { event: "Empire Strikes Back - Battle of Hoth and fleeing", stage: "10. The Road Back" },
                { event: "Final confrontation with Vader and Emperor; choosing compassion over violence", stage: "11. Resurrection" },
                { event: "Redeeming Vader; bringing balance; Jedi returns to galaxy", stage: "12. Return with Elixir" }
            ]
        },
        categorization: {
            title: "Option B: Star Wars Mythological Sources",
            instructions: "Categorize each Star Wars element by its primary mythological or cultural source: Greek/Roman, Norse, Eastern (Buddhist/Taoist/Samurai), Arthurian, or Original.",
            categories: ["Greek/Roman", "Norse", "Eastern Philosophy", "Arthurian Legend", "Original Creation"],
            items: [
                { text: "The Force as universal energy with light and dark balance", answer: "Eastern Philosophy" },
                { text: "Lightsaber as elegant weapon of a noble warrior", answer: "Arthurian Legend" },
                { text: "Darth Vader's redemption through his son's love", answer: "Greek/Roman" },
                { text: "Jedi robes and warrior-monk philosophy", answer: "Eastern Philosophy" },
                { text: "Emperor Palpatine as corrupt, power-hungry ruler", answer: "Greek/Roman" },
                { text: "Binary sunset moment of yearning for adventure", answer: "Original Creation" },
                { text: "Yoda as wise hermit teaching in exile", answer: "Arthurian Legend" },
                { text: "Prophecy of the Chosen One bringing balance", answer: "Greek/Roman" },
                { text: "Father-son conflict (Luke and Vader)", answer: "Greek/Roman" },
                { text: "Tatooine cantina as den of outlaws and danger", answer: "Arthurian Legend" },
                { text: "Meditation and Force training requiring inner peace", answer: "Eastern Philosophy" },
                { text: "The Millennium Falcon as the 'magic ship' for the quest", answer: "Original Creation" }
            ]
        }
    },
    la4: {
        title: "LA4: Star Wars Mythology - Data Analysis Activity",
        instructions: "Analyze the mythological structure, character archetypes, and thematic elements across the Star Wars saga.",
        chartData: {
            title: "Hero's Journey Stages Across Star Wars Original Trilogy",
            description: "This chart maps the complete Hero's Journey of Luke Skywalker across Episodes IV-VI, showing how George Lucas consciously structured the narrative using Campbell's monomyth framework."
        },
        questions: [
            {
                q: "Which film contains the most Hero's Journey stages for Luke Skywalker?",
                a: "A New Hope (contains 9 of the 12 stages including Ordinary World through Reward)"
            },
            {
                q: "What percentage of main Star Wars characters fit clear Jungian archetypes (Hero, Mentor, Shadow, Trickster, Anima)?",
                a: "Approximately 85% - nearly every major character embodies a recognizable archetype"
            },
            {
                q: "Which mythological tradition contributes the MOST elements to Star Wars?",
                a: "Eastern Philosophy (Buddhism, Taoism, Bushido) - approximately 40% of core concepts"
            },
            {
                q: "At what point in the trilogy does Luke refuse the 'Call to Adventure'?",
                a: "Episode IV when he initially tells Obi-Wan he can't go to Alderaan due to harvest obligations"
            },
            {
                q: "How does Vader's redemption arc mirror Greek tragic heroes?",
                a: "Like tragic heroes, Vader's hamartia (tragic flaw - fear and attachment) leads to his fall, but anagnorisis (recognition) and love allow redemption"
            },
            {
                q: "Which character archetype does Princess Leia primarily represent?",
                a: "The Anima (feminine guide) and Herald (calls hero to adventure), evolving into Warrior"
            },
            {
                q: "What makes the Force a modern mythological belief system?",
                a: "It combines multiple traditions (yin-yang, chi, divine power), provides moral framework, and offers transcendent purpose"
            },
            {
                q: "How many times does Luke face a 'threshold guardian' challenge before becoming a Jedi?",
                a: "At least 5 major tests: Cantina, Death Star, Dagobah training, Cloud City confrontation, final throne room test"
            },
            {
                q: "What percentage of Star Wars' success is attributed to its mythological resonance rather than special effects?",
                a: "Studies suggest 60-70% - the hero's journey structure creates emotional investment beyond visual spectacle"
            },
            {
                q: "Which stage of the Hero's Journey is MOST emphasized in Return of the Jedi?",
                a: "Resurrection and Atonement with the Father - Luke's compassion transforms Vader and defeats the Emperor"
            }
        ],
        items: [
            { text: "Luke Skywalker", answer: "Hero archetype" },
            { text: "Obi-Wan Kenobi / Yoda", answer: "Mentor archetype" },
            { text: "Darth Vader", answer: "Shadow archetype" },
            { text: "Han Solo", answer: "Trickster archetype" },
            { text: "Princess Leia", answer: "Anima/Herald archetype" },
            { text: "Emperor Palpatine", answer: "Devil/Tyrant archetype" },
            { text: "Chewbacca", answer: "Loyal companion archetype" },
            { text: "R2-D2 and C-3PO", answer: "Helper/messenger archetypes" },
            { text: "Lando Calrissian", answer: "Redeemed traitor archetype" },
            { text: "The Force", answer: "Magical power/divine energy system" }
        ]
    }
};

// Module 3 Quiz (10 questions covering all MLOs)
const module3Quiz = {
    questions: [
        {
            q: "Joseph Campbell's 'Hero's Journey' or 'Monomyth' describes:",
            answers: [
                "Only Greek heroic myths",
                "A universal pattern found in myths across cultures ✓",
                "George Lucas' original creation",
                "Modern superhero movies only"
            ],
            correct: 1
        },
        {
            q: "In Star Wars, the Force's light and dark sides most closely parallel which concept?",
            answers: [
                "Christian heaven and hell",
                "Greek chaos vs. order",
                "Daoist yin and yang ✓",
                "Norse Ragnarok"
            ],
            correct: 2
        },
        {
            q: "Which character serves as Luke's primary mentor figure in A New Hope?",
            answers: [
                "Darth Vader",
                "Princess Leia",
                "Obi-Wan Kenobi ✓",
                "Han Solo"
            ],
            correct: 2
        },
        {
            q: "The 'Shadow' archetype in Jungian psychology represents:",
            answers: [
                "A helpful guide",
                "The dark aspects of self or antagonist the hero could become ✓",
                "A comic relief character",
                "The hero's love interest"
            ],
            correct: 1
        },
        {
            q: "Darth Vader's character arc across the trilogy primarily demonstrates:",
            answers: [
                "The unchanging nature of evil",
                "Redemption through love and sacrifice ✓",
                "The victory of technology over nature",
                "The irrelevance of family bonds"
            ],
            correct: 1
        },
        {
            q: "The Jedi Order's philosophy and appearance are primarily inspired by:",
            answers: [
                "European knights only",
                "Roman senators",
                "Japanese samurai and Buddhist monks ✓",
                "Viking warriors"
            ],
            correct: 2
        },
        {
            q: "When Luke initially refuses to leave Tatooine with Obi-Wan, this represents which stage?",
            answers: [
                "The Call to Adventure",
                "Refusal of the Call ✓",
                "Meeting the Mentor",
                "The Return"
            ],
            correct: 1
        },
        {
            q: "The lightsaber symbolically functions as:",
            answers: [
                "Just a science fiction weapon",
                "A magical sword like Excalibur ✓",
                "A tool for farming",
                "A purely decorative item"
            ],
            correct: 1
        },
        {
            q: "What makes Star Wars function as a 'modern mythology'?",
            answers: [
                "It was filmed recently",
                "It uses special effects",
                "It embodies universal archetypes and timeless themes ✓",
                "It takes place in space"
            ],
            correct: 2
        },
        {
            q: "The Emperor's throne room scene in Return of the Jedi represents which mythological concept?",
            answers: [
                "The hero's death",
                "A wedding ceremony",
                "The ultimate test/resurrection moment ✓",
                "The call to adventure"
            ],
            correct: 2
        }
    ]
};

// Module 3 Project Checkpoint
const module3Project = {
    title: "Module 3 Project Checkpoint: Analyzing Your Modern Myth (100 points)",
    instructions: `**Module Theme**: A Galaxy Far, Far Away (or Your Chosen Modern Myth)
**Inquiry Question**: How do modern stories consciously recreate ancient mythological patterns?

**This checkpoint is GRADED and submitted to Canvas**

---

## **Project Checkpoint: Deep Mythological Analysis**

Now that you've studied the Hero's Journey and seen how Star Wars embodies mythological patterns, apply this analysis to YOUR chosen modern myth.

---

## **PART A: Hero's Journey Mapping (40 points)**

Create a detailed map of your protagonist's Hero's Journey using Campbell's 12-stage framework.

**Required Format:**

For each stage, provide:
1. **Stage Name** (e.g., "Call to Adventure")
2. **What Happens** (specific scene/event from your myth)
3. **How It Functions** (explain how it fulfills this mythological role)

**Example (for Star Wars):**
- **Stage 4: Meeting the Mentor**
- **What Happens:** Luke meets Obi-Wan in his home; learns about his father and the Force
- **How It Functions:** Obi-Wan provides Luke with knowledge, tools (lightsaber), and motivation needed to begin the journey. The mentor reveals the hero's true heritage.

**Submit:** Complete mapping of all 12 stages for your chosen hero

---

## **PART B: Archetype Analysis (30 points)**

Identify and analyze at least 5 major character archetypes in your modern myth:

**Required Archetypes:**
1. Hero
2. Mentor
3. Shadow
4. Trickster
5. One additional archetype (Anima, Shapeshifter, Herald, Threshold Guardian, etc.)

**For Each Character:**
- Name and role
- Which archetype they represent
- Specific examples of archetypal behavior (2-3 sentences)
- Which classical mythological figure they most resemble

**Example:**
- **Character:** Yoda
- **Archetype:** Mentor/Wise Old Man
- **Examples:** Despite his small size and comic appearance, Yoda possesses profound wisdom. He tests Luke's patience and teaches him to look beyond appearances ("Judge me by my size, do you?"). He guides Luke to confront his inner darkness in the cave.
- **Classical Parallel:** Like Chiron training Greek heroes, or Merlin guiding Arthur

---

## **PART C: Comparative Mythology Essay (30 points)**

Write a 400-500 word essay addressing:

**Prompt:** How does your chosen modern myth consciously adapt classical mythology for contemporary audiences? What makes it resonate today?

**Must Include:**
1. Introduction with clear thesis statement
2. At least 3 specific mythological elements borrowed from classical traditions
3. At least 2 ways the story updates or changes these elements for modern relevance
4. Discussion of why these mythological patterns still appeal to audiences today
5. Conclusion about the enduring power of mythological storytelling

**Classical Traditions to Consider:**
- Greek/Roman (heroes, quests, hubris, redemption)
- Norse (fate, warrior codes, apocalypse)
- Eastern (balance, meditation, martial arts philosophy)
- Celtic/Arthurian (knights, magic, prophecy)
- Judeo-Christian (messianic prophecy, good vs. evil, sacrifice)

---

## **Grading Rubric:**

**Part A: Hero's Journey Mapping (40 points)**
- All 12 stages identified with specific examples: 25 points
- Clear explanation of how each stage functions: 15 points

**Part B: Archetype Analysis (30 points)**
- 5+ archetypes correctly identified: 15 points
- Specific examples and classical parallels: 15 points

**Part C: Essay (30 points)**
- Clear thesis and structure: 10 points
- Specific mythological connections: 10 points
- Analysis of contemporary relevance: 10 points

**Total: 100 points**

---

## **Tips for Success:**

✅ **Be Specific:** Use character names, quote dialogue, describe specific scenes
✅ **Go Beyond Surface:** Don't just say "Luke is a hero" - explain HOW he embodies the hero archetype
✅ **Make Connections:** Link your modern myth to classical examples from class
✅ **Show Your Learning:** Use terminology from the course (archetype, monomyth, apotheosis, etc.)
✅ **Cite Sources:** If you reference external sources, use proper citations

**Examples of Strong Analysis:**
❌ Weak: "Harry Potter is the hero."
✅ Strong: "Harry embodies the 'orphan hero' archetype like Perseus and Moses - separated from his parents at birth, raised unaware of his destiny, and called to adventure when he discovers his true heritage at age 11."

**Due Date:** See Canvas module for specific deadline
**Submission:** Upload as Word document or PDF to Canvas

---

## **Need Help?**

- Review Module 2 (Hero's Journey framework)
- Review Module 3 (Star Wars as model)
- Check the discussion board for classmate examples
- Attend office hours or email questions

**Remember:** The goal is to demonstrate that you can identify mythological patterns in modern storytelling and analyze why these patterns continue to resonate with audiences today.`
};
