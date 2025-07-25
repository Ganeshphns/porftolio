import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1 className="title">My Portfolio</h1>
            <nav className="navbar">
                <ul className="nav-links">
                    <li>
                        <Link to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500}>Projects</Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;