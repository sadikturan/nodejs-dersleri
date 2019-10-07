const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoDbStore = require('connect-mongodb-session')(session);
const csurf = require('csurf');

app.set('view engine', 'pug');
app.set('views', './views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');
const accountRoutes = require('./routes/account');

const errorController = require('./controllers/errors');

const User = require('./models/user');
const ConnectionString = 'mongodb+srv://sadikturan:WbQ5vdSRiQIfcmdp@cluster0-4nd5p.mongodb.net/node-app?retryWrites=true';

var store = new mongoDbStore({
    uri: ConnectionString,
    collection: 'mySessions'
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 3600000
    },
    store: store
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {

    if (!req.session.user) {
        return next();
    }

    User.findById(req.session.user._id)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => { console.log(err) });
})
app.use(csurf());

app.use('/admin', adminRoutes);
app.use(userRoutes);
app.use(accountRoutes);

app.use('/500', errorController.get500Page);
app.use(errorController.get404Page);

mongoose.connect(ConnectionString)
    .then(() => {
        console.log('connected to mongodb');
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })