import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import style from './LanguageSelector.module.scss';

const LanguageSelector = ({ currentLocale, onChangeLocaleSelect }) => {
  const intl = useIntl();

  return (
    <select
      aria-label={intl.messages['common.selectLanguage']}
      name="localeSelect"
      value={currentLocale}
      className={style.localeSelect}
      onChange={onChangeLocaleSelect}
    >
      <option value="en">english</option>
      <option value="es">spanish</option>
    </select>
  );
};

LanguageSelector.propTypes = {
  currentLocale: PropTypes.object.isRequired,
  onChangeLocaleSelect: PropTypes.func.isRequired,
};

export default LanguageSelector;
