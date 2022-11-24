import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className="navbar bg-amber-100 border-secondary">
            <div className="flex-1">
                <Link to='/' ><span className="btn btn-ghost normal-case text-4xl text-blue-900">exDesktop Accessories </span> </Link>
                {/* <span className='text-blue-600 pl-6'> <br /> Resale Products</span> */}
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/blogs'>Blog</Link></li>
                    <li tabIndex={0}>
                        <Link>
                            Login
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2 bg-base-100">
                            <li><Link to='/userLogin'>User Login</Link></li>
                            <li><Link to='/sellerLogin'>Seller Login</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavigationBar;