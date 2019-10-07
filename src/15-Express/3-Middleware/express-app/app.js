const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("middleware 1 çalıştırıldı.");
    next();
});

app.use((req, res, next) => {
    console.log("middleware 2 çalıştırıldı.");
    res.send('<h1>hello from express.js</h1>');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
