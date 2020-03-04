const User = require("../models/user");
const Order = require("../models/order");


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

async function bindOrder(req, res) {
    //add order first at frontend 
    //if ordered true, then bindOrder with user; if false stopped.
    const { userId, orderNo } = req.params;
    const order = await Order.findById(orderNo);
    if (!order ) {
        return res.status(404).json('order not available')
    }
    const user = await User.findById(userId);
    // user.orders.push(order.orderNo);
    user.orders.addToSet(order.orderNo);
    // order.users.addToSet(user.userId);
    await user.save();
    // await order.save();
    return res.json(user);
}


module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser,
    bindOrder
};