const router = require("express").Router();

const {
  createCustomer,
  getSingleCustomer,
  getAllCustomers
} = require("../controllers/customers.controller");

router
  .post("/", createCustomer)
  .get("/:id", getSingleCustomer)
  .get("/", getAllCustomers)

module.exports = router;