import { data } from 'autoprefixer';
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
                const userData = {
                    name: user.displayName,
                    email: user.email,
                    role: 'user'
                }
                fetch('http://localhost:5000/google', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('user', JSON.stringify(data));
                        navigate(from, { replace: true });
                    })
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