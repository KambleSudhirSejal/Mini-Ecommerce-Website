const express = require("express");
const router = express.Router();
// 💡 IMPORTANT: Destructure all controller functions correctly!
const {
  addItemToCart,
  removeItemFromCart,
  getCart,
} = require("../controllers/cartController");

// GET /api/cart: Get cart + total
router.get("/", getCart);

// POST /api/cart: Add {productId, qty}
router.post("/", addItemToCart);

// DELETE /api/cart/:id: Remove item
router.delete("/:id", removeItemFromCart);

module.exports = router;
