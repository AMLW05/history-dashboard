// Module 4: World War I & 1920s (1914-1929)
// Learning Activities Data

const module4Activities = {
  la1: {
    questions: [
      { term: "World War I", def: "Global conflict (1914-1918) that transformed America into a world power and led to significant social changes" },
      { term: "Treaty of Versailles", def: "1919 peace treaty ending WWI; imposed harsh terms on Germany and created League of Nations" },
      { term: "League of Nations", def: "International peacekeeping organization proposed by Wilson; U.S. Senate rejected American membership" },
      { term: "Espionage Act", def: "1917 law restricting antiwar speech and protest; used to prosecute dissidents" },
      { term: "Great Migration", def: "Movement of 1.5 million African Americans from South to Northern cities (1916-1930)" },
      { term: "Red Scare", def: "1919-1920 fear of communism and radicalism that led to Palmer Raids and deportations" },
      { term: "Palmer Raids", def: "1919-1920 federal roundups of suspected radicals and immigrants, often without due process" },
      { term: "Sacco and Vanzetti", def: "Italian anarchist immigrants executed despite questionable evidence; case revealed nativism and class bias" },
      { term: "Prohibition", def: "18th Amendment (1920) banning alcohol; led to organized crime and widespread violations" },
      { term: "Scopes Trial", def: "1925 Tennessee trial over teaching evolution, highlighting urban-rural cultural divide" },
      { term: "Harlem Renaissance", def: "1920s flowering of Black art, literature, music, and culture in Harlem, New York" },
      { term: "KKK Revival", def: "1920s resurgence of Ku Klux Klan targeting immigrants, Catholics, Jews, and African Americans" },
      { term: "Immigration Act of 1924", def: "Law establishing racist quotas severely restricting immigration from Southern/Eastern Europe and Asia" },
      { term: "New Woman", def: "1920s image of liberated women (flappers) with short hair, shorter skirts, and more freedom" },
      { term: "Consumer Culture", def: "1920s rise of advertising, credit buying, and mass consumption of automobiles and appliances" }
    ]
  },

  la2: {
    questions: [
      {
        q: "What event triggered U.S. entry into World War I in 1917?",
        answers: [
          "Sinking of the Lusitania",
          "German submarine warfare and Zimmermann Telegram",
          "Attack on Pearl Harbor",
          "Assassination of Archduke Franz Ferdinand"
        ],
        correct: 1
      },
      {
        q: "The Espionage Act (1917) and Sedition Act (1918) restricted:",
        answers: [
          "Immigration",
          "Free speech and antiwar protest",
          "Labor unions",
          "Women's rights"
        ],
        correct: 1
      },
      {
        q: "What was the Great Migration?",
        answers: [
          "European immigration to America",
          "Movement of African Americans from South to Northern cities",
          "Westward expansion",
          "Asian immigration"
        ],
        correct: 1
      },
      {
        q: "The Red Scare of 1919-1920 targeted:",
        answers: [
          "German immigrants",
          "Suspected communists, anarchists, and radicals",
          "Prohibition violators",
          "Labor organizers only"
        ],
        correct: 1
      },
      {
        q: "What cultural movement celebrated Black art, literature, and music in 1920s Harlem?",
        answers: [
          "Progressive Movement",
          "New Deal",
          "Harlem Renaissance",
          "Jazz Age"
        ],
        correct: 2
      },
      {
        q: "The 18th Amendment (1920) did what?",
        answers: [
          "Granted women's suffrage",
          "Prohibited manufacture and sale of alcohol",
          "Restricted immigration",
          "Ended segregation"
        ],
        correct: 1
      },
      {
        q: "The Scopes Trial (1925) centered on:",
        answers: [
          "Prohibition",
          "Teaching evolution in public schools",
          "Women's suffrage",
          "Labor rights"
        ],
        correct: 1
      },
      {
        q: "The Immigration Act of 1924 established:",
        answers: [
          "Open immigration",
          "Racist quotas limiting Southern/Eastern European and Asian immigration",
          "Free entry for all Europeans",
          "Complete ban on all immigration"
        ],
        correct: 1
      },
      {
        q: "Who was Marcus Garvey?",
        answers: [
          "Jazz musician",
          "Black nationalist leader advocating race pride and Back-to-Africa movement",
          "Prohibition enforcer",
          "Harlem Renaissance poet"
        ],
        correct: 1
      },
      {
        q: "What characterized the 'New Woman' of the 1920s?",
        answers: [
          "Traditional domestic roles",
          "Greater social and sexual freedom, shorter hair and skirts",
          "Opposition to women's suffrage",
          "Rural farm life"
        ],
        correct: 1
      }
    ]
  },

  la3: {
    timelineBuilder: {
      instructions: "Sort these WWI and 1920s events in chronological order from 1914 to 1929:",
      events: [
        { event: "World War I begins in Europe", date: "August 1914" },
        { event: "Lusitania sunk by German submarine", date: "May 1915" },
        { event: "U.S. enters World War I", date: "April 1917" },
        { event: "Espionage Act restricts antiwar speech", date: "June 1917" },
        { event: "World War I ends; Treaty of Versailles signed", date: "November 1918" },
        { event: "Red Scare: Palmer Raids target radicals", date: "1919-1920" },
        { event: "18th Amendment: Prohibition begins", date: "January 1920" },
        { event: "19th Amendment: Women gain voting rights", date: "August 1920" },
        { event: "Immigration Act of 1924 restricts entry", date: "1924" },
        { event: "Scopes Trial highlights cultural conflicts", date: "July 1925" },
        { event: "Stock market peaks before Great Depression", date: "1929" }
      ]
    },

    comparisonActivity: {
      instructions: "Analyze cultural conflicts of the 1920s. Categorize each as representing 'Traditional Values' or 'Modern Values':",
      regions: ["Traditional Values", "Modern Values"],
      characteristics: [
        { text: "Prohibition movement banning alcohol", answer: "Traditional Values" },
        { text: "Flapper culture and new sexual freedom", answer: "Modern Values" },
        { text: "Fundamentalist opposition to teaching evolution", answer: "Traditional Values" },
        { text: "Harlem Renaissance celebrating Black culture", answer: "Modern Values" },
        { text: "KKK revival targeting immigrants and minorities", answer: "Traditional Values" },
        { text: "Consumer culture promoting mass consumption", answer: "Modern Values" },
        { text: "Immigration restriction based on race and ethnicity", answer: "Traditional Values" },
        { text: "Jazz music and dance halls", answer: "Modern Values" },
        { text: "Emphasis on rural agrarian life", answer: "Traditional Values" },
        { text: "Urban cosmopolitan culture", answer: "Modern Values" }
      ]
    }
  }
};

// Module 4 Quiz Questions
const module4Quiz = {
  questions: [
    {
      q: "Why did President Wilson ask Congress to declare war on Germany in 1917?",
      answers: [
        "Germany attacked American soil",
        "Unrestricted submarine warfare and Zimmermann Telegram proposing German-Mexican alliance",
        "To support France's colonial ambitions",
        "To acquire German territory"
      ],
      correct: 1
    },
    {
      q: "How did World War I affect civil liberties in America?",
      answers: [
        "It expanded free speech protections",
        "It led to suppression of dissent through Espionage and Sedition Acts",
        "It had no effect on civil liberties",
        "It eliminated all censorship"
      ],
      correct: 1
    },
    {
      q: "What motivated the Great Migration of African Americans to Northern cities?",
      answers: [
        "Government relocation programs",
        "Escape from Jim Crow segregation and seek economic opportunities in wartime industries",
        "Free housing in the North",
        "Prohibition"
      ],
      correct: 1
    },
    {
      q: "The Red Scare and Palmer Raids demonstrated:",
      answers: [
        "Respect for civil liberties",
        "Fear of communism leading to violations of rights and deportations",
        "Support for labor unions",
        "Openness to radical ideas"
      ],
      correct: 1
    },
    {
      q: "Why did the U.S. Senate reject the Treaty of Versailles and League of Nations?",
      answers: [
        "It was too lenient on Germany",
        "Concerns about loss of sovereignty and entanglement in European affairs",
        "It abolished all military forces",
        "Wilson fully compromised with senators"
      ],
      correct: 1
    },
    {
      q: "What was the unintended consequence of Prohibition?",
      answers: [
        "Complete elimination of alcohol consumption",
        "Rise of organized crime, bootlegging, and widespread violation",
        "Immediate repeal",
        "End of cultural conflicts"
      ],
      correct: 1
    },
    {
      q: "The Harlem Renaissance represented:",
      answers: [
        "White control over Black culture",
        "Flourishing of Black artistic, literary, and musical expression",
        "Opposition to the Great Migration",
        "Support for segregation"
      ],
      correct: 1
    },
    {
      q: "The Immigration Act of 1924 aimed to:",
      answers: [
        "Welcome all immigrants equally",
        "Preserve 'racial purity' by restricting Southern/Eastern European and Asian immigration",
        "Eliminate all immigration restrictions",
        "Encourage diversity"
      ],
      correct: 1
    },
    {
      q: "The Scopes Trial highlighted what cultural divide?",
      answers: [
        "North vs. South economic differences",
        "Urban modernism vs. rural fundamentalism over teaching evolution",
        "Prohibition supporters vs. opponents",
        "Men's vs. women's roles"
      ],
      correct: 1
    },
    {
      q: "How did the 1920s represent both progress and reaction?",
      answers: [
        "There was only progress",
        "New freedoms (women's suffrage, consumer culture) coexisted with repression (KKK, immigration restriction, Red Scare)",
        "There was only reaction",
        "Everyone agreed on social changes"
      ],
      correct: 1
    }
  ]
};

// Module 4 Midterm Exam (Covers Modules 1-4: Reconstruction through 1920s)
const module4Midterm = {
  title: "Midterm Exam: American History II (1865-1929)",
  instructions: "This comprehensive exam covers Modules 1-4: Reconstruction, Gilded Age, Progressive Era, and WWI/1920s. You have 75 minutes to complete 25 questions. Each question is worth 2 points. Questions include multiple choice and true/false formats.",
  questions: [
    // Module 1: Reconstruction (6 questions)
    {
      q: "Which Reconstruction plan was most lenient toward former Confederate states?",
      answers: [
        "Lincoln's Ten Percent Plan",
        "Congressional Reconstruction",
        "Radical Reconstruction",
        "Military Reconstruction Act"
      ],
      correct: 0,
      type: "Multiple Choice"
    },
    {
      q: "The 14th Amendment granted:",
      answers: [
        "Women's suffrage",
        "Citizenship and equal protection under the law to all persons born in U.S.",
        "Land to formerly enslaved people",
        "Abolition of slavery"
      ],
      correct: 1,
      type: "Multiple Choice"
    },
    {
      q: "True or False: The Freedmen's Bureau successfully distributed '40 acres and a mule' to all formerly enslaved people.",
      answers: [
        "True",
        "False"
      ],
      correct: 1,
      type: "True/False"
    },
    {
      q: "The Compromise of 1877 ended Reconstruction by:",
      answers: [
        "Expanding federal civil rights enforcement",
        "Withdrawing federal troops from the South",
        "Granting land to freedpeople",
        "Passing new civil rights laws"
      ],
      correct: 1,
      type: "Multiple Choice"
    },
    {
      q: "Sharecropping trapped many African Americans in:",
      answers: [
        "Factory work",
        "Cycles of debt and economic dependence",
        "Land ownership",
        "Political power"
      ],
      correct: 1,
      type: "Multiple Choice"
    },
    {
      q: "The Ku Klux Klan during Reconstruction used violence to:",
      answers: [
        "Support Republican Reconstruction",
        "Intimidate Black voters and restore white supremacy",
        "Promote racial equality",
        "Help formerly enslaved people"
      ],
      correct: 1,
      type: "Multiple Choice"
    },

    // Module 2: Gilded Age (6 questions)
    {
      q: "Social Darwinism was used to justify:",
      answers: [
        "Labor unions",
        "Extreme wealth inequality as natural and inevitable",
        "Government regulation of business",
        "Women's suffrage"
      ],
      correct: 1,
      type: "Multiple Choice"
    },
    {
      q: "Andrew Carnegie achieved dominance in steel through:",
      answers: [
        "Horizontal integration",
        "Vertical integration",
        "Government subsidies",
        "Labor union support"
      ],
      correct: 1,
      type: "Multiple Choice"
    },
    {
      q: "True or False: The Populist Party represented farmers demanding railroad regulation and free silver.",
      answers: [
        "True",
        "False"
      ],
      correct: 0,
      type: "True/False"
    },
    {
      q: "Plessy v. Ferguson (1896) legalized:",
      answers: [
        "Voting rights for all",
        "'Separate but equal' racial segregation",
        "Labor unions",
        "Women's suffrage"
      ],
      correct: 1,
      type: "Multiple Choice"
    },
    {
      q: "The Haymarket Affair (1886) damaged the labor movement by:",
      answers: [
        "Winning major concessions",
        "Associating unions with violence and anarchism",
        "Gaining public support",
        "Ending all strikes"
      ],
      correct: 1,
      type: "Multiple Choice"
    },
    {
      q: "The Chinese Exclusion Act (1882) was significant as:",
      answers: [
        "The first federal law restricting immigration by nationality",
        "A law promoting Chinese immigration",
        "Protection for Chinese workers",
        "End of all discrimination"
      ],
      correct: 0,
      type: "Multiple Choice"
    },

    // Module 3: Progressive Era (7 questions)
    {
      q: "Muckrakers like Ida Tarbell and Upton Sinclair:",
      answers: [
        "Defended big business",
        "Exposed corruption and social problems through journalism",
        "Opposed all reform",
        "Supported monopolies"
      ],
      correct: 1,
      type: "Multiple Choice"
    },
    {
      q: "The Triangle Shirtwaist Fire (1911) led to:",
      answers: [
        "No changes",
        "Workplace safety regulations and building codes",
        "End of women's factory work",
        "Support for child labor"
      ],
      correct: 1,
      type: "Multiple Choice"
    },
    {
      q: "True or False: The 19th Amendment granted women the right to vote in 1920.",
      answers: [
        "True",
        "False"
      ],
      correct: 0,
      type: "True/False"
    },
    {
      q: "The Philippine-American War demonstrated that:",
      answers: [
        "America peacefully granted independence",
        "America brutally suppressed Filipino independence, contradicting democratic ideals",
        "Filipinos welcomed American control",
        "The war was bloodless"
      ],
      correct: 1,
      type: "Multiple Choice"
    },
    {
      q: "Theodore Roosevelt's Roosevelt Corollary claimed:",
      answers: [
        "The U.S. should avoid Latin America",
        "The U.S. had 'police power' to intervene in Latin America",
        "European powers should control Western Hemisphere",
        "All nations are equal"
      ],
      correct: 1,
      type: "Multiple Choice"
    },
    {
      q: "Ida B. Wells is known for:",
      answers: [
        "Leading women's suffrage",
        "Documenting lynching and fighting for Black civil rights",
        "Founding settlement houses",
        "Muckraking journalism about oil"
      ],
      correct: 1,
      type: "Multiple Choice"
    },
    {
      q: "Progressive Era reforms often:",
      answers: [
        "Benefited all groups equally",
        "Excluded or discriminated against African Americans, immigrants, and marginalized groups",
        "Achieved perfect equality",
        "Ended all corruption"
      ],
      correct: 1,
      type: "Multiple Choice"
    },

    // Module 4: WWI & 1920s (6 questions)
    {
      q: "The Espionage and Sedition Acts during WWI:",
      answers: [
        "Protected free speech",
        "Restricted antiwar protest and dissent",
        "Promoted civil liberties",
        "Ended censorship"
      ],
      correct: 1,
      type: "Multiple Choice"
    },
    {
      q: "The Great Migration involved:",
      answers: [
        "European immigration",
        "African Americans moving from South to Northern cities",
        "Westward expansion",
        "Asian immigration"
      ],
      correct: 1,
      type: "Multiple Choice"
    },
    {
      q: "True or False: The U.S. Senate rejected the Treaty of Versailles and membership in the League of Nations.",
      answers: [
        "True",
        "False"
      ],
      correct: 0,
      type: "True/False"
    },
    {
      q: "The Red Scare (1919-1920) targeted:",
      answers: [
        "Businessmen",
        "Suspected communists, anarchists, and immigrants",
        "Prohibition violators",
        "War veterans"
      ],
      correct: 1,
      type: "Multiple Choice"
    },
    {
      q: "The Harlem Renaissance represented:",
      answers: [
        "White cultural dominance",
        "Flourishing of Black art, literature, and music",
        "Opposition to civil rights",
        "Support for segregation"
      ],
      correct: 1,
      type: "Multiple Choice"
    },
    {
      q: "The 1920s demonstrated cultural conflict between:",
      answers: [
        "North and South only",
        "Urban modernism and rural traditionalism (Scopes Trial, Prohibition, immigration restriction)",
        "Complete national consensus",
        "Rich and poor only"
      ],
      correct: 1,
      type: "Multiple Choice"
    }
  ]
};

// Module 4 Discussion Board
const module4Discussion = {
  prompt: `**Discussion Board 2: Modern America & Portfolio Piece #4**

This discussion connects to your "What is America?" portfolio project.

**Part 1: Initial Post (50 points)**

Read Chapters 21-22 from The American Yawp (WWI and 1920s).

Then respond to this question:

**"How did World War I and the 1920s define 'modern' American identity, and who was included vs. excluded from this modern America?"**

Your post should:
- Analyze how WWI transformed America's role in the world
- Examine cultural conflicts of the 1920s (e.g., Prohibition, Scopes Trial, immigration restriction, Harlem Renaissance)
- Consider which groups gained rights/freedoms and which faced repression
- Use specific historical evidence from the readings
- Connect to your evolving understanding of "What is America?"
- Be 300-400 words

**Part 2: Portfolio Piece #4 - Modern America (50 points)**

Create a visual or written piece analyzing: **"How did WWI and the 1920s define modern American identity?"**

**Options:**
- Timeline showing expansion of freedoms (women's suffrage) alongside repressions (Red Scare, KKK, immigration restriction)
- Comparison chart: Who benefited vs. who was harmed in 1920s America?
- Visual representation of cultural conflicts (traditional vs. modern values)
- Written analysis comparing America's global power to domestic inequalities

**Requirements:**
- Use specific evidence from The American Yawp
- Address both progress and reaction in the 1920s
- Consider race, gender, class, and immigration
- Save this piece for your Final Portfolio in Module 7

**Part 3: Peer Engagement (30 points total)**

Respond thoughtfully to TWO classmates' posts (15 points each):
- Build on their analysis with additional evidence
- Make connections to earlier modules (Reconstruction, Gilded Age, Progressive Era)
- Explore contradictions in "modern" America
- Each response: 100-150 words`,

  rubric: "RUBRIC_2_Discussion_Boards",

  pointsBreakdown: {
    initialPost: 50,
    portfolioPiece: 50,
    peerResponse1: 15,
    peerResponse2: 15
  }
};
