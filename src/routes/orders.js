const express = require('express');
const router = express.Router();
const {getOrders, getOrder,addOrder,updateOrder,deleteOrder} = require('../controllers/orders');



router.get('/', getOrders);
router.get('/:id',getOrder);
router.post('/', addOrder);
router.put('/:id',updateOrder);
router.delete('/:id',deleteOrder);








module.exports = router;