const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.getLogin = (req, res, next) => {
    res.render('account/login', {
        path: '/login',
        title: 'Login',
        isAuthenticated: req.session.isAuthenticated
    });
}

exports.postLogin = (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;

    if ((email == 'email@gmail.com') && (password == '1234')) {
        req.session.isAuthenticated = true;
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
}

exports.getRegister = (req, res, next) => {
    res.render('account/register', {
        path: '/register',
        title: 'Register',
        isAuthenticated: req.session.isAuthenticated
    });
}

exports.postRegister = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email })
        .then(user => {
            if (user) {
                return res.redirect('/register');
            }

            return bcrypt.hash(password, 10);
        })
        .then(hashedPassword => {
            console.log(hashedPassword);

            const newUser = new User({
                name: name,
                email: email,
                password: hashedPassword,
                cart: { items: [] }
            });
            return newUser.save();
        })
        .then(() => {
            res.redirect('/login');
        }).catch(err => {
            console.log(err);
        })
}

exports.getReset = (req, res, next) => {
    res.render('account/reset', {
        path: '/reset',
        title: 'Reset'
    });
}

exports.postReset = (req, res, next) => {
    res.redirect('/login');
}