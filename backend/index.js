const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware
const app = express();
const PORT = process.env.PORT || 30001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the cors middleware
app.use(cors());

const pool = require("./db.js");

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Import noteController
// const noteController = require("./controller/noteController.js");

// app.post("/notes", noteController.createNote);
// app.get("/notes", noteController.getAllNotes);
// app.get("/notes/:id", noteController.getOneNote);
// app.put("/notes/:id", noteController.updateOneNote);
// app.delete("/notes/:id", noteController.deleteOneNote);

// users
const usersController = require("./controller/usersController.js");

app.post("/users", usersController.createUser);
app.get("/users", usersController.getAllUsers);
app.post("/login", usersController.login);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
