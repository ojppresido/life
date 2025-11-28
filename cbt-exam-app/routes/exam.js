const express = require('express');
const router = express.Router();
const QuestionModel = require('../models/Question');

// Home page
router.get('/', (req, res) => {
  const subjects = [...new Set(QuestionModel.getAll().map(q => q.subject))];
  res.render('index', { 
    title: 'CBT Exam System', 
    subjects 
  });
});

// Start exam page - select subject and number of questions
router.get('/start-exam', (req, res) => {
  const subjects = [...new Set(QuestionModel.getAll().map(q => q.subject))];
  res.render('exam/start', { 
    title: 'Start Exam', 
    subjects 
  });
});

// Begin exam
router.post('/begin-exam', (req, res) => {
  const { subject, numQuestions, timeLimit } = req.body;
  const questionCount = parseInt(numQuestions) || 10;
  const timeInMinutes = parseInt(timeLimit) || 30;
  
  // Get random questions for the exam
  const examQuestions = QuestionModel.getRandomQuestions(subject, questionCount);
  
  // Store exam in session
  req.session.exam = {
    questions: examQuestions,
    startTime: new Date(),
    timeLimit: timeInMinutes * 60 * 1000, // Convert to milliseconds
    subject,
    numQuestions: examQuestions.length
  };
  
  res.redirect('/exam/take');
});

// Take exam page
router.get('/exam/take', (req, res) => {
  if (!req.session.exam) {
    return res.redirect('/start-exam');
  }
  
  const { questions, startTime, timeLimit } = req.session.exam;
  const timeRemaining = Math.max(0, timeLimit - (Date.now() - startTime.getTime()));
  
  res.render('exam/take', { 
    title: 'Take Exam', 
    questions,
    timeRemaining: Math.floor(timeRemaining / 1000), // Convert to seconds
    subject: req.session.exam.subject
  });
});

// Submit exam
router.post('/submit-exam', (req, res) => {
  if (!req.session.exam) {
    return res.redirect('/start-exam');
  }
  
  const { questions } = req.session.exam;
  const userAnswers = req.body.answers || {};
  
  // Calculate results
  let score = 0;
  let total = questions.length;
  const results = questions.map(question => {
    const userAnswer = userAnswers[question.id];
    const isCorrect = userAnswer === question.correctAnswer;
    
    if (isCorrect) {
      score++;
    }
    
    return {
      question,
      userAnswer,
      isCorrect,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation
    };
  });
  
  // Store results in session
  req.session.examResults = {
    score,
    total,
    percentage: Math.round((score / total) * 100),
    results
  };
  
  res.redirect('/exam/results');
});

// Show exam results with explanations
router.get('/exam/results', (req, res) => {
  if (!req.session.examResults) {
    return res.redirect('/start-exam');
  }
  
  const results = req.session.examResults;
  res.render('exam/results', { 
    title: 'Exam Results', 
    results: results
  });
});

// Clear exam data
router.get('/clear-exam', (req, res) => {
  delete req.session.exam;
  delete req.session.examResults;
  res.redirect('/');
});

module.exports = router;