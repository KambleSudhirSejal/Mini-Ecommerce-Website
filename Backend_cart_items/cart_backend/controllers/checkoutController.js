// 💡 This function simulates the payment processing and order creation step.
const checkoutOrder = async (req, res) => {
  // Destructure data sent from the frontend (CartTab.jsx)
  const { cartItems, total } = req.body;

  // Basic validation
  if (!cartItems || cartItems.length === 0) {
    return res
      .status(400)
      .json({ message: "Cart is empty. Cannot proceed with checkout." });
  }

  // Check if the total is valid (optional but good practice)
  if (typeof total !== "number" || total <= 0) {
    return res.status(400).json({ message: "Invalid total amount." });
  }

  try {
    // --- Mock Processing ---

    // 1. Simulate a short processing delay (e.g., for payment gateway interaction)
    await new Promise((resolve) => setTimeout(resolve, 500));

    // 2. In a real app, you would save the order to a MongoDB 'Order' model here.
    // const newOrder = await Order.create({ userId: req.user.id, items: cartItems, total: total });

    // 3. Generate the required mock receipt
    const receipt = {
      message: "Order successfully placed!",
      total: total.toFixed(2), // Ensure total is formatted
      timestamp: new Date().toISOString(),
      // Optionally include item count
      itemCount: cartItems.length,
    };

    // Respond with status 200 and the mock receipt
    res.status(200).json(receipt);
  } catch (error) {
    console.error("Checkout server error:", error);
    res
      .status(500)
      .json({ message: "Failed to complete checkout due to a server error." });
  }
};

module.exports = { checkoutOrder };
