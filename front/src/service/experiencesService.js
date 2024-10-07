// service/experienceService.js
import api from './api';
const baseURL = process.env.REACT_APP_API_URL + "/api";


const token = localStorage.getItem("token");
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};
//get all experiences
export const getExperiences = async () => {
    try {
        const response = await api.get(`${baseURL}/experiences`,config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

//get experience by id
export const getExperienceById = async (id) => {
    try {
        const response = await api.get(`${baseURL}/experiences/${id}`,config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

//create a new experience
export const createExperience = async (experience) => {
    try {
        const response = await api.post(`${baseURL}/experiences`, experience,config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

//update an experience
export const updateExperience = async (id, experience) => {
    try {
        const response = await api.put(`${baseURL}/experiences/${id}`, experience,config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

//delete an experience
export const deleteExperience = async (id) => {
    try {
        const response = await api.delete(`${baseURL}/experiences/${id}`,config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}