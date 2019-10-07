const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.set('view engine', 'pug');
app.set('views', './views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');
const accountRoutes = require('./routes/account');

const errorController = require('./controllers/errors');

const User = require('./models/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 3600000
    }
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findOne({ name: 'sadikturan' })
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => { console.log(err) });
})

app.use('/admin', adminRoutes);
app.use(userRoutes);
app.use(accountRoutes);

app.use(errorController.get404Page);

mongoose.connect('mongodb+srv://sadikturan:WbQ5vdSRiQIfcmdp@cluster0-4nd5p.mongodb.net/node-app?retryWrites=true')
    .then(() => {
        console.log('connected to mongodb');

        User.findOne({ name: 'sadikturan' })
            .then(user => {
                if (!user) {

                    user = new User({
                        name: 'sadikturan',
                        email: 'email@gmail.com',
                        cart: {
                            items: []
                        }
                    });
                    return user.save();
                }
                return user;
            })
            .then(user => {
                console.log(user);
                app.listen(3000);
            })
            .catch(err => { console.log(err) });
    })
    .catch(err => {
        console.log(err);
    })