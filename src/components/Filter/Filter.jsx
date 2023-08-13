import { useDispatch, useSelector } from 'react-redux';

import { StyledFilter } from './Filter.styled';

import { selectFilter } from 'redux/contacts/selectors';
import { setContactsFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = ({ target: { value } }) => {
    dispatch(setContactsFilter(value));
  };

  return (
    <StyledFilter>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </StyledFilter>
  );
};
