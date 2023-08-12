import React from 'react';

const style = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '16px',
};

const RegisterPage = () => {
  //
  const handleSubmit = e => {
    e.preventDefault();
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
          <input type="password" name="password" value="pass4567" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
