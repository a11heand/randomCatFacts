/**
 * Code Filename: ComplexApp.js
 *
 * Description: This code demonstrates a complex web application that manages a database
 * of customer orders. It provides features such as CRUD operations, data validation,
 * user authentication, and handling of various edge cases.
 *
 * Please note that this code is written as an illustration and may not function as a complete
 * application. It should be used for demonstrative purposes only.
 */

// Define global variables
const MIN_AGE = 18;
let isUserAuthenticated = false;
let currentUser = null;
let orders = [];

// Import required libraries
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validateOrder, validateUser } = require('./validation');

// Create express app and configure middleware
const app = express();
app.use(bodyParser.json());

// Define routes
app.post('/register', (req, res) => {
  const { error } = validateUser(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const { name, email, password, age } = req.body;

  if (age < MIN_AGE) {
    return res.status(400).send('User must be at least 18 years old.');
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const user = { name, email, password: hashedPassword, age };
  // Save user to the database...

  res.send('User registered successfully.');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Fetch user from the database...
  const user = { email, password: hashedPasswordFromDB, age };

  if (!user) {
    return res.status(404).send('User not found.');
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).send('Invalid password.');
  }

  const token = jwt.sign({ userId: user.id }, 'secret_key');

  res.send({ token });
});

app.use((req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(token, 'secret_key');
    const userId = decoded.userId;

    // Fetch user from the database using userId...
    const user = { id: userId, name, email, age };

    if (!user) {
      return res.status(404).send('User not found.');
    }

    currentUser = user;
    isUserAuthenticated = true;

    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
});

app.get('/orders', (req, res) => {
  // Fetch orders from the database...
  res.send(orders);
});

app.post('/orders', (req, res) => {
  const { error } = validateOrder(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const { product, quantity } = req.body;
  const order = { product, quantity };

  // Save order to the database...
  orders.push(order);

  res.send('Order placed successfully.');
});

// Start the server
app.listen(3000, () => console.log('Server is running on port 3000.'));