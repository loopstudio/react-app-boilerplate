import { FormattedMessage } from 'react-intl';

import Form from './Form';
import ChangePasswordForm from './ChangePasswordForm';

import { SettingsContainer, SettingsTitle, Wrapper } from './Settings.styles';

const Settings = () => {
  return (
    <SettingsContainer>
      <Wrapper>
        <SettingsTitle>
          <FormattedMessage id="common.accountSettings" />
        </SettingsTitle>
        <Form />
        <ChangePasswordForm />
      </Wrapper>
    </SettingsContainer>
  );
};

export default Settings;
