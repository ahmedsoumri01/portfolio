// api.js
import axios from 'axios';

//use the variable from env file 
// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
// });


const api =  axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;