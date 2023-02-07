import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import NavigationBar from '../../Pages/shared/NavigationBar/NavigationBar';

const DashboardLayout = () => {
    const { logOut } = useContext(AuthContext);

    let currentUser;
    const localStorageData = localStorage.getItem('user');
    if (localStorageData) {
        currentUser = JSON.parse(localStorageData);
    } else {
        logOut();
    }
    return (
        <div>
            <NavigationBar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {/* user */}
                        {
                            currentUser && currentUser.role === 'user' && <>
                                <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                                <li><Link to="/dashboard/myWishlist">My Wishlist</Link></li>
                            </>
                        }
                        {/* seller  */}
                        {
                            currentUser && currentUser.role === 'seller' && <>
                                <li><Link to="/dashboard/addProducts">Add Products</Link></li>
                                <li><Link to="/dashboard/myProducts">My Products</Link></li>
                                <li><Link to="/dashboard/myBuyers">My Buyers</Link></li>
                            </>
                        }
                        {/* admin  */}
                        {
                            currentUser && currentUser.role === 'admin' && <>
                                <li><Link to="/dashboard/allUsers">All Users</Link></li>
                                <li><Link to="/dashboard/allSellers">All Sellers</Link></li>
                                <li><Link to="/dashboard/reportedItems">Reported Items</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;