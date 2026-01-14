# History Courses Dashboard

**Comprehensive course design hub for FTCC History program**

## Overview

This dashboard provides interactive course certification hubs for all History courses at FTCC, including American History (HIS-131, HIS-132) and World Civilizations (HIS-111, HIS-112).

## Courses

### American History Sequence
- **[HIS-131: American History I](courses/HIS-131/)** - Pre-Columbian times through 1865
- **HIS-132: American History II** - 1865 to Present *(Coming Soon)*

### World Civilizations Sequence
- **HIS-111: World Civilizations I** - To 1500 *(Coming Soon)*
- **HIS-112: World Civilizations II** - 1500 to Present *(Coming Soon)*

## Features

Each course dashboard includes:
- Complete module structure with inquiry questions
- Learning outcomes alignment (CLOs → MLOs → Assessments)
- Historical thinking skills progression
- Auto-graded Canvas-ready activities
- Quality Matters standards compliance
- Student instructions for all activities
- Copy-paste ready content blocks
- Print-friendly views

## Quick Start

### View Dashboards
- **HIS-131**: Open `courses/HIS-131/index.html` in browser
- Additional courses will be added to `courses/` directory

### Deploy to GitHub Pages
See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step instructions.

## Repository Structure

```
history-dashboard/
├── index.html                 # Program-level landing page (coming soon)
├── README.md                  # This file
├── DEPLOYMENT.md              # GitHub Pages setup guide
├── program-data.json          # Program-level scaffolding (coming soon)
└── courses/
    ├── HIS-131/
    │   ├── index.html         # HIS-131 course dashboard
    │   ├── course-data.json   # Complete course data
    │   └── course-data-complete.json
    ├── HIS-132/               # (Coming soon)
    ├── HIS-111/               # (Coming soon)
    └── HIS-112/               # (Coming soon)
```

## Current Status

| Course | Status | QM Certified | Auto-Graded | Activities |
|--------|--------|--------------|-------------|------------|
| **HIS-131** | ✅ Complete | 22/22 | 67% | 26 |
| HIS-132 | 🚧 Planned | - | - | - |
| HIS-111 | 🚧 Planned | - | - | - |
| HIS-112 | 🚧 Planned | - | - | - |

## Program Goals

All history courses support these program-level goals:
1. Demonstrate critical thinking through historical analysis
2. Evaluate diverse perspectives and cultural contexts
3. Apply information literacy skills to primary and secondary sources
4. Communicate historical arguments effectively in writing
5. Engage civic responsibility through understanding of historical change

## Thematic Progression

Courses build on each other thematically:

| Theme | HIS-131 | HIS-132 | HIS-111 | HIS-112 |
|-------|---------|---------|---------|---------|
| **Power** | Colonial authority | Federal expansion | Empires | Nation-states |
| **Identity** | American identity | Pluralism & diversity | Cultural exchange | Globalization |
| **Economy** | Slavery & market | Industrialization | Trade networks | Capitalism |
| **Reform** | Abolition & democracy | Civil rights | Religious movements | Human rights |
| **Conflict** | Revolutionary & Civil War | World Wars | Empire building | Cold War |

## Deployment

**GitHub Pages URL**: `https://YOUR-USERNAME.github.io/history-dashboard/`

**Local Development**:
```bash
# No build process needed
open courses/HIS-131/index.html
```

## Contributing

To add a new course:
1. Create directory: `courses/COURSE-CODE/`
2. Add course dashboard: `index.html`
3. Add course data: `course-data.json`
4. Update this README with course status

## Technology

- Pure HTML/CSS/JavaScript (no frameworks)
- No build process required
- Browser-only operation
- Print-friendly CSS
- Mobile responsive

## Status

✅ **HIS-131 Ready for Deployment**

---

**Last Updated**: 2026-01-14
**Version**: 1.0
**Institution**: FTCC / NCCCS
