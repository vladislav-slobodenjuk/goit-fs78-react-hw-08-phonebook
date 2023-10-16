import { useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';

import { loginUser } from 'redux/auth/operations';

const style = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '16px',
};

const initialValues = {
  email: '',
  password: '',
};

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(7).required('Required'),
});

// value="examplepwd1234"
const LoginPage = () => {
  const dispatch = useDispatch();

  //
  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(loginUser({ email, password }));
    resetForm();
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label style={style}>
            Email
            <Field type="email" name="email" />
          </label>
          <ErrorMessage
            component="div"
            style={{ color: 'red', fontSize: '14px' }}
            name="email"
          />

          <label style={style}>
            Password
            <Field
              type="password"
              name="password"
              // value="examplepwd1234"
            />
          </label>
          <ErrorMessage
            component="div"
            style={{ color: 'red', fontSize: '14px' }}
            name="password"
          />

          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
