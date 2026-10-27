import type { Resource } from "../schema";
import { initialEdition } from "./defaults";

export const communityResources: Resource[] = [
  {
    ...initialEdition,
    slug: "how-can-communities-solve-shared-problems",
    title: "How Can Communities Solve Shared Problems?",
    summary:
      "Communities around the world have managed forests, fisheries, water and other shared resources for generations. Research on these successes offers practical lessons for any group facing a common challenge.",
    domain: "community",
    alsoIn: ["society", "nature"],
    tags: ["commons", "collective action", "local problem-solving", "cooperation", "governance"],
    format: "guide",
    level: "beginner",
    keyIdeas: [
      "Shared problems are not doomed to a \"tragedy of the commons.\"",
      "Elinor Ostrom identified design principles common to long-lasting community institutions.",
      "Practical problem-solving starts with listening, building on existing strengths and acting in small steps.",
    ],
    sections: [
      {
        heading: "Beyond the tragedy of the commons",
        body: [
          "In 1968, ecologist Garrett Hardin argued that shared resources — like a common pasture — would inevitably be overused, because each individual gains from using more while the costs are shared. His essay, \"The Tragedy of the Commons,\" became very influential and was often used to argue that resources must be either privatised or controlled by the state.",
          "Yet communities around the world had long managed common resources successfully, sometimes for centuries.",
        ],
      },
      {
        heading: "What Ostrom found",
        kind: "evidence",
        body: [
          "Political economist Elinor Ostrom studied community-managed resources — irrigation systems in Nepal and Spain, mountain pastures in Switzerland, forests and fisheries — and found that communities often devised effective rules without privatisation or central control. She received the Nobel Memorial Prize in Economic Sciences in 2009, shared with Oliver Williamson.",
          "Ostrom identified a set of design principles common to long-enduring institutions for managing commons.",
        ],
        points: [
          "Clearly defined boundaries: who has rights to the resource, and what the resource is.",
          "Rules that fit local conditions.",
          "Those affected by the rules can participate in changing them.",
          "Monitoring by people accountable to the community.",
          "Graduated sanctions for those who break rules.",
          "Accessible, low-cost ways to resolve conflicts.",
          "Recognition by outside authorities of the community's right to organise.",
          "For larger systems, nested layers of governance.",
        ],
      },
      {
        heading: "Applying the lessons",
        kind: "interpretation",
        body: [
          "Ostrom cautioned against treating her principles as a blueprint; they describe patterns, not guarantees. Still, they offer useful questions for any shared problem — a neighbourhood's waste, a shared workspace, a school's playground, a village tank. Who is affected? Who makes the rules? How is use monitored? How are conflicts resolved?",
        ],
      },
      {
        heading: "Starting from strengths",
        kind: "perspective",
        body: [
          "Asset-based community development, an approach associated with John McKnight and John Kretzmann, suggests beginning not with a community's deficiencies but with its existing assets: the skills of residents, local associations, institutions and physical resources. Proponents argue that this builds ownership and avoids dependence on outside experts; critics note that it should not be used to excuse the withdrawal of public support.",
        ],
      },
      {
        heading: "A practical sequence",
        kind: "practice",
        body: [
          "There is no universal method, but many successful efforts follow a similar path.",
        ],
        points: [
          "Listen widely — especially to people most affected and least heard.",
          "Map existing strengths, relationships and resources.",
          "Agree together on a small, concrete first step.",
          "Act, observe what happens and adjust.",
          "Make rules and responsibilities explicit as the effort grows.",
          "Celebrate progress and share what you learn.",
        ],
      },
    ],
    reflectionQuestions: [
      "What shared resource in your community is well cared for? What makes the difference?",
      "Which shared problem around you is usually blamed on \"other people\"?",
      "What strengths does your community have that are rarely recognised?",
    ],
    application: {
      title: "Map a shared problem",
      steps: [
        "Choose one shared issue — litter, water, noise, safety, a neglected common space.",
        "Talk with at least five people affected about how they see it.",
        "Use Ostrom's principles as a checklist: which are present, and which are missing?",
        "Propose one small step and invite others to try it with you.",
      ],
    },
    related: [
      "why-do-humans-cooperate",
      "what-does-meaningful-service-look-like",
      "how-do-institutions-shape-society",
    ],
    references: [
      {
        title: "Governing the Commons: The Evolution of Institutions for Collective Action",
        author: "Elinor Ostrom",
        year: 1990,
      },
      {
        title: "The Tragedy of the Commons",
        author: "Garrett Hardin",
        year: 1968,
        note: "Published in Science; read alongside Ostrom's response.",
      },
      {
        title: "Building Communities from the Inside Out",
        author: "John P. Kretzmann and John L. McKnight",
        year: 1993,
      },
    ],
  },
  {
    ...initialEdition,
    slug: "why-do-humans-cooperate",
    title: "Why Do Humans Cooperate?",
    summary:
      "Humans cooperate on a scale unmatched by most other species. Science, philosophy and everyday experience offer complementary explanations — and practical clues about how to strengthen cooperation.",
    domain: "community",
    alsoIn: ["relationships", "nature", "society"],
    tags: ["cooperation", "trust", "reciprocity", "evolution", "collective action"],
    format: "primer",
    level: "intermediate",
    keyIdeas: [
      "Cooperation among humans is extensive and has been studied across biology, economics and psychology.",
      "Reciprocity, reputation, shared norms and institutions all help sustain it.",
      "Cooperation can be strengthened by design — or eroded by it.",
    ],
    sections: [
      {
        heading: "A puzzle and a fact",
        body: [
          "Humans build cities, run hospitals, maintain languages and share knowledge across generations. This depends on vast networks of cooperation among people who are often strangers. For scientists, explaining this has been a long-standing puzzle: if individuals compete for survival and advantage, why do they help each other?",
        ],
      },
      {
        heading: "Explanations from science",
        kind: "evidence",
        body: [
          "Researchers have identified several mechanisms that can sustain cooperation.",
        ],
        points: [
          "Kin selection: helping relatives can favour shared genes.",
          "Direct reciprocity: \"I help you, you help me\" — studied in game theory, including Robert Axelrod's computer tournaments, in which a simple reciprocal strategy known as tit-for-tat performed strongly.",
          "Indirect reciprocity and reputation: people help those known to be helpful.",
          "Norms and sanctions: shared expectations, with consequences for those who violate them. Experiments in many societies have found that people will often bear a cost to punish unfairness.",
          "Institutions: rules and organisations that make cooperation reliable among large groups.",
        ],
      },
      {
        heading: "Cultural and philosophical views",
        kind: "perspective",
        body: [
          "Many cultural and philosophical traditions see cooperation not as a puzzle requiring special explanation but as natural to human beings. Ubuntu philosophy holds that personhood is realised through relationships with others. Peter Kropotkin, a naturalist and political thinker, argued in \"Mutual Aid\" that cooperation was as important as competition in evolution. Some Indian philosophical perspectives describe human beings as naturally seeking harmony and mutual fulfilment when they understand themselves rightly.",
          "These views differ from strict self-interest models and from each other. They raise an important question: is cooperation something we must engineer, or something we can uncover?",
        ],
      },
      {
        heading: "What strengthens cooperation in practice",
        kind: "interpretation",
        body: [
          "Drawing on both research and experience, several conditions seem to help.",
        ],
        points: [
          "Repeated interaction, so that relationships matter over time.",
          "Communication, which makes it easier to build trust and agree on rules.",
          "Fairness, so that people do not feel exploited.",
          "Visible contributions and shared recognition.",
          "Shared purpose that people actually understand and value.",
        ],
      },
    ],
    reflectionQuestions: [
      "When have you cooperated with people you did not know? What made it possible?",
      "Which of the conditions above are weakest in a group you belong to?",
      "Do you see cooperation as natural or as something that must be built? Why?",
    ],
    application: {
      title: "Strengthen cooperation in one group",
      steps: [
        "Choose a group you belong to — a class, team, family or association.",
        "Identify which condition for cooperation is weakest: communication, fairness, recognition or shared purpose.",
        "Propose one change addressing that condition.",
        "After a month, ask others whether anything has improved.",
      ],
    },
    related: [
      "how-can-communities-solve-shared-problems",
      "how-do-we-build-trust",
      "what-is-coexistence",
    ],
    references: [
      {
        title: "The Evolution of Cooperation",
        author: "Robert Axelrod",
        year: 1984,
      },
      {
        title: "Mutual Aid: A Factor of Evolution",
        author: "Peter Kropotkin",
        year: 1902,
      },
    ],
  },
  {
    ...initialEdition,
    slug: "what-does-meaningful-service-look-like",
    title: "What Does Meaningful Service Look Like?",
    summary:
      "Service can build dignity and relationship, or it can create dependence and quietly elevate the helper. Thoughtful service starts with listening and treats the people served as partners.",
    domain: "community",
    alsoIn: ["relationships", "self"],
    tags: ["service", "volunteering", "dignity", "community development", "ethics"],
    format: "essay",
    level: "beginner",
    keyIdeas: [
      "Helping is not automatically helpful; good intentions need understanding.",
      "Meaningful service respects the agency and knowledge of the people served.",
      "Service done well tends to transform the server as much as the served.",
    ],
    sections: [
      {
        heading: "When helping does not help",
        body: [
          "Most of us want to help others. But history and experience show that well-intentioned help can sometimes do harm: donations that undermine local producers, programmes designed without asking the people they serve, volunteering that benefits the volunteer's sense of purpose more than the community.",
          "This is not a reason to stop serving. It is a reason to serve with greater understanding.",
        ],
      },
      {
        heading: "Helping, fixing and serving",
        kind: "perspective",
        body: [
          "Physician and writer Rachel Naomi Remen drew a widely quoted distinction between helping, fixing and serving. In her view, helping can imply inequality — the helper is stronger; fixing can treat the other as broken; serving, by contrast, is a relationship between equals in which both are whole.",
          "Many spiritual and ethical traditions express similar ideas. The Sikh tradition of sevā and the langar, the Hindu ideal of niṣkāma karma (action without attachment to reward), and the Christian ideal of serving one's neighbour all frame service as a practice that shapes the server's inner life, not a transaction.",
        ],
      },
      {
        heading: "Principles from practice",
        kind: "interpretation",
        body: [
          "People working in community development have articulated principles that help service stay respectful and effective.",
        ],
        points: [
          "Listen first. The people affected usually know their situation better than outsiders.",
          "Build on strengths, not only needs.",
          "Aim to strengthen capacities rather than create dependence.",
          "Stay for the long term where possible; trust takes time.",
          "Be accountable to the people served, not only to donors or one's own conscience.",
          "Reflect honestly on your own motives.",
        ],
      },
      {
        heading: "Different emphases",
        kind: "plural",
        body: [
          "Some argue that direct, personal service is irreplaceable because it builds relationships across difference. Others argue that structural change — through policy, institutions and advocacy — does more good than individual acts of service. Effective altruism, a contemporary movement, emphasises using evidence to identify where resources can do the most good; critics argue it can undervalue local relationships and hard-to-measure goods.",
          "These approaches can complement each other. Many people combine direct service with efforts to change the conditions that make it necessary.",
        ],
      },
    ],
    reflectionQuestions: [
      "Recall a time someone helped you in a way that felt respectful. What made it so?",
      "Recall a time help felt diminishing. What was different?",
      "What motivates your own wish to serve? Is anything in it about you rather than the other person?",
    ],
    application: {
      title: "Serve as a learner",
      steps: [
        "Find an existing local group already doing service you care about.",
        "Offer to help with whatever they need, rather than proposing your own project.",
        "For the first month, mainly listen and observe.",
        "Reflect on what you have learned about the community, the work and yourself.",
      ],
    },
    related: [
      "how-can-communities-solve-shared-problems",
      "listening-as-a-learning-practice",
      "why-do-humans-cooperate",
    ],
    references: [
      {
        title: "Kitchen Table Wisdom: Stories That Heal",
        author: "Rachel Naomi Remen",
        year: 1996,
        note: "Essays by the same author on care, healing and relationship.",
      },
      {
        title: "Building Communities from the Inside Out",
        author: "John P. Kretzmann and John L. McKnight",
        year: 1993,
      },
    ],
  },
];
