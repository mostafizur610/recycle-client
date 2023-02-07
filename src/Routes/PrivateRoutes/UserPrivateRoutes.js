import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Loading from '../../Pages/shared/Loading/Loading';

const UserPrivateRoutes = ({ children }) => {
    const { user, loading, logOut } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }

    console.log(user);
    let currentUser;
    const localStorageData = localStorage.getItem('user');
    if (localStorageData) {
        currentUser = JSON.parse(localStorageData);
        console.log(currentUser);
        if (user.email === currentUser.email && currentUser.role === 'user') {
            return children;
        }
    }
    logOut();
    return <Navigate to='/userLogin' state={{ from: location }} replace></Navigate>;
};

export default UserPrivateRoutes;