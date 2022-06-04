const CustomerModel = require('../models/customer.model')

async function createCustomer(req, res) {
    try {
        const customer = await CustomerModel.create(req.body, { _id: 0, __v: 0 })
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).send(`Error creating customer: ${error}`);
    }
}

async function getSingleCustomer(req, res) {
    try {
        const customer = await CustomerModel.findById(req.params.id, { _id: 0, __v: 0 })
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).send(`Error obtaining customer: ${error}`);
    }
}

async function getAllCustomers(req, res) {
    try {
        const customers = await CustomerModel.find(req.query, { _id: 0, __v: 0 })
        res.status(200).json(customers)
    } catch (error) {
        res.status(500).send(`Couldn't get all customers ${error}`)
    }
}

async function updateCustomer(req, res) {
    try {
        const customer = await CustomerModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(customer)
    } catch (error) {
        res.status(500).send(`Couldn't update the customer ${error}`);
    }
}

module.exports = {
    createCustomer,
    getSingleCustomer,
    getAllCustomers,
    updateCustomer
}

