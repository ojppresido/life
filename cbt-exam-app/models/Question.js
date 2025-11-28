// Simple in-memory storage for demonstration
// In production, you would use a database like MongoDB or PostgreSQL

class Question {
  constructor(id, subject, questionText, options, correctAnswer, explanation, difficulty = 'medium') {
    this.id = id;
    this.subject = subject;
    this.questionText = questionText;
    this.options = options; // Array of option objects {id, text}
    this.correctAnswer = correctAnswer; // Option id
    this.explanation = explanation;
    this.difficulty = difficulty;
    this.createdAt = new Date();
  }
}

// In-memory storage
let questions = [
  {
    id: '1',
    subject: 'Mathematics',
    questionText: 'What is the value of π (pi) approximately?',
    options: [
      { id: 'a', text: '3.14' },
      { id: 'b', text: '2.71' },
      { id: 'c', text: '1.41' },
      { id: 'd', text: '1.73' }
    ],
    correctAnswer: 'a',
    explanation: 'Pi (π) is a mathematical constant representing the ratio of a circle\'s circumference to its diameter, approximately equal to 3.14159.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '2',
    subject: 'English',
    questionText: 'Which of the following is a noun?',
    options: [
      { id: 'a', text: 'Quickly' },
      { id: 'b', text: 'Beautiful' },
      { id: 'c', text: 'Happiness' },
      { id: 'd', text: 'Run' }
    ],
    correctAnswer: 'c',
    explanation: 'A noun is a word that represents a person, place, thing, or idea. "Happiness" is a thing (an abstract concept), making it a noun.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '3',
    subject: 'Physics',
    questionText: 'What is the SI unit of force?',
    options: [
      { id: 'a', text: 'Joule' },
      { id: 'b', text: 'Watt' },
      { id: 'c', text: 'Newton' },
      { id: 'd', text: 'Pascal' }
    ],
    correctAnswer: 'c',
    explanation: 'The SI unit of force is Newton (N), named after Sir Isaac Newton. It is defined as the force required to accelerate a mass of one kilogram at a rate of one meter per second squared.',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '4',
    subject: 'Use of English',
    questionText: 'Choose the word that best completes the sentence: The teacher was very _______ about the students\' poor performance.',
    options: [
      { id: 'a', text: 'disappointed' },
      { id: 'b', text: 'disappointing' },
      { id: 'c', text: 'disappoint' },
      { id: 'd', text: 'disappoints' }
    ],
    correctAnswer: 'a',
    explanation: 'The correct word is "disappointed" because it describes the teacher\'s emotional state. "Disappointing" describes something that causes disappointment.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '5',
    subject: 'Use of English',
    questionText: 'Select the word that is closest in meaning to "benevolent":',
    options: [
      { id: 'a', text: 'hostile' },
      { id: 'b', text: 'generous' },
      { id: 'c', text: 'cruel' },
      { id: 'd', text: 'selfish' }
    ],
    correctAnswer: 'b',
    explanation: 'Benevolent means well-meaning and kindly, which is closest to "generous."',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '6',
    subject: 'Use of English',
    questionText: 'Choose the correct form of the verb: By the time we arrived, the movie _______.',
    options: [
      { id: 'a', text: 'has started' },
      { id: 'b', text: 'had started' },
      { id: 'c', text: 'was starting' },
      { id: 'd', text: 'started' }
    ],
    correctAnswer: 'b',
    explanation: 'The correct form is "had started" because it refers to an action completed before another past action (past perfect tense).',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '7',
    subject: 'Use of English',
    questionText: 'Which of the following is a compound sentence?',
    options: [
      { id: 'a', text: 'The cat slept.' },
      { id: 'b', text: 'Running fast, he won the race.' },
      { id: 'c', text: 'She studied hard, but she failed the exam.' },
      { id: 'd', text: 'After the rain stopped, we went out.' }
    ],
    correctAnswer: 'c',
    explanation: 'A compound sentence contains two independent clauses joined by a coordinating conjunction like "but."',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '8',
    subject: 'Use of English',
    questionText: 'Identify the figure of speech: "The wind whispered through the trees."',
    options: [
      { id: 'a', text: 'Metaphor' },
      { id: 'b', text: 'Simile' },
      { id: 'c', text: 'Personification' },
      { id: 'd', text: 'Alliteration' }
    ],
    correctAnswer: 'c',
    explanation: 'Personification is when human qualities are given to non-human things. Here, the wind is given the human ability to whisper.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '9',
    subject: 'Use of English',
    questionText: 'Choose the correct spelling:',
    options: [
      { id: 'a', text: 'Neccessary' },
      { id: 'b', text: 'Necessary' },
      { id: 'c', text: 'Necesary' },
      { id: 'd', text: 'Necessery' }
    ],
    correctAnswer: 'b',
    explanation: "The correct spelling is \"Necessary\" - it has one c and one s.",
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '10',
    subject: 'Use of English',
    questionText: 'Select the word that is opposite in meaning to "frugal":',
    options: [
      { id: 'a', text: 'economical' },
      { id: 'b', text: 'wasteful' },
      { id: 'c', text: 'thrifty' },
      { id: 'd', text: 'careful' }
    ],
    correctAnswer: 'b',
    explanation: 'Frugal means economical or thrifty, so the opposite is "wasteful."',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '11',
    subject: 'Use of English',
    questionText: 'Choose the correct preposition: The book is _______ the table.',
    options: [
      { id: 'a', text: 'in' },
      { id: 'b', text: 'on' },
      { id: 'c', text: 'at' },
      { id: 'd', text: 'to' }
    ],
    correctAnswer: 'b',
    explanation: 'The correct preposition is "on" because the book is positioned on top of the table.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '12',
    subject: 'Use of English',
    questionText: 'Which sentence is in the passive voice?',
    options: [
      { id: 'a', text: 'The dog chased the cat.' },
      { id: 'b', text: 'She sings a song.' },
      { id: 'c', text: 'The cake was eaten by the children.' },
      { id: 'd', text: 'He drives the car.' }
    ],
    correctAnswer: 'c',
    explanation: 'In passive voice, the subject receives the action. "The cake was eaten" shows the cake receiving the action.',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '13',
    subject: 'Use of English',
    questionText: 'Choose the synonym for "arduous":',
    options: [
      { id: 'a', text: 'easy' },
      { id: 'b', text: 'difficult' },
      { id: 'c', text: 'short' },
      { id: 'd', text: 'long' }
    ],
    correctAnswer: 'b',
    explanation: 'Arduous means difficult or requiring hard work and effort.',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '14',
    subject: 'Use of English',
    questionText: 'Fill in the blank: Neither John nor his friends _______ coming to the party.',
    options: [
      { id: 'a', text: 'is' },
      { id: 'b', text: 'are' },
      { id: 'c', text: 'was' },
      { id: 'd', text: 'were' }
    ],
    correctAnswer: 'b',
    explanation: 'With "neither...nor", the verb agrees with the subject closest to it. Since "friends" is plural, we use "are".',
    difficulty: 'hard',
    createdAt: new Date()
  },
  {
    id: '15',
    subject: 'Use of English',
    questionText: 'Which of these is a simile?',
    options: [
      { id: 'a', text: 'The world is a stage.' },
      { id: 'b', text: 'Time flies.' },
      { id: 'c', text: 'Her smile was as bright as the sun.' },
      { id: 'd', text: 'The wind howled.' }
    ],
    correctAnswer: 'c',
    explanation: 'A simile compares two things using "like" or "as". "As bright as the sun" is a simile.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '16',
    subject: 'Use of English',
    questionText: 'Choose the correct form: If I _______ rich, I would travel the world.',
    options: [
      { id: 'a', text: 'am' },
      { id: 'b', text: 'was' },
      { id: 'c', text: 'were' },
      { id: 'd', text: 'will be' }
    ],
    correctAnswer: 'c',
    explanation: 'In conditional sentences expressing hypothetical situations, we use "were" regardless of the subject.',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '17',
    subject: 'Use of English',
    questionText: 'Identify the type of noun: "Honesty" is the best policy.',
    options: [
      { id: 'a', text: 'Proper noun' },
      { id: 'b', text: 'Abstract noun' },
      { id: 'c', text: 'Collective noun' },
      { id: 'd', text: 'Material noun' }
    ],
    correctAnswer: 'b',
    explanation: 'Honesty is an abstract noun because it represents a quality or concept that cannot be physically touched.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '18',
    subject: 'Use of English',
    questionText: 'Choose the correct conjunction: He studied hard _______ he failed the exam.',
    options: [
      { id: 'a', text: 'and' },
      { id: 'b', text: 'but' },
      { id: 'c', text: 'or' },
      { id: 'd', text: 'so' }
    ],
    correctAnswer: 'b',
    explanation: 'The conjunction "but" shows contrast between studying hard and failing the exam.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '19',
    subject: 'Use of English',
    questionText: 'Which word is a pronoun?',
    options: [
      { id: 'a', text: 'house' },
      { id: 'b', text: 'quickly' },
      { id: 'c', text: 'they' },
      { id: 'd', text: 'running' }
    ],
    correctAnswer: 'c',
    explanation: 'A pronoun replaces a noun. "They" is a pronoun that can replace a noun referring to people or things.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '20',
    subject: 'Use of English',
    questionText: 'Choose the correct punctuation: "What time is it_______"',
    options: [
      { id: 'a', text: '.' },
      { id: 'b', text: '?' },
      { id: 'c', text: '!' },
      { id: 'd', text: ',' }
    ],
    correctAnswer: 'b',
    explanation: 'This is a question, so it should end with a question mark.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '21',
    subject: 'Use of English',
    questionText: 'Select the antonym for "obsolete":',
    options: [
      { id: 'a', text: 'ancient' },
      { id: 'b', text: 'modern' },
      { id: 'c', text: 'old' },
      { id: 'd', text: 'broken' }
    ],
    correctAnswer: 'b',
    explanation: 'Obsolete means out of date or no longer in use, so the opposite is "modern."',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '22',
    subject: 'Use of English',
    questionText: 'Choose the correct form: Each of the students _______ their own book.',
    options: [
      { id: 'a', text: 'have' },
      { id: 'b', text: 'has' },
      { id: 'c', text: 'had' },
      { id: 'd', text: 'having' }
    ],
    correctAnswer: 'b',
    explanation: '"Each" is singular, so the verb must be "has."',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '23',
    subject: 'Use of English',
    questionText: 'Identify the error: The boy and his friends was playing football.',
    options: [
      { id: 'a', text: 'The boy' },
      { id: 'b', text: 'his friends' },
      { id: 'c', text: 'was' },
      { id: 'd', text: 'playing' }
    ],
    correctAnswer: 'c',
    explanation: 'The subject "The boy and his friends" is plural, so the verb should be "were" instead of "was."',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '24',
    subject: 'Use of English',
    questionText: 'Which of these is a metaphor?',
    options: [
      { id: 'a', text: 'She runs like the wind.' },
      { id: 'b', text: 'Life is a journey.' },
      { id: 'c', text: 'The stars were shining bright.' },
      { id: 'd', text: 'The cat purred softly.' }
    ],
    correctAnswer: 'b',
    explanation: 'A metaphor directly states that one thing is another. "Life is a journey" is a metaphor comparing life to a journey.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '25',
    subject: 'Use of English',
    questionText: 'Choose the correct adverb: She sings _______.',
    options: [
      { id: 'a', text: 'beautiful' },
      { id: 'b', text: 'beautifully' },
      { id: 'c', text: 'beauty' },
      { id: 'd', text: 'beautify' }
    ],
    correctAnswer: 'b',
    explanation: 'An adverb modifies a verb. "Beautifully" is the adverb form of "beautiful" and modifies "sings."',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '26',
    subject: 'Use of English',
    questionText: 'Fill in the blank: I would have gone to the party if I _______ invited.',
    options: [
      { id: 'a', text: 'was' },
      { id: 'b', text: 'were' },
      { id: 'c', text: 'had been' },
      { id: 'd', text: 'have been' }
    ],
    correctAnswer: 'c',
    explanation: 'This is a third conditional sentence expressing a hypothetical past situation. The correct form is "had been."',
    difficulty: 'hard',
    createdAt: new Date()
  },
  {
    id: '27',
    subject: 'Use of English',
    questionText: 'Choose the correct sentence:',
    options: [
      { id: 'a', text: 'Me and my friend went to the store.' },
      { id: 'b', text: 'My friend and I went to the store.' },
      { id: 'c', text: 'My friend and me went to the store.' },
      { id: 'd', text: 'I and my friend went to the store.' }
    ],
    correctAnswer: 'b',
    explanation: 'When using pronouns with other subjects, use the subjective case "I" and put it last out of courtesy.',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '28',
    subject: 'Use of English',
    questionText: 'Which word is an adverb?',
    options: [
      { id: 'a', text: 'happiness' },
      { id: 'b', text: 'quick' },
      { id: 'c', text: 'run' },
      { id: 'd', text: 'quickly' }
    ],
    correctAnswer: 'd',
    explanation: 'An adverb modifies a verb, adjective, or another adverb. "Quickly" modifies how an action is performed.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '29',
    subject: 'Use of English',
    questionText: 'Select the word closest in meaning to "meticulous":',
    options: [
      { id: 'a', text: 'careless' },
      { id: 'b', text: 'careful' },
      { id: 'c', text: 'quick' },
      { id: 'd', text: 'angry' }
    ],
    correctAnswer: 'b',
    explanation: 'Meticulous means showing great attention to detail; very careful and precise.',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '30',
    subject: 'Use of English',
    questionText: 'Choose the correct article: She is _______ honest woman.',
    options: [
      { id: 'a', text: 'a' },
      { id: 'b', text: 'an' },
      { id: 'c', text: 'the' },
      { id: 'd', text: 'no article' }
    ],
    correctAnswer: 'b',
    explanation: 'Use "an" before words that begin with a vowel sound. "Honest" begins with a vowel sound (the "h" is silent).',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '31',
    subject: 'Use of English',
    questionText: 'Identify the type of sentence: "Please close the door."',
    options: [
      { id: 'a', text: 'Declarative' },
      { id: 'b', text: 'Interrogative' },
      { id: 'c', text: 'Imperative' },
      { id: 'd', text: 'Exclamatory' }
    ],
    correctAnswer: 'c',
    explanation: 'An imperative sentence gives a command or makes a request. "Please close the door" is a request/command.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '32',
    subject: 'Use of English',
    questionText: 'Choose the correct form: The committee _______ divided in their opinions.',
    options: [
      { id: 'a', text: 'is' },
      { id: 'b', text: 'are' },
      { id: 'c', text: 'was' },
      { id: 'd', text: 'were' }
    ],
    correctAnswer: 'b',
    explanation: 'Collective nouns like "committee" can be treated as plural when referring to the members individually, so "are" is correct.',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '33',
    subject: 'Use of English',
    questionText: 'Which is the correct spelling?',
    options: [
      { id: 'a', text: 'Occassion' },
      { id: 'b', text: 'Occasion' },
      { id: 'c', text: 'Occasión' },
      { id: 'd', text: 'Ocassion' }
    ],
    correctAnswer: 'b',
    explanation: "The correct spelling is \"Occasion\" - it has one c and one s.",
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '34',
    subject: 'Use of English',
    questionText: 'Fill in the blank: _______ he worked hard, he failed the exam.',
    options: [
      { id: 'a', text: 'Because' },
      { id: 'b', text: 'Although' },
      { id: 'c', text: 'Since' },
      { id: 'd', text: 'When' }
    ],
    correctAnswer: 'b',
    explanation: 'The sentence shows contrast, so "Although" is the correct conjunction.',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '35',
    subject: 'Use of English',
    questionText: 'Choose the correct comparative form: This book is _______ than that one.',
    options: [
      { id: 'a', text: 'interesting' },
      { id: 'b', text: 'more interesting' },
      { id: 'c', text: 'most interesting' },
      { id: 'd', text: 'interestinger' }
    ],
    correctAnswer: 'b',
    explanation: 'For comparing two things, use the comparative form "more interesting."',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '36',
    subject: 'Use of English',
    questionText: 'Identify the figure of speech: "The pen is mightier than the sword."',
    options: [
      { id: 'a', text: 'Metaphor' },
      { id: 'b', text: 'Personification' },
      { id: 'c', text: 'Alliteration' },
      { id: 'd', text: 'Synecdoche' }
    ],
    correctAnswer: 'd',
    explanation: 'Synecdoche is when a part represents the whole or vice versa. "Pen" represents writing/thought and "sword" represents warfare.',
    difficulty: 'hard',
    createdAt: new Date()
  },
  {
    id: '37',
    subject: 'Use of English',
    questionText: 'Choose the correct modal verb: You _______ complete this task by tomorrow.',
    options: [
      { id: 'a', text: 'can' },
      { id: 'b', text: 'may' },
      { id: 'c', text: 'must' },
      { id: 'd', text: 'might' }
    ],
    correctAnswer: 'c',
    explanation: 'The context indicates obligation, so "must" is the correct modal verb.',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '38',
    subject: 'Use of English',
    questionText: 'Which sentence uses the correct form of the verb?',
    options: [
      { id: 'a', text: 'She have gone to the market.' },
      { id: 'b', text: 'She has went to the market.' },
      { id: 'c', text: 'She has gone to the market.' },
      { id: 'd', text: 'She had went to the market.' }
    ],
    correctAnswer: 'c',
    explanation: 'The present perfect tense uses "has/have + past participle." For "she," use "has" and the past participle "gone."',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '39',
    subject: 'Use of English',
    questionText: 'Choose the correct word: The _______ of the mountain was covered with snow.',
    options: [
      { id: 'a', text: 'peek' },
      { id: 'b', text: 'peak' },
      { id: 'c', text: 'pique' },
      { id: 'd', text: 'peke' }
    ],
    correctAnswer: 'b',
    explanation: 'Peak means the pointed top of a mountain. "Peek" means to look quickly.',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '40',
    subject: 'Use of English',
    questionText: 'Identify the error: Each of the books are on the shelf.',
    options: [
      { id: 'a', text: 'Each' },
      { id: 'b', text: 'of the books' },
      { id: 'c', text: 'are' },
      { id: 'd', text: 'on the shelf' }
    ],
    correctAnswer: 'c',
    explanation: '"Each" is singular, so the verb should be "is" instead of "are."',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '41',
    subject: 'Use of English',
    questionText: 'Choose the correct form: If I _______ you, I would apologize.',
    options: [
      { id: 'a', text: 'was' },
      { id: 'b', text: 'were' },
      { id: 'c', text: 'am' },
      { id: 'd', text: 'be' }
    ],
    correctAnswer: 'b',
    explanation: 'In second conditional sentences expressing hypothetical situations, we use "were" regardless of the subject.',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '42',
    subject: 'Use of English',
    questionText: 'Which of these is a collective noun?',
    options: [
      { id: 'a', text: 'book' },
      { id: 'b', text: 'furniture' },
      { id: 'c', text: 'committee' },
      { id: 'd', text: 'honesty' }
    ],
    correctAnswer: 'c',
    explanation: 'A collective noun refers to a group of people or things. "Committee" refers to a group of people.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '43',
    subject: 'Use of English',
    questionText: 'Choose the correct preposition: The keys are _______ the table.',
    options: [
      { id: 'a', text: 'in' },
      { id: 'b', text: 'on' },
      { id: 'c', text: 'at' },
      { id: 'd', text: 'to' }
    ],
    correctAnswer: 'b',
    explanation: 'When something is positioned on top of a surface, use "on."',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '44',
    subject: 'Use of English',
    questionText: 'Select the antonym for "benevolent":',
    options: [
      { id: 'a', text: 'kind' },
      { id: 'b', text: 'generous' },
      { id: 'c', text: 'malicious' },
      { id: 'd', text: 'helpful' }
    ],
    correctAnswer: 'c',
    explanation: 'Benevolent means well-meaning and kindly, so the opposite is "malicious" (wicked or evil).',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '45',
    subject: 'Use of English',
    questionText: 'Fill in the blank: Not only _______ a great singer, but also a talented dancer.',
    options: [
      { id: 'a', text: 'she is' },
      { id: 'b', text: 'is she' },
      { id: 'c', text: 'she was' },
      { id: 'd', text: 'was she' }
    ],
    correctAnswer: 'b',
    explanation: 'When a sentence begins with "Not only," the subject and verb are inverted, so "is she" is correct.',
    difficulty: 'hard',
    createdAt: new Date()
  },
  {
    id: '46',
    subject: 'Use of English',
    questionText: 'Choose the correct form: The police _______ investigating the case.',
    options: [
      { id: 'b', text: 'are' },
      { id: 'a', text: 'is' },
      { id: 'c', text: 'was' },
      { id: 'd', text: 'were' }
    ],
    correctAnswer: 'b',
    explanation: '"Police" is a collective noun treated as plural, so "are" is the correct verb form.',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '47',
    subject: 'Use of English',
    questionText: 'Which word is a conjunction?',
    options: [
      { id: 'a', text: 'quickly' },
      { id: 'b', text: 'and' },
      { id: 'c', text: 'house' },
      { id: 'd', text: 'run' }
    ],
    correctAnswer: 'b',
    explanation: 'A conjunction connects words, phrases, or clauses. "And" is a coordinating conjunction.',
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '48',
    subject: 'Use of English',
    questionText: 'Choose the correct spelling:',
    options: [
      { id: 'a', text: 'Separate' },
      { id: 'b', text: 'Seperate' },
      { id: 'c', text: 'Seperat' },
      { id: 'd', text: 'Separat' }
    ],
    correctAnswer: 'a',
    explanation: "The correct spelling is \"Separate\" - it has one a and one e in the middle.",
    difficulty: 'easy',
    createdAt: new Date()
  },
  {
    id: '49',
    subject: 'Use of English',
    questionText: 'Identify the figure of speech: "The golden dawn crept across the sky."',
    options: [
      { id: 'a', text: 'Simile' },
      { id: 'b', text: 'Metaphor' },
      { id: 'c', text: 'Personification' },
      { id: 'd', text: 'Alliteration' }
    ],
    correctAnswer: 'c',
    explanation: 'Personification gives human qualities to non-human things. Dawn is given the human ability to "creep."',
    difficulty: 'medium',
    createdAt: new Date()
  },
  {
    id: '50',
    subject: 'Use of English',
    questionText: 'Choose the correct sentence structure:',
    options: [
      { id: 'a', text: 'Hardly had I reached the station when the train left.' },
      { id: 'b', text: 'Hardly I had reached the station when the train left.' },
      { id: 'c', text: 'Hardly had I reached the station when left the train.' },
      { id: 'd', text: 'Had I hardly reached the station when the train left.' }
    ],
    correctAnswer: 'a',
    explanation: 'When a sentence begins with "Hardly," the auxiliary verb comes before the subject: "Hardly had I reached..."',
    difficulty: 'hard',
    createdAt: new Date()
  },
  {
    id: '51',
    subject: 'Use of English',
    questionText: 'Select the word closest in meaning to "prodigal":',
    options: [
      { id: 'a', text: 'frugal' },
      { id: 'b', text: 'wasteful' },
      { id: 'c', text: 'careful' },
      { id: 'd', text: 'wise' }
    ],
    correctAnswer: 'b',
    explanation: 'Prodigal means wasteful or extravagant, especially with money. It\'s the opposite of frugal.',
    difficulty: 'medium',
    createdAt: new Date()
  }
];

class QuestionModel {
  static getAll() {
    return questions;
  }

  static getBySubject(subject) {
    return questions.filter(q => q.subject.toLowerCase() === subject.toLowerCase());
  }

  static getById(id) {
    return questions.find(q => q.id === id);
  }

  static create(questionData) {
    const newQuestion = new Question(
      questionData.id || Date.now().toString(),
      questionData.subject,
      questionData.questionText,
      questionData.options,
      questionData.correctAnswer,
      questionData.explanation,
      questionData.difficulty
    );
    questions.push(newQuestion);
    return newQuestion;
  }

  static update(id, updatedData) {
    const index = questions.findIndex(q => q.id === id);
    if (index !== -1) {
      questions[index] = { ...questions[index], ...updatedData };
      return questions[index];
    }
    return null;
  }

  static delete(id) {
    const index = questions.findIndex(q => q.id === id);
    if (index !== -1) {
      return questions.splice(index, 1)[0];
    }
    return null;
  }

  static getRandomQuestions(subject, count = 10) {
    let subjectQuestions = questions;
    if (subject && subject !== 'all') {
      subjectQuestions = questions.filter(q => q.subject.toLowerCase() === subject.toLowerCase());
    }
    
    // Shuffle and return requested number of questions
    const shuffled = [...subjectQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}

module.exports = QuestionModel;