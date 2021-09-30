import { useHistory } from 'react-router-dom';
import { useAuth } from 'loop-react-auth';

import Button from './Button';

import { MenuContainer } from './NavBar.styles';

interface MenuProps {
  isAuthenticated?: boolean;
}

const Menu = ({ isAuthenticated }: MenuProps) => {
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

export default Menu;
