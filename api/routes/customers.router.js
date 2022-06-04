const router = require("express").Router();

const {
  createCustomer,
  getSingleCustomer,
  getAllCustomers,
  updateCustomer,
  deleteCustomer
} = require("../controllers/customers.controller");

router
  .post("/", createCustomer)
  .get("/:id", getSingleCustomer)
  .get("/", getAllCustomers)
  .put("/:id", updateCustomer)
  .delete("/:id", deleteCustomer)

module.exports = router;