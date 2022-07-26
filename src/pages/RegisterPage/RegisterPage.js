import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import s from './RegisterPage.module.css';

export default function LoginPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
    dispatch(authOperations.logIn({ email, password })).then(({ meta }) => {
      console.log(meta);
      console.log(meta.requestStatus);
      if (meta.requestStatus === 'fulfilled') {
        setName('');
        setEmail('');
        setPassword('');
      }
    });
  };

  return (
    <main>
      <section className={s.registration}>
        <h1 className={s.title}>Create your account</h1>
        <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Write down your name"
              autoComplete="off"
              required
            />
          </label>
          <label className={s.label}>
            Email
            <input
              className={s.input}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Write down your e-mail"
              autoComplete="off"
              required
            />
          </label>
          <label className={s.label}>
            Password
            <input
              className={s.input}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Write down your password"
              autoComplete="off"
              required
            />
          </label>
          <button className={s.button} type="submit">
            Sign up
          </button>
        </form>
      </section>
    </main>
  );
}
