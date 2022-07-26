import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

import s from './UserMenu.module.css';

import avatar1 from './image/user_female-512.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = `https://tanyaduka.github.io${avatar1}`;
  console.log(avatar);
  return (
    <div className={s.container}>
      <img className={s.avatar} scr={avatar1} alt="Avatar" width={32} />
      <img className={s.avatar} scr={avatar} alt="Avatar" width={32} />
      <img
        className={s.avatar}
        scr="https://klike.net/uploads/posts/2019-03/1551511808_5.jpg"
        alt="Avatar1"
        width={32}
      />

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
