// Module 1 Complete Activity Data
const module1Activities = {
    la1: {
        questions: [
            { term: "Columbian Exchange", def: "The transfer of plants, animals, diseases, and people between the Americas and Europe/Africa after 1492" },
            { term: "Cahokia", def: "Major Mississippian city near modern St. Louis with 10,000-30,000 inhabitants at its peak (1050-1200 CE)" },
            { term: "Encomienda System", def: "Spanish labor system granting colonists control over Indigenous labor and tribute in exchange for protection and Christianization" },
            { term: "Mestizaje", def: "Spanish term for racial mixing between Europeans, Indigenous peoples, and Africans, creating new social categories" },
            { term: "Tenochtitlan", def: "Aztec capital city built on an island in Lake Texcoco with 200,000-300,000 residents, one of the world's largest cities in 1500" },
            { term: "Three Sisters", def: "Indigenous agricultural system of growing corn, beans, and squash together for mutual benefit" },
            { term: "Smallpox", def: "European disease that devastated Indigenous populations, killing up to 90% in some areas within decades of contact" },
            { term: "Haudenosaunee", def: "Also known as the Iroquois Confederacy; powerful alliance of five (later six) Native nations in the Northeast" },
            { term: "Pueblo Peoples", def: "Indigenous societies in the Southwest who built multi-story cliff dwellings and apartment-like structures" },
            { term: "Conquistador", def: "Spanish military leader who led expeditions to conquer Indigenous empires in the Americas" },
            { term: "Great Law of Peace", def: "Constitution of the Haudenosaunee Confederacy establishing democratic principles and federation government" },
            { term: "Maize", def: "Corn; staple crop domesticated by Indigenous peoples that became central to American agriculture" },
            { term: "Caravel", def: "Small, maneuverable sailing ship developed by Portugal that enabled longer ocean voyages" },
            { term: "Astrolabe", def: "Navigation instrument used by sailors to determine latitude by measuring the position of stars" },
            { term: "Reconquista", def: "Christian reconquest of the Iberian Peninsula from Muslim rule, completed in 1492, shaping Spanish colonial attitudes" }
        ]
    },
    la2: {
        questions: [
            { q: "Who was the Spanish conquistador who defeated the Aztec Empire in 1521?", answers: ["Francisco Pizarro", "Hernán Cortés ✓", "Christopher Columbus", "Hernando de Soto"], correct: 1 },
            { q: "Which Indigenous civilization built the city of Tenochtitlan?", answers: ["Inca", "Maya", "Aztec ✓", "Mississippian"], correct: 2 },
            { q: "What was the primary cause of Indigenous population decline after European contact?", answers: ["Warfare with Europeans", "Enslavement", "European diseases like smallpox ✓", "Starvation due to crop destruction"], correct: 2 },
            { q: "Christopher Columbus reached the Caribbean in what year?", answers: ["1488", "1492 ✓", "1500", "1521"], correct: 1 },
            { q: "The Haudenosaunee (Iroquois) Confederacy was an alliance of how many Native nations?", answers: ["Three nations", "Five nations ✓ (later six)", "Seven nations", "Ten nations"], correct: 1 },
            { q: "Which European explorer led the first expedition to circumnavigate the globe (1519-1522)?", answers: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan ✓", "Hernán Cortés"], correct: 2 },
            { q: "Who conquered the Inca Empire in Peru?", answers: ["Hernán Cortés", "Francisco Pizarro ✓", "Christopher Columbus", "Pedro Álvares Cabral"], correct: 1 },
            { q: "The 'Three Sisters' agricultural system refers to growing which three crops together?", answers: ["Wheat, rice, barley", "Corn, beans, squash ✓", "Potatoes, tomatoes, peppers", "Cotton, tobacco, indigo"], correct: 1 },
            { q: "Which European country established the encomienda labor system in its American colonies?", answers: ["England", "France", "Spain ✓", "Portugal"], correct: 2 },
            { q: "Cahokia was located near which modern U.S. city?", answers: ["New York", "St. Louis ✓", "Chicago", "Atlanta"], correct: 1 }
        ]
    },
    la3: {
        timelineBuilder: {
            title: "Timeline Builder: Chronological Sorting",
            instructions: "Drag and drop 10 events into the correct chronological order from earliest to latest.",
            events: [
                { event: "Cahokia reaches peak population (10,000-30,000 people)", date: "1050-1200 CE", order: 1 },
                { event: "Aztec Empire establishes Tenochtitlan as capital", date: "1325 CE", order: 2 },
                { event: "Spain completes Reconquista by conquering Granada", date: "1492 CE", order: 3 },
                { event: "Christopher Columbus reaches Caribbean islands", date: "1492 CE", order: 4 },
                { event: "Vasco da Gama reaches India, establishing sea route", date: "1498 CE", order: 5 },
                { event: "Ferdinand Magellan begins first circumnavigation voyage", date: "1519 CE", order: 6 },
                { event: "Hernán Cortés conquers Aztec Empire", date: "1519-1521 CE", order: 7 },
                { event: "Francisco Pizarro conquers Inca Empire in Peru", date: "1532-1533 CE", order: 8 },
                { event: "Spanish establish encomienda labor system in colonies", date: "1503-1542 CE", order: 9 },
                { event: "Smallpox epidemic devastates Indigenous populations across Americas", date: "1520s-1600s CE", order: 10 }
            ]
        },
        comparisonActivity: {
            title: "Comparison Activity: Indigenous Societies",
            instructions: "Categorize characteristics by the Indigenous society they describe. Some characteristics may apply to multiple societies.",
            societies: ["Mississippian (Cahokia)", "Aztec (Mexica)", "Haudenosaunee (Iroquois)", "Pueblo Peoples"],
            characteristics: [
                { text: "Built large earthen mounds for ceremonial purposes", answer: "Mississippian (Cahokia)" },
                { text: "Constructed multi-story cliff dwellings in Southwest", answer: "Pueblo Peoples" },
                { text: "Established democratic confederation with Great Law of Peace", answer: "Haudenosaunee (Iroquois)" },
                { text: "Built island capital city with population over 200,000", answer: "Aztec (Mexica)" },
                { text: "Practiced Three Sisters agriculture (corn, beans, squash)", answer: "Multiple: All societies" },
                { text: "Located in modern-day St. Louis area", answer: "Mississippian (Cahokia)" },
                { text: "Formed alliance of five (later six) nations", answer: "Haudenosaunee (Iroquois)" },
                { text: "Conquered by Hernán Cortés in 1521", answer: "Aztec (Mexica)" },
                { text: "Known for adobe brick construction", answer: "Pueblo Peoples" },
                { text: "Peak population occurred around 1050-1200 CE", answer: "Mississippian (Cahokia)" },
                { text: "Located in what is now Mexico City", answer: "Aztec (Mexica)" },
                { text: "Influenced American colonial ideas about federation", answer: "Haudenosaunee (Iroquois)" }
            ]
        }
    }
};

// Module 1 Quiz (10 questions covering all MLOs)
const module1Quiz = {
    questions: [
        {
            q: "Which of the following best describes the Columbian Exchange?",
            answers: [
                "The exchange of diplomatic envoys between European nations during colonization",
                "The transfer of plants, animals, diseases, and people between the Americas and Europe/Africa ✓",
                "The trade routes established by Christopher Columbus in the Caribbean",
                "The religious conversion of Indigenous peoples to Christianity"
            ],
            correct: 1
        },
        {
            q: "What was the PRIMARY cause of Indigenous population decline after European contact?",
            answers: [
                "Forced labor in mines and plantations",
                "Warfare with European colonizers",
                "European diseases like smallpox ✓",
                "Destruction of food supplies"
            ],
            correct: 2
        },
        {
            q: "The encomienda system granted Spanish colonists:",
            answers: [
                "Land ownership in the Americas",
                "Control over Indigenous labor in exchange for Christianization ✓",
                "Exclusive trading rights with Native nations",
                "Military command over colonial territories"
            ],
            correct: 1
        },
        {
            q: "Which Indigenous civilization built the city of Tenochtitlan?",
            answers: [
                "Inca Empire",
                "Maya civilization",
                "Aztec (Mexica) Empire ✓",
                "Mississippian culture"
            ],
            correct: 2
        },
        {
            q: "The 'Three Sisters' agricultural system refers to:",
            answers: [
                "Three Indigenous women leaders who formed political alliances",
                "Growing corn, beans, and squash together for mutual benefit ✓",
                "Three Spanish missions established in California",
                "Three trading partnerships between European and Native groups"
            ],
            correct: 1
        },
        {
            q: "Cahokia, one of North America's largest pre-Columbian cities, was located near modern:",
            answers: [
                "Mexico City",
                "New York City",
                "St. Louis ✓",
                "Santa Fe"
            ],
            correct: 2
        },
        {
            q: "The Haudenosaunee (Iroquois) Confederacy's Great Law of Peace established:",
            answers: [
                "Trade agreements with Dutch colonists",
                "Democratic principles and federation government ✓",
                "Peace treaties ending all intertribal warfare",
                "Religious conversion to Christianity"
            ],
            correct: 1
        },
        {
            q: "Mestizaje in Spanish colonial society referred to:",
            answers: [
                "The system of forced labor in silver mines",
                "Racial mixing between Europeans, Indigenous peoples, and Africans ✓",
                "The Catholic Church's role in colonial governance",
                "Land grants given to conquistadors"
            ],
            correct: 1
        },
        {
            q: "Which technological advancement was MOST crucial in enabling European oceanic exploration?",
            answers: [
                "The printing press",
                "Gunpowder weapons",
                "The caravel ship and astrolabe ✓",
                "The compass alone"
            ],
            correct: 2
        },
        {
            q: "Spain completed the Reconquista in 1492, which involved:",
            answers: [
                "Conquering the Aztec Empire in Mexico",
                "Establishing the first colony in the Caribbean",
                "Reconquering the Iberian Peninsula from Muslim rule ✓",
                "Defeating Portugal in a naval war"
            ],
            correct: 2
        }
    ]
};

const rubricData = {
    rubric1: {
        title: "Rubric 1: Project Checkpoints (50 points)",
        usage: "Modules 1, 3, 5 Checkpoints",
        criteria: [
            {
                name: "Topic/Source Selection & Clarity (15 pts)",
                excellent: "Topic or source is clearly defined, historically appropriate, and demonstrates strong potential for research. Directly relevant to the module period and inquiry questions.",
                proficient: "Topic or source is identified with minor clarity issues. Generally appropriate but may need slight refinement. Related to module themes.",
                developing: "Topic or source is too broad, vague, or only tangentially related to module content. Needs significant narrowing or refocusing.",
                needsWork: "No clear topic or source identified, or selection is historically inappropriate or off-topic."
            },
            {
                name: "Historical Context & Understanding (15 pts)",
                excellent: "Demonstrates rich understanding of the historical period through detailed context. Makes clear connections between topic and broader historical themes. Uses specific evidence from course materials.",
                proficient: "Provides adequate historical context with some connections to course themes. Minor gaps in understanding or detail. Uses some course materials.",
                developing: "Limited or surface-level historical context provided. Few connections to broader themes. Minimal use of course materials or generic observations.",
                needsWork: "Missing, inaccurate, or irrelevant historical context. No connection to course content or demonstrates significant misunderstanding."
            },
            {
                name: "Research Planning & Sources (15 pts)",
                excellent: "Presents detailed research plan with 3+ credible sources identified (primary and/or secondary). Sources are appropriate, diverse, and properly cited. Clear plan for using sources.",
                proficient: "Provides basic research plan with 2-3 sources identified. Sources are generally credible with minor citation issues. Plan for using sources is present but underdeveloped.",
                developing: "Vague research plan with only 1-2 sources, or sources lack credibility. Minimal citation information. Unclear how sources will be used.",
                needsWork: "No research plan evident, or sources are missing, inappropriate, or not cited. No indication of how research will proceed."
            },
            {
                name: "Writing Mechanics & Format (5 pts)",
                excellent: "Nearly flawless grammar, spelling, and punctuation. Professional formatting. Clear, concise communication throughout.",
                proficient: "Minor grammar, spelling, or punctuation errors (2-3). Generally clear writing with occasional awkward phrasing. Proper formatting.",
                developing: "Multiple grammar, spelling, or punctuation errors (4-6) that occasionally distract from content. Some formatting issues.",
                needsWork: "Significant writing errors (7+) that impede comprehension. Poor formatting. Difficult to follow."
            }
        ]
    },
    rubric2: {
        title: "Rubric 2: Discussion Boards (30 points)",
        usage: "Modules 2, 4, 6, 8 Discussions",
        criteria: [
            {
                name: "Initial Post Quality (10 pts)",
                excellent: "Thoughtful response with specific evidence from course materials. Clear thesis. 250+ words. Posted on time.",
                proficient: "Adequate response with some evidence. Mostly clear argument. 200+ words. Posted on time.",
                needsWork: "Superficial response with little/no evidence. Unclear or off-topic. Under 200 words or late."
            },
            {
                name: "Peer Engagement (10 pts)",
                excellent: "2+ substantive responses building on peers' ideas. Asks questions, offers new perspectives. 100+ words each.",
                proficient: "2 responses with some substance. Some engagement with peers' ideas. 75+ words each.",
                needsWork: "Fewer than 2 responses, or responses are superficial ('I agree'). Under 75 words or late."
            },
            {
                name: "Historical Accuracy (10 pts)",
                excellent: "All historical information accurate. Demonstrates clear understanding of module content.",
                proficient: "Generally accurate with 1-2 minor errors. Shows adequate understanding.",
                needsWork: "Multiple factual errors or demonstrates misunderstanding of content."
            }
        ]
    },
    rubric3: {
        title: "Rubric 3: Final Project (100 points)",
        usage: "Module 7 Final Project Submission",
        criteria: [
            {
                name: "Thesis/Argument (20 pts)",
                excellent: "Clear, sophisticated thesis. Compelling historical argument with nuanced analysis.",
                proficient: "Clear thesis with coherent argument. Good historical analysis.",
                developing: "Thesis present but unclear or simplistic. Limited analysis.",
                needsWork: "No clear thesis or argument is off-topic/incoherent."
            },
            {
                name: "Evidence/Analysis (20 pts)",
                excellent: "Excellent use of 5+ credible sources. Strong integration of primary and secondary sources.",
                proficient: "Good use of 4-5 sources. Adequate integration with minor gaps.",
                developing: "Limited sources (2-3) or poor integration. Some evidence lacking.",
                needsWork: "Few/no sources, or sources inappropriate/not cited."
            },
            {
                name: "Historical Context (20 pts)",
                excellent: "Sophisticated contextualization. Clear connections across modules and themes.",
                proficient: "Good contextualization with some connections to course themes.",
                developing: "Limited context. Few connections to broader course content.",
                needsWork: "Missing or inaccurate historical context."
            },
            {
                name: "Organization (20 pts)",
                excellent: "Excellent structure. Logical flow. Professional presentation (slides or video).",
                proficient: "Good structure with clear organization. Adequate presentation.",
                developing: "Some organizational issues. Presentation needs improvement.",
                needsWork: "Poor organization. Difficult to follow. Unprofessional presentation."
            },
            {
                name: "Mechanics (20 pts)",
                excellent: "Nearly flawless writing/speaking. Perfect citations. Meets all requirements.",
                proficient: "Minor errors. Generally correct citations. Meets most requirements.",
                developing: "Multiple errors. Citation issues. Missing some requirements.",
                needsWork: "Significant errors. Poor/missing citations. Requirements not met."
            }
        ]
    }
};
