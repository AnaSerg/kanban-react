import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div className="container">
            <div className="login">
                <h2 className="login__welcome">
                    Log in
                </h2>
                <div className="login__signup">
                    <p className="login__question">Don't have an account?</p>
                    <Link to="/register" className="login__register-link">Sign up</Link>
                </div>
                <form className="login__form">
                <input className="login__input" id="username" name="username" type="text" placeholder="Name" />
                <input className="login__input" id="password" name="password" type="password" placeholder="Password" />
                <button type="submit" className="login__button">Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Login;