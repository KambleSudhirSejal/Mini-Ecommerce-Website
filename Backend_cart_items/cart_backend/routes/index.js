const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "🟢 API is running successfully!",
    endpoints: ["/api/products", "/api/cart", "/api/users"],
  });
});

module.exports = router;
