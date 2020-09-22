import React from 'react';
import PropTypes from 'prop-types';

import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

import { AuthContainer } from 'layouts/AuthLayout/AuthLayout.styles';

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
