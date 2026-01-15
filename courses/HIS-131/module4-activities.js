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

// Module 4 Quiz (10 questions covering Early Republic & Market Revolution)
const module4Quiz = {
    questions: [
        {
            q: "Jeffersonian Democracy emphasized:",
            answers: [
                "Strong central government and industrial development",
                "Agrarian virtue, limited government, and strict constitutional interpretation ✓",
                "Rapid westward expansion without restrictions",
                "Federal support for banking and manufacturing"
            ],
            correct: 1
        },
        {
            q: "The Louisiana Purchase (1803) was significant because it:",
            answers: [
                "Ended the War of 1812",
                "Doubled the size of the United States ✓",
                "Abolished slavery in western territories",
                "Established the Missouri Compromise"
            ],
            correct: 1
        },
        {
            q: "The Embargo Act of 1807:",
            answers: [
                "Successfully forced Britain to respect American shipping",
                "Hurt the American economy more than its intended targets ✓",
                "Led directly to the War of 1812",
                "Increased American manufacturing overnight"
            ],
            correct: 1
        },
        {
            q: "Tecumseh's pan-Indian confederacy aimed to:",
            answers: [
                "Ally Native nations with the United States",
                "Resist American territorial expansion ✓",
                "Promote trade between tribes and settlers",
                "Convert Indigenous peoples to Christianity"
            ],
            correct: 1
        },
        {
            q: "The Haitian Revolution led by Toussaint Louverture was significant to American slavery because it:",
            answers: [
                "Inspired immediate abolition in the South",
                "Terrified Southern slaveholders and led to harsher slave codes ✓",
                "Had no impact on American slavery",
                "Convinced Jefferson to end the slave trade"
            ],
            correct: 1
        },
        {
            q: "Eli Whitney's cotton gin (1793):",
            answers: [
                "Made slavery obsolete and unprofitable",
                "Made cotton highly profitable and entrenched slavery ✓",
                "Was immediately banned in southern states",
                "Only worked for tobacco production"
            ],
            correct: 1
        },
        {
            q: "The Erie Canal (completed 1825) was important because it:",
            answers: [
                "Connected the Great Lakes to the Atlantic, transforming the Northern economy ✓",
                "Linked the Mississippi River to the Gulf of Mexico",
                "Provided water for southern cotton plantations",
                "Enabled westward migration to California"
            ],
            correct: 0
        },
        {
            q: "The 'cult of domesticity' ideology:",
            answers: [
                "Encouraged women to work in factories",
                "Promoted women's political participation",
                "Confined middle-class women to home as moral guardians ✓",
                "Applied equally to all women regardless of class or race"
            ],
            correct: 2
        },
        {
            q: "The Missouri Compromise (1820) attempted to resolve conflict over:",
            answers: [
                "Tariffs on imported goods",
                "The expansion of slavery into western territories ✓",
                "Native American removal policies",
                "Banking regulations"
            ],
            correct: 1
        },
        {
            q: "The Panic of 1819 demonstrated:",
            answers: [
                "The stability of the American banking system",
                "The dangers of market economy and speculative capitalism ✓",
                "That economic depressions were impossible in America",
                "The success of Jefferson's economic policies"
            ],
            correct: 1
        }
    ]
};

// Module 4 Midterm Exam (25 questions covering Modules 1-4)
const module4Midterm = {
    title: "Midterm Exam: Modules 1-4 Comprehensive Assessment",
    instructions: "This exam covers material from Modules 1-4 (Pre-Columbian through 1824). Answer all 25 questions. You have 90 minutes and 1 attempt.",
    questions: [
        // Module 1 questions (6 questions)
        {
            q: "The Columbian Exchange refers to:",
            answers: [
                "Trade agreements between European nations",
                "The transfer of plants, animals, diseases, and people between Americas and Europe/Africa ✓",
                "Christopher Columbus's navigation routes",
                "The exchange of diplomatic envoys"
            ],
            correct: 1,
            type: "Multiple Choice"
        },
        {
            q: "What was the PRIMARY demographic impact of European contact on Indigenous populations?",
            answers: [
                "Forced migration to western territories",
                "Disease epidemics killing up to 90% in some areas ✓",
                "Assimilation into European culture",
                "Immediate enslavement"
            ],
            correct: 1,
            type: "Multiple Choice"
        },
        {
            q: "The encomienda system granted Spanish colonists:",
            answers: [
                "Land ownership rights",
                "Control over Indigenous labor in exchange for Christianization ✓",
                "Exclusive trading privileges",
                "Military authority"
            ],
            correct: 1,
            type: "Multiple Choice"
        },
        {
            q: "True or False: The Haudenosaunee (Iroquois) Confederacy's Great Law of Peace influenced American colonial ideas about federation.",
            answers: [
                "True ✓",
                "False"
            ],
            correct: 0,
            type: "True/False"
        },
        {
            q: "Which Indigenous city near modern St. Louis had 10,000-30,000 inhabitants at its peak?",
            answers: [
                "Tenochtitlan",
                "Cahokia ✓",
                "Cuzco",
                "Chaco Canyon"
            ],
            correct: 1,
            type: "Multiple Choice"
        },
        {
            q: "The 'Three Sisters' agricultural system involved growing:",
            answers: [
                "Wheat, barley, and oats",
                "Corn, beans, and squash ✓",
                "Rice, tobacco, and cotton",
                "Potatoes, tomatoes, and peppers"
            ],
            correct: 1,
            type: "Multiple Choice"
        },
        // Module 2 questions (6 questions)
        {
            q: "Bacon's Rebellion (1676) led Virginia elites to:",
            answers: [
                "Abolish indentured servitude immediately",
                "Harden racial categories to prevent poor whites and Blacks from uniting ✓",
                "Grant more rights to all colonists",
                "End all forms of slavery"
            ],
            correct: 1,
            type: "Multiple Choice"
        },
        {
            q: "The Middle Passage specifically refers to:",
            answers: [
                "The route between northern and southern colonies",
                "The transatlantic voyage enslaving Africans from Africa to Americas ✓",
                "The journey from England to America",
                "Trade routes through the Caribbean"
            ],
            correct: 1,
            type: "Multiple Choice"
        },
        {
            q: "True or False: The Pueblo Revolt of 1680 successfully expelled Spanish colonizers from New Mexico for 12 years.",
            answers: [
                "True ✓",
                "False"
            ],
            correct: 0,
            type: "True/False"
        },
        {
            q: "The Great Awakening (1730s-1740s) challenged traditional authority by:",
            answers: [
                "Promoting rational philosophy",
                "Emphasizing personal faith and emotional religious experience ✓",
                "Supporting established church hierarchies",
                "Opposing all forms of religion"
            ],
            correct: 1,
            type: "Multiple Choice"
        },
        {
            q: "Mercantilism was an economic system where:",
            answers: [
                "Colonies existed to enrich the mother country through trade ✓",
                "Free trade was encouraged between all nations",
                "Colonies were economically independent",
                "Religious groups controlled commerce"
            ],
            correct: 0,
            type: "Multiple Choice"
        },
        {
            q: "The Seven Years' War (1754-1763) resulted in:",
            answers: [
                "French control of North America",
                "British acquisition of French Canada ✓",
                "Spanish dominance in the Caribbean",
                "Colonial independence from Europe"
            ],
            correct: 1,
            type: "Multiple Choice"
        },
        // Module 3 questions (7 questions)
        {
            q: "The slogan 'No taxation without representation' emerged in response to:",
            answers: [
                "The Boston Massacre",
                "The Stamp Act of 1765 ✓",
                "The Declaration of Independence",
                "The Constitutional Convention"
            ],
            correct: 1,
            type: "Multiple Choice"
        },
        {
            q: "Thomas Paine's Common Sense (1776) was influential because it:",
            answers: [
                "Defended British rule",
                "Convinced many colonists to support independence ✓",
                "Criticized the Constitution",
                "Advocated for monarchy"
            ],
            correct: 1,
            type: "Multiple Choice"
        },
        {
            q: "True or False: The Articles of Confederation created a strong central government with extensive powers.",
            answers: [
                "True",
                "False ✓"
            ],
            correct: 1,
            type: "True/False"
        },
        {
            q: "Shays' Rebellion (1786-1787) was significant because it:",
            answers: [
                "Successfully overthrew the federal government",
                "Demonstrated weaknesses of the Articles and prompted Constitutional Convention ✓",
                "Led to immediate abolition of slavery",
                "Ended the Revolutionary War"
            ],
            correct: 1,
            type: "Multiple Choice"
        },
        {
            q: "Anti-Federalists opposed the Constitution because they:",
            answers: [
                "Wanted stronger federal government",
                "Feared it gave too much power to central government and lacked bill of rights ✓",
                "Supported British monarchy",
                "Opposed all taxation"
            ],
            correct: 1,
            type: "Multiple Choice"
        },
        {
            q: "The Bill of Rights consists of:",
            answers: [
                "The Declaration of Independence",
                "The first 10 amendments to the Constitution ✓",
                "The Articles of Confederation",
                "The Federalist Papers"
            ],
            correct: 1,
            type: "Multiple Choice"
        },
        {
            q: "Alexander Hamilton's financial plan included:",
            answers: [
                "Eliminating all federal debt",
                "Creating a national bank and assuming state debts ✓",
                "Abolishing federal taxes",
                "Returning to British currency"
            ],
            correct: 1,
            type: "Multiple Choice"
        },
        // Module 4 questions (6 questions)
        {
            q: "The Louisiana Purchase (1803):",
            answers: [
                "Tripled the size of the United States",
                "Doubled the size of the United States ✓",
                "Added only Florida to the U.S.",
                "Resulted in war with France"
            ],
            correct: 1,
            type: "Multiple Choice"
        },
        {
            q: "True or False: Eli Whitney's cotton gin made slavery less profitable and helped lead to its decline.",
            answers: [
                "True",
                "False ✓"
            ],
            correct: 1,
            type: "True/False"
        },
        {
            q: "Tecumseh's pan-Indian confederacy sought to:",
            answers: [
                "Ally with American settlers",
                "Resist American territorial expansion ✓",
                "Establish trade monopolies",
                "Convert tribes to Christianity"
            ],
            correct: 1,
            type: "Multiple Choice"
        },
        {
            q: "The War of 1812 was fought primarily between:",
            answers: [
                "U.S. and France",
                "U.S. and Spain",
                "U.S. and Britain ✓",
                "U.S. and Mexico"
            ],
            correct: 2,
            type: "Multiple Choice"
        },
        {
            q: "The Missouri Compromise (1820) addressed:",
            answers: [
                "Tariff regulations",
                "The expansion of slavery into western territories ✓",
                "Native American rights",
                "Banking policies"
            ],
            correct: 1,
            type: "Multiple Choice"
        },
        {
            q: "The Market Revolution transformed the American economy by:",
            answers: [
                "Eliminating all farming",
                "Shifting from subsistence farming to commercial agriculture and wage labor ✓",
                "Ending all international trade",
                "Making everyone equally wealthy"
            ],
            correct: 1,
            type: "Multiple Choice"
        },
        {
            q: "True or False: The Erie Canal connected the Great Lakes to the Atlantic Ocean via the Hudson River.",
            answers: [
                "True ✓",
                "False"
            ],
            correct: 0,
            type: "True/False"
        }
    ]
};

// Module 4 Portfolio Piece #4: Symbol or Document (UNGRADED - Keep for Module 7)
const module4Project = {
    title: "Piece #4: Symbol or Document (UNGRADED - Save for Module 7 Portfolio)",
    instructions: `**Module Theme**: Freedom (1800-1815)
**Inquiry Question**: Liberty and justice—now what?

**This piece is NOT submitted now - you'll include it in your Module 7 Final Portfolio**

---

Create a piece exploring how different groups defined "freedom" and whose vision shaped early America.

### **CHOOSE ONE OPTION**:

**OPTION 1: National Symbol Analysis**

Create 2-3 slides analyzing a symbol, monument, or document from 1800-1815

**Choose ONE to Analyze**:
- Louisiana Purchase map/documents (whose freedom? whose land?)
- National symbols created in this era (Great Seal, Uncle Sam, Columbia, etc.)
- State constitutions (who could vote? who counted as citizen?)
- Early monuments or memorials (who is commemorated? who is erased?)
- Bill of Rights applications (whose rights protected?)

**Requirements**:
- Show the symbol/document with images
- Analyze: What vision of "freedom" does this represent?
- Whose definition of liberty? (Elite? Common people? Enslaved? Indigenous? Women?)
- Who is included vs. excluded?
- What does this reveal about "America" in this period?
- 100-150 word reflection connecting to "Liberty and justice—now what?"

**Tools**: PowerPoint, Google Slides, Word/PDF with images

---

**OPTION 2: "What We Stand For" Declaration**

Create 1-page illustrated document showing 3-4 different groups' visions of "freedom" (1800-1815)

**Show Competing Definitions** (choose 3-4 groups to analyze):
- Jeffersonian Republicans (agrarian democracy)
- Federalists (commercial republic)
- Indigenous nations (sovereignty, land rights)
- Enslaved people (use primary sources - petitions, freedom suits)
- Free Black Americans (citizenship, rights)
- Women (property rights, education, legal status)
- Western settlers (land ownership, expansion)

**Requirements**:
- Visual document with 3-4 sections
- Each section: One group's definition of "freedom" with PRIMARY SOURCE EVIDENCE
- Show conflicts: Can all these freedoms coexist?
- Visual elements: symbols, images, color coding
- Brief explanation: Whose vision won? Whose was suppressed?

**Tools**: PowerPoint, Canva, Word/PDF, hand-created (photographed)

---

**How to Keep This Piece**:
- Save your work! You'll include it in your Module 7 Final Portfolio
- File naming: LastName_FirstName_Piece4_Symbol

**This work will be graded as part of your Module 7 Final Portfolio (200 points total)**`,
    rubric: "Graded as part of Module 7 Final Portfolio"
};
