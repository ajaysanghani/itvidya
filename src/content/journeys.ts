import type { Journey } from "./schema";

const exploratoryNote =
  "This is an exploratory educational journey, not a clinical, therapeutic or certified programme. It does not promise any particular outcome. Move at your own pace, skip what does not serve you, and seek qualified support if difficult feelings arise.";

export const journeys: Journey[] = [
  {
    slug: "understanding-myself-and-my-relationships",
    title: "Understanding Myself & My Relationships",
    subtitle: "From noticing your own reactions to building trust and repairing connection.",
    objective:
      "To develop practical self-understanding — of thoughts, feelings, needs and intentions — and to apply it in listening, trust-building and repair within close relationships.",
    outcomes: [
      "Notice the difference between what happens and what you conclude about it.",
      "Distinguish physical needs, desires and deeper needs for respect and understanding.",
      "Listen in a way that helps others feel understood.",
      "Respond to disappointment by considering intention as well as action.",
      "Prepare for and hold a conversation that repairs a strained relationship.",
    ],
    audience: [
      "Students and young adults navigating friendships and family",
      "Parents and partners wanting calmer, more understanding relationships",
      "Anyone beginning a practice of self-reflection",
    ],
    duration: "About 5 weeks",
    pace: "One step per week, around 2–3 hours per week including reading, reflection and practice.",
    domains: ["self", "relationships"],
    careNote: exploratoryNote,
    steps: [
      {
        title: "Begin with attention",
        focus: "Observing before judging",
        summary: [
          "Everything in this journey rests on one skill: noticing what is actually happening — in you and around you — before rushing to conclusions.",
          "This week you practise separating observations from interpretations, gently and without self-criticism.",
        ],
        resources: ["observation-without-immediate-judgment", "what-does-it-mean-to-understand-yourself"],
        reflectionPrompts: [
          "Which situations trigger your fastest judgments?",
          "What did you notice about yourself when you slowed down?",
          "What changed when you described rather than evaluated?",
        ],
        exercise: {
          title: "The observation journal",
          time: "10 minutes a day",
          instructions: [
            "Each evening, recall one interaction that produced a strong reaction.",
            "Write what happened in observable terms only.",
            "Then write what you concluded, and two other possible explanations.",
          ],
        },
        takeaway: "Seeing clearly comes before judging wisely.",
      },
      {
        title: "What do I really want?",
        focus: "Needs, desires and happiness",
        summary: [
          "Many reactions — irritation, envy, anxiety — point to something we want. This step explores what our wants are actually aiming at.",
          "You will distinguish needs of the body, desires for comfort and pleasure, and deeper needs such as respect, trust and understanding.",
        ],
        resources: ["needs-desires-and-happiness"],
        reflectionPrompts: [
          "Which of your recent strong wants were really about respect, belonging or being understood?",
          "Where do you already have enough?",
          "What would it look like to meet a deeper need more directly?",
        ],
        exercise: {
          title: "The needs-and-wants sort",
          time: "30 minutes, once",
          instructions: [
            "List ten things you have recently wanted or spent time or money on.",
            "Mark each as a physical need, a comfort or pleasure, or a deeper need.",
            "For each deeper need, ask whether what you pursued actually meets it.",
          ],
        },
        takeaway: "Clarity about what we want is a quiet source of freedom.",
      },
      {
        title: "Learning to listen",
        focus: "Understanding before responding",
        summary: [
          "Having looked inward, we now turn toward others. Listening well is perhaps the most practical expression of self-understanding in relationships.",
          "This week you notice your non-listening habits and practise four simple listening skills.",
        ],
        resources: ["listening-as-a-learning-practice"],
        reflectionPrompts: [
          "Which non-listening habit do you fall into most often?",
          "What did you learn from someone this week because you listened differently?",
          "How did people respond when you reflected back what they said?",
        ],
        exercise: {
          title: "A week of listening experiments",
          time: "One conversation a day",
          instructions: [
            "Choose one conversation daily where you will listen more than speak.",
            "Practise one habit per conversation: pausing, reflecting back, open questions or naming feelings.",
            "Note one thing you learned that you would otherwise have missed.",
          ],
        },
        takeaway: "Listening is how understanding travels between people.",
      },
      {
        title: "How trust grows",
        focus: "Intention, competence and reliability",
        summary: [
          "Trust is built in small moments. This step explores why we tend to judge others by their actions and ourselves by our intentions — and what changes when we notice this.",
          "You will practise an \"intention check\" before responding to disappointment.",
        ],
        resources: ["how-do-we-build-trust"],
        reflectionPrompts: [
          "Who do you trust deeply, and what built that trust?",
          "In a recent disappointment, did you judge intention or competence?",
          "Where could you be more trustworthy yourself?",
        ],
        exercise: {
          title: "The intention check",
          time: "As situations arise",
          instructions: [
            "When someone disappoints you, pause before responding.",
            "Ask: what do I think their intention was, and what is my evidence?",
            "If unsure, ask them with curiosity rather than accusation, and note what you learn.",
          ],
        },
        takeaway: "Assuming good intention, while addressing the action, keeps relationships open.",
      },
      {
        title: "Repair and integration",
        focus: "Bringing it together in one real conversation",
        summary: [
          "The final step brings together attention, clarity about needs, listening and trust in the practice of repair.",
          "You will prepare for and, if it feels right, hold one conversation that helps restore a strained connection.",
        ],
        resources: ["repairing-relationships-after-conflict"],
        reflectionPrompts: [
          "What did you learn about conflict from your family growing up?",
          "What makes it hard for you to apologise, or to accept an apology?",
          "Looking back over five weeks, what has changed in how you see yourself and others?",
        ],
        exercise: {
          title: "One repair conversation",
          time: "30 minutes preparation, plus the conversation",
          instructions: [
            "Choose a recent, moderate conflict — not the most painful one.",
            "Write what happened, how you felt and how you imagine the other person felt.",
            "Write one sentence acknowledging your part without excuses.",
            "Begin the conversation by asking about their experience, and listen before sharing yours.",
          ],
        },
        takeaway: "Relationships grow stronger not by avoiding conflict but by learning to repair.",
      },
    ],
    completion: {
      guidance: [
        "Read back through your notes from all five weeks and write a one-page reflection: What have I understood about myself? About my relationships?",
        "Choose one practice to continue for the next month — the observation journal, listening experiments or the intention check.",
        "If you journeyed with others, meet once more to share what changed and what remains difficult.",
        "There is no certificate. The evidence of completion is in your own understanding and relationships.",
      ],
      continueWith: [
        "what-is-coexistence",
        "how-do-traditions-understand-a-good-life",
        "what-does-meaningful-service-look-like",
      ],
    },
  },
  {
    slug: "learning-how-to-learn-and-think",
    title: "Learning How to Learn & Think",
    subtitle: "Evidence-based learning habits, clear reasoning and the beginnings of integral thinking.",
    objective:
      "To strengthen the habits that make learning effective and thinking clear — from study strategies supported by research to distinguishing facts from interpretations and seeing questions from many angles.",
    outcomes: [
      "Use retrieval and spaced practice in your own learning.",
      "Distinguish facts, interpretations, assumptions and opinions in what you read and hear.",
      "Turn everyday experience into learning through structured reflection.",
      "Examine where your beliefs come from and how well they are supported.",
      "Approach a complex question from several perspectives and see how they connect.",
    ],
    audience: [
      "Students preparing for further study",
      "Teachers, mentors and facilitators",
      "Professionals and lifelong learners who want to think more clearly",
    ],
    duration: "About 5 weeks",
    pace: "One step per week, around 2–3 hours per week.",
    domains: ["learning", "philosophy"],
    steps: [
      {
        title: "How learning actually works",
        focus: "Strategies with good evidence",
        summary: [
          "We begin with the tools of learning itself. Research suggests that some of the most common study habits are among the least effective.",
          "This week you replace one habit with retrieval practice and spacing, and observe the difference.",
        ],
        resources: ["learning-how-to-learn"],
        reflectionPrompts: [
          "Which of your study habits feel productive but may not be?",
          "What did you notice when you tested yourself instead of rereading?",
          "What do you believe about your own ability to learn difficult things?",
        ],
        exercise: {
          title: "The blank-page test",
          time: "20 minutes, twice this week",
          instructions: [
            "Choose something you recently studied.",
            "Without looking, write everything you remember and explain it simply.",
            "Check the source, mark gaps, and repeat in three days.",
          ],
        },
        takeaway: "Learning that feels harder in the moment often lasts longer.",
      },
      {
        title: "Separating facts from interpretations",
        focus: "The foundations of critical thinking",
        summary: [
          "Clear thinking depends on knowing what kind of statement you are dealing with. Most disagreements turn out to be about interpretations and assumptions, not facts.",
          "This week you practise four-colour reading on real material.",
        ],
        resources: ["facts-opinions-assumptions-and-interpretations"],
        reflectionPrompts: [
          "How much of what you read this week was interpretation presented as fact?",
          "Which assumptions did you discover in your own opinions?",
          "When did checking a source change your view?",
        ],
        exercise: {
          title: "Four-colour reading",
          time: "30 minutes, twice this week",
          instructions: [
            "Choose an article or post you found persuasive.",
            "Mark facts, interpretations and opinions in different colours.",
            "List the unstated assumptions, and check one factual claim with two independent sources.",
          ],
        },
        takeaway: "Seeing the structure of a claim is the first step to evaluating it.",
      },
      {
        title: "Learning from experience",
        focus: "Reflection as a habit",
        summary: [
          "Not all learning happens through study. This step explores how reflection turns ordinary experience into understanding.",
          "You will keep a short reflection log and look for recurring lessons.",
        ],
        resources: ["how-do-we-learn-from-experience"],
        reflectionPrompts: [
          "What lesson keeps appearing in your reflection log?",
          "What experience have you repeated without learning from it?",
          "Who or what helps you reflect well?",
        ],
        exercise: {
          title: "A reflection log",
          time: "5 minutes a day",
          instructions: [
            "Each evening answer: What happened? What did I learn? What will I try next?",
            "At the end of the week, circle lessons that appear more than once.",
            "Choose one and plan how to act on it.",
          ],
        },
        takeaway: "Experience becomes understanding through reflection.",
      },
      {
        title: "How do I know what I know?",
        focus: "Sources and strength of belief",
        summary: [
          "This step steps back to examine knowledge itself. Indian philosophy's theory of pramāṇas — perception, inference, testimony and more — offers a practical lens for auditing our beliefs.",
          "You will examine where several of your beliefs come from and how confident you should be in them.",
        ],
        resources: ["how-do-we-know-what-we-know"],
        reflectionPrompts: [
          "Which of your strongest beliefs rest mainly on testimony?",
          "Have you ever been confidently wrong? What misled you?",
          "What would it take to change your mind on something important?",
        ],
        exercise: {
          title: "A belief audit",
          time: "40 minutes, once",
          instructions: [
            "List five beliefs you hold about yourself, others, health, society or the world.",
            "Note the main source of each and rate your confidence.",
            "Choose one belief to investigate further.",
          ],
        },
        takeaway: "Hold beliefs with confidence proportional to their support.",
      },
      {
        title: "Thinking integrally",
        focus: "Many angles, one question",
        summary: [
          "The final step brings everything together: clear evidence, careful reasoning, reflection and humility, applied to a complex real question.",
          "You will examine one issue from several perspectives and look for how they connect.",
        ],
        resources: ["what-is-integral-thinking"],
        reflectionPrompts: [
          "Which lens do you naturally reach for first?",
          "What did you see about your chosen issue that you had not seen before?",
          "Over five weeks, what has changed in how you learn and think?",
        ],
        exercise: {
          title: "The four-angle sheet",
          time: "45 minutes, once",
          instructions: [
            "Divide a page into four quarters: inner and outer, individual and collective.",
            "Fill each with what you notice about one real issue.",
            "Draw arrows showing influences, and look for one change that could help in several areas.",
          ],
        },
        takeaway: "Whole questions deserve whole thinking.",
      },
    ],
    completion: {
      guidance: [
        "Write a one-page \"learning charter\": the three learning habits and two thinking habits you intend to keep.",
        "Teach one idea from this journey to someone else — explaining is one of the best ways to consolidate understanding.",
        "Revisit your belief audit in three months and see what has changed.",
        "There is no certificate. What matters is that you learn and think a little more clearly than before.",
      ],
      continueWith: [
        "how-do-traditions-understand-a-good-life",
        "how-do-institutions-shape-society",
        "how-should-we-think-about-technology",
      ],
    },
  },
  {
    slug: "understanding-coexistence-nature-society-and-us",
    title: "Understanding Coexistence: Nature, Society & Us",
    subtitle: "From ecological interdependence to institutions, economies and community action.",
    objective:
      "To understand how human life is embedded in natural and social systems, and to explore how individuals, institutions and communities can act in ways that sustain and regenerate those systems.",
    outcomes: [
      "Explain coexistence and interdependence scientifically and philosophically.",
      "Describe how ecosystems absorb change and what can push them past thresholds.",
      "Recognise how institutions shape behaviour and outcomes.",
      "Evaluate economic activity by whether it meets real needs and respects people and nature.",
      "Apply lessons from commons research to a shared problem in your own community.",
    ],
    audience: [
      "Students of environment, economics or social studies",
      "Community builders and socially conscious professionals",
      "Educators designing interdisciplinary learning",
      "Anyone curious about how personal life connects to larger systems",
    ],
    duration: "About 5 weeks",
    pace: "One step per week, around 3 hours per week including fieldwork.",
    domains: ["nature", "society", "work", "community"],
    steps: [
      {
        title: "What is coexistence?",
        focus: "Interdependence as a fact and a way of seeing",
        summary: [
          "We begin with the idea at the heart of this journey: that everything that exists is related to everything else.",
          "This week you explore what ecology tells us about interdependence and what several philosophical traditions suggest it means.",
        ],
        resources: ["what-is-coexistence"],
        reflectionPrompts: [
          "Name five things you depended on today that you rarely notice.",
          "Do you experience yourself as part of nature or apart from it?",
          "What responsibilities, if any, follow from interdependence?",
        ],
        exercise: {
          title: "A relationship walk",
          time: "30 minutes",
          instructions: [
            "Walk slowly in any place with living things.",
            "Choose one organism and ask what it depends on and what depends on it.",
            "Sketch the relationships you can see and those you can infer.",
          ],
        },
        takeaway: "Nothing exists alone.",
      },
      {
        title: "Living systems in motion",
        focus: "Cycles, feedback and resilience",
        summary: [
          "Ecosystems are not frozen balances but dynamic systems. This step explores cycles, feedback, diversity and thresholds.",
          "You will observe a small ecosystem over the week and reflect on what keeps it going.",
        ],
        resources: ["how-do-ecosystems-remain-dynamic", "what-does-regeneration-mean"],
        reflectionPrompts: [
          "Which natural cycles do you participate in every day?",
          "Can you think of a system in your life that has crossed a threshold?",
          "What would regeneration mean for a place you know?",
        ],
        exercise: {
          title: "Observe a small ecosystem",
          time: "Three short visits",
          instructions: [
            "Choose a small area — a garden bed, pond edge or patch of grass.",
            "Note what lives there, what changes and what persists.",
            "Identify one cycle and one relationship, and imagine what would happen if one element disappeared.",
          ],
        },
        takeaway: "Healthy systems keep changing while keeping their capacity to renew.",
      },
      {
        title: "The rules we live by",
        focus: "How institutions shape society",
        summary: [
          "Human societies are also systems, structured by formal rules and informal norms. This step explores how institutions shape what people do.",
          "You will map one institution you are part of and look for how its design affects outcomes.",
        ],
        resources: ["how-do-institutions-shape-society", "governance-at-every-scale"],
        reflectionPrompts: [
          "Which unwritten rules have shaped your choices most?",
          "Which problem do you usually blame on individuals that institutions might help explain?",
          "Who can change the rules in the institutions you belong to?",
        ],
        exercise: {
          title: "Map an institution",
          time: "About an hour",
          instructions: [
            "Choose an institution you know well.",
            "List its written rules, unwritten norms and who can change each.",
            "Identify one outcome it produces poorly and ask whether design or individuals explain it better.",
          ],
        },
        takeaway: "Institutions are human-made, and so can be remade.",
      },
      {
        title: "Economies that serve life",
        focus: "Needs, value and prosperity",
        summary: [
          "Economic activity connects nature and society: it transforms natural resources through human work to meet needs.",
          "This step asks what makes economic activity meaningful and traces the value chain of something you use.",
        ],
        resources: ["what-makes-economic-activity-meaningful"],
        reflectionPrompts: [
          "What real need does your work or study serve?",
          "When have you felt prosperous regardless of income?",
          "Which economic activities around you build trust, and which erode it?",
        ],
        exercise: {
          title: "Trace one product",
          time: "45 minutes",
          instructions: [
            "Choose a product you use often.",
            "List everyone involved in making and delivering it, and the natural resources it required.",
            "Assess whether it meets a real need and respects people and nature.",
          ],
        },
        takeaway: "An economy is a means to well-being, not an end in itself.",
      },
      {
        title: "Acting together",
        focus: "Communities and the commons",
        summary: [
          "The journey closes where coexistence becomes action: in communities working together on shared problems.",
          "Drawing on Elinor Ostrom's research and community practice, you will map one shared issue near you and propose a small first step.",
        ],
        resources: ["how-can-communities-solve-shared-problems", "why-do-humans-cooperate"],
        reflectionPrompts: [
          "Which shared resource near you is well cared for, and why?",
          "What strengths does your community have that are rarely recognised?",
          "Looking back over five weeks, how has your sense of your place in nature and society changed?",
        ],
        exercise: {
          title: "Map a shared problem",
          time: "Two weeks, a few conversations",
          instructions: [
            "Choose one shared issue in your area.",
            "Talk with at least five people affected about how they see it.",
            "Use Ostrom's design principles as a checklist and propose one small step to try together.",
          ],
        },
        takeaway: "Collective prosperity is built through understanding, relationship and shared action.",
      },
    ],
    completion: {
      guidance: [
        "Draw a single map connecting what you learned: one natural system, one institution, one economic chain and one community effort — and how they affect each other.",
        "Share your map with someone and discuss what you each noticed.",
        "If you proposed a community step, review it after a month: what happened, what did you learn?",
        "There is no certificate. The journey continues in how you see and participate in the systems around you.",
      ],
      continueWith: [
        "what-is-integral-thinking",
        "what-does-meaningful-service-look-like",
        "what-do-we-mean-by-justice",
      ],
    },
  },
];
