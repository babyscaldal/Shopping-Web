import axiosClient from "../../axiosClient"

const productServices = {
  getAllProducts: async () => {
    const GET_ALL_PRODUCT_URL = "https://fakestoreapi.com/products"
    const response = await axiosClient.get(GET_ALL_PRODUCT_URL)
    return response
  },
}

export default productServices
