// Modules 5-8: Depression & WWII, Cold War & Civil Rights, Rights Revolutions, Contemporary America

// ==================== MODULE 5: DEPRESSION & WORLD WAR II (1929-1945) ====================

const module5Activities = {
  la1: {
    questions: [
      { term: "Great Depression", def: "Severe economic crisis (1929-1941) causing mass unemployment, poverty, and suffering" },
      { term: "Stock Market Crash", def: "October 1929 collapse triggering economic depression; revealed underlying economic weaknesses" },
      { term: "Dust Bowl", def: "1930s ecological disaster in Great Plains caused by drought and poor farming practices" },
      { term: "New Deal", def: "FDR's programs to provide relief, recovery, and reform during Great Depression" },
      { term: "Social Security Act", def: "1935 New Deal program providing old-age pensions and unemployment insurance" },
      { term: "Pearl Harbor", def: "December 7, 1941 Japanese attack on Hawaii that brought U.S. into World War II" },
      { term: "Japanese Internment", def: "Forced relocation of 120,000 Japanese Americans to camps during WWII, violating civil liberties" },
      { term: "Manhattan Project", def: "Secret U.S. program developing atomic bomb during WWII" },
      { term: "D-Day", def: "June 6, 1944 Allied invasion of Normandy, France, turning point in European theater" },
      { term: "Holocaust", def: "Nazi genocide of 6 million Jews and millions of others during WWII" },
      { term: "Rosie the Riveter", def: "Symbol of women working in wartime factories, challenging traditional gender roles" },
      { term: "Double V Campaign", def: "African American campaign for victory over fascism abroad and racism at home" },
      { term: "GI Bill", def: "1944 law providing veterans with education, housing, and business benefits" },
      { term: "United Nations", def: "International organization founded 1945 to maintain peace and prevent future wars" },
      { term: "Atomic Bomb", def: "Nuclear weapons dropped on Hiroshima and Nagasaki (August 1945), ending WWII" }
    ]
  },

  la2: {
    questions: [
      {
        q: "What caused the Great Depression?",
        answers: [
          "Single factor: stock market crash",
          "Multiple factors: overproduction, speculation, unequal wealth distribution, bank failures",
          "Government over-regulation",
          "War spending"
        ],
        correct: 1
      },
      {
        q: "Franklin D. Roosevelt's New Deal aimed to:",
        answers: [
          "Eliminate all government programs",
          "Provide relief, recovery, and reform through government programs",
          "Return to laissez-faire capitalism",
          "Abolish capitalism"
        ],
        correct: 1
      },
      {
        q: "The Social Security Act (1935) created:",
        answers: [
          "Universal healthcare",
          "Old-age pensions and unemployment insurance",
          "Free college education",
          "Housing for all"
        ],
        correct: 1
      },
      {
        q: "What event brought the United States into World War II?",
        answers: [
          "German invasion of Poland",
          "Japanese attack on Pearl Harbor",
          "Italian aggression in Ethiopia",
          "Soviet expansion"
        ],
        correct: 1
      },
      {
        q: "Japanese internment during WWII involved:",
        answers: [
          "Voluntary relocation",
          "Forced detention of 120,000 Japanese Americans, violating their rights",
          "Protection from discrimination",
          "Equal treatment"
        ],
        correct: 1
      },
      {
        q: "The Double V Campaign represented:",
        answers: [
          "Two Allied victories",
          "African American fight for victory over fascism abroad and racism at home",
          "Women's war efforts",
          "Economic recovery"
        ],
        correct: 1
      },
      {
        q: "D-Day (June 6, 1944) was:",
        answers: [
          "Japanese surrender",
          "Allied invasion of Normandy, turning point in European war",
          "Atomic bomb testing",
          "End of Great Depression"
        ],
        correct: 1
      },
      {
        q: "The atomic bombs dropped on Hiroshima and Nagasaki:",
        answers: [
          "Had no casualties",
          "Killed over 200,000 people and ended WWII",
          "Were never used",
          "Only damaged military targets"
        ],
        correct: 1
      },
      {
        q: "How did WWII affect women's roles?",
        answers: [
          "No change occurred",
          "Millions worked in war industries, challenging traditional gender roles",
          "Women were excluded from all work",
          "Traditional roles were reinforced"
        ],
        correct: 1
      },
      {
        q: "The GI Bill provided veterans with:",
        answers: [
          "Nothing",
          "Education, housing loans, and business benefits",
          "Only medical care",
          "Cash payments only"
        ],
        correct: 1
      }
    ]
  },

  la3: {
    timelineBuilder: {
      instructions: "Sort these Depression and WWII events in chronological order from 1929 to 1945:",
      events: [
        { event: "Stock Market Crash triggers Great Depression", date: "October 1929" },
        { event: "Franklin D. Roosevelt elected president; New Deal begins", date: "1932-1933" },
        { event: "Social Security Act passed", date: "August 1935" },
        { event: "Germany invades Poland; WWII begins in Europe", date: "September 1939" },
        { event: "Pearl Harbor attacked; U.S. enters WWII", date: "December 7, 1941" },
        { event: "Executive Order 9066: Japanese internment begins", date: "February 1942" },
        { event: "D-Day: Allied invasion of Normandy", date: "June 6, 1944" },
        { event: "GI Bill passed", date: "June 1944" },
        { event: "Germany surrenders; V-E Day", date: "May 8, 1945" },
        { event: "Atomic bombs dropped on Hiroshima and Nagasaki", date: "August 1945" },
        { event: "Japan surrenders; V-J Day; WWII ends", date: "August 15, 1945" },
        { event: "United Nations founded", date: "October 1945" }
      ]
    },

    comparisonActivity: {
      instructions: "Compare New Deal government expansion vs. wartime government expansion:",
      regions: ["New Deal (1933-1939)", "WWII Mobilization (1941-1945)", "Both"],
      characteristics: [
        { text: "Created jobs through public works programs", answer: "New Deal (1933-1939)" },
        { text: "Rationed food, gas, and consumer goods", answer: "WWII Mobilization (1941-1945)" },
        { text: "Expanded federal government power dramatically", answer: "Both" },
        { text: "Established Social Security system", answer: "New Deal (1933-1939)" },
        { text: "Mobilized entire economy for war production", answer: "WWII Mobilization (1941-1945)" },
        { text: "Raised taxes to fund programs", answer: "Both" },
        { text: "Interned Japanese Americans", answer: "WWII Mobilization (1941-1945)" },
        { text: "Created jobs for women in new industries", answer: "WWII Mobilization (1941-1945)" },
        { text: "Regulated banking and finance", answer: "New Deal (1933-1939)" },
        { text: "Changed citizens' expectations of government", answer: "Both" }
      ]
    }
  }
};

const module5Quiz = {
  questions: [
    {
      q: "How did the Great Depression challenge American beliefs in self-reliance and capitalism?",
      answers: [
        "It didn't change anything",
        "Massive unemployment and poverty led many to demand government intervention",
        "Everyone remained confident in capitalism",
        "The Depression was quickly solved"
      ],
      correct: 1
    },
    {
      q: "What was controversial about FDR's New Deal?",
      answers: [
        "Everyone supported it",
        "Critics on the left said it didn't go far enough; critics on the right said it was socialism",
        "It had no opposition",
        "It immediately ended the Depression"
      ],
      correct: 1
    },
    {
      q: "The Dust Bowl revealed:",
      answers: [
        "Benefits of intensive farming",
        "Environmental consequences of poor agricultural practices and drought",
        "Success of government policy",
        "No problems with farming"
      ],
      correct: 1
    },
    {
      q: "Why did FDR wait until 1941 to enter WWII despite conflict starting in 1939?",
      answers: [
        "He supported Germany",
        "Strong isolationist sentiment in America; Pearl Harbor attack changed public opinion",
        "He opposed all wars",
        "America was already at war"
      ],
      correct: 1
    },
    {
      q: "Japanese internment demonstrated that:",
      answers: [
        "The U.S. protected all citizens' rights",
        "Racism and wartime hysteria led to mass violation of civil liberties",
        "Japanese Americans supported the policy",
        "Internment was voluntary"
      ],
      correct: 1
    },
    {
      q: "How did WWII finally end the Great Depression?",
      answers: [
        "It didn't",
        "Massive wartime spending and mobilization created full employment",
        "Depression ended before the war",
        "Only the New Deal ended it"
      ],
      correct: 1
    },
    {
      q: "The Double V Campaign by African Americans demanded:",
      answers: [
        "Only victory abroad",
        "Victory over fascism abroad AND victory over racism at home",
        "Separation from white Americans",
        "No participation in the war"
      ],
      correct: 1
    },
    {
      q: "What ethical debate surrounds the atomic bombs?",
      answers: [
        "There is no debate",
        "Whether ending the war justified killing over 200,000 civilians",
        "Everyone agreed it was necessary",
        "The bombs caused no deaths"
      ],
      correct: 1
    },
    {
      q: "How did the GI Bill benefit returning veterans but reinforce inequality?",
      answers: [
        "All veterans benefited equally",
        "It provided education and housing but discriminated against Black veterans in practice",
        "No one benefited",
        "It only helped officers"
      ],
      correct: 1
    },
    {
      q: "World War II positioned the United States as:",
      answers: [
        "A declining power",
        "An economic and military superpower",
        "Isolated from world affairs",
        "Dependent on other nations"
      ],
      correct: 1
    }
  ]
};

const module5Project = {
  instructions: `**Module 5 Project Checkpoint: Piece #5 - Government Power & Citizen Sacrifice**

**Task:**
Analyze how the New Deal and World War II transformed the relationship between government and citizens.

**Essential Question:**
"When crises occur (Depression, war), how much power should government have, and what sacrifices should citizens make?"

**Requirements:**
- Compare government expansion during New Deal vs. WWII
- Analyze at least TWO specific examples (e.g., Social Security, Japanese internment, rationing, draft, war production)
- Consider who benefited and who was harmed by each
- Use evidence from The American Yawp Chapters 23-24
- Address how these changes affected different groups (race, class, gender)

**Format Options:**
- Timeline showing expansion of government power 1929-1945
- Comparison chart: New Deal programs vs. wartime measures
- Visual analysis of civil liberties vs. national security
- Written analysis (500-600 words)

**Reflection Question:**
How do these debates about government power and citizen sacrifice relate to your understanding of "What is America?" Are these 1930s-1940s debates still relevant today?

**Submission:**
- Upload to Canvas by end of Module 5
- This becomes part of your Final Portfolio in Module 7`,

  rubric: "RUBRIC_1_Project_Checkpoints"
};

// ==================== MODULE 6: COLD WAR & CIVIL RIGHTS (1945-1968) ====================

const module6Activities = {
  la1: {
    questions: [
      { term: "Cold War", def: "Global ideological and political conflict between U.S. and Soviet Union (1947-1991)" },
      { term: "Containment", def: "U.S. policy to prevent spread of communism, foundation of Cold War strategy" },
      { term: "Truman Doctrine", def: "1947 policy pledging U.S. support for nations resisting communism" },
      { term: "Marshall Plan", def: "U.S. program providing billions to rebuild Western Europe and prevent communist influence" },
      { term: "McCarthyism", def: "1950s anti-communist hysteria and persecution led by Senator Joseph McCarthy" },
      { term: "Korean War", def: "1950-1953 conflict between North Korea (communist) and South Korea (U.S.-backed)" },
      { term: "Brown v. Board of Education", def: "1954 Supreme Court decision declaring school segregation unconstitutional" },
      { term: "Montgomery Bus Boycott", def: "1955-1956 protest against segregated buses, launched Rosa Parks and MLK to prominence" },
      { term: "Civil Rights Act of 1964", def: "Landmark law banning discrimination in employment and public accommodations" },
      { term: "Voting Rights Act of 1965", def: "Law banning literacy tests and protecting African Americans' right to vote" },
      { term: "Malcolm X", def: "Black nationalist leader advocating self-defense and Black pride; assassinated 1965" },
      { term: "Black Power", def: "Movement emphasizing racial pride, self-determination, and militant resistance to oppression" },
      { term: "Vietnam War", def: "Longest war in American history (1955-1975); deeply divided nation" },
      { term: "Domino Theory", def: "Theory that if one nation fell to communism, neighbors would follow" },
      { term: "1968", def: "Turning point year: MLK and RFK assassinations, Tet Offensive, urban riots, political upheaval" }
    ]
  },

  la2: {
    questions: [
      {
        q: "The Cold War was primarily a conflict between:",
        answers: [
          "France and Germany",
          "United States and Soviet Union",
          "China and Japan",
          "Britain and India"
        ],
        correct: 1
      },
      {
        q: "U.S. containment policy aimed to:",
        answers: [
          "Spread communism",
          "Prevent the spread of communism",
          "Avoid all international involvement",
          "Support Soviet expansion"
        ],
        correct: 1
      },
      {
        q: "McCarthyism refers to:",
        answers: [
          "Support for civil rights",
          "Anti-communist witch hunts and persecution of suspected communists",
          "Economic policy",
          "Foreign aid programs"
        ],
        correct: 1
      },
      {
        q: "Brown v. Board of Education (1954) declared:",
        answers: [
          "Segregation was constitutional",
          "School segregation was unconstitutional",
          "Voting rights for all",
          "End of all discrimination"
        ],
        correct: 1
      },
      {
        q: "The Montgomery Bus Boycott was triggered by:",
        answers: [
          "School integration",
          "Rosa Parks' arrest for refusing to give up her seat",
          "Voting rights",
          "Employment discrimination"
        ],
        correct: 1
      },
      {
        q: "The Civil Rights Act of 1964 banned:",
        answers: [
          "Voting",
          "Discrimination in employment and public accommodations",
          "Integration",
          "Protests"
        ],
        correct: 1
      },
      {
        q: "Malcolm X advocated for:",
        answers: [
          "Nonviolent integration only",
          "Black nationalism, self-defense, and racial pride",
          "Assimilation into white culture",
          "No political participation"
        ],
        correct: 1
      },
      {
        q: "The Vietnam War divided Americans because:",
        answers: [
          "Everyone supported it",
          "Many questioned its necessity, morality, and conduct",
          "It was quickly won",
          "No one cared"
        ],
        correct: 1
      },
      {
        q: "The Voting Rights Act of 1965 banned:",
        answers: [
          "All voting",
          "Literacy tests and other tactics used to disenfranchise Black voters",
          "Registration",
          "Political parties"
        ],
        correct: 1
      },
      {
        q: "1968 was a turning point because:",
        answers: [
          "Everything was peaceful",
          "MLK and RFK assassinations, Tet Offensive, riots created political upheaval",
          "The war ended",
          "Civil rights were fully achieved"
        ],
        correct: 1
      }
    ]
  },

  la3: {
    timelineBuilder: {
      instructions: "Sort these Cold War and Civil Rights events from 1945 to 1968:",
      events: [
        { event: "Truman Doctrine announced; Cold War begins", date: "1947" },
        { event: "Marshall Plan rebuilds Western Europe", date: "1948" },
        { event: "Korean War begins", date: "1950" },
        { event: "Joseph McCarthy's anti-communist crusade peaks", date: "1950-1954" },
        { event: "Brown v. Board declares school segregation unconstitutional", date: "May 1954" },
        { event: "Montgomery Bus Boycott launches modern Civil Rights Movement", date: "1955-1956" },
        { event: "Greensboro sit-ins spark student activism", date: "February 1960" },
        { event: "March on Washington; MLK 'I Have a Dream' speech", date: "August 1963" },
        { event: "Civil Rights Act bans discrimination", date: "July 1964" },
        { event: "Voting Rights Act passed", date: "August 1965" },
        { event: "Malcolm X assassinated", date: "February 1965" },
        { event: "Martin Luther King Jr. assassinated", date: "April 1968" }
      ]
    },

    comparisonActivity: {
      instructions: "Compare different Civil Rights movement strategies:",
      regions: ["Nonviolent Direct Action", "Legal Challenges", "Black Power/Militant Resistance"],
      characteristics: [
        { text: "Sit-ins, Freedom Rides, marches", answer: "Nonviolent Direct Action" },
        { text: "NAACP lawsuits like Brown v. Board", answer: "Legal Challenges" },
        { text: "Black Panther Party armed patrols", answer: "Black Power/Militant Resistance" },
        { text: "Montgomery Bus Boycott", answer: "Nonviolent Direct Action" },
        { text: "Thurgood Marshall's Supreme Court victories", answer: "Legal Challenges" },
        { text: "Malcolm X's advocacy for self-defense", answer: "Black Power/Militant Resistance" },
        { text: "MLK's nonviolent resistance philosophy", answer: "Nonviolent Direct Action" },
        { text: "Desegregation court orders", answer: "Legal Challenges" },
        { text: "Emphasis on Black pride and cultural nationalism", answer: "Black Power/Militant Resistance" },
        { text: "Civil disobedience accepting arrest", answer: "Nonviolent Direct Action" }
      ]
    },

    dataAnalysis: {
      instructions: "Analyze Civil Rights movement data including voter registration, desegregation timeline, legislative victories, and protest participation. Study the charts carefully, then answer the questions below.",

      chartData: {
        title: "Civil Rights Movement Data (1945-1968)",
        charts: [
          {
            name: "Black Voter Registration in the South",
            data: "Chart shows registration rising from 3% (1940) to 29% (1960) to 62% (1968) after Voting Rights Act"
          },
          {
            name: "School Desegregation Timeline",
            data: "Map showing Southern states' resistance: Only 2% of Black students in integrated schools by 1964, rising to 32% by 1968"
          },
          {
            name: "Major Civil Rights Legislation",
            data: "Timeline: Civil Rights Act 1964 (bans discrimination), Voting Rights Act 1965 (protects voting), Fair Housing Act 1968 (bans housing discrimination)"
          },
          {
            name: "Protest Participation",
            data: "Chart showing escalation: Montgomery (50,000), March on Washington (250,000), Selma to Montgomery (25,000)"
          }
        ]
      },

      questions: [
        {
          q: "How did Black voter registration in the South change after the Voting Rights Act of 1965?",
          a: "Registration jumped from 29% (1960) to 62% (1968), demonstrating the law's effectiveness in protecting voting rights"
        },
        {
          q: "What does school desegregation data reveal about Southern resistance to Brown v. Board?",
          a: "Only 2% of Black students attended integrated schools by 1964 (10 years after Brown), showing massive resistance to court orders"
        },
        {
          q: "Which Civil Rights law had the most immediate measurable impact on voting?",
          a: "Voting Rights Act of 1965, which banned literacy tests and led to dramatic increase in Black voter registration"
        },
        {
          q: "What pattern do you see in protest participation over time?",
          a: "Participation grew massively from local (Montgomery) to national (March on Washington with 250,000), showing movement's expanding reach"
        },
        {
          q: "Why might school desegregation have occurred more slowly than voter registration?",
          a: "School integration required overcoming local resistance, white flight, and lack of federal enforcement, while Voting Rights Act had federal oversight"
        },
        {
          q: "What do the three major civil rights laws (1964, 1965, 1968) collectively address?",
          a: "They comprehensively banned discrimination in public accommodations, voting, employment, and housing"
        },
        {
          q: "How do protest numbers demonstrate the movement's power?",
          a: "Massive participation (250,000 at March on Washington) created political pressure forcing federal action on civil rights"
        },
        {
          q: "What does the 10-year gap between Brown v. Board (1954) and Civil Rights Act (1964) suggest?",
          a: "Legal victories alone were insufficient; grassroots protests and direct action were necessary to force federal legislation"
        },
        {
          q: "Which data source best demonstrates the effectiveness of federal enforcement?",
          a: "Voter registration data after 1965, showing that federal protection under Voting Rights Act produced immediate, measurable results"
        },
        {
          q: "How do these data help historians understand the Civil Rights Movement's success?",
          a: "They reveal that legal changes required grassroots mobilization, federal enforcement, and persistence over decades to achieve measurable impact"
        }
      ]
    }
  },

  la4: {
    title: "LA4: Cold War & Civil Rights Strategies - Categorization",
    format: "Categorization Activity",
    instructions: "Categorize each event, policy, or strategy as representing: Cold War Containment, Civil Rights Legal Strategy, Civil Rights Direct Action, or Cold War/Civil Rights Contradiction.",
    items: [
      { text: "Truman Doctrine pledging support for nations resisting communism", answer: "Cold War Containment" },
      { text: "NAACP lawsuits challenging segregation (Brown v. Board)", answer: "Civil Rights Legal Strategy" },
      { text: "Montgomery Bus Boycott using economic pressure", answer: "Civil Rights Direct Action" },
      { text: "Marshall Plan rebuilding Western Europe to prevent communist influence", answer: "Cold War Containment" },
      { text: "Thurgood Marshall arguing cases before Supreme Court", answer: "Civil Rights Legal Strategy" },
      { text: "Greensboro sit-ins at segregated lunch counters", answer: "Civil Rights Direct Action" },
      { text: "Korean War fighting communist expansion", answer: "Cold War Containment" },
      { text: "Promoting democracy abroad while enforcing Jim Crow at home", answer: "Cold War/Civil Rights Contradiction" },
      { text: "Freedom Rides challenging interstate segregation", answer: "Civil Rights Direct Action" },
      { text: "McCarthyism suppressing dissent in name of anti-communism", answer: "Cold War/Civil Rights Contradiction" },
      { text: "Voting Rights Act litigation and federal enforcement", answer: "Civil Rights Legal Strategy" },
      { text: "March on Washington (1963) demanding civil rights legislation", answer: "Civil Rights Direct Action" },
      { text: "Vietnam War based on Domino Theory", answer: "Cold War Containment" },
      { text: "FBI surveillance of Civil Rights leaders as 'communist threats'", answer: "Cold War/Civil Rights Contradiction" },
      { text: "Selma to Montgomery marches for voting rights", answer: "Civil Rights Direct Action" },
      { text: "Using Cold War rhetoric to pressure government on civil rights", answer: "Cold War/Civil Rights Contradiction" }
    ]
  }
};

const module6Quiz = {
  questions: [
    {
      q: "How did the Cold War shape American domestic and foreign policy?",
      answers: [
        "It had no effect",
        "Fear of communism justified foreign interventions, nuclear arms race, and domestic suppression of dissent",
        "It promoted peace and democracy everywhere",
        "It only affected military policy"
      ],
      correct: 1
    },
    {
      q: "What was the contradiction between America's Cold War rhetoric and domestic reality?",
      answers: [
        "There was no contradiction",
        "America promoted democracy abroad while denying civil rights to Black citizens at home",
        "Everything was equal at home",
        "Foreign policy and domestic policy were separate"
      ],
      correct: 1
    },
    {
      q: "How did McCarthyism violate civil liberties?",
      answers: [
        "It didn't",
        "It destroyed careers through baseless accusations and created climate of fear",
        "It protected free speech",
        "It promoted democracy"
      ],
      correct: 1
    },
    {
      q: "Why was Brown v. Board of Education significant despite limited immediate impact?",
      answers: [
        "It immediately desegregated all schools",
        "It overturned Plessy v. Ferguson and declared segregation unconstitutional, providing legal foundation for movement",
        "It had no importance",
        "It only affected one school"
      ],
      correct: 1
    },
    {
      q: "What strategy did the Montgomery Bus Boycott demonstrate?",
      answers: [
        "Violent resistance",
        "Economic pressure through organized nonviolent protest",
        "Legal action only",
        "Acceptance of segregation"
      ],
      correct: 1
    },
    {
      q: "How did Malcolm X's philosophy differ from MLK's?",
      answers: [
        "They were identical",
        "Malcolm emphasized Black nationalism and self-defense vs. MLK's nonviolent integration",
        "Malcolm opposed all activism",
        "They had no differences"
      ],
      correct: 1
    },
    {
      q: "The Voting Rights Act of 1965 was necessary because:",
      answers: [
        "Black citizens already had full voting rights",
        "Southern states used literacy tests, poll taxes, and violence to prevent Black citizens from voting",
        "No one wanted to vote",
        "The 15th Amendment was repealed"
      ],
      correct: 1
    },
    {
      q: "How did the Vietnam War erode Cold War consensus?",
      answers: [
        "Everyone continued to support containment",
        "Many Americans questioned whether fighting communism justified war's human and moral costs",
        "The war was universally supported",
        "There was no opposition"
      ],
      correct: 1
    },
    {
      q: "The Black Power movement represented:",
      answers: [
        "Rejection of all activism",
        "Emphasis on racial pride, self-determination, and militant resistance to oppression",
        "Complete integration",
        "Nonviolence only"
      ],
      correct: 1
    },
    {
      q: "Why was 1968 considered a turning point?",
      answers: [
        "Everything was resolved",
        "MLK and RFK assassinations, Tet Offensive, riots created crisis of confidence in American institutions",
        "The war ended",
        "Civil rights were achieved"
      ],
      correct: 1
    }
  ]
};

const module6Discussion = {
  prompt: `**Discussion Board 3: Civil Rights Strategies & Portfolio Piece #6**

This discussion connects to your "What is America?" portfolio project.

**Part 1: Initial Post (50 points)**

Read Chapters 25-27 from The American Yawp (Cold War and Civil Rights).

Then respond to this question:

**"What strategies proved most effective in advancing civil rights, and what does this reveal about power, resistance, and American democracy?"**

Your post should:
- Compare at least TWO different strategies (nonviolent direct action, legal challenges, Black Power, etc.)
- Analyze which achieved what kinds of victories
- Consider why some strategies worked better in certain contexts
- Use specific historical evidence from the readings
- Address the paradox of promoting democracy abroad while denying it at home
- Be 300-400 words

**Part 2: Portfolio Piece #6 - Mapping the Struggle for Equality (50 points)**

Create a visual or written analysis: **"How did diverse groups struggle for civil rights and inclusion?"**

**Options:**
- Timeline comparing different Civil Rights strategies and their outcomes
- Comparison chart showing legal victories, grassroots protests, and militant resistance
- Visual map of voter registration changes after Voting Rights Act
- Written analysis of movement's evolution from nonviolence to Black Power

**Requirements:**
- Use specific evidence from The American Yawp and Module 6 data analysis
- Consider multiple perspectives (MLK, Malcolm X, SNCC, Black Panthers)
- Address both victories and limitations
- Save this piece for your Final Portfolio in Module 7

**Part 3: Peer Engagement (30 points total)**

Respond thoughtfully to TWO classmates' posts (15 points each):
- Compare the strategies they analyzed with yours
- Make connections to earlier struggles (Reconstruction, Populism, Progressivism)
- Explore why certain strategies succeeded or failed
- Each response: 100-150 words`,

  rubric: "RUBRIC_2_Discussion_Boards",

  pointsBreakdown: {
    initialPost: 50,
    portfolioPiece: 50,
    peerResponse1: 15,
    peerResponse2: 15
  }
};

// ==================== MODULE 7: RIGHTS REVOLUTIONS & CONSERVATIVE TURN (1968-1992) ====================

const module7Activities = {
  la1: {
    questions: [
      { term: "Roe v. Wade", def: "1973 Supreme Court decision legalizing abortion; sparked ongoing debate" },
      { term: "Watergate", def: "Nixon administration scandal involving break-in cover-up; led to first presidential resignation" },
      { term: "Women's Liberation", def: "1960s-70s movement demanding equality in work, family, and society" },
      { term: "Equal Rights Amendment", def: "Proposed amendment guaranteeing equal rights regardless of sex; failed to be ratified" },
      { term: "Stonewall Riots", def: "1969 uprising by LGBTQ+ people against police harassment; launched gay rights movement" },
      { term: "Chicano Movement", def: "Mexican American civil rights movement demanding equality and cultural recognition" },
      { term: "American Indian Movement", def: "Indigenous activism demanding treaty rights, sovereignty, and cultural survival" },
      { term: "Reagan Revolution", def: "Conservative political shift emphasizing tax cuts, deregulation, and traditional values" },
      { term: "New Right", def: "Conservative coalition of religious, economic, and foreign policy conservatives" },
      { term: "AIDS Crisis", def: "1980s epidemic disproportionately affecting gay men; government response slow due to stigma" },
      { term: "Reaganomics", def: "Economic policy of tax cuts for wealthy, deregulation, and reduced social spending" },
      { term: "Iran-Contra Affair", def: "Reagan administration scandal illegally funding Nicaraguan rebels" },
      { term: "End of Cold War", def: "Soviet Union collapsed 1991; U.S. emerged as sole superpower" },
      { term: "Gulf War", def: "1991 U.S.-led war expelling Iraq from Kuwait" },
      { term: "Culture Wars", def: "Battles over values, abortion, gender roles, sexuality, education defining American politics" }
    ]
  },

  la2: {
    questions: [
      {
        q: "Roe v. Wade (1973) legalized:",
        answers: [
          "Same-sex marriage",
          "Abortion",
          "Contraception",
          "Divorce"
        ],
        correct: 1
      },
      {
        q: "The Watergate scandal led to:",
        answers: [
          "Nothing",
          "President Nixon's resignation in 1974",
          "Nixon's re-election",
          "Stronger executive power"
        ],
        correct: 1
      },
      {
        q: "The Stonewall Riots (1969) marked the beginning of:",
        answers: [
          "Women's liberation",
          "Modern LGBTQ+ rights movement",
          "Chicano movement",
          "Conservative movement"
        ],
        correct: 1
      },
      {
        q: "The Equal Rights Amendment failed because:",
        answers: [
          "Women didn't want equality",
          "Conservative opposition claimed it threatened traditional family values",
          "It passed easily",
          "No one supported it"
        ],
        correct: 1
      },
      {
        q: "Ronald Reagan's presidency represented:",
        answers: [
          "Liberal expansion",
          "Conservative shift emphasizing tax cuts, deregulation, and traditional values",
          "Continuation of New Deal",
          "Socialist policies"
        ],
        correct: 1
      },
      {
        q: "The AIDS crisis in the 1980s revealed:",
        answers: [
          "Government's quick response",
          "Government neglect and stigmatization of LGBTQ+ community",
          "Universal healthcare",
          "Immediate cure"
        ],
        correct: 1
      },
      {
        q: "Reaganomics promoted:",
        answers: [
          "Higher taxes on wealthy",
          "Tax cuts for wealthy, deregulation, and reduced social spending (trickle-down economics)",
          "Expanded welfare state",
          "Government control"
        ],
        correct: 1
      },
      {
        q: "The American Indian Movement (AIM) demanded:",
        answers: [
          "Assimilation",
          "Treaty rights, sovereignty, and cultural survival",
          "Relocation to cities",
          "Termination of reservations"
        ],
        correct: 1
      },
      {
        q: "The Cold War ended with:",
        answers: [
          "Soviet victory",
          "Collapse of Soviet Union in 1991",
          "Nuclear war",
          "Communist expansion"
        ],
        correct: 1
      },
      {
        q: "The 'Culture Wars' refer to:",
        answers: [
          "Military conflicts",
          "Political battles over abortion, gender roles, sexuality, and values",
          "Economic policies",
          "Foreign policy debates"
        ],
        correct: 1
      }
    ]
  },

  la3: {
    timelineBuilder: {
      instructions: "Sort these rights revolutions and conservative turn events from 1968 to 1992:",
      events: [
        { event: "Stonewall Riots launch LGBTQ+ rights movement", date: "June 1969" },
        { event: "Roe v. Wade legalizes abortion", date: "January 1973" },
        { event: "Nixon resigns due to Watergate scandal", date: "August 1974" },
        { event: "Equal Rights Amendment fails to be ratified", date: "1982" },
        { event: "Reagan elected president; conservative era begins", date: "November 1980" },
        { event: "AIDS epidemic begins; government response slow", date: "1981" },
        { event: "Iran-Contra scandal exposed", date: "1986" },
        { event: "Berlin Wall falls", date: "November 1989" },
        { event: "Americans with Disabilities Act passed", date: "July 1990" },
        { event: "Soviet Union collapses; Cold War ends", date: "December 1991" },
        { event: "Gulf War: U.S. expels Iraq from Kuwait", date: "1991" },
        { event: "Los Angeles riots after Rodney King verdict", date: "April 1992" }
      ]
    },

    comparisonActivity: {
      instructions: "Compare liberal vs. conservative visions of America in this era:",
      regions: ["Liberal/Progressive Vision", "Conservative Vision"],
      characteristics: [
        { text: "Expand civil rights for women, LGBTQ+, minorities", answer: "Liberal/Progressive Vision" },
        { text: "Preserve traditional family values and gender roles", answer: "Conservative Vision" },
        { text: "Support abortion rights", answer: "Liberal/Progressive Vision" },
        { text: "Oppose abortion (pro-life movement)", answer: "Conservative Vision" },
        { text: "Government programs to address inequality", answer: "Liberal/Progressive Vision" },
        { text: "Tax cuts, deregulation, free market solutions", answer: "Conservative Vision" },
        { text: "Environmental regulations", answer: "Liberal/Progressive Vision" },
        { text: "States' rights and limited government", answer: "Conservative Vision" },
        { text: "Multiculturalism and diversity", answer: "Liberal/Progressive Vision" },
        { text: "Emphasis on American exceptionalism and patriotism", answer: "Conservative Vision" }
      ]
    }
  }
};

const module7Quiz = {
  questions: [
    {
      q: "Why did rights movements expand in the 1970s while political culture shifted conservative?",
      answers: [
        "They didn't",
        "Social movements achieved legal victories while conservative backlash mobilized politically",
        "Everyone agreed on all issues",
        "Rights movements disappeared"
      ],
      correct: 1
    },
    {
      q: "What did the failure of the Equal Rights Amendment reveal?",
      answers: [
        "Women had achieved full equality",
        "Strong conservative opposition to feminism claiming it threatened traditional family",
        "No one supported it",
        "It passed easily"
      ],
      correct: 1
    },
    {
      q: "How did Watergate affect Americans' trust in government?",
      answers: [
        "It increased trust",
        "It severely damaged trust in presidency and political institutions",
        "It had no effect",
        "Everyone forgot about it"
      ],
      correct: 1
    },
    {
      q: "The Stonewall Riots were significant because they:",
      answers: [
        "Ended discrimination immediately",
        "Sparked militant LGBTQ+ activism demanding visibility and rights",
        "Were supported by police",
        "Had no impact"
      ],
      correct: 1
    },
    {
      q: "Reagan's coalition united:",
      answers: [
        "Only economic conservatives",
        "Religious conservatives, economic conservatives, and Cold War hawks",
        "Only social liberals",
        "Socialist groups"
      ],
      correct: 1
    },
    {
      q: "How did Reagan's AIDS policy reflect cultural attitudes?",
      answers: [
        "Government responded immediately with funding",
        "Government neglect and slow response reflected stigmatization of LGBTQ+ community",
        "AIDS was eradicated quickly",
        "Everyone received equal treatment"
      ],
      correct: 1
    },
    {
      q: "Reaganomics (supply-side/trickle-down economics) claimed:",
      answers: [
        "Higher taxes create prosperity",
        "Tax cuts for wealthy would stimulate economy and benefit all",
        "Government should control economy",
        "Wealth should be redistributed"
      ],
      correct: 1
    },
    {
      q: "The Chicano and American Indian movements both:",
      answers: [
        "Sought assimilation",
        "Demanded recognition of cultural identity and group rights",
        "Opposed all activism",
        "Had no common goals"
      ],
      correct: 1
    },
    {
      q: "The end of the Cold War in 1991:",
      answers: [
        "Resulted in Soviet victory",
        "Left U.S. as sole superpower with unclear global role",
        "Created world peace",
        "Had no consequences"
      ],
      correct: 1
    },
    {
      q: "What characterizes the 'Culture Wars' that emerged in this era?",
      answers: [
        "Universal agreement on values",
        "Deep political divisions over abortion, sexuality, gender roles, religion, and American identity",
        "End of all conflicts",
        "Focus only on economic issues"
      ],
      correct: 1
    }
  ]
};

const module7FinalPortfolio = {
  instructions: `**Module 7 Final Portfolio: "What is America?" - Complete Journey**

**This is your culminating project synthesizing your entire semester of learning.**

**Project Overview:**
Assemble all your portfolio pieces from Modules 1-6 into a cohesive 8-10 slide presentation or written portfolio that answers the essential question:

**"What is America?"**

**Required Components:**

**Part 1: Initial Definition (from Module 1)**
- Include your Module 1 initial definition
- Brief reflection: How has your thinking changed?

**Part 2: Portfolio Pieces #1-6 (from Modules 1-6)**
Include all six pieces you created:
1. Reconstruction's Promises (Module 1)
2. Industrial Transformation (Module 2)
3. Progressive Reforms Map (Module 3)
4. Modern America (Module 4)
5. Government & Citizen Sacrifice (Module 5)
6. Mapping the Struggle for Equality (Module 6)

**Part 3: Synthesis Analysis**
Write 2-3 pages (or create 3-4 slides) analyzing:
- **Patterns Across Time:** What recurring themes do you see from Reconstruction to today?
- **Contested Visions:** Who has defined "America," and whose visions have prevailed?
- **Inclusion vs. Exclusion:** How has the definition of "We the People" changed?
- **Power & Resistance:** What strategies have been most effective in expanding rights?

**Part 4: Final Definition**
Write a new 300-400 word definition of "What is America?" that:
- Incorporates historical evidence from 1865-1992
- Acknowledges complexity and contradictions
- Reflects your deepened historical understanding
- Compares explicitly to your initial Module 1 definition

**Format Options:**
- **Digital Presentation:** 8-10 slides with images, evidence, analysis
- **Written Portfolio:** 8-10 pages with visual pieces embedded
- **Video Essay:** 8-10 minutes narrating your journey through the evidence

**Grading Criteria (200 points total):**
- Inclusion of all 6 portfolio pieces: 60 points
- Synthesis analysis showing connections: 60 points
- Final definition with historical evidence: 50 points
- Quality of presentation/writing: 30 points

**Submission:**
- Upload complete portfolio to Canvas by end of Module 7
- This project demonstrates your growth as a historical thinker!`,

  rubric: "RUBRIC_3_Final_Project",

  exampleTopics: [
    "America as a nation defined by both democratic ideals and systemic exclusion",
    "The evolution of citizenship from Reconstruction's promise to contemporary debates",
    "How economic transformation reshaped American identity and inequality",
    "The role of social movements in expanding the definition of 'We the People'",
    "Tensions between individual liberty and collective responsibility across eras",
    "How different groups have defined and fought for 'freedom' from 1865 to today"
  ]
};

// ==================== MODULE 8: CONTEMPORARY AMERICA (1992-PRESENT) ====================

const module8Activities = {
  la1: {
    questions: [
      { term: "Globalization", def: "Increasing interconnection of world economies, cultures, and populations" },
      { term: "9/11 Attacks", def: "September 11, 2001 terrorist attacks on World Trade Center and Pentagon" },
      { term: "War on Terror", def: "U.S. military response to 9/11 including wars in Afghanistan and Iraq" },
      { term: "Great Recession", def: "2008 financial crisis causing massive unemployment and economic hardship" },
      { term: "Barack Obama", def: "First African American president (2009-2017); passed Affordable Care Act" },
      { term: "Affordable Care Act", def: "2010 healthcare reform expanding insurance coverage (Obamacare)" },
      { term: "Tea Party", def: "Conservative movement opposing government spending and Obama's policies" },
      { term: "Black Lives Matter", def: "Movement against police violence and systemic racism targeting Black Americans" },
      { term: "Marriage Equality", def: "Supreme Court legalized same-sex marriage nationwide in 2015" },
      { term: "Donald Trump", def: "Businessman and reality TV star elected president 2016; populist 'America First' agenda" },
      { term: "COVID-19 Pandemic", def: "2020 global pandemic killing over 1 million Americans; exposed inequalities" },
      { term: "Climate Change", def: "Global warming caused by human activity; increasingly urgent crisis" },
      { term: "#MeToo Movement", def: "2017 movement against sexual harassment and assault" },
      { term: "January 6, 2021", def: "Attack on U.S. Capitol by Trump supporters attempting to overturn election" },
      { term: "Political Polarization", def: "Increasing divide between Republicans and Democrats on fundamental issues" }
    ]
  },

  la2: {
    questions: [
      {
        q: "The 9/11 attacks led to:",
        answers: [
          "Immediate world peace",
          "War on Terror, wars in Afghanistan and Iraq, expanded surveillance",
          "No policy changes",
          "End of all conflicts"
        ],
        correct: 1
      },
      {
        q: "The Great Recession (2008) was caused by:",
        answers: [
          "Government over-regulation",
          "Housing bubble, risky financial practices, and inadequate regulation",
          "Natural disaster",
          "Foreign invasion"
        ],
        correct: 1
      },
      {
        q: "Barack Obama's election (2008) was significant because:",
        answers: [
          "Nothing changed",
          "He was the first African American president, representing historic milestone",
          "It ended all racism",
          "Everyone agreed with his policies"
        ],
        correct: 1
      },
      {
        q: "The Tea Party movement opposed:",
        answers: [
          "All government",
          "Government spending, Obama's healthcare reform, and perceived socialism",
          "Conservatism",
          "Tax cuts"
        ],
        correct: 1
      },
      {
        q: "Black Lives Matter emerged in response to:",
        answers: [
          "Economic inequality only",
          "Police killings of unarmed Black people and systemic racism",
          "Foreign policy",
          "Healthcare"
        ],
        correct: 1
      },
      {
        q: "The Supreme Court legalized same-sex marriage nationwide in:",
        answers: [
          "1990",
          "2015",
          "2020",
          "1980"
        ],
        correct: 1
      },
      {
        q: "The COVID-19 pandemic exposed:",
        answers: [
          "Perfect equality",
          "Deep inequalities in healthcare, work, and vulnerability by race and class",
          "No problems",
          "Universal prosperity"
        ],
        correct: 1
      },
      {
        q: "The #MeToo movement addressed:",
        answers: [
          "Economic policy",
          "Sexual harassment and assault, especially workplace power dynamics",
          "Foreign policy",
          "Education"
        ],
        correct: 1
      },
      {
        q: "Climate change represents:",
        answers: [
          "No threat",
          "Urgent global crisis requiring immediate action to reduce emissions",
          "Natural phenomenon with no human cause",
          "Solved problem"
        ],
        correct: 1
      },
      {
        q: "Political polarization means:",
        answers: [
          "Universal agreement",
          "Increasing partisan divide and inability to find common ground",
          "End of politics",
          "Perfect democracy"
        ],
        correct: 1
      }
    ]
  },

  la3: {
    timelineBuilder: {
      instructions: "Sort these contemporary events from 1992 to present:",
      events: [
        { event: "Bill Clinton elected president", date: "1992" },
        { event: "9/11 terrorist attacks", date: "September 11, 2001" },
        { event: "Iraq War begins", date: "March 2003" },
        { event: "Great Recession financial crisis", date: "2008" },
        { event: "Barack Obama elected first Black president", date: "November 2008" },
        { event: "Affordable Care Act (Obamacare) passed", date: "March 2010" },
        { event: "Supreme Court legalizes same-sex marriage", date: "June 2015" },
        { event: "Donald Trump elected president", date: "November 2016" },
        { event: "#MeToo movement goes viral", date: "October 2017" },
        { event: "COVID-19 pandemic begins", date: "March 2020" },
        { event: "George Floyd murdered; Black Lives Matter protests", date: "May 2020" },
        { event: "January 6 Capitol attack", date: "January 6, 2021" }
      ]
    },

    comparisonActivity: {
      instructions: "Analyze continuity and change from 1865 to today. Which issues are NEW vs. ONGOING?",
      regions: ["New 21st Century Issues", "Ongoing Since 1865", "Transformed Issue"],
      characteristics: [
        { text: "Terrorism and homeland security", answer: "New 21st Century Issues" },
        { text: "Struggle for racial equality and civil rights", answer: "Ongoing Since 1865" },
        { text: "Economic inequality and wealth gap", answer: "Ongoing Since 1865" },
        { text: "Climate change and environmental crisis", answer: "New 21st Century Issues" },
        { text: "Immigration debates", answer: "Ongoing Since 1865" },
        { text: "Social media and digital technology", answer: "New 21st Century Issues" },
        { text: "Role of government in economy and society", answer: "Ongoing Since 1865" },
        { text: "LGBTQ+ rights movement", answer: "Transformed Issue" },
        { text: "Women's rights and gender equality", answer: "Transformed Issue" },
        { text: "Political polarization", answer: "Transformed Issue" }
      ]
    }
  }
};

const module8Quiz = {
  questions: [
    {
      q: "How did 9/11 transform American foreign policy?",
      answers: [
        "No change occurred",
        "Led to War on Terror, wars in Afghanistan and Iraq, expansion of surveillance",
        "America became isolationist",
        "Ended all military involvement"
      ],
      correct: 1
    },
    {
      q: "The Great Recession demonstrated that:",
      answers: [
        "Financial markets need no regulation",
        "Inadequate regulation of financial industry can cause economic catastrophe",
        "Nothing needed to change",
        "Everyone prospered equally"
      ],
      correct: 1
    },
    {
      q: "What did Barack Obama's election represent?",
      answers: [
        "Nothing significant",
        "Historic milestone as first Black president, but also sparked intense backlash",
        "End of all racism",
        "Universal agreement"
      ],
      correct: 1
    },
    {
      q: "Black Lives Matter connects to historical struggles by:",
      answers: [
        "Having no historical connection",
        "Continuing fight against racial violence and inequality from Reconstruction to today",
        "Being completely different",
        "Ignoring history"
      ],
      correct: 1
    },
    {
      q: "The legalization of same-sex marriage (2015) shows:",
      answers: [
        "No change in American values",
        "Dramatic shift in social attitudes toward LGBTQ+ rights over decades",
        "Universal opposition",
        "No controversy"
      ],
      correct: 1
    },
    {
      q: "COVID-19's unequal impact revealed:",
      answers: [
        "Perfect equality",
        "Persistent racial and economic inequalities in health, work, and vulnerability",
        "No problems",
        "Everyone affected equally"
      ],
      correct: 1
    },
    {
      q: "The #MeToo movement built on:",
      answers: [
        "No prior activism",
        "Generations of feminist organizing against sexual violence and workplace inequality",
        "Conservative values",
        "Nothing"
      ],
      correct: 1
    },
    {
      q: "Climate change represents a challenge because:",
      answers: [
        "It doesn't exist",
        "It requires global cooperation and confronting powerful economic interests",
        "It's already solved",
        "Everyone agrees on solutions"
      ],
      correct: 1
    },
    {
      q: "What historical patterns persist from 1865 to today?",
      answers: [
        "Everything is completely different",
        "Struggles over racial equality, economic inequality, immigration, and role of government continue",
        "All problems were solved",
        "History doesn't repeat"
      ],
      correct: 1
    },
    {
      q: "Contemporary political polarization mirrors which earlier period?",
      answers: [
        "There are no parallels",
        "Sectional crisis before Civil War and culture wars of 1920s/1960s",
        "Perfect consensus",
        "No prior divisions"
      ],
      correct: 1
    }
  ]
};

const module8Discussion = {
  prompt: `**Discussion Board 4: Contemporary America & Final Reflection**

This is your final discussion, connecting contemporary America to your entire historical journey.

**Part 1: Initial Post (50 points)**

Read Chapter 30 from The American Yawp (The Recent Past).

Then respond to these questions:

**"What problems remain unresolved from earlier eras of American history? How does understanding history from 1865-1992 help explain our contemporary challenges?"**

Your post should:
- Identify at least TWO contemporary issues with historical roots (e.g., racial inequality, economic inequality, immigration debates, role of government, political polarization, climate change)
- Trace each issue back to specific historical periods we studied
- Use concrete historical evidence
- Reflect on what history teaches about addressing these challenges
- Be 350-450 words

**Part 2: Final Reflection (50 points)**

**"How has studying American history from 1865 to present changed your understanding of contemporary America?"**

Reflect on:
- Which module/topic changed your thinking most dramatically?
- What historical patterns or themes seem most relevant today?
- How has your answer to "What is America?" evolved over the semester?
- What surprised you most about this history?
- How will you use this historical knowledge as a citizen?

Be honest and specific. This is your chance to reflect on your intellectual growth.

**Part 3: Peer Engagement (30 points total)**

Respond thoughtfully to TWO classmates' posts (15 points each):
- Compare the contemporary issues they identified with yours
- Build on their historical analysis
- Offer additional connections or perspectives
- Each response: 100-150 words`,

  rubric: "RUBRIC_2_Discussion_Boards",

  pointsBreakdown: {
    initialPost: 50,
    finalReflection: 50,
    peerResponse1: 15,
    peerResponse2: 15
  }
};

// Final Exam (Covers Modules 5-8: Depression through Contemporary)
const finalExam = {
  title: "Final Exam: American History II (1929-Present)",
  instructions: "This comprehensive final exam covers Modules 5-8: Great Depression & WWII, Cold War & Civil Rights, Rights Revolutions & Conservative Turn, and Contemporary America. You have 75 minutes to complete 25 questions. Each question is worth 2 points.",

  questions: [
    // Module 5: Depression & WWII (6 questions)
    {
      q: "The Great Depression was caused by:",
      answers: [
        "Single factor: stock market crash",
        "Multiple factors including overproduction, speculation, unequal wealth, and bank failures",
        "Foreign invasion",
        "Natural disaster"
      ],
      correct: 1
    },
    {
      q: "FDR's New Deal represented:",
      answers: [
        "Return to laissez-faire capitalism",
        "Expanded federal government role providing relief, recovery, and reform",
        "Elimination of all government programs",
        "Communist revolution"
      ],
      correct: 1
    },
    {
      q: "True or False: Japanese internment during WWII violated civil liberties of 120,000 Japanese Americans.",
      answers: [
        "True",
        "False"
      ],
      correct: 0
    },
    {
      q: "The Double V Campaign demanded:",
      answers: [
        "Only military victory",
        "Victory over fascism abroad AND racism at home",
        "Segregation of troops",
        "No participation in war"
      ],
      correct: 1
    },
    {
      q: "The atomic bombs dropped on Japan:",
      answers: [
        "Caused no casualties",
        "Killed over 200,000 and remain ethically controversial",
        "Were never used",
        "Had universal support"
      ],
      correct: 1
    },
    {
      q: "The GI Bill provided veterans with:",
      answers: [
        "Nothing",
        "Education, housing loans, and business benefits (though discriminatory in practice)",
        "Only medical care",
        "Mandatory military service"
      ],
      correct: 1
    },

    // Module 6: Cold War & Civil Rights (7 questions)
    {
      q: "U.S. containment policy during the Cold War aimed to:",
      answers: [
        "Spread communism",
        "Prevent spread of communism globally",
        "Promote isolationism",
        "Support Soviet expansion"
      ],
      correct: 1
    },
    {
      q: "McCarthyism demonstrated:",
      answers: [
        "Respect for civil liberties",
        "How anti-communist hysteria violated rights and destroyed lives",
        "Success of democratic values",
        "No problems"
      ],
      correct: 1
    },
    {
      q: "True or False: Brown v. Board of Education (1954) immediately desegregated all schools.",
      answers: [
        "True",
        "False"
      ],
      correct: 1
    },
    {
      q: "The Civil Rights Act of 1964 banned:",
      answers: [
        "Voting",
        "Discrimination in employment and public accommodations",
        "Integration",
        "Protests"
      ],
      correct: 1
    },
    {
      q: "Malcolm X's philosophy differed from MLK by emphasizing:",
      answers: [
        "Nonviolent integration only",
        "Black nationalism, self-defense, and racial pride",
        "Assimilation",
        "No activism"
      ],
      correct: 1
    },
    {
      q: "The Voting Rights Act of 1965 was necessary because:",
      answers: [
        "Black citizens already voted freely",
        "Southern states used literacy tests, poll taxes, and violence to prevent Black voting",
        "The 15th Amendment was repealed",
        "No one wanted to vote"
      ],
      correct: 1
    },
    {
      q: "The Vietnam War divided Americans over:",
      answers: [
        "Nothing - everyone agreed",
        "Whether fighting communism justified war's human and moral costs",
        "Tax policy",
        "Healthcare"
      ],
      correct: 1
    },

    // Module 7: Rights Revolutions & Conservative Turn (6 questions)
    {
      q: "Roe v. Wade (1973):",
      answers: [
        "Banned abortion",
        "Legalized abortion nationwide; sparked ongoing controversy",
        "Had no impact",
        "Ended all debate"
      ],
      correct: 1
    },
    {
      q: "The Stonewall Riots (1969) launched:",
      answers: [
        "Women's liberation",
        "Modern LGBTQ+ rights movement",
        "Conservative movement",
        "Civil Rights Movement"
      ],
      correct: 1
    },
    {
      q: "True or False: Watergate led to President Nixon's resignation in 1974.",
      answers: [
        "True",
        "False"
      ],
      correct: 0
    },
    {
      q: "Reagan's conservative coalition united:",
      answers: [
        "Only economic conservatives",
        "Religious conservatives, economic conservatives, and Cold War hawks",
        "Socialists",
        "Liberals"
      ],
      correct: 1
    },
    {
      q: "The AIDS crisis in the 1980s revealed:",
      answers: [
        "Perfect healthcare equality",
        "Government neglect and stigmatization of LGBTQ+ community",
        "Immediate cure",
        "Universal compassion"
      ],
      correct: 1
    },
    {
      q: "The Cold War ended with:",
      answers: [
        "Soviet victory",
        "Soviet Union's collapse in 1991",
        "Nuclear war",
        "Communist expansion"
      ],
      correct: 1
    },

    // Module 8: Contemporary America (6 questions)
    {
      q: "The 9/11 attacks led to:",
      answers: [
        "No policy changes",
        "War on Terror, wars in Afghanistan and Iraq, expanded surveillance",
        "World peace",
        "Isolation"
      ],
      correct: 1
    },
    {
      q: "The Great Recession (2008) was caused by:",
      answers: [
        "Government over-regulation",
        "Housing bubble and risky financial practices",
        "Natural disaster",
        "Perfect markets"
      ],
      correct: 1
    },
    {
      q: "True or False: Barack Obama was the first African American president (2009-2017).",
      answers: [
        "True",
        "False"
      ],
      correct: 0
    },
    {
      q: "Black Lives Matter emerged to protest:",
      answers: [
        "Economic policy",
        "Police violence and systemic racism against Black Americans",
        "Foreign policy",
        "Healthcare"
      ],
      correct: 1
    },
    {
      q: "The COVID-19 pandemic exposed:",
      answers: [
        "Perfect equality",
        "Deep inequalities in healthcare, work, and vulnerability by race and class",
        "No problems",
        "Universal prosperity"
      ],
      correct: 1
    },
    {
      q: "What historical patterns persist from 1865 to today?",
      answers: [
        "Everything is resolved",
        "Struggles over racial equality, economic inequality, immigration, and government role continue",
        "All problems solved",
        "No connections exist"
      ],
      correct: 1
    }
  ]
};
