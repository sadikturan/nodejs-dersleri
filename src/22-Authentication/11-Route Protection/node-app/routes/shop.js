const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');
const isAuthenticated = require('../middleware/authentication');

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productid', shopController.getProduct);

router.get('/categories/:categoryid', shopController.getProductsByCategoryId);

router.get('/cart', isAuthenticated, shopController.getCart);

router.post('/cart', isAuthenticated, shopController.postCart);

router.post('/delete-cartitem', isAuthenticated, shopController.postCartItemDelete);

router.get('/orders', isAuthenticated, shopController.getOrders);

router.post('/create-order', isAuthenticated, shopController.postOrder);

module.exports = router;