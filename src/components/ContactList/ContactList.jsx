import { deleteContact } from 'redux/phoneBook/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/phoneBook/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  List,
  ContactItem,
  BtnDeleteContact,
  MarkerOfList,
  SearchText,
} from './ContactList.styled';
import { fetchContacts } from 'redux/phoneBook/operations';
import { InfinitySpin } from 'react-loader-spinner';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {isLoading && <InfinitySpin width="200" color="#4905e8" />}
      {error && <SearchText>{error}</SearchText>}
      {contacts.length === 0 ? (
        <SearchText>You don't have any contacts yet!</SearchText>
      ) : visibleContacts.length === 0 ? (
        <SearchText> We didn't find any contact</SearchText>
      ) : (
        visibleContacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <MarkerOfList></MarkerOfList>
              <p>{name}: </p>
              <p>{number}</p>
              <BtnDeleteContact
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </BtnDeleteContact>
            </ContactItem>
          );
        })
      )}
    </List>
  );
};
