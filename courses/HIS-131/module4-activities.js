// Module 4 Complete Activity Data - Early Republic & Market Revolution (1800-1824)
const module4Activities = {
    la1: {
        questions: [
            { term: "Jeffersonian Democracy", def: "Political philosophy emphasizing agrarian virtue, limited government, and strict constitutional interpretation" },
            { term: "Louisiana Purchase", def: "1803 acquisition of French territory that doubled U.S. size for $15 million" },
            { term: "Embargo Act", def: "1807 law banning U.S. trade with foreign nations; hurt American economy more than intended targets" },
            { term: "War of 1812", def: "Conflict with Britain over impressment, Native alliances, and territorial expansion; ended in stalemate" },
            { term: "Battle of New Orleans", def: "Andrew Jackson's 1815 victory that made him national hero (occurred after peace treaty signed)" },
            { term: "Tecumseh", def: "Shawnee leader who organized pan-Indian confederacy to resist American expansion" },
            { term: "Toussaint Louverture", def: "Leader of successful Haitian slave revolution that terrified Southern slaveholders" },
            { term: "Market Revolution", def: "Economic transformation from subsistence farming to commercial agriculture and wage labor" },
            { term: "Cotton Gin", def: "Eli Whitney's 1793 invention that made cotton profitable and entrenched slavery" },
            { term: "Erie Canal", def: "1825 canal connecting Great Lakes to Atlantic, transforming Northern economy" },
            { term: "Cult of Domesticity", def: "Ideology confining middle-class women to home as moral guardians while men worked for wages" },
            { term: "Lowell Mills", def: "New England textile factories employing young women ('mill girls') in early industrial system" },
            { term: "American System", def: "Henry Clay's plan for tariffs, national bank, and internal improvements to build economy" },
            { term: "Panic of 1819", def: "First major economic crisis in U.S., exposing dangers of market economy and paper currency" },
            { term: "Missouri Compromise", def: "1820 agreement admitting Missouri as slave state, Maine as free state, banning slavery north of 36°30' line" }
        ]
    },
    la2: {
        questions: [
            { q: "Who was president during the Louisiana Purchase?", answers: ["George Washington", "John Adams", "Thomas Jefferson ✓", "James Madison"], correct: 2 },
            { q: "Which invention dramatically increased cotton production and demand for enslaved labor?", answers: ["Steam engine", "Cotton gin ✓", "Spinning jenny", "Mechanical reaper"], correct: 1 },
            { q: "Tecumseh led a pan-Indian confederacy to:", answers: ["Support American expansion", "Resist American expansion ✓", "Ally with Spain", "Establish trade networks"], correct: 1 },
            { q: "The War of 1812 was fought between the U.S. and:", answers: ["France", "Spain", "Britain ✓", "Mexico"], correct: 2 },
            { q: "Which battle made Andrew Jackson a national hero?", answers: ["Bunker Hill", "Yorktown", "Gettysburg", "New Orleans ✓"], correct: 3 },
            { q: "The successful slave revolution in Haiti was led by:", answers: ["Toussaint Louverture ✓", "Tecumseh", "Denmark Vesey", "Nat Turner"], correct: 0 },
            { q: "The Erie Canal connected the Great Lakes to:", answers: ["Mississippi River", "Atlantic Ocean (via Hudson River) ✓", "Ohio River", "Chesapeake Bay"], correct: 1 },
            { q: "The Embargo Act of 1807 aimed to:", answers: ["Increase trade with Britain", "Punish Britain and France by stopping trade ✓", "End slavery", "Lower taxes"], correct: 1 },
            { q: "The Missouri Compromise (1820) dealt with:", answers: ["Native American lands", "Westward expansion of slavery ✓", "Tariff rates", "Banking policy"], correct: 1 },
            { q: "The 'cult of domesticity' ideology primarily affected:", answers: ["Enslaved women", "Working-class women", "Middle-class white women ✓", "Indigenous women"], correct: 2 }
        ]
    },
    la3: {
        timelineBuilder: {
            title: "Timeline Builder: Early Republic Era (1800-1824)",
            instructions: "Sort 10 events chronologically.",
            events: [
                { event: "Thomas Jefferson elected president in 'Revolution of 1800'", date: "1800", order: 1 },
                { event: "Louisiana Purchase doubles U.S. territory", date: "1803", order: 2 },
                { event: "Embargo Act bans American trade with foreign nations", date: "1807", order: 3 },
                { event: "Tecumseh organizes pan-Indian confederacy against U.S. expansion", date: "1808-1811", order: 4 },
                { event: "War of 1812 begins with Britain", date: "1812", order: 5 },
                { event: "British burn Washington D.C.", date: "1814", order: 6 },
                { event: "Battle of New Orleans: Andrew Jackson defeats British", date: "January 1815", order: 7 },
                { event: "Panic of 1819: first major economic depression", date: "1819", order: 8 },
                { event: "Missouri Compromise addresses slavery expansion", date: "1820", order: 9 },
                { event: "Erie Canal completed, transforming Northern economy", date: "1825", order: 10 }
            ]
        },
        comparisonActivity: {
            title: "Comparison: Market Revolution's Regional Impacts",
            instructions: "Categorize each economic change as primarily affecting North, South, or Both regions.",
            regions: ["North", "South", "Both"],
            characteristics: [
                { text: "Factory system develops with wage labor", answer: "North" },
                { text: "Cotton becomes dominant cash crop", answer: "South" },
                { text: "Erie Canal and transportation networks expand", answer: "North" },
                { text: "Slavery becomes more entrenched and profitable", answer: "South" },
                { text: "Family farms shift from subsistence to market production", answer: "Both" },
                { text: "Textile mills employ young women in cities", answer: "North" },
                { text: "Planters invest profits in more enslaved laborers rather than technology", answer: "South" },
                { text: "Cult of domesticity confines middle-class women to home", answer: "Both (primarily North)" },
                { text: "Immigration from Ireland and Germany increases", answer: "North" },
                { text: "Internal slave trade forcibly separates families", answer: "South" },
                { text: "Boom-and-bust economic cycles create instability", answer: "Both" },
                { text: "Westward expansion creates new territories and conflicts", answer: "Both" }
            ]
        }
    }
};

const module4Discussion = {
    title: "Discussion Board 2: Market Revolution Impact",
    prompt: `The Market Revolution (1790s-1840s) transformed the American economy from local subsistence farming to national markets, wage labor, and commercial agriculture. Choose ONE perspective:

1. **Northern Mill Worker**: You're a young woman working at Lowell Mills in Massachusetts. How has factory work changed your life compared to farm life? What opportunities and constraints do you face?

2. **Southern Enslaved Person**: You've been "sold down the river" from Virginia to a Mississippi cotton plantation. How has the cotton boom and interstate slave trade affected your life, family, and work?

3. **Western Farmer**: You've moved to Ohio after the Erie Canal opened. How do new transportation networks affect your farm's production and connection to markets?

**Initial Post** (250+ words):
- Describe your daily life and economic circumstances
- Explain how Market Revolution changes helped or hurt you
- Use specific evidence from course materials
- Consider: What new opportunities exist? What freedoms are lost?

**Peer Responses** (100+ words each, 2 responses):
- Compare experiences across different regions or social positions
- Discuss how Market Revolution created winners and losers
- Connect to broader themes about capitalism, freedom, and inequality`,
    rubric: "RUBRIC_2_Discussion_Boards"
};
