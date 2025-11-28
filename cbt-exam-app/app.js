const express = require('express');
const path = require('path');
const session = require('express-session');
const methodOverride = require('./middleware/methodOverride');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride); // Add method override middleware
app.use(session({
  secret: 'cbt-exam-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true in production with HTTPS
}));

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const adminRoutes = require('./routes/admin');
const examRoutes = require('./routes/exam');

// Routes
app.use('/admin', adminRoutes);
app.use('/', examRoutes);

// Home route
app.get('/', (req, res) => {
  res.render('index', { title: 'CBT Exam System' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`CBT Exam System running on port ${PORT}`);
});

module.exports = app;