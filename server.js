const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');

const app = express();
const port = 8000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1/seller-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Set up routes for the dashboard functionality
app.use('/api/dashboard', dashboardRoutes);

// Set up routes
app.use('/api/auth', authRoutes);

// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));
