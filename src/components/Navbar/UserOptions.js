import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAuthentication } from 'hooks/auth';
import Button from './Button';
import Menu from './Menu';

import styles from './UserOptions.module.scss';

const AVATAR_PLACEHOLDER = 'https://i.pravatar.cc/150?img=41';

const RightItem = () => {
  const history = useHistory();
  const { isAuthenticated } = useAuthentication();

  const [navOpen, setNavOpen] = useState(false);

  const handleRedirectTo = (path) => history.push(path);

  const toggleNavMenu = () => setNavOpen((prevState) => !prevState);

  return (
    <>
      {isAuthenticated ? (
        <button
          className={`${styles.buttonStyle} ${styles.avatar}`}
          onClick={toggleNavMenu}
          type="button"
        >
          <img alt="avatar" src={AVATAR_PLACEHOLDER} />
        </button>
      ) : (
        <>
          <button
            className={`${styles.buttonStyle} ${styles.mobile}`}
            onClick={toggleNavMenu}
            type="button"
          >
            <FontAwesomeIcon color="#7f9cf5" icon="bars" size="lg" />
          </button>
          <div className={styles.desktop}>
            <div className={styles.inlineMenu}>
              <Button
                formattedMessageId="common.signIn"
                onClick={() => handleRedirectTo('/sign-in')}
              />
              <Button
                formattedMessageId="common.signUp"
                onClick={() => handleRedirectTo('/sign-up')}
              />
            </div>
          </div>
        </>
      )}
      {navOpen && <Menu isAuthenticated={isAuthenticated} />}
    </>
  );
};

export default RightItem;
