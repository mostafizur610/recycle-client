import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import NavigationBar from '../../shared/NavigationBar/NavigationBar';

const Dashboard = () => {
    useTitle('Dashboard');
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h2>ksdjfksdfksdhfkj</h2>
        </div>
    );
};

export default Dashboard;