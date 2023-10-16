import axiosClient from "../../axiosClient"

const productServices = {
  getAllProducts: async () => {
    const GET_ALL_PRODUCT_URL = "https://fakestoreapi.com/products"
    const response = await axiosClient.get(GET_ALL_PRODUCT_URL)
    return response
  },

  getProductByCategory: async (category: string) => {
    const GET_PRODUCTS_IN_CATEGORY_URL = `https://fakestoreapi.com/products/category/${category}`

    const response = await axiosClient.get(GET_PRODUCTS_IN_CATEGORY_URL)
    return response
  },

  getMenClothingData: async () => {
    const GET_MenClothing_URL = `https://fakestoreapi.com/products/category/men's%20clothing`

    const response = await axiosClient.get(GET_MenClothing_URL)
    return response
  },

  getWomenClothingData: async () => {
    const GET_WomenClothing_URL = `https://fakestoreapi.com/products/category/women's%20clothing`

    const response = await axiosClient.get(GET_WomenClothing_URL)
    return response
  },

  getElectronicsData: async () => {
    const GET_Electronics_URL = `https://fakestoreapi.com/products/category/electronics`

    const response = await axiosClient.get(GET_Electronics_URL)
    return response
  },

  getJewelryData: async () => {
    const GET_Jewelry_URL = `https://fakestoreapi.com/products/category/jewelery`

    const response = await axiosClient.get(GET_Jewelry_URL)
    return response
  },
}

export default productServices
