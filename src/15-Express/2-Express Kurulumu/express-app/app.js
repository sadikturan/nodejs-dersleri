const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/api/products', (req, res) => {
    res.send('ürünler listelendi');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
