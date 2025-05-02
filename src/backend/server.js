const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://abdulmuqsit619:cosc412@cosc412team4.c54ccjk.mongodb.net/?retryWrites=true&w=majority&appName=COSC412Team4')
  .then(() => console.log("Connected to MongoDB Atlas!"))
  .catch(err => console.error("MongoDB connection error: ", err));

const secretKey = 'yoursecretkey';

// Registration route
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) return res.status(400).send('User already exists');

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();

  res.send('User registered successfully');
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(400).send('Invalid username or password');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).send('Invalid username or password');

  const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' });

  res.json({ message: 'Login successful', token });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
