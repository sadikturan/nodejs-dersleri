const express = require('express');
const router = express.Router();

const isAdmin = require('../middleware/isAdmin');
const locals = require('../middleware/locals');

const adminController = require('../controllers/admin');

router.get('/products', locals, isAdmin, adminController.getProducts);

router.get('/add-product', locals, isAdmin, adminController.getAddProduct);

router.post('/add-product', locals, isAdmin, adminController.postAddProduct);

router.get('/products/:productid', locals, isAdmin, adminController.getEditProduct);

router.post('/products', locals, isAdmin, adminController.postEditProduct);

router.post('/delete-product', locals, isAdmin, adminController.postDeleteProduct);

router.get('/add-category', locals, isAdmin, adminController.getAddCategory);

router.post('/add-category', locals, isAdmin, adminController.postAddCategory);

router.get('/categories', locals, isAdmin, adminController.getCategories);

router.get('/categories/:categoryid', locals, isAdmin, adminController.getEditCategory);

router.post('/categories', locals, isAdmin, adminController.postEditCategory);

router.post('/delete-category', locals, isAdmin, adminController.postDeleteCategory);

module.exports = router;   