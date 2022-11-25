import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
// import { FaGoogle } from 'react-icons/fa';

const SellerLogin = () => {
    const { handleSubmit, formState: { errors }, register } = useForm();

    const handleLogin = data => {
        console.log(data);
    }
    return (
        <div>
            <div className='h-[800px] flex justify-center items-center'>
                <div className='w-96 p-8'>
                    <h2 className='text-3xl text-center mb-6'>Sellers Login !!</h2>

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


                        <input className='btn btn-accent w-full' value='Login' type="submit" />
                    </form>

                    <p>New to exDesktop Accessories<Link className='text-secondary ml-1' to='/sellerSignup'>Create new account</Link></p>
                    {/* <div className='divider'>OR</div>
                    <button className='btn btn-outline w-full gap-2'>CONTINUE WITH <FaGoogle /></button> */}
                </div>
            </div>
        </div>
    );
};



export default SellerLogin;