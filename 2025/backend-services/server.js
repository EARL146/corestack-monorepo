/**
 * Express REST API Gateway (2025 Architecture)
 * Author: Early Pajo (@EARL146)
 */
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString(), platform: 'MotoFix Backend' });
});

module.exports = app;
