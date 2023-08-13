import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { loginUser } from 'redux/auth/operations';
import { selectAuth } from 'redux/auth/selectors';

const style = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '16px',
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(selectAuth);

  //
  const handleSubmit = e => {
    e.preventDefault();

    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();

    dispatch(loginUser({ email, password }));
    e.target.reset();
  };

  if (isLoggedIn) return <Navigate to="/contacts" />;

  return (
    <div>
      <h1>LoginPage</h1>

      <form onSubmit={handleSubmit}>
        <label style={style}>
          Email
          <input type="email" name="email" />
        </label>
        <label style={style}>
          Password
          <input type="password" name="password" value="examplepwd1234" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;

// email123@mail.com
