import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';

import { selectAuth } from 'redux/auth/selectors';
import { selectContacts } from 'redux/contacts/selectors';
import { getAllContacts } from 'redux/contacts/operations';

const ContactsPage = () => {
  const { isLoading } = useSelector(selectContacts);
  const { isLoggedIn } = useSelector(selectAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(getAllContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      {/* <Container> */}
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />

      {isLoading && <Loader />}
      {/* </Container> */}
    </div>
  );
};

export default ContactsPage;
