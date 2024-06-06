import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../products/product.type";
import { IOrder } from "./order.type";

export const fetchOrder = createAsyncThunk(
  "order/fetchOrder",
  async (userId: string, thunkApi) => {
    try {
      const response = await axios.get<IOrder[]>(
        `https://665d9c2de88051d604078146.mockapi.io/orders?search=${userId}`
      );
      console.log(userId);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue("Error receving order");
    }
  }
);

type OrderState = {
  order: IOrder[];
  isLoading: boolean;
  error: string;
};

const initialState: OrderState = {
  order: [],
  isLoading: false,
  error: "",
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order = action.payload;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default orderSlice.reducer;
