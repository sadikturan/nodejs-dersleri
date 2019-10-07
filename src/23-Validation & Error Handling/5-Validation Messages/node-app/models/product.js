const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'ürün ismi girmelisiniz'],
        minlength: [5, 'ürün ismi için minimum 5 karakter girmelisiniz.'],
        maxlength: [255, 'ürün ismi için maksimum 255 karakter girmelisiniz.'],
    },
    price: {
        type: Number,
        required: function () {
            return this.isActive;
        },
        min: 0,
        max: 10000
    },
    description: {
        type: String,
        minlength: 200
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
    category: {
        type: String,
        enum: ['telefon', 'bilgisayar']
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
    isActive: Boolean
    // categories: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Category',
    //         required: false
    //     }
    // ]
});

module.exports = mongoose.model('Product', productSchema);