const express = require('express');
const router = express.Router();
const storeInfoController = require('../controllers/storeInfoController');
const categoryController = require('../controllers/categoryController');
const subcategoryController = require('../controllers/subcategoryController');
const inventoryController = require('../controllers/inventoryController');

// Add store info route
router.post('/store-info', storeInfoController.addStoreInfo);

// Add category and subcategory routes
router.post('/categories', categoryController.addCategory);
router.post('/subcategories', subcategoryController.addSubcategory);

// Add inventory route
router.post('/inventory', inventoryController.addInventory);

module.exports = router;
