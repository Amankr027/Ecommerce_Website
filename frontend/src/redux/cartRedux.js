import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        const product = state.products[index];
        state.total -= product.price * product.quantity;
        state.products.splice(index, 1);
        state.quantity -= 1;
      }
      if(state.quantity === 0) state.total = 0;
    }, 
  },
});

export const { addProduct,removeProduct } = cartSlice.actions;
export default cartSlice.reducer;