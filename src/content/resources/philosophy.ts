import type { Resource } from "../schema";
import { initialEdition } from "./defaults";

export const philosophyResources: Resource[] = [
  {
    ...initialEdition,
    slug: "what-is-integral-thinking",
    title: "What Is Integral Thinking?",
    summary:
      "Integral thinking is the habit of seeing a question from many sides — inner and outer, individual and collective, short and long term — and looking for how the parts connect.",
    domain: "philosophy",
    alsoIn: ["learning", "society"],
    tags: ["integral thinking", "systems", "perspectives", "complexity", "inquiry"],
    format: "essay",
    level: "beginner",
    keyIdeas: [
      "Integral thinking holds several perspectives together instead of reducing a question to one.",
      "It pays attention to relationships between parts, not just the parts themselves.",
      "It is a disposition and a set of habits, not a single theory.",
    ],
    sections: [
      {
        heading: "The problem of partial views",
        body: [
          "Most real problems are tangled. A child struggling in school may be dealing with a learning difficulty, a family situation, an unsuited curriculum, poor sleep and a lack of confidence all at once. A water shortage may involve rainfall, farming practices, laws, prices and habits. Looking through only one lens — psychological, economic, technical or moral — tends to produce partial solutions that create new problems.",
          "Integral thinking is a name for the effort to see more of the whole.",
        ],
      },
      {
        heading: "A working description",
        kind: "interpretation",
        body: [
          "At IT Vidya we use \"integral thinking\" in a broad, practical sense. It involves a few related habits.",
        ],
        points: [
          "Inner and outer: considering both what is happening inside people (understanding, feelings, values) and outside them (behaviour, systems, physical conditions).",
          "Individual and collective: seeing how personal choices and shared structures shape each other.",
          "Parts and relationships: asking how elements interact, not only what each element is.",
          "Short and long term: weighing immediate effects alongside slower consequences.",
          "Many disciplines and traditions: drawing on science, philosophy, practical experience and cultural wisdom, while being clear about which is which.",
        ],
      },
      {
        heading: "Related traditions of thought",
        kind: "plural",
        body: [
          "Several thinkers have used the word \"integral\" or developed related ideas, each in a specific way. Sri Aurobindo described an integral yoga aimed at transforming all aspects of life, not only the spiritual. Jean Gebser wrote about an \"integral\" structure of consciousness. Ken Wilber developed an \"integral theory\" mapping perspectives into quadrants such as interior and exterior, individual and collective. Edgar Morin argued for \"complex thought\" that connects knowledge across disciplines. Systems thinkers such as Donella Meadows emphasised feedback and interconnection.",
          "These frameworks differ in their assumptions and scope, and each has critics. IT Vidya does not adopt any one of them as its official view. They are useful conversation partners for anyone trying to think more wholly.",
        ],
      },
      {
        heading: "What integral thinking is not",
        kind: "interpretation",
        body: [
          "Integral thinking is not the claim that everything is equally true, or that every perspective deserves equal weight on every question. Some claims are better supported than others. Nor is it the attempt to build a single theory of everything. It is closer to a discipline of humility: an awareness that our current view is likely incomplete, joined to a willingness to look further.",
        ],
      },
      {
        heading: "Trying it on a real question",
        kind: "practice",
        body: [
          "Take a question you care about — for example, \"Why are so many young people anxious about their future?\" Before answering, write down how it might look from at least four angles.",
        ],
        points: [
          "Inner experience: what are young people feeling and believing?",
          "Behaviour and body: what are they doing — sleep, screens, study, movement?",
          "Relationships and culture: what do families, peers and media communicate?",
          "Systems: what do education, labour markets and economic conditions make possible or difficult?",
          "Then ask: how do these angles affect one another?",
        ],
      },
    ],
    reflectionQuestions: [
      "Which lens do you naturally use first when you look at a problem — emotional, practical, moral, economic?",
      "Recall a problem that was solved in one area but created a new problem elsewhere. What was missed?",
      "What is the difference between holding many perspectives and having no view at all?",
    ],
    application: {
      title: "The four-angle sheet",
      steps: [
        "Divide a sheet of paper into four quarters: Inner (individual), Outer (individual), Inner (collective), Outer (collective).",
        "Choose one issue in your life or community.",
        "Fill each quarter with what you notice from that angle.",
        "Draw arrows between items that influence each other, and look for a point where a small change might help several areas at once.",
      ],
    },
    related: [
      "how-do-we-know-what-we-know",
      "what-is-coexistence",
      "facts-opinions-assumptions-and-interpretations",
    ],
    references: [
      {
        title: "On Complexity",
        author: "Edgar Morin",
        year: 2008,
        note: "English translation of essays on complex thought.",
      },
      {
        title: "A Theory of Everything",
        author: "Ken Wilber",
        year: 2000,
        note: "An introduction to integral theory; read alongside its critics.",
      },
      {
        title: "Thinking in Systems: A Primer",
        author: "Donella H. Meadows",
        year: 2008,
      },
    ],
  },
  {
    ...initialEdition,
    slug: "how-do-traditions-understand-a-good-life",
    title: "How Do Different Traditions Understand a Good Life?",
    summary:
      "From eudaimonia to the puruṣārthas, from ubuntu to the capabilities approach, humanity has many rich answers to the question of what makes a life go well. Comparing them sharpens our own.",
    domain: "philosophy",
    alsoIn: ["self", "society"],
    tags: ["flourishing", "ethics", "world philosophies", "Indian knowledge traditions", "well-being"],
    format: "primer",
    level: "intermediate",
    keyIdeas: [
      "Traditions differ on whether a good life is mainly about pleasure, virtue, duty, liberation, relationship or capability.",
      "Many share common threads: right understanding, good relationships and contribution beyond oneself.",
      "Comparing traditions respectfully helps reveal the assumptions of our own.",
    ],
    sections: [
      {
        heading: "A question every culture asks",
        body: [
          "Every human community has had to answer, in practice if not in theory, the question of what a good life is. These answers shape what children are taught, what work is respected and what societies aim for. Comparing several of them helps us see that our own assumptions are one option among many — and helps us choose more deliberately.",
          "The summaries below are necessarily brief. Each tradition is internally diverse, and specialists debate how best to interpret them.",
        ],
      },
      {
        heading: "Several traditions in brief",
        kind: "plural",
        body: [
          "Read these as doorways rather than complete descriptions.",
        ],
        points: [
          "Aristotle (Greece): eudaimonia, often translated as flourishing, consists in activity in accordance with virtue over a complete life, including friendship and participation in community.",
          "Indian puruṣārthas: many Hindu traditions describe four aims of human life — dharma (right conduct and duty), artha (material well-being), kāma (pleasure and desire) and mokṣa (liberation). Schools differ on how these relate and which is highest.",
          "Buddhist traditions: suffering is understood to arise from craving and ignorance; a good life follows a path of ethical conduct, meditative discipline and wisdom toward its cessation.",
          "Confucian thought (China): flourishing is cultivated through ren (humaneness), ritual propriety and harmonious relationships in family and society.",
          "Ubuntu (Southern Africa): often summarised as \"a person is a person through other persons,\" emphasising that personhood and well-being are realised in community.",
          "The capabilities approach (Amartya Sen, Martha Nussbaum): a good society expands what people are actually able to do and be, such as being healthy, educated and able to participate in social life.",
        ],
      },
      {
        heading: "Points of convergence",
        kind: "interpretation",
        body: [
          "Despite real differences, several themes recur. Many traditions hold that a good life is not reducible to pleasure or possessions; that it involves right understanding or wisdom; that relationships and community are central; and that a person's well-being is bound up with contributing to others. Many also hold that the good life must be cultivated through practice, not merely known.",
          "Noticing these convergences should not erase real disagreements — for example, about whether the highest aim lies within this world or beyond it.",
        ],
      },
      {
        heading: "A note on comparison",
        kind: "perspective",
        body: [
          "Comparing traditions carries risks. It is easy to flatten them into slogans, to read them through the categories of one's own culture, or to rank them. A respectful approach tries to understand each on its own terms, notices internal diversity, and stays open to being questioned by what it studies.",
        ],
      },
    ],
    reflectionQuestions: [
      "Which of these accounts feels most familiar to you? Which feels most foreign?",
      "What did your family or culture teach you, explicitly or implicitly, about a good life?",
      "Is there one element that you believe any good life must include?",
      "How might your daily priorities change if you took a different account seriously for a week?",
    ],
    application: {
      title: "Write your own working definition",
      steps: [
        "Write a short paragraph: \"For me, a good life involves…\"",
        "Underline the parts that come from family, culture, religion, reading or your own experience.",
        "Pick one tradition above that differs from your view and write how it would respond to your paragraph.",
        "Revise your definition if anything has shifted — and date it, so you can revisit it in a year.",
      ],
    },
    related: [
      "needs-desires-and-happiness",
      "what-is-integral-thinking",
      "what-do-we-mean-by-justice",
    ],
    references: [
      {
        title: "Nicomachean Ethics",
        author: "Aristotle",
      },
      {
        title: "Creating Capabilities: The Human Development Approach",
        author: "Martha C. Nussbaum",
        year: 2011,
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
    slug: "how-do-we-know-what-we-know",
    title: "How Do We Know What We Know?",
    summary:
      "Indian philosophers developed a detailed theory of the valid means of knowledge — perception, inference, testimony and more. It remains a powerful tool for examining our own beliefs.",
    domain: "philosophy",
    alsoIn: ["learning"],
    tags: ["epistemology", "pramāṇa", "Indian knowledge traditions", "critical thinking", "inquiry"],
    format: "primer",
    level: "intermediate",
    keyIdeas: [
      "Indian philosophical schools debated which means of knowledge (pramāṇas) are valid.",
      "Perception, inference and reliable testimony are the most widely accepted.",
      "Asking \"how do I know this?\" is a practical habit as well as a philosophical question.",
    ],
    sections: [
      {
        heading: "The question behind every belief",
        body: [
          "We each hold thousands of beliefs: that the earth orbits the sun, that a friend is trustworthy, that a medicine is safe, that we are not good at mathematics. Few of these have been examined. Epistemology — the study of knowledge — asks what justifies a belief and how we can tell knowledge from mere opinion.",
          "Indian philosophy developed one of the world's richest traditions on this question, centred on the idea of pramāṇa: a valid means or source of knowledge.",
        ],
      },
      {
        heading: "The pramāṇas",
        kind: "perspective",
        body: [
          "Different darśanas (schools of philosophy) accepted different lists of pramāṇas. A simplified overview:",
        ],
        points: [
          "Pratyakṣa (perception): direct knowledge through the senses. Accepted by virtually all schools, including the Cārvāka materialists, who accepted only perception.",
          "Anumāna (inference): reasoning from what is perceived to what is not — the classic example being inferring fire from smoke. Accepted by most schools, including Buddhist logicians.",
          "Śabda (testimony): knowledge from reliable words, whether of a trustworthy person or, for some schools, of scripture. Nyāya accepted it; Buddhist epistemologists such as Dignāga and Dharmakīrti did not treat it as a separate source.",
          "Upamāna (comparison): learning what something is through similarity to something known. Accepted by Nyāya and Mīmāṃsā.",
          "Arthāpatti (postulation) and anupalabdhi (non-perception): accepted by some Mīmāṃsā and Vedānta thinkers.",
        ],
      },
      {
        heading: "Why this is still useful",
        kind: "interpretation",
        body: [
          "These categories map surprisingly well onto modern questions. Much of what we \"know\" comes from testimony — teachers, books, news, social media — which makes the reliability of sources a central issue today. Inference can be strong or weak, and Indian logicians developed careful tests for when an inference is valid, including attention to counter-examples.",
          "Asking \"which pramāṇa supports this belief?\" is a quick way to see whether a belief rests on direct experience, reasoning, someone else's word or simply habit.",
        ],
      },
      {
        heading: "Other traditions on knowledge",
        kind: "plural",
        body: [
          "Western epistemology has long debated similar questions: empiricists emphasised experience, rationalists emphasised reason, and later philosophers examined testimony and the social dimension of knowledge. Modern science adds systematic methods — controlled observation, replication, peer review — for reducing error.",
          "Contemplative traditions add a further claim: that some forms of knowing, such as direct insight into one's own mind, are developed through practice rather than argument. Whether such insight counts as knowledge, and how it could be checked, is itself an important philosophical question.",
        ],
      },
      {
        heading: "A practice of epistemic honesty",
        kind: "practice",
        body: [
          "The aim is not to doubt everything, which is impossible, but to hold beliefs with confidence proportional to their support — and to remain open to correction.",
        ],
      },
    ],
    reflectionQuestions: [
      "Pick a belief you hold strongly. Is it based mainly on perception, inference or testimony?",
      "Whose testimony do you trust most, and why?",
      "Have you ever been certain of something that turned out to be false? What misled you?",
    ],
    application: {
      title: "A belief audit",
      steps: [
        "Write down five beliefs you hold — about yourself, others, health, society or the world.",
        "For each, note its main source: perception, inference, testimony, or habit and assumption.",
        "Rate your confidence from 1 to 5, and ask whether the support justifies that confidence.",
        "Choose one belief to investigate further this month.",
      ],
    },
    related: [
      "facts-opinions-assumptions-and-interpretations",
      "what-is-integral-thinking",
      "what-does-it-mean-to-understand-yourself",
    ],
    references: [
      {
        title: "Indian Philosophy: A Very Short Introduction",
        author: "Sue Hamilton",
        year: 2001,
        note: "A concise overview of the major schools of Indian thought.",
      },
      {
        title: "Classical Indian Philosophy",
        author: "J. N. Mohanty",
        year: 2000,
      },
    ],
  },
];
