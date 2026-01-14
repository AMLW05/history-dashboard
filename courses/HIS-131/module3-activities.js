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
    },
    la4: {
        title: "LA4: Constitutional Categorization",
        format: "Categorization Activity",
        instructions: "Categorize each power or feature as belonging to: Articles of Confederation, U.S. Constitution, or Both.",
        items: [
            { text: "Unicameral (one-house) legislature", answer: "Articles of Confederation" },
            { text: "Bicameral (two-house) legislature", answer: "U.S. Constitution" },
            { text: "No executive branch", answer: "Articles of Confederation" },
            { text: "President as chief executive", answer: "U.S. Constitution" },
            { text: "No federal court system", answer: "Articles of Confederation" },
            { text: "Supreme Court and federal judiciary", answer: "U.S. Constitution" },
            { text: "Each state has one vote", answer: "Articles of Confederation" },
            { text: "Representation based on population (House)", answer: "U.S. Constitution" },
            { text: "Cannot tax citizens directly", answer: "Articles of Confederation" },
            { text: "Federal government can levy taxes", answer: "U.S. Constitution" },
            { text: "Cannot regulate interstate commerce", answer: "Articles of Confederation" },
            { text: "Congress regulates interstate commerce", answer: "U.S. Constitution" },
            { text: "Requires unanimous consent to amend", answer: "Articles of Confederation" },
            { text: "Requires 2/3 Congress + 3/4 states to amend", answer: "U.S. Constitution" },
            { text: "Created during Revolutionary War era", answer: "Both" },
            { text: "Aimed to balance state and federal power", answer: "Both" }
        ]
    }
};

const module3Checkpoint = {
    title: "Project Checkpoint 2: Research Progress",
    instructions: `Submit a 2-3 page update on your final project research. This checkpoint helps you stay on track and get feedback before Module 7.

**Required Components:**

1. **Thesis Statement** (1 paragraph)
   - State your historical argument clearly
   - What specific question are you answering?
   - Example: "The Election of 1800 represented not just a transfer of power, but a fundamental redefinition of federal authority that revealed deep sectional divisions threatening national unity."

2. **Primary Source Analysis** (1-2 pages)
   - Analyze at least ONE primary source in depth
   - What is this source? (letter, speech, image, data, etc.)
   - Who created it, when, and why?
   - What does it reveal about your topic?
   - How does it support or complicate your thesis?

3. **Secondary Source Integration** (1/2 - 1 page)
   - Summarize arguments from at least 2 scholarly secondary sources
   - How do historians interpret your topic differently?
   - Where does your argument fit in these debates?

4. **Research Plan** (1/2 page)
   - What additional sources do you still need?
   - What questions remain unanswered?
   - What challenges have you encountered?

**Grading**: This checkpoint uses Rubric 1 (Project Checkpoints - 50 points)
- Topic/Source Selection & Clarity: 15 pts
- Historical Context & Understanding: 15 pts
- Research Planning & Sources: 15 pts
- Writing Mechanics & Format: 5 pts`,
    rubric: "RUBRIC_1_Project_Checkpoints",
    scaffolding: {
        thesisTemplates: [
            "While most historians argue [common interpretation], analysis of [your sources] reveals that [your argument].",
            "The [event/topic] represented not merely [simple interpretation], but rather [complex argument] because [reasons].",
            "[Topic] fundamentally challenged [existing system] by [specific ways], ultimately leading to [consequences]."
        ],
        primarySourceQuestions: [
            "Who created this source and what was their perspective/bias?",
            "What was the historical context when this was created?",
            "What does the SOURCE SAY vs. what does it REVEAL (read between the lines)?",
            "What is missing from this source? Whose voices aren't included?",
            "How does this source connect to broader historical themes?"
        ],
        commonMistakes: [
            "❌ Thesis too broad: 'The Revolution changed America'",
            "✅ Thesis specific: 'The Revolution's rhetoric of liberty exposed contradictions in slavery, leading southern planters to develop new justifications for racial hierarchy by 1800'",
            "❌ Just summarizing sources without analysis",
            "✅ Analyzing what sources reveal about historical change",
            "❌ Using only textbook or general websites",
            "✅ Using primary sources and scholarly articles"
        ]
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
