module.exports = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}