import { useDispatch } from 'react-redux';

import { registerUser } from 'redux/auth/operations';

const style = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '16px',
};

const RegisterPage = () => {
  const dispatch = useDispatch();

  //
  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.name.value.trim();
    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();

    dispatch(registerUser({ name, email, password }));
    e.target.reset();
  };

  return (
    <div>
      <h1>RegisterPage</h1>

      <form onSubmit={handleSubmit}>
        <label style={style}>
          Username
          <input type="text" name="name" required />
        </label>
        <label style={style}>
          Email
          <input type="email" name="email" required />
        </label>
        <label style={style}>
          Password
          <input
            type="password"
            name="password"
            minLength={7}
            required
            // value="examplepwd1234"
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
