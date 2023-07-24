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
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (firstName && lastName && email && password) {
      dispatch(
        userRegistration({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        })
      );
    }
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');

    onFormSwitch('login')
  };

  return (
    <>
      <div className={style.login_wrp}>
        <h2 className={style.login_title}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className={style.user_wrp}>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className={style.user_input}
              type="text"
              id="firstName"
              required
            />
            <label htmlFor="firstName" className={style.user_label}>
              First Name:{' '}
            </label>
          </div>
          <div className={style.user_wrp}>
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              className={style.user_input}
              type="text"
              id="lastName"
              required
            />
            <label htmlFor="lastName" className={style.user_label}>
              Last Name:{' '}
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
