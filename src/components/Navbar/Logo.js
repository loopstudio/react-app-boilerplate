import React from 'react';

import { LogoContainer, Brand } from './NavBar.styles';

const PRODUCT_NAME = 'LoopStudio';

const Logo = () => (
  <LogoContainer>
    <Brand href="/">{PRODUCT_NAME}</Brand>
  </LogoContainer>
);

export default Logo;
