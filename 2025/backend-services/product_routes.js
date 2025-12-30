const express = require('express');
const router = express.Router();

const mockProducts = [
    { id: 101, name: 'Cloud Instance M5', category: 'Compute', price: 99.00, stock: 120 },
    { id: 102, name: 'Managed DB Postgres', category: 'Storage', price: 149.00, stock: 45 },
    { id: 103, name: 'Edge CDN Global Cache', category: 'Network', price: 49.00, stock: 300 }
];

router.get('/', (req, res) => {
    const { category, minPrice } = req.query;
    let results = mockProducts;
    if (category) results = results.filter(p => p.category.toLowerCase() === category.toLowerCase());
    if (minPrice) results = results.filter(p => p.price >= parseFloat(minPrice));
    res.json({ total: results.length, data: results });
});

router.get('/:id', (req, res) => {
    const product = mockProducts.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
});

module.exports = router;
