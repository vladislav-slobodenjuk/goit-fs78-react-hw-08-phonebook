import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuth } from 'redux/auth/selectors';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const { isLoggedIn } = useSelector(selectAuth);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};
