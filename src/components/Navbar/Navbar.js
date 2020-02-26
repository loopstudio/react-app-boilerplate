import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signOut } from 'actions/auth';

import styles from './Navbar.module.scss';

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const redirectToAccountSettings = () => {
    history.push('/settings');
  };

  const handleSignOut = () => {
    dispatch(signOut()).catch(({ errors }) => {
      alert(errors);
    });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span className={styles.brand}>LoopStudio</span>
      </div>
      <div className={styles.profile}>
        <button type="button" className={styles.avatar}>
          <img src="https://i.pravatar.cc/150?img=41" alt="avatar" />
        </button>
        <div className={styles.profileWrapper}>
          <div className={styles.profileMenu}>
            <button onClick={redirectToAccountSettings} type="button">
              <FormattedMessage id="common.accountSettings" />
            </button>
            <button onClick={handleSignOut} type="button">
              <FormattedMessage id="common.signOut" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
