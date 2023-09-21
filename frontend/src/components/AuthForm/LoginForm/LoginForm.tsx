import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from 'src/store/auth/authSlice';
import { AppDispatch } from 'src/store';
import { useLocation, useNavigate } from 'react-router-dom'
import { InputForm } from 'src/styles/Inputs/InputForm';
import { PrimaryButton } from 'src/styles/Buttons/PrimaryButton';
import { FormContainer, FormTitle } from './StyledLoginForm';
import { baseTheme } from 'src/styles/theme';

interface LoginFormProp {
  onFormSwitch: (formName: string) => void;
}

export const LoginForm: FC<LoginFormProp> = ({ onFormSwitch }) => {
  const [fieldState, setFieldState] = useState({
    email: "",
    password: ""
  });
  const { email, password } = fieldState;

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      dispatch(
        userLogin({
          email: email,
          password: password,
        })
      );
      setFieldState({
        email: "",
        password: ""
      })
      navigate(from, { replace: true });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFieldState((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <>
      <FormContainer>
        <FormTitle>Sign In</FormTitle>
        <form onSubmit={handleSubmit}>
          <InputForm
            required
            value={fieldState.email}
            name={'email'}
            id={'email'}
            labelName={'Email'}
            type={'text'}
            onChange={handleChange} />
          <InputForm
            required
            value={fieldState.password}
            name={'password'}
            id={'password'}
            labelName={'Password'}
            type={'password'}
            onChange={handleChange} />
          <PrimaryButton
            $bg='none'
            $boxShadow='none'
            $defaultColor={baseTheme.colors.neonBlue}
            $hoverColor={baseTheme.colors.white}
          >
            Submit
          </PrimaryButton>
        </form>
        <PrimaryButton
          onClick={() => onFormSwitch('registration')}
          $bg='none'
          $boxShadow='none'
          $textTransform='none'
          $defaultColor={baseTheme.colors.neonBlue}
          $hoverColor={baseTheme.colors.white}
        >
          Dont&apos;t have an account? Register here
        </PrimaryButton>
      </FormContainer>
    </>
  );
};
