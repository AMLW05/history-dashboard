// HUM-130 Open Educational Resources
// Complete library of FREE, legitimate academic resources for mythology study

const oerResources = {
    primaryTexts: {
        title: "📜 Primary Mythological Texts (Free Online)",
        icon: "📜",
        resources: [
            {
                title: "Sacred Texts Archive - Mythology Section",
                url: "https://www.sacred-texts.com/index.htm",
                description: "Massive collection of world mythology primary sources: Greek, Norse, Celtic, Egyptian, Mesopotamian, Hindu, and more. Full texts freely available.",
                topics: ["All Modules", "Ancient Myths"]
            },
            {
                title: "The Internet Classics Archive (MIT)",
                url: "http://classics.mit.edu/",
                description: "Complete Greek and Roman texts: Homer's Odyssey and Iliad, Ovid's Metamorphoses, Virgil's Aeneid, Greek tragedies.",
                topics: ["Module 2: Epic Tales", "Classical Heroes"]
            },
            {
                title: "Beowulf - Modern Translation (multiple versions)",
                url: "https://www.poetryfoundation.org/poems/43521/beowulf-old-english-version",
                description: "Anglo-Saxon epic in Old English with modern translations available.",
                topics: ["Module 2: Hero's Journey"]
            },
            {
                title: "Epic of Gilgamesh - Full Translation",
                url: "https://www.ancienttexts.org/library/mesopotamian/gilgamesh/",
                description: "Complete Mesopotamian epic, oldest recorded hero's journey narrative.",
                topics: ["Module 2: Epic Heroes"]
            },
            {
                title: "Bhagavad Gita Online",
                url: "https://www.holy-bhagavad-gita.org/",
                description: "Hindu sacred text with commentary, relevant for studying Rama and Hindu mythology.",
                topics: ["Module 2", "World Mythology"]
            },
            {
                title: "Edda (Prose and Poetic) - Norse Mythology",
                url: "https://www.sacred-texts.com/neu/index.htm",
                description: "Complete Norse mythological texts including Völuspá (source of dwarf names Tolkien used).",
                topics: ["Module 4: Tolkien & Norse Myths"]
            },
            {
                title: "Kalevala - Finnish National Epic",
                url: "https://www.sacred-texts.com/neu/kveng/index.htm",
                description: "Finnish epic that heavily influenced Tolkien's Silmarillion and storytelling style.",
                topics: ["Module 4: Tolkien Sources"]
            },
            {
                title: "Popol Vuh - Maya Creation Myth",
                url: "https://www.sacred-texts.com/nam/maya/pvgm/index.htm",
                description: "Maya creation story and hero twins narrative.",
                topics: ["Module 1: Creation Myths"]
            }
        ]
    },

    openTextbooks: {
        title: "📚 Open Textbooks & Comprehensive Guides",
        icon: "📚",
        resources: [
            {
                title: "World Mythology Open Textbook",
                url: "https://open.umn.edu/opentextbooks/",
                description: "University of Minnesota's open textbook library includes mythology texts. Search for 'mythology' or 'folklore'.",
                topics: ["All Modules", "General Reference"]
            },
            {
                title: "Mythology Unbound: An Online Textbook",
                url: "https://blogs.baruch.cuny.edu/mythologyunbound/",
                description: "Free online mythology textbook from CUNY covering world mythologies with modern interpretations.",
                topics: ["All Modules"]
            },
            {
                title: "Classical Mythology (Open Course)",
                url: "https://ocw.mit.edu/courses/21h-301-the-ancient-world-greece-spring-2004/",
                description: "MIT OpenCourseWare - complete course materials on Greek and Roman mythology.",
                topics: ["Module 2", "Classical Myths"]
            },
            {
                title: "American Yawp (for context)",
                url: "https://www.americanyawp.com/",
                description: "Free US history textbook - useful for understanding cultural context of American mythmaking.",
                topics: ["Module 7: Pop Culture Context"]
            }
        ]
    },

    modernMythAnalysis: {
        title: "🎬 Modern Myth Analysis Resources",
        icon: "🎬",
        resources: [
            {
                title: "Joseph Campbell - The Power of Myth (PBS Series)",
                url: "https://billmoyers.com/series/joseph-campbell-and-the-power-of-myth-1988/",
                description: "Bill Moyers interviews Campbell about Hero's Journey, Star Wars, and modern mythology. Some clips available free.",
                topics: ["Module 2-3", "Hero's Journey"]
            },
            {
                title: "The Hero's Journey - Detailed Explanation",
                url: "https://www.movieoutline.com/articles/the-hero-journey-mythic-structure-of-joseph-campbell-monomyth.html",
                description: "Comprehensive breakdown of all 12 stages with examples from modern films.",
                topics: ["Module 2-3", "Narrative Structure"]
            },
            {
                title: "Tolkien Gateway - Free Tolkien Encyclopedia",
                url: "http://tolkiengateway.net/",
                description: "Comprehensive wiki covering all aspects of Tolkien's Legendarium, mythology sources, and analysis.",
                topics: ["Module 4: Tolkien"]
            },
            {
                title: "The Tolkien Society - Free Resources",
                url: "https://www.tolkiensociety.org/",
                description: "Official society with articles, essays, and educational resources about Tolkien's work.",
                topics: ["Module 4"]
            },
            {
                title: "Harry Potter Lexicon",
                url: "https://www.hp-lexicon.org/",
                description: "Comprehensive encyclopedia of Harry Potter universe with mythology connections noted.",
                topics: ["Module 5: Harry Potter"]
            },
            {
                title: "Marvel Database Wiki",
                url: "https://marvel.fandom.com/wiki/Marvel_Database",
                description: "Complete Marvel character information including mythological parallels and inspirations.",
                topics: ["Module 6: Superheroes"]
            },
            {
                title: "DC Database Wiki",
                url: "https://dc.fandom.com/wiki/DC_Comics_Database",
                description: "Comprehensive DC Comics information including character origins and mythological connections.",
                topics: ["Module 6"]
            }
        ]
    },

    videoLectures: {
        title: "🎥 Free Video Lectures & Courses",
        icon: "🎥",
        resources: [
            {
                title: "Crash Course Mythology",
                url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNCG9Vq7vdvJytS-F-xGi7_",
                description: "40-episode series covering world mythology with engaging animations. Excellent overview.",
                topics: ["All Modules", "Recommended Viewing"]
            },
            {
                title: "Yale Open Courses - Ancient Greek Literature",
                url: "https://oyc.yale.edu/classics/clcv-205",
                description: "Full Yale course on Greek epic and tragedy, free video lectures.",
                topics: ["Module 2: Classical Heroes"]
            },
            {
                title: "TED-Ed Mythology Series",
                url: "https://ed.ted.com/lessons?category=literature-language&content_type=animations&direction=desc&sort=featured-position&user_by_click=student",
                description: "Short animated lessons on specific myths from around the world.",
                topics: ["All Modules"]
            },
            {
                title: "The Tolkien Professor (Corey Olsen)",
                url: "https://www.youtube.com/user/tolkienprof",
                description: "Academic analysis of Tolkien's works, mythology sources, and literary analysis.",
                topics: ["Module 4: Tolkien"]
            },
            {
                title: "Wisecrack Philosophy - Star Wars Analysis",
                url: "https://www.youtube.com/c/WisecrackEDU",
                description: "Philosophical and mythological analysis of Star Wars and other pop culture (search 'Star Wars').",
                topics: ["Module 3: Star Wars"]
            }
        ]
    },

    academicArticles: {
        title: "📰 Open-Access Academic Articles",
        icon: "📰",
        resources: [
            {
                title: "JSTOR Open Content",
                url: "https://www.jstor.org/open/",
                description: "Free academic articles on mythology, folklore, and comparative literature. Search 'mythology' or specific topics.",
                topics: ["All Modules", "Research"]
            },
            {
                title: "Google Scholar",
                url: "https://scholar.google.com/",
                description: "Search scholarly articles; many full-text versions available free. Try: 'Joseph Campbell Hero's Journey' or 'Tolkien mythology sources'.",
                topics: ["All Modules", "Research"]
            },
            {
                title: "Academia.edu",
                url: "https://www.academia.edu/",
                description: "Academics share their papers. Search for 'Star Wars mythology', 'superhero archetypes', etc.",
                topics: ["Module 3-7", "Modern Myth Analysis"]
            },
            {
                title: "Project MUSE Open Access",
                url: "https://muse.jhu.edu/browse/open_access",
                description: "Scholarly humanities journals with free access articles on literature and mythology.",
                topics: ["Research", "Advanced Reading"]
            }
        ]
    },

    interactiveTools: {
        title: "🛠️ Interactive Learning Tools",
        icon: "🛠️",
        resources: [
            {
                title: "Mythology Family Trees (Greek, Norse, etc.)",
                url: "https://www.theoi.com/",
                description: "Theoi Project - comprehensive Greek mythology database with family trees, stories, and art.",
                topics: ["Module 1-2", "Greek Mythology"]
            },
            {
                title: "Norse Mythology Interactive Family Tree",
                url: "http://www.norse-mythology.org/gods-and-creatures/",
                description: "Visual guide to Norse gods, creatures, and cosmology.",
                topics: ["Module 1", "Module 4"]
            },
            {
                title: "Campbell's Hero's Journey Interactive Wheel",
                url: "https://www.tlu.ee/~rajaleid/montaazh/Hero's%20Journey%20Arch.pdf",
                description: "Visual diagram of Hero's Journey stages (free PDF).",
                topics: ["Module 2-3", "Analysis Tool"]
            },
            {
                title: "Mythology Map - Interactive World Map",
                url: "https://www.worldhistory.org/mythology/",
                description: "World History Encyclopedia's mythology section with interactive maps and timelines.",
                topics: ["All Modules", "World Mythology"]
            }
        ]
    },

    creativeCommons: {
        title: "🎨 Creative Commons Media",
        icon: "🎨",
        resources: [
            {
                title: "Wikimedia Commons - Mythology Images",
                url: "https://commons.wikimedia.org/wiki/Category:Mythology",
                description: "Thousands of public domain and Creative Commons mythology images, art, and diagrams.",
                topics: ["All Modules", "Visual Resources"]
            },
            {
                title: "Metropolitan Museum of Art - Open Access",
                url: "https://www.metmuseum.org/art/collection",
                description: "400,000+ images of art including ancient mythological scenes, free for educational use.",
                topics: ["Visual Learning", "Ancient Art"]
            },
            {
                title: "British Museum - Mythology Collection",
                url: "https://www.britishmuseum.org/collection",
                description: "Search mythology-related artifacts with high-resolution images and detailed descriptions.",
                topics: ["Ancient Mythology", "Artifacts"]
            }
        ]
    },

    studyGuides: {
        title: "📝 Study Guides & Reference",
        icon: "📝",
        resources: [
            {
                title: "SparkNotes - Mythology Study Guides",
                url: "https://www.sparknotes.com/lit/",
                description: "Free study guides for major mythological texts and modern works (search for specific titles).",
                topics: ["All Modules", "Study Help"]
            },
            {
                title: "Shmoop - Literature Guides",
                url: "https://www.shmoop.com/",
                description: "Study guides with mythology analysis (some free content, search specific works).",
                topics: ["Study Help"]
            },
            {
                title: "Encyclopedia Mythica",
                url: "http://www.pantheon.org/",
                description: "Free encyclopedia of mythology, folklore, and legend from around the world.",
                topics: ["All Modules", "Quick Reference"]
            },
            {
                title: "Mythology Dictionary",
                url: "https://www.greekmythology.com/",
                description: "Comprehensive Greek mythology reference with searchable database.",
                topics: ["Greek Mythology", "Reference"]
            }
        ]
    },

    podcasts: {
        title: "🎙️ Educational Podcasts (Free)",
        icon: "🎙️",
        resources: [
            {
                title: "Myths and Legends Podcast",
                url: "https://www.mythpodcast.com/",
                description: "Weekly podcast telling stories from world mythology and folklore.",
                topics: ["All Modules", "Listening"]
            },
            {
                title: "The Tolkien Professor Podcast",
                url: "https://tolkienprofessor.com/",
                description: "In-depth academic analysis of Tolkien's works and mythology.",
                topics: ["Module 4"]
            },
            {
                title: "Literature and History Podcast",
                url: "https://literatureandhistory.com/",
                description: "Covers ancient literature including epic poetry and mythology.",
                topics: ["Module 2", "Ancient Literature"]
            }
        ]
    }
};

// Function to render OER resources
function renderOERResources() {
    const container = document.getElementById('oer-container');
    if (!container) return;

    let html = '<div class="section-title">📚 Open Educational Resources</div>';
    html += '<p class="instruction-text">FREE, legitimate academic resources for HUM-130 - No textbook purchase required!</p>';
    html += '<div class="oer-notice"><strong>💡 All resources below are free and openly accessible.</strong> No paywalls, no subscriptions required. These are legitimate academic sources appropriate for college-level work.</div>';

    Object.values(oerResources).forEach(category => {
        html += `<div class="oer-category">
            <h2 class="oer-category-title">${category.icon} ${category.title}</h2>
            <div class="oer-resources-grid">`;

        category.resources.forEach(resource => {
            html += `<div class="oer-resource-card">
                <h3 class="oer-resource-title">
                    <a href="${resource.url}" target="_blank" rel="noopener noreferrer">${resource.title} 🔗</a>
                </h3>
                <p class="oer-resource-desc">${resource.description}</p>
                <div class="oer-topics">
                    ${resource.topics.map(t => `<span class="topic-tag">${t}</span>`).join(' ')}
                </div>
            </div>`;
        });

        html += `</div></div>`;
    });

    // Add usage guide
    html += `<div class="oer-usage-guide">
        <h2 class="section-title">📖 How to Use These Resources</h2>
        <div class="usage-tips">
            <div class="usage-tip">
                <strong>🎯 For Each Module:</strong>
                <p>Check the "Topics" tags to find relevant resources. Start with video lectures for overview, then read primary texts.</p>
            </div>
            <div class="usage-tip">
                <strong>📝 For Assignments:</strong>
                <p>Use Academic Articles and Study Guides for deeper analysis. Cite sources properly in your work.</p>
            </div>
            <div class="usage-tip">
                <strong>🎬 For Modern Myth Analysis:</strong>
                <p>Combine watching your chosen film/series with reading analysis articles and watching video essays.</p>
            </div>
            <div class="usage-tip">
                <strong>❓ If You Get Stuck:</strong>
                <p>Start with Crash Course Mythology videos, then consult study guides and podcasts for additional perspectives.</p>
            </div>
        </div>
    </div>`;

    container.innerHTML = html;
}

// Add CSS for OER resources
const oerStyles = `
.oer-notice {
    background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
    border: 2px solid var(--success);
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 30px;
    font-size: 1.1em;
    text-align: center;
}

.oer-category {
    margin-bottom: 40px;
}

.oer-category-title {
    font-size: 1.8em;
    color: var(--accent);
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--accent);
}

.oer-resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 20px;
}

.oer-resource-card {
    background: white;
    border: 2px solid var(--accent-light);
    border-radius: 8px;
    padding: 20px;
    transition: all 0.3s;
}

.oer-resource-card:hover {
    border-color: var(--accent);
    box-shadow: 0 4px 12px rgba(139, 69, 19, 0.2);
    transform: translateY(-2px);
}

.oer-resource-title {
    font-size: 1.2em;
    margin-bottom: 10px;
}

.oer-resource-title a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
}

.oer-resource-title a:hover {
    text-decoration: underline;
}

.oer-resource-desc {
    color: var(--ink);
    line-height: 1.6;
    margin-bottom: 12px;
}

.oer-topics {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
}

.topic-tag {
    background: var(--gray-light);
    color: var(--ink);
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 0.85em;
    font-weight: 600;
    border: 1px solid var(--accent-light);
}

.oer-usage-guide {
    background: var(--gray-light);
    padding: 30px;
    border-radius: 12px;
    margin-top: 40px;
}

.usage-tips {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.usage-tip {
    background: white;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid var(--accent);
}

.usage-tip strong {
    color: var(--accent);
    display: block;
    margin-bottom: 8px;
    font-size: 1.1em;
}

.usage-tip p {
    line-height: 1.6;
    color: var(--ink);
}
`;

// Inject styles
const styleTag = document.createElement('style');
styleTag.textContent = oerStyles;
document.head.appendChild(styleTag);
