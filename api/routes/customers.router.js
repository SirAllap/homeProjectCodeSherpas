const router = require("express").Router();

const {
  createCustomer,
  getSingleCustomer
} = require("../controllers/customers.controller");

router
  .post("/", createCustomer)
  .get("/:id", getSingleCustomer)

module.exports = router;