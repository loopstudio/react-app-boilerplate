import React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';

import { setGuestLocale } from 'actions/auth';

import style from './LanguageSelector.module.scss';

const LanguageSelector = () => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setGuestLocale(event.target.value));
  };

  return (
    <select
      aria-label={intl.messages['common.selectLanguage']}
      name="localeSelect"
      value={intl.locale}
      className={style.localeSelect}
      onChange={handleChange}
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  );
};

export default LanguageSelector;
