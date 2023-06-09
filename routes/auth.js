const express = require('express');
const bcrypt = require('bcrypt');
const Seller = require('../models/Seller');

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  try {
    const { email, businessName, password, confirmPassword } = req.body;

    // Check if email is already registered
    const existingSeller = await Seller.findOne({ email });
    if (existingSeller) {
      return res.status(409).json({ message: 'Email is already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new seller
    const seller = new Seller({
      email,
      businessName,
      password: hashedPassword,
    });

    // Save the seller to the database
    await seller.save();

    // Return success message
    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
