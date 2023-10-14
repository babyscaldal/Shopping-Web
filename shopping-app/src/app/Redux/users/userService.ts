import axiosClient from "../../axiosClient"
import { ILoginRequestData, IRegisterRequestData } from "./userType"

const authServices = {
  register: async (userData: IRegisterRequestData) => {
    const REGISTER_URL = "https://api.realworld.io/api/users"
    const response = await axiosClient.post(REGISTER_URL, userData)
    return response.data
  },
  login: async (userData: ILoginRequestData) => {
    const LOGIN_URL = "https://api.realworld.io/api/users/login"
    const response = await axiosClient.post(LOGIN_URL, userData)
    return response.data
  },
}

export default authServices
