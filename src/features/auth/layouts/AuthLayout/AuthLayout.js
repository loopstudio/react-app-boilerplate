import PropTypes from 'prop-types';

import Navbar from 'features/app/components/Navbar';
import Footer from 'features/app/components/Footer';

import { AuthContainer } from './AuthLayout.styles';

const AuthLayout = ({ children, noHeader }) => (
  <>
    {!noHeader && <Navbar />}
    <AuthContainer noHeader={noHeader}>{children}</AuthContainer>
    <Footer />
  </>
);

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
  noHeader: PropTypes.bool,
};

AuthLayout.defaultProps = {
  noHeader: false,
};

export default AuthLayout;
