const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON bodies

//Connect to MongoDB
connectDB();

// Test route
app.get('/', (req, res) => {
  res.send('Backend is working');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});