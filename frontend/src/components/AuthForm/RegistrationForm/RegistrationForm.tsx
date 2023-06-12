import React, { FC, useState } from 'react';
import style from '../Form.module.scss';
import { useDispatch } from 'react-redux';
import { userRegistration } from 'src/store/auth/authSlice';
import { AppDispatch } from 'src/store';
import { useNavigate } from 'react-router-dom';

interface LoginFormProp {
  onFormSwitch: (formName: string) => void;
}

export const RegistrationForm: FC<LoginFormProp> = ({ onFormSwitch }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && email && password) {
      dispatch(
        userRegistration({
          name: name,
          email: email,
          password: password,
        })
      );
    }
    setName('');
    setEmail('');
    setPassword('');

    navigate('/');
  };

  return (
    <>
      <div className={style.login_wrp}>
        <h2 className={style.login_title}>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className={style.user_wrp}>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className={style.user_input}
              type="text"
              id="name"
              required
            />
            <label htmlFor="name" className={style.user_label}>
              Name:{' '}
            </label>
          </div>
          <div className={style.user_wrp}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className={style.user_input}
              type="text"
              id="email"
              required
            />
            <label htmlFor="email" className={style.user_label}>
              Email:{' '}
            </label>
          </div>
          <div className={style.user_wrp}>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className={style.user_input}
              type="password"
              id="password"
              required
            />
            <label htmlFor="password" className={style.user_label}>
              Password:{' '}
            </label>
          </div>
          <button className={style.login_btn}>Rigistration</button>
          <button
            onClick={() => onFormSwitch('login')}
            className={style.to_another_form}
          >
            Already have an account? Login here
          </button>
        </form>
      </div>
    </>
  );
};
