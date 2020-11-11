import React from 'react';

import {
  LogoContainer,
  Brand,
} from 'features/app/components/Navbar/NavBar.styles';

const PRODUCT_NAME = 'LoopStudio';

const Logo = () => (
  <LogoContainer>
    <Brand to="/">{PRODUCT_NAME}</Brand>
  </LogoContainer>
);

export default Logo;
