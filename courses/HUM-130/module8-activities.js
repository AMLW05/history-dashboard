// Module 8 Complete Activity Data - Creating Your Own Modern Myth
const module8Activities = {
    la1: {
        questions: [
            { term: "World-Building", def: "Creating consistent, detailed fictional universe with rules and history" },
            { term: "Cosmology", def: "The structure and origin of your fictional universe" },
            { term: "Magic System", def: "Rules governing supernatural powers in your world" },
            { term: "Character Arc", def: "The transformation journey a character undergoes" },
            { term: "Thematic Unity", def: "Central ideas and messages cohesively woven through narrative" },
            { term: "Sanderson's Laws", def: "Brandon Sanderson's principles for magic system design" },
            { term: "Show Don't Tell", def: "Revealing story through action and detail vs. exposition" },
            { term: "Checkov's Gun", def: "Every element introduced should serve a purpose" },
            { term: "Hard Magic", def: "Magic system with clear, consistent rules" },
            { term: "Soft Magic", def: "Magic system that's mysterious, undefined, wondrous" },
            { term: "Protagonist", def: "Main character driving the narrative" },
            { term: "Antagonist", def: "Character opposing protagonist; not always villain" },
            { term: "MacGuffin", def: "Object driving plot (like One Ring, Infinity Stones)" },
            { term: "Foreshadowing", def: "Hints about future events in the narrative" },
            { term: "Eucatastrophe", def: "Tolkien's term for sudden joyous turn/happy ending" }
        ]
    },
    la2: {
        questions: [
            { q: "World-building primarily involves:", answers: ["Drawing maps only", "Creating consistent fictional reality ✓", "Writing dialogue", "Designing covers"], correct: 1 },
            { q: "A 'hard magic system' means:", answers: ["Difficult to use", "Has clear, consistent rules ✓", "Made of hard materials", "Requires strength"], correct: 1 },
            { q: "The Hero's Journey is useful for:", answers: ["Shopping lists", "Structuring character transformation ✓", "Cooking recipes", "Building houses"], correct: 1 },
            { q: "Thematic unity requires:", answers: ["Using one color", "Central ideas woven throughout ✓", "One setting only", "One character only"], correct: 1 },
            { q: "Archetypes are useful because they:", answers: ["Are clichés", "Provide recognizable patterns audiences understand ✓", "Limit creativity", "Are outdated"], correct: 1 },
            { q: "A protagonist must:", answers: ["Be likeable", "Drive the narrative forward ✓", "Win every fight", "Be human"], correct: 1 },
            { q: "Sanderson's First Law states:", answers: ["Magic must be scientific", "Writer's ability to solve problems with magic proportional to reader's understanding of it ✓", "Magic should be soft", "Avoid magic entirely"], correct: 1 },
            { q: "Character arcs show:", answers: ["Character's physical journey", "Character's transformation and growth ✓", "Character's clothing", "Character's age"], correct: 1 },
            { q: "Foreshadowing serves to:", answers: ["Spoil the story", "Build anticipation and satisfaction ✓", "Confuse readers", "Waste space"], correct: 1 },
            { q: "Cultural resonance means stories:", answers: ["Are loud", "Connect to universal human experiences ✓", "Use modern slang", "Avoid emotion"], correct: 1 }
        ]
    },
    la3: {
        matching: {
            title: "Story Elements & Their Functions",
            instructions: "Match each narrative element to its mythological function or purpose.",
            items: [
                { element: "Mentor character", function: "Guide hero, provide wisdom and tools" },
                { element: "MacGuffin object", function: "Drive plot, represent desire/goal" },
                { element: "Threshold moment", function: "Point of no return, commitment to journey" },
                { element: "Trickster character", function: "Challenge norms, create through chaos" },
                { element: "Shadow antagonist", function: "Represent hero's potential dark path" },
                { element: "Magic system", function: "Establish rules and wonder of world" },
                { element: "Origin story", function: "Explain how hero gained powers/purpose" },
                { element: "Prophecy", function: "Create sense of destiny and inevitability" },
                { element: "Final confrontation", function: "Test hero's transformation and values" },
                { element: "Sacrifice moment", function: "Demonstrate character growth and values" },
                { element: "Found family", function: "Create bonds beyond blood; chosen connections" },
                { element: "World-ending threat", function: "Raise stakes, justify hero's journey" }
            ]
        }
    }
};

// Module 8 Discussion Board 4
const module8Discussion = {
    title: "Discussion Board 4: Creating Modern Myths - Final Reflection",
    prompt: `**Discussion Prompt** (300-350 words):

Reflect on what you've learned about mythology and its role in human culture. Choose ONE of the following:

**Option 1: Why Do We Still Need Myths?**
- Argue for the continued importance of mythology in modern life
- What psychological, social, or cultural needs do myths fulfill?
- How do modern myths (films, TV, games, comics) serve the same functions as ancient myths?
- What would we lose if we abandoned mythological thinking?

**Option 2: How Has Your Understanding of Myth Changed?**
- How did you view mythology before this course vs. now?
- What was the most surprising connection you discovered between ancient and modern myths?
- How has studying mythology changed how you consume modern pop culture?
- What myths or patterns will you continue noticing in your daily life?

**Option 3: The Future of Mythology**
- What new mythological patterns are emerging in 21st-century storytelling?
- How might AI, climate change, or space exploration create new mythological frameworks?
- Will mythological patterns persist, or are we creating genuinely new narrative forms?
- What makes a modern story achieve "mythological" status in culture?

**Option 4: Mythology and Personal Identity**
- How do mythological archetypes help us understand ourselves?
- Which mythological pattern or archetype resonates most with your personal journey?
- How can mythological frameworks help navigate modern challenges (career, relationships, purpose)?
- What "hero's journey" are you currently experiencing in your own life?

**Initial Post Requirements**:
- Reflect thoughtfully on the semester's learning
- Use specific examples from course material (ancient myths AND modern pop culture)
- Demonstrate synthesis of multiple course concepts (Campbell, Jung, specific mythologies)
- Show genuine engagement with why mythology matters

**Peer Response Requirements**:
- Build on classmates' reflections with your own insights
- Share additional examples or perspectives
- Create a supportive learning community in this final discussion`,
    rubric: "Discussion Rubric (see Rubrics tab)",
    pointsBreakdown: {
        initialPost: 40,
        peerResponses: 40,
        synthesis: 20
    }
};

// Module 8 Quiz - Creating Your Own Myth
const module8Quiz = {
    questions: [
        {
            q: "Effective world-building primarily requires:",
            answers: [
                "Drawing detailed maps only",
                "Creating consistent internal rules and logic ✓",
                "Writing lots of dialogue",
                "Designing book covers"
            ],
            correct: 1
        },
        {
            q: "A 'hard magic system' (Brandon Sanderson) means:",
            answers: [
                "Magic that's difficult to use",
                "Magic with clear, consistent, understandable rules ✓",
                "Magic made of hard materials",
                "Magic requiring physical strength"
            ],
            correct: 1
        },
        {
            q: "The Hero's Journey structure is useful for writers because it:",
            answers: [
                "Guarantees bestseller status",
                "Provides a proven framework for character transformation ✓",
                "Eliminates need for creativity",
                "Only works for fantasy"
            ],
            correct: 1
        },
        {
            q: "Thematic unity in storytelling requires:",
            answers: [
                "Using only one color",
                "Central ideas woven consistently throughout ✓",
                "One setting only",
                "One character only"
            ],
            correct: 1
        },
        {
            q: "Archetypes are useful in storytelling because they:",
            answers: [
                "Are tired clichés to avoid",
                "Provide recognizable patterns audiences instinctively understand ✓",
                "Limit creativity completely",
                "Are outdated"
            ],
            correct: 1
        },
        {
            q: "A protagonist must:",
            answers: [
                "Always be likeable",
                "Drive the narrative forward through choices ✓",
                "Win every fight",
                "Be human (not alien/fantasy creature)"
            ],
            correct: 1
        },
        {
            q: "Sanderson's First Law of Magic states:",
            answers: [
                "All magic must be scientific",
                "Writer's ability to solve problems with magic is proportional to reader's understanding of it ✓",
                "Magic should always be mysterious",
                "Avoid magic entirely"
            ],
            correct: 1
        },
        {
            q: "Character arcs show:",
            answers: [
                "Character's physical journey only",
                "Character's internal transformation and growth ✓",
                "Character's clothing changes",
                "Character's age progression"
            ],
            correct: 1
        },
        {
            q: "Foreshadowing serves to:",
            answers: [
                "Spoil the ending",
                "Build anticipation and create satisfying payoffs ✓",
                "Confuse readers",
                "Fill space"
            ],
            correct: 1
        },
        {
            q: "Cultural resonance in mythology means stories:",
            answers: [
                "Are very loud",
                "Connect to universal human experiences and values ✓",
                "Use modern slang",
                "Avoid all emotion"
            ],
            correct: 1
        }
    ]
};
