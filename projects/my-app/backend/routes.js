const express = require('express');
const router = express.Router();

const items = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

router.get('/users', (req, res) => {
  res.send('All users');
});

router.get('/items', (req, res) => {
  res.json(items);
});

module.exports = router;