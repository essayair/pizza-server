const jwt = require('jsonwebtoken');

const secret = 'long secret';

const payload = {
    id: 1234
};


const token = jwt.sign(payload, secret, {expiresIn: '10000s'});

console.log(token);