import axiosClient from "../app/axiosClient"

const usersApi = {
  getUsers: async (searchValue: string) => {
    const url = `users/search?q=${encodeURIComponent(searchValue)}&type=less`
    const res = await axiosClient.get(url)
    return res.data
  },
}

export default usersApi
