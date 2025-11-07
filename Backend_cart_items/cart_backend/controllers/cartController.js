// controllers/cartController.js

// Mock Cart logic for POST /api/cart: Add item to cart
const addItemToCart = async (req, res) => {
  // In this assignment, the cart state is mainly handled by Redux on the frontend.
  // The backend mock only confirms the API call succeeded.
  const { productId, quantity } = req.body;

  if (!productId || typeof quantity !== "number" || quantity < 1) {
    return res.status(400).json({ message: "Invalid product ID or quantity." });
  }

  try {
    // 💡 Simulate a database operation or processing delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Send a success response
    res.status(200).json({
      message: "Item successfully processed for adding to cart.",
      productId,
      quantity,
    });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res
      .status(500)
      .json({ message: "Server error while processing cart update." });
  }
};

// Mock Cart logic for DELETE /api/cart/:id: Remove item from cart
const removeItemFromCart = async (req, res) => {
  const productId = req.params.id;

  try {
    // 💡 Simulate a database operation or processing delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    res.status(200).json({
      message: `Item with ID ${productId} successfully processed for removal.`,
      productId,
    });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res
      .status(500)
      .json({ message: "Server error while removing item from cart." });
  }
};

// Mock Cart logic for GET /api/cart: Get cart details
const getCart = async (req, res) => {
  // Since the frontend uses Redux for real-time state, this mock endpoint returns an empty cart.
  const mockCart = {
    items: [],
    total: 0,
    message:
      "Backend cart is currently mocked. Use frontend Redux state for real data.",
  };

  try {
    res.status(200).json(mockCart);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Server error while fetching cart." });
  }
};

module.exports = {
  addItemToCart,
  removeItemFromCart,
  getCart,
};
