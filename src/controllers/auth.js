const User = require('../models/user');
const { generateToken } = require('../utils/jwt');

async function loginUser(req, res) {
    const { email, password } = req.body;
    console.log(email);

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
        return res.status(401).json('Invalid email or password');
    }

    // if (!existingUser.validatePassword(password)) {
    //   return res.status(401).json('Invalid username or password');
    // }

    const validPassword = await existingUser.validatePassword(password);
    if (!validPassword) {
      return res.status(401).json('Invalid username or password');
    }


    console.log(password);




    const token = generateToken(existingUser.email)
    return res.json({ email, token})
}




module.exports = {
    loginUser
};