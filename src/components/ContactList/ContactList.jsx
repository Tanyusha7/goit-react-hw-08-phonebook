import { deleteContact } from 'redux/phoneBook/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/phoneBook/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { SearchText } from './ContactList.styled';
import { fetchContacts } from 'redux/phoneBook/operations';

import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Alert, LinearProgress } from '@mui/material';

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
      {isLoading && <LinearProgress color="primary" />}
      {error && <SearchText>{error}</SearchText>}
      {contacts.length === 0 ? (
        <Alert
          severity="info"
          sx={{ width: '30%', marginLeft: '40px', marginTop: '20px' }}
        >
          You don't have any contacts yet!
        </Alert>
      ) : visibleContacts.length === 0 ? (
        <Alert
          severity="info"
          sx={{ width: '30%', marginLeft: '40px', marginTop: '20px' }}
        >
          We didn't find any contact
        </Alert>
      ) : (
        visibleContacts.map(({ id, name, number }) => {
          return (
            <List
              key={id}
              sx={{
                display: 'flex',

                justifyContent: 'space-between',
                alignItems: 'center',

                marginLeft: '40px',
                width: '100%',
                maxWidth: 450,
                bgcolor: '#eeeeee',
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PersonAddIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={name} secondary={number} />
                <Button
                  sx={{
                    width: '150px',
                    padding: '8px',
                    cursor: 'pointer',
                  }}
                  variant="outlined"
                  startIcon={<DeleteForeverIcon />}
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </Button>
              </ListItem>
            </List>
          );
        })
      )}
    </List>
  );
};
