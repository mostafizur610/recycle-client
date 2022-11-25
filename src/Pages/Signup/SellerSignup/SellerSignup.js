import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SellerSignup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = (data) => {
        console.log(data);
        // setSignUpError('');
        // console.log(errors);
        // createUser(data.email, data.password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //         toast('User Created Successfully')
        //         const userInfo = {
        //             displayName: data.name
        //         }
        //         updateUser(userInfo)
        //             .then(() => {
        //                 // navigate('/');
        //                 saveUser(data.name, data.email);
        //             })
        //             .catch(err => console.error(err))
        //     })
        //     .catch(error => {
        //         console.error(error)
        //         setSignUpError(error.message)
        //     });
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
                            <label className="label"> <span className="label-text">PhotoUrl</span> </label>
                            <input {...register("photoUrl")} type="text" className="input input-bordered w-full max-w-xs" />
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
                        <input className='btn btn-accent w-full mt-5' value='Signup' type="submit" />
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