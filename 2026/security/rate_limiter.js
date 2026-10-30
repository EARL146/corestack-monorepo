/**
 * Redis-based Sliding Window Rate Limiter
 */
class SlidingWindowRateLimiter {
    constructor(limit = 100, windowMs = 60000) {
        this.limit = limit;
        this.windowMs = windowMs;
        this.requests = new Map();
    }

    isAllowed(clientIp) {
        const now = Date.now();
        const timestamps = this.requests.get(clientIp) || [];
        const validTimestamps = timestamps.filter(t => now - t < this.windowMs);

        if (validTimestamps.length >= this.limit) {
            return false;
        }

        validTimestamps.push(now);
        this.requests.set(clientIp, validTimestamps);
        return true;
    }
}

module.exports = SlidingWindowRateLimiter;
