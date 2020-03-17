const express = require('express');
const router = express.Router();

/**products_pizza */
const pizzaRoute = require('./routes/pizzas.js');
const orderRoute = require('./routes/orders.js');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const authGuard = require('./middleware/authGuard')




//**auth after other features */

router.use('/pizzas', pizzaRoute);
router.use('/orders', orderRoute);
router.use('/users', userRoute);
router.use('/auth', authRoute);


// router.use('/pizzas',pizzaRoute); //pizzas is open for all
// router.use('/orders', authGuard,orderRoute);
// router.use('/users', authGuard,userRoute);
// router.use('/auth', authGuard,authRoute);


module.exports = router;