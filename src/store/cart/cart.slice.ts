import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../products/product.type";

const initialState: CartState = {
  products: localStorage.getItem("cateProducts")
    ? JSON.parse(localStorage.getItem("cartProducts") || "")
    : [],
  totalPrice: 0,
  userId: localStorage.getItem("userId")
    ? JSON.parse(localStorage.getItem("userId") || "")
    : "",
};

interface cartSlice {
  products: IProduct[];
  totalPrice: number;
  userId: string;
}

export const postOrder = createAsyncThunk(
  "cart/postOrder",
  async (order: CartState, thunkApi) => {
    try {
      await axios.post(
        "https://665d9c2de88051d604078146.mockapi.io/orders",
        order
      );

      thunkApi.dispatch(sendOrder());
    } catch (e) {
      return thunkApi.rejectWithValue("Error sending order");
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;

      localStorage.setItem("userId", JSON.stringify(state.userId));
    },
    removeUserId: (state) => {
      state.userId = "";

      localStorage.setItem("userId", JSON.stringify(state.userId));
    },
    addTocart: (state, action: PayloadAction<IProduct>) => {
      state.products.push({
        ...action.payload,
        quantity: 1,
        total: action.payload.price,
      });
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
    incrementProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: item.price * (item.quantity + 1),
            }
          : item
      );
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
    decrementProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity - 1,
              total: item.price * (item.quantity - 1),
            }
          : item
      );
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
    getTotalPrice: (state) => {
      state.totalPrice = state.products.reduce(
        (acc, item) => (acc += item.total),
        0
      );
      return state;
    },
    sendOrder: (state) => {
      state.products = [];
      localStorage.setItem("cartProducts", JSON.stringify(state.products));
    },
  },
});

export const {
  addTocart,
  decrementProduct,
  deleteFromCart,
  incrementProduct,
  getTotalPrice,
  setUserId,
  removeUserId,
  sendOrder,
} = cartSlice.actions;

export default cartSlice.reducer;
