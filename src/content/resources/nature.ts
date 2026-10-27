import type { Resource } from "../schema";
import { initialEdition } from "./defaults";

export const natureResources: Resource[] = [
  {
    ...initialEdition,
    slug: "what-is-coexistence",
    title: "What Is Coexistence?",
    summary:
      "Coexistence is the idea that everything that exists is related to everything else. Exploring it — scientifically and philosophically — can change how we see our place in the world.",
    domain: "nature",
    alsoIn: ["philosophy", "society"],
    tags: ["coexistence", "interdependence", "ecology", "systems", "worldview"],
    format: "essay",
    level: "beginner",
    keyIdeas: [
      "Ecology describes in detail how organisms and environments depend on one another.",
      "Several philosophical traditions go further, treating relatedness as a basic feature of existence itself.",
      "Seeing ourselves within relationships, rather than apart from them, has practical consequences.",
    ],
    sections: [
      {
        heading: "Beyond peaceful tolerance",
        body: [
          "In everyday use, \"coexistence\" often means people or groups living side by side without conflict. That is valuable, but the idea can go much deeper. In a fuller sense, coexistence describes the way every part of existence is connected with every other part — the way soil, water, plants, animals and humans exist in relationship, not in isolation.",
          "This resource explores coexistence in two registers: what science tells us about interdependence, and what various philosophical traditions suggest it means for how we live.",
        ],
      },
      {
        heading: "Interdependence in the natural world",
        kind: "evidence",
        body: [
          "Ecology has documented interdependence at every scale. Plants depend on soil microorganisms, many of which form partnerships with roots that help plants take up nutrients. Many flowering plants depend on animal pollinators. Decomposers return nutrients from dead matter to the soil. Water, carbon and nitrogen move in cycles linking the atmosphere, oceans, soils and living things.",
          "These relationships are not decorative details. When they are disrupted — for example, when pollinators decline or soil loses organic matter — effects can spread through the system in ways that are hard to predict.",
        ],
      },
      {
        heading: "Philosophical perspectives on relatedness",
        kind: "perspective",
        body: [
          "Many traditions treat relatedness as more than an ecological fact. The Buddhist teaching of dependent origination (pratītyasamutpāda) holds that all phenomena arise in dependence on conditions. The Huayan school illustrated this with the image of Indra's net, in which each jewel reflects every other. Many Indigenous knowledge systems describe land, water and other beings as relatives rather than resources.",
          "Madhyasth Darśan, a contemporary Indian philosophy developed by A. Nagraj, describes existence itself as coexistence — units existing in an all-pervading space — and suggests that understanding this order is the basis of right relationship with humans and with nature. Western process philosophy, associated with Alfred North Whitehead, also emphasises relations and processes over isolated things.",
          "These views differ significantly from each other. They are offered here not as proven facts but as ways of seeing that invite reflection and testing in experience.",
        ],
      },
      {
        heading: "Why it matters in practice",
        kind: "interpretation",
        body: [
          "If we see ourselves as separate from nature, it can seem natural to treat it as a store of resources to be used. If we see ourselves as participants in a web of relationships, the questions change: What does this relationship need to remain healthy? What do I receive, and what do I return?",
          "The same shift applies to human relationships. A family, a workplace or a society can be understood as a collection of competing individuals, or as a set of relationships whose health determines the well-being of everyone in them.",
        ],
      },
      {
        heading: "Questions that remain open",
        kind: "hypothesis",
        body: [
          "Recognising interdependence does not settle every question. How should we weigh human needs against those of other species? Is there an inherent order in existence, or do we project order onto it? Does relatedness imply moral obligations, and if so, which ones? Thoughtful people answer these questions differently, and inquiry into them is part of the learning.",
        ],
      },
    ],
    reflectionQuestions: [
      "Name five things you depend on today that you did not create and rarely think about.",
      "Do you experience yourself more as separate from nature, or as part of it? Has this changed over time?",
      "If coexistence is real, what responsibilities, if any, follow from it?",
    ],
    application: {
      title: "A relationship walk",
      steps: [
        "Take a slow, twenty-minute walk in any place with some living things — even a city street with trees.",
        "Choose one plant, animal or patch of ground and ask: What does this depend on? What depends on it?",
        "Sketch or list the relationships you can see, and those you can only infer.",
        "Afterwards, note one way your own daily life is part of a similar web.",
      ],
    },
    related: [
      "how-do-ecosystems-remain-dynamic",
      "what-does-regeneration-mean",
      "what-is-integral-thinking",
    ],
    references: [
      {
        title: "Thinking in Systems: A Primer",
        author: "Donella H. Meadows",
        year: 2008,
        note: "A clear introduction to how interconnected systems behave.",
      },
      {
        title: "The Systems View of Life: A Unifying Vision",
        author: "Fritjof Capra and Pier Luigi Luisi",
        year: 2014,
      },
      {
        title: "Braiding Sweetgrass",
        author: "Robin Wall Kimmerer",
        year: 2013,
        note: "Brings together botany and Indigenous perspectives on reciprocity with the living world.",
      },
    ],
  },
  {
    ...initialEdition,
    slug: "how-do-ecosystems-remain-dynamic",
    title: "How Do Ecosystems Remain Dynamic?",
    summary:
      "Ecosystems are not static balances but constantly changing systems that can absorb disturbance — up to a point. Understanding resilience helps us see what human activity can strengthen or undermine.",
    domain: "nature",
    alsoIn: ["learning"],
    tags: ["ecology", "resilience", "systems", "cycles", "biodiversity"],
    format: "primer",
    level: "intermediate",
    keyIdeas: [
      "Ecosystems change constantly; stability is dynamic, not fixed.",
      "Feedback loops, diversity and cycles help ecosystems absorb disturbance.",
      "Beyond certain thresholds, systems can shift into different states that are hard to reverse.",
    ],
    sections: [
      {
        heading: "The myth of a fixed balance",
        body: [
          "It is common to speak of a \"balance of nature,\" as if ecosystems settle into a perfect, unchanging state. Ecologists today generally describe something more dynamic. Forests burn and regrow, rivers shift course, populations rise and fall. What persists is not a frozen balance but a pattern of continuous adjustment.",
        ],
      },
      {
        heading: "How ecosystems absorb change",
        kind: "evidence",
        body: [
          "Several well-studied features help ecosystems persist through change.",
        ],
        points: [
          "Cycles: water, carbon, nitrogen and other elements move continually between living and non-living parts of the system.",
          "Feedback loops: balancing feedbacks — for example, predators limiting prey populations — can dampen extreme swings.",
          "Diversity: having many species, including several that play similar roles, can help functions continue if one species declines. Research on the relationship between diversity and stability is substantial, though the details depend on context.",
          "Succession: after a disturbance such as a fire or flood, communities of organisms tend to re-establish in recognisable stages.",
        ],
      },
      {
        heading: "Keystones and connections",
        kind: "evidence",
        body: [
          "Some species have effects far larger than their numbers suggest. In classic field experiments on rocky shores of the north-eastern Pacific, ecologist Robert Paine found that removing a predatory sea star led to a large drop in the diversity of the community. Such \"keystone\" roles show that relationships, not just populations, shape an ecosystem's character.",
        ],
      },
      {
        heading: "Thresholds and tipping points",
        kind: "evidence",
        body: [
          "Ecologists use the term resilience for the capacity of a system to absorb disturbance and still retain its basic structure and functions. Research has documented cases where systems, pushed past a threshold, shift into a different state — for example, a clear lake becoming persistently murky after nutrient pollution, or coral reefs becoming dominated by algae.",
          "Predicting exactly where such thresholds lie is difficult and an active area of research. This uncertainty is itself a reason for caution.",
        ],
      },
      {
        heading: "Lessons beyond ecology",
        kind: "interpretation",
        body: [
          "The ideas of cycles, feedback, diversity and resilience have been applied — sometimes loosely — to economies, organisations and communities. Used carefully, they offer useful questions: Does this system recycle what it uses? Does it have balancing feedback? Does it depend on a single point of failure? Used carelessly, analogies between ecosystems and societies can hide important differences, such as human intention and power.",
        ],
      },
    ],
    reflectionQuestions: [
      "Which natural cycles do you participate in every day?",
      "Can you think of a system in your life — a household, a team, a habit — that has crossed a threshold and changed state?",
      "What does resilience mean for a person, compared with an ecosystem?",
    ],
    application: {
      title: "Observe a small ecosystem",
      steps: [
        "Choose a small area — a garden bed, a pond edge, a patch of grass — and visit it a few times over two weeks.",
        "Note what lives there, what changes and what stays the same.",
        "Look for one cycle (e.g. leaves falling and decomposing) and one relationship (e.g. insects visiting flowers).",
        "Reflect on what might happen if one element disappeared.",
      ],
    },
    related: [
      "what-is-coexistence",
      "what-does-regeneration-mean",
      "how-can-communities-solve-shared-problems",
    ],
    references: [
      {
        title: "Thinking in Systems: A Primer",
        author: "Donella H. Meadows",
        year: 2008,
      },
      {
        title: "A Sand County Almanac",
        author: "Aldo Leopold",
        year: 1949,
        note: "A classic reflection on ecological understanding and the \"land ethic.\"",
      },
    ],
  },
  {
    ...initialEdition,
    slug: "what-does-regeneration-mean",
    title: "What Does Regeneration Mean?",
    summary:
      "Sustainability asks how to do less harm. Regeneration asks how to restore the capacity of living systems — soils, watersheds, communities — to renew themselves.",
    domain: "nature",
    alsoIn: ["work", "community"],
    tags: ["regeneration", "sustainability", "soil", "water", "restoration"],
    format: "primer",
    level: "beginner",
    keyIdeas: [
      "Regeneration focuses on restoring a system's own capacity to renew itself.",
      "Practices such as watershed restoration and soil building have documented local successes, though results depend on context.",
      "\"Regenerative\" is also used loosely as a marketing term, so examining specific claims is important.",
    ],
    sections: [
      {
        heading: "From less harm to renewed health",
        body: [
          "Much environmental thinking has focused on reducing damage: using fewer resources, emitting less pollution, conserving what remains. This remains essential. Regeneration adds a further question: can human activity actively help living systems recover their health and capacity?",
          "A regenerative approach asks of any activity — farming, building, manufacturing, organising — whether it leaves the systems it touches more able or less able to sustain life.",
        ],
      },
      {
        heading: "Examples from land and water",
        kind: "evidence",
        body: [
          "In many parts of the world, including India, community efforts to harvest rainwater and restore watersheds have been documented as raising groundwater levels and supporting agriculture in drought-prone areas. Long-term research on agricultural soils has shown that practices such as adding organic matter, reducing soil disturbance and maintaining ground cover can improve soil structure and biological activity.",
          "These successes are real but context-dependent. Results vary with climate, soil type, how practices are carried out and how long they are sustained. Broad claims — for example, about how much carbon regenerative farming can store globally — remain debated among researchers.",
        ],
      },
      {
        heading: "Regeneration beyond ecology",
        kind: "interpretation",
        body: [
          "The idea of regeneration is also applied to communities and economies. A regenerative local economy might keep more value circulating locally, rebuild skills and strengthen relationships, rather than extracting wealth and people. A regenerative organisation might develop the capacities of the people in it rather than exhausting them.",
          "These applications are promising but less precisely defined than ecological regeneration. They are best treated as directions for inquiry and experiment.",
        ],
      },
      {
        heading: "Different views on the path forward",
        kind: "plural",
        body: [
          "People who share a concern for living systems still disagree about strategy. Some emphasise technological innovation and efficiency; others emphasise traditional and local knowledge, smaller-scale production and changes in consumption. Some see markets as tools for regeneration; others see market pressures as a core part of the problem.",
          "Rather than choosing a side in advance, it is worth examining specific cases: what was done, what changed, for whom, and over what time.",
        ],
      },
      {
        heading: "Reading regenerative claims critically",
        kind: "practice",
        body: [
          "Because \"regenerative\" has become a popular label, it is useful to ask a few questions of any claim.",
        ],
        points: [
          "What specifically is being regenerated — soil, water, biodiversity, livelihoods?",
          "How is change measured, and over what period?",
          "Who benefits, and who bears costs?",
          "Is there independent evidence, or only the claim of the seller?",
        ],
      },
    ],
    reflectionQuestions: [
      "What is one place you know that is less healthy than it once was? What would regeneration mean there?",
      "Which of your daily activities leave systems more capable, and which less?",
      "Is regeneration mainly a technical challenge, a cultural one, or both?",
    ],
    application: {
      title: "One regenerative experiment",
      steps: [
        "Choose one small system you influence: a balcony garden, a kitchen's waste, a team's way of working.",
        "Ask what would help it renew itself rather than depend on constant inputs.",
        "Try one change for a month — composting, a rest rhythm, a skill-sharing session.",
        "Record what happens, including what did not work.",
      ],
    },
    related: [
      "how-do-ecosystems-remain-dynamic",
      "what-is-coexistence",
      "what-makes-economic-activity-meaningful",
    ],
    references: [
      {
        title: "Small Is Beautiful: A Study of Economics as if People Mattered",
        author: "E. F. Schumacher",
        year: 1973,
        note: "An influential argument for human-scale economics and appropriate technology.",
      },
      {
        title: "Braiding Sweetgrass",
        author: "Robin Wall Kimmerer",
        year: 2013,
      },
    ],
  },
];
