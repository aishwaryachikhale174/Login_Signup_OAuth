import React, { useState } from 'react'
import "./Login.css"
import {Link} from "react-router-dom"

const Login = () => {
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
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <p>Please sign in to continue</p>
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
                        onClick={toggleShowPassword}>
                    </i>
                 </div>
                <span className="error-message">{errors.password}</span>
            </div>
            <button type="submit" className="btn">LOGIN</button>
            <p>Don't have an account ? <Link to ="/signup"><spam className="loginbtn">Sign up</spam></Link></p>
        </form>
    </div>
  )
}

export default Login