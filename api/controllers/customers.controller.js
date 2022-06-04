const CustomerModel = require('../models/customer.model')

async function createCustomer(req, res) {
    try {
        const customer = await CustomerModel.create(req.body)
        res.status(200).json({
            name: customer.name,
            surname: customer.surname,
            email: customer.email,
            birthDate: customer.birthDate
        });
    
    } catch (error) {
        res.status(500).send(`Error creating user: ${error}`);
    }
}

module.exports = {
    createCustomer
}