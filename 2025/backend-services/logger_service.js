const fs = require('fs');

class LoggerService {
    static info(message, meta = {}) {
        this.write('INFO', message, meta);
    }
    static warn(message, meta = {}) {
        this.write('WARN', message, meta);
    }
    static error(message, meta = {}) {
        this.write('ERROR', message, meta);
    }
    static write(level, message, meta) {
        const payload = JSON.stringify({
            timestamp: new Date().toISOString(),
            level,
            message,
            ...meta
        });
        console.log(payload);
    }
}

module.exports = LoggerService;
