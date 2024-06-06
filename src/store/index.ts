import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/user.slice";
import { categoriesSlice } from "./categories/categories.slice"; // 수정
import productsReducer from "./products/products.slice"; // 수정
import cartReducer from "./cart/cart.slice";
import productReducer from "./products/product.slice";
import orderReducer from "./order/order.slice";

const store = configureStore({
  reducer: {
    orderSlice: orderReducer,
    productSlice: productReducer,
    cartSlice: cartReducer,
    productsSlice: productsReducer, // 수정
    categoriesSlice: categoriesSlice.reducer, // 수정
    userSlice: userSlice.reducer, // 수정
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
