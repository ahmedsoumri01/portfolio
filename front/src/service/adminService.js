// service/adminService.js
import api from "./api";
const baseURL = process.env.REACT_APP_API_URL + "/api";

export const getAdminProfile = async (id) => {
  try {
    const response = await api.get(`${baseURL}/admin/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const updateAdminProfile = async (id, admin) => {
  try {
    const response = await api.put(`${baseURL}/admin/${id}`, admin);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
