const nodemailer = require("nodemailer");
const config = require("../config");

var tranporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: config.email.username,
        pass: config.email.password
    }
});

module.exports = tranporter;