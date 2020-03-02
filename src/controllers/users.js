const User = require("../models/user");


async function addUser(req, res) {
    const {userId, firstName, lastName, email} = req.body;

    const user = new User ({ 
        userId,
        firstName,
        lastName,
        email});
    await user.save();
    // try { await user.save(); } catch (e) {
    //     return res.json(e);
    // }
    return res.json(user);
}


async function getUsers(req, res) {
    const users = await User.find();
    return res.json(users);
}

async function getUser(req, res) {
    const { userId } = req.params;
    const user = await (await User.findById(userId));
    if (!user) {
        return res.status(404).json("NOT FOUND");
    }
    return res.json(user);
}

async function updateUser(req, res) {
    const { userId } = req.params;
    const { firstName, lastName, email } = req.body;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json("NOT EXIST");
    }
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    await user.save();
    return res.json(user);
}


module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser
};