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
    title: "Discussion Board 2: Democratic Ideals & Portfolio Piece #4",
    prompt: `**Connection to Portfolio**: This discussion helps you develop ideas for your Piece #4 (Symbol or Document) that you'll create for your Module 7 portfolio.

**Discussion Prompt** (300-350 words):

Analyze how the Market Revolution (1790s-1840s) and Jeffersonian era revealed contradictions between democratic ideals and economic realities. Choose ONE of the following to analyze using PRIMARY SOURCE EVIDENCE:

**Option 1: Analyze Economic Freedom Through Documents**
Using primary sources (labor contracts, advertisements, court records, economic data), analyze how the Market Revolution redefined "freedom" for workers. Consider:
- What do Lowell Mill records reveal about women's economic opportunities and constraints?
- How do wage labor contracts differ from earlier forms of work?
- What evidence shows workers' agency and resistance?
- How did "freedom to work" create new forms of dependence?

**Option 2: Analyze Citizenship and Rights Through the Haitian Revolution**
Using historical documents and Jefferson's writings, analyze how the Haitian Revolution exposed American contradictions. Consider:
- What do Jefferson's letters reveal about elite fears of Black revolution?
- How did southern states respond with new slave codes? (Use legal documents)
- What evidence exists of Black Americans' awareness and inspiration from Haiti?
- How did this challenge American claims of universal liberty?

**Option 3: Analyze Indigenous Sovereignty Through Tecumseh's Resistance**
Using speeches, treaty documents, and contemporary accounts, analyze Indigenous resistance to American expansion. Consider:
- What primary sources document Tecumseh's vision of pan-Indian unity?
- How do land treaties reveal American expansion strategies?
- What does the evidence show about Indigenous agency and political organization?
- How did American "freedom" depend on Indigenous dispossession?

**Initial Post Requirements** (300-350 words):
- Choose ONE option and clearly state your choice
- Cite at least 2 specific primary sources or historical documents
- Analyze the evidence - don't roleplay or speak "as" historical figures
- Connect to Module 4 theme: "Liberty and justice—now what?"
- Explain how this analysis might inform your Portfolio Piece #4

**Peer Response Requirements** (150-200 words each, respond to 2 classmates):
- Engage with classmates who chose DIFFERENT options than you
- Compare contradictions: What patterns do you see across different groups?
- Offer additional evidence or context
- Ask analytical questions that deepen understanding`,
    rubric: "RUBRIC_2_Discussion_Boards",
    pointsBreakdown: {
        initialPost: 40,
        peerResponses: 40,
        portfolioConnection: 20
    }
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
                "Trade agreements establishing diplomatic relations between European nations and Indigenous peoples",
                "The transfer of plants, animals, diseases, and people between Americas, Europe, and Africa ✓",
                "Christopher Columbus's navigation routes and mapping of Atlantic Ocean currents",
                "The exchange of diplomatic envoys and cultural ambassadors across the Atlantic"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        {
            q: "What was the PRIMARY demographic impact of European contact on Indigenous populations?",
            answers: [
                "Forced migration to western territories through organized removal policies",
                "Disease epidemics causing population decline of up to 90% in some regions ✓",
                "Cultural assimilation into European society through mission systems and intermarriage",
                "Large-scale enslavement and forced labor in mining and agricultural operations"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        {
            q: "The encomienda system granted Spanish colonists:",
            answers: [
                "Permanent land ownership rights and hereditary titles in conquered territories",
                "Control over Indigenous labor in exchange for providing Christian instruction ✓",
                "Exclusive trading privileges and monopoly rights in colonial commerce",
                "Military authority to establish fortifications and command Indigenous auxiliary forces"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        {
            q: "Which Indigenous city near modern St. Louis had 10,000-30,000 inhabitants at its peak?",
            answers: [
                "Tenochtitlan, capital of the Aztec Empire",
                "Cahokia, largest Mississippian urban center ✓",
                "Cuzco, ceremonial center of the Inca Empire",
                "Chaco Canyon, Ancestral Puebloan trade hub"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        {
            q: "The 'Three Sisters' agricultural system involved growing:",
            answers: [
                "Wheat, barley, and oats in rotation to maintain soil fertility",
                "Corn, beans, and squash in complementary ecological relationships ✓",
                "Rice, tobacco, and cotton as commercial cash crops for trade",
                "Potatoes, tomatoes, and peppers in raised-bed intensive cultivation"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        {
            q: "The Haudenosaunee (Iroquois) Confederacy's Great Law of Peace:",
            answers: [
                "Had no influence on European colonial political thought or institutions",
                "Influenced American colonial ideas about federation and representative government ✓",
                "Was created after contact with Europeans as a response to colonization",
                "Applied only to internal tribal governance without broader political implications"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        // Module 2 questions (6 questions)
        {
            q: "Bacon's Rebellion (1676) led Virginia elites to:",
            answers: [
                "Abolish indentured servitude and transition immediately to free wage labor systems",
                "Harden racial categories and shift to race-based slavery to prevent cross-racial alliances ✓",
                "Grant expanded political rights to all colonists regardless of property ownership",
                "End all forms of unfree labor and establish a society based on small farms"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        {
            q: "The Middle Passage specifically refers to:",
            answers: [
                "The overland route used to transport enslaved people between northern and southern colonies",
                "The transatlantic voyage of slave ships carrying enslaved Africans to the Americas ✓",
                "The ocean journey of indentured servants and colonists from England to America",
                "The Caribbean trade routes connecting islands to mainland colonial markets"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        {
            q: "The Pueblo Revolt of 1680:",
            answers: [
                "Failed immediately and resulted in harsher Spanish control over Indigenous peoples",
                "Successfully expelled Spanish colonizers from New Mexico for twelve years ✓",
                "Led to permanent Spanish abandonment of all territories in the Southwest",
                "Was quickly suppressed with no lasting impact on Spanish colonial authority"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        {
            q: "The Great Awakening (1730s-1740s) challenged traditional authority by:",
            answers: [
                "Promoting Enlightenment rationalism and scientific inquiry over religious faith",
                "Emphasizing personal conversion experiences and emotional faith over formal church authority ✓",
                "Supporting established church hierarchies and reinforcing clerical power structures",
                "Advocating for the complete separation of religious practice from daily colonial life"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        {
            q: "Mercantilism was an economic system where:",
            answers: [
                "Colonies existed primarily to provide wealth to the mother country through regulated trade ✓",
                "Free market competition was encouraged between all nations to maximize prosperity",
                "Colonial economies operated independently with minimal interference from European powers",
                "Religious institutions controlled commercial activity and regulated international trade"
            ],
            correct: 0,
            type: "multiple_choice_question"
        },
        {
            q: "The Seven Years' War (1754-1763) resulted in:",
            answers: [
                "French expansion and consolidation of control throughout the North American interior",
                "British acquisition of French Canada and territorial dominance in North America ✓",
                "Spanish hegemony in the Caribbean and control of major Atlantic trade routes",
                "Colonial independence from European powers and establishment of self-governing territories"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        // Module 3 questions (7 questions)
        {
            q: "The slogan 'No taxation without representation' emerged in response to:",
            answers: [
                "The Boston Massacre and subsequent trials of British soldiers in colonial courts",
                "The Stamp Act of 1765 imposing direct taxes on colonists without colonial consent ✓",
                "The Declaration of Independence and its assertion of natural rights and self-governance",
                "The Constitutional Convention debates over representation in the new federal legislature"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        {
            q: "Thomas Paine's Common Sense (1776) was influential because it:",
            answers: [
                "Defended British constitutional monarchy as the best form of government for colonists",
                "Convinced many colonists to support independence through accessible arguments against monarchy ✓",
                "Criticized the proposed Constitution as giving too much power to the federal government",
                "Advocated for constitutional monarchy with George Washington as an American king"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        {
            q: "The Articles of Confederation:",
            answers: [
                "Created a strong central government with extensive powers including taxation and commerce regulation",
                "Established a weak central government with limited powers, reflecting fears of tyranny ✓",
                "Granted the federal government authority to raise armies and enforce laws in the states",
                "Provided for a powerful executive branch and national judiciary to enforce federal law"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        {
            q: "Shays' Rebellion (1786-1787) was significant because it:",
            answers: [
                "Successfully overthrew the Massachusetts government and established farmer control",
                "Demonstrated weaknesses of the Articles of Confederation and prompted the Constitutional Convention ✓",
                "Led to immediate federal abolition of slavery in response to economic grievances",
                "Ended the Revolutionary War by forcing British withdrawal from western forts"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        {
            q: "Anti-Federalists opposed the Constitution because they:",
            answers: [
                "Believed it did not create a sufficiently strong central government to manage the nation",
                "Feared it gave too much power to the central government and lacked a bill of rights ✓",
                "Supported restoration of British constitutional monarchy in the former colonies",
                "Wanted to eliminate all forms of taxation and government regulation of commerce"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        {
            q: "The Bill of Rights consists of:",
            answers: [
                "The Declaration of Independence and its enumeration of colonists' grievances against Britain",
                "The first ten amendments to the Constitution protecting individual liberties ✓",
                "The Articles of Confederation establishing the structure of the first national government",
                "The Federalist Papers explaining the philosophical foundations of the new Constitution"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        {
            q: "Alexander Hamilton's financial plan included:",
            answers: [
                "Eliminating all federal debt through rapid repayment and rejection of foreign loans",
                "Creating a national bank, assuming state debts, and establishing federal credit ✓",
                "Abolishing all federal taxes and relying entirely on tariffs for government revenue",
                "Returning to British currency standards and rejoining the imperial economic system"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        // Module 4 questions (6 questions)
        {
            q: "The Louisiana Purchase (1803):",
            answers: [
                "Tripled the territorial size of the United States and extended its reach to the Pacific",
                "Doubled the territorial size of the United States for fifteen million dollars ✓",
                "Added only the territory of Florida to the existing boundaries of the United States",
                "Resulted in a protracted military conflict between the United States and France"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        {
            q: "Eli Whitney's cotton gin:",
            answers: [
                "Made slavery economically obsolete and contributed to gradual emancipation in the South",
                "Made cotton production highly profitable and entrenched the institution of slavery ✓",
                "Was rejected by southern planters who preferred traditional methods of cotton processing",
                "Primarily benefited small farmers rather than large plantation owners with enslaved labor"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        {
            q: "Tecumseh's pan-Indian confederacy sought to:",
            answers: [
                "Form permanent military and economic alliances with American settlers moving westward",
                "Unite Native nations to resist American territorial expansion and preserve Indigenous lands ✓",
                "Establish exclusive trade monopolies between Indigenous nations and European powers",
                "Convert diverse Indigenous peoples to Christianity and adopt Euro-American agricultural practices"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        {
            q: "The War of 1812 was fought primarily between:",
            answers: [
                "The United States and France over commercial disputes and Caribbean territories",
                "The United States and Spain over control of Florida and southwestern territories",
                "The United States and Britain over impressment, trade, and territorial expansion ✓",
                "The United States and Mexico over Texas independence and western boundary disputes"
            ],
            correct: 2,
            type: "multiple_choice_question"
        },
        {
            q: "The Missouri Compromise (1820) addressed:",
            answers: [
                "Federal tariff regulations and their impact on manufacturing versus agricultural states",
                "The expansion of slavery into western territories and maintaining sectional balance ✓",
                "Native American treaty rights and policies regarding forced removal from eastern lands",
                "National banking policies and federal assumption of state debts from the War of 1812"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        {
            q: "The Market Revolution transformed the American economy by:",
            answers: [
                "Eliminating agricultural production in favor of concentrated industrial manufacturing",
                "Shifting from subsistence farming to commercial agriculture and wage labor systems ✓",
                "Ending all international trade relationships and creating a self-sufficient national economy",
                "Distributing wealth equally across all social classes and eliminating economic inequality"
            ],
            correct: 1,
            type: "multiple_choice_question"
        },
        {
            q: "The Erie Canal:",
            answers: [
                "Connected the Great Lakes region to the Atlantic Ocean via the Hudson River ✓",
                "Linked the Mississippi River system directly to the Gulf of Mexico ports",
                "Provided irrigation for southern cotton plantations throughout the Deep South",
                "Created a water route from the Ohio River to the Chesapeake Bay"
            ],
            correct: 0,
            type: "multiple_choice_question"
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
