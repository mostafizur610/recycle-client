import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='text-center mt-24'><button className="btn btn-ghost loading">loading</button></div>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/userLogin' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;