// HIS-132 Course Rubrics
// Detailed scoring guides for major assessments

const rubricData = {
    rubric1: {
        title: "Rubric 1: Project Checkpoints (50-100 points)",
        usage: "Used for Modules 1, 3, 5 Portfolio Checkpoints",
        criteria: [
            {
                name: "Historical Accuracy & Evidence",
                excellent: "Uses specific, accurate historical evidence from The American Yawp and module content. Facts, dates, and contexts are correct. (23-25 points)",
                proficient: "Uses mostly accurate evidence with minor errors. Most facts and contexts are correct. (20-22 points)",
                developing: "Uses limited evidence or contains factual errors. Some inaccuracies in facts or dates. (17-19 points)",
                needsWork: "Missing evidence or significant factual errors. Inaccurate historical information. (0-16 points)"
            },
            {
                name: "Analysis & Argumentation",
                excellent: "Demonstrates sophisticated analysis. Makes clear argument supported by evidence. Explains significance of events. Goes beyond description to interpretation. (23-25 points)",
                proficient: "Shows solid analysis. Makes argument with supporting evidence. Explains some significance. Mostly interpretation. (20-22 points)",
                developing: "Limited analysis. Weak argument or insufficient evidence. Minimal explanation of significance. Mostly descriptive. (17-19 points)",
                needsWork: "No clear analysis. No argument or unsupported claims. No explanation of significance. Only summary/description. (0-16 points)"
            },
            {
                name: "Multiple Perspectives",
                excellent: "Examines multiple perspectives (race, class, gender, etc.). Addresses complexity and contradictions. Recognizes diverse experiences. (18-20 points)",
                proficient: "Considers some different perspectives. Acknowledges some complexity. Recognizes some diverse experiences. (16-17 points)",
                developing: "Limited perspectives. Minimal attention to complexity. Limited recognition of diversity. (14-15 points)",
                needsWork: "Single perspective only. Ignores complexity. No recognition of diverse experiences. (0-13 points)"
            },
            {
                name: "Organization & Presentation",
                excellent: "Well-organized with clear structure. Professional appearance. Correct grammar, spelling, punctuation. Citations included. (18-20 points)",
                proficient: "Organized with logical structure. Good appearance. Minor grammar/spelling errors. Most citations included. (16-17 points)",
                developing: "Some organization. Acceptable appearance. Several grammar/spelling errors. Missing some citations. (14-15 points)",
                needsWork: "Poor organization. Unprofessional appearance. Many grammar/spelling errors. No citations. (0-13 points)"
            },
            {
                name: "Connection to Portfolio Theme",
                excellent: "Clearly connects to 'What is America?' question. Builds on previous work. Shows intellectual growth. (9-10 points)",
                proficient: "Connects to portfolio theme. Some building on previous work. Some evidence of growth. (8 points)",
                developing: "Weak connection to theme. Limited connection to previous work. Little growth shown. (7 points)",
                needsWork: "No connection to portfolio theme. No building on previous work. No growth evident. (0-6 points)"
            }
        ]
    },

    rubric2: {
        title: "Rubric 2: Discussion Boards (100 points)",
        usage: "Used for Modules 2, 4, 6, 8 Discussion Boards",
        criteria: [
            {
                name: "Initial Post: Historical Analysis",
                excellent: "Demonstrates sophisticated analysis of historical question. Uses specific evidence from readings. Makes clear argument. Addresses complexity. 300-400+ words. (23-25 points)",
                proficient: "Shows solid analysis. Uses evidence from readings. Makes argument. Addresses some complexity. Meets word count. (20-22 points)",
                developing: "Limited analysis. Limited evidence. Weak argument. Minimal complexity. Below word count or off-topic. (17-19 points)",
                needsWork: "No analysis. No evidence. No argument. Ignores complexity. Far below word count or completely off-topic. (0-16 points)"
            },
            {
                name: "Initial Post: Multiple Perspectives",
                excellent: "Examines multiple perspectives thoroughly. Considers race, class, gender, etc. Recognizes whose voices are included/excluded. (14-15 points)",
                proficient: "Considers some perspectives. Acknowledges some diversity. Some recognition of inclusion/exclusion. (12-13 points)",
                developing: "Limited perspectives. Minimal diversity considered. Little attention to inclusion/exclusion. (10-11 points)",
                needsWork: "Single perspective only. No diversity. Ignores inclusion/exclusion. (0-9 points)"
            },
            {
                name: "Portfolio Piece (if applicable)",
                excellent: "Creative, thoughtful portfolio piece with specific evidence. Clear connection to discussion topic. Professional presentation. (23-25 points)",
                proficient: "Good portfolio piece with evidence. Connects to topic. Good presentation. (20-22 points)",
                developing: "Basic portfolio piece. Limited evidence. Weak connection. Acceptable presentation. (17-19 points)",
                needsWork: "Minimal effort portfolio piece. No evidence. No connection. Poor presentation. (0-16 points)"
            },
            {
                name: "Peer Response #1",
                excellent: "Substantive response building on classmate's ideas. Adds new evidence or perspectives. Asks thoughtful questions. Respectful tone. 100-150+ words. (14-15 points)",
                proficient: "Good response engaging with ideas. Some new contribution. Respectful. Meets word count. (12-13 points)",
                developing: "Basic response. Limited engagement. Minimal contribution. Below word count. (10-11 points)",
                needsWork: "Superficial response ('I agree'). No engagement. No contribution. Far below word count. (0-9 points)"
            },
            {
                name: "Peer Response #2",
                excellent: "Substantive response building on classmate's ideas. Adds new evidence or perspectives. Asks thoughtful questions. Respectful tone. 100-150+ words. (14-15 points)",
                proficient: "Good response engaging with ideas. Some new contribution. Respectful. Meets word count. (12-13 points)",
                developing: "Basic response. Limited engagement. Minimal contribution. Below word count. (10-11 points)",
                needsWork: "Superficial response ('I agree'). No engagement. No contribution. Far below word count. (0-9 points)"
            },
            {
                name: "Timeliness & Professionalism",
                excellent: "Posted on time. Professional tone throughout. Respectful of diverse viewpoints. (9-10 points)",
                proficient: "Posted on time or slightly late. Mostly professional. Generally respectful. (8 points)",
                developing: "Posted late. Some unprofessional language. Occasionally disrespectful. (7 points)",
                needsWork: "Posted very late or not at all. Unprofessional. Disrespectful. (0-6 points)"
            }
        ]
    },

    rubric3: {
        title: "Rubric 3: Final Portfolio (200 points)",
        usage: "Used for Module 7 Final Portfolio Project",
        criteria: [
            {
                name: "Inclusion of All Portfolio Pieces",
                excellent: "All 6 pieces included (Modules 1-6). Complete and polished. Initial definition included. (54-60 points)",
                proficient: "5-6 pieces included. Mostly complete. Initial definition included. (48-53 points)",
                developing: "4 pieces included. Some incomplete. Initial definition missing or incomplete. (42-47 points)",
                needsWork: "3 or fewer pieces. Many incomplete. No initial definition. (0-41 points)"
            },
            {
                name: "Synthesis Analysis: Historical Connections",
                excellent: "Identifies clear patterns across time periods. Makes sophisticated connections between eras. Traces themes from Reconstruction to contemporary America. Uses specific evidence from multiple modules. (27-30 points)",
                proficient: "Identifies some patterns. Makes connections between some eras. Traces some themes. Uses evidence from several modules. (24-26 points)",
                developing: "Limited patterns identified. Few connections made. Weak thematic tracing. Limited evidence. (21-23 points)",
                needsWork: "No patterns identified. No connections. No themes traced. No evidence. (0-20 points)"
            },
            {
                name: "Synthesis Analysis: Contested Visions of America",
                excellent: "Analyzes how different groups defined America differently. Examines whose visions prevailed and why. Addresses power dynamics and resistance. (27-30 points)",
                proficient: "Discusses some different visions. Examines some outcomes. Mentions power and resistance. (24-26 points)",
                developing: "Limited discussion of visions. Minimal examination of outcomes. Little attention to power/resistance. (21-23 points)",
                needsWork: "No discussion of different visions. No examination of outcomes. Ignores power/resistance. (0-20 points)"
            },
            {
                name: "Final Definition: Historical Evidence",
                excellent: "New definition incorporates specific evidence from 1865-present. Shows deep understanding of historical complexity. Acknowledges contradictions. Demonstrates intellectual growth. (36-40 points)",
                proficient: "Definition uses evidence from course. Shows understanding of complexity. Acknowledges some contradictions. Shows some growth. (32-35 points)",
                developing: "Definition uses limited evidence. Limited understanding of complexity. Few contradictions acknowledged. Minimal growth shown. (28-31 points)",
                needsWork: "Definition lacks evidence. No complexity acknowledged. No contradictions recognized. No growth demonstrated. (0-27 points)"
            },
            {
                name: "Final Definition: Comparison to Initial Definition",
                excellent: "Explicitly compares to initial definition. Clearly explains how thinking changed. Identifies specific learning moments. Reflects on intellectual journey. 300-400+ words. (18-20 points)",
                proficient: "Compares to initial definition. Explains some changes. Identifies learning. Some reflection. Meets word count. (16-17 points)",
                developing: "Weak comparison. Limited explanation of change. Few learning moments identified. Minimal reflection. Below word count. (14-15 points)",
                needsWork: "No comparison. No explanation of change. No learning identified. No reflection. Far below word count. (0-13 points)"
            },
            {
                name: "Overall Presentation & Organization",
                excellent: "Professional presentation (slides, document, or video). Clear organization. Visually appealing. Correct grammar/spelling. Complete citations. Meets format requirements. (18-20 points)",
                proficient: "Good presentation. Logical organization. Appealing. Minor grammar errors. Most citations. Meets most requirements. (16-17 points)",
                developing: "Acceptable presentation. Some organization. Basic appearance. Several grammar errors. Missing citations. Meets some requirements. (14-15 points)",
                needsWork: "Poor presentation. Disorganized. Unprofessional appearance. Many grammar errors. No citations. Doesn't meet requirements. (0-13 points)"
            }
        ]
    }
};
