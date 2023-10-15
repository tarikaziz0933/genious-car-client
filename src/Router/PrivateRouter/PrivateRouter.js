import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <h1>Loading....</h1>
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRouter;