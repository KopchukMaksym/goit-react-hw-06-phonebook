import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getFiteredContacts } from 'redux/selectors';
import ContactItem from './ContactItem';
import s from './FormStyles.module.css';

const ContactList = () => {
  const contacts = useSelector(getFiteredContacts);

  if (!contacts.length) return <></>;
  return (
    <ul className={s.list}>
      {contacts.map(contact => {
        return <ContactItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
