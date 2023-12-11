const pool = require("../db");

// Create a note
exports.createNote = async (req, res) => {
  try {
    const { description } = req.body;

    if (!description) {
      return res.status(400).json({ error: "Description is required" });
    }

    const newNote = await pool.query(
      "INSERT INTO note (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newNote.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
};

// Get all Notes
exports.getAllNotes = async (req, res) => {
  try {
    const allNotes = await pool.query("SELECT * FROM note");
    res.json(allNotes.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
};

//Get One note
exports.getOneNote = async (req, res) => {
  try {
    const { id } = req.params;
    const oneNote = await pool.query("SELECT * FROM note WHERE note_id = $1", [
      id,
    ]);
    res.json(oneNote.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};

//Update a note

exports.updateOneNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updatedNote = await pool.query(
      "UPDATE note SET description = $1 WHERE note_id= $2",
      [description, id]
    );

    res.json("Note has been updated");
  } catch (err) {
    console.error(err.message);
  }
};

//Delete a note

exports.deleteOneNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteNote = await pool.query("DELETE FROM note WHERE note_id = $1", [
      id,
    ]);
    res.json("Note has been deleted");
  } catch (err) {
    console.error(err.message);
  }
};
