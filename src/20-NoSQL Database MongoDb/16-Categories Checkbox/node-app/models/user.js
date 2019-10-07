const getDb = require('../utility/database').getdb;
const mongodb = require('mongodb');

class User {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this._id = id;
    }

    save() {
        const db = getDb();
        return db.collection('users')
            .insertOne(this);
    }

    static findById(userid) {

        const db = getDb();
        return db.collection('users')
            .findOne({ _id: new mongodb.ObjectID(userid) })
            .then(user => {
                return user;
            })
            .catch(err => {
                console.log(err);
            })
    }

    static findByUserName(username) {

        const db = getDb();
        return db.collection('users')
            .findOne({ name: username })
            .then(user => {
                return user;
            })
            .catch(err => {
                console.log(err);
            })
    }


}


module.exports = User;