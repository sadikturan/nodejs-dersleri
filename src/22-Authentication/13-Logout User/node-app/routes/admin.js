const express = require('express');
const router = express.Router();

const isAuthenticated = require('../middleware/authentication');

const adminController = require('../controllers/admin');

router.get('/products', isAuthenticated, adminController.getProducts);

router.get('/add-product', isAuthenticated, adminController.getAddProduct);

router.post('/add-product', isAuthenticated, adminController.postAddProduct);

router.get('/products/:productid', isAuthenticated, adminController.getEditProduct);

router.post('/products', isAuthenticated, adminController.postEditProduct);

router.post('/delete-product', isAuthenticated, adminController.postDeleteProduct);

router.get('/add-category', isAuthenticated, adminController.getAddCategory);

router.post('/add-category', isAuthenticated, adminController.postAddCategory);

router.get('/categories', isAuthenticated, adminController.getCategories);

router.get('/categories/:categoryid', isAuthenticated, adminController.getEditCategory);

router.post('/categories', isAuthenticated, adminController.postEditCategory);

router.post('/delete-category', isAuthenticated, adminController.postDeleteCategory);

module.exports = router;   