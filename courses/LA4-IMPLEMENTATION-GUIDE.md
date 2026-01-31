# LA4 Canvas New Quizzes Implementation Guide

## Overview

This guide documents the rewritten LA4 Data Analysis Activities for HIS-131 and HIS-132, converted from short-answer HTML pages to fully autograded Canvas New Quizzes.

**Conversion Date**: January 2026
**Author**: Course Design Team
**QM Alignment**: All 22 Essential Standards

---

## Files Created

### HIS-131: American History I
| Module | File | Title | Points |
|--------|------|-------|--------|
| Module 3 | `LA4-Module3-Election1800-CanvasQuiz.json` | Analyzing the Election of 1800 | 25 |
| Module 6 | `LA4-Module6-ReformMovements-CanvasQuiz.json` | Analyzing Antebellum Reform Movements | 25 |

### HIS-132: American History II
| Module | File | Title | Points |
|--------|------|-------|--------|
| Module 3 | `LA4-Module3-ProgressiveEra-CanvasQuiz.json` | Analyzing Progressive Era Reform Data | 25 |
| Module 6 | `LA4-Module6-CivilRights-CanvasQuiz.json` | Analyzing Civil Rights Movement Data | 25 |

---

## Question Types Used (Canvas New Quizzes Autograded Only)

All four LA4 assessments use ONLY these autograded question types:

| Type | Description | Usage |
|------|-------------|-------|
| **Multiple Choice** | Single correct answer from 4 options | Content comprehension, data interpretation |
| **Multiple Answer** | Select all that apply (2-4 correct) | Complex analysis, multiple factors |
| **Matching** | Pair items from two columns | Connections, cause-effect relationships |
| **Ordering** | Arrange items in sequence | Chronological reasoning, process steps |
| **Categorization** | Sort items into 2+ categories | Compare/contrast, classification |
| **Numeric** | Calculate and enter a number | Data literacy, quantitative analysis |

### NOT Used (Per Requirements)
- Fill-in-the-blank
- True/False
- Short Answer
- Essay/Text Entry

---

## Canvas Import Instructions

### Option 1: Manual Entry (Recommended)
1. Open each JSON file
2. In Canvas, create a New Quiz in the appropriate module
3. Configure quiz settings:
   - Points: 25
   - Time Limit: 35 minutes
   - Attempts: 2
   - Scoring: Keep Highest
4. Add each question using the question type specified
5. Copy question text, answers, and feedback from JSON
6. Add stimulus (data charts/tables) as quiz instructions or embedded content

### Option 2: QTI Conversion
1. Use a JSON-to-QTI converter tool
2. Import QTI package into Canvas
3. Review and adjust formatting as needed

### Stimulus Materials
Each quiz requires students to view data visualizations before answering questions. Options:
- Embed charts as images in quiz instructions
- Link to existing HTML data visualization pages
- Create Canvas Pages with charts and link from quiz

---

## Learning Outcome Alignment

### HIS-131 LA4 Alignments

#### Module 3: Election of 1800
| Question | Type | MLO | CLO | HTS |
|----------|------|-----|-----|-----|
| Q1 | MC | 3 | 1 | HTS6 |
| Q2 | MA | 2, 3 | 2 | HTS6, HTS4 |
| Q3 | Match | 2 | 1, 2 | HTS3, HTS4 |
| Q4 | Order | 3 | 1 | HTS2 |
| Q5 | Numeric | 3 | 1 | HTS6 |
| Q6 | Categ | 2, 3 | 1, 2 | HTS4 |
| Q7 | MC | 3 | 1 | HTS5 |
| Q8 | MA | 2 | 2 | HTS3, HTS4 |
| Q9 | MC | 3 | 1 | HTS6 |
| Q10 | Categ | 3 | 1 | HTS2 |

#### Module 6: Reform Movements
| Question | Type | MLO | CLO | HTS |
|----------|------|-----|-----|-----|
| Q1 | MC | 1, 2 | 1 | HTS6 |
| Q2 | Order | 1, 2, 3 | 1, 2 | HTS4 |
| Q3 | Numeric | 2 | 1, 3 | HTS6 |
| Q4 | MA | 3 | 2 | HTS2, HTS3 |
| Q5 | Categ | 1, 2 | 1, 2 | HTS4 |
| Q6 | Match | 1 | 1 | HTS3 |
| Q7 | MC | 2 | 1, 3 | HTS6 |
| Q8 | MA | 1, 2 | 1, 2 | HTS4 |
| Q9 | Categ | 3 | 2 | HTS4 |
| Q10 | MC | 1, 2, 3 | 1, 2, 3 | HTS5 |

### HIS-132 LA4 Alignments

#### Module 3: Progressive Era
| Question | Type | MLO | CLO | HTS |
|----------|------|-----|-----|-----|
| Q1 | MC | 1 | 1 | HTS6 |
| Q2 | MA | 1 | 1 | HTS2, HTS3 |
| Q3 | Order | 3 | 2 | HTS2 |
| Q4 | Categ | 3 | 2 | HTS4 |
| Q5 | Numeric | 1 | 1 | HTS6 |
| Q6 | MC | 1 | 1, 2 | HTS6 |
| Q7 | Match | 1, 3 | 1, 2, 3 | HTS4 |
| Q8 | MA | 1 | 1 | HTS6 |
| Q9 | Categ | 1 | 1, 3 | HTS4 |
| Q10 | MC | 1, 3 | 1, 2 | HTS5 |

#### Module 6: Civil Rights
| Question | Type | MLO | CLO | HTS |
|----------|------|-----|-----|-----|
| Q1 | MC | 2 | 2 | HTS6 |
| Q2 | Numeric | 2 | 2, 3 | HTS6 |
| Q3 | MA | 2 | 2 | HTS3 |
| Q4 | Order | 2 | 2 | HTS2 |
| Q5 | Categ | 2 | 2, 3 | HTS4 |
| Q6 | Match | 2 | 2 | HTS1 |
| Q7 | MC | 2 | 2 | HTS6 |
| Q8 | MA | 2 | 2, 3 | HTS1 |
| Q9 | Categ | 2 | 2, 3 | HTS4, HTS5 |
| Q10 | MC | 2 | 2, 3 | HTS5 |

---

## QM Essential Standards Alignment

### Standard 1: Course Overview and Introduction
| Standard | Requirement | Evidence |
|----------|-------------|----------|
| 1.1 | Clear instructions for getting started | Quiz descriptions explain purpose, format, and expectations |
| 1.2 | Purpose and structure introduced | Each quiz states learning objectives and connection to module |

### Standard 2: Learning Objectives
| Standard | Requirement | Evidence |
|----------|-------------|----------|
| 2.1 | CLOs describe measurable outcomes | All quizzes linked to course-level CLOs (Analyze, Evaluate, Apply) |
| 2.2 | MLOs describe measurable outcomes | Each quiz explicitly maps to 2-3 specific MLOs |
| 2.3 | MLOs consistent with course-level | All MLOs support CLOs as documented in alignment tables |
| 2.4 | Instructions state how to meet objectives | Quiz descriptions explain what students will demonstrate |
| 2.5 | Learning objectives appropriate to level | Bloom's taxonomy appropriate (Apply, Analyze, Evaluate for 100-level) |

### Standard 3: Assessment and Measurement
| Standard | Requirement | Evidence |
|----------|-------------|----------|
| 3.1 | Assessments measure stated objectives | Every question maps to specific MLO/CLO (see alignment tables) |
| 3.2 | Grading policy clearly stated | 25 points, 2 attempts, highest score kept, 35-minute limit |
| 3.3 | Specific criteria for evaluation | Each question includes correct answers and detailed feedback |
| 3.4 | Multiple assessment types | 6 different question types across each quiz |
| 3.5 | Learner self-check opportunities | Feedback provided for both correct and incorrect answers |

### Standard 4: Instructional Materials
| Standard | Requirement | Evidence |
|----------|-------------|----------|
| 4.1 | Materials contribute to objectives | Data visualizations directly support data literacy skill development |
| 4.2 | Purpose of materials explained | Stimulus descriptions explain what data to analyze |
| 4.3 | Materials appropriately cited | Historical data includes context and sources |
| 4.4 | Materials current | Data reflects current historical scholarship |
| 4.5 | Materials present variety of perspectives | Questions address multiple historical viewpoints |

### Standard 5: Learning Activities and Learner Interaction
| Standard | Requirement | Evidence |
|----------|-------------|----------|
| 5.1 | Activities promote achievement | Data analysis activities develop HTS6 (Data Literacy) |
| 5.2 | Activities foster interaction | Questions require synthesis across multiple data sources |
| 5.3 | Clear requirements for interaction | Quiz instructions specify expectations |
| 5.4 | Active learning promoted | Students must analyze, compare, and draw conclusions |

### Standard 6: Course Technology
| Standard | Requirement | Evidence |
|----------|-------------|----------|
| 6.1 | Tools support objectives | Canvas New Quizzes enable diverse autograded question types |
| 6.2 | Tools promote engagement | Multiple question types maintain student engagement |
| 6.3 | Technologies are current | Canvas New Quizzes platform (current LMS standard) |
| 6.4 | Technical support provided | Canvas help resources available institution-wide |

### Standard 7: Learner Support
| Standard | Requirement | Evidence |
|----------|-------------|----------|
| 7.1 | Technical support instructions | Quiz technical requirements minimal (browser-based) |
| 7.2 | Academic support information | Links to writing center, tutoring available via course shell |
| 7.3 | Student services information | Accessible via institution Canvas integration |
| 7.4 | Accessibility accommodations | Quiz accommodations configurable per student |

### Standard 8: Accessibility and Usability
| Standard | Requirement | Evidence |
|----------|-------------|----------|
| 8.1 | Course navigation facilitates ease of use | Standard Canvas quiz interface |
| 8.2 | Information provided about accessibility | Data charts include text descriptions |
| 8.3 | Course provides accessible text | All content text-based; charts have alt-text descriptions |
| 8.4 | Course multimedia accessible | Data described in text form for screen readers |
| 8.5 | Accessible course design | Canvas New Quizzes WCAG 2.1 compliant |
| 8.6 | Course design facilitates readability | Clear formatting, consistent structure |

---

## Rubric Criteria (for Gradebook Display)

Each LA4 quiz worth 25 points with the following breakdown:

| Performance Level | Points | Description |
|-------------------|--------|-------------|
| Exceeds Expectations | 23-25 | Demonstrates comprehensive data literacy and historical thinking |
| Meets Expectations | 18-22 | Shows solid understanding with minor gaps |
| Approaching | 13-17 | Demonstrates partial understanding; needs review |
| Developing | 0-12 | Requires significant additional practice with data analysis |

---

## Feedback and Remediation

All questions include:
- **Correct Answer Feedback**: Reinforces learning and explains why answer is correct
- **Incorrect Answer Feedback**: Guides students toward correct thinking without giving away answer
- **Remediation Suggestions**: Embedded in feedback pointing to module content for review

**Post-Quiz Options**:
- Students may review quiz after due date to see correct answers
- Two attempts allow for self-correction and learning
- Highest score policy reduces test anxiety

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jan 2026 | Initial conversion from HTML to Canvas New Quizzes |

---

## Contact

For questions about implementation or alignment:
- Course Designer: Angela Westmoreland
- GitHub: [@AMLW05](https://github.com/AMLW05)
