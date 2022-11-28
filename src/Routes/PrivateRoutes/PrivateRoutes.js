import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Pages/shared/Loading/Loading';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/userLogin' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;