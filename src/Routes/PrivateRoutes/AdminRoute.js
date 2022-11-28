import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
// import { AuthContext } from '../../contexts/AuthProvider';
// import useAdmin from '../../hooks/useAdmin';
import Loading from '../../Pages/shared/Loading/Loading';
// import Loading from '../../Pages/Shared/Loading/Loading';

const AdminRoute = ({ children }) => {
    const { user, loading, logOut } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
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