import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    // redirect
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn btn-outline w-full gap-2'>CONTINUE WITH <FaGoogle /></button>
        </div>
    );
};

export default SocialLogin;