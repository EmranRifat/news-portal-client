import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/Authprovider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(authContext);
    const location=useLocation();
    // const from=location?.state?.from.pathname||'/';                             
  
    if(loading){
        return   <Spinner animation="border" variant="primary" />
    }
  
    if(user && user.uid){
        return children;
    }
   
    return <Navigate to="/login" state={{from:location}}  replace></Navigate>;
};

export default PrivateRoute;