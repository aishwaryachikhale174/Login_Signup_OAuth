import React, { useState } from 'react';
import './Signup.css';
import { GoogleLogin } from 'react-google-login';
import {Link} from "react-router-dom"

const clientId = "636899477836-oq0pp2l5ajm4oj3fi3g0bjebhbhabhel.apps.googleusercontent.com"
const Signup = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        showPassword: false,
    });

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setData((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const toggleShowPassword = () => {
        setData((prev) => ({...prev, showPassword: !prev.showPassword}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation logic can be added here
        setErrors({ username: "", email: "", password: "" }); // Reset errors
    };

    // Google OAuth success callback
    const handleGoogleSuccess = (response) => {
        console.log('Google Login Success:', response);
        // Handle the response, e.g., send it to your backend for authentication
    };

    // Google OAuth failure callback
    const handleGoogleFailure = (error) => {
        console.error('Google Login Error:', error);
        // Handle the error if needed
    };


    return (
        <div>
            <div className="container">
                <h1>Create Account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            placeholder="Enter Username" 
                            id="username" 
                            value={data.username}
                            name="username"
                            onChange={handleChange}
                        />
                        <span className="error-message">{errors.username}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            placeholder="Enter Email"
                            id="email"
                            value={data.email}
                            name="email"
                            onChange={handleChange}
                        />
                        <span className="error-message">{errors.email}</span>
                    </div>
                    <div className="form-group show-password">
                        <label htmlFor="password">Password</label>
                        <div className="password-input">
                            <input 
                                type={data.showPassword ? "text" : "password"} 
                                placeholder="Enter Password"
                                id="password" 
                                value={data.password}
                                name="password"
                                onChange={handleChange}
                            />
                            <i 
                                className={`fas ${data.showPassword ? "fa-eye-slash" : "fa-eye"} toggle-password`} 
                                onClick={toggleShowPassword}
                            ></i>
                        </div>
                        <span className="error-message">{errors.password}</span>
                    </div>
                    <button type="submit" className="btn">SIGN UP</button>
                    <p>Already have an account? <Link to="/"><span className='signbtn'>Sign in</span></Link></p>
                </form>
                <div className="oauth-container">
                    {/* Google OAuth button */}
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Login with Google"
                        onSuccess={handleGoogleSuccess}
                        onFailure={handleGoogleFailure}
                        cookiePolicy={'single_host_origin'}
                        className="google-login-button"
                    />
                </div>
            </div>
     
        </div>
    );
}

export default Signup;
