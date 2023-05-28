import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getContacts, getError, getIsLoading } from "redux/contactsSlice";
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactsList } from '../ContactsList/ContactsList';
import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  // const { contacts, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
    return (
    <div className={css.wrapper}>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter />
      
      {/* {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <p>{contacts.length > 0 && JSON.stringify(contacts, null, 2)}</p> */}
      {/* {isLoading && !error && <b>Request in progree...</b>} */}
      {error && <p>Sorry, request is done with error: {error}</p>}
      <ContactsList />
    </div>
  );
}