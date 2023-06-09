const Subcategory = require('../models/Subcategory');

// Controller to add a subcategory
exports.addSubcategory = async (req, res) => {
  try {
    const { name, categoryId } = req.body;

    // Create a new Subcategory instance
    const subcategory = new Subcategory({
      name,
      category: categoryId,
    });

    // Save the subcategory to the database
    await subcategory.save();

    res.status(201).json({ message: 'Subcategory added successfully' });
  } catch (error) {
    console.error('Error adding subcategory:', error);
    res.status(500).json({ error: 'Failed to add subcategory' });
  }
};
