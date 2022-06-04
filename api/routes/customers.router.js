const router = require("express").Router();

const {
  createCustomer,
  getSingleCustomer,
  getAllCustomers,
  updateCustomer,
} = require("../controllers/customers.controller");

router
  .post("/", createCustomer)
  .get("/:id", getSingleCustomer)
  .get("/", getAllCustomers)
  .put("/:id", updateCustomer)

module.exports = router;