import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import './NavBar.css';

function NavBar({ currentPage, handlePageChange }) {
  return (
    <div className="nav-bar">
      <Box className="nav-item">
        <Link
          underline="hover"
          color="white"
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </Box>
      <Box className="nav-item">
        <Link
          underline="hover"
          color="white"
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className={
            currentPage === 'Projects' ? 'nav-link active' : 'nav-link'
          }
        >
          Projects
        </Link>
      </Box>
      <Box className="nav-item">
        <Link
          underline="hover"
          color="white"
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </Link>
      </Box>
      <Box className="nav-item">
        <Link
          underline="hover"
          color="white"
          href="https://drive.google.com/file/d/1RqQuLwDXdIFGJQak1mSKnHwn_4hwkzQn/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </Link>
      </Box>
    </div>
  );
}

export default NavBar;
