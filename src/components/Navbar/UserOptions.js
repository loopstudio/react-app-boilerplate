import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import md5 from 'md5';

import { useAuthentication, useUser } from 'hooks/auth';
import Button from './Button';
import Menu from './Menu';

import {
  Avatar,
  InlineMenu,
  DesktopDisplay,
  MobileButton,
} from './NavBar.styles';

const AVATAR_PLACEHOLDER = 'https://i.pravatar.cc/150?img=41';

const RightItem = () => {
  const user = useUser();
  const history = useHistory();
  const isAuthenticated = useAuthentication();
  const [navOpen, setNavOpen] = useState(false);
  const emailHash = md5(user?.email || '');
  const defaultAvatar = encodeURIComponent(AVATAR_PLACEHOLDER);
  const gravatarURL = `https://www.gravatar.com/avatar/${emailHash}?default=${defaultAvatar}`;

  const handleRedirectTo = (path) => history.push(path);

  const toggleNavMenu = () => setNavOpen((prevState) => !prevState);

  return (
    <>
      {isAuthenticated ? (
        <Avatar onClick={toggleNavMenu} type="button">
          <img alt="avatar" src={gravatarURL} />
        </Avatar>
      ) : (
        <>
          <MobileButton onClick={toggleNavMenu} type="button">
            <FontAwesomeIcon color="#7f9cf5" icon="bars" size="lg" />
          </MobileButton>
          <DesktopDisplay>
            <InlineMenu>
              <Button
                formattedMessageId="common.signIn"
                onClick={() => handleRedirectTo('/sign-in')}
              />
              <Button
                formattedMessageId="common.signUp"
                onClick={() => handleRedirectTo('/sign-up')}
              />
            </InlineMenu>
          </DesktopDisplay>
        </>
      )}
      {navOpen && <Menu isAuthenticated={isAuthenticated} />}
    </>
  );
};

export default RightItem;
