const CustomerModel = require('../models/customer.model')

async function createCustomer(req, res) {
    try {
        const customer = await CustomerModel.create(req.body)
        res.status(200).json(customer);
    
    } catch (error) {
        res.status(500).send(`Error creating user: ${error}`);
    }
}

async function getSingleCustomer(req, res) {
    try {
        const customer = await CustomerModel.findById(req.params.id)
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).send(`Error obtaining user: ${error}`);
    }
}

module.exports = {
    createCustomer,
    getSingleCustomer
}