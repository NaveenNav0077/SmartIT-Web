import React from 'react'
import { FaGoogle } from 'react-icons/fa';
import './auth.scss';

function Auth() {
    return (
        <div className="auth">
            <div className="auth__button">
                <FaGoogle className="auth__button__icon" size={25} />
                <div className="auth__button__text">Google</div>
            </div>
        </div>
    )
}

export default Auth
