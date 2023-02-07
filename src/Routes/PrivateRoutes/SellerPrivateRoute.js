import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Pages/shared/Loading/Loading';

const SellerPrivateRoutes = ({ children }) => {
    const { user, loading, logOut } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }

    let currentUser;
    const localStorageData = localStorage.getItem('user');
    if (localStorageData) {
        currentUser = JSON.parse(localStorageData);
        if (user.email === currentUser.email && currentUser.role === 'seller') {
            return children;
        }
    }
    logOut();
    return <Navigate to='/userLogin' state={{ from: location }} replace></Navigate>;
};

export default SellerPrivateRoutes;