import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './LogIn.css';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleGetEmail = e => {
        setEmail(e.target.value);
    };
    const handleGetPassword = e => {
        setPassword(e.target.value);
    };
    const handleLogIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    if(user){
        navigate(from, {replace:true});
    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleLogIn}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleGetEmail} type="email" name="email" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={handleGetPassword} type="password" name="password" required />
                </div>
                {
                    loading && <p>Loading...</p>
                }
                <p style={{color: 'red'}}>{error?.message}</p>
                <input className='submit-btn' type="submit" value="Login" />
            </form>
            <p>New to Ema-John? <Link className='form-link' to='/signup'>Create New Account</Link></p>
            <div className='or'>
                <p className='line'></p>
                <p>or</p>
                <p className='line'></p>
            </div>
            <button className='google-signIn'>Continue with Google</button>
        </div>
    );
};

export default LogIn;