import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { signOut } from 'actions/auth';
import Button from './Button';

import styles from './Menu.module.scss';

const Menu = ({ isAuthenticated }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignOut = () => {
    dispatch(signOut()).catch(({ errors }) => {
      alert(errors);
    });
  };

  return (
    <div className={styles.menu}>
      {isAuthenticated ? (
        <>
          <Button
            formattedMessageId="common.accountSettings"
            onClick={() => history.push('/settings')}
          />
          <Button formattedMessageId="common.signOut" onClick={handleSignOut} />
        </>
      ) : (
        <>
          <Button
            formattedMessageId="common.signIn"
            onClick={() => history.push('/sign-in')}
          />
          <Button
            formattedMessageId="common.signUp"
            onClick={() => history.push('/sign-up')}
          />
        </>
      )}
    </div>
  );
};

Menu.propTypes = {
  isAuthenticated: PropTypes.bool,
};

Menu.defaultProps = {
  isAuthenticated: false,
};

export default Menu;
