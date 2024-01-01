const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
    res.json([
        { id: 1, name: 'Engine Oil Filter', price: 450.00, stock: 32 },
        { id: 2, name: 'Brake Pads Set', price: 850.00, stock: 15 }
    ]);
});

module.exports = router;
