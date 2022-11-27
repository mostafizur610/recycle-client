import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';

const Login = () => {
    useTitle('Login');
    return (
        <div className='flex flex-wrap text-center justify-center my-32 gap-4'>
            <div className="form-control">
                <Link to='/userLogin'>
                    <label className="label cursor-pointer gap-2">
                        <span className="label-text text-lg">User SignIn</span>
                        <input type="radio" name="radio-10" className="radio checked:bg-red-500" />
                    </label>
                </Link>
            </div>

            <div className="form-control">
                <Link to='/sellerLogin'>
                    <label className="label cursor-pointer gap-2">
                        <span className="label-text text-lg">Seller SignIn</span>
                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" />
                    </label>
                </Link>
            </div>


        </div>
    );
};

export default Login;