# HIS-131 PROJECT CORRECTIONS NEEDED

## CRITICAL ISSUE IDENTIFIED

The dashboard currently has **INCORRECT project/checkpoint structure**.

### What Was Built (WRONG):
- Module 1: Generic "Project Checkpoint 1: Topic Selection"
- Module 3: Generic "Project Checkpoint 2: Revolutionary Voice Research"
- Module 5: Generic "Project Checkpoint 3: Historical Context Analysis"
- Module 7: Generic "Final Project"

### What SHOULD Be Built (CORRECT):

The actual HIS-131 course uses a **"What is America?" Portfolio Project** that builds across modules with specific themed components:

#### Module 1: Part 1-A - "What is America?" Baseline
- **ONE PowerPoint slide** capturing initial answer
- Baseline that student revisits at course end
- Purpose: CLO1 (construct claims) and CLO4 (connect themes)

#### Module 2: Component 1 - Colonial Character/Visual
- Character sketch or visual representing colonial period figure/group
- Analysis of Contact & Collision experience
- Connection to identity formation

#### Module 3: Component 2 - Revolutionary Voice
- Primary source analysis or created document
- Revolution's promises vs. contradictions
- Connection to founding ideals

#### Module 4: Component 3 - National Symbol/Document (NOT checkpoint - separate project)
**Module 4 has TWO things:**
1. **"Freedom - Defining Liberty" Project** (100 points)
   - 1-3 PowerPoint slides
   - Choose from 3 format options:
     - Competing Visions of Freedom
     - Freedom's Paradoxes Timeline
     - Reform Movements and Revolutionary Rhetoric
   - Address "Liberty and justice—now what?"
   - Multiple perspectives analysis

2. **Midterm Exam** (covering Modules 1-4)

#### Module 5: Component 4 - Map Moment
- Map or visual representing territorial expansion (1828-1845)
- Analysis of who benefited, who was displaced
- Connection to Manifest Destiny

#### Module 6: Component 5 - Movement Voice
- Voice from reform movement (abolition, women's rights, temperance)
- Analysis of when progress divides
- Connection to contested visions

#### Module 7: FINAL PROJECT - "What is America?" Portfolio (400 points = 40% of grade!)
**Structure:**
- Slide 1: Pre-course answer
- Slides 2-7: One slide per component (Modules 1-6)
- Slide 8: Then/Now Comparison
- Slide 9: Final Reflection

### Files to Update:

1. **module1-activities.js**
   - Replace `module1Checkpoint` with actual "What is America? Part 1-A"
   - ONE slide, baseline answer

2. **module2-activities.js**
   - ADD `module2ProjectComponent` - Colonial Character/Visual

3. **module3-activities.js**
   - Replace `module3Checkpoint` with `module3ProjectComponent` - Revolutionary Voice

4. **module4-activities.js**
   - ALREADY HAS the correct "Freedom" project
   - NO checkpoint needed - this module has Midterm instead

5. **module5678-activities.js** (modules5678-activities.js)
   - Replace `module5Checkpoint` with `module5ProjectComponent` - Map Moment
   - ADD `module6ProjectComponent` - Movement Voice
   - Replace `module7FinalProject` with correct "What is America?" Portfolio instructions

6. **course-data.json**
   - Update all project/checkpoint titles and point values
   - Module 4: Remove checkpoint, confirm separate Freedom project (100 pts)
   - Module 7: Update Final Project to 400 points

7. **app.js**
   - Update moduleData mapping to handle new component names

### Source Files with Correct Information:
- `/Users/angelawestmoreland/Documents/*FTCC.Work/Courses/HIS-131/Module 4-11.10/Module_4_Project_Assignment.txt`
- `/Users/angelawestmoreland/Documents/*FTCC.Work/Courses/HIS-131/Module 7-11.12/Final_Project_Instructions.txt`
- Individual module folders for other components

## Next Steps:
1. Read all module project assignment files
2. Replace incorrect checkpoint content with correct project components
3. Update course-data.json with accurate structure
4. Test rendering
5. Commit corrections

---
**Created:** 2026-01-14
**Status:** Identified, needs implementation
