const express = require('express');
const router = express.Router();
const {getUsers, getUser,addUser,updateUser,deleteUser,bindOrder,deleteOrder} = require('../controllers/users');


router.get('/',getUsers);
router.get('/:userId',getUser);
router.post('/', addUser);
router.put('/:userId',updateUser);
router.delete('/:userId',deleteUser);

// update user's orders 
router.post('/:userId/orders/:orderNo',bindOrder);
router.delete('/:userId/orders/:orderNo',deleteOrder);







module.exports = router;