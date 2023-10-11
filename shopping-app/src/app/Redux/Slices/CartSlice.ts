import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../store"
import { ICartList } from "../../../components/CartTable"

// Define a type for the slice state
interface CartState {
  isSelectAll: boolean
  selectedCartList: ICartList[]
}

// Define the initial state using that type
const initialState: CartState = {
  isSelectAll: false,
  selectedCartList: [],
}

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    selectAll: (state) => {
      state.isSelectAll = !state.isSelectAll
    },
    addToSelectedList: (state, action: PayloadAction<ICartList>) => {
      const isAdded = state.selectedCartList.some(
        (item) => item.id === action.payload.id,
      )
      if (isAdded) {
        state.selectedCartList = [...state.selectedCartList]
      }
      state.selectedCartList = [...state.selectedCartList, action.payload]
    },
    removeFromSelectedList: (state, action: PayloadAction<ICartList>) => {
      state.selectedCartList = state.selectedCartList.filter(
        (item) => item.id !== action.payload.id,
      )
    },
  },
})

export const { selectAll, addToSelectedList, removeFromSelectedList } =
  cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const isSelectAllState = (state: RootState) => state.cart.isSelectAll
export const selectedCartListState = (state: RootState) =>
  state.cart.selectedCartList

export default cartSlice.reducer
