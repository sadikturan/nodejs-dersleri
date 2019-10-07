const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
    console.log('loglama yapıldı...');
    next();
});

app.use('/add-product', (req, res, next) => {
    res.send('<h1>adding product page</h1>');
});

app.use('/product-list', (req, res, next) => {
    res.send('<h1>Product listing page</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>hello from express.js</h1>');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
