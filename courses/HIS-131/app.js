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

function toggleActivity(id) {
    document.getElementById('activity-details-' + id).classList.toggle('active');
}

function renderModules() {
    const container = document.getElementById('modules-container');
    if (!courseData || !courseData.modules) return;

    courseData.modules.forEach(m => {
        const card = document.createElement('div');
        card.className = 'module-card';
        card.innerHTML = '<div class="module-header" onclick="toggleModule(' + m.number + ')"><div class="module-number">' + m.number + '</div><div class="module-title-wrapper"><div class="module-title">' + m.title + '</div><div class="module-meta">' + m.dates + '</div></div><span class="toggle-icon">▼</span></div><div id="module-content-' + m.number + '" class="module-content">' + buildModuleContent(m) + '</div>';
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
    m.assessments.forEach(a => html += buildAssessment(a));
    html += '</div>';
    return html;
}

function buildActivity(a, mn, idx) {
    const id = 'm' + mn + '-a' + idx;
    const feat = a.featured ? ' featured' : '';
    return '<div class="activity-card' + feat + '" onclick="toggleActivity(\'' + id + '\')"><div class="activity-header"><div><span class="activity-title">' + a.title + '</span>' + (a.autoGraded ? '<span class="badge badge-auto">Auto-Graded</span>' : '') + '<span class="badge badge-points">' + a.points + ' pts</span>' + (a.featured ? '<span class="badge badge-featured">Featured</span>' : '') + '</div><span class="toggle-icon">▼</span></div><div class="activity-meta">' + a.format + ' • ' + a.timeLimit + ' min • ' + a.attempts + ' attempts</div><div id="activity-details-' + id + '" class="activity-details"><p><strong>Instructions:</strong> ' + a.studentInstructions + '</p></div></div>';
}

function buildAssessment(a) {
    return '<div class="activity-card"><div class="activity-header"><div><span class="activity-title">' + a.title + '</span>' + (a.autoGraded ? '<span class="badge badge-auto">Auto-Graded</span>' : '') + '<span class="badge badge-points">' + a.points + ' pts</span></div></div>' + (a.questionCount ? '<div class="activity-meta">' + a.questionCount + ' questions</div>' : '') + '</div>';
}

function renderRubrics() {
    const c = document.getElementById('rubrics-container');
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
