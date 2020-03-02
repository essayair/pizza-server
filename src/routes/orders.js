const express = require('express');
const router = express.Router();
const {getOrders, getOrder,addOrder,updateOrder,updateOrders,deleteOrder} = require('../controllers/orders');



router.get('/', getOrders);
router.get('/:orderNo',getOrder);
router.post('/', addOrder);
router.put('/:orderNo',updateOrder);
router.put('/',updateOrders);
router.delete('/:orderNo',deleteOrder);








module.exports = router;