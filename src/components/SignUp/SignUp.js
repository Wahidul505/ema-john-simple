import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const handleGetEmail = e =>{
        setEmail(e.target.value);
    };
    const handleGetPassword = e =>{
        setPassword(e.target.value);
    };
    const handleGetConfirmPassword = e =>{
        setConfirmPassword(e.target.value);
    };
    const handleSignUp = e =>{
        e.preventDefault();
        console.log(email, password);
        if(password !== confirmPassword){
            setError("Password didn't matched");
            return;
        }
        if(password.length < 6){
            setError('Password is too short');
            return;
        }
        createUserWithEmailAndPassword(email, password);
        setError('');
    };
    if(user){
        console.log(user);
        navigate('/shop');
    }
    return (
        <div className='form-container'>
               <h1 className='form-title'>Sign Up</h1> 
               <form onSubmit={handleSignUp}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleGetEmail} type="email" name="email" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handleGetPassword} type="password" name="password" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleGetConfirmPassword} type="password" name="confirm_password" required/>
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <input className='submit-btn' type="submit" value="SignUp" />
               </form>
               <p>Already have an Account? <Link className='form-link' to='/login'>Log In</Link></p>
               <div className='or'>
                   <p className='line'></p>
                   <p>or</p>
                   <p className='line'></p>
               </div>
               <button className='google-signIn'>Continue with Google</button>
        </div>
    );
};

export default SignUp;