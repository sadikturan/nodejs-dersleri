const express = require('express');
const router = express.Router();

const accountController = require('../controllers/account');
const csrf = require('../middleware/csrf');

router.get('/login', csrf, accountController.getLogin);
router.post('/login', csrf, accountController.postLogin);

router.get('/register', csrf, accountController.getRegister);
router.post('/register', csrf, accountController.postRegister);

router.get('/logout', csrf, accountController.getLogout);

router.get('/reset-password', csrf, accountController.getReset);
router.post('/reset-password', csrf, accountController.postReset);

module.exports = router;
