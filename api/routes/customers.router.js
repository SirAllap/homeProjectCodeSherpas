const router = require("express").Router();

const {
  createCustomer
} = require("../controllers/customers.controller");

router.post("/", createCustomer)

module.exports = router;