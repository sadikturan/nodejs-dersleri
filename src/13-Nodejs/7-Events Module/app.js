const Logger = require('./logger');
const logger = new Logger();

// listener kayıt et
logger.on('connection', function (args) {
    console.log('bağlantı kuruldu.', args);
});

logger.log('sadikturan login oldu.');

