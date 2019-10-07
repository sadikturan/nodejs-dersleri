const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'ürün ismi girmelisiniz'],
        minlength: [5, 'ürün ismi için minimum 5 karakter girmelisiniz.'],
        maxlength: [255, 'ürün ismi için maksimum 255 karakter girmelisiniz.'],
        lowercase: true,
        // uppercase: true
        trim: true
    },
    price: {
        type: Number,
        required: function () {
            return this.isActive;
        },
        min: 0,
        max: 10000,
        get: value => Math.round(value), //10.2 => 10 10.8=> 11
        set: value => Math.round(value)  // 10.2 => 10 10.8=>11
    },
    description: {
        type: String,
        minlength: 10
    },
    imageUrl: String,
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tags: {
        type: Array,
        validate: {
            validator: function (value) {
                return value && value.length > 0;
            },
            message: 'ürün için en az bir etiket giriniz'
        }
    },
    isActive: Boolean,
    categories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: false
        }
    ]
});

module.exports = mongoose.model('Product', productSchema);