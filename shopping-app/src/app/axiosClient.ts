import axios from "axios"
import queryString from "query-string"
import {
  ILoginResponseData,
  IRegisterResponseData,
} from "./Redux/users/userType"

const getTokenFromLocalStorage: string | null = localStorage.getItem("customer")

const token: ILoginResponseData | IRegisterResponseData =
  getTokenFromLocalStorage ? JSON.parse(getTokenFromLocalStorage) : null

const axiosClient = axios.create({
  headers: {
    Authorization: `Bearer ${token ? token.user.token : ""}`,
    // "content-type": "application/json",
    Accept: "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
})

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // localStorage.setItem("token", JSON.stringify(response.data?.user?.token))
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // Xử lý lỗi từ response
    // toast.error(error.message)
    // console.log(error)
    // console.log(error.message)
    return Promise.reject(error)
  },
)

export default axiosClient
