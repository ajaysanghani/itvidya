import type { Resource } from "../schema";
import { initialEdition } from "./defaults";

export const learningResources: Resource[] = [
  {
    ...initialEdition,
    slug: "facts-opinions-assumptions-and-interpretations",
    title: "Facts, Opinions, Assumptions and Interpretations",
    summary:
      "Clear thinking begins with noticing what kind of statement you are dealing with. A simple four-way distinction can make reading, listening and arguing far more honest.",
    domain: "learning",
    alsoIn: ["philosophy", "society"],
    tags: ["critical thinking", "media literacy", "reasoning", "assumptions"],
    format: "guide",
    level: "beginner",
    keyIdeas: [
      "Facts can be checked; opinions express judgments or preferences.",
      "Assumptions are beliefs taken for granted; interpretations are explanations of what facts mean.",
      "Most disagreements are about interpretations and assumptions, not facts.",
    ],
    sections: [
      {
        heading: "Four kinds of statements",
        body: [
          "Much confusion in conversations, news and even our own thinking comes from treating different kinds of statements as if they were the same. A simple set of distinctions helps.",
        ],
        points: [
          "Fact: a claim that can, in principle, be checked against evidence. \"The meeting started at 10:20.\"",
          "Interpretation: an explanation of what facts mean. \"The meeting started late because people don't take it seriously.\"",
          "Assumption: something taken for granted, often unstated. \"Punctuality reflects how seriously people take something.\"",
          "Opinion: a judgment or preference. \"Our meetings are a waste of time.\"",
        ],
      },
      {
        heading: "Facts are not always certain — and that is fine",
        kind: "interpretation",
        body: [
          "Calling something a fact does not mean it is certainly true; it means it is the kind of claim that evidence can settle. Factual claims can be well supported, poorly supported or false. Scientific findings are factual claims that are continually tested, and some are revised.",
          "Opinions, by contrast, are not settled by evidence alone, though good opinions take evidence into account. \"This policy reduced unemployment\" is a factual claim; \"This policy was worth its cost\" also involves values.",
        ],
      },
      {
        heading: "Why assumptions matter most",
        kind: "interpretation",
        body: [
          "Assumptions are powerful because they are invisible. Two people can agree on every fact and still reach opposite conclusions because they hold different assumptions. Bringing assumptions into the open often turns an argument into a conversation.",
          "Useful questions include: What would have to be true for this conclusion to follow? What is being taken for granted here? Would someone from a different background take the same thing for granted?",
        ],
      },
      {
        heading: "What research says about misinformation",
        kind: "evidence",
        body: [
          "Research on misinformation suggests that people are more likely to accept claims that fit their existing beliefs and to scrutinise claims that challenge them. Studies of \"lateral reading\" — checking what other sources say about a source rather than staying on one page — found that professional fact-checkers used this strategy more than many other skilled readers and evaluated sources more accurately.",
          "These findings support a practical habit: before trusting a claim, step outside it and ask who is making it and what others say.",
        ],
      },
      {
        heading: "Practise on everyday material",
        kind: "practice",
        body: [
          "Take any news article, social media post or advertisement. Underline facts in one colour, interpretations in another, opinions in a third, and write unstated assumptions in the margin. The exercise is often revealing — many texts that feel factual contain mostly interpretation.",
        ],
      },
    ],
    reflectionQuestions: [
      "Think of a recent disagreement. Was it about facts, interpretations, assumptions or values?",
      "Which of your opinions are most closely tied to unstated assumptions?",
      "When did you last change your mind because of a fact? Because of a new interpretation?",
    ],
    application: {
      title: "The four-colour reading",
      steps: [
        "Choose one article or post you have recently shared or found persuasive.",
        "Mark facts, interpretations and opinions in different colours.",
        "List the assumptions underneath its main conclusion.",
        "Check one key factual claim using at least two independent sources.",
      ],
    },
    related: [
      "how-do-we-know-what-we-know",
      "observation-without-immediate-judgment",
      "learning-how-to-learn",
    ],
    references: [
      {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        year: 2011,
      },
    ],
  },
  {
    ...initialEdition,
    slug: "how-do-we-learn-from-experience",
    title: "How Do We Learn From Experience?",
    summary:
      "Experience alone does not guarantee learning. What turns experience into understanding is reflection — looking back, making sense and trying again differently.",
    domain: "learning",
    alsoIn: ["self", "work"],
    tags: ["experiential learning", "reflection", "education", "practice"],
    format: "essay",
    level: "beginner",
    keyIdeas: [
      "We do not learn automatically from experience; we learn from reflecting on it.",
      "Experiential learning models describe a cycle of doing, reflecting, understanding and trying again.",
      "Simple reflection habits can make everyday life a source of continuous learning.",
    ],
    sections: [
      {
        heading: "Twenty years of experience, or one year twenty times?",
        body: [
          "Two people can have the same experiences and learn very different things from them — or nothing at all. A teacher might teach for twenty years and steadily improve, or repeat the same first year twenty times. The difference usually lies not in the experience itself, but in what the person does with it.",
        ],
      },
      {
        heading: "Dewey and the role of reflection",
        kind: "perspective",
        body: [
          "The American philosopher John Dewey argued that education should be grounded in experience, but that not all experiences are educative. In his view, learning happens when we reflect on experience — connecting what we did with what followed — so that future experience is richer.",
          "Paulo Freire, writing from Brazil, emphasised a related idea: learners should not be treated as empty containers to be filled, but as active participants who reflect on and act upon their world.",
        ],
      },
      {
        heading: "The experiential learning cycle",
        kind: "interpretation",
        body: [
          "David Kolb's widely used model describes learning as a cycle: concrete experience, reflective observation, abstract conceptualisation (making sense) and active experimentation (trying something new). Many similar models exist.",
          "Kolb's associated \"learning styles\" inventory has been criticised, and research has generally not supported the idea that matching teaching to individual learning styles improves outcomes. The broader cycle of experience and reflection, however, remains a useful guide.",
        ],
      },
      {
        heading: "What helps reflection work",
        kind: "evidence",
        body: [
          "Studies in workplace and educational settings suggest that structured reflection — such as writing about what one learned after completing a task — can improve subsequent performance compared with simply doing more of the task. Feedback that is specific and timely also helps people learn from experience, especially in fields where results are delayed or unclear.",
          "This evidence is promising but comes from particular settings; the size of the benefit varies.",
        ],
      },
      {
        heading: "A simple reflection routine",
        kind: "practice",
        body: [
          "Reflection does not need to be elaborate. Three questions, asked regularly, go a long way.",
        ],
        points: [
          "What happened? (Describe it plainly.)",
          "What did I learn — about the task, others or myself?",
          "What will I try differently next time?",
        ],
      },
    ],
    reflectionQuestions: [
      "What is the most important thing life has taught you that no school did? How did you learn it?",
      "Is there an experience you keep repeating without learning from it?",
      "Who helps you reflect — a friend, a mentor, a journal?",
    ],
    application: {
      title: "A two-week reflection log",
      steps: [
        "At the end of each day, write three short answers: What happened? What did I learn? What will I try next?",
        "Keep each entry to five minutes.",
        "After two weeks, read the whole log and circle any lesson that appears more than once.",
        "Choose one recurring lesson and make a concrete plan to act on it.",
      ],
    },
    related: [
      "learning-how-to-learn",
      "what-does-it-mean-to-understand-yourself",
      "work-as-livelihood-craft-and-contribution",
    ],
    references: [
      {
        title: "Experience and Education",
        author: "John Dewey",
        year: 1938,
      },
      {
        title: "Pedagogy of the Oppressed",
        author: "Paulo Freire",
        year: 1968,
        note: "First written in Portuguese; English translation published in 1970.",
      },
      {
        title: "Experiential Learning: Experience as the Source of Learning and Development",
        author: "David A. Kolb",
        year: 1984,
      },
    ],
  },
  {
    ...initialEdition,
    slug: "learning-how-to-learn",
    title: "Learning How to Learn: What the Evidence Suggests",
    summary:
      "Some of the most popular study habits are among the least effective. Research on memory and learning points to a few simple strategies that work far better.",
    domain: "learning",
    tags: ["learning how to learn", "memory", "study skills", "education", "evidence"],
    format: "guide",
    level: "beginner",
    keyIdeas: [
      "Rereading and highlighting feel productive but tend to produce weak long-term learning.",
      "Retrieval practice and spacing are among the best-supported learning strategies.",
      "Effective learning often feels harder in the moment — that difficulty can be a good sign.",
    ],
    sections: [
      {
        heading: "Why good study can feel bad",
        body: [
          "Many learners reread notes, highlight textbooks and cram before exams. These habits feel efficient because the material becomes familiar. But familiarity is not the same as being able to recall and use knowledge later.",
          "Researchers sometimes speak of \"desirable difficulties\": learning conditions that feel harder in the moment but lead to stronger, longer-lasting learning.",
        ],
      },
      {
        heading: "Strategies with strong support",
        kind: "evidence",
        body: [
          "A substantial body of research in cognitive psychology supports a small number of strategies. A well-known 2013 review by John Dunlosky and colleagues rated practice testing and distributed practice as having high utility across many learners and materials.",
        ],
        points: [
          "Retrieval practice: actively recalling information — through self-testing, flashcards or explaining from memory — strengthens memory more than rereading.",
          "Spaced practice: spreading study over several sessions with gaps leads to better long-term retention than massing it into one session.",
          "Interleaving: mixing different types of problems, rather than practising one type at a time, can improve the ability to choose the right approach. Evidence is strong in areas such as mathematics, though less consistent elsewhere.",
          "Elaboration and explanation: asking why and how, and connecting new ideas to what you already know, supports understanding.",
        ],
      },
      {
        heading: "Myths worth letting go",
        kind: "evidence",
        body: [
          "The idea that people learn best when teaching matches their preferred \"learning style\" (visual, auditory, kinaesthetic) is widely believed. Reviews of the research, such as one by Harold Pashler and colleagues in 2008, found little evidence that matching instruction to learning styles improves outcomes. People do have preferences, but good teaching generally uses whatever mode suits the content.",
          "Similarly, the belief that we use only ten per cent of our brains is not supported by neuroscience.",
        ],
      },
      {
        heading: "Beliefs about ability",
        kind: "plural",
        body: [
          "Carol Dweck's research on \"growth mindset\" — the belief that abilities can be developed — became very popular. Later large-scale studies and reviews have found that mindset interventions can have positive effects for some students in some contexts, but that average effects are smaller than early enthusiasm suggested. Researchers continue to debate when and for whom they help.",
          "A modest, defensible conclusion: believing that effort and good strategies matter is reasonable and useful, but it is not a substitute for good teaching, support and fair conditions.",
        ],
      },
      {
        heading: "Learning as a whole-life practice",
        kind: "interpretation",
        body: [
          "Techniques matter, but so do sleep, curiosity, purpose and relationships. Learners who see why something matters, who feel safe to make mistakes, and who rest well are better placed to use any strategy. Learning how to learn is ultimately about understanding yourself as a learner.",
        ],
      },
    ],
    reflectionQuestions: [
      "Which study habits do you rely on most? Which are supported by evidence?",
      "When did you last test yourself on something rather than reread it?",
      "What do you believe about your ability to learn difficult things? Where did that belief come from?",
    ],
    application: {
      title: "Redesign one learning week",
      steps: [
        "Choose something you are learning now — a language, a subject, a skill.",
        "Replace one rereading session with a self-test: write or say everything you can recall, then check.",
        "Schedule two short review sessions over the following week instead of one long one.",
        "Notice the difference after a week. Keep what works.",
      ],
    },
    related: [
      "how-do-we-learn-from-experience",
      "facts-opinions-assumptions-and-interpretations",
      "how-do-we-know-what-we-know",
    ],
    references: [
      {
        title: "Make It Stick: The Science of Successful Learning",
        author: "Peter C. Brown, Henry L. Roediger III and Mark A. McDaniel",
        year: 2014,
        note: "An accessible guide to research-based learning strategies.",
      },
      {
        title: "Improving Students' Learning With Effective Learning Techniques",
        author: "John Dunlosky, Katherine A. Rawson, Elizabeth J. Marsh, Mitchell J. Nathan and Daniel T. Willingham",
        year: 2013,
        note: "Published in Psychological Science in the Public Interest.",
      },
      {
        title: "Learning Styles: Concepts and Evidence",
        author: "Harold Pashler, Mark McDaniel, Doug Rohrer and Robert Bjork",
        year: 2008,
        note: "Published in Psychological Science in the Public Interest.",
      },
    ],
  },
];
