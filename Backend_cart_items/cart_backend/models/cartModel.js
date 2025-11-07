const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  qty: { type: Number, default: 1 },
});

module.exports = mongoose.model("Cart", cartSchema);
