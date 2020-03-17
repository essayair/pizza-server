const Order = require('../models/order');
const User = require('../models/user');


async function addOrder(req, res) {
    const {orderNo,size,price,ingredients} = req.body;

    const order = new Order({
        orderNo,
        size,
        price,
        ingredients
    });

    await order.save();
    return res.json(order);

}
async function getOrders(req, res) {
    const orders = await Order.find().exec();
    return res.json(orders);

}
async function getOrder(req, res) {
    const { orderNo } = req.params;
    const order = await Order.findById(orderNo).populate('users','lastName').exec();
    if(!order) {
        return res.status(404).json("NOT FOUND");
    }
    return res.json(order);
}

async function updateOrder(req, res) {
    const { orderNo } = req.params;
    const { size, price } = req.body;
    // const order = await Order.findById(orderNo);
    // if (!order) {
    //     return res.status(404).json("NOT EXIST");
    // }
    // order.size = size;
    // order.price = price;
    // await order.save();
    // return res.json(order);

    const order = await Order.findByIdAndUpdate(
        orderNo,{
        size, price
    },
    { new: true}
    );// response new data
    if (!order) {
        return res.status(404).json("not exist");
    }
    return res.json(order);
}
function updateOrders(req,res) {
}
async function deleteOrder(req,res) {
    const { orderNo } = req.params;
    const order = await Order.findByIdAndDelete(orderNo).exec();
    if (!order) {
        return res.status(404).json("NOT EXIST");
    }
    await User.updateMany(
        { orders: order.orderNo },
        {
            $pull: {orders: order.orderNo}
        }
    );
    return res.json("DELETED");
}


module.exports = {
    getOrders,
    getOrder,
    addOrder,
    updateOrder,
    updateOrders,
    deleteOrder
};