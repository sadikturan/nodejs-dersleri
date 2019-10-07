const mongoose = require('mongoose');
const { isEmail } = require('validator');

const loginSchema = mongoose.Schema({
    email: {
        type: String,
        validate: [isEmail, 'hatalı eposta adresi']
    },
    password: {
        type: String,
        required: [true, 'parola girmelisiniz']
    }
});


module.exports = mongoose.model('Login', loginSchema);