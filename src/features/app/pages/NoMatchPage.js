import { useEffect } from 'react';
import PropTypes from 'prop-types';
import NoMatch from '../components/NoMatch';

const NoMatchPage = ({ toggleNoHeader }) => {
  useEffect(() => {
    toggleNoHeader();
    return toggleNoHeader;
  }, [toggleNoHeader]);
  return <NoMatch />;
};

NoMatchPage.propTypes = {
  toggleNoHeader: PropTypes.func.isRequired,
};

export default NoMatchPage;
