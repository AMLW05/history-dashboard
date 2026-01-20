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

// Module 6 Complete Activity Data - Superhero Mythology
const module6Activities = {
    la1: {
        questions: [
            { term: "Origin Story", def: "Narrative explaining how a superhero gained powers and began heroic career" },
            { term: "Alter Ego", def: "The dual identity of hero (Clark Kent/Superman)" },
            { term: "Superhuman", def: "Being with abilities beyond normal human capacity" },
            { term: "Pantheon", def: "Group of gods/heroes working together; Avengers as modern pantheon" },
            { term: "Multiverse", def: "Multiple parallel universes in comic book cosmology" },
            { term: "Vigilante Justice", def: "Heroes taking law into own hands; ethical complication" },
            { term: "Kryptonite", def: "Hero's weakness; Achilles' heel archetype" },
            { term: "Infinity Stones", def: "All-powerful artifacts from Marvel; echo magic items from myth" },
            { term: "Mutant", def: "Being born with powers; X-Men as metaphor for difference" },
            { term: "Nemesis", def: "Arch-enemy representing opposite of hero's values" },
            { term: "Sidekick", def: "Hero's younger companion and apprentice" },
            { term: "Civil War", def: "Conflict among heroes; mythic family/divine conflict" },
            { term: "Resurrection", def: "Death and return, common in comics; echo of dying-rising gods" },
            { term: "Cosmic Entity", def: "God-level being in comic universe (Celestials, Eternals)" },
            { term: "Secret Identity", def: "Hidden true identity protecting loved ones" }
        ]
    },
    la2: {
        questions: [
            { q: "Spider-Man's origin involves:", answers: ["Magic spell", "Alien technology", "Radioactive spider bite ✓", "Military experiment"], correct: 2 },
            { q: "Which superhero is an actual god from mythology?", answers: ["Iron Man", "Captain America", "Thor ✓", "Hulk"], correct: 2 },
            { q: "Superman's origin parallels which mythological pattern?", answers: ["Trickster", "Divine child sent from dying world ✓", "War god", "Underworld journey"], correct: 1 },
            { q: "The X-Men primarily function as metaphor for:", answers: ["Technology", "Difference and discrimination ✓", "Wealth", "Education"], correct: 1 },
            { q: "The Avengers structure most resembles:", answers: ["Roman Senate", "Greek Olympian pantheon ✓", "Medieval court", "Modern military"], correct: 1 },
            { q: "Batman's origin is driven by:", answers: ["Genetic mutation", "Divine blessing", "Traumatic loss ✓", "Scientific accident"], correct: 2 },
            { q: "Which reflects the 'power and responsibility' theme?", answers: ["Spider-Man ✓", "Joker", "Loki", "Penguin"], correct: 0 },
            { q: "Wonder Woman's origin connects to which mythology?", answers: ["Norse", "Egyptian", "Greek ✓", "Celtic"], correct: 2 },
            { q: "The concept of 'secret identity' serves to:", answers: ["Protect loved ones ✓", "Avoid taxes", "Win contests", "Nothing useful"], correct: 0 },
            { q: "Black Panther's Wakanda represents:", answers: ["Historical accuracy", "Futuristic African civilization ✓", "European colony", "Underwater kingdom"], correct: 1 }
        ]
    },
    la3: {
        matching: {
            title: "Superheroes & Mythological Parallels",
            instructions: "Match each superhero to their closest classical mythological parallel based on powers, role, and characteristics.",
            items: [
                { hero: "Thor", parallel: "Thor (Norse god of thunder) - direct adaptation" },
                { hero: "Wonder Woman", parallel: "Athena/Artemis - warrior goddess, wisdom and strength" },
                { hero: "Superman", parallel: "Hercules - super strength, saves humanity, immigrant god" },
                { hero: "Batman", parallel: "Hades - dark protector, fear-based, underworld symbolism" },
                { hero: "Spider-Man", parallel: "Arachne - spider transformation, web-weaving" },
                { hero: "Iron Man", parallel: "Hephaestus - master craftsman/inventor god" },
                { hero: "Loki", parallel: "Loki (Norse trickster) - direct adaptation" },
                { hero: "Aquaman", parallel: "Poseidon - ruler of seas, trident, ocean powers" },
                { hero: "The Flash", parallel: "Hermes - super speed, messenger" },
                { hero: "Black Widow", parallel: "Artemis - skilled hunter and warrior woman" },
                { hero: "Hulk", parallel: "Ares - uncontrollable rage, destructive power" },
                { hero: "Doctor Strange", parallel: "Merlin - sorcerer, mystical knowledge" }
            ]
        }
    },
    la4: {
        title: "LA4: Superhero Mythology Impact Analysis",
        instructions: "Analyze patterns in superhero origins, archetype distribution, and cultural impact across comic book history.",
        questions: [
            {q: "What percentage of major superheroes have tragic origin stories?", a: "Approximately 75% - loss drives heroism (Batman's parents, Spider-Man's uncle, Superman's planet)"},
            {q: "Which origin type is most common in Marvel vs DC?", a: "Marvel: Scientific accidents (60%). DC: Alien heritage or divine origins (55%)"},
            {q: "How many major superheroes have god-level powers?", a: "About 15% are cosmic/god-tier (Thor, Superman, Wonder Woman, Silver Surfer, etc.)"},
            {q: "What pattern do female superhero origins show?", a: "70% originate in the 1940s or post-2000s; less in 1950s-1990s 'male era'"},
            {q: "Which archetype is least represented in superheroes?", a: "The Fool/Innocent - most heroes are experienced, traumatized, or warriors"}
        ]
    }
};

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
                { text: "God of War series using Norse and Greek pantheons", answer: "Video Game Mythology" },
                { text: "Nike as Greek goddess of victory", answer: "Brand Mythology" },
                { text: "Slender Man urban legend", answer: "Internet Folklore" },
                { text: "Princess Mononoke featuring forest spirits and gods", answer: "Anime/Studio Ghibli" },
                { text: "The Witcher adapting Slavic mythology", answer: "Streaming Series Mythology" },
                { text: "Apple's creation myth (garage startup, visionary founder)", answer: "Brand Mythology" },
                { text: "SCP Foundation collaborative horror mythology", answer: "Internet Folklore" },
                { text: "Spirited Away with bathhouse for spirits", answer: "Anime/Studio Ghibli" },
                { text: "American Gods (series) bringing old gods to modern America", answer: "Streaming Series Mythology" },
                { text: "Zelda's Triforce and recurring hero's journey", answer: "Video Game Mythology" },
                { text: "Jeff Bezos as modern Midas (everything turns to Amazon)", answer: "Brand Mythology" },
                { text: "Five Nights at Freddy's lore and fan theories", answer: "Internet Folklore" }
            ]
        }
    }
};

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
