// service/adminService.js
import api from "./api";
const baseURL = process.env.REACT_APP_API_URL + "/api";

const token = localStorage.getItem("token");
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};
// get admin profile
export const getAdminProfile = async (id) => {
  try {
    const res = await api.get(`${baseURL}/admin/profile/${id}`, config); 
    return res.data;
  } catch (error) {
    throw error;
  }
};

// update admin profile
export const updateAdminProfile = async (id, data) => {
  try {
    const res = await api.put(
      `${baseURL}/admin/update-profile/${id}`,
      data,
      config
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
