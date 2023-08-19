import { useDispatch } from 'react-redux';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';

import { registerUser } from 'redux/auth/operations';

const style = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '16px',
};

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(7).required('Required'),
});

const RegisterPage = () => {
  const dispatch = useDispatch();

  //
  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(registerUser({ name, email, password }));
    resetForm();
  };

  return (
    <div>
      <h1>RegisterPage</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label style={style}>
            Username
            <Field type="text" name="name" />
          </label>
          <ErrorMessage
            style={{ color: 'red', fontSize: '14px' }}
            component="div"
            name="name"
          />

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
            <Field type="password" name="password" minLength={7} />
          </label>
          <ErrorMessage
            component="div"
            style={{ color: 'red', fontSize: '14px' }}
            name="password"
          />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
