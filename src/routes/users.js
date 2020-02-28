const express = require('express');
const router = express.Router();
const {getUsers, getUser,addUser,updateUser} = require('../controllers/users');



router.get('/',getUsers);
router.get('/:id',getUser);
router.post('/', addUser);
router.put('/:id',updateUser);




module.exports = router;