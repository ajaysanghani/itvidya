import type { Resource } from "../schema";
import { initialEdition } from "./defaults";

const financialCare =
  "This resource explores ideas about economic life. It is not financial, legal or investment advice. For personal financial decisions, please consult a qualified adviser.";

export const workResources: Resource[] = [
  {
    ...initialEdition,
    slug: "what-makes-economic-activity-meaningful",
    title: "What Makes Economic Activity Meaningful?",
    summary:
      "Economies exist to meet human needs. When we ask what economic activity is for, questions of sufficiency, relationship and contribution come back into view alongside growth and efficiency.",
    domain: "work",
    alsoIn: ["society", "community"],
    tags: ["economics", "prosperity", "sufficiency", "livelihood", "purpose"],
    format: "essay",
    level: "intermediate",
    careNote: financialCare,
    keyIdeas: [
      "Economic activity is a means to human well-being, not an end in itself.",
      "Common measures such as GDP capture market activity but miss much of what matters.",
      "Meaningful economic activity meets real needs, respects people and nature, and builds relationships.",
    ],
    sections: [
      {
        heading: "Returning to purpose",
        body: [
          "The word \"economy\" comes from the Greek oikonomia, the management of a household. At its root, economic activity is about providing for the needs of a household or community. Over time, economies have become vast and complex, and it is easy to lose sight of this purpose — to treat growth, profit or consumption as goals in themselves.",
          "Asking what makes economic activity meaningful is a way of reconnecting means with ends.",
        ],
      },
      {
        heading: "What standard measures capture — and miss",
        kind: "evidence",
        body: [
          "Gross domestic product (GDP) measures the market value of goods and services produced. It is useful for tracking economic activity, but economists — including those who developed national accounts — have long cautioned against treating it as a measure of well-being. GDP does not count unpaid care and household work, does not subtract environmental depletion, and does not show how income is distributed.",
          "This has led to alternative measures, such as the United Nations Development Programme's Human Development Index, which combines income with health and education, and a range of well-being and sustainability indicators.",
        ],
      },
      {
        heading: "Perspectives on meaningful economic life",
        kind: "plural",
        body: [
          "Different traditions offer different answers to what makes economic activity good.",
        ],
        points: [
          "Mainstream economics generally emphasises efficient allocation of resources and voluntary exchange as ways to increase welfare, while recognising market failures that require correction.",
          "Gandhian economic thought, as articulated by J. C. Kumarappa and others, emphasised village self-reliance, decentralised production and an \"economy of permanence\" in harmony with nature.",
          "E. F. Schumacher's \"Buddhist economics\" argued for maximising well-being with minimal consumption and valued work as a source of human development.",
          "Feminist economists have highlighted the economic value of unpaid care work.",
          "Ecological economists stress that economies are embedded within, and dependent on, natural systems with limits.",
        ],
      },
      {
        heading: "Three questions of meaning",
        kind: "interpretation",
        body: [
          "Drawing on these perspectives, three questions can help assess whether a particular economic activity is meaningful.",
        ],
        points: [
          "Does it meet a real need, or mainly create and satisfy artificial wants?",
          "Does it respect the people involved — workers, customers, communities — and the natural systems it depends on?",
          "Does it strengthen relationships of trust and mutual benefit, or depend on exploitation and deception?",
        ],
      },
      {
        heading: "Prosperity as a feeling of enough",
        kind: "perspective",
        body: [
          "Some educational frameworks, including the Universal Human Values approach, distinguish prosperity — a feeling of having or producing more than one needs — from mere wealth. On this view, a family with modest means but clarity about its needs may feel prosperous, while a wealthy family with unlimited wants may never feel that it has enough. Whether or not one adopts this definition, it highlights the role of understanding in economic well-being.",
        ],
      },
    ],
    reflectionQuestions: [
      "What need does your own work or study meet? For whom?",
      "When have you felt prosperous, regardless of your income at the time?",
      "Which economic activities around you build trust, and which erode it?",
    ],
    application: {
      title: "Trace the value of one product",
      steps: [
        "Choose one product you use often.",
        "List who was involved in making and delivering it, and what each received in return.",
        "Note which natural resources it depended on and what happens to it after use.",
        "Ask whether, overall, it meets a real need and respects the people and systems involved.",
      ],
    },
    related: [
      "needs-desires-and-happiness",
      "work-as-livelihood-craft-and-contribution",
      "how-do-institutions-shape-society",
    ],
    references: [
      {
        title: "Small Is Beautiful: A Study of Economics as if People Mattered",
        author: "E. F. Schumacher",
        year: 1973,
      },
      {
        title: "Economy of Permanence",
        author: "J. C. Kumarappa",
        note: "First published in the 1940s; several editions exist.",
      },
      {
        title: "Development as Freedom",
        author: "Amartya Sen",
        year: 1999,
      },
    ],
  },
  {
    ...initialEdition,
    slug: "work-as-livelihood-craft-and-contribution",
    title: "Work as Livelihood, Craft and Contribution",
    summary:
      "Work can be a way to earn a living, a way to develop skill and a way to contribute to others. Seeing all three dimensions can help us make wiser choices about our working lives.",
    domain: "work",
    alsoIn: ["self", "learning"],
    tags: ["livelihood", "craft", "purpose", "skills", "vocation"],
    format: "essay",
    level: "beginner",
    careNote: financialCare,
    keyIdeas: [
      "Work serves at least three purposes: livelihood, development of skill and contribution.",
      "Neglecting any one tends to create strain — insecurity, stagnation or emptiness.",
      "Meaning in work often grows through mastery and relationship, not only through choosing the \"right\" job.",
    ],
    sections: [
      {
        heading: "Three dimensions of work",
        kind: "interpretation",
        body: [
          "It can help to think of work in three dimensions.",
        ],
        points: [
          "Livelihood: work provides for the physical needs of ourselves and our families. This is not a lesser purpose — it is a responsibility and a form of care.",
          "Craft: work develops skill. There is a distinct satisfaction in doing something well, whether it is carpentry, coding, teaching, farming or cooking.",
          "Contribution: work serves others. It meets needs beyond our own and connects us to a larger whole.",
        ],
      },
      {
        heading: "What research on work suggests",
        kind: "evidence",
        body: [
          "Research in organisational psychology has consistently associated certain job characteristics — autonomy, variety of skills, a clear sense of the task's significance, and feedback — with greater job satisfaction and motivation. Studies on \"job crafting\" suggest that people can sometimes increase the meaningfulness of their work by reshaping tasks, relationships and how they think about their role.",
          "At the same time, research also shows that insecure income, long hours and lack of control are associated with stress and poorer health. Meaning does not compensate for unfair conditions; both matter.",
        ],
      },
      {
        heading: "Perspectives on vocation",
        kind: "plural",
        body: [
          "The Bhagavad Gītā presents the idea of acting according to one's duty without attachment to the fruits of action. Many religious traditions speak of work as a calling. Craft traditions around the world honour mastery passed from teacher to apprentice. Some contemporary writers encourage people to \"follow their passion\"; others argue that passion often follows the development of skill rather than preceding it.",
          "These perspectives offer different emphases, and each may fit different stages of life.",
        ],
      },
      {
        heading: "Choosing and shaping work",
        kind: "practice",
        body: [
          "Most people cannot choose their work freely, and many choices are constrained by money, family obligations and opportunity. Within those constraints, a few questions can guide decisions.",
        ],
        points: [
          "Does this work provide sufficiently for my needs and responsibilities?",
          "Will I grow in skill and understanding here?",
          "Whom does this work serve, and how?",
          "What can I change within my current role to strengthen any of these dimensions?",
        ],
      },
    ],
    reflectionQuestions: [
      "In your current work or study, which of the three dimensions is strongest? Which is weakest?",
      "What skill have you developed that gives you quiet satisfaction?",
      "Who benefits from your work, directly and indirectly?",
    ],
    application: {
      title: "A work reflection",
      steps: [
        "Draw three overlapping circles labelled Livelihood, Craft and Contribution.",
        "Place your current activities within the circles.",
        "Identify one small change that could strengthen the weakest circle.",
        "Try it for one month and reflect on what changed.",
      ],
    },
    related: [
      "what-makes-economic-activity-meaningful",
      "how-do-we-learn-from-experience",
      "how-should-we-think-about-technology",
    ],
    references: [
      {
        title: "The Bhagavad Gita",
        author: "Traditional; many translations available",
      },
      {
        title: "The Craftsman",
        author: "Richard Sennett",
        year: 2008,
        note: "A study of craft and the desire to do a job well for its own sake.",
      },
    ],
  },
  {
    ...initialEdition,
    slug: "how-should-we-think-about-technology",
    title: "How Should We Think About Technology?",
    summary:
      "Technology is neither simply good nor simply harmful. It amplifies human intentions and reshapes how we live. Thinking clearly about it means asking who designs it, for what purpose, and with what effects.",
    domain: "work",
    alsoIn: ["society", "learning"],
    tags: ["technology", "ethics", "design", "attention", "society"],
    format: "essay",
    level: "beginner",
    keyIdeas: [
      "Technologies embody choices and values; they are not neutral in their effects.",
      "Effects depend on design, context and use, and often differ for different people.",
      "Asking a few consistent questions helps us use and shape technology more wisely.",
    ],
    sections: [
      {
        heading: "Tools that shape their users",
        body: [
          "From the plough to the printing press to the smartphone, tools have changed not only what people can do but how they live, think and relate. A technology adopted for one purpose often reshapes habits and institutions in unanticipated ways.",
          "Because technology shapes us, thinking about it is part of understanding ourselves and our societies.",
        ],
      },
      {
        heading: "Several ways of seeing technology",
        kind: "plural",
        body: [
          "Thoughtful people hold different views.",
        ],
        points: [
          "Optimistic views emphasise how technology has reduced poverty, extended life expectancy and expanded access to knowledge.",
          "Critical views emphasise how technology can concentrate power, erode attention, displace work or damage ecosystems.",
          "The appropriate-technology tradition, associated with Gandhi and Schumacher, asks whether technologies suit local needs, skills and resources and can be controlled by those who use them.",
          "Design-centred views emphasise that outcomes depend heavily on how a technology is designed and governed, not on technology as such.",
        ],
      },
      {
        heading: "What the evidence says about digital technology and well-being",
        kind: "evidence",
        body: [
          "The effects of smartphones and social media on well-being, especially among young people, are actively debated. Some studies find associations between heavy use and poorer mental health; others find small average effects and stress that results depend on how, why and by whom technology is used. Establishing cause and effect is difficult.",
          "Given this uncertainty, it is reasonable to pay close attention to how specific uses affect you or the young people you care for, rather than relying on blanket claims in either direction.",
        ],
      },
      {
        heading: "Questions to ask of any technology",
        kind: "practice",
        body: [
          "A few consistent questions can help individuals, families and organisations decide how to adopt technology.",
        ],
        points: [
          "What human need does this serve?",
          "Who designed it, and whose interests does it serve?",
          "What does it make easier, and what does it make harder?",
          "What skills or relationships might it replace or weaken?",
          "Can I control how I use it, or does it shape my behaviour in ways I did not choose?",
        ],
      },
      {
        heading: "Technology and responsibility",
        kind: "interpretation",
        body: [
          "As tools become more powerful, the understanding and intentions of those who design and use them matter more. Technical skill without wisdom can multiply harm; wisdom without technical skill can leave good intentions unrealised. Learning to bring them together is one of the central educational challenges of our time.",
        ],
      },
    ],
    reflectionQuestions: [
      "Which technology has improved your life most? Which has cost you the most?",
      "Do you feel in control of how you use your phone? What evidence do you have?",
      "If you could redesign one technology you use daily, what would you change?",
    ],
    application: {
      title: "A technology review",
      steps: [
        "List the five technologies or apps you use most each day.",
        "For each, write which need it serves and one way it shapes your behaviour.",
        "Choose one to use more deliberately for a week — for example, by setting specific times.",
        "Reflect on what changed in your attention, relationships or mood.",
      ],
    },
    related: [
      "work-as-livelihood-craft-and-contribution",
      "what-makes-economic-activity-meaningful",
      "what-is-integral-thinking",
    ],
    references: [
      {
        title: "Small Is Beautiful: A Study of Economics as if People Mattered",
        author: "E. F. Schumacher",
        year: 1973,
      },
      {
        title: "Tools for Conviviality",
        author: "Ivan Illich",
        year: 1973,
      },
    ],
  },
];
