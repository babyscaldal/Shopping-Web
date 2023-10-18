import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import productServices from "./productServices"
import { IProductResponse } from "./productType"
import { RootState } from "../../store"

interface IProductState {
  allProduct: IProductResponse[]
  renderProducts: IProductResponse[]
  productsPerPage: IProductResponse[]
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: any
  wishList: IProductResponse[]
  popularList: IProductResponse[]
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

export const getPopularProducts = createAsyncThunk(
  "product/getPopularProducts",
  async (_, thunkAPI) => {
    try {
      const response = await productServices.getPopularProducts()
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const getProductsInCategory = createAsyncThunk(
  "product/getProductsInCategory",
  async (id: number, thunkAPI) => {
    try {
      const response = await productServices.getProductByCategory(id)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

const getWishlistFromLocalStorage = localStorage.getItem("wishList")

const currentWishList = getWishlistFromLocalStorage
  ? JSON.parse(getWishlistFromLocalStorage)
  : null

const productState: IProductState = {
  wishList: currentWishList ? currentWishList : [],
  renderProducts: [],
  allProduct: [],
  productsPerPage: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: null,
  popularList: [],
}

export const productSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {
    addToWishList: (state, action: PayloadAction<IProductResponse>) => {
      const isAdded = state.wishList.some(
        (item) => item.id === action.payload.id,
      )
      if (isAdded) {
        state.wishList = state.wishList
      } else {
        state.wishList.push(action.payload)
      }
    },

    changeProductsPerPage: (
      state,
      action: PayloadAction<IProductResponse[]>,
    ) => {
      console.log(action.payload)
      state.productsPerPage = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<IProductResponse[]>) => {
          state.allProduct = action.payload
          state.renderProducts = action.payload
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
      .addCase(getProductsInCategory.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getProductsInCategory.fulfilled,
        (state, action: PayloadAction<IProductResponse[]>) => {
          state.renderProducts = action.payload
          state.isLoading = false
          state.isSuccess = true
          state.isError = false
        },
      )
      .addCase(getProductsInCategory.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.error
      })
      .addCase(getPopularProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getPopularProducts.fulfilled,
        (state, action: PayloadAction<IProductResponse[]>) => {
          state.popularList = action.payload
          state.isLoading = false
          state.isSuccess = true
          state.isError = false
        },
      )
      .addCase(getPopularProducts.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.error
      })
  },
})

export const allProductsState = (state: RootState) => state?.product?.allProduct
export const popularProductsState = (state: RootState) =>
  state?.product?.popularList

export const renderProductsState = (state: RootState) =>
  state?.product?.renderProducts

export const productPerPageState = (state: RootState) =>
  state?.product?.productsPerPage

export const isLoadingState = (state: RootState) => state?.product?.isLoading
export const { addToWishList, changeProductsPerPage } = productSlice.actions
export default productSlice.reducer
