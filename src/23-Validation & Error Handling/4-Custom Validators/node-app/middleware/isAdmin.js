module.exports = (req, res, next) => {

    if (!req.session.isAuthenticated) {
        return res.redirect('/login');
    }
    console.log(req.user.isAdmin);
    if (!req.user.isAdmin) {
        return res.redirect('/');
    }

    next();
}