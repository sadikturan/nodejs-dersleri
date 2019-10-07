const getDb = require('../utility/database').getdb;
const mongodb = require('mongodb');

class Category {
    constructor(name, description, id) {
        this.name = name;
        this.description = description;
        this._id = id ? new mongodb.ObjectID(id) : null;
    }

    save() {
        let db = getDb();

        if (this._id) {
            db = db.collection('categories').updateOne({ _id: this._id }, { $set: this });
        } else {
            db = db.collection('categories').insertOne(this);
        }

        return db
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

    static findById(categoryid) {
        const db = getDb();

        return db.collection('categories')
            .findOne({ _id: new mongodb.ObjectID(categoryid) })
            .then(category => {
                return category;
            }).catch(err => console.log(err));
    }


}

module.exports = Category;