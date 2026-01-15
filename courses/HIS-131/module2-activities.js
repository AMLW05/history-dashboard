// Module 2 Complete Activity Data - Colonial Development (1620-1763)
const module2Activities = {
    la1: {
        questions: [
            { term: "Race-based Slavery", def: "Legal system that made slavery hereditary and tied to African ancestry, replacing fluid racial categories" },
            { term: "Indentured Servitude", def: "Labor system where workers contracted for 4-7 years in exchange for passage to America" },
            { term: "Bacon's Rebellion", def: "1676 uprising in Virginia that united poor whites and enslaved Africans, leading to hardening of racial categories" },
            { term: "Middle Passage", def: "Brutal transatlantic voyage enslaving Africans endured from Africa to the Americas" },
            { term: "Pueblo Revolt", def: "1680 successful Indigenous uprising led by Popé that temporarily expelled Spanish from New Mexico" },
            { term: "Metacom's War", def: "Also King Philip's War (1675-1676); devastating conflict between New England colonists and Native alliance" },
            { term: "Stono Rebellion", def: "1739 slave uprising in South Carolina that led to harsher slave codes" },
            { term: "Great Awakening", def: "1730s-1740s religious revival emphasizing personal faith and emotional experience over formal church authority" },
            { term: "Consumer Revolution", def: "Increase in availability of British goods in colonies, creating shared material culture and debt" },
            { term: "Mercantilism", def: "Economic system where colonies exist to enrich the mother country through trade restrictions" },
            { term: "Popé", def: "Pueblo religious leader who organized the successful 1680 revolt against Spanish colonizers" },
            { term: "George Whitefield", def: "Charismatic preacher whose tours sparked the Great Awakening across colonies" },
            { term: "Olaudah Equiano", def: "Formerly enslaved African who wrote influential autobiography detailing horrors of Middle Passage" },
            { term: "Seven Years' War", def: "Global conflict (1754-1763) between Britain and France that transformed North American colonial borders" },
            { term: "Salutary Neglect", def: "British policy of loose enforcement of trade laws, allowing colonial self-governance to develop" }
        ]
    },
    la2: {
        questions: [
            { q: "Who led the 1676 rebellion in Virginia that united poor whites and enslaved people against the elite?", answers: ["William Berkeley", "Nathaniel Bacon ✓", "Popé", "Metacom"], correct: 1 },
            { q: "Which 1680 Indigenous uprising successfully expelled Spanish colonizers from New Mexico for 12 years?", answers: ["Stono Rebellion", "Metacom's War", "Pueblo Revolt ✓", "Bacon's Rebellion"], correct: 2 },
            { q: "What event convinced Virginia elites to shift from indentured servitude to race-based slavery?", answers: ["Stono Rebellion", "Bacon's Rebellion ✓", "Seven Years' War", "Great Awakening"], correct: 1 },
            { q: "The Middle Passage refers to which journey?", answers: ["England to American colonies", "Africa to Americas in slave ships ✓", "Overland colonial trade routes", "Indigenous migration routes"], correct: 1 },
            { q: "Which religious movement emphasized emotional experience and challenged established church authority in the 1730s-1740s?", answers: ["Protestant Reformation", "Great Awakening ✓", "Puritanism", "Quaker Movement"], correct: 1 },
            { q: "George Whitefield was famous as a:", answers: ["Colonial governor", "Military leader", "Charismatic preacher ✓", "Slave rebellion leader"], correct: 2 },
            { q: "The 1739 Stono Rebellion took place in which colony?", answers: ["Virginia", "Massachusetts", "South Carolina ✓", "New York"], correct: 2 },
            { q: "What was the primary purpose of mercantilism?", answers: ["Promote colonial independence", "Enrich the mother country through trade ✓", "Establish religious freedom", "End slavery"], correct: 1 },
            { q: "The Seven Years' War (1754-1763) was primarily fought between which two powers in North America?", answers: ["Spain and Portugal", "Britain and France ✓", "Holland and Sweden", "Britain and Spain"], correct: 1 },
            { q: "Olaudah Equiano is known for:", answers: ["Leading Bacon's Rebellion", "Writing an autobiography about slavery ✓", "Preaching the Great Awakening", "Founding Pennsylvania"], correct: 1 }
        ]
    },
    la3: {
        timelineBuilder: {
            title: "Timeline Builder: Colonial Development (1620-1763)",
            instructions: "Drag and drop 10 events into chronological order from earliest to latest.",
            events: [
                { event: "Plymouth Colony established by Pilgrims", date: "1620", order: 1 },
                { event: "Virginia adopts first laws making slavery hereditary and race-based", date: "1660s-1670s", order: 2 },
                { event: "Metacom's War (King Philip's War) devastates New England", date: "1675-1676", order: 3 },
                { event: "Bacon's Rebellion unites poor whites and Blacks in Virginia", date: "1676", order: 4 },
                { event: "Pueblo Revolt led by Popé expels Spanish from New Mexico", date: "1680", order: 5 },
                { event: "Stono Rebellion: enslaved Africans rebel in South Carolina", date: "1739", order: 6 },
                { event: "Great Awakening religious revival begins sweeping colonies", date: "1730s-1740s", order: 7 },
                { event: "George Whitefield's preaching tours spark evangelical fervor", date: "1739-1741", order: 8 },
                { event: "Seven Years' War begins in North America (French and Indian War)", date: "1754", order: 9 },
                { event: "Treaty of Paris ends Seven Years' War; France cedes Canada to Britain", date: "1763", order: 10 }
            ]
        },
        comparisonActivity: {
            title: "Comparison Activity: Regional Colonial Differences",
            instructions: "Categorize characteristics by the colonial region they best describe.",
            regions: ["New England", "Middle Colonies", "Chesapeake", "Lower South"],
            characteristics: [
                { text: "Economy based on small family farms and maritime trade", answer: "New England" },
                { text: "Tobacco plantation economy with indentured servants, later enslaved labor", answer: "Chesapeake" },
                { text: "Rice and indigo plantations with majority enslaved African population", answer: "Lower South" },
                { text: "Diverse religions and ethnic groups (Quakers, Germans, Dutch)", answer: "Middle Colonies" },
                { text: "Puritan religious dominance and town meeting governance", answer: "New England" },
                { text: "Breadbasket colonies producing wheat and grain for export", answer: "Middle Colonies" },
                { text: "Highest mortality rates for colonists and enslaved people due to malaria", answer: "Lower South" },
                { text: "Virginia and Maryland colonies", answer: "Chesapeake" },
                { text: "Charleston becomes major slave trading port", answer: "Lower South" },
                { text: "Shipbuilding and fishing industries dominate economy", answer: "New England" },
                { text: "Pennsylvania founded as Quaker refuge with religious tolerance", answer: "Middle Colonies" },
                { text: "Gullah culture develops among enslaved African communities", answer: "Lower South" }
            ]
        }
    }
};

const module2Discussion = {
    title: "Discussion Board 1: Colonial Life Perspectives",
    prompt: `Choose ONE of the following perspectives and write a thoughtful response (250+ words):

1. **Enslaved African Perspective**: How would an enslaved person in 1750 South Carolina describe their daily life, resistance strategies, and community? Use evidence from the Middle Passage, plantation labor, and resistance movements like Stono Rebellion.

2. **Indentured Servant Perspective**: How would a newly arrived indentured servant in 1670 Virginia view their prospects for freedom and land ownership before vs. after Bacon's Rebellion?

3. **Indigenous Leader Perspective**: How would a Pueblo leader explain why they joined Popé's Revolt in 1680? What did they hope to achieve and preserve?

**Initial Post Requirements** (250+ words):
- State your chosen perspective clearly
- Include specific historical evidence from at least 2 course materials
- Analyze how this person would view their opportunities and challenges
- Consider: What would they fear? What would they hope for? How would they resist or adapt?

**Peer Response Requirements** (100+ words each, respond to 2 classmates):
- Engage with a classmate who chose a DIFFERENT perspective than you
- Make connections or contrasts between the two perspectives
- Ask a thoughtful question or offer additional historical context
- Build on their analysis with new evidence or insights`,
    rubric: "RUBRIC_2_Discussion_Boards",
    pointsBreakdown: {
        initialPost: 10,
        peerEngagement: 10,
        historicalAccuracy: 10
    }
};

// Module 2 Quiz (10 questions covering Colonial Development)
const module2Quiz = {
    questions: [
        {
            q: "Race-based slavery in the British colonies differed from earlier forms of servitude because:",
            answers: [
                "It was temporary and allowed for eventual freedom",
                "It was hereditary and permanently tied to African ancestry ✓",
                "It applied equally to Europeans and Africans",
                "It was only used for agricultural labor"
            ],
            correct: 1
        },
        {
            q: "Bacon's Rebellion (1676) was significant because it:",
            answers: [
                "Successfully established democracy in Virginia",
                "Led elites to harden racial categories to prevent future unity between poor whites and Blacks ✓",
                "Ended the use of indentured servants in all colonies",
                "Resulted in immediate abolition of slavery"
            ],
            correct: 1
        },
        {
            q: "The Pueblo Revolt of 1680 was unique among Indigenous resistance movements because:",
            answers: [
                "It failed within weeks of starting",
                "It successfully expelled Spanish colonizers for 12 years ✓",
                "It was led by European sympathizers",
                "It resulted in a peace treaty with Spain"
            ],
            correct: 1
        },
        {
            q: "The Middle Passage refers to:",
            answers: [
                "The journey from England to the American colonies",
                "The brutal transatlantic voyage enslaving Africans from Africa to the Americas ✓",
                "The route between northern and southern colonies",
                "The path westward across the Appalachian Mountains"
            ],
            correct: 1
        },
        {
            q: "Which statement best describes mercantilism?",
            answers: [
                "An economic system promoting free trade between all nations",
                "A policy where colonies exist to enrich the mother country through restricted trade ✓",
                "A religious movement encouraging moral commerce",
                "A labor system replacing slavery with wage work"
            ],
            correct: 1
        },
        {
            q: "The Great Awakening challenged traditional authority by:",
            answers: [
                "Promoting rational thought over emotion",
                "Emphasizing personal faith and emotional experience over formal church hierarchy ✓",
                "Calling for separation of church and state",
                "Establishing new government institutions"
            ],
            correct: 1
        },
        {
            q: "The Consumer Revolution in the colonies:",
            answers: [
                "Made colonists economically independent from Britain",
                "Created shared material culture with Britain while increasing colonial debt ✓",
                "Led to lower prices for all goods",
                "Eliminated social class distinctions"
            ],
            correct: 1
        },
        {
            q: "The Seven Years' War (1754-1763) resulted in:",
            answers: [
                "French victory and expansion in North America",
                "British acquisition of French Canada and Spanish Florida ✓",
                "Colonial independence from Britain",
                "End of all European claims in North America"
            ],
            correct: 1
        },
        {
            q: "Olaudah Equiano's autobiography was significant because it:",
            answers: [
                "Provided a firsthand account of the horrors of the Middle Passage and slavery ✓",
                "Described the Great Awakening revivals",
                "Documented Bacon's Rebellion",
                "Explained Puritan theology"
            ],
            correct: 0
        },
        {
            q: "Salutary neglect refers to:",
            answers: [
                "Britain's harsh enforcement of colonial trade laws",
                "Colonial mistreatment of Indigenous peoples",
                "Britain's loose enforcement of laws, allowing colonial self-governance to develop ✓",
                "The policy of ignoring slavery in southern colonies"
            ],
            correct: 2
        }
    ]
};

// What is America? Part 2: Colonial Character
const module2Project = {
    title: "What is America? Part 2: Colonial Character & Visual",
    instructions: `**Purpose**: Build your portfolio by creating a colonial-era character and visual representation.

**Assignment** (2 components):

**Part A: Character Profile** (1 page written)
- Create a fictional but historically accurate colonial character (1700s)
- Include: name, location, occupation, social status, daily life
- Address: How does your character experience "America"? What freedoms/restrictions do they face?
- Use Module 2 content to ensure historical accuracy

**Part B: Visual Representation** (1 image/drawing/collage)
- Create or find a visual representing your character's world
- Could be: portrait, scene from daily life, map of their community, symbolic image
- Add brief caption explaining the visual

**Submission**:
- Save as: LastName_FirstName_ColonialCharacter.pptx or .docx
- Include both written profile and visual

**Historical Accuracy Matters**:
✅ Consider: race, gender, class, region (New England vs. Southern vs. Middle colonies)
✅ Reflect colonial realities: slavery, indentured servitude, religious restrictions, economic systems
✅ Use specific details from readings and activities

**Tips**:
- Enslaved African? Indentured servant? Free colonist? Plantation owner? Merchant? Indigenous person?
- What does "America" mean to YOUR character? (Very different answers!)

**Grading**: 10 points - Historical accuracy, creativity, effort`,
    rubric: "Portfolio completion and historical accuracy"
};
