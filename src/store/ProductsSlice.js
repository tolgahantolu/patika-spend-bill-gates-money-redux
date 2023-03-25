import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    totalAmount: 100000000000,
    receipt: [],
    totalReceipt: 0,
  },
  reducers: {
    buyProduct: {
      reducer: (state, { payload, type }) => {
        if (
          state.totalAmount <= 0 ||
          payload.totalProductPrice > state.totalAmount
        ) {
          alert("I'm sorry, you don't have enough money for shopping.");
          return;
        }

        const existingProduct = state.receipt.find(
          (product) => product.id === payload.id
        );

        if (!existingProduct) {
          state.receipt.unshift(payload);
        } else {
          existingProduct.totalProductPrice =
            existingProduct.totalProductPrice + payload.totalProductPrice;
          existingProduct.amount = existingProduct.amount + payload.amount;
        }

        state.totalAmount = state.totalAmount - payload.totalProductPrice;

        state.totalReceipt = state.receipt
          .map((item, i) => item.totalProductPrice)
          .reduce((acc, currentValue) => acc + currentValue, 0);
      },
      prepare: (id, title, amount, totalProductPrice) => {
        return {
          payload: {
            id,
            title,
            amount,
            totalProductPrice,
          },
        };
      },
    },

    sellProduct: {
      reducer: (state, { payload, type }) => {
        const existingProduct = state.receipt.find(
          (product) => product.id === payload.id
        );

        if (existingProduct && payload.amount > existingProduct.amount) {
          alert(
            "I'm sorry, there are not that many product on the receipt. Please check the value you entered."
          );
          return;
        }

        if (!existingProduct) {
          alert("I'm sorry, I couldn't find the product on the receipt.");
          return;
        }

        if (existingProduct && payload.amount === existingProduct.amount) {
          state.receipt = state.receipt.filter(
            (item) => item.id !== payload.id
          );
        } else {
          if (existingProduct) {
            existingProduct.totalProductPrice =
              existingProduct.totalProductPrice - payload.totalProductPrice;
            existingProduct.amount = existingProduct.amount - payload.amount;
          }
        }

        state.totalAmount = state.totalAmount + payload.totalProductPrice;

        state.totalReceipt = state.receipt
          .map((item, i) => item.totalProductPrice)
          .reduce((acc, currentValue) => acc + currentValue, 0);
      },
      prepare: (id, amount, totalProductPrice) => {
        return {
          payload: {
            id,
            amount,
            totalProductPrice,
          },
        };
      },
    },
  },
});

export const { buyProduct, sellProduct } = productsSlice.actions;
export default productsSlice.reducer;
