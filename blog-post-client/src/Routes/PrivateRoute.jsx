import React from 'react';
import { useContext } from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    if (loader) {
        return (
          <div>
            <Skeleton /> 
            <Skeleton count={5} />
            
          </div>
        );
    }
    if (user) {
        return children
    }
    
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
 
    );
};

export default PrivateRoute;