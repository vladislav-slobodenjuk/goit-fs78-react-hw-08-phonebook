import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from './App.styled';
import { Loader } from 'components/Loader/Loader';

import { logoutUser, refreshUser } from 'redux/auth/operations';
import { selectAuth } from 'redux/auth/selectors';

const LazyHomePage = lazy(() => import('../Pages/HomePage'));
const LazyRegisterPage = lazy(() => import('../Pages/RegisterPage'));
const LazyLoginPage = lazy(() => import('../Pages/LoginPage'));
const LazyContactsPage = lazy(() => import('../Pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { token, isLoggedIn, isLoading, user } = useSelector(selectAuth);

  useEffect(() => {
    if (!token || isLoggedIn) return;
    dispatch(refreshUser());
  }, [dispatch, token, isLoggedIn]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Container>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>

          {isLoggedIn ? (
            <>
              <NavLink to="/contacts">Contacts</NavLink>
              <p style={{ display: 'inline-block' }}>{user.email}</p>
              <button type="button" onClick={handleLogout}>
                Log Out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          )}
        </nav>
      </header>

      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LazyHomePage />} />
            <Route path="/register" element={<LazyRegisterPage />} />
            <Route path="/login" element={<LazyLoginPage />} />
            <Route path="/contacts" element={<LazyContactsPage />} />
          </Routes>
        </Suspense>
      </main>

      {isLoading && <Loader />}
    </Container>
  );
};
