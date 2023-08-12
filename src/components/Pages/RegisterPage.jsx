import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/operations';

const style = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '16px',
};

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.name.value.trim();
    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();

    dispatch(registerUser({ name, email, password }));
  };

  return (
    <div>
      <div>RegisterPage</div>

      <form onSubmit={handleSubmit}>
        <label style={style}>
          Username
          <input type="text" name="name" />
        </label>
        <label style={style}>
          Email
          <input type="email" name="email" />
        </label>
        <label style={style}>
          Password
          <input type="password" name="password" value="examplepwd1234" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
