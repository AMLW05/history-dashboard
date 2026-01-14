// HIS-131 Dashboard - Interactive JavaScript
// Dynamically renders collapsible modules from course-data.json

let courseData = null;

// Load data and render
fetch('course-data.json')
    .then(r => r.json())
    .then(data => {
        courseData = data;
        renderAll();
    })
    .catch(err => console.error('Load error:', err));

function renderAll() {
    renderModules();
    renderRubrics();
    renderSkills();
}

function showTab(id) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
}

function toggleModule(n) {
    const c = document.getElementById('module-content-' + n);
    const h = c.previousElementSibling;
    c.classList.toggle('active');
    h.classList.toggle('active');
}

function printModule(n, event) {
    event.stopPropagation();
    const content = document.getElementById('module-content-' + n);
    const moduleTitle = content.previousElementSibling.querySelector('.module-title').textContent;

    // Create modal overlay (like CSC-113)
    const modal = document.createElement('div');
    modal.className = 'modal-container';
    modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px;';

    modal.innerHTML = `
        <div style="background: var(--parchment); border-radius: 12px; max-width: 1000px; width: 100%; max-height: 90vh; display: flex; flex-direction: column; box-shadow: 0 20px 60px rgba(0,0,0,0.5); border: 3px solid var(--accent);">
            <div class="modal-header-print" style="display: flex; justify-content: space-between; align-items: center; padding: 20px; border-bottom: 2px solid var(--accent);">
                <h3 style="margin: 0; color: var(--ink);">📄 ${moduleTitle}</h3>
                <div style="display: flex; gap: 10px;">
                    <button onclick="window.print()" style="background: var(--success); color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-weight: bold; font-family: Georgia, serif;">🖨️ Print</button>
                    <button onclick="this.closest('.modal-container').remove()" style="background: #d63031; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-weight: bold; font-family: Georgia, serif;">✕ Close</button>
                </div>
            </div>
            <div class="modal-content-print" style="padding: 30px; overflow-y: auto; flex: 1; background: var(--parchment);">
                ${content.innerHTML}
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Close on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function copyActivity(mn, idx, event) {
    event.stopPropagation();
    const details = document.getElementById('activity-details-m' + mn + '-a' + idx);
    const activityTitle = details.parentElement.querySelector('.activity-title').textContent;

    let textContent = activityTitle + '\n\n' + details.innerText;

    navigator.clipboard.writeText(textContent).then(() => {
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '✓ Copied!';
        btn.style.background = '#00b894';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    }).catch(err => {
        alert('Copy failed. Please select and copy manually.');
    });
}

function copyAssessment(id, event) {
    event.stopPropagation();
    const details = document.getElementById('activity-details-' + id);
    const assessmentTitle = details.parentElement.querySelector('.activity-title').textContent;

    let textContent = assessmentTitle + '\n\n' + details.innerText;

    navigator.clipboard.writeText(textContent).then(() => {
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '✓ Copied!';
        btn.style.background = '#00b894';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    }).catch(err => {
        alert('Copy failed. Please select and copy manually.');
    });
}

function toggleActivity(id) {
    document.getElementById('activity-details-' + id).classList.toggle('active');
}

function renderModules() {
    const container = document.getElementById('modules-container');
    if (!courseData || !courseData.modules) return;

    courseData.modules.forEach(m => {
        const card = document.createElement('div');
        card.className = 'module-card';
        card.innerHTML = '<div class="module-header" onclick="toggleModule(' + m.number + ')"><div class="module-number">' + m.number + '</div><div class="module-title-wrapper"><div class="module-title">' + m.title + '</div><div class="module-meta">' + m.dates + '</div></div><button class="print-btn" onclick="printModule(' + m.number + ', event)" title="Print module for Canvas">🖨️ Print</button><span class="toggle-icon">▼</span></div><div id="module-content-' + m.number + '" class="module-content">' + buildModuleContent(m) + '</div>';
        container.appendChild(card);
    });
}

function buildModuleContent(m) {
    let html = '<div class="subsection"><h3 class="subsection-title">Inquiry Questions</h3><ul class="inquiry-list">';
    m.inquiryQuestions.forEach(q => html += '<li>' + q + '</li>');
    html += '</ul></div><div class="subsection"><h3 class="subsection-title">Module Learning Objectives</h3><ol class="mlo-list">';
    m.mlos.forEach(mlo => html += '<li><strong>MLO' + mlo.number + ':</strong> ' + mlo.text + '</li>');
    html += '</ol></div><div class="subsection"><h3 class="subsection-title">Learning Activities</h3>';
    m.activities.forEach((a, i) => html += buildActivity(a, m.number, i));
    html += '</div><div class="subsection"><h3 class="subsection-title">Assessments</h3>';
    m.assessments.forEach(a => html += buildAssessment(a, m.number));
    html += '</div>';
    return html;
}

function buildActivity(a, mn, idx) {
    const id = 'm' + mn + '-a' + idx;
    const feat = a.featured ? ' featured' : '';
    let details = '<p><strong>Instructions:</strong> ' + a.studentInstructions + '</p>';

    // Get module activities data
    const moduleData = {
        1: typeof module1Activities !== 'undefined' ? module1Activities : null,
        2: typeof module2Activities !== 'undefined' ? module2Activities : null,
        3: typeof module3Activities !== 'undefined' ? module3Activities : null,
        4: typeof module4Activities !== 'undefined' ? module4Activities : null,
        5: typeof module5Activities !== 'undefined' ? module5Activities : null,
        6: typeof module6Activities !== 'undefined' ? module6Activities : null,
        7: typeof module7Activities !== 'undefined' ? module7Activities : null,
        8: typeof module8Activities !== 'undefined' ? module8Activities : null
    };

    const modAct = moduleData[mn];
    if (!modAct) return '<div class="activity-card' + feat + '" onclick="toggleActivity(\'' + id + '\')"><div class="activity-header"><div><span class="activity-title">' + a.title + '</span>' + (a.autoGraded ? '<span class="badge badge-auto">Auto-Graded</span>' : '') + '<span class="badge badge-points">' + a.points + ' pts</span>' + (a.featured ? '<span class="badge badge-featured">Featured</span>' : '') + '</div><span class="toggle-icon">▼</span></div><div class="activity-meta">' + a.format + ' • ' + a.timeLimit + ' min • ' + a.attempts + ' attempts</div><div id="activity-details-' + id + '" class="activity-details">' + details + '</div></div>';

    // LA1: Matching questions
    if (idx === 0 && modAct.la1) {
        details += '<h4 style="margin-top:20px">Matching Pairs (15 items):</h4><table style="margin-top:10px"><thead><tr><th style="width:30%">Term</th><th>Definition</th></tr></thead><tbody>';
        modAct.la1.questions.forEach(q => {
            details += '<tr><td><strong>' + q.term + '</strong></td><td>' + q.def + '</td></tr>';
        });
        details += '</tbody></table>';
    }
    // LA2: Multiple choice
    else if (idx === 1 && modAct.la2) {
        details += '<h4 style="margin-top:20px">Multiple Choice Questions (10 items):</h4>';
        modAct.la2.questions.forEach((q, i) => {
            details += '<div class="question-block"><div class="question-text">Q' + (i+1) + ': ' + q.q + '</div>';
            q.answers.forEach((ans, aidx) => {
                details += '<div class="answer-option' + (aidx === q.correct ? ' correct' : '') + '">' + String.fromCharCode(97+aidx) + ') ' + ans + '</div>';
            });
            details += '</div>';
        });
    }
    // LA3: Timeline + Comparison OR Data Analysis
    else if (idx === 2 && modAct.la3) {
        if (modAct.la3.timelineBuilder) {
            details += '<h4 style="margin-top:20px">Option A: Timeline Builder</h4>';
            details += '<p style="margin:10px 0"><strong>' + modAct.la3.timelineBuilder.instructions + '</strong></p>';
            details += '<table style="margin-top:10px"><thead><tr><th style="width:10%">#</th><th>Event</th><th style="width:20%">Date</th></tr></thead><tbody>';
            modAct.la3.timelineBuilder.events.forEach((e, i) => {
                details += '<tr><td><strong>' + (i+1) + '</strong></td><td>' + e.event + '</td><td>' + e.date + '</td></tr>';
            });
            details += '</tbody></table>';
        }

        if (modAct.la3.comparisonActivity) {
            details += '<h4 style="margin-top:30px">Option B: Comparison Activity</h4>';
            details += '<p style="margin:10px 0"><strong>' + modAct.la3.comparisonActivity.instructions + '</strong></p>';
            if (modAct.la3.comparisonActivity.regions) {
                details += '<p style="margin:10px 0;padding:10px;background:var(--gray-light);border-radius:4px"><strong>Categories:</strong> ' + modAct.la3.comparisonActivity.regions.join(' | ') + '</p>';
            }
            details += '<table style="margin-top:10px"><thead><tr><th style="width:10%">#</th><th>Characteristic</th><th style="width:35%">Answer</th></tr></thead><tbody>';
            modAct.la3.comparisonActivity.characteristics.forEach((c, i) => {
                details += '<tr><td><strong>' + (i+1) + '</strong></td><td>' + c.text + '</td><td><span class="badge badge-auto" style="display:inline-block">' + c.answer + '</span></td></tr>';
            });
            details += '</tbody></table>';
        }

        if (modAct.la3.dataAnalysis) {
            details += '<h4 style="margin-top:30px">📊 Data Analysis Activity</h4>';
            details += '<p style="margin:10px 0"><strong>' + modAct.la3.dataAnalysis.instructions + '</strong></p>';
            details += '<div style="margin:20px 0;padding:20px;background:#f8f9fa;border-radius:8px;border:2px solid var(--accent-light)"><h5>' + modAct.la3.dataAnalysis.chartData.title + '</h5><p style="margin-top:10px;font-style:italic">Chart would be displayed here in Canvas using Chart.js or similar visualization</p></div>';
            details += '<h5 style="margin-top:20px">Analysis Questions:</h5><ol style="margin-left:20px;line-height:2">';
            modAct.la3.dataAnalysis.questions.forEach(q => {
                details += '<li><strong>Q:</strong> ' + q.q + '<br><em>A:</em> ' + q.a + '</li>';
            });
            details += '</ol></div>';
        }
    }
    // LA4: Additional activities (Module 3 has LA4)
    else if (idx === 3 && modAct.la4) {
        details += '<h4 style="margin-top:20px">' + modAct.la4.title + '</h4>';
        details += '<p style="margin:10px 0"><strong>' + modAct.la4.instructions + '</strong></p>';
        details += '<table style="margin-top:10px"><thead><tr><th style="width:10%">#</th><th>Item</th><th style="width:30%">Answer</th></tr></thead><tbody>';
        modAct.la4.items.forEach((item, i) => {
            details += '<tr><td><strong>' + (i+1) + '</strong></td><td>' + item.text + '</td><td><span class="badge badge-auto" style="display:inline-block">' + item.answer + '</span></td></tr>';
        });
        details += '</tbody></table>';
    }

    return '<div class="activity-card' + feat + '" onclick="toggleActivity(\'' + id + '\')"><div class="activity-header"><div><span class="activity-title">' + a.title + '</span>' + (a.autoGraded ? '<span class="badge badge-auto">Auto-Graded</span>' : '') + '<span class="badge badge-points">' + a.points + ' pts</span>' + (a.featured ? '<span class="badge badge-featured">Featured</span>' : '') + '</div><div><button class="copy-btn" onclick="copyActivity(' + mn + ',' + idx + ', event)" title="Copy to clipboard for Canvas">📋 Copy</button><span class="toggle-icon">▼</span></div></div><div class="activity-meta">' + a.format + ' • ' + a.timeLimit + ' min • ' + a.attempts + ' attempts</div><div id="activity-details-' + id + '" class="activity-details">' + details + '</div></div>';
}

function buildAssessment(a, mn) {
    const id = 'm' + mn + '-assess-' + (a.type === 'Discussion Board' ? 'disc' : a.type === 'Project Checkpoint' ? 'checkpoint' : a.type === 'Midterm Exam' ? 'midterm' : a.type === 'Final Exam' ? 'final' : 'quiz');
    let details = '';

    // Get module-specific data (discussions, checkpoints, projects, quizzes, exams)
    const moduleData = {
        1: { quiz: typeof module1Quiz !== 'undefined' ? module1Quiz : null },
        2: { discussion: typeof module2Discussion !== 'undefined' ? module2Discussion : null, quiz: typeof module2Quiz !== 'undefined' ? module2Quiz : null },
        3: { checkpoint: typeof module3Checkpoint !== 'undefined' ? module3Checkpoint : null, quiz: typeof module3Quiz !== 'undefined' ? module3Quiz : null },
        4: { discussion: typeof module4Discussion !== 'undefined' ? module4Discussion : null, quiz: typeof module4Quiz !== 'undefined' ? module4Quiz : null, midterm: typeof module4Midterm !== 'undefined' ? module4Midterm : null },
        5: { checkpoint: typeof module5Checkpoint !== 'undefined' ? module5Checkpoint : null, quiz: typeof module5Quiz !== 'undefined' ? module5Quiz : null },
        6: { discussion: typeof module6Discussion !== 'undefined' ? module6Discussion : null, quiz: typeof module6Quiz !== 'undefined' ? module6Quiz : null },
        7: { finalProject: typeof module7FinalProject !== 'undefined' ? module7FinalProject : null, quiz: typeof module7Quiz !== 'undefined' ? module7Quiz : null },
        8: { discussion: typeof module8Discussion !== 'undefined' ? module8Discussion : null, quiz: typeof module8Quiz !== 'undefined' ? module8Quiz : null, finalExam: typeof finalExam !== 'undefined' ? finalExam : null }
    };

    const modData = moduleData[mn];

    // Discussion Board
    if (a.type === 'Discussion Board' && modData && modData.discussion) {
        const disc = modData.discussion;
        details = '<div style="padding:15px;background:#f8f9fa;border-radius:6px;margin:15px 0">';
        details += '<h4 style="margin-top:0;color:var(--accent)">Discussion Prompt</h4>';
        details += '<div style="white-space:pre-wrap;line-height:1.8">' + disc.prompt + '</div>';
        if (disc.pointsBreakdown) {
            details += '<h4 style="margin-top:20px;color:var(--accent)">Points Breakdown</h4><ul>';
            Object.keys(disc.pointsBreakdown).forEach(key => {
                details += '<li><strong>' + key.replace(/([A-Z])/g, ' $1').trim() + ':</strong> ' + disc.pointsBreakdown[key] + ' points</li>';
            });
            details += '</ul>';
        }
        details += '<p style="margin-top:15px"><strong>Rubric:</strong> ' + disc.rubric + '</p></div>';
    }
    // Project Checkpoint
    else if (a.type === 'Project Checkpoint' && modData && modData.checkpoint) {
        const check = modData.checkpoint;
        details = '<div style="padding:15px;background:#f8f9fa;border-radius:6px;margin:15px 0">';
        details += '<div style="white-space:pre-wrap;line-height:1.8">' + check.instructions + '</div>';
        if (check.scaffolding) {
            details += '<h4 style="margin-top:20px;color:var(--accent)">Scaffolding & Tips</h4>';
            if (check.scaffolding.thesisTemplates) {
                details += '<h5>Thesis Templates:</h5><ul>';
                check.scaffolding.thesisTemplates.forEach(t => details += '<li>' + t + '</li>');
                details += '</ul>';
            }
            if (check.scaffolding.commonMistakes) {
                details += '<h5 style="margin-top:15px">Common Mistakes:</h5><ul>';
                check.scaffolding.commonMistakes.forEach(m => details += '<li>' + m + '</li>');
                details += '</ul>';
            }
            if (check.scaffolding.primarySourceQuestions) {
                details += '<h5 style="margin-top:15px">Primary Source Analysis Questions:</h5><ul>';
                check.scaffolding.primarySourceQuestions.forEach(q => details += '<li>' + q + '</li>');
                details += '</ul>';
            }
        }
        details += '<p style="margin-top:15px"><strong>Rubric:</strong> ' + check.rubric + '</p></div>';
    }
    // Final Project
    else if (a.title && a.title.includes('Final Project') && modData && modData.finalProject) {
        const proj = modData.finalProject;
        details = '<div style="padding:15px;background:#f8f9fa;border-radius:6px;margin:15px 0">';
        details += '<div style="white-space:pre-wrap;line-height:1.8">' + proj.instructions + '</div>';
        if (proj.exampleTopics) {
            details += '<h4 style="margin-top:20px;color:var(--accent)">Example Topics</h4><ul>';
            proj.exampleTopics.forEach(t => details += '<li>' + t + '</li>');
            details += '</ul>';
        }
        details += '<p style="margin-top:15px"><strong>Rubric:</strong> ' + proj.rubric + '</p></div>';
    }
    // Module Quiz
    else if (a.type === 'Module Quiz' && modData && modData.quiz) {
        const quiz = modData.quiz;
        details = '<div style="padding:15px;background:#f8f9fa;border-radius:6px;margin:15px 0">';
        details += '<h4 style="margin-top:0;color:var(--accent)">Module ' + mn + ' Quiz Questions</h4>';
        quiz.questions.forEach((q, i) => {
            details += '<div class="question-block" style="margin-top:20px;padding:15px;background:white;border-radius:4px;border-left:4px solid var(--accent)"><div class="question-text"><strong>Q' + (i+1) + ':</strong> ' + q.q + '</div>';
            q.answers.forEach((ans, aidx) => {
                details += '<div class="answer-option' + (aidx === q.correct ? ' correct' : '') + '" style="margin:8px 0 8px 20px">' + String.fromCharCode(97+aidx) + ') ' + ans + '</div>';
            });
            details += '</div>';
        });
        details += '</div>';
    }
    // Midterm Exam
    else if (a.type === 'Midterm Exam' && modData && modData.midterm) {
        const exam = modData.midterm;
        details = '<div style="padding:15px;background:#f8f9fa;border-radius:6px;margin:15px 0">';
        details += '<h4 style="margin-top:0;color:var(--accent)">' + exam.title + '</h4>';
        details += '<p style="margin:10px 0;font-style:italic">' + exam.instructions + '</p>';
        details += '<h5 style="margin-top:20px">Exam Questions (' + exam.questions.length + ' total):</h5>';
        exam.questions.forEach((q, i) => {
            details += '<div class="question-block" style="margin-top:15px;padding:15px;background:white;border-radius:4px;border-left:4px solid var(--success)"><div class="question-text"><strong>Q' + (i+1) + ':</strong> ' + q.q;
            if (q.type) details += ' <span style="font-size:0.85em;color:var(--gray)">(' + q.type + ')</span>';
            details += '</div>';
            q.answers.forEach((ans, aidx) => {
                details += '<div class="answer-option' + (aidx === q.correct ? ' correct' : '') + '" style="margin:8px 0 8px 20px">' + String.fromCharCode(97+aidx) + ') ' + ans + '</div>';
            });
            details += '</div>';
        });
        details += '</div>';
    }
    // Final Exam
    else if (a.type === 'Final Exam' && modData && modData.finalExam) {
        const exam = modData.finalExam;
        details = '<div style="padding:15px;background:#f8f9fa;border-radius:6px;margin:15px 0">';
        details += '<h4 style="margin-top:0;color:var(--accent)">' + exam.title + '</h4>';
        details += '<p style="margin:10px 0;font-style:italic">' + exam.instructions + '</p>';
        details += '<h5 style="margin-top:20px">Comprehensive Final Exam Questions (' + exam.questions.length + ' total):</h5>';
        exam.questions.forEach((q, i) => {
            details += '<div class="question-block" style="margin-top:15px;padding:15px;background:white;border-radius:4px;border-left:4px solid var(--warning)"><div class="question-text"><strong>Q' + (i+1) + ':</strong> ' + q.q + '</div>';
            q.answers.forEach((ans, aidx) => {
                details += '<div class="answer-option' + (aidx === q.correct ? ' correct' : '') + '" style="margin:8px 0 8px 20px">' + String.fromCharCode(97+aidx) + ') ' + ans + '</div>';
            });
            details += '</div>';
        });
        details += '</div>';
    }

    // Build the card
    if (details) {
        return '<div class="activity-card" onclick="toggleActivity(\'' + id + '\')"><div class="activity-header"><div><span class="activity-title">' + a.title + '</span>' + (a.autoGraded ? '<span class="badge badge-auto">Auto-Graded</span>' : '') + '<span class="badge badge-points">' + a.points + ' pts</span></div><div><button class="copy-btn" onclick="copyAssessment(\'' + id + '\', event)" title="Copy to clipboard">📋 Copy</button><span class="toggle-icon">▼</span></div></div>' + (a.questionCount ? '<div class="activity-meta">' + a.questionCount + ' questions</div>' : '') + '<div id="activity-details-' + id + '" class="activity-details">' + details + '</div></div>';
    }

    // Fallback for assessments without detailed data
    return '<div class="activity-card"><div class="activity-header"><div><span class="activity-title">' + a.title + '</span>' + (a.autoGraded ? '<span class="badge badge-auto">Auto-Graded</span>' : '') + '<span class="badge badge-points">' + a.points + ' pts</span></div></div>' + (a.questionCount ? '<div class="activity-meta">' + a.questionCount + ' questions</div>' : '') + '</div>';
}

function renderRubrics() {
    const c = document.getElementById('rubrics-container');

    if (typeof rubricData !== 'undefined') {
        // Render full rubric details
        [rubricData.rubric1, rubricData.rubric2, rubricData.rubric3].forEach(r => {
            const div = document.createElement('div');
            div.className = 'subsection';
            let html = '<h3 class="subsection-title">' + r.title + '</h3><p style="margin-bottom:15px"><strong>Used For:</strong> ' + r.usage + '</p>';

            html += '<table class="rubric-table"><thead><tr><th style="width:20%">Criterion</th>';
            if (r.criteria[0].excellent) {
                html += '<th style="width:20%">Excellent</th><th style="width:20%">Proficient</th><th style="width:20%">Developing</th><th style="width:20%">Needs Work</th>';
            } else {
                html += '<th style="width:27%">Excellent</th><th style="width:27%">Proficient</th><th style="width:26%">Needs Work</th>';
            }
            html += '</tr></thead><tbody>';

            r.criteria.forEach(cr => {
                html += '<tr><td><strong>' + cr.name + '</strong></td>';
                if (cr.excellent) html += '<td>' + cr.excellent + '</td>';
                html += '<td>' + cr.proficient + '</td>';
                if (cr.developing) html += '<td>' + cr.developing + '</td>';
                html += '<td>' + cr.needsWork + '</td></tr>';
            });
            html += '</tbody></table>';
            div.innerHTML = html;
            c.appendChild(div);
        });
    } else {
        // Fallback simple version
        const rubrics = [
            { title: 'Rubric 1: Project Checkpoints', pts: 50, use: 'Modules 1, 3, 5', crit: [['Topic/Source Selection', 15], ['Historical Context', 15], ['Research Planning', 15], ['Writing Mechanics', 5]] },
            { title: 'Rubric 2: Discussion Boards', pts: 30, use: 'Modules 2, 4, 6, 8', crit: [['Initial Post Quality', 10], ['Peer Engagement', 10], ['Historical Accuracy', 10]] },
            { title: 'Rubric 3: Final Project', pts: 100, use: 'Module 7', crit: [['Thesis/Argument', 20], ['Evidence/Analysis', 20], ['Historical Context', 20], ['Organization', 20], ['Mechanics', 20]] }
        ];
        rubrics.forEach(r => {
            const div = document.createElement('div');
            div.className = 'subsection';
            let html = '<h3 class="subsection-title">' + r.title + ' (' + r.pts + ' points)</h3><p style="margin-bottom:15px"><strong>Used For:</strong> ' + r.use + '</p><table><thead><tr><th>Criterion</th><th>Points</th></tr></thead><tbody>';
            r.crit.forEach(cr => html += '<tr><td><strong>' + cr[0] + '</strong></td><td>' + cr[1] + ' pts</td></tr>');
            html += '</tbody></table>';
            div.innerHTML = html;
            c.appendChild(div);
        });
    }
}

function renderSkills() {
    const c = document.getElementById('skills-container');
    if (!courseData || !courseData.historicalThinkingSkills) return;
    courseData.historicalThinkingSkills.forEach(s => {
        const div = document.createElement('div');
        div.className = 'activity-card' + (s.id === 'HTS6' ? ' featured' : '');
        let html = '<div class="activity-header"><span class="activity-title">' + s.name + '</span>' + (s.id === 'HTS6' ? '<span class="badge badge-featured">NEW</span>' : '') + '</div><p style="margin:10px 0">' + s.description + '</p><div style="margin-top:15px;padding:15px;background:var(--gray-light);border-radius:6px"><strong>Progression:</strong><ul style="margin-left:20px;margin-top:10px;line-height:1.8">';
        s.progression.forEach(p => html += '<li>' + p + '</li>');
        html += '</ul></div>';
        div.innerHTML = html;
        c.appendChild(div);
    });
}
