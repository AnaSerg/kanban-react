import React from 'react';

const MenuList = ({isOpen}) => {
    <ul className={`menu-list ${isOpen ? 'menu-list_opened' : ""}`}>
        <li className="menu-list__item">Kwabosal</li>
        <li className="menu-list__item">Minahealth</li>
        <li className="menu-list__item">Circleflow</li>
        <li className="menu-list__item">SageExpress</li>
    </ul>
}

export default MenuList;