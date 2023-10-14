import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import productServices from "./productServices"
import { IProductResponse } from "./productType"
import { RootState } from "../../store"

interface IProductState {
  product: IProductResponse[]
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: any
}

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, thunkAPI) => {
    try {
      const response = await productServices.getAllProducts()
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

const productState: IProductState = {
  product: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: null,
}

export const productSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<IProductResponse[]>) => {
          state.product = action.payload
          state.isLoading = false
          state.isSuccess = true
          state.isError = false
        },
      )
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.error
      })
  },
})

export const productsResponseData = (state: RootState) => state.product.product

export default productSlice.reducer
