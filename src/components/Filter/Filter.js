import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook-selectors';
import * as actions from '../../redux/phonebook-actions';

import s from './Filter.module.css';

export default function Filter() {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => dispatch(actions.changeFilter(e.target.value));

  return (
    <label className={s.label}>
      Find contact by name
      <input
        className={s.input}
        type="text"
        name="name"
        value={filterValue}
        onChange={changeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
}
