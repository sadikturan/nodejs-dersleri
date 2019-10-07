const getDb = require('../utility/database').getdb;
const mongodb = require('mongodb');

class Category {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    save() {
        const db = getDb();

        return db.collection('categories')
            .insertOne(this)
            .then(result => console.log(result))
            .catch(err => console.log(err));
    }

    static findAll() {
        const db = getDb();
        return db.collection('categories')
            .find()
            .toArray()
            .then(categories => {
                return categories;
            })
            .catch(err => console.log(err));
    }


}

module.exports = Category;