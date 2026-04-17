const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

let items = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/', (req, res) => {
    res.send('Hello World!999');
});



app.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate if username and password are provided
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Username and password are required'
      });
    }

    // Simple authentication logic (replace with real validation)
    if (username === 'admin' && password === 'password123') {
      return res.status(200).json({
        success: true,
        message: 'Login successful',
        token: 'fake-jwt-token-12345',
        user: { id: 1, username: username }
      });
    } else {
      return res.status(401).json({
        success: false,
        message: 'Invalid username or password'
      });
    }
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: err.message
  });
});

const server = app.listen(PORT, () => {
    console.log(`[${new Date().toISOString()}] Server running on http://localhost:${PORT}`);
});