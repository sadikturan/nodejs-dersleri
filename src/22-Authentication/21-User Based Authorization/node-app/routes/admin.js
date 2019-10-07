const express = require('express');
const router = express.Router();

const isAuthenticated = require('../middleware/authentication');
const csrf = require('../middleware/csrf');

const adminController = require('../controllers/admin');

router.get('/products', csrf, isAuthenticated, adminController.getProducts);

router.get('/add-product', csrf, isAuthenticated, adminController.getAddProduct);

router.post('/add-product', csrf, isAuthenticated, adminController.postAddProduct);

router.get('/products/:productid', csrf, isAuthenticated, adminController.getEditProduct);

router.post('/products', csrf, isAuthenticated, adminController.postEditProduct);

router.post('/delete-product', csrf, isAuthenticated, adminController.postDeleteProduct);

router.get('/add-category', csrf, isAuthenticated, adminController.getAddCategory);

router.post('/add-category', csrf, isAuthenticated, adminController.postAddCategory);

router.get('/categories', csrf, isAuthenticated, adminController.getCategories);

router.get('/categories/:categoryid', csrf, isAuthenticated, adminController.getEditCategory);

router.post('/categories', csrf, isAuthenticated, adminController.postEditCategory);

router.post('/delete-category', csrf, isAuthenticated, adminController.postDeleteCategory);

module.exports = router;   