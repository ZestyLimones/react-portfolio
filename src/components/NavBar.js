import React from 'react';
import "./NavBar.css"

function NavBar({ currentPage, handlePageChange}) {
    return (
        <ul className="nav nav-bar">
            <li className="nav-item">
                <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === "About" ? 'nav-link active' : 'nav-link'}>About Me</a>
            </li>
            <li className="nav-item">
                <a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === "Projects" ? 'nav-link active' : 'nav-link'}>Projects</a>
            </li>
            <li className="nav-item">
                <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === "Contact" ? 'nav-link active' : 'nav-link'}>Contact Me</a>
            </li>
            <li className="nav-item">
                <a href="https://drive.google.com/file/d/1RqQuLwDXdIFGJQak1mSKnHwn_4hwkzQn/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
            </li>
        </ul>
    )
}

export default NavBar;