const jwt = require('jsonwebtoken');

function generateToken(userId) {
    const token = jwt.sign({userId}, process.env.JWT_KEY,{
        expiresIn: '1d'
    });
    return token;
}


function validateToken(token) {
    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_KEY);
    } catch(e) {
        return null;
    }
    return decoded;
}


module.exports = { generateToken, validateToken };