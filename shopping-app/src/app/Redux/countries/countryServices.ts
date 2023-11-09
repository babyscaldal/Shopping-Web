import axiosClient from "../../axiosClient"

const countryServices = {
  getAllCountries: async () => {
    const COUNTRIES_URL = "/countries/country-by-cities.json"
    const response = await axiosClient.get(COUNTRIES_URL)
    return response
  },
}

export default countryServices
