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