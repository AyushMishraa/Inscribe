const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = (req, res, next) => {
    console.log("Cookies:", req.cookies);
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    
    if (!token) return res.status(401).json({ message: 'Access denied, token missing!' });

    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authenticateToken;
