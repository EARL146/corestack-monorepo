const crypto = require('crypto');

class TokenService {
    static generateRefreshToken() {
        return crypto.randomBytes(48).toString('hex');
    }

    static hashToken(token) {
        return crypto.createHash('sha256').update(token).digest('hex');
    }
}

module.exports = TokenService;
