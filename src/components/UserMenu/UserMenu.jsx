import { useDispatch, useSelector } from 'react-redux';

import { selectAuth } from 'redux/auth/selectors';
import { logoutUser } from 'redux/auth/operations';
import { StyledUserMenu } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuth);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <StyledUserMenu>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogout}>
        Log Out
      </button>
    </StyledUserMenu>
  );
};
