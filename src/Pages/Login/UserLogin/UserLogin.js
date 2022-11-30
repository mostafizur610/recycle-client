import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
import useTitle from '../../../Hooks/useTitle';

const UserLogin = () => {
    useTitle('UserLogin');
    const { handleSubmit, formState: { errors }, register, reset } = useForm();
    const { signInUser } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    // redirect
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        setLoginError('');
        loginUser(data.email, data.password);
    }

    const loginUser = async (email, password) => {
        const role = location.pathname.match('user') ? 'user' : '';
        const user = { email, role };
        console.log(user);
        fetch('https://exdesktop-accessories-server.vercel.app/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                signInUser(email, password)
                    .then(result => {
                        reset();
                        localStorage.setItem('user', JSON.stringify(data));
                        navigate(from, { replace: true });
                    })
                    .catch(error => {
                        setLoginError(error.message);
                    })
            })
            .catch(error => {
                setLoginError('User not found')
            })
    }
    return (
        <div>
            <div className='h-[800px] flex justify-center items-center'>
                <div className='w-96 p-8'>
                    <h2 className='text-3xl text-center mb-6'>Users Login !!</h2>

                    <form onSubmit={handleSubmit(handleLogin)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span> </label>
                            <input {...register("email", { required: 'Email is required' })} type="email" className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Password</span> </label>
                            <input {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })} type="password" className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                            <label className="label"> <span className="label-text">Forgot Password?</span> </label>
                        </div>


                        <input className='btn btn-accent w-full text-white' value='Login' type="submit" />
                        <div>
                            {
                                loginError && <p className='text-red-600'>{loginError}</p>
                            }
                        </div>
                    </form>

                    <p>New to exDesktop Accessories<Link className='text-secondary ml-1' to='/userSignup'>Create new account</Link></p>
                    <div className='divider'>OR</div>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default UserLogin;