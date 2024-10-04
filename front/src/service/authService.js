// service/authService.js
import api from './api';
const baseURL = process.env.REACT_APP_API_URL + "/api";

export const login = async (email, password) => {
    try {
        const response = await api.post(`${baseURL}/auth/login`, { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
    }