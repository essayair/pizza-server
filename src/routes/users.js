const express = require('express');
const router = express.Router();
const {getUsers, getUser,addUser,updateUser,bindOrder} = require('../controllers/users');


router.get('/',getUsers);
router.get('/:userId',getUser);
router.post('/', addUser);
router.put('/:userId',updateUser);
router.post('/:userId/orders/:orderNo',bindOrder);






module.exports = router;