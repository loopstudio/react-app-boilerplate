import { LogoContainer, Brand } from './NavBar.styles';

const PRODUCT_NAME = 'LoopStudio';

const Logo = () => (
  <LogoContainer>
    <Brand to="/">{PRODUCT_NAME}</Brand>
  </LogoContainer>
);

export default Logo;
