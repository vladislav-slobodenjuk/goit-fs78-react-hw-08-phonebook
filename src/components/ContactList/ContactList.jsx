import { useSelector } from 'react-redux';

import { ListItem } from './ListItem/ListItem';
import { StyledList } from './ContactList.styled';

import {
  selectContacts,
  selectfilteredContacts,
} from 'redux/contacts/selectors';

const EmptyListItem = ({ text }) => {
  return (
    <li>
      <p className="emptyList">{text}</p>
    </li>
  );
};

export const ContactList = () => {
  const { items, isLoading, error } = useSelector(selectContacts);
  const filteredContacts = useSelector(selectfilteredContacts);

  const noFilterMatch =
    filteredContacts.length === 0 && items.length !== 0 && !isLoading && !error;

  const noSavedContacts = items.length === 0 && !isLoading && !error;

  return (
    <StyledList>
      {filteredContacts.map(contact => (
        <ListItem key={contact.id} contact={contact} />
      ))}

      {noFilterMatch && <EmptyListItem text={'Nothing found'} />}
      {/* <p className="emptyList">Nothing found</p> */}
      {noSavedContacts && <EmptyListItem text={'No saved contacts'} />}
      {/* <p className="emptyList">No saved contacts</p> */}
      {error && <EmptyListItem text={'An Error acquired'} />}
      {/* <p className="emptyList">An Error acquired</p> */}
    </StyledList>
  );
};
