import PropTypes from 'prop-types';

const MainLayout = ({ children }) => children;

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
