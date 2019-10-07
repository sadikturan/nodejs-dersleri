const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');

const mongoose = require('mongoose');

const errorController = require('./controllers/errors');

const User = require('./models/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/*
app.use((req, res, next) => {
    User.findByUserName('sadikturan')
        .then(user => {
            req.user = new User(user.name, user.email, user.cart, user._id);
            console.log(req.user);
            next();
        })
        .catch(err => { console.log(err) });
})

*/

app.use('/admin', adminRoutes);
app.use(userRoutes);

app.use(errorController.get404Page);

/*
mongoConnect(() => {

    User.findByUserName('sadikturan')
        .then(user => {
            if (!user) {
                user = new User('sadikturan', 'email@sadikturan.com');
                return user.save();
            }
            return user;
        })
        .then(user => {
            console.log(user);
            app.listen(3000);
        })
        .catch(err => { console.log(err) });
});

*/

mongoose.connect('mongodb+srv://sadikturan:WbQ5vdSRiQIfcmdp@cluster0-4nd5p.mongodb.net/node-app?retryWrites=true')
    .then(() => {
        console.log('connected to mongodb');
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })