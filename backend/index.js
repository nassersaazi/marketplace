const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

const today = new Date();

// ROUTES



app.post("/api/services", async (req, res) => {
  try {
    const { s_name,s_description,organisation } = req.body;
    const upload_date = today.toISOString();
    const image_url = 'https://ubuntunet.net/app/uploads/2022/02/africa-net-works.jpeg';
    const newService = await pool.query(
      "INSERT INTO services (s_name,s_description,upload_date,organisation, image_url) VALUES($1,$2,$3,$4, $5) RETURNING *",
      [s_name,s_description,upload_date,organisation, image_url]
    );

    res.json(newService.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});


app.get("/api/services", async (req, res) => {
  try {
    const allServices = await pool.query("SELECT * FROM services");
    res.json(allServices.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get a service

app.get("/api/services/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const service = await pool.query("SELECT * FROM services WHERE service_id = $1", [
      id
    ]);

    res.json(service.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update a service

app.put("/api/services/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { s_description } = req.body;
    const updateService = await pool.query(
      "UPDATE services SET s_description = $1 WHERE service_id = $2",
      [s_description, id]
    );

    res.json("Service was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a service

app.delete("/api/services/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM services WHERE service_id = $1", [
      id
    ]);
    res.json("Service was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
