import { useDispatch, useSelector } from 'react-redux';
import { visibleContacts } from 'redux/phoneBook/filterSlice';
import { selectFilterValue } from 'redux/phoneBook/selectors';

import { FilterTitle } from './Filter.styled';
import { TextField } from '@mui/material';

export const Filter = () => {
  const value = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const onFilter = ({ target: { value } }) => {
    dispatch(visibleContacts(value));
  };

  return (
    <>
      <FilterTitle>
        Find contacts by name
        <TextField
          id="outlined-basic"
          label="Enter a name"
          variant="outlined"
          type="text"
          required
          value={value}
          onChange={onFilter}
        />
      </FilterTitle>
    </>
  );
};
