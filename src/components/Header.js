import React from 'react';
import NavBar from './NavBar';
import './Header.css';

const Header = (props) => {
  return (
    <div className="header">
      <h1>Limones Resume</h1>
      <NavBar
        currentPage={props.currentPage}
        handlePageChange={props.handlePageChange}
      />
    </div>
  );
};

export default Header;
