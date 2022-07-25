import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';

import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getLoading);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isLoading && (
      <Container>
        <AppBar />
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<PublicRoute />}>
              <Route path="/" element={<Navigate replace to="login" />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>

            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Navigate replace to="contacts" />} />
              <Route path="contacts" element={<ContactsPage />} />
            </Route>

            <Route path="*" element={<Navigate replace to="/" />} />

            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
          </Routes>
        </Suspense>
        <ToastContainer />
      </Container>
    )
  );
}
