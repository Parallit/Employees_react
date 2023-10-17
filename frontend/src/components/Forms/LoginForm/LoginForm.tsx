import React, { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from 'src/store/auth/authSlice';
import { AppDispatch } from 'src/store';
import { redirect, useLocation, useNavigate } from 'react-router-dom'
import { InputForm } from 'src/styles/Inputs/InputForm';
import { PrimaryButton } from 'src/styles/Buttons/PrimaryButton';
import { baseTheme } from 'src/styles/theme';
import { selectReqErr } from 'src/store/auth/selectors';
import { BadRequestError } from 'src/styles/Errors/BadRequestError';
import { Errors } from '../types.commonForm';
import { TitleForm } from 'src/styles/Titles/TitleForm';
import { FormContainer } from 'src/styles/Containers/FormContainer';

interface LoginFormProp {
  onFormSwitch: (formName: string) => void;
}

export const LoginForm: FC<LoginFormProp> = ({ onFormSwitch }) => {
  const [errors, setErrors] = useState<Errors>({ 
    email: "",
    password: ""
  })
  const [fieldState, setFieldState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = fieldState;
  const reqErrors = useSelector(selectReqErr)

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email && password && !Object.values(errors).join("")) {
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
      navigate(from, {replace: true})
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
    }
    setErrors((prevState) => ({
      ...prevState,
      [name]: errMsg
    }))
  }
  return (
    <>
      <FormContainer>
        <TitleForm>Sign In</TitleForm>
        <form onSubmit={handleSubmit} noValidate>
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
            type={'password'}
            labelName={'Password'}
            errors={errors}
            onBlur={handleBlur}
            onChange={handleChange} />
          <PrimaryButton
            $bg='none'
            $boxShadow='none'
            $margin='20px 0 0 0'
            $defaultColor={baseTheme.colors.neonBlue}
            $hoverColor={baseTheme.colors.white}
          >
            Submit
          </PrimaryButton>
        </form>
        <BadRequestError>{reqErrors}</BadRequestError>
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
