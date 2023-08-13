import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
      <h1>ContactsPage</h1>
    </div>
  );
};

export default ContactsPage;
