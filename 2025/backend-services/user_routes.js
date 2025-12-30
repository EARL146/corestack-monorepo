const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
    res.json({
        userId: req.user ? req.user.id : 'usr_99182',
        username: 'earlypajo',
        email: 'earlypajo@gmail.com',
        tier: 'Enterprise Engineer',
        preferences: { notifications: true, twoFactor: true }
    });
});

module.exports = router;
