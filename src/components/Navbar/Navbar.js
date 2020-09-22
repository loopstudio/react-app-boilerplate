import React from 'react';

import Logo from 'components/Navbar/Logo';
import UserOptions from 'components/Navbar/UserOptions';

import { Nav, NavContent } from 'components/Navbar/NavBar.styles';

const Navbar = () => (
  <Nav>
    <NavContent>
      <Logo />
      <UserOptions />
    </NavContent>
  </Nav>
);

export default Navbar;
