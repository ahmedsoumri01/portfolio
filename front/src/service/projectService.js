 
// service/projectService.js
import api from './api';
const baseURL = process.env.REACT_APP_API_URL + "/api";
const token = localStorage.getItem("token");
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};
// get all projects
export const getProjects = async () => {
    try {
        const response = await api.get(`${baseURL}/projects`,config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
// get project by id
export const getProjectById = async (id) => {
    try {
        const response = await api.get(`${baseURL}/projects/${id}`,config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// create a new project
export const createProject = async (project) => {
    try {
        const response = await api.post(`${baseURL}/projects`, project,config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// update a project
export const updateProject = async (id, project) => {
    try {
        const response = await api.put(`${baseURL}/projects/${id}`, project,config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// delete a project
export const deleteProject = async (id) => {
    try {
        const response = await api.delete(`${baseURL}/projects/${id}`,config);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}