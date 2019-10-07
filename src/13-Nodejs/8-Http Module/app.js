const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/products') {
        res.write('product list');
        res.end();
    }
});

server.listen(3000);
console.log('Listening port on 3000...');