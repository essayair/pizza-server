const jwt = require('jsonwebtoken');

const secret = 'long secret';

const token = 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNCwiaWF0IjoxNTg0MzMzMzE1LCJleHAiOjE1ODQzNDMzMTV9.3KFT_yvWSH69uw7c7wQiWPAf7Zr6oaJxHuicvGGAJWI"

const valid = jwt.verify(token, secret);

console.log(valid);