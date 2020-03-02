require('dotenv').config()
const express = require('express');
require('express-async-errors');
//import routes
const routes = require('./routes');
const { connectToDB } = require('./utils/db')

const errorHandler = require('./middleware/errorHandler');
const app = express();
app.use(express.json());


app.use('/api', routes);
app.use(errorHandler);


connectToDB().then(() => {
    app.listen(3000, () => {
      console.log("server listening");
    });
  
   })
   .catch(e => { console.error(e); process.exit(1) })
  
  