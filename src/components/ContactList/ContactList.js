import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/phonebook-selectors';
import contactsOperations from '../../redux/phonebook-operations';

import s from './ContactList.module.css';

export default function ContactsList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDelete = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={s.item}>
          {contact.name}: {contact.number}
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
