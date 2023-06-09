const mongoose = require('mongoose');

const storeInfoSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  gst: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
  },
  storeTimings: {
    type: String,
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model for sellers
    required: true,
  },
});

const StoreInfo = mongoose.model('StoreInfo', storeInfoSchema);

module.exports = StoreInfo;
