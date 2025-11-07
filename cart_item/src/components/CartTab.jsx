import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";
import { toggleStatusTab, clearCart, updateProduct } from "../stores/cart";

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();

  const [checkoutStep, setCheckoutStep] = useState("form"); // "form" | "receipt"
  const [checkoutMessage, setCheckoutMessage] = useState(null);
  const [receipt, setReceipt] = useState(null);

  const total = carts.reduce(
    (sum, item) => sum + (item.product?.price * item.quantity || 0),
    0
  );

  useEffect(() => {
    setCheckoutMessage(null);

    const syncProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/products");
        const fetchedProducts = await res.json();

        carts.forEach((cartItem) => {
          if (!cartItem.product) {
            const fullProduct = fetchedProducts.find(
              (p) => p._id === cartItem.productId
            );
            if (fullProduct) {
              dispatch(
                updateProduct({
                  productId: cartItem.productId,
                  product: fullProduct,
                })
              );
            }
          }
        });
      } catch (err) {
        console.error("Error fetching products for sync:", err);
      }
    };
    syncProducts();
  }, [carts, dispatch]);

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
    setCheckoutStep("form");
    setCheckoutMessage(null);
    setReceipt(null);
  };

  const handleCheckoutSubmit = async (userDetails) => {
    if (carts.length === 0) {
      setCheckoutMessage("Your cart is empty. Nothing to check out.");
      return;
    }

    setCheckoutMessage("Processing order...");

    try {
      // Mock API call
      const response = await fetch("http://localhost:3000/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems: carts, total, user: userDetails }),
      });

      if (!response.ok) throw new Error("Checkout failed.");

      const newReceipt = {
        user: userDetails,
        items: carts,
        total,
        timestamp: new Date().toISOString(),
      };

      setReceipt(newReceipt);
      setCheckoutStep("receipt");
      setCheckoutMessage(null);
      dispatch(clearCart());
    } catch (err) {
      setCheckoutMessage(`❌ Checkout Error: ${err.message}`);
      console.error(err);
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_auto] 
      transform transition-transform duration-500 z-50
      ${statusTab === false ? "translate-x-full" : ""}`}
    >
      <h2 className="p-5 text-white text-2xl border-b border-gray-600">
        Shopping Cart
      </h2>

      <div className="p-5 overflow-y-auto">
        {checkoutMessage && (
          <div
            className={`mb-4 p-3 rounded-lg text-sm font-medium ${
              checkoutMessage.startsWith("✅")
                ? "bg-green-100 text-green-800"
                : checkoutMessage.startsWith("❌")
                ? "bg-red-100 text-red-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {checkoutMessage}
          </div>
        )}

        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}

        {carts.length === 0 && checkoutStep === "form" && !checkoutMessage && (
          <p className="text-white text-center opacity-70 mt-10">
            Your cart is empty.
          </p>
        )}
      </div>

      {/* Checkout Form or Receipt */}
      {checkoutStep === "form" ? (
        <CheckoutForm
          onSubmit={handleCheckoutSubmit}
          onCancel={handleCloseTabCart}
          carts={carts}
          total={total}
        />
      ) : receipt ? (
        <div className="p-5 border-t border-gray-600 bg-white rounded shadow-lg overflow-y-auto">
          <h3 className="text-lg font-bold mb-2">Order Receipt</h3>
          <p>
            <strong>Name:</strong> {receipt.user.name}
          </p>
          <p>
            <strong>Email:</strong> {receipt.user.email}
          </p>
          <p>
            <strong>Total:</strong> Rs {receipt.total.toFixed(2)}
          </p>
          <p>
            <strong>Time:</strong>{" "}
            {new Date(receipt.timestamp).toLocaleString()}
          </p>
          <ul className="mt-2 mb-2">
            {receipt.items.map((item, index) => (
              <li key={index}>
                {item.product?.name || "Unknown Product"} x {item.quantity} = Rs{" "}
                {(item.product?.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <button
            className="bg-black text-white p-2 rounded-md hover:bg-gray-800 w-full mt-3"
            onClick={handleCloseTabCart}
          >
            CLOSE
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default CartTab;
