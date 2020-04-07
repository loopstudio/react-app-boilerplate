import React from 'react';
import { FormattedMessage } from 'react-intl';

import Title from 'components/Title';
import Form from './Form';
import ChangePasswordForm from './ChangePasswordForm';

import styles from './Settings.module.scss';

const Settings = () => {
  return (
    <div className={styles.settingsContent}>
      <div className={styles.settingsContainer}>
        <Title type="h2" className={styles.title}>
          <FormattedMessage id="common.accountSettings" />
        </Title>
        <Form />
        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default Settings;
