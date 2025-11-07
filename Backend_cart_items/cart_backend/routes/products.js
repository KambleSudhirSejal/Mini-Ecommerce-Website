const express = require("express");
const router = express.Router();
const Product = require("../models/productModel")
const { getProducts,seedProducts } = require("../controllers/productController");

router.get("/", getProducts);

//post to seed products
router.get("/seed",seedProducts)

// routes/products.js
router.get("/:slug", async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});






module.exports = router;
