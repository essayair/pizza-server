const User = require("../models/user");
const Order = require("../models/order");
const {generateToken} = require('../utils/jwt')


async function addUser(req, res) {
    const {userId, firstName, lastName, email, password} = req.body;

    const user = new User ({ 
        userId,
        firstName,
        lastName,
        email,
        password});
    await user.save();
    // try { await user.save(); } catch (e) {
    //     return res.json(e);
    // }
    const token = generateToken(user.userId);
    return res.json({user, token});
}


async function getUsers(req, res) {
    const users = await User.find().populate('orders','price size').exec();
    return res.json(users);
}

async function getUser(req, res) {
    const { userId } = req.params;
    const user = await User.findById(userId).populate("order", "price, size").exec();
    if (!user) {
        return res.status(404).json("NOT FOUND");
    }
    return res.json(user);
}

async function updateUser(req, res) {
    const { userId } = req.params;
    const { firstName, lastName, email } = req.body;
    const user = await User.findById(userId).exec();
    if (!user) {
        return res.status(404).json("NOT EXIST");
    }
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    await user.save();
    return res.json(user);
}
// not in use currently 
async function deleteUser(req, res) {
    const { userId, orderNo } = req.params;
    const user = await User.findByIdAndDelete(userId).exec();

    if (!user) {
        return res.status(404).json("NOT EXIST");
    }

    return res.json("DELETED");

}


async function bindOrder(req, res) {
    //add order first at frontend 
    //if ordered true, then bindOrder with user; if false stopped.
    const { userId, orderNo } = req.params;
    const order = await Order.findById(orderNo).exec();
    if (!order ) {
        return res.status(404).json('order not available')
    }
    const user = await User.findById(userId).exec();
    // user.orders.push(order.orderNo);
    user.orders.addToSet(order.orderNo);
    order.users.addToSet(user.userId);
    await user.save();
    await order.save();
    return res.json(user);
}

async function deleteOrder(req, res) {
    //delete selected order by orderNo
    //if ordered true.
    const { userId, orderNo } = req.params;
    const order = await Order.findById(orderNo).exec();
    const user = await User.findById(userId).exec();
    if (!order ) {
        return res.status(404).json('something wrong with your net, try again')
    }
    //
    user.orders.pull(order.orderNo);
    order.users.addToSet(user.userId);
    await user.save();
    await order.save();
    return res.json(user);
}


module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
    bindOrder,
    deleteOrder
};