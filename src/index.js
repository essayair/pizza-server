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

   connectToDB()
   .then(() => {
     console.log('DB connected');
     app.listen(3000, () => {
       console.log(`Server is listening on PORT: ${3000}`);
     });
   })
   .catch(e => {
     console.log('DB connection failed');
     console.error(e.message);
     process.exit(1);
   });
 