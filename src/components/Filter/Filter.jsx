import { useDispatch, useSelector } from 'react-redux';
import { visibleContacts } from 'redux/phoneBook/filterSlice';
import { selectFilterValue } from 'redux/phoneBook/selectors';

import { FilterTitle, FilterSearch } from './Filter.styled';

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
        <FilterSearch type="text" value={value} onChange={onFilter} />
      </FilterTitle>
    </>
  );
};
