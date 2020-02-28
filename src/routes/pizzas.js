const express = require('express');
const router = express.Router();
const {getPizzas, getPizza} = require('../controllers/pizzas');



router.get('/',getPizzas);
router.get('/:id',getPizza);






module.exports = router;