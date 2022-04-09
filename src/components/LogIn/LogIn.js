import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {
    return (
        <div className='form-container'>
               <h1 className='form-title'>Login</h1> 
               <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required/>
                    </div>
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