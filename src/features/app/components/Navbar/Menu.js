import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { useAuth } from 'features/auth';
import Button from './Button';

import { MenuContainer } from './NavBar.styles';

const Menu = ({ isAuthenticated }) => {
  const { signOut } = useAuth();
  const history = useHistory();

  const handleSignOut = () => {
    signOut();
    history.replace('/sign-in');
  };

  return (
    <MenuContainer>
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
    </MenuContainer>
  );
};

Menu.propTypes = {
  isAuthenticated: PropTypes.bool,
};

Menu.defaultProps = {
  isAuthenticated: false,
};

export default Menu;
