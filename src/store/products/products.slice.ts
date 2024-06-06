import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "./product.type";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category: string, thunkAPI) => {
    try {
      let response;
      if (category) {
        response = await axios.get<IProduct[]>(
          `https://fakestoreapi.com/products/category/${category}`
        );
      } else {
        response = await axios.get<IProduct[]>(
          "https://fakestoreapi.com/products"
        );
      }
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Error loading products");
    }
  }
);

type ProductsType = {
  products: IProduct[];
  isLoading: boolean;
  error: string;
};

const initialState: ProductsType = {
  products: [],
  isLoading: false,
  error: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  //extraReducers에 케이스 리듀서를 추가하면
  // 프로미스의 진행 상태에 따라서 리듀서를 실행할 수 있다.
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default productsSlice.reducer;
