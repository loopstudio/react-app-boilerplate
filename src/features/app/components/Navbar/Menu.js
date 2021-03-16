import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { useAuth } from 'features/auth';
import Button from 'features/app/components/Navbar/Button';

import { MenuContainer } from 'features/app/components/Navbar/NavBar.styles';

const Menu = ({ isAuthenticated }) => {
  const { signOut } = useAuth();
  const history = useHistory();

  const handleSignOut = async () => {
    try {
      signOut();
      history.replace('/sign-in');
    } catch ({ errors }) {
      console.error(errors);
    }
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
