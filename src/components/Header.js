import React from 'react';
import NavBar from './NavBar';

const Header = (props) => {
  return (
    <div>
      <NavBar
        currentPage={props.currentPage}
        handlePageChange={props.handlePageChange}
      />
    </div>
  );
};

export default Header;
