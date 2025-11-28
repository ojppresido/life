# CBT Exam System

A Computer-Based Testing (CBT) system designed for secondary school exams. This application allows administrators to manage questions and students to take timed exams with detailed explanations.

## Features

### For Administrators:
- Login/Logout functionality
- Add, edit, and delete exam questions
- Organize questions by subject
- Set difficulty levels
- Provide explanations for each question

### For Students:
- Take timed exams
- Select subjects and number of questions
- Receive immediate feedback
- View detailed explanations for each question after the exam
- Track performance with scores and progress

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templating)
- Bootstrap 5
- Express Session for authentication

## Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Start the application:

```bash
npm start
```

Or for development with auto-restart:

```bash
npm run dev
```

## Usage

### Admin Access
- Navigate to `/admin/login`
- Default credentials: 
  - Username: `admin`
  - Password: `admin123`

### Taking an Exam
- Visit the homepage and click "Start Exam"
- Select a subject, number of questions, and time limit
- Answer questions within the time limit
- Review results with explanations after submission

## Project Structure

```
cbt-exam-app/
├── app.js                 # Main application file
├── models/
│   └── Question.js        # Question model and data storage
├── routes/
│   ├── admin.js           # Admin routes
│   └── exam.js            # Exam routes
├── views/
│   ├── layout.ejs         # Main layout
│   ├── index.ejs          # Home page
│   ├── exam/
│   │   ├── start.ejs      # Exam start page
│   │   ├── take.ejs       # Exam interface
│   │   └── results.ejs    # Results page
│   └── admin/
│       ├── login.ejs      # Admin login
│       ├── dashboard.ejs  # Admin dashboard
│       ├── questions.ejs  # Manage questions
│       ├── add-question.ejs # Add question form
│       └── edit-question.ejs # Edit question form
├── public/
│   ├── css/
│   │   └── style.css      # Custom styles
│   └── js/
│       └── main.js        # Client-side JavaScript
└── middleware/
    └── methodOverride.js  # Method override middleware
```

## Default Questions

The application comes with sample questions in Mathematics, English, and Physics to demonstrate functionality.

## Security Notes

This is a demonstration application. For production use:
- Implement proper authentication with password hashing
- Use a proper database (MongoDB, PostgreSQL, etc.)
- Add input validation and sanitization
- Implement rate limiting
- Use HTTPS in production

## License

This project is licensed under the MIT License.