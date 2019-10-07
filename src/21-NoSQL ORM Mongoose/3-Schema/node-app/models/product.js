const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: String,
    imageUrl: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);
















// const getDb = require('../utility/database').getdb;
// const mongodb = require('mongodb');

// class Product {
//     constructor(name, price, description, imageUrl, categories, id, userId) {
//         this.name = name;
//         this.price = price;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this.categories = (categories && !Array.isArray(categories)) ? Array.of(categories) : categories;
//         this._id = id ? new mongodb.ObjectID(id) : null;
//         this.userId = userId;
//     }

//     save() {
//         let db = getDb();

//         if (this._id) {
//             db = db.collection('products').updateOne({ _id: this._id }, { $set: this });
//         } else {
//             db = db.collection('products').insertOne(this);
//         }

//         return db
//             .then(result => {
//                 console.log(result);
//             })
//             .catch(err => { console.log(err) });
//     }

//     static findAll() {
//         const db = getDb();
//         return db.collection('products')
//             .find()
//             .project({ description: 0 })
//             .toArray()
//             .then(products => {
//                 return products;
//             })
//             .catch(err => console.log(err));
//     }

//     static findById(productid) {
//         const db = getDb();
//         return db.collection('products').
//             findOne({ _id: new mongodb.ObjectID(productid) })
//             .then(product => {
//                 return product;
//             }).catch(err => {
//                 console.log(err);
//             });
//     }

//     static deleteById(productid) {
//         const db = getDb();
//         return db.collection('products')
//             .deleteOne({ _id: new mongodb.ObjectID(productid) })
//             .then(() => {
//                 console.log('deleted');
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }

//     static findByCategoryId(categoryid) {
//         const db = getDb();
//         return db.collection('products')
//             .find({ categories: categoryid })
//             .toArray()
//             .then(products => {
//                 return products;
//             })
//             .catch(err => console.log(err));
//     }

// }

// module.exports = Product;