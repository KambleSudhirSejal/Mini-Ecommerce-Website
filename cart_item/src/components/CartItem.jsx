import React from "react";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/cart";

const CartItem = ({ data }) => {
  const { product, quantity, productId } = data; // Use passed product
  const dispatch = useDispatch();

  if (!product) return <p>Loading...</p>; // fallback

  //function to remove the item completely 
  const handleRemove =()=>{
    //Dispatch with quantity : 0 trigger the removal logic in the reducer
    dispatch(changeQuantity({productId:productId,quantity:0}));
  }

  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
      {/**Delete Button */}
      <button
        onClick={handleRemove}
        className="absolute top-1 right-1 p-1 text-red-300 hover:text-red-500 text-xl font-bold transition duration-200 leading-none"
        aria-label={`Remove ${product.name} from cart`}
      >
        &times;
      </button>
      <img
        src={`http://localhost:3000/images/${product.image}`}
        alt={product.name}
        className="w-12 h-12 object-cover rounded-md"
      />
      <h3>{product.name}</h3>
      <p>Rs {(product.price * quantity).toFixed(2)}</p>
      <div className="w-20 flex justify-between gap-2">
        <button
          onClick={() =>
            dispatch(
              changeQuantity({ productId: productId, quantity: quantity - 1 })
            )
          }
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() =>
            dispatch(
              changeQuantity({ productId: productId, quantity: quantity + 1 })
            )
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
