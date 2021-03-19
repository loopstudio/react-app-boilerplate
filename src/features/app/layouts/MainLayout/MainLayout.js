import PropTypes from 'prop-types';

import Navbar from '../../components/Navbar';

import { MainContainer } from './MainLayout.styles';

const MainLayout = ({ children, noHeader }) => (
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
