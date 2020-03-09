import React from 'react';
import PropTypes from 'prop-types';

import LanguageSelector from 'components/LanguageSelector';

const Footer = ({ onChangeLocaleSelect, currentAppLocale }) => (
  <footer>
    <LanguageSelector
      onChangeLocaleSelect={onChangeLocaleSelect}
      currentLocale={currentAppLocale}
    />
  </footer>
);

Footer.propTypes = {
  currentAppLocale: PropTypes.object.isRequired,
  onChangeLocaleSelect: PropTypes.func.isRequired,
};

export default Footer;
