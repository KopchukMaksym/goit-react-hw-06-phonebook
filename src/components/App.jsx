import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { ContactForm } from './ContactForm';

import ContactList from './ContactList';
import Filter from './Filter';

import s from './FormStyles.module.css';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className={s.section}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {!!contacts.length && <ContactList />}
    </div>
  );
};
