import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAuth } from 'redux/auth/selectors';

export const Navigation = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
