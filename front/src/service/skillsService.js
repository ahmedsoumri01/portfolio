// service/skillsService.js
import api from "./api";
const baseURL = process.env.REACT_APP_API_URL + "/api";
// Get all skills
export const getSkills = async () => {
  try {
    const response = await api.get(`${baseURL}/skills`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Get skill by id
export const getSkillById = async (id) => {
  try {
    const response = await api.get(`${baseURL}/skills/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Create a new skill
export const createSkill = async (skill) => {
  try {
    const response = await api.post(`${baseURL}/skills`, skill);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Update a skill
export const updateSkill = async (id, skill) => {
  try {
    const response = await api.put(`${baseURL}/skills/${id}`, skill);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Delete a skill
export const deleteSkill = async (id) => {
  try {
    const response = await api.delete(`${baseURL}/skills/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};