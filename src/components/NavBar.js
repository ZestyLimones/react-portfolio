import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import './NavBar.css';

function NavBar({ currentPage, handlePageChange }) {
  return (
    <div className="nav-bar">
      <Box className="nav-item">
        <Link
          color="#ffff"
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          <AssignmentIndIcon fontSize="inherit" />
          About Me
        </Link>
      </Box>
      <Box className="nav-item">
        <Link
          color="#ffff"
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className={
            currentPage === 'Projects' ? 'nav-link active' : 'nav-link'
          }
        >
          <AutoStoriesIcon fontSize="inherit" />
          Projects
        </Link>
      </Box>
      <Box className="nav-item">
        <Link
          color="#ffff"
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          <EmailIcon fontSize="inherit" />
          Contact Me
        </Link>
      </Box>
      <Box className="nav-item">
        <Link
          color="#ffff"
          fontWeight="strong"
          href="https://drive.google.com/file/d/1RqQuLwDXdIFGJQak1mSKnHwn_4hwkzQn/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <ArticleIcon fontSize="inherit" />
          Resume
        </Link>
      </Box>
    </div>
  );
}

export default NavBar;
