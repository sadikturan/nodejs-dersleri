const mongoose = require('mongoose');

categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String
});

module.exports = mongoose.model('Category', categorySchema);