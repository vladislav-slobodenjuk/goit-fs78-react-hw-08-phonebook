import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { StyledForm } from './ContactForm.styled';

import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  // const [data, setData] = useState({ name: '', number: '' });
  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();

  // const hadleInputChange = ({ target: { name, value } }) => {
  //   setData(prev => ({ ...prev, [name]: value }));
  // };

  const handleSubmit = (values, actions) => {
    // e.preventDefault();

    console.log(values);

    // const isExist = items.find(
    //   contact =>
    //     contact.name.toLowerCase() === name.toLowerCase() ||
    //     contact.number === number
    // );
    // if (isExist) return alert(`${name} or ${number} is already in contacts.`);

    // dispatch(addContact({ name: name.trim(), number }));
    // setData({ name: '', number: '' });
  };

  // const { name, number } = data;

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <StyledForm>
        <label>
          Name:
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            // value={name}
            // onChange={hadleInputChange}
          />
        </label>

        <label>
          Number:
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            // value={number}
            // onChange={hadleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
