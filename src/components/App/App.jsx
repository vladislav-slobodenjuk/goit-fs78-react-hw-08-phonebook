import { lazy, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import { Container } from './App.styled';
import { Loader } from 'components/Loader/Loader';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/operations';

const LazyHomePage = lazy(() => import('../Pages/HomePage'));
const LazyRegisterPage = lazy(() => import('../Pages/RegisterPage'));
const LazyLoginPage = lazy(() => import('../Pages/LoginPage'));
const LazyContactsPage = lazy(() => import('../Pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Container>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </nav>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LazyHomePage />} />
          <Route path="/register" element={<LazyRegisterPage />} />
          <Route path="/login" element={<LazyLoginPage />} />
          <Route path="/contacts" element={<LazyContactsPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
