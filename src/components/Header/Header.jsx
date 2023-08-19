import { useSelector } from 'react-redux';

import { StyledHeader } from './Header.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

import { selectAuth } from 'redux/auth/selectors';

export const Header = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <StyledHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledHeader>
  );
};
