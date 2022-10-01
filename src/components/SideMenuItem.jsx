import React from 'react';

const SideMenuItem = ({title, children}) => {

    return (
        <li className="menu__item">
            <div className="menu__item-block">
                {children}
                <h2 className="menu__title">{title}</h2>
            </div>
        </li>
    )
}

export default SideMenuItem;