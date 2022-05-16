import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/services', (req, res) => {
  res.send(data.services);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
