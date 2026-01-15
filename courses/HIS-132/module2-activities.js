// Module 2: Gilded Age & Industrialization (1877-1900)
// Learning Activities Data

const module2Activities = {
  la1: {
    questions: [
      { term: "Gilded Age", def: "Term coined by Mark Twain for late 1800s era of surface prosperity masking inequality and corruption" },
      { term: "Robber Barons", def: "Wealthy industrialists like Rockefeller and Carnegie accused of exploiting workers and eliminating competition" },
      { term: "Social Darwinism", def: "Theory applying 'survival of the fittest' to justify economic inequality and oppose government regulation" },
      { term: "Vertical Integration", def: "Business strategy controlling all stages of production (used by Andrew Carnegie in steel)" },
      { term: "Horizontal Integration", def: "Business strategy controlling market share by buying out competitors (used by John D. Rockefeller in oil)" },
      { term: "Haymarket Affair", def: "1886 Chicago labor rally that turned violent; led to crackdown on labor movement" },
      { term: "Knights of Labor", def: "Labor union that welcomed all workers regardless of skill, race, or gender; peaked in 1880s" },
      { term: "Populism", def: "Farmers' movement demanding government regulation of railroads, free silver, and political reforms" },
      { term: "Plessy v. Ferguson", def: "1896 Supreme Court decision legalizing racial segregation under 'separate but equal' doctrine" },
      { term: "New Immigration", def: "Late 1800s wave of immigrants from Southern and Eastern Europe, often discriminated against" },
      { term: "Chinese Exclusion Act", def: "1882 law banning Chinese immigration for 10 years; first federal law restricting immigration by nationality" },
      { term: "Tenement", def: "Overcrowded, poorly maintained urban apartment building housing working-class immigrants" },
      { term: "Political Machine", def: "Corrupt urban political organization providing services in exchange for votes (e.g., Tammany Hall)" },
      { term: "Pullman Strike", def: "1894 nationwide railroad strike broken by federal troops; demonstrated government alliance with business" },
      { term: "Gospel of Wealth", def: "Andrew Carnegie's philosophy that the rich should use their wealth for social benefit" }
    ]
  },

  la2: {
    questions: [
      {
        q: "Which industrialist dominated the steel industry through vertical integration?",
        answers: [
          "John D. Rockefeller",
          "Andrew Carnegie",
          "J.P. Morgan",
          "Cornelius Vanderbilt"
        ],
        correct: 1
      },
      {
        q: "What theory was used to justify extreme wealth inequality during the Gilded Age?",
        answers: [
          "Marxism",
          "Progressivism",
          "Social Darwinism",
          "Socialism"
        ],
        correct: 2
      },
      {
        q: "The Haymarket Affair (1886) had what effect on the American labor movement?",
        answers: [
          "Strengthened public support for unions",
          "Led to passage of labor protections",
          "Damaged labor's reputation due to violence",
          "Resulted in minimum wage laws"
        ],
        correct: 2
      },
      {
        q: "What did the Populist Party demand in the 1890s?",
        answers: [
          "Elimination of all government regulation",
          "Free silver, railroad regulation, and political reforms",
          "Higher tariffs to protect industry",
          "Restriction of immigration"
        ],
        correct: 1
      },
      {
        q: "The Supreme Court's decision in Plessy v. Ferguson (1896) did what?",
        answers: [
          "Declared segregation unconstitutional",
          "Overturned Black Codes",
          "Legalized 'separate but equal' racial segregation",
          "Expanded voting rights"
        ],
        correct: 2
      },
      {
        q: "How did John D. Rockefeller achieve dominance in the oil industry?",
        answers: [
          "Vertical integration",
          "Horizontal integration by buying out competitors",
          "Government subsidies",
          "Inventing new technology"
        ],
        correct: 1
      },
      {
        q: "What was the primary reason for the 'New Immigration' from Southern and Eastern Europe?",
        answers: [
          "Religious freedom",
          "Economic opportunity and escape from poverty/persecution",
          "Gold rush",
          "Land grants from the government"
        ],
        correct: 1
      },
      {
        q: "The Chinese Exclusion Act (1882) was significant because it:",
        answers: [
          "Welcomed all Asian immigrants",
          "Was the first federal law restricting immigration based on nationality",
          "Granted citizenship to Chinese immigrants",
          "Ended discrimination against Asian Americans"
        ],
        correct: 1
      },
      {
        q: "Political machines like Tammany Hall provided which services to urban immigrants?",
        answers: [
          "Free land and housing",
          "Jobs, social services, and assistance in exchange for political support",
          "Transportation back to their home countries",
          "English language classes only"
        ],
        correct: 1
      },
      {
        q: "The Pullman Strike (1894) demonstrated that:",
        answers: [
          "Labor unions had strong government support",
          "The federal government would side with business over workers",
          "Strikes were always successful",
          "Railroad workers had achieved their goals"
        ],
        correct: 1
      }
    ]
  },

  la3: {
    timelineBuilder: {
      instructions: "Sort these Gilded Age events in chronological order from 1877 to 1900:",
      events: [
        { event: "Great Railroad Strike; federal troops used to break strike", date: "1877" },
        { event: "Chinese Exclusion Act bans Chinese immigration", date: "1882" },
        { event: "Haymarket Affair in Chicago damages labor movement", date: "May 1886" },
        { event: "American Federation of Labor (AFL) founded by Samuel Gompers", date: "1886" },
        { event: "Interstate Commerce Act regulates railroads", date: "1887" },
        { event: "Sherman Antitrust Act passed (rarely enforced)", date: "1890" },
        { event: "Homestead Strike at Carnegie Steel ends in defeat for workers", date: "1892" },
        { event: "Panic of 1893 causes severe economic depression", date: "1893" },
        { event: "Pullman Strike broken by federal troops", date: "1894" },
        { event: "Plessy v. Ferguson legalizes 'separate but equal' segregation", date: "1896" },
        { event: "Gold discovered in Alaska; Klondike Gold Rush begins", date: "1896" }
      ]
    },

    comparisonActivity: {
      instructions: "Analyze winners and losers of industrialization. Categorize each group:",
      regions: ["Winners (Benefited)", "Losers (Harmed)"],
      characteristics: [
        { text: "Industrial capitalists and financiers", answer: "Winners (Benefited)" },
        { text: "Factory workers facing dangerous conditions", answer: "Losers (Harmed)" },
        { text: "Railroad magnates", answer: "Winners (Benefited)" },
        { text: "Farmers facing railroad monopoly pricing", answer: "Losers (Harmed)" },
        { text: "Urban consumers with access to cheaper goods", answer: "Winners (Benefited)" },
        { text: "Skilled craftsmen replaced by machines", answer: "Losers (Harmed)" },
        { text: "Investment bankers like J.P. Morgan", answer: "Winners (Benefited)" },
        { text: "Chinese immigrants facing exclusion", answer: "Losers (Harmed)" },
        { text: "Middle-class professionals in growing cities", answer: "Winners (Benefited)" },
        { text: "African Americans under Jim Crow segregation", answer: "Losers (Harmed)" }
      ]
    }
  }
};

// Module 2 Quiz Questions
const module2Quiz = {
  questions: [
    {
      q: "How did the Gilded Age get its name, and what does it reveal about the era?",
      answers: [
        "Named after the gold standard; represents economic stability",
        "Named by Mark Twain to describe surface prosperity masking corruption and inequality",
        "Named after gilded architecture in wealthy neighborhoods",
        "Named to celebrate American industrial achievement"
      ],
      correct: 1
    },
    {
      q: "What was the primary argument of Social Darwinists like William Graham Sumner?",
      answers: [
        "Government should regulate business to protect workers",
        "Wealth inequality is natural and government intervention disrupts progress",
        "Evolution proves all humans are equal",
        "Survival of the fittest applies only to nature, not society"
      ],
      correct: 1
    },
    {
      q: "How did Andrew Carnegie justify his immense wealth in 'The Gospel of Wealth'?",
      answers: [
        "The rich have no obligations to society",
        "Wealth should be passed to heirs",
        "The wealthy should use their fortunes for public benefit like libraries and education",
        "Government should redistribute all wealth"
      ],
      correct: 2
    },
    {
      q: "Why did the Knights of Labor decline after the Haymarket Affair?",
      answers: [
        "They achieved all their goals",
        "They were associated with violence and anarchism, losing public support",
        "The government outlawed all unions",
        "They merged with the AFL"
      ],
      correct: 1
    },
    {
      q: "What did the Populist Party's demand for 'free silver' represent?",
      answers: [
        "A desire for silver jewelry",
        "An inflationary policy to help farmers pay debts",
        "Support for the gold standard",
        "Opposition to all currency"
      ],
      correct: 1
    },
    {
      q: "How did Plessy v. Ferguson affect African Americans in the South?",
      answers: [
        "It granted them full civil rights",
        "It legalized racial segregation, solidifying Jim Crow laws",
        "It gave them the right to vote",
        "It prohibited discrimination"
      ],
      correct: 1
    },
    {
      q: "Why were 'New Immigrants' from Southern and Eastern Europe often discriminated against?",
      answers: [
        "They were Catholic, Jewish, or Orthodox rather than Protestant; spoke different languages; had different customs",
        "They were wealthier than native-born Americans",
        "They refused to work in factories",
        "They only settled in rural areas"
      ],
      correct: 0
    },
    {
      q: "What role did political machines play in Gilded Age cities?",
      answers: [
        "They provided honest government",
        "They helped immigrants with jobs and services in exchange for votes, often through corruption",
        "They eliminated poverty",
        "They promoted civil service reform"
      ],
      correct: 1
    },
    {
      q: "The Pullman Strike ended when:",
      answers: [
        "Workers won all their demands",
        "George Pullman negotiated with Eugene Debs",
        "President Cleveland sent federal troops to break the strike",
        "The Supreme Court sided with workers"
      ],
      correct: 2
    },
    {
      q: "What does the term 'Gilded Age' suggest about wealth and poverty in this era?",
      answers: [
        "Everyone was wealthy",
        "Surface prosperity covered deep inequality and social problems",
        "Poverty did not exist",
        "The middle class disappeared"
      ],
      correct: 1
    }
  ]
};

// Module 2 Discussion Board
const module2Discussion = {
  prompt: `**Discussion Board 1: Industrial Capitalism & Portfolio Piece #2**

This discussion connects to your "What is America?" portfolio project.

**Part 1: Initial Post (50 points)**

Read Chapter 16 ("Capital and Labor") and Chapter 18 ("Life in Industrial America") from The American Yawp.

Then respond to this question:

**"Who benefited from industrial capitalism during the Gilded Age, and who was harmed? What does this reveal about American values during this period?"**

Your post should:
- Analyze at least TWO groups who benefited and TWO who were harmed
- Use specific historical evidence from the readings
- Consider multiple perspectives (workers, immigrants, business owners, farmers)
- Connect to larger questions about American identity and values
- Be 300-400 words

**Part 2: Portfolio Piece #2 - Industrial Transformation (50 points)**

Create a visual or written piece analyzing: **"Who benefited from industrial capitalism?"**

**Options:**
- Comparison chart showing winners vs. losers
- Infographic showing wealth distribution data
- Written analysis comparing Carnegie's "Gospel of Wealth" to workers' experiences
- Timeline showing labor conflicts and outcomes

**Requirements:**
- Use specific evidence from The American Yawp
- Address economic AND social impacts
- Consider race, class, and gender
- Save this piece for your Final Portfolio in Module 7

**Part 3: Peer Engagement (30 points total)**

Respond thoughtfully to TWO classmates' posts (15 points each):
- Build on their analysis with additional evidence
- Ask questions that deepen understanding
- Respectfully challenge or complicate their argument
- Each response: 100-150 words`,

  rubric: "RUBRIC_2_Discussion_Boards",

  pointsBreakdown: {
    initialPost: 50,
    portfolioPiece: 50,
    peerResponse1: 15,
    peerResponse2: 15
  }
};

// Module 2 Project (Portfolio Piece #2 - included in Discussion Board)
const module2Project = {
  instructions: "See Discussion Board 1 for Portfolio Piece #2 instructions. This piece explores who benefited from industrial capitalism during the Gilded Age.",
  rubric: "RUBRIC_2_Discussion_Boards"
};
