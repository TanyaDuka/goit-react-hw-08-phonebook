import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import s from './UserMenu.module.css';

import avatar from './avatar.png';
import avatar1 from './image/user_female-512.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.container}>
      <img className={s.avatar} scr={avatar1} alt="Avatar" width={32} />
      <span>Welcome,</span>
      <span className={s.name}> {name}</span>
      <button
        className={s.button}
        onClick={() => dispatch(authOperations.logOut())}
        type="button"
        title="Log out"
        aria-label="Log out"
      >
        Log out
      </button>
    </div>
  );
}
