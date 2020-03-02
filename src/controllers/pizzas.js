const Pizza = require('../models/pizza');


async function addPizza(req, res) {
    const {code, pizzaName, size, price, ingredients, description} = req.body;

    const pizza = new Pizza ({ 
        code,
        pizzaName,
        size,
        price,
        ingredients,
        description });
    await pizza.save();
    return res.json(pizza);
}

async function getPizzas(req, res) {
    const pizzas = await Pizza.find();
    return res.json(pizzas);

}

async function getPizza(req, res) {
    const { code } = req.params;
    const pizza = await Pizza.findById(code);
    if (!pizza) {
        return res.status(404).json("NOT FOUND");
    }
    return res.json(pizza);
}
async function updatePizza(req, res) {
    const { code } = req.params;
    const {price, ingredients, description } = req.body;
    const pizza = await Pizza.findById(code);
    if (!pizza) {
        return res.status(404).json("NOT EXIST");
    }
    pizza.price = price;
    pizza.ingredients = ingredients;
    pizza.description = description;
    await pizza.save();
    return res.json(pizza);

}
async function deletePizza(req, res) {
    const { code } = req.params;
    const pizza = await Pizza.findByIdAndDelete(code);
    if (!pizza) {
        return res.status(404).json("NOT EXIST");
    }
    return res.json("DELETED");
}



module.exports = {
    addPizza,
    getPizzas,
    getPizza,
    updatePizza,
    deletePizza
};