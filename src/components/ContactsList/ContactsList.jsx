import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import { getContacts, getIsLoading } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import css from './ContactsList.module.css';



export function ContactsList() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  // console.log(contacts);

  const filteredContacts = (contacts, filter) => {
    console.log(isLoading);
    return contacts.filter(({ name }) =>
      name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  };

  const visibleContacts = filteredContacts(contacts, filter);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, phone }) => (
        <Contact key={id} name={name} number={phone} id={id} />
      ))}
    </ul>
  );
}
