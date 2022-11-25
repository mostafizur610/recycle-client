import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    const menuItems = <>
        {
            user?.uid ?
                <li className='flex'>
                    <p className=' text-black'>{user?.displayName}</p>

                    <span className='mr-4'> {
                        user?.photoURL ?
                            <img className='h-12 rounded-3xl' src={user?.photoURL} alt='' /> : <FaUser />
                    }</span>
                    <li><button onClick={handleLogout}>Sign Out</button></li>
                </li>
                :
                <li tabIndex={0}>
                    <Link>
                        SignIn
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                    </Link>
                    <ul className="p-2 bg-accent">
                        <li><Link to='/userLogin'>User SignIn</Link></li>
                        <li><Link to='/sellerLogin'>Seller SignIn</Link></li>
                    </ul>
                </li>
        }
    </>


    return (
        <div className="navbar bg-accent border-secondary text-white sticky">
            <div className="flex-1">
                <Link to='/' ><span className="btn btn-ghost normal-case text-4xl text-white">exDesktop Accessories </span> </Link>
                {/* <span className='text-blue-600 pl-6'> <br /> Resale Products</span> */}
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blogs'>Blog</Link></li>
                    {
                        menuItems
                    }

                </ul>
            </div>
        </div>
    );
};

export default NavigationBar;