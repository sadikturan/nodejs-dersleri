const express = require('express');
const router = express.Router();


const products = [
    { name: 'Samsung S8', price: 3000, image: '1.jpg', description: 'iyi telefon' },
    { name: 'Samsung S7', price: 2000, image: '2.jpg', description: 'idare eder' },
    { name: 'Samsung S9', price: 4000, image: '3.jpg', description: 'çok iyi' },
    { name: 'IPhone 7S', price: 4500, image: '4.jpg', description: 'güzel telefon' }
]


// /admin/add-product=> GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product',
        {
            title: 'Add a New Product',
            path: '/admin/add-product'
        });
});

// /admin/add-product=> POST
router.post('/add-product', (req, res, next) => {
    products.push({ name: req.body.name, price: req.body.price, image: req.body.image, description: req.body.description });
    console.log(req.body);
    res.redirect('/');
});

exports.routes = router;
exports.products = products;