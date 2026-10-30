/**
 * Real-Time Distributed Inventory Manager 2026
 * Handles multi-node stock decrement and low-threshold event triggers.
 */
class InventoryManager {
    constructor() {
        this.stockCache = new Map();
        this.lowStockThreshold = 10;
    }

    setStock(productId, quantity) {
        this.stockCache.set(productId, quantity);
    }

    deductStock(productId, count) {
        const current = this.stockCache.get(productId) || 0;
        if (current < count) {
            throw new Error(`Insufficient inventory for product [${productId}]. Available: ${current}, Requested: ${count}`);
        }
        const remaining = current - count;
        this.stockCache.set(productId, remaining);

        if (remaining <= this.lowStockThreshold) {
            this.triggerLowStockAlert(productId, remaining);
        }
        return remaining;
    }

    triggerLowStockAlert(productId, remaining) {
        console.warn(`[ALERT] Product [${productId}] reached low stock threshold: ${remaining} units left.`);
    }
}

module.exports = InventoryManager;
