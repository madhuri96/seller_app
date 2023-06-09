const Category = require('../models/Category');

// Controller to add a category
exports.addCategory = async (req, res) => {
  try {
    const { name } = req.body;

    // Create a new Category instance
    const category = new Category({
      name,
    });

    // Save the category to the database
    await category.save();

    res.status(201).json({ message: 'Category added successfully' });
  } catch (error) {
    console.error('Error adding category:', error);
    res.status(500).json({ error: 'Failed to add category' });
  }
};
