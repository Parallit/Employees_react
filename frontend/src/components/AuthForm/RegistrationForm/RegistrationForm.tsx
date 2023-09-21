import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userRegistration } from 'src/store/auth/authSlice';
import { AppDispatch } from 'src/store';
import { FormContainer, FormTitle } from './StyledRegistrationForm';
import { InputForm } from 'src/styles/Inputs/InputForm';
import { PrimaryButton } from 'src/styles/Buttons/PrimaryButton';
import { baseTheme } from 'src/styles/theme';

interface RegistrationFormProp {
  onFormSwitch: (formName: string) => void;
}

export const RegistrationForm: FC<RegistrationFormProp> = ({ onFormSwitch }) => {
  const [fieldState, setFieldState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { firstName, lastName, email, password, confirmPassword } = fieldState;


  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (firstName && lastName && email && (password === confirmPassword)) {
      dispatch(
        userRegistration({
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        })
      );
      setFieldState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      })
      onFormSwitch('login')
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
            value={fieldState.firstName}
            name={'firstName'}
            id={'firstName'}
            labelName={'First Name'}
            type={'text'}
            onChange={handleChange} />
          <InputForm
            required
            value={fieldState.lastName}
            name={'lastName'}
            id={'lastName'}
            labelName={'Last Name'}
            type={'text'}
            onChange={handleChange} />
          <InputForm
            required
            value={fieldState.email}
            name={'email'}
            id={'email'}
            labelName={'Email'}
            type={'email'}
            onChange={handleChange} />
          <InputForm
            required
            value={fieldState.password}
            name={'password'}
            id={'password'}
            labelName={'Password'}
            type={'password'}
            onChange={handleChange} />
          <InputForm
            required
            value={fieldState.confirmPassword}
            name={'confirmPassword'}
            id={'confirmPassword'}
            labelName={'Password confirmation'}
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
          onClick={() => onFormSwitch('login')}
          $bg='none'
          $boxShadow='none'
          $textTransform='none'
          $defaultColor={baseTheme.colors.neonBlue}
          $hoverColor={baseTheme.colors.white}
        >
          Already have an account ? Login here
        </PrimaryButton>
      </FormContainer>
    </>
  );
};