import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { StyledForm } from './ContactForm.styled';

import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const initialValues = {
  name: '',
  number: '',
};

const AddContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const isExist = items.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
    if (isExist) return alert(`${name} or ${number} is already in contacts.`);

    dispatch(addContact({ name: name.trim(), number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddContactSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <label>
          Name:
          <Field type="text" name="name" />
        </label>
        <ErrorMessage
          style={{ color: 'red', fontSize: '14px' }}
          component="div"
          name="name"
        />

        <label>
          Number:
          <Field type="tel" name="number" />
        </label>
        <ErrorMessage
          style={{ color: 'red', fontSize: '14px' }}
          component="div"
          name="number"
        />

        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
