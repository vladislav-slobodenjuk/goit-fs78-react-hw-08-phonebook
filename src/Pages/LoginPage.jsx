import { useDispatch } from 'react-redux';

import { loginUser } from 'redux/auth/operations';

const style = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '16px',
};

// value="examplepwd1234"
const LoginPage = () => {
  const dispatch = useDispatch();

  //
  const handleSubmit = e => {
    e.preventDefault();

    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();

    dispatch(loginUser({ email, password }));
    e.target.reset();
  };

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
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
