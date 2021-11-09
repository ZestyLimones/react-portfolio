import React from 'react';
import NavBar from './NavBar';

const Header = (props) => {
  return (
    <div>
      <h1>Limones Resume</h1>
      <NavBar
        currentPage={props.currentPage}
        handlePageChange={props.handlePageChange}
      />
    </div>
  );
};

export default Header;
