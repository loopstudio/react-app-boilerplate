import PropTypes from 'prop-types';

import Navbar from '../../components/Navbar';

import { MainContainer } from './MainLayout.styles';

interface MainLayoutProps {
  children: React.ReactNode;
  noHeader: boolean;
}

const MainLayout = ({ children, noHeader }: MainLayoutProps) => (
  <>
    {!noHeader && <Navbar />}
    <MainContainer noHeader={noHeader}>{children}</MainContainer>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
  noHeader: PropTypes.bool,
};

MainLayout.defaultProps = {
  noHeader: false,
};

export default MainLayout;
