import axiosClient from "../../axiosClient"
import { IContact } from "./contactType"

const contactServices = {
  postContactInfo: async (contactData: IContact) => {
    const POST_CONTACT_INFO_URL = "http://localhost:3000/contacts"
    const response = await axiosClient.post(POST_CONTACT_INFO_URL, contactData)
    return response
  },
}

export default contactServices
