import React,{ useEffect} from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ element }) => {
  const token = localStorage.getItem('token');
 
  //check if the token is not expired 
  const checkToken = () => {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Date.now() / 1000;
    return decodedToken.exp > currentTime;
  };
  if (!token || !checkToken()) {
    return <Navigate to="/login" />;
  }
  return element;
}

export default AdminRoute;