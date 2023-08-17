import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phoneBook/operations';
import { selectContacts } from 'redux/phoneBook/selectors';
import { Form, LableForm } from './ContactForm.styled';
import { useState } from 'react';

import Button from '@mui/material/Button';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Alert, Snackbar, TextField } from '@mui/material';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const [isContact, setIsContact] = useState(false);

  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'left',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = newState => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
    setName('');
    setNumber('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };
  const isExist = contacts.find(contact => {
    return (
      contact.name.toLocaleLowerCase() === name.toLocaleLowerCase() ||
      contact.number === number
    );
  });
  const handleSubmit = e => {
    e.preventDefault();

    if (isExist) {
      // setIsContact(true);

      return;
    }
    // setIsContact(false);
    const contact = {
      name: name,
      number: number,
    };

    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  return (
    <>
      {isExist && (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          key={vertical + horizontal}
        >
          <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
            {name} is already in contacts!
          </Alert>
        </Snackbar>
      )}
      <Form onSubmit={handleSubmit}>
        <LableForm>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            name="name"
            value={name}
            onChange={handleChange}
          />
        </LableForm>
        <LableForm>
          <TextField
            id="outlined-basic"
            label="Number"
            variant="outlined"
            type="tel"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            name="number"
            value={number}
            onChange={handleChange}
          />
        </LableForm>
        <Button
          sx={{
            width: '200px',
            padding: '10px',
          }}
          type="submit"
          variant="contained"
          onClick={handleClick({ vertical: 'top', horizontal: 'right' })}
          endIcon={<PersonAddAlt1Icon />}
        >
          Add contact
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
