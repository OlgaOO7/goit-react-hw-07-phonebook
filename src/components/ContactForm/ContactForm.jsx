import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contactsSlice';
import { addContact } from '../../redux/operations';
import css from './ContactForm.module.css';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const handleContactNameChange = evt => {
    setName(evt.target.value);
  };

  const handleContactNumberChange = evt => {
    setNumber(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const contactIsAdded = contacts.some(contact => contact.name === name);

    if (contactIsAdded) {
      return toast.error(`${name} is already in contacts!`, {
        theme: 'colored',
      });
    }

    // const form = evt.terget;
    //   dispatch(addContact({
    //       name: form.elements.name.value,
    //       number: form.elements.number.value,
    //     }));
    //     // reset();
    //     form.reset();
    // };

    dispatch(
      addContact({
        name,
        phone,
      })
    );
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={css.formWrapper}>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.labelForm}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleContactNameChange}
            className={css.inputForm}
          />
        </label>

        <label className={css.labelForm}>
          Number
          <input
            type="tel"
            name="number"
            value={phone}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleContactNumberChange}
            className={css.inputForm}
          />
        </label>
        <ToastContainer position="top-right" autoClose={3000} limit={1} />
        <button type="submit" className={css.addBtn}>
          Add contact
        </button>
      </form>
    </div>
  );
}
