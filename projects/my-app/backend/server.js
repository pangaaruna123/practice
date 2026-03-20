const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
const userRoutes = require('./routes');
app.use('/api', userRoutes);


app.listen(3000, () => {
  console.log('Server running on port 3000');
});
