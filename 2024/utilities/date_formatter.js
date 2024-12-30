/**
 * Date and Time Formatter Utilities
 */
const DateUtils = {
    formatRelativeTime(timestamp) {
        const now = Date.now();
        const diff = Math.floor((now - new Date(timestamp).getTime()) / 1000);
        if (diff < 60) return `${diff} seconds ago`;
        if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
        return `${Math.floor(diff / 86400)} days ago`;
    },

    toISOStringDate(date = new Date()) {
        return date.toISOString().split('T')[0];
    }
};

if (typeof module !== 'undefined') module.exports = DateUtils;
