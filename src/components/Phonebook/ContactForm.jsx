import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phoneBook/operations';
import { selectContacts } from 'redux/phoneBook/selectors';
import { Form, LableForm, InputForm, BtnForm } from './ContactForm.styled';
import { useState } from 'react';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

  const handleSubmit = e => {
    e.preventDefault();

    // const form = e.target;

    // const name = form.elements.name.value;
    // const phone = form.elements.phone.value;

    const isExist = contacts.find(contact => {
      return (
        contact.name.toLocaleLowerCase() === name.toLocaleLowerCase() ||
        contact.number === number
      );
    });

    if (isExist) {
      setName('');
      setNumber('');
      // form.reset();
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      name: name,
      number: number,
    };

    setName('');
    setNumber('');
    dispatch(addContact(contact));

    // dispatch(addContact({ name, phone }));

    // form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LableForm htmlFor="">
        Name
        <InputForm
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          name="name"
          value={name}
          onChange={handleChange}
        />
      </LableForm>
      <LableForm htmlFor="">
        Number
        <InputForm
          type="tel"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          name="number"
          value={number}
          onChange={handleChange}
        />
      </LableForm>
      <BtnForm type="submit">Add contact</BtnForm>
    </Form>
  );
};

export default ContactForm;
