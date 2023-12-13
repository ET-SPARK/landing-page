const pool = require("../db");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

exports.createUser = async (req, res) => {
  try {
    const { your_name, father_name, phone_number, password } = req.body;

    // Validate required fields
    if (!your_name || !father_name || !phone_number || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newUser = await pool.query(
      "INSERT INTO users (your_name, father_name, phone_number, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [your_name, father_name, phone_number, password]
    );

    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
};

const generateSecretKey = () => {
  return crypto.randomBytes(32).toString("hex");
};

const secretKey = generateSecretKey();

exports.login = async (req, res) => {
  try {
    const { phone_number, password } = req.body;

    // Validate required fields
    if (!phone_number || !password) {
      return res
        .status(400)
        .json({ error: "Phone number and password are required" });
    }

    // Check if the user exists with the provided phone_number
    const user = await pool.query(
      "SELECT * FROM users WHERE phone_number = $1",
      [phone_number]
    );

    if (user.rows.length === 0) {
      // User with the provided phone number not found
      return res
        .status(401)
        .json({ error: "Invalid phone number or password" });
    }

    // Verify the password
    // In a real-world scenario, you would use a library like bcrypt to compare hashed passwords
    if (user.rows[0].password !== password) {
      return res
        .status(401)
        .json({ error: "Invalid phone number or password" });
    }

    // User is authenticated, create a JWT token
    const token = jwt.sign({ user: user.rows[0] }, secretKey);

    // Send the token to the client
    res.json({ message: "Login successful", user: user.rows[0], token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
};

//

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
};
