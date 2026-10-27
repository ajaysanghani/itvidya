import type { Resource } from "../schema";
import { initialEdition, mentalHealthCare } from "./defaults";

export const relationshipResources: Resource[] = [
  {
    ...initialEdition,
    slug: "listening-as-a-learning-practice",
    title: "Listening as a Learning Practice",
    summary:
      "Real listening is not waiting for our turn to speak. It is one of the most direct ways to learn — about other people, about the world, and about ourselves.",
    domain: "relationships",
    alsoIn: ["learning", "community"],
    tags: ["listening", "communication", "empathy", "attention", "practice"],
    format: "guide",
    level: "beginner",
    keyIdeas: [
      "Most conversations involve less listening than either person believes.",
      "Listening to understand is different from listening to reply, agree or fix.",
      "Good listening can be practised through simple, concrete habits.",
    ],
    sections: [
      {
        heading: "Why listening is a form of learning",
        body: [
          "Every person carries experiences, knowledge and perspectives we do not have. Listening is the doorway through which those can reach us. When we listen well, we learn things that no book can teach — what it is like to be someone else, in their situation, with their history.",
          "Listening also teaches us about ourselves. The moments when we stop listening — when we become impatient, defensive or eager to correct — reveal our assumptions and sensitivities.",
        ],
      },
      {
        heading: "Common ways we do not listen",
        kind: "interpretation",
        body: [
          "Much of what passes for listening is something else. These habits are common and understandable, and noticing them is the first step.",
        ],
        points: [
          "Rehearsing: preparing our reply while the other person is still speaking.",
          "Fixing: jumping to advice before understanding the problem.",
          "Comparing: turning the conversation to our own similar experience.",
          "Filtering: hearing only what confirms what we already believe.",
          "Judging: deciding what someone means before they have finished.",
        ],
      },
      {
        heading: "What research and practice suggest",
        kind: "evidence",
        body: [
          "Research in communication and counselling has long emphasised the value of attentive, reflective listening — paraphrasing, asking clarifying questions and acknowledging feelings. Carl Rogers' work on person-centred counselling placed empathic understanding at the heart of helping relationships, and many later approaches build on it.",
          "Studies of conversations suggest that people who ask more follow-up questions tend to be perceived as more responsive and are often better liked. Evidence of this kind is about perception in specific settings, so treat it as encouraging rather than conclusive.",
        ],
      },
      {
        heading: "Four practical habits",
        kind: "practice",
        body: [
          "Good listening is less a talent than a set of habits. Each of these can be practised in ordinary conversations.",
        ],
        points: [
          "Pause before replying. A two-second silence often invites the other person to say more.",
          "Reflect back what you heard: \"So what bothered you most was…?\" Let them correct you.",
          "Ask open questions — \"What was that like?\" — rather than questions that suggest an answer.",
          "Notice feelings as well as facts, and name them tentatively: \"It sounds like that was frustrating.\"",
        ],
      },
      {
        heading: "Listening across difference",
        kind: "perspective",
        body: [
          "Listening is hardest — and perhaps most important — when we disagree. In many traditions of dialogue, from the Jain idea of anekāntavāda (the many-sidedness of truth) to modern practices of deliberative democracy, listening to opposing views is treated not as a concession but as a way of approaching a fuller understanding.",
          "Listening to understand does not require us to agree. It requires us to understand well enough that the other person would recognise their view in our summary of it.",
        ],
      },
    ],
    reflectionQuestions: [
      "Who in your life listens to you well? What exactly do they do?",
      "Which of the non-listening habits do you notice most often in yourself?",
      "When was the last time listening changed your mind about something?",
    ],
    application: {
      title: "A week of listening experiments",
      steps: [
        "Choose one conversation a day where you will listen more than you speak.",
        "Practise one habit per conversation: pausing, reflecting back, open questions or naming feelings.",
        "After each conversation, note one thing you learned that you would otherwise have missed.",
        "At the end of the week, ask one person whether they noticed any difference.",
      ],
    },
    related: [
      "observation-without-immediate-judgment",
      "how-do-we-build-trust",
      "repairing-relationships-after-conflict",
    ],
    references: [
      {
        title: "On Becoming a Person",
        author: "Carl R. Rogers",
        year: 1961,
        note: "Foundational essays on empathic understanding in helping relationships.",
      },
      {
        title: "Nonviolent Communication: A Language of Life",
        author: "Marshall B. Rosenberg",
        year: 2003,
      },
    ],
  },
  {
    ...initialEdition,
    slug: "how-do-we-build-trust",
    title: "How Do We Build Trust?",
    summary:
      "Trust grows when we feel assured of each other's intentions — not only when we approve of each other's actions. Understanding this distinction can transform how we respond to disappointment.",
    domain: "relationships",
    alsoIn: ["community", "society"],
    tags: ["trust", "intention", "family", "friendship", "cooperation"],
    format: "essay",
    level: "beginner",
    keyIdeas: [
      "Trust involves confidence in another's intentions as well as their competence and reliability.",
      "We tend to judge ourselves by intentions and others by actions.",
      "Trust is built through many small, consistent experiences and can be rebuilt after it breaks.",
    ],
    sections: [
      {
        heading: "What we mean by trust",
        body: [
          "To trust someone is to be willing to rely on them in a way that leaves us open to disappointment. We trust a friend with a secret, a doctor with our health, a child with a responsibility. In each case we are assuming something about the other person that we cannot fully verify.",
          "Researchers who study trust in organisations often describe several components: a belief in someone's competence (can they do it?), integrity (will they keep their word?) and benevolence (do they care about my well-being?).",
        ],
      },
      {
        heading: "Intention and competence",
        kind: "perspective",
        body: [
          "Some educational approaches, including the Universal Human Values framework, place a particular distinction at the heart of trust: the difference between a person's intention and their competence. Intention is what someone wishes to do; competence is their ability to carry it out.",
          "On this view, most people, most of the time, intend well for themselves and for others — the wish to be happy and to make others happy is widely shared. What often fails is competence: we lack the understanding, skill or self-control to act on our intentions. If we recognise this, a disappointment becomes an occasion to help rather than to accuse.",
          "Not everyone will accept that intentions are generally good, and there are clearly situations of deliberate harm. Still, the distinction offers a useful question to ask before concluding that someone meant to hurt us.",
        ],
      },
      {
        heading: "An asymmetry worth noticing",
        kind: "evidence",
        body: [
          "Social psychology has documented a tendency, sometimes called the actor–observer asymmetry or fundamental attribution error, to explain our own lapses by circumstances and other people's lapses by their character. The size and consistency of this effect have been debated, but the everyday pattern is familiar: \"I was late because of traffic; you were late because you don't respect my time.\"",
          "Simply knowing about this tendency can prompt a useful pause: am I judging their intention or only their action?",
        ],
      },
      {
        heading: "How trust grows",
        kind: "interpretation",
        body: [
          "Trust is rarely built by grand gestures. It accumulates through small, repeated experiences of reliability and care.",
        ],
        points: [
          "Keeping small promises, especially ones the other person may have forgotten.",
          "Being honest about limitations rather than over-promising.",
          "Showing care when there is nothing to gain.",
          "Responding to mistakes — our own and others' — with accountability rather than blame.",
          "Being consistent: the same person in public and in private.",
        ],
      },
      {
        heading: "When trust breaks",
        kind: "plural",
        body: [
          "There are different views on how and whether broken trust should be restored. Some emphasise forgiveness as a moral and spiritual practice. Others emphasise that trust should be earned back through changed behaviour over time, and that forgiveness does not require continued vulnerability. Many people hold both: one can forgive while still rebuilding trust cautiously.",
          "Where there has been abuse or serious harm, protecting oneself and others comes first. Rebuilding trust is a choice, not an obligation.",
        ],
      },
    ],
    reflectionQuestions: [
      "Think of someone you trust deeply. What experiences built that trust?",
      "Recall a recent disappointment. Did you judge the person's intention or their competence?",
      "In what ways are you trustworthy to others? Where could you be more so?",
      "Is it possible to trust someone's intention while doubting their ability? What would that look like?",
    ],
    application: {
      title: "The intention check",
      steps: [
        "Next time someone disappoints you, pause before responding.",
        "Ask yourself: What do I think their intention was? What evidence do I have?",
        "If you are unsure, ask them — with curiosity, not accusation.",
        "Afterwards, reflect on whether your first assumption was accurate.",
      ],
    },
    related: [
      "listening-as-a-learning-practice",
      "repairing-relationships-after-conflict",
      "how-can-communities-solve-shared-problems",
    ],
    references: [
      {
        title: "A Foundation Course in Human Values and Professional Ethics",
        author: "R. R. Gaur, R. Sangal and G. P. Bagaria",
        note: "Discusses trust in terms of intention and competence.",
      },
    ],
  },
  {
    ...initialEdition,
    slug: "repairing-relationships-after-conflict",
    title: "Repairing Relationships After Conflict",
    summary:
      "Conflict is a normal part of close relationships. What matters most may be not whether we disagree, but whether we know how to repair the connection afterwards.",
    domain: "relationships",
    alsoIn: ["self"],
    tags: ["conflict", "repair", "family", "communication", "apology"],
    format: "guide",
    level: "intermediate",
    careNote: `${mentalHealthCare} If a relationship involves abuse, threats or coercion, please prioritise safety and seek support from local services.`,
    keyIdeas: [
      "Disagreement is normal; damage often comes from how conflict is handled and left unrepaired.",
      "Repair involves acknowledging impact, understanding each other's experience and agreeing on a way forward.",
      "A sincere apology names what happened without excuses.",
    ],
    sections: [
      {
        heading: "Conflict is not the opposite of closeness",
        body: [
          "Families, friendships and partnerships all involve conflict. People who care about each other still have different needs, habits and expectations. Expecting a relationship without conflict can make ordinary disagreements feel like failures.",
          "A more realistic aim is a relationship where conflicts can be raised safely and repaired well.",
        ],
      },
      {
        heading: "What researchers have observed",
        kind: "evidence",
        body: [
          "Researchers who study couples, notably John Gottman and colleagues, have reported that stable relationships are not distinguished by an absence of conflict but by how partners handle it — including whether they make and accept \"repair attempts\" during and after disagreements. Patterns such as contempt and stonewalling were associated with poorer outcomes in their studies.",
          "Much of this research focused on particular populations and on married couples, so applying it to all relationships and cultures requires care. The core idea — that repair matters — is widely shared in counselling practice.",
        ],
      },
      {
        heading: "Four movements of repair",
        kind: "practice",
        body: [
          "Repair is not a script, but it often involves these movements, in roughly this order.",
        ],
        points: [
          "Calm down first. Strong emotions narrow attention; it is often wiser to pause and return.",
          "Understand before explaining. Ask what the experience was like for the other person and reflect it back.",
          "Acknowledge impact. Name what you did and how it affected them, without \"but.\"",
          "Agree on something concrete: what each will try to do differently next time.",
        ],
      },
      {
        heading: "What makes an apology sincere",
        kind: "interpretation",
        body: [
          "An apology that includes excuses — \"I'm sorry, but you made me angry\" — often lands as a defence. Sincere apologies tend to name the specific action, recognise its effect, express regret and indicate how one will act differently.",
          "Equally important is the ability to receive an apology: to recognise a sincere attempt at repair even when it is clumsy.",
        ],
      },
      {
        heading: "Cultural differences in repair",
        kind: "plural",
        body: [
          "Ways of handling conflict vary between cultures and families. In some settings, direct conversation is expected; in others, repair happens through gestures, through a trusted third person, or simply by resuming normal life. None of these is automatically better.",
          "What seems to matter across settings is that both people come to feel understood and that the relationship is valued more than winning the argument.",
        ],
      },
    ],
    reflectionQuestions: [
      "How was conflict handled in your family when you were growing up? What did you learn from it?",
      "Is there a relationship in your life that is waiting for repair?",
      "What makes it hard for you to apologise — or to accept an apology?",
    ],
    application: {
      title: "Prepare for one repair conversation",
      steps: [
        "Choose a recent, moderate conflict — not the most painful one.",
        "Write down what happened, how you felt, and how you imagine the other person felt.",
        "Write one sentence that acknowledges your part without excuses.",
        "Find a calm moment, begin by asking about their experience, and listen before sharing yours.",
      ],
    },
    related: [
      "how-do-we-build-trust",
      "listening-as-a-learning-practice",
      "observation-without-immediate-judgment",
    ],
    references: [
      {
        title: "The Seven Principles for Making Marriage Work",
        author: "John M. Gottman and Nan Silver",
        year: 1999,
        note: "A popular account of research on conflict and repair in couples.",
      },
    ],
  },
];
