import React, {useState} from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = ({onLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        onLogin();
    }

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
                <form onSubmit={handleLogin} className="login__form">
                <input className="login__input" id="username" name="username" type="text" placeholder="Name" onChange={({target}) => setEmail(target.value)} />
                <input className="login__input" id="password" name="password" type="password" placeholder="Password" onChange={({target}) => setPassword(target.value)} />
                <button type="submit" className="login__button">Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Login;