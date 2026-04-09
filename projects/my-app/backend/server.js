const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require('./routes');
app.use('/api', userRoutes); // Prefix routes with /api for clarity

// In-memory tasks (could later be moved to a database)
let tasks = [
  { id: 1, name: 'Task 1' },
  { id: 2, name: 'Task 2' }
];

// Task routes (could also move to separate route file)
app.get('/tasks', (req, res) => {
  res.json(tasks); // Use res.json for consistent JSON responses
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});