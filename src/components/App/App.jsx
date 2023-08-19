import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Layout } from 'components/Layout/Layout';
import { Loader } from 'components/Loader/Loader';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';

import { refreshUser } from 'redux/auth/operations';
import { selectAuth } from 'redux/auth/selectors';

const LazyHomePage = lazy(() => import('../../Pages/HomePage'));
const LazyRegisterPage = lazy(() => import('../../Pages/RegisterPage'));
const LazyLoginPage = lazy(() => import('../../Pages/LoginPage'));
const LazyContactsPage = lazy(() => import('../../Pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { token, isLoggedIn, isLoading } = useSelector(selectAuth);

  useEffect(() => {
    if (!token || isLoggedIn) return;
    dispatch(refreshUser());
  }, [dispatch, token, isLoggedIn]);

  return isLoading ? (
    <Loader />
  ) : (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LazyHomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts">
                <LazyRegisterPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts">
                <LazyLoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <LazyContactsPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
};
