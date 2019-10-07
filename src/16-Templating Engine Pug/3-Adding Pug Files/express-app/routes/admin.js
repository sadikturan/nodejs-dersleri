const express = require('express');
const router = express.Router();

const path = require('path');

// /admin/add-product=> GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product');
});

// /admin/add-product=> POST
router.post('/add-product', (req, res, next) => {
    // database kayıt
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;