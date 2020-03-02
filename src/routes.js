const express = require('express');
const router = express.Router();

/**products_pizza */
const pizzaRoute = require('./routes/pizzas.js')
const orderRoute = require('./routes/orders.js')
const userRoute = require('./routes/users')


router.use('/pizzas', pizzaRoute);
router.use('/orders', orderRoute);
router.use('/users', userRoute);

module.exports = router;