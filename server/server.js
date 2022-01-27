require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db");
const express = require("express");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Get all restaurants : http://localhost:3006/api/v1/restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM Restaurants;");
    // console.log(rows);
    res.status(200).json({
      status: "success",
      results: rows.length,
      data: { restaurants: rows },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occured ");
  }
});

// Get a restaurant : http://localhost:3006/api/v1/restaurants/11
app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM Restaurants WHERE id= $1", [
      req.params.id,
    ]);
    res.status(200).json({ status: "success", data: { restaurant: rows[0] } });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occured ");
  }
});

// Create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
  try {
    const { rows } = await db.query(
      "INSERT INTO restaurants ( name, location, price_range) VALUES ($1, $2, $3 ) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );
    // "Returning * " after insert command is to get the inserted row in the postgresql
    res.status(200).json({
      status: "success",
      data: { restaurant: rows[0] },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message:
        "Couldn't add the restaurants. Please fill all the required fields",
    });
  }
});

// Update
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const { rows } = await db.query(
      "UPDATE Restaurants SET name = $1, location = $2, price_range = $3 WHERE id= $4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    // console.log(results);
    res.status(200).json({ status: "success", data: { restaurant: rows[0] } });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message:
        "Couldn't add the restaurants. Please fill all the required fields",
    });
  }
});

// Delete
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const result = await db.query("DELETE FROM Restaurants WHERE id= $1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      message: "Deleted a restaurant with id " + req.params.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occured ");
  }
});

// app.use("/api/v1/restaurants", require());

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Server up and listening at port " + port);
});
