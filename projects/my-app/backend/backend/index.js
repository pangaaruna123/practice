const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
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

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});