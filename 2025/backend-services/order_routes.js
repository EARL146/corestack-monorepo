const express = require('express');
const router = express.Router();

router.post('/checkout', (req, res) => {
    const { items, paymentMethod } = req.body;
    if (!items || items.length === 0) {
        return res.status(400).json({ error: 'Cart is empty' });
    }
    const orderId = `ORD-${Date.now()}`;
    res.status(201).json({
        orderId,
        status: 'PROCESSING',
        timestamp: new Date().toISOString(),
        totalItems: items.length
    });
});

module.exports = router;
