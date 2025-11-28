const express = require('express');
const router = express.Router();
const QuestionModel = require('../models/Question');

// Admin login page
router.get('/login', (req, res) => {
  res.render('admin/login', { title: 'Admin Login', error: req.query.error });
});

// Admin authentication (simplified for demo)
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Simple admin credentials check (in production, use proper authentication)
  if (username === 'admin' && password === 'admin123') {
    req.session.admin = { username };
    res.redirect('/admin/dashboard');
  } else {
    res.redirect('/admin/login?error=Invalid credentials');
  }
});

// Middleware to protect admin routes
const requireAdmin = (req, res, next) => {
  if (!req.session.admin) {
    res.redirect('/admin/login');
    return;
  }
  next();
};

// Admin dashboard
router.get('/dashboard', requireAdmin, (req, res) => {
  const subjects = [...new Set(QuestionModel.getAll().map(q => q.subject))];
  res.render('admin/dashboard', { 
    title: 'Admin Dashboard', 
    admin: req.session.admin,
    subjects,
    totalQuestions: QuestionModel.getAll().length
  });
});

// View all questions
router.get('/questions', requireAdmin, (req, res) => {
  const questions = QuestionModel.getAll();
  res.render('admin/questions', { 
    title: 'Manage Questions', 
    admin: req.session.admin,
    questions 
  });
});

// Add new question form
router.get('/questions/add', requireAdmin, (req, res) => {
  const subjects = [...new Set(QuestionModel.getAll().map(q => q.subject))];
  res.render('admin/add-question', { 
    title: 'Add New Question', 
    admin: req.session.admin,
    subjects 
  });
});

// Create new question
router.post('/questions', requireAdmin, (req, res) => {
  const { subject, questionText, optionTexts, correctAnswer, explanation, difficulty } = req.body;
  
  // Process options
  const options = optionTexts.map((text, index) => ({
    id: String.fromCharCode(97 + index), // a, b, c, d...
    text: text.trim()
  })).filter(opt => opt.text); // Remove empty options
  
  const newQuestion = {
    subject,
    questionText,
    options,
    correctAnswer,
    explanation,
    difficulty: difficulty || 'medium'
  };
  
  QuestionModel.create(newQuestion);
  res.redirect('/admin/questions');
});

// Edit question form
router.get('/questions/:id/edit', requireAdmin, (req, res) => {
  const question = QuestionModel.getById(req.params.id);
  if (!question) {
    return res.status(404).send('Question not found');
  }
  
  res.render('admin/edit-question', { 
    title: 'Edit Question', 
    admin: req.session.admin,
    question 
  });
});

// Update question
router.post('/questions/:id', requireAdmin, (req, res) => {
  // Handle method override
  if (req.body._method === 'PUT') {
    const { subject, questionText, optionTexts, correctAnswer, explanation, difficulty } = req.body;
    
    // Process options
    const options = optionTexts.map((text, index) => ({
      id: String.fromCharCode(97 + index), // a, b, c, d...
      text: text.trim()
    })).filter(opt => opt.text); // Remove empty options
    
    const updatedData = {
      subject,
      questionText,
      options,
      correctAnswer,
      explanation,
      difficulty: difficulty || 'medium'
    };
    
    QuestionModel.update(req.params.id, updatedData);
    res.redirect('/admin/questions');
  } else if (req.body._method === 'DELETE') {
    // Handle delete
    QuestionModel.delete(req.params.id);
    res.redirect('/admin/questions');
  } else {
    // Regular POST for creating questions
    const { subject, questionText, optionTexts, correctAnswer, explanation, difficulty } = req.body;
    
    // Process options
    const options = optionTexts.map((text, index) => ({
      id: String.fromCharCode(97 + index), // a, b, c, d...
      text: text.trim()
    })).filter(opt => opt.text); // Remove empty options
    
    const newQuestion = {
      subject,
      questionText,
      options,
      correctAnswer,
      explanation,
      difficulty: difficulty || 'medium'
    };
    
    QuestionModel.create(newQuestion);
    res.redirect('/admin/questions');
  }
});

// Alternative route for PUT method (in case method override doesn't work in all scenarios)
router.put('/questions/:id', requireAdmin, (req, res) => {
  const { subject, questionText, optionTexts, correctAnswer, explanation, difficulty } = req.body;
  
  // Process options
  const options = optionTexts.map((text, index) => ({
    id: String.fromCharCode(97 + index), // a, b, c, d...
    text: text.trim()
  })).filter(opt => opt.text); // Remove empty options
  
  const updatedData = {
    subject,
    questionText,
    options,
    correctAnswer,
    explanation,
    difficulty: difficulty || 'medium'
  };
  
  QuestionModel.update(req.params.id, updatedData);
  res.redirect('/admin/questions');
});

// Delete question route
router.delete('/questions/:id', requireAdmin, (req, res) => {
  QuestionModel.delete(req.params.id);
  res.redirect('/admin/questions');
});

// Admin logout
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;