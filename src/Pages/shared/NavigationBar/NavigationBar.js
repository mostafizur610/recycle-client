import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import img from '../../../assets/n.png'
import './Navigationbar.css'

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        localStorage.removeItem('user');
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    const menuItems = <>
        {
            user?.uid ?
                <li>
                    <Link to='/dashboard'>Dashboard</Link>
                    <li className="tooltip tooltip-open tooltip-bottom flex" data-tip={user?.displayName}>
                        <span> {
                            user?.photoURL ?
                                <img className='h-11 rounded-3xl' src={user?.photoURL} alt='' /> : <FaUser />
                        }</span>
                    </li>
                    <li><button onClick={handleLogout}>Sign Out</button></li>
                </li>
                :
                <li tabIndex={0}>
                    <Link to='/login'>
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
            <div className="flex-1 lg: ml-24 flex-wrap name-section">
                {/* <div> */}
                <span className="normal-case text-4xl text-white"> <Link to='/' ><img className='w-48 h-24' src={img} alt="" /></Link></span> <br />
                <span className='text-blue-600'> <br />Resale Desktop Accessories</span>
                {/* </div> */}
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