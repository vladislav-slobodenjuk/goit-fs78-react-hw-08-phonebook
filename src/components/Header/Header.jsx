import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { StyledHeader } from './Header.styled';

import { selectAuth } from 'redux/auth/selectors';
import { logoutUser } from 'redux/auth/operations';

export const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector(selectAuth);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <StyledHeader>
      <nav>
        <NavLink to="/">Home</NavLink>

        {isLoggedIn ? (
          <>
            <NavLink to="/contacts">Contacts</NavLink>
            <p style={{ display: 'inline-block' }}>{user.email}</p>
            <button type="button" onClick={handleLogout}>
              Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </StyledHeader>
  );
};
