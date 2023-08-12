import React from 'react';

const style = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '16px',
};

const LoginPage = () => {
  //
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <div>LoginPage</div>

      <form onSubmit={handleSubmit}>
        <label style={style}>
          Email
          <input type="email" name="email" />
        </label>
        <label style={style}>
          Password
          <input type="password" name="password" value="pass4567" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
