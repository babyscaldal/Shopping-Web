import axiosClient from "../../axiosClient"

const blogServices = {
  getAllBlogs: async () => {
    const GET_ALL_BLOGS_URL = "http://localhost:3000/blogs"
    const response = await axiosClient.get(GET_ALL_BLOGS_URL)
    return response
  },
}

export default blogServices
