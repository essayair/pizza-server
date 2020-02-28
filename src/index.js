const express = require('express');

//import routes
const routes = require('./routes');

const app = express();


app.use('/api', routes)

app.listen(3000, () => {
    console.log('server listening')
})