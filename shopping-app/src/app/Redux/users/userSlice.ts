import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import authServices from "./userService"
import { toast } from "react-toastify"
import {
  IRegisterFormValue,
  IRegisterInfoData,
} from "../../../components/SignUpForm"
import { ILoginRequestData, IRegisterRequestData } from "./userType"
import { RootState } from "../../store"

interface IAuthState {
  isError: boolean
  isSuccess: boolean
  isLoading: boolean
  message: string
  createdUser: IRegisterRequestData
  user: ILoginRequestData
  usersClient: IRegisterInfoData[]
}

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData: IRegisterRequestData, thunkAPI) => {
    try {
      const res = await authServices.register(userData)
      return res
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData: ILoginRequestData, thunkAPI) => {
    try {
      return await authServices.login(userData)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  },
)

const allUsers = localStorage.getItem("allUsers")
console.log(allUsers)

const authState: IAuthState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
  createdUser: {} as IRegisterRequestData,
  user: {} as ILoginRequestData,
  usersClient: allUsers ? JSON.parse(allUsers) : [],
}

export const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    saveUserToClient: (state, action: PayloadAction<IRegisterInfoData>) => {
      const isRegistered = state.usersClient.some(
        (user) => user.email === action.payload.email,
      )
      if (!isRegistered) {
        state.usersClient.push(action.payload)
        localStorage.setItem("allUsers", JSON.stringify(state.usersClient))
      } else {
        state.usersClient = state.usersClient
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<IRegisterRequestData>) => {
          state.isLoading = false
          state.isSuccess = true
          state.isError = false
          state.createdUser = action.payload

          // const isRegistered = state.usersClient.some(
          //   (user) => user.email === action.payload.user.email,
          // )
          // if (!isRegistered) {
          //   state.usersClient.push(action.payload.user)
          // } else {
          //   state.usersClient = state.usersClient
          // }

          if (state.isSuccess) {
            toast.success("User is created successfully!")
          }
        },
      )
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        if (state.isError) {
          toast.error(
            "This user name or email has been taken. Please try again!",
          )
        }
      })

      //Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<ILoginRequestData>) => {
          state.isLoading = false
          state.isSuccess = true
          state.isError = false
          state.user = action.payload
          if (state.isSuccess) {
            toast.success("User logged in successfully")
          }
        },
      )
      .addCase(loginUser.rejected, (state, action) => {
        console.log(action)
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        if (state.isError) {
          toast.error("This user name or password was wrong. Please try again!")
        }
      })
  },
})

export const usersSaved = (state: RootState) => state?.auth?.usersClient

export const { saveUserToClient } = authSlice.actions
export default authSlice.reducer
