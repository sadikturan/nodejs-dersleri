const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');

const connection = require('./utility/database');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');

const errorController = require('./controllers/errors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/admin', adminRoutes);
app.use(userRoutes);

connection.execute('SELECT name,price FROM products')
    .then((result) => {
        console.log(result[0]);
    }).catch((err) => {
        console.log(err);
    });

app.use(errorController.get404Page);


app.listen(3000, () => {
    console.log('listening on port 3000');
});
