import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <nav className="nav">
            <Link to="/dashboard" className="menu__item">Dashboard</Link>
            <Link to="/kanban" className="menu__item">Kanban</Link>
            <Link to="/calendar" className="menu__item">Calendar</Link>
            <Link to="/to-do" className="menu__item">To-Do List</Link>
            <Link to="/settings" className="menu__item">Settings</Link>
        </nav>
    )
}

export default Navigation;