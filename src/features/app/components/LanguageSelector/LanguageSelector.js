import React from 'react';
import { useIntl } from 'react-intl';

import { Select } from 'features/app/components/LanguageSelector/LanguageSelector.styles';
import { useGuestLocale } from '../../hooks/guestLocale';

const LanguageSelector = () => {
  const intl = useIntl();
  const { setGuestLocale } = useGuestLocale();

  const handleChange = (event) => {
    setGuestLocale(event.target.value);
  };

  return (
    <Select
      aria-label={intl.messages['common.selectLanguage']}
      name="localeSelect"
      value={intl.locale}
      onChange={handleChange}
    >
      <option aria-label="English" value="en">
        English
      </option>
      <option aria-label="Español" value="es">
        Español
      </option>
    </Select>
  );
};

export default LanguageSelector;
