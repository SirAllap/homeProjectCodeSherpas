const router = require("express").Router();

const customersRouter = require("./customers.router");

router.use("/customers", customersRouter);

module.exports = router;
