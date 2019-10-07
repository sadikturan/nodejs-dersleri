const express = require('express');
const router = express.Router();

const admin = require('./admin');

router.get('/', (req, res, next) => {
    res.render('index',
        {
            title: 'Homepage',
            products: admin.products,
            path: '/'
        });
});

module.exports = router;