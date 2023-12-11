CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  your_name VARCHAR(255) NOT NULL,
  father_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(15) NOT NULL,
  password VARCHAR(255) NOT NULL
);
