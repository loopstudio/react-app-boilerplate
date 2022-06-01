import { useIntl } from 'react-intl';

import { useGuestLocale } from '../../hooks/guestLocale';

import { Select } from './LanguageSelector.styles';

const LanguageSelector = () => {
  const { formatMessage, locale } = useIntl();
  const { setGuestLocale }: any = useGuestLocale();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGuestLocale(event.target.value);
  };

  return (
    <Select
      aria-label={formatMessage({ id: 'common.selectLanguage' })}
      name="localeSelect"
      value={locale}
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
