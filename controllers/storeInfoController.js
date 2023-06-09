const StoreInfo = require('../models/StoreInfo');

// Controller to add store info
exports.addStoreInfo = async (req, res) => {
  try {
    const { address, gst, logo, storeTimings } = req.body;

    // Create a new StoreInfo instance
    const storeInfo = new StoreInfo({
      address,
      gst,
      logo,
      storeTimings,
      seller: req.user._id, // Assuming you have authentication implemented to get the current user ID
    });

    // Save the store info to the database
    await storeInfo.save();

    res.status(201).json({ message: 'Store info added successfully' });
  } catch (error) {
    console.error('Error adding store info:', error);
    res.status(500).json({ error: 'Failed to add store info' });
  }
};
