import React from 'react';

const SearchBar = () => {

    return (
        <form className="form" action="#" method="POST" name="search" noValidate>
            <div className="search-bar">
                <button className="search-bar__button" type="submit"></button>
                <input name="search" id="search" type="search" className="search-bar__input" placeholder="Search..."/>
            </div>
        </form>
    )
}

export default SearchBar;