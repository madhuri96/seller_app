const Inventory = require('../models/Inventory');

// Controller to add inventory
exports.addInventory = async (req, res) => {
  try {
    const { categoryId, subcategoryId, productName, mrp, sp, qty, images } =
      req.body;

    // Create a new Inventory instance
    const inventory = new Inventory({
      category: categoryId,
      subcategory: subcategoryId,
      productName,
      mrp,
      sp,
      qty,
      images,
      seller: req.user._id, // Assuming you have authentication implemented to get the current user ID
    });

    // Save the inventory to the database
    await inventory.save();

    res.status(201).json({ message: 'Inventory added successfully' });
  } catch (error) {
    console.error('Error adding inventory:', error);
    res.status(500).json({ error: 'Failed to add inventory' });
  }
};
