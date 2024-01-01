/**
 * Sliding Window Rate Limiter
 */
class RateLimiter {
    constructor(limit = 100, windowMs = 60000) {
        this.limit = limit;
        this.windowMs = windowMs;
        this.requests = new Map();
    }
    isAllowed(ip) {
        const now = Date.now();
        const timestamps = (this.requests.get(ip) || []).filter(t => now - t < this.windowMs);
        if (timestamps.length >= this.limit) return false;
        timestamps.push(now);
        this.requests.set(ip, timestamps);
        return true;
    }
}
module.exports = RateLimiter;
