function verifyAuth(req, res, next) {
    const auth = req.headers['authorization'];
    if (!auth) return res.status(401).json({ error: 'Unauthorized access' });
    next();
}
module.exports = { verifyAuth };
