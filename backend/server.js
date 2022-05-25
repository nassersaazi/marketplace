const express = require("express");
const cors = require("cors");
const pool = require("./db");
//import data from './data.js';


const app = express();

// middleware
app.use(cors());
app.use(express.json());

// ROUTES

//app.get('/api/services', (req, res) => {
//  res.send(data.services);
//});

app.post("/api/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
