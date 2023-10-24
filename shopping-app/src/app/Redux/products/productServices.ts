import axiosClient from "../../axiosClient"

const productServices = {
  getAllProducts: async () => {
    const GET_ALL_PRODUCT_URL = "http://localhost:3000/products"
    const response = await axiosClient.get(GET_ALL_PRODUCT_URL)
    return response
  },

  getProductByCategory: async (id: number) => {
    const GET_PRODUCTS_IN_CATEGORY_URL = `http://localhost:3000/categories/${id}/products`

    const response = await axiosClient.get(GET_PRODUCTS_IN_CATEGORY_URL)
    return response
  },

  getPopularProducts: async () => {
    const GET_POPULAR_PRODUCT_URL = "http://localhost:3000/popular"
    const response = await axiosClient.get(GET_POPULAR_PRODUCT_URL)
    return response
  },
  searchProducts: async (searchValue: string) => {
    const SEARCH_PRODUCT_URL = `http://localhost:3000/products?q=${encodeURIComponent(
      searchValue,
    )}`
    const response = await axiosClient.get(SEARCH_PRODUCT_URL)
    return response
  },
}

export default productServices
