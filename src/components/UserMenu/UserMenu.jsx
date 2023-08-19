import { useDispatch, useSelector } from 'react-redux';

import { selectAuth } from 'redux/auth/selectors';
import { logoutUser } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuth);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <p style={{ display: 'inline-block' }}>Welcome, {user.name}</p>
      <button type="button" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};
