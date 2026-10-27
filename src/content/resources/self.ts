import type { Resource } from "../schema";
import { initialEdition, mentalHealthCare } from "./defaults";

export const selfResources: Resource[] = [
  {
    ...initialEdition,
    slug: "what-does-it-mean-to-understand-yourself",
    title: "What Does It Mean to Understand Yourself?",
    summary:
      "Self-understanding is less about discovering a fixed identity and more about seeing clearly how you think, feel, want and act — moment by moment.",
    domain: "self",
    alsoIn: ["philosophy"],
    tags: ["self-understanding", "attention", "reflection", "desire"],
    format: "essay",
    level: "beginner",
    careNote: mentalHealthCare,
    keyIdeas: [
      "Self-understanding is an ongoing activity, not a one-time discovery.",
      "It includes noticing thoughts, feelings, desires and the assumptions beneath them.",
      "Clarity about what we want tends to make our choices steadier and less reactive.",
    ],
    sections: [
      {
        heading: "An old question with practical stakes",
        body: [
          "\"Know thyself\" was inscribed at the temple of Apollo at Delphi. The Upanishads return again and again to the question of who or what the self is. Many contemplative, philosophical and psychological traditions treat self-knowledge as a foundation for living well.",
          "But the question is not only for philosophers. Each day we act on beliefs about ourselves: what we are good at, what we deserve, what will make us happy, what we cannot bear. When those beliefs are unclear or mistaken, we can work hard toward things that do not satisfy us, or react to others in ways we later regret.",
        ],
      },
      {
        heading: "Understanding as an activity, not a label",
        kind: "interpretation",
        body: [
          "It is tempting to think of self-understanding as finding the right description — an introvert, a creative person, someone who hates conflict. Labels can be useful shorthand, but they can also harden into stories that stop us from looking.",
          "A more practical approach treats self-understanding as something we do. It is the habit of noticing what is happening within us as it happens: the thought that arises, the feeling that follows, the desire behind the feeling, and the action we are about to take.",
        ],
        points: [
          "Thoughts: what am I telling myself about this situation?",
          "Feelings: what am I experiencing in my body and mood?",
          "Desires: what do I want here, underneath the surface?",
          "Assumptions: what am I taking for granted about myself or others?",
        ],
      },
      {
        heading: "What research suggests about self-knowledge",
        kind: "evidence",
        body: [
          "Psychological research has repeatedly found that people are often less accurate about their own motives, traits and future feelings than they assume. For example, studies of \"affective forecasting\" suggest that people tend to overestimate how long and how intensely future events will affect their happiness.",
          "This does not mean self-knowledge is impossible. It suggests that introspection alone has limits, and that observing our actual behaviour, inviting honest feedback from others, and checking our predictions against what really happens can all improve accuracy.",
        ],
      },
      {
        heading: "Different traditions, different emphases",
        kind: "plural",
        body: [
          "Traditions differ on what the self ultimately is. Some Indian schools, such as Advaita Vedānta, hold that the deepest self is identical with the ground of all existence. Buddhist traditions question whether there is any enduring self at all. Many modern psychological approaches treat the self as a changing pattern of memories, roles and relationships. Other perspectives distinguish the self (the one who experiences and understands) from the body (which it uses).",
          "IT Vidya does not ask you to choose among these. You can practise attentive self-observation within any of them — and doing so may help you test which descriptions match your experience.",
        ],
      },
      {
        heading: "Signs that understanding is deepening",
        kind: "interpretation",
        body: [
          "Self-understanding rarely arrives as a single insight. It is more often recognised by small changes over time.",
        ],
        points: [
          "You notice a familiar reaction a moment before acting on it.",
          "You can name what you want without immediately justifying or condemning it.",
          "You become curious, rather than defensive, when your actions do not match your intentions.",
          "You blame others — and yourself — a little less, and understand a little more.",
        ],
      },
    ],
    reflectionQuestions: [
      "What is one thing you believe about yourself that you have never really tested?",
      "When did you last act in a way that surprised you? What might that tell you?",
      "Which feels more true to you: that you have a fixed nature, or that you are always becoming?",
      "Who in your life sees you clearly, and what might they notice that you do not?",
    ],
    application: {
      title: "A three-day noticing practice",
      steps: [
        "Three times a day — morning, afternoon, evening — pause for one minute.",
        "Ask: What am I thinking? What am I feeling? What do I want right now?",
        "Write one short line for each. Do not analyse yet.",
        "After three days, read everything and note one pattern you had not seen before.",
      ],
    },
    related: [
      "observation-without-immediate-judgment",
      "needs-desires-and-happiness",
      "how-do-we-know-what-we-know",
    ],
    references: [
      {
        title: "Strangers to Ourselves: Discovering the Adaptive Unconscious",
        author: "Timothy D. Wilson",
        year: 2002,
        note: "An accessible account of research on the limits of introspection.",
      },
      {
        title: "Freedom from the Known",
        author: "J. Krishnamurti",
        year: 1969,
        note: "A philosophical perspective on self-observation without preconceived ideas.",
      },
    ],
  },
  {
    ...initialEdition,
    slug: "observation-without-immediate-judgment",
    title: "Observation Without Immediate Judgment",
    summary:
      "Learning to see what is actually happening before deciding whether it is good or bad is a simple practice with far-reaching effects on understanding, relationships and learning.",
    domain: "self",
    alsoIn: ["relationships", "learning"],
    tags: ["attention", "observation", "judgment", "practice", "emotions"],
    format: "practice",
    level: "beginner",
    careNote: mentalHealthCare,
    keyIdeas: [
      "Judgment often arrives so quickly that we mistake it for observation.",
      "Separating what we see from what we conclude creates room for understanding.",
      "Suspending judgment is temporary and deliberate — it is not the same as having no values.",
    ],
    sections: [
      {
        heading: "How quickly we judge",
        body: [
          "Someone does not reply to a message. Within seconds, many of us have concluded something: they are annoyed, careless, busy, rude. A colleague speaks sharply in a meeting, and we have already decided what kind of person they are.",
          "These quick conclusions are not always wrong, and the mind makes them for good reasons — it is efficient to interpret quickly. The difficulty is that we often experience the conclusion as if it were the observation itself. We do not notice that we have added anything.",
        ],
      },
      {
        heading: "Observation and evaluation are different",
        kind: "interpretation",
        body: [
          "A useful distinction, emphasised in approaches such as Marshall Rosenberg's Nonviolent Communication, is between observing and evaluating. \"You were twenty minutes late\" is an observation. \"You are always careless\" is an evaluation mixed with a generalisation.",
          "When we speak in evaluations, others tend to hear criticism and defend themselves. When we start from observations, conversations are more likely to stay open. The same is true inside our own minds: noticing \"I am feeling tense and telling myself I will fail\" is different from simply believing \"I will fail.\"",
        ],
      },
      {
        heading: "What the evidence suggests",
        kind: "evidence",
        body: [
          "Psychological research on attribution has documented a common tendency to explain other people's behaviour by their character while explaining our own by circumstances. Research on cognitive biases more broadly suggests that first impressions and early interpretations can shape how we take in later information.",
          "Programmes that train non-judgmental attention, often grouped under the label of mindfulness, have been widely studied. Findings are encouraging for some outcomes, such as stress, but study quality varies and effects should not be overstated. Treat claims about dramatic benefits with care.",
        ],
      },
      {
        heading: "Suspending judgment is not abandoning values",
        kind: "perspective",
        body: [
          "Some worry that withholding judgment means accepting everything. It does not. Observation without immediate judgment is a sequence: first see clearly, then evaluate wisely. A doctor examines before diagnosing; a good judge hears the evidence before ruling.",
          "Several contemplative traditions go further, suggesting that the very habit of constant evaluation keeps us from seeing reality — including ourselves — as it is. Whether or not you share that view, the practical value of a pause between seeing and concluding is easy to test for yourself.",
        ],
      },
      {
        heading: "A practice you can try today",
        kind: "practice",
        body: [
          "Choose one ordinary situation — a conversation, a commute, a meal. For a few minutes, describe to yourself only what a camera or microphone could record. When you catch yourself adding a conclusion, notice it gently and return to describing.",
        ],
        points: [
          "Observation: \"She looked at her phone while I was speaking.\"",
          "Interpretation you might notice: \"She doesn't care what I think.\"",
          "Alternative possibilities: she is expecting an urgent call; she is anxious; she is distracted by something unrelated.",
          "Next step: ask, rather than assume.",
        ],
      },
    ],
    reflectionQuestions: [
      "Recall a recent judgment you made about someone. What exactly did you observe, and what did you add?",
      "In which situations do you find it hardest to pause before judging?",
      "How do you feel when others judge you before understanding your situation?",
    ],
    application: {
      title: "The observation journal",
      steps: [
        "For one week, choose one interaction each day that left you with a strong reaction.",
        "Divide a page into two columns: \"What happened\" (only observable facts) and \"What I concluded.\"",
        "Add a third column: \"Other possible explanations.\" Write at least two.",
        "At the end of the week, notice whether your reactions have changed at all.",
      ],
    },
    related: [
      "what-does-it-mean-to-understand-yourself",
      "listening-as-a-learning-practice",
      "facts-opinions-assumptions-and-interpretations",
    ],
    references: [
      {
        title: "Nonviolent Communication: A Language of Life",
        author: "Marshall B. Rosenberg",
        year: 2003,
        note: "Introduces the distinction between observation and evaluation in everyday communication.",
      },
      {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        year: 2011,
        note: "A broad overview of research on quick and deliberate thinking, including common biases.",
      },
    ],
  },
  {
    ...initialEdition,
    slug: "needs-desires-and-happiness",
    title: "Needs, Desires and Happiness",
    summary:
      "Not everything we want is something we need, and not everything that gives pleasure gives lasting happiness. Understanding the difference can change how we spend our time, money and attention.",
    domain: "self",
    alsoIn: ["work", "philosophy"],
    tags: ["happiness", "well-being", "desire", "sufficiency", "needs"],
    format: "essay",
    level: "beginner",
    careNote: mentalHealthCare,
    keyIdeas: [
      "Needs, desires and preferences are different, though they often feel the same in the moment.",
      "Many traditions and some research suggest that happiness depends heavily on relationships, meaning and inner state, not only on possessions.",
      "Physical needs are limited in quantity; many of our deepest wants are not physical at all.",
    ],
    sections: [
      {
        heading: "Why the distinction matters",
        body: [
          "We often say \"I need\" when we mean \"I want\" or \"I would like.\" The language is harmless, but the confusion beneath it can be costly. If we believe that every desire is a need, we may chase satisfactions that never arrive, or feel deprived when we are, in fact, well provided for.",
          "Clarifying what we need — and what kind of need it is — is one of the most practical forms of self-understanding.",
        ],
      },
      {
        heading: "Two kinds of needs",
        kind: "perspective",
        body: [
          "One useful framework, found in several educational approaches including the Universal Human Values curriculum used in some Indian universities, distinguishes needs of the body from needs of the self. The body needs food, shelter, rest, health. These needs are real, and they are limited in quantity: there is a point at which we have enough food or enough clothing.",
          "Needs of the self — for respect, trust, understanding, happiness, a sense of continuity — are of a different kind. They are not satisfied by physical things as such, but by right understanding and fulfilling relationships. On this view, much discontent comes from trying to meet needs of the self through accumulating physical things.",
          "Other frameworks draw the lines differently. Abraham Maslow's widely known hierarchy describes physiological, safety, belonging, esteem and self-actualisation needs; later researchers have questioned whether these really occur in a fixed order. Self-determination theory in psychology emphasises autonomy, competence and relatedness. These frameworks disagree on details but share an important insight: human well-being involves much more than material comfort.",
        ],
      },
      {
        heading: "What research on well-being suggests",
        kind: "evidence",
        body: [
          "Well-being research has found that income and life satisfaction are positively associated, particularly when moving out of poverty. Researchers continue to debate whether and where the relationship levels off, and how it differs between measures of day-to-day mood and overall life evaluation.",
          "Studies have also consistently linked close relationships to well-being. Long-running studies, such as the Harvard Study of Adult Development, have reported that the quality of relationships is strongly associated with health and happiness in later life. Such studies show associations; they do not prove that one factor alone causes another.",
        ],
      },
      {
        heading: "Pleasure, happiness and fulfilment",
        kind: "plural",
        body: [
          "Philosophers have distinguished between pleasure (a pleasant sensation), happiness (a broader sense of things going well) and flourishing or fulfilment (living in accord with what is best in us). Aristotle's idea of eudaimonia, the Indian ideas of sukha and ānanda, and contemporary positive psychology each draw these lines in their own ways.",
          "A recurring theme across traditions is that pleasures depending on sensation tend to fade with repetition, while happiness rooted in understanding, relationship and meaningful activity tends to be more stable. You can test this against your own experience.",
        ],
      },
      {
        heading: "Sufficiency as a skill",
        kind: "interpretation",
        body: [
          "If physical needs have a limit, then recognising \"enough\" becomes a skill worth developing. Sufficiency is not deprivation. It is the clarity that lets us stop accumulating where it no longer serves us, and redirect time and energy toward what does.",
          "This has implications beyond the individual. Households, organisations and societies that can recognise sufficiency may place less pressure on natural resources and have more room for relationships and contribution.",
        ],
      },
    ],
    reflectionQuestions: [
      "Think of something you wanted strongly that you later obtained. How long did the satisfaction last?",
      "Which of your current goals are aimed at needs of the body, and which at needs for respect, trust or meaning?",
      "What would \"enough\" look like for you in one area of life?",
      "When do you feel most at ease, and what is present in those moments?",
    ],
    application: {
      title: "The needs-and-wants sort",
      steps: [
        "List ten things you have recently wanted or spent money or time on.",
        "Mark each as a physical need, a desire for comfort or pleasure, or a deeper need such as respect, belonging or understanding.",
        "For each deeper need, ask whether the thing you pursued actually meets it.",
        "Choose one deeper need and think of a way to meet it more directly — for example, through a conversation rather than a purchase.",
      ],
    },
    related: [
      "what-does-it-mean-to-understand-yourself",
      "what-makes-economic-activity-meaningful",
      "how-do-traditions-understand-a-good-life",
    ],
    references: [
      {
        title: "A Foundation Course in Human Values and Professional Ethics",
        author: "R. R. Gaur, R. Sangal and G. P. Bagaria",
        note: "Presents the distinction between needs of the self and needs of the body used in the Universal Human Values approach.",
      },
      {
        title: "Nicomachean Ethics",
        author: "Aristotle",
        note: "A classical account of eudaimonia, or human flourishing. Many translations are available.",
      },
    ],
  },
];
