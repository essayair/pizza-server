const express = require('express');
const router = express.Router();
const {getUsers, getUser,addUser,updateUser} = require('../controllers/users');


router.get('/',getUsers);
router.get('/:userId',getUser);
router.post('/', addUser);
router.put('/:userId',updateUser);




module.exports = router;