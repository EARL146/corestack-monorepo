/**
 * Real-time Inventory Manager (2026)
 * Author: Early Pajo (@EARL146)
 */
class InventoryManager {
    constructor() {
        this.cache = new Map();
    }
    setStock(id, qty) {
        this.cache.set(id, qty);
        return { id, qty, status: 'synced' };
    }
    deductStock(id, count) {
        const current = this.cache.get(id) || 0;
        if (current < count) throw new Error('Insufficient stock');
        this.cache.set(id, current - count);
        return this.cache.get(id);
    }
}
module.exports = InventoryManager;
