import { useSelector } from 'react-redux';

import { selectAuth } from 'redux/auth/selectors';
import { StyledNavLink } from 'components/NavLink/NavLink.styled';

export const Navigation = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </nav>
  );
};
