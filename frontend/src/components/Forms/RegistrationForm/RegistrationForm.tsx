import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRegistration } from 'src/store/auth/authSlice';
import { AppDispatch } from 'src/store';
import { InputForm } from 'src/styles/Inputs/InputForm';
import { PrimaryButton } from 'src/styles/Buttons/PrimaryButton';
import { baseTheme } from 'src/styles/theme';
import { BadRequestError } from 'src/styles/Errors/BadRequestError';
import { selectReqErr } from 'src/store/auth/selectors';
import { Errors } from '../types.commonForm';
import { FormContainer } from 'src/styles/Containers/FormContainer';
import { TitleForm } from 'src/styles/Titles/TitleForm';

interface RegistrationFormProp {
  onFormSwitch: (formName: string) => void;
}

export const RegistrationForm: FC<RegistrationFormProp> = ({ onFormSwitch }) => {
  const [errors, setErrors] = useState<Errors>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [fieldState, setFieldState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { firstName, lastName, email, password, confirmPassword } = fieldState;
  const reqErrors = useSelector(selectReqErr)

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (firstName && lastName && email && !Object.values(errors).join("") && (password === confirmPassword)) {
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
    setErrors((prevState) => ({
      ...prevState,
      [name]: ''
    }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let errMsg = "";
    if (!value) {
      errMsg = 'Please fill out this field!';
    } else if (name === "email" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      errMsg = 'Please use a valid email address';
    } else if (name === "password" && (value.length < 3 || value.length > 32)) {
      errMsg = 'Password should contain at least 3 characters';
    } else if (name === "confirmPassword" && (value !== password)) {
      errMsg = 'Please make sure your passwords match';
    }
    setErrors((prevState) => ({
      ...prevState,
      [name]: errMsg
    }))
  }

  return (
    <>
      <FormContainer>
        <TitleForm>Sign Up</TitleForm>
        <form onSubmit={handleSubmit}>
          <InputForm
            required
            value={fieldState.firstName}
            name={'firstName'}
            id={'firstName'}
            labelName={'First Name'}
            type={'text'}
            errors={errors}
            onBlur={handleBlur}
            onChange={handleChange} />
          <InputForm
            required
            value={fieldState.lastName}
            name={'lastName'}
            id={'lastName'}
            labelName={'Last Name'}
            type={'text'}
            errors={errors}
            onBlur={handleBlur}
            onChange={handleChange} />
          <InputForm
            required
            value={fieldState.email}
            name={'email'}
            id={'email'}
            type={'text'}
            labelName={'Email'}
            errors={errors}
            onBlur={handleBlur}
            onChange={handleChange} />
          <InputForm
            required
            value={fieldState.password}
            name={'password'}
            id={'password'}
            labelName={'Password'}
            type={'password'}
            errors={errors}
            onBlur={handleBlur}
            onChange={handleChange} />
          <InputForm
            required
            value={fieldState.confirmPassword}
            name={'confirmPassword'}
            id={'confirmPassword'}
            labelName={'Password confirmation'}
            errors={errors}
            onBlur={handleBlur}
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
        <BadRequestError>{reqErrors}</BadRequestError>
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