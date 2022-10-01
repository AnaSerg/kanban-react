import React from 'react';
import SearchBar from './SearchBar';
import PersonalAccount from './PersonalAccount';

const HeaderArea = () => {

    return (
        <div className="header-area">
            <SearchBar />
            <PersonalAccount />
        </div>
    )
}

export default HeaderArea;