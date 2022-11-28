import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Pages/shared/Loading/Loading';

const AdminRoute = ({ children }) => {
    const { user, loading, logOut } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    let currentUser;
    const localStorageData = localStorage.getItem('user');
    if (localStorageData) {
        currentUser = JSON.parse(localStorageData);
        if (user.email === currentUser.email && currentUser.role === 'admin') {
            return children;
        }
    }
    logOut();
    return <Navigate to="/adminLogin" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;