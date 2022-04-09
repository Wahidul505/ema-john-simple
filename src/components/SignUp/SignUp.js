import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const handleSignUp = e =>{
        e.preventDefault();
        setEmail(e.target.email.value);
        setPassword(e.target.password.value);
        setConfirmPassword(e.target.confirm_password.value);
        if(password !== confirmPassword){
            setError("Password didn't matched");
            return;
        }
        setError('');
    }
    return (
        <div className='form-container'>
               <h1 className='form-title'>Sign Up</h1> 
               <form onSubmit={handleSignUp}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirm_password" required/>
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