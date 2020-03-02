const express = require('express');
const router = express.Router();
const {addPizza,getPizzas, getPizza,updatePizza,deletePizza} = require('../controllers/pizzas');


router.post('/',addPizza);
router.get('/',getPizzas);
router.get('/:code',getPizza);
router.put('/:code',updatePizza);
router.delete('/:code',deletePizza);







module.exports = router;