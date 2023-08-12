import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import ContactForm from 'components/Phonebook/ContactForm';
import {
  ContactFormTitle,
  ContactListTitle,
} from 'components/Contacts/Contacts.styled';
import { Container } from 'components/Container/Container.styled';

const Contacts = () => {
  return (
    <Container>
      <ContactFormTitle>Phonebook</ContactFormTitle>
      <ContactForm />
      <ContactListTitle>Contacts</ContactListTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default Contacts;
