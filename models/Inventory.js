const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subcategory',
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  mrp: {
    type: Number,
    required: true,
  },
  sp: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model for sellers
    required: true,
  },
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
