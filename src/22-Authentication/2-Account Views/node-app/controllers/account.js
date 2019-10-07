exports.getLogin = (req, res, next) => {
    res.render('account/login', {
        path: '/login',
        title: 'Login'
    });
}

exports.postLogin = (req, res, next) => {
    res.redirect('/');
}

exports.getRegister = (req, res, next) => {
    res.render('account/register', {
        path: '/register',
        title: 'Register'
    });
}

exports.postRegister = (req, res, next) => {
    res.redirect('/login');
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