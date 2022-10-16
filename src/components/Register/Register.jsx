import React, { useState, useHistory } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    //const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container">
            <div className="register">
                <h2 className="register__welcome">
                    Create new account
                </h2>
                <div className="register__signin">
                    <p className="register__question">Already a member?</p>
                    <Link to="login" className="register__login-link">Log in</Link>
                </div>
                <form className="register__form" onSubmit={handleSubmit}>
                <input className="register__input" id="username" name="username" value={userName} type="text" placeholder="Name" onChange={({target}) => setUserName(target.value)}/>
                <input className="register__input" id="email" name="email" value={email} type="email" placeholder="Email" onChange={({target}) => setEmail(target.value)}/>
                <input className="register__input" id="password" name="password" value={password} type="password" placeholder="Password" onChange={({target}) => setPassword(target.value)}/>
                <input className="register__input" id="confirmPassword" name="confirmPassword" value={confirmPassword} type="password" placeholder="Confirm password" onChange={({target}) => setConfirmPassword(target.value)}/>
                <button type="submit" className="register__button">Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default Register;