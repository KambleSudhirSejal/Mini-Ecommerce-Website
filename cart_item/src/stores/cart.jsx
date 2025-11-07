import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage, ensure each item has product object
const itemsFromStorage = localStorage.getItem("carts")
  ? JSON.parse(localStorage.getItem("carts"))
  : [];

// const itemsFromStorage = [];
const initialState = {
  items: itemsFromStorage.map((item) => ({
    productId: item.productId,
    quantity: item.quantity,
    product: item.product || null, // fallback
  })),
  statusTab: false,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { productId, quantity = 1, product } = action.payload;
      const index = state.items.findIndex(
        (item) => item.productId === productId
      );

      if (index >= 0) {
        // Increase quantity but preserve product
        state.items[index] = {
          ...state.items[index],
          quantity: state.items[index].quantity + quantity,
        };
      } else {
        // Add new item
        state.items.push({ productId, quantity, product });
      }

      localStorage.setItem("carts", JSON.stringify(state.items));
    },

    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const index = state.items.findIndex(
        (item) => item.productId === productId
      );

      if (index >= 0) {
        if (quantity > 0) {
          // Update quantity but keep product
          state.items[index] = {
            ...state.items[index],
            quantity,
          };
        } else {
          // Remove item if quantity <= 0
          state.items = state.items.filter(
            (item) => item.productId !== productId
          );
        }
      }

      localStorage.setItem("carts", JSON.stringify(state.items));
    },

    toggleStatusTab(state) {
      state.statusTab = !state.statusTab;
    },

    // Optional: update product info if it changes on backend
    updateProduct(state, action) {
      const { productId, product } = action.payload;
      const index = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (index >= 0) {
        state.items[index] = { ...state.items[index], product };
        localStorage.setItem("carts", JSON.stringify(state.items));
      }
    },

    //new Action to clear the cart after checkout 
    clearCart(state){
      state.items=[];
      localStorage.removeItem('carts');
    }
  },
});

export const { addToCart, changeQuantity, toggleStatusTab, updateProduct ,clearCart} =
  cartSlice.actions;
export default cartSlice.reducer;
