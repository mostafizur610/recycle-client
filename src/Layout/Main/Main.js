import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/shared/Footer/Footer';
import NavigationBar from '../../Pages/shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;