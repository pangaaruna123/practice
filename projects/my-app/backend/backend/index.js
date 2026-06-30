const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
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
  const { username, password } = req.body;

  res.json({
    message: "Data received successfully",
    data: { username, password }
  });
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: err.message
  });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});