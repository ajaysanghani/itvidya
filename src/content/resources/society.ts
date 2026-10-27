import type { Resource } from "../schema";
import { initialEdition } from "./defaults";

export const societyResources: Resource[] = [
  {
    ...initialEdition,
    slug: "how-do-institutions-shape-society",
    title: "How Do Institutions Shape Society?",
    summary:
      "Institutions — the formal rules and informal norms that structure human behaviour — quietly shape almost every part of our lives. Understanding them helps explain why some problems persist despite good intentions.",
    domain: "society",
    alsoIn: ["community", "work"],
    tags: ["institutions", "governance", "norms", "economics", "systems"],
    format: "primer",
    level: "intermediate",
    keyIdeas: [
      "Institutions include formal rules (laws, contracts) and informal norms (customs, expectations).",
      "They shape incentives, expectations and what feels normal.",
      "Institutions are human-made, so they can be redesigned — though change is often slow.",
    ],
    sections: [
      {
        heading: "The rules of the game",
        body: [
          "The economist Douglass North described institutions as \"the rules of the game in a society\" — the humanly devised constraints that shape interaction. Some are formal: constitutions, laws, school timetables, employment contracts. Others are informal: customs, expectations about gender roles, ideas of what counts as success, unwritten rules about who speaks in a meeting.",
          "We are born into institutions we did not choose, and they often feel like the natural order of things. Recognising them as human creations is the first step toward understanding — and improving — them.",
        ],
      },
      {
        heading: "How institutions shape behaviour",
        kind: "evidence",
        body: [
          "Research in economics, sociology and political science has documented many ways institutions influence outcomes. Secure property rights, functioning courts and accountable governments are associated with long-run economic development in many cross-country studies, though scholars debate the direction of causation and the role of other factors such as geography and culture.",
          "At a smaller scale, simple changes to institutional defaults — for example, automatically enrolling employees in retirement savings schemes while allowing them to opt out — have been shown in several countries to increase participation substantially.",
        ],
      },
      {
        heading: "Institutions and individuals",
        kind: "interpretation",
        body: [
          "A common mistake is to explain every social problem by the character of individuals — corrupt officials, lazy students, greedy businesspeople. Character matters, but institutions shape what is easy, rewarded or punished. A well-designed institution makes it easier for ordinary people to act well; a poorly designed one can make even good people act badly.",
          "The reverse is also true: institutions are made and sustained by people. Values, understanding and courage in individuals are what eventually change institutions. An integral view holds both together.",
        ],
      },
      {
        heading: "Different views on institutional change",
        kind: "plural",
        body: [
          "Thinkers differ on how institutions should change. Some emphasise gradual reform and the wisdom embedded in long-standing traditions. Others emphasise that many institutions entrench inequality and require more fundamental change. Some see markets as the most effective institutions for coordination; others stress the role of the state, the community or the commons.",
          "Elinor Ostrom's research showed that communities can sometimes govern shared resources effectively without either privatisation or central control — complicating simple debates between \"market\" and \"state.\"",
        ],
      },
      {
        heading: "Looking at your own institutions",
        kind: "practice",
        body: [
          "Choose an institution you are part of — a school, workplace, housing society or family — and ask a few questions.",
        ],
        points: [
          "What are its written rules? Its unwritten ones?",
          "What behaviour does it reward, and what does it punish?",
          "Who can change its rules, and how?",
          "What outcomes would you like it to produce that it currently does not?",
        ],
      },
    ],
    reflectionQuestions: [
      "Which unwritten rules shaped your choices most strongly while growing up?",
      "Think of a problem you usually blame on individuals. How might institutions contribute to it?",
      "What institution would you most like to see redesigned, and what would you change first?",
    ],
    application: {
      title: "One small institutional change",
      steps: [
        "Identify one recurring frustration in a group you belong to.",
        "Ask whether it comes from a rule, a norm, a missing structure or a default.",
        "Propose one small change to that structure — for example, a rotating facilitator for meetings.",
        "Try it for a month and review together what changed.",
      ],
    },
    related: [
      "governance-at-every-scale",
      "how-can-communities-solve-shared-problems",
      "what-makes-economic-activity-meaningful",
    ],
    references: [
      {
        title: "Institutions, Institutional Change and Economic Performance",
        author: "Douglass C. North",
        year: 1990,
      },
      {
        title: "Governing the Commons: The Evolution of Institutions for Collective Action",
        author: "Elinor Ostrom",
        year: 1990,
      },
    ],
  },
  {
    ...initialEdition,
    slug: "what-do-we-mean-by-justice",
    title: "What Do We Mean by Justice?",
    summary:
      "Everyone wants justice, but people mean very different things by it. Understanding the main ways of thinking about fairness helps us reason together rather than past each other.",
    domain: "society",
    alsoIn: ["philosophy", "community"],
    tags: ["justice", "ethics", "fairness", "rights", "governance"],
    format: "primer",
    level: "intermediate",
    keyIdeas: [
      "Justice can be understood in terms of fair procedures, fair distribution, rights, desert or relationships.",
      "Major theories disagree, and each captures something important.",
      "Practical justice often involves reducing clear injustices rather than agreeing on a perfect ideal.",
    ],
    sections: [
      {
        heading: "One word, many meanings",
        body: [
          "When people call something unjust, they may mean that a rule was broken, that someone was treated unequally, that someone did not get what they deserved, that a person's rights were violated, or that a relationship was damaged. These are different ideas, and confusing them makes discussions about justice frustrating.",
          "This primer introduces several influential approaches. None is presented as the correct one.",
        ],
      },
      {
        heading: "Major approaches",
        kind: "plural",
        body: [
          "These are simplified summaries of rich and contested traditions.",
        ],
        points: [
          "Justice as fairness (John Rawls): fair principles are those people would choose without knowing their own position in society. Rawls argued this would include equal basic liberties and arranging inequalities to benefit the least advantaged.",
          "Entitlement theory (Robert Nozick): a distribution is just if it arises from just acquisition and voluntary transfer, regardless of the resulting pattern.",
          "Utilitarian approaches: just arrangements are those that produce the greatest overall well-being.",
          "The capabilities approach (Amartya Sen, Martha Nussbaum): justice is assessed by what people are actually able to do and be. Sen argued for comparing real alternatives to reduce manifest injustice rather than seeking a perfect ideal.",
          "Restorative justice: wrongdoing is understood as harm to relationships and communities; justice involves repairing harm, often with participation of those affected.",
          "Many religious and cultural traditions frame justice in terms of dharma, righteousness, duty or right relationship, each with its own detailed understanding.",
        ],
      },
      {
        heading: "Where they agree and differ",
        kind: "interpretation",
        body: [
          "These approaches disagree on fundamental questions: whether justice is about outcomes or procedures, whether equality or liberty takes priority, and what we owe to strangers. Yet most share a commitment to treating people with equal dignity and to giving reasons that others could, in principle, accept.",
          "Recognising which conception of justice someone is using can turn a heated argument into a clarifying conversation.",
        ],
      },
      {
        heading: "Justice in everyday life",
        kind: "practice",
        body: [
          "Justice is not only a matter for courts and governments. Families decide how to share chores and inheritance; teachers decide how to grade; workplaces decide how to pay and promote. In each case, asking which idea of fairness is at work — and whether everyone affected would accept it — is a useful discipline.",
        ],
      },
    ],
    reflectionQuestions: [
      "Recall a situation that felt deeply unfair to you. Which idea of justice was being violated?",
      "Do you lean toward judging fairness by procedures or by outcomes? Why?",
      "Which approach above do you find hardest to accept? What is its strongest point?",
    ],
    application: {
      title: "Reason about one real case",
      steps: [
        "Choose a current debate about fairness — in your family, institution or society.",
        "Describe how two different approaches above would assess it.",
        "Identify where they agree and where they differ.",
        "Write your own view, noting which considerations you weighted most and why.",
      ],
    },
    related: [
      "governance-at-every-scale",
      "how-do-traditions-understand-a-good-life",
      "how-do-institutions-shape-society",
    ],
    references: [
      {
        title: "A Theory of Justice",
        author: "John Rawls",
        year: 1971,
      },
      {
        title: "Anarchy, State, and Utopia",
        author: "Robert Nozick",
        year: 1974,
      },
      {
        title: "The Idea of Justice",
        author: "Amartya Sen",
        year: 2009,
      },
      {
        title: "Justice: What's the Right Thing to Do?",
        author: "Michael J. Sandel",
        year: 2009,
        note: "An accessible introduction to competing theories of justice.",
      },
    ],
  },
  {
    ...initialEdition,
    slug: "governance-at-every-scale",
    title: "Governance at Every Scale",
    summary:
      "Governance is not only what governments do. Every family, school, cooperative and online community governs itself somehow — and the same questions of participation, accountability and fairness arise at each level.",
    domain: "society",
    alsoIn: ["community", "relationships"],
    tags: ["governance", "participation", "accountability", "decision-making", "subsidiarity"],
    format: "essay",
    level: "beginner",
    keyIdeas: [
      "Governance means how decisions are made, by whom and with what accountability.",
      "The same principles — participation, transparency, accountability, fairness — apply at every scale.",
      "Decisions are often best made as close as possible to the people affected, where that is practical.",
    ],
    sections: [
      {
        heading: "What governance means",
        body: [
          "Governance is the set of processes by which a group makes decisions, allocates resources and resolves disputes. Governments are one form of governance, but families, schools, companies, temples, cooperatives, residents' associations and online communities all govern themselves too, often with little explicit thought.",
          "Because governance is everywhere, learning to govern well is a skill nearly everyone needs.",
        ],
      },
      {
        heading: "Recurring principles",
        kind: "interpretation",
        body: [
          "Across scales, several principles recur in discussions of good governance.",
        ],
        points: [
          "Participation: those affected by decisions have a meaningful voice.",
          "Transparency: decisions and their reasons are visible.",
          "Accountability: those with power can be questioned and, if necessary, corrected.",
          "Fairness: rules apply consistently and protect those with less power.",
          "Effectiveness: decisions are actually carried out.",
        ],
      },
      {
        heading: "Subsidiarity and local decision-making",
        kind: "plural",
        body: [
          "The principle of subsidiarity holds that decisions should be taken at the most local level capable of handling them well. It appears in Catholic social teaching, in the governing treaties of the European Union and, in different forms, in arguments for decentralisation such as India's constitutional amendments establishing panchayati raj institutions and urban local bodies.",
          "Others caution that local decision-making can entrench local elites or exclude minorities, and that some problems — such as rivers crossing many districts — need coordination at larger scales. In practice, many scholars favour polycentric arrangements in which multiple levels of governance check and complement each other.",
        ],
      },
      {
        heading: "Governance in families and small groups",
        kind: "perspective",
        body: [
          "Families make decisions constantly: how money is spent, how chores are shared, how conflicts are resolved. Some families decide mostly by authority, others by discussion, many by unspoken habit. Making these processes explicit — for instance, through a regular family meeting where everyone, including children, is heard — can build trust and teach young people the skills of participation.",
          "This is not a call for every family to vote on everything. Different cultures and families balance authority, care and participation differently. The useful question is whether the way decisions are made helps everyone feel respected and understood.",
        ],
      },
    ],
    reflectionQuestions: [
      "How are decisions made in your family or workplace? Who has the most say, and why?",
      "When have you felt that a decision affecting you was made without your voice?",
      "Which problem in your area would be better handled more locally — or less locally?",
    ],
    application: {
      title: "Hold one well-run meeting",
      steps: [
        "Choose a group you belong to with a decision to make.",
        "Share the agenda in advance and invite everyone affected.",
        "Make sure each person speaks once before anyone speaks twice.",
        "Record the decision, the reasons, and who will do what, and share it afterwards.",
      ],
    },
    related: [
      "how-do-institutions-shape-society",
      "what-do-we-mean-by-justice",
      "how-can-communities-solve-shared-problems",
    ],
    references: [
      {
        title: "Governing the Commons: The Evolution of Institutions for Collective Action",
        author: "Elinor Ostrom",
        year: 1990,
      },
    ],
  },
];
