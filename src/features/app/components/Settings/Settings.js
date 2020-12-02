import React from 'react';
import { FormattedMessage } from 'react-intl';

import Form from 'features/app/components/Settings/Form';
import ChangePasswordForm from 'features/app/components/Settings/ChangePasswordForm';

import {
  SettingsContainer,
  SettingsTitle,
  Wrapper,
} from 'features/app/components/Settings/Settings.styles';

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
