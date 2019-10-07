const express = require('express');
const router = express.Router();

const path = require('path');

router.get('/', (req, res, next) => {

    const products = [
        { name: 'Samsung S8', price: 3000, image: '1.jpg', description: 'iyi telefon' },
        { name: 'Samsung S7', price: 2000, image: '2.jpg', description: 'idare eder' },
        { name: 'Samsung S9', price: 4000, image: '3.jpg', description: 'çok iyi' },
        { name: 'IPhone 7S', price: 4500, image: '4.jpg', description: 'güzel telefon' }
    ]

    res.render('index', { title: 'Homepage', products: products });
});

module.exports = router;