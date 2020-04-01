import PropTypes from 'prop-types';

const AuthLayout = ({ children }) => children;

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout;
