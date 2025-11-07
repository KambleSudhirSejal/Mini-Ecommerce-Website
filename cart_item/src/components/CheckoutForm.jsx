import React, { useState } from "react";

const CheckoutForm = ({ onSubmit, onCancel, carts, total }) => {
  const [userDetails, setUserDetails] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!userDetails.name || !userDetails.email) {
      setError("Please enter both name and email.");
      return;
    }
    setError("");
    onSubmit(userDetails); // pass details back to parent
  };

  return (
    <div className="p-5 border-t border-gray-600">
      {error && (
        <div className="mb-3 p-2 bg-red-100 text-red-800 rounded">{error}</div>
      )}
      <input
        type="text"
        placeholder="Name"
        value={userDetails.name}
        onChange={(e) =>
          setUserDetails({ ...userDetails, name: e.target.value })
        }
        className="w-full p-2 mb-3 rounded text-white"
      />
      <input
        type="email"
        placeholder="Email"
        value={userDetails.email}
        onChange={(e) =>
          setUserDetails({ ...userDetails, email: e.target.value })
        }
        className="w-full p-2 mb-3 rounded text-white"
      />
      <div className="grid grid-cols-2 gap-4">
        <button
          className="bg-black text-white p-3 rounded-md hover:bg-gray-800"
          onClick={onCancel}
        >
          CANCEL
        </button>
        <button
          className="bg-amber-600 text-white p-3 rounded-md hover:bg-amber-700"
          onClick={handleSubmit}
          disabled={carts.length === 0}
        >
          CONFIRM
        </button>
      </div>
      <div className="mt-2 text-white">Total: Rs {total.toFixed(2)}</div>
    </div>
  );
};

export default CheckoutForm;
