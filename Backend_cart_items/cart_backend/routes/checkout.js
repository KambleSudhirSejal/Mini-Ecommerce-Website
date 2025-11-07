const express = require("express");
const router = express.Router();
const { checkoutOrder } = require("../controllers/checkoutController");

// POST /api/checkout
router.post("/", checkoutOrder);

module.exports = router;
