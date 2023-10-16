import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import productServices from "./productServices"
import { IProductResponse } from "./productType"
import { RootState } from "../../store"

interface IProductState {
  allProduct: IProductResponse[]
  renderProducts: IProductResponse[]
  productsPerPage: IProductResponse[]
  menClothing: IProductResponse[]
  womenClothing: IProductResponse[]
  electronics: IProductResponse[]
  jewelry: IProductResponse[]
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: any
  wishList: IProductResponse[]
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

export const getProductsInCategory = createAsyncThunk(
  "product/getProductsInCategory",
  async (categoryName: string, thunkAPI) => {
    try {
      const response = await productServices.getProductByCategory(categoryName)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const getMenClothing = createAsyncThunk(
  "product/getMenClothing",
  async (_, thunkAPI) => {
    try {
      const response = await productServices.getMenClothingData()
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const getWomenClothing = createAsyncThunk(
  "product/getWomenClothing",
  async (_, thunkAPI) => {
    try {
      const response = await productServices.getWomenClothingData()
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const getElectronics = createAsyncThunk(
  "product/getElectronics",
  async (_, thunkAPI) => {
    try {
      const response = await productServices.getElectronicsData()
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)
export const getJewelry = createAsyncThunk(
  "product/getJewelry",
  async (_, thunkAPI) => {
    try {
      const response = await productServices.getJewelryData()
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
  menClothing: [],
  womenClothing: [],
  electronics: [],
  jewelry: [],
  productsPerPage: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: null,
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
      .addCase(getMenClothing.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getMenClothing.fulfilled,
        (state, action: PayloadAction<IProductResponse[]>) => {
          state.menClothing = action.payload
          state.isLoading = false
          state.isSuccess = true
          state.isError = false
        },
      )
      .addCase(getMenClothing.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.error
      })
      .addCase(getWomenClothing.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getWomenClothing.fulfilled,
        (state, action: PayloadAction<IProductResponse[]>) => {
          state.womenClothing = action.payload
          state.isLoading = false
          state.isSuccess = true
          state.isError = false
        },
      )
      .addCase(getWomenClothing.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.error
      })
      .addCase(getElectronics.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getElectronics.fulfilled,
        (state, action: PayloadAction<IProductResponse[]>) => {
          state.electronics = action.payload
          state.isLoading = false
          state.isSuccess = true
          state.isError = false
        },
      )
      .addCase(getElectronics.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.error
      })
      .addCase(getJewelry.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getJewelry.fulfilled,
        (state, action: PayloadAction<IProductResponse[]>) => {
          state.jewelry = action.payload
          state.isLoading = false
          state.isSuccess = true
          state.isError = false
        },
      )
      .addCase(getJewelry.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.error
      })
  },
})

export const allProductsState = (state: RootState) => state?.product?.allProduct

export const menClothingState = (state: RootState) =>
  state?.product?.menClothing

export const womenClothingState = (state: RootState) =>
  state?.product?.womenClothing

export const electronicsState = (state: RootState) =>
  state?.product?.electronics

export const jewelryState = (state: RootState) => state?.product?.jewelry

export const renderProductsState = (state: RootState) =>
  state?.product?.renderProducts

export const productPerPageState = (state: RootState) =>
  state?.product?.productsPerPage

export const isLoadingState = (state: RootState) => state?.product?.isLoading
export const { addToWishList, changeProductsPerPage } = productSlice.actions
export default productSlice.reducer
