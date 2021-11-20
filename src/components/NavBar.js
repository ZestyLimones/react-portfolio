import React from 'react';
import Typography from '@mui/material/styles/createTypography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import './NavBar.css';

// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

function NavBar() {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <div className="nav" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrump">
        <Link href="#about">About Me</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact Me</Link>
      </Breadcrumbs>
      {/* <ul className="nav-bar">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            className={
              currentPage === 'Projects' ? 'nav-link active' : 'nav-link'
            }
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={
              currentPage === 'Contact' ? 'nav-link active' : 'nav-link'
            }
          >
            Contact Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://drive.google.com/file/d/1RqQuLwDXdIFGJQak1mSKnHwn_4hwkzQn/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul> */}
    </div>
  );
}

export default NavBar;
