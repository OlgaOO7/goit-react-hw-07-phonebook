import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(getFilter);
  // const handleFilterChange = evt => dispatch(changeFilter(evt.target.value));
  const handleFilterChange = evt => dispatch(changeFilter(evt.target.value));

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        // value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleFilterChange}
        className={css.filterInput}
      />
    </label>
  );
};
