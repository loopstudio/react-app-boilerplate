import Logo from 'features/app/components/Navbar/Logo';
import UserOptions from 'features/app/components/Navbar/UserOptions';

import { Nav, NavContent } from 'features/app/components/Navbar/NavBar.styles';

const Navbar = () => (
  <Nav>
    <NavContent>
      <Logo />
      <UserOptions />
    </NavContent>
  </Nav>
);

export default Navbar;
