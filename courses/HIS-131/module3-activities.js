// Module 3 Complete Activity Data - Revolution & New Nation (1763-1800)
const module3Activities = {
    la1: {
        questions: [
            { term: "Stamp Act", def: "1765 tax on printed materials that sparked colonial protests with cry 'No taxation without representation'" },
            { term: "Boston Massacre", def: "1770 clash where British soldiers killed 5 colonists; used as propaganda by Patriots" },
            { term: "Boston Tea Party", def: "1773 protest where colonists dumped British tea into harbor to resist Tea Act" },
            { term: "Lexington and Concord", def: "April 1775 battles that began the Revolutionary War with 'shot heard round the world'" },
            { term: "Common Sense", def: "1776 pamphlet by Thomas Paine that convinced colonists to support independence" },
            { term: "Declaration of Independence", def: "July 4, 1776 document asserting natural rights and right to revolution" },
            { term: "Articles of Confederation", def: "First U.S. constitution (1781-1789) creating weak central government" },
            { term: "Shays' Rebellion", def: "1786-1787 farmers' uprising that exposed weakness of Articles and led to Constitutional Convention" },
            { term: "Constitutional Convention", def: "1787 meeting in Philadelphia that created new Constitution with stronger federal government" },
            { term: "Federalists vs. Anti-Federalists", def: "Debate over Constitution: Federalists supported strong central government; Anti-Federalists feared tyranny" },
            { term: "The Federalist Papers", def: "Essays by Hamilton, Madison, Jay arguing for Constitution ratification" },
            { term: "Bill of Rights", def: "First 10 amendments to Constitution guaranteeing individual liberties (1791)" },
            { term: "Hamilton's Financial Plan", def: "Program to pay war debts, create national bank, and establish federal credit" },
            { term: "Whiskey Rebellion", def: "1794 farmers' protest against federal whiskey tax, put down by Washington to show federal power" },
            { term: "Jay's Treaty", def: "1795 agreement with Britain that settled some disputes but angered Republicans as too pro-British" }
        ]
    },
    la2: {
        questions: [
            { q: "Which 1776 pamphlet by Thomas Paine convinced many colonists to support independence?", answers: ["The Federalist Papers", "Common Sense ✓", "Rights of Man", "The Crisis"], correct: 1 },
            { q: "The Revolutionary War began with battles at:", answers: ["Bunker Hill", "Saratoga", "Lexington and Concord ✓", "Yorktown"], correct: 2 },
            { q: "What event convinced many that the Articles of Confederation were too weak?", answers: ["Boston Tea Party", "Shays' Rebellion ✓", "Stamp Act Crisis", "Whiskey Rebellion"], correct: 1 },
            { q: "The Constitutional Convention took place in which year?", answers: ["1776", "1781", "1787 ✓", "1791"], correct: 2 },
            { q: "Who wrote most of the Federalist Papers with James Madison and John Jay?", answers: ["Thomas Jefferson", "George Washington", "Alexander Hamilton ✓", "Benjamin Franklin"], correct: 2 },
            { q: "The Bill of Rights consists of:", answers: ["The Declaration of Independence", "First 10 amendments to Constitution ✓", "Articles of Confederation", "Federalist Papers"], correct: 1 },
            { q: "Alexander Hamilton's financial plan included:", answers: ["Abolishing all federal taxes", "Creating a national bank ✓", "Refusing to pay war debts", "Eliminating state governments"], correct: 1 },
            { q: "The Whiskey Rebellion (1794) was a protest against:", answers: ["British tea taxes", "Federal whiskey tax ✓", "State property taxes", "Import tariffs"], correct: 1 },
            { q: "The decisive American victory at Yorktown occurred in:", answers: ["1776", "1777", "1781 ✓", "1783"], correct: 2 },
            { q: "Anti-Federalists opposed the Constitution primarily because they:", answers: ["Wanted stronger federal government", "Feared tyranny and wanted Bill of Rights ✓", "Supported monarchy", "Opposed state governments"], correct: 1 }
        ]
    },
    la3: {
        timelineBuilder: {
            title: "Timeline Builder: Road to Revolution (1763-1800)",
            instructions: "Sort 12 events chronologically from earliest to latest.",
            events: [
                { event: "Treaty of Paris ends Seven Years' War; Britain gains Canada", date: "1763", order: 1 },
                { event: "Stamp Act passed; colonists protest 'no taxation without representation'", date: "1765", order: 2 },
                { event: "Boston Massacre: British soldiers kill 5 colonists", date: "1770", order: 3 },
                { event: "Boston Tea Party: colonists dump tea to protest Tea Act", date: "1773", order: 4 },
                { event: "Battles of Lexington and Concord begin Revolutionary War", date: "April 1775", order: 5 },
                { event: "Thomas Paine publishes Common Sense", date: "January 1776", order: 6 },
                { event: "Declaration of Independence adopted", date: "July 4, 1776", order: 7 },
                { event: "Articles of Confederation ratified as first U.S. constitution", date: "1781", order: 8 },
                { event: "Shays' Rebellion exposes weakness of federal government", date: "1786-1787", order: 9 },
                { event: "Constitutional Convention drafts new Constitution", date: "1787", order: 10 },
                { event: "Bill of Rights ratified as first 10 amendments", date: "1791", order: 11 },
                { event: "Whiskey Rebellion tests federal power under Constitution", date: "1794", order: 12 }
            ]
        },
        comparisonActivity: {
            instructions: "Compare Federalist vs. Anti-Federalist positions on the Constitution:",
            regions: ["Federalist Position", "Anti-Federalist Position"],
            characteristics: [
                { text: "Supported strong central government", answer: "Federalist Position" },
                { text: "Feared tyranny from centralized power", answer: "Anti-Federalist Position" },
                { text: "Believed large republic could protect liberty", answer: "Federalist Position" },
                { text: "Wanted Bill of Rights to protect individual liberties", answer: "Anti-Federalist Position" },
                { text: "Thought Constitution gave too much power to President", answer: "Anti-Federalist Position" },
                { text: "Argued Constitution needed to replace weak Articles", answer: "Federalist Position" },
                { text: "Preferred state sovereignty over federal power", answer: "Anti-Federalist Position" },
                { text: "Wrote The Federalist Papers defending Constitution", answer: "Federalist Position" },
                { text: "Opposed Constitution without individual rights protections", answer: "Anti-Federalist Position" },
                { text: "Believed Constitution balanced state and federal power", answer: "Federalist Position" }
            ]
        }
    },
    la4: {
        dataAnalysis: {
            title: "Data Analysis: Election of 1800",
            instructions: "Analyze the electoral map and vote data to answer questions about the first peaceful transfer of power between parties.",
            chartData: {
                type: "bar",
                title: "Electoral Votes: Election of 1800",
                candidates: [
                    { name: "Thomas Jefferson (Democratic-Republican)", votes: 73, color: "#d63031" },
                    { name: "Aaron Burr (Democratic-Republican)", votes: 73, color: "#e17055" },
                    { name: "John Adams (Federalist)", votes: 65, color: "#0984e3" },
                    { name: "Charles C. Pinckney (Federalist)", votes: 64, color: "#74b9ff" },
                    { name: "John Jay (Federalist)", votes: 1, color: "#dfe6e9" }
                ]
            },
            regionalData: {
                title: "Regional Voting Patterns",
                regions: [
                    { region: "New England", federalist: "Strong", republican: "Weak" },
                    { region: "Middle States", federalist: "Mixed", republican: "Mixed" },
                    { region: "South", federalist: "Weak", republican: "Strong" },
                    { region: "West (KY, TN)", federalist: "Very Weak", republican: "Very Strong" }
                ]
            },
            questions: [
                { q: "Why did Jefferson and Burr receive the same number of electoral votes?", a: "Constitution didn't distinguish between President and VP; electors voted for two people" },
                { q: "Which region gave strongest support to Federalists?", a: "New England" },
                { q: "Which region gave strongest support to Democratic-Republicans?", a: "South and Western states (KY, TN)" },
                { q: "What constitutional problem did this election expose?", a: "Need to separate President and VP voting (led to 12th Amendment in 1804)" },
                { q: "How was the tie between Jefferson and Burr resolved?", a: "House of Representatives chose Jefferson after 36 ballots; Hamilton's influence helped" },
                { q: "Why is this election called the 'Revolution of 1800'?", a: "First peaceful transfer of power between opposing political parties in U.S. history" },
                { q: "What does the regional pattern reveal about political divisions?", a: "North-South divide with commercial North supporting Federalists, agrarian South supporting Republicans" },
                { q: "How many total electoral votes were cast?", a: "276 total (138 electors × 2 votes each)" }
            ]
        }
    }
};

// Module 3 Quiz (10 questions covering Revolution & New Nation)
const module3Quiz = {
    questions: [
        {
            q: "The phrase 'No taxation without representation' emerged in response to:",
            answers: [
                "The Boston Massacre",
                "The Stamp Act of 1765 ✓",
                "The Declaration of Independence",
                "The Tea Act"
            ],
            correct: 1
        },
        {
            q: "Thomas Paine's Common Sense (1776) was significant because it:",
            answers: [
                "Argued for reconciliation with Britain",
                "Convinced many colonists to support independence ✓",
                "Defended the Articles of Confederation",
                "Opposed the Constitution"
            ],
            correct: 1
        },
        {
            q: "Which battle is considered the turning point of the Revolutionary War because it convinced France to ally with America?",
            answers: [
                "Lexington and Concord",
                "Bunker Hill",
                "Saratoga ✓",
                "Yorktown"
            ],
            correct: 2
        },
        {
            q: "The Articles of Confederation created a weak central government primarily because the Founders:",
            answers: [
                "Wanted to preserve state sovereignty and feared centralized tyranny ✓",
                "Copied the British parliamentary system",
                "Believed in monarchy",
                "Wanted to emulate French government"
            ],
            correct: 0
        },
        {
            q: "Shays' Rebellion (1786-1787) was important because it:",
            answers: [
                "Successfully overthrew the Massachusetts government",
                "Demonstrated the weakness of the Articles and prompted the Constitutional Convention ✓",
                "Led to the Bill of Rights",
                "Ended the Revolutionary War"
            ],
            correct: 1
        },
        {
            q: "The Great Compromise at the Constitutional Convention resolved conflict between large and small states by:",
            answers: [
                "Giving equal representation to all states",
                "Creating a bicameral legislature with proportional and equal representation ✓",
                "Eliminating state governments",
                "Allowing only large states to vote"
            ],
            correct: 1
        },
        {
            q: "Anti-Federalists opposed ratification of the Constitution because they:",
            answers: [
                "Wanted a stronger federal government",
                "Feared it gave too much power to the central government and lacked a bill of rights ✓",
                "Supported British rule",
                "Opposed all forms of government"
            ],
            correct: 1
        },
        {
            q: "The Bill of Rights was added to the Constitution to:",
            answers: [
                "Strengthen federal power",
                "Address Anti-Federalist concerns by protecting individual liberties ✓",
                "Abolish slavery",
                "Establish the Supreme Court"
            ],
            correct: 1
        },
        {
            q: "Alexander Hamilton's financial plan aimed to:",
            answers: [
                "Eliminate all federal taxes and debts",
                "Establish federal credit, assume state debts, and create a national bank ✓",
                "Return power to state governments",
                "Prohibit interstate commerce"
            ],
            correct: 1
        },
        {
            q: "The Whiskey Rebellion (1794) was significant because:",
            answers: [
                "It successfully eliminated the whiskey tax",
                "Washington's military response demonstrated federal authority under the new Constitution ✓",
                "It led to repeal of the Constitution",
                "It started the Revolutionary War"
            ],
            correct: 1
        }
    ]
};

// Module 3 Project Checkpoint: Piece #3 - Revolutionary Voice (100 points GRADED)
const module3Project = {
    title: "Module 3 Project Checkpoint: Piece #3 - Revolutionary Voice (100 points)",
    instructions: `**Module Theme**: Tipping Point (1763-1800)
**Inquiry Question**: What makes something revolutionary?

**This checkpoint is GRADED and submitted to Canvas**

---

Create a piece exploring revolutionary change and "tipping point" moments when change became irreversible.

### **CHOOSE ONE OPTION**:

**OPTION 1: Competing Visions Poster**

Create a visual showing 3-4 different groups' visions of "revolutionary America" with evidence

**Choose 3-4 Different Perspectives** (analyze, don't roleplay):
- Patriots (which type? Elite merchants? Small farmers? Urban artisans?)
- Loyalists (why did ~20% remain loyal?)
- Indigenous nations (Haudenosaunee, Cherokee, etc. - how did Revolution affect them?)
- Women (Abigail Adams, Republican Motherhood - what changes did they seek?)
- Free Black Americans (petitions for freedom, military service)
- Analysis of enslaved people's experiences using PRIMARY SOURCES (letters, petitions, freedom suits)

**Requirements**:
- Present 3-4 perspectives using PRIMARY SOURCE EVIDENCE (quotes from documents, petitions, letters)
- For each perspective: What was "revolutionary"? (liberation? threat? opportunity? broken promise?)
- Show competing visions: Did Revolution create ONE America or multiple Americas?
- Include images, symbols, visual elements
- **Reflection (150-200 words)**: Did the Revolution create one vision or competing visions? Reference YOUR poster evidence.

**Tools**: PowerPoint, Google Slides, Canva, poster format (digital or photographed)

**CULTURALLY SENSITIVE APPROACH**: Use actual historical documents and evidence to analyze experiences, rather than roleplaying marginalized identities.

---

**OPTION 2: Revolutionary Tipping Points Timeline**

Create a visual timeline showing when revolutionary change became irreversible

**Identify 3-5 Tipping Point Moments** (1763-1800):
- When did protest become rebellion? (Lexington & Concord?)
- When did rebellion become revolution? (Common Sense? Declaration?)
- When did revolution become government? (Constitutional ratification?)
- When did competing visions get institutionalized? (Bill of Rights? Hamilton's financial plan?)

**Requirements**:
- Show 3-5 key "tipping points" where there was no turning back
- For each: What changed? Why irreversible? Who gained? Who lost?
- Include competing visions at each turning point
- Visual elements: timeline format, images, color coding
- **Reflection (150-200 words)**: What makes change "revolutionary" vs. just change? When does a tipping point occur? Reference YOUR timeline.

**Tools**: PowerPoint, Google Slides, timeline generator, any visual format

---

**Submission**:
- Save as: LastName_FirstName_Piece3_RevolutionaryVoice.pptx (or PDF)
- Upload to Canvas Module 3
- Due: End of Module 3

**Grading**: 100 points - Historical accuracy, analysis depth, use of evidence, creativity

**Save your work - you'll include it in your Module 7 Final Portfolio!**`,
    rubric: "Project Checkpoint Rubric (100 points)"
};
