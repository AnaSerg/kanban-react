import React from 'react';
import Logo from '../images/Logo.svg';

const Header = () => {

    return (
        <header className="header">
            <img src={Logo} alt="logo" className="logo"/>
        </header>
    )
}

export default Header;