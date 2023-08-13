import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';

export const ListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      <p>
        {name}: <span>{number}</span>
      </p>
      <button type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
