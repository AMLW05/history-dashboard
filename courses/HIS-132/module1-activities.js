// Module 1: Reconstruction & Its Failure (1865-1877)
// Learning Activities Data

const module1Activities = {
  la1: {
    questions: [
      { term: "Reconstruction", def: "Period (1865-1877) of rebuilding the South and reintegrating Confederate states after the Civil War" },
      { term: "Black Codes", def: "Southern laws designed to restrict African Americans' freedom and force them into labor contracts" },
      { term: "Freedmen's Bureau", def: "Federal agency that provided food, housing, medical aid, schools, and legal assistance to formerly enslaved people" },
      { term: "14th Amendment", def: "Granted citizenship to all persons born in the U.S. and guaranteed equal protection under the law" },
      { term: "15th Amendment", def: "Prohibited denial of voting rights based on race, color, or previous condition of servitude" },
      { term: "Radical Reconstruction", def: "Congressional plan that divided South into military districts and required new state constitutions guaranteeing Black suffrage" },
      { term: "Sharecropping", def: "Labor system where freedpeople worked land owned by whites in exchange for a share of the crop" },
      { term: "Ku Klux Klan", def: "White supremacist terrorist organization that used violence to intimidate Black voters and Republicans" },
      { term: "Compromise of 1877", def: "Political deal that ended Reconstruction by withdrawing federal troops from the South" },
      { term: "Carpetbaggers", def: "Derogatory term for Northerners who moved South during Reconstruction, often for political or economic opportunity" },
      { term: "Scalawags", def: "Derogatory term for white Southerners who supported Republican Reconstruction policies" },
      { term: "Redemption", def: "Process by which white Democrats regained control of Southern state governments" },
      { term: "Tenure of Office Act", def: "Law requiring Senate approval for presidential removal of cabinet members, led to Andrew Johnson's impeachment" },
      { term: "Military Reconstruction Act", def: "1867 law dividing South into five military districts under federal control" },
      { term: "Hiram Revels", def: "First African American to serve in U.S. Senate (Mississippi, 1870)" }
    ]
  },

  la2: {
    questions: [
      {
        q: "Which Reconstruction plan was most lenient toward the former Confederate states?",
        answers: [
          "Lincoln's Ten Percent Plan",
          "Congressional Reconstruction",
          "Radical Reconstruction",
          "Military Reconstruction"
        ],
        correct: 0
      },
      {
        q: "What was the primary purpose of the Black Codes enacted by Southern states after the Civil War?",
        answers: [
          "To grant voting rights to African Americans",
          "To restrict the freedom of formerly enslaved people",
          "To provide education for freedpeople",
          "To promote racial integration"
        ],
        correct: 1
      },
      {
        q: "Which Constitutional amendment granted citizenship to all persons born in the United States?",
        answers: [
          "13th Amendment",
          "14th Amendment",
          "15th Amendment",
          "16th Amendment"
        ],
        correct: 1
      },
      {
        q: "Who was impeached by the House of Representatives during Reconstruction but acquitted by the Senate?",
        answers: [
          "Abraham Lincoln",
          "Ulysses S. Grant",
          "Andrew Johnson",
          "Rutherford B. Hayes"
        ],
        correct: 2
      },
      {
        q: "What labor system replaced slavery in much of the South after the Civil War?",
        answers: [
          "Factory wage labor",
          "Free labor with land ownership",
          "Sharecropping and tenant farming",
          "Indentured servitude"
        ],
        correct: 2
      },
      {
        q: "Which group used terrorism and violence to intimidate Black voters and restore white supremacy?",
        answers: [
          "Freedmen's Bureau",
          "Union League",
          "Republican Party",
          "Ku Klux Klan"
        ],
        correct: 3
      },
      {
        q: "The Compromise of 1877 effectively ended Reconstruction by doing what?",
        answers: [
          "Granting full civil rights to all African Americans",
          "Withdrawing federal troops from the South",
          "Expanding the Freedmen's Bureau",
          "Passing new civil rights legislation"
        ],
        correct: 1
      },
      {
        q: "During Radical Reconstruction, African Americans in the South were able to:",
        answers: [
          "Own large plantations",
          "Vote and hold political office",
          "Attend integrated schools",
          "Receive 40 acres and a mule from the government"
        ],
        correct: 1
      },
      {
        q: "What was the main achievement of the Freedmen's Bureau?",
        answers: [
          "Distributing land to formerly enslaved people",
          "Establishing schools and providing education",
          "Enforcing the Black Codes",
          "Removing federal troops from the South"
        ],
        correct: 1
      },
      {
        q: "Why did Reconstruction ultimately fail to protect African American rights?",
        answers: [
          "The 15th Amendment was repealed",
          "Northern voters lost interest and federal commitment waned",
          "African Americans refused to participate in politics",
          "The Supreme Court expanded civil rights protections"
        ],
        correct: 1
      }
    ]
  },

  la3: {
    timelineBuilder: {
      instructions: "Sort these Reconstruction events in chronological order from 1865 to 1877:",
      events: [
        { event: "Civil War ends; Lincoln assassinated; Andrew Johnson becomes president", date: "April 1865" },
        { event: "13th Amendment ratified, abolishing slavery", date: "December 1865" },
        { event: "Congress passes Civil Rights Act over Johnson's veto", date: "April 1866" },
        { event: "14th Amendment ratified, granting citizenship and equal protection", date: "July 1868" },
        { event: "Military Reconstruction Act divides South into five military districts", date: "March 1867" },
        { event: "Andrew Johnson impeached by House, acquitted by Senate", date: "1868" },
        { event: "Ulysses S. Grant elected president", date: "November 1868" },
        { event: "15th Amendment ratified, prohibiting racial discrimination in voting", date: "February 1870" },
        { event: "Hiram Revels becomes first Black U.S. Senator", date: "February 1870" },
        { event: "Ku Klux Klan Act passed to combat white supremacist violence", date: "April 1871" },
        { event: "Disputed election: Hayes vs. Tilden", date: "November 1876" },
        { event: "Compromise of 1877 ends Reconstruction; federal troops withdrawn", date: "March 1877" }
      ]
    },

    comparisonActivity: {
      instructions: "Compare Presidential Reconstruction vs. Congressional Reconstruction. Categorize each characteristic under the correct approach:",
      regions: ["Presidential Reconstruction (Lincoln/Johnson)", "Congressional Reconstruction (Radical Republicans)"],
      characteristics: [
        { text: "Lenient readmission of Southern states", answer: "Presidential Reconstruction" },
        { text: "Required Southern states to ratify 14th Amendment", answer: "Congressional Reconstruction" },
        { text: "Allowed Black Codes to be enacted", answer: "Presidential Reconstruction" },
        { text: "Divided South into military districts", answer: "Congressional Reconstruction" },
        { text: "Required only 10% loyalty oath for readmission", answer: "Presidential Reconstruction" },
        { text: "Demanded protection of Black voting rights", answer: "Congressional Reconstruction" },
        { text: "Led to Andrew Johnson's impeachment", answer: "Congressional Reconstruction" },
        { text: "Resulted in rapid restoration of white Democratic control", answer: "Presidential Reconstruction" },
        { text: "Created Freedmen's Bureau to assist formerly enslaved people", answer: "Congressional Reconstruction" },
        { text: "Sought to transform Southern society and politics", answer: "Congressional Reconstruction" }
      ]
    }
  }
};

// Module 1 Quiz Questions
const module1Quiz = {
  questions: [
    {
      q: "How did the 14th Amendment expand federal power over the states?",
      answers: [
        "It gave the federal government authority to protect individual rights against state violations",
        "It reduced federal oversight of state elections",
        "It eliminated states' rights entirely",
        "It transferred all law enforcement to federal marshals"
      ],
      correct: 0
    },
    {
      q: "What economic system trapped many freedpeople in cycles of debt after the Civil War?",
      answers: [
        "Factory wage labor",
        "Tenant farming and sharecropping",
        "Land ownership programs",
        "Government employment"
      ],
      correct: 1
    },
    {
      q: "Why did Radical Republicans oppose Andrew Johnson's Reconstruction plan?",
      answers: [
        "It was too harsh on the South",
        "It failed to protect freedpeople's rights and allowed quick restoration of white Southern power",
        "It abolished slavery too quickly",
        "It required military occupation indefinitely"
      ],
      correct: 1
    },
    {
      q: "What was the significance of Hiram Revels' election to the U.S. Senate in 1870?",
      answers: [
        "He was the first African American to serve in Congress",
        "He represented a Northern state",
        "He was appointed by President Grant",
        "He served for 30 years"
      ],
      correct: 0
    },
    {
      q: "How did the Compromise of 1877 represent the abandonment of Reconstruction ideals?",
      answers: [
        "It strengthened federal protection of Black voting rights",
        "It withdrew federal troops, leaving African Americans vulnerable to white supremacist violence",
        "It required Southern states to pass new civil rights laws",
        "It expanded the Freedmen's Bureau"
      ],
      correct: 1
    },
    {
      q: "During Reconstruction, what did 'Redemption' refer to?",
      answers: [
        "The process of formerly enslaved people buying their freedom",
        "White Democrats using violence and fraud to regain political control in the South",
        "Federal programs to rebuild Southern infrastructure",
        "Religious revival movements"
      ],
      correct: 1
    },
    {
      q: "What limitation did the 15th Amendment have?",
      answers: [
        "It only applied to Northern states",
        "It did not prohibit literacy tests, poll taxes, or other indirect methods of disenfranchisement",
        "It excluded women from voting",
        "Both B and C"
      ],
      correct: 3
    },
    {
      q: "How did African Americans exercise political power during Reconstruction?",
      answers: [
        "They were excluded from all political participation",
        "They voted, held office, and worked to expand public education",
        "They formed a separate political party",
        "They only participated in local elections"
      ],
      correct: 1
    },
    {
      q: "What role did the Freedmen's Bureau play during Reconstruction?",
      answers: [
        "It enforced Black Codes",
        "It provided education, legal assistance, and support for formerly enslaved people",
        "It distributed large plantations to freedpeople",
        "It organized the Ku Klux Klan"
      ],
      correct: 1
    },
    {
      q: "Why is Reconstruction often considered an 'unfinished revolution'?",
      answers: [
        "Slavery was never fully abolished",
        "African Americans gained temporary rights that were systematically stripped away after 1877",
        "The South never rejoined the Union",
        "No constitutional amendments were passed"
      ],
      correct: 1
    }
  ]
};

// Module 1 Project Checkpoint
const module1Project = {
  instructions: `**Module 1 Project Checkpoint: Initial Definition + Piece #1**

**Part A: Initial Definition (25 points)**
Before studying American history from 1865 to present, answer this essential question:

**"What is America?"**

Write 200-300 words defining what America means to you RIGHT NOW, before exploring Reconstruction through the present. Consider:
- What values, ideals, or principles define America?
- Who is included in "We the People"?
- What does freedom mean?
- What role should government play?

This initial definition will serve as your starting point. You'll revisit and revise this definition at the end of the semester.

**Part B: Portfolio Piece #1 - Reconstruction's Promises (25 points)**
Analyze competing visions of freedom during Reconstruction (1865-1877).

**Task:**
Create a visual or written piece that explores how DIFFERENT groups defined freedom during Reconstruction:
- Formerly enslaved African Americans
- White Southern planters
- Radical Republicans in Congress
- President Andrew Johnson

**Requirements:**
- Identify at least THREE different visions of freedom
- Use specific historical evidence from The American Yawp Chapter 15
- Explain which vision ultimately prevailed and why
- Connect to your initial definition: How do these Reconstruction debates about freedom relate to your own definition of America?

**Format Options:**
- Comparison chart or infographic
- Written analysis (400-500 words)
- Annotated timeline with analysis
- Visual presentation with text

**Submission:**
- Upload to Canvas by end of Module 1
- Save this piece - it becomes part of your Final Portfolio in Module 7`,

  rubric: "RUBRIC_1_Project_Checkpoints",

  scaffolding: {
    thesisTemplates: [
      "During Reconstruction, [group] defined freedom as _____, while [another group] believed freedom meant _____.",
      "The conflict over freedom during Reconstruction reveals that _____.",
      "Ultimately, _____ vision of freedom prevailed because _____."
    ],
    commonMistakes: [
      "Treating 'freedom' as having only one meaning - it meant different things to different groups",
      "Ignoring African Americans' own agency and activism in defining freedom",
      "Focusing only on political rights without considering economic freedom"
    ],
    primarySourceQuestions: [
      "Who created this source, and what was their vision of freedom?",
      "What does this source reveal about power dynamics during Reconstruction?",
      "Whose voices are present? Whose are absent?"
    ]
  }
};
