import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SellerSignup = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUserSeller, updateSeller } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('');
        console.log(errors);
        createUserSeller(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset();
                toast('User Created Successfully')
                const userInfo = {
                    displayName: data.name,
                    photoURL: data.photoURL
                }
                updateSeller(userInfo)
                    .then(() => {
                        // navigate('/');
                        // saveUser(data.name, data.email);
                    })
                    .catch(err => console.error(err))
            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message)
            });
    }


    return (
        <div>
            <div className='h-[800px] flex justify-center items-center'>
                <div className='w-96 p-8'>
                    <h2 className='text-3xl text-center mb-6'>Sellers Signup !!</h2>

                    <form onSubmit={handleSubmit(handleSignUp)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Name</span> </label>
                            <input {...register("name", { required: 'Name is required' })} type="text" className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">PhotoURL</span> </label>
                            <input {...register("photoURL")} type="text" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span> </label>
                            <input {...register("email", { required: 'Email is required' })} type="email" className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Password</span> </label>
                            <input {...register("password", {
                                required: 'Password is required',
                                minLength: {
                                    value: 6, message: 'Password must be 6 characters or longer'
                                },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password must have at least one upper case, lower case, special character and number' }
                            })} type="password" className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                        </div>
                        <input className='btn btn-accent w-full mt-5 text-white' value='Signup' type="submit" />
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </form>

                    <p>Already have an account?<Link className='text-secondary ml-1' to='/sellerLogin'>Please Login</Link></p>
                    {/* <div className='divider'>OR</div>
                    <button className='btn btn-outline w-full gap-2'>CONTINUE WITH <FaGoogle /></button> */}
                </div>
            </div>
        </div>
    );
};

export default SellerSignup;