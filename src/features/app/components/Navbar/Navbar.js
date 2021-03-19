import Logo from './Logo';
import UserOptions from './UserOptions';

import { Nav, NavContent } from './NavBar.styles';

const Navbar = () => (
  <Nav>
    <NavContent>
      <Logo />
      <UserOptions />
    </NavContent>
  </Nav>
);

export default Navbar;
