const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    // MongoClient.connect('mongodb://localhost/node-app')
    MongoClient.connect('mongodb+srv://sadikturan:WbQ5vdSRiQIfcmdp@cluster0-4nd5p.mongodb.net/test?retryWrites=true')
        .then(client => {
            console.log('connected');
            callback(client);
        })
        .catch(err => {
            console.log(err);
            throw err;
        })
}


module.exports = mongoConnect;