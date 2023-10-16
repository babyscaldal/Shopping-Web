import axiosClient from "../../axiosClient"

const categoryService = {
  getAllCategories: async () => {
    const GET_ALL_CATEGORY_URL = "https://fakestoreapi.com/products/categories"
    const response = await axiosClient.get(GET_ALL_CATEGORY_URL)
    return response
  },
}

export default categoryService
