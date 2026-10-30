const crypto = require('crypto');

class PayloadEncryption {
    static encrypt(text, secretKey) {
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv('aes-256-gcm', Buffer.from(secretKey, 'hex'), iv);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        const tag = cipher.getAuthTag().toString('hex');
        return `${iv.toString('hex')}:${tag}:${encrypted}`;
    }

    static decrypt(ciphertext, secretKey) {
        const [ivHex, tagHex, encryptedHex] = ciphertext.split(':');
        const decipher = crypto.createDecipheriv('aes-256-gcm', Buffer.from(secretKey, 'hex'), Buffer.from(ivHex, 'hex'));
        decipher.setAuthTag(Buffer.from(tagHex, 'hex'));
        let decrypted = decipher.update(encryptedHex, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
}

module.exports = PayloadEncryption;
