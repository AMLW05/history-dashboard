// HUM-130 Assessment Rubrics
// Quality Matters aligned rubrics for all major assessments

const courseRubrics = {
    projectCheckpoints: {
        title: "Project Checkpoint Rubric",
        id: "RUBRIC_1_Project_Checkpoints",
        totalPoints: "50-100 points (varies by checkpoint)",
        description: "Students build a semester-long analysis of one modern myth (Star Wars, LOTR, Harry Potter, or Superhero universe) through mythological lens",
        criteria: [
            {
                criterion: "Mythological Analysis Depth",
                points: "30-40",
                excellent: "Demonstrates sophisticated understanding of mythological patterns, archetypes, and themes. Makes insightful connections between ancient and modern myths with specific, detailed examples. Uses course terminology accurately and effectively (archetype, monomyth, cosmogony, etc.).",
                proficient: "Shows solid understanding of mythological concepts. Makes clear connections with appropriate examples. Uses course terminology correctly.",
                developing: "Shows basic understanding but analysis lacks depth. Examples are general rather than specific. Limited use of course terminology.",
                unsatisfactory: "Minimal mythological analysis. Few or no connections to course concepts. Missing or incorrect use of terminology."
            },
            {
                criterion: "Specific Evidence & Examples",
                points: "20-30",
                excellent: "Provides abundant specific examples from chosen modern myth (character names, plot events, scenes, quotes). Cites ancient myths accurately for comparison. Every claim supported by evidence.",
                proficient: "Provides adequate specific examples. Most claims supported by evidence. Comparisons are clear.",
                developing: "Examples are general or vague. Some claims unsupported. Comparisons need more detail.",
                unsatisfactory: "Few specific examples. Claims largely unsupported. Vague or missing comparisons."
            },
            {
                criterion: "Critical Thinking & Insight",
                points: "15-20",
                excellent: "Goes beyond surface similarities to explain WHY patterns appear. Analyzes cultural significance and contemporary relevance. Offers original insights.",
                proficient: "Explains connections clearly. Discusses significance. Some original thinking evident.",
                developing: "Mostly describes rather than analyzes. Limited discussion of significance. Few original insights.",
                unsatisfactory: "Only surface-level description. No analysis of significance. Lacks original thought."
            },
            {
                criterion: "Organization & Clarity",
                points: "10",
                excellent: "Clear thesis/main idea. Logical organization. Smooth transitions. Easy to follow.",
                proficient: "Clear main idea. Generally well-organized. Mostly easy to follow.",
                developing: "Main idea unclear or weak. Organization somewhat confusing. Hard to follow at times.",
                unsatisfactory: "No clear thesis. Disorganized. Very difficult to follow."
            },
            {
                criterion: "Writing Quality & Mechanics",
                points: "5-10",
                excellent: "Academic prose. Free of grammatical errors. Proper citations if sources used. Meets length requirements.",
                proficient: "Clear writing. Minor grammatical errors. Adequate citations. Meets length.",
                developing: "Unclear writing at times. Several grammatical errors. Weak or missing citations. May not meet length.",
                unsatisfactory: "Poor writing quality. Many errors. No citations. Well below length requirement."
            }
        ],
        notes: "Checkpoints build toward final portfolio. Each checkpoint focuses on different aspect: origins/creation, character archetypes, comparative analysis, synthesis."
    },

    discussionBoards: {
        title: "Discussion Board Rubric",
        id: "RUBRIC_2_Discussion_Boards",
        totalPoints: "100 points",
        description: "Discussions foster collaborative exploration of mythological themes and allow students to share insights about their chosen modern myths",
        criteria: [
            {
                criterion: "Initial Post - Content & Analysis",
                points: "40",
                excellent: "Addresses all discussion questions thoroughly with specific examples from course materials and chosen modern myth. Demonstrates critical thinking and original insight. Makes clear connections to mythological concepts. 300-400 words.",
                proficient: "Addresses discussion questions with adequate detail. Shows understanding of concepts. Includes examples. Makes connections. 250-350 words.",
                developing: "Addresses questions superficially. Limited examples or analysis. Weak connections to course concepts. 200-250 words.",
                unsatisfactory: "Minimal engagement with questions. No examples or analysis. Missing connections. Below 200 words or off-topic."
            },
            {
                criterion: "Use of Course Concepts",
                points: "20",
                excellent: "Expertly integrates mythological terminology and frameworks (Hero's Journey stages, archetypes, symbolic interpretation, etc.). Demonstrates mastery of course content.",
                proficient: "Uses course terminology correctly. Shows solid understanding of concepts.",
                developing: "Limited or incorrect use of terminology. Basic understanding only.",
                unsatisfactory: "No use of course concepts or terminology. No connection to course content."
            },
            {
                criterion: "Peer Responses (2 required)",
                points: "30",
                excellent: "Each response is substantive (100+ words). Engages meaningfully with classmate's ideas. Asks thoughtful questions or offers new perspectives. Builds on discussion rather than just agreeing. Respectful and collegial tone.",
                proficient: "Adequate responses (75-100 words each). Engages with classmate's ideas. Adds to conversation. Respectful.",
                developing: "Brief responses (50-75 words). Minimal engagement. Mostly agreement without adding substance. May lack respect.",
                unsatisfactory: "Very brief or missing responses. No real engagement. Off-topic or disrespectful."
            },
            {
                criterion: "Writing Quality",
                points: "10",
                excellent: "Clear, academic prose. Free of errors. Well-organized paragraphs. Professional tone.",
                proficient: "Clear writing. Minor errors. Organized. Appropriate tone.",
                developing: "Unclear at times. Several errors. Weak organization. Inconsistent tone.",
                unsatisfactory: "Poor writing. Many errors. Disorganized. Inappropriate tone."
            }
        ],
        notes: "Post initial response by Wednesday, peer responses by Sunday. Focus on building collaborative learning community."
    },

    finalProject: {
        title: "Final Portfolio Project Rubric",
        id: "RUBRIC_3_Final_Project",
        totalPoints: "200 points",
        description: "Comprehensive mythological analysis showcasing semester's learning through lens of one modern myth",
        criteria: [
            {
                criterion: "Hero's Journey Analysis",
                points: "40",
                excellent: "Complete, detailed mapping of all 12 Hero's Journey stages with specific scenes/events from chosen myth. Explains how each stage functions mythologically. Compares to classical hero examples. Demonstrates mastery of monomyth framework.",
                proficient: "Identifies all 12 stages with good examples. Explains most functions. Makes comparisons.",
                developing: "Identifies most stages but some are unclear or incorrect. Limited explanation of functions. Few comparisons.",
                unsatisfactory: "Missing stages or mostly incorrect. No explanations. No comparisons."
            },
            {
                criterion: "Archetype Analysis",
                points: "40",
                excellent: "Identifies and analyzes 5+ archetypes with specific character examples and behaviors. Draws insightful parallels to classical mythological figures. Explains symbolic significance. Shows deep understanding of Jungian archetypes.",
                proficient: "Identifies 5 archetypes with good examples. Makes clear parallels. Explains significance.",
                developing: "Identifies fewer than 5 archetypes or analysis is superficial. Weak parallels. Limited discussion of significance.",
                unsatisfactory: "Few archetypes identified. No analysis. No classical parallels."
            },
            {
                criterion: "Comparative Mythology Essay",
                points: "50",
                excellent: "Sophisticated 1000-1500 word essay with clear thesis. Identifies and analyzes multiple mythological sources (Greek, Norse, Celtic, Eastern, etc.). Explains how modern myth adapts these for contemporary relevance. Discusses enduring power of mythological storytelling. Well-organized with strong transitions.",
                proficient: "Clear 800-1000 word essay with thesis. Identifies mythological sources. Discusses contemporary relevance and enduring appeal. Well-organized.",
                developing: "Brief essay (600-800 words) or unclear thesis. Limited discussion of sources or relevance. Weak organization.",
                unsatisfactory: "Very brief (under 600 words) or no clear thesis. Minimal analysis. Poor organization."
            },
            {
                criterion: "Synthesis & Original Insight",
                points: "30",
                excellent: "Demonstrates how all elements (Hero's Journey, archetypes, mythological sources) work together. Offers original insights about why this modern myth resonates. Connects to broader cultural significance. Shows sophisticated mythological thinking.",
                proficient: "Shows connections between elements. Offers some original thinking. Discusses cultural significance.",
                developing: "Limited synthesis. Few original insights. Minimal discussion of cultural impact.",
                unsatisfactory: "No synthesis. No original thinking. No cultural discussion."
            },
            {
                criterion: "Evidence & Support",
                points: "20",
                excellent: "Abundant specific examples throughout all sections. Quotes dialogue, describes scenes, names characters. Cites ancient myths accurately. Every claim supported by evidence.",
                proficient: "Good specific examples. Most claims supported. Adequate citations.",
                developing: "Some vague examples. Some unsupported claims. Weak citations.",
                unsatisfactory: "Few examples. Claims largely unsupported. No citations."
            },
            {
                criterion: "Presentation & Professionalism",
                points: "20",
                excellent: "Polished, professional document. Clear formatting. No grammatical errors. Proper academic citations. Includes all required sections. Meets or exceeds length requirements.",
                proficient: "Professional presentation. Minor formatting issues. Few errors. Proper citations. Meets requirements.",
                developing: "Adequate presentation. Some formatting problems. Several errors. Weak citations. May not fully meet requirements.",
                unsatisfactory: "Poor presentation. Many errors. Missing citations. Does not meet requirements."
            }
        ],
        notes: "Final project synthesizes all checkpoint work into comprehensive portfolio. Represents culmination of semester's mythological analysis."
    }
};

// Function to render rubrics (called by app.js)
function renderRubrics() {
    const container = document.getElementById('rubrics-container');
    if (!container) return;

    let html = '<div class="section-title">📊 Assessment Rubrics</div>';
    html += '<p class="instruction-text">Detailed grading criteria for all major assignments in HUM-130</p>';

    // Project Checkpoints Rubric
    html += buildRubricSection(courseRubrics.projectCheckpoints);

    // Discussion Boards Rubric
    html += buildRubricSection(courseRubrics.discussionBoards);

    // Final Project Rubric
    html += buildRubricSection(courseRubrics.finalProject);

    container.innerHTML = html;
}

function buildRubricSection(rubric) {
    let html = `<div class="rubric-section">
        <h2 class="rubric-title">📋 ${rubric.title}</h2>
        <div class="rubric-meta">
            <span class="rubric-points"><strong>Points:</strong> ${rubric.totalPoints}</span>
        </div>
        <p class="rubric-description">${rubric.description}</p>

        <table class="rubric-table">
            <thead>
                <tr>
                    <th style="width: 20%">Criterion</th>
                    <th style="width: 10%">Points</th>
                    <th style="width: 17.5%">Excellent</th>
                    <th style="width: 17.5%">Proficient</th>
                    <th style="width: 17.5%">Developing</th>
                    <th style="width: 17.5%">Unsatisfactory</th>
                </tr>
            </thead>
            <tbody>`;

    rubric.criteria.forEach(c => {
        html += `<tr>
            <td><strong>${c.criterion}</strong></td>
            <td class="points-cell">${c.points}</td>
            <td class="excellent-cell">${c.excellent}</td>
            <td class="proficient-cell">${c.proficient}</td>
            <td class="developing-cell">${c.developing}</td>
            <td class="unsatisfactory-cell">${c.unsatisfactory}</td>
        </tr>`;
    });

    html += `</tbody>
        </table>
        <div class="rubric-notes">
            <strong>📝 Notes:</strong> ${rubric.notes}
        </div>
    </div>`;

    return html;
}

// Add CSS for rubrics
const rubricStyles = `
.rubric-section {
    background: white;
    border: 2px solid var(--accent-light);
    border-radius: 12px;
    padding: 30px;
    margin-bottom: 40px;
    box-shadow: 0 4px 12px rgba(139, 69, 19, 0.1);
}

.rubric-title {
    font-size: 1.8em;
    color: var(--accent);
    margin-bottom: 15px;
}

.rubric-meta {
    margin-bottom: 15px;
    font-size: 1.1em;
}

.rubric-points {
    color: var(--ink);
    padding: 8px 12px;
    background: var(--gray-light);
    border-radius: 6px;
    display: inline-block;
}

.rubric-description {
    font-size: 1.05em;
    line-height: 1.7;
    margin-bottom: 25px;
    padding: 15px;
    background: var(--gray-light);
    border-left: 4px solid var(--accent);
    border-radius: 4px;
}

.rubric-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 0.95em;
}

.rubric-table th {
    background: var(--accent);
    color: white;
    padding: 12px 10px;
    text-align: left;
    font-weight: 600;
    border: 1px solid var(--accent);
}

.rubric-table td {
    padding: 12px 10px;
    border: 1px solid var(--accent-light);
    vertical-align: top;
    line-height: 1.6;
}

.rubric-table tbody tr:nth-child(even) {
    background: var(--gray-light);
}

.points-cell {
    font-weight: bold;
    color: var(--accent);
    text-align: center;
    font-size: 1.1em;
}

.excellent-cell {
    background: #d4edda;
}

.proficient-cell {
    background: #fff3cd;
}

.developing-cell {
    background: #f8d7da;
}

.unsatisfactory-cell {
    background: #f5c6cb;
}

.rubric-notes {
    margin-top: 20px;
    padding: 15px;
    background: var(--gray-light);
    border-radius: 6px;
    font-style: italic;
    line-height: 1.7;
}
`;

// Inject styles
const styleTag = document.createElement('style');
styleTag.textContent = rubricStyles;
document.head.appendChild(styleTag);
