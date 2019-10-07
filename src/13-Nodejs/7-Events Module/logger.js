const EventEmitter = require('events');

class Logger extends EventEmitter {

    log(message) {
        console.log(message);

        this.emit('connection', { id: 1, message: 'hello' });
    }
}
module.exports = Logger;