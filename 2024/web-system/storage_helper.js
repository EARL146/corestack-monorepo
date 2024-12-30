/**
 * Storage Helper with TTL (Time To Live) Support
 */
const StorageManager = {
    set(key, value, ttlSeconds = 3600) {
        const item = {
            value: value,
            expiry: Date.now() + (ttlSeconds * 1000)
        };
        localStorage.setItem(key, JSON.stringify(item));
    },

    get(key) {
        const raw = localStorage.getItem(key);
        if (!raw) return null;
        try {
            const item = JSON.parse(raw);
            if (Date.now() > item.expiry) {
                localStorage.removeItem(key);
                return null;
            }
            return item.value;
        } catch (e) {
            return null;
        }
    },

    remove(key) {
        localStorage.removeItem(key);
    }
};

window.StorageManager = StorageManager;
