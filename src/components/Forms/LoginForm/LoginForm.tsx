import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from 'src/store/auth/authSlice';
import { AppDispatch } from 'src/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { InputForm } from 'src/styles/Inputs/InputForm';
import { PrimaryButton } from 'src/styles/Buttons/PrimaryButton';
import { baseTheme } from 'src/styles/theme';
import { selectLoading } from 'src/store/auth/selectors';
import { BadRequestError } from 'src/styles/Errors/BadRequestError';
import { useInput } from 'src/components/Hook/useInput';

export const LoginForm: FC = () => {
  const emailInput = useInput('');
  const passwordInput = useInput('');
  const [requestErr, setRequestError] = useState<string>('');

  const isLoading = useSelector(selectLoading);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const isValid = (input: { value: string; error: string }): boolean => {
    if (input.value && input.error) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid(emailInput) && isValid(passwordInput)) {
      try {
        await dispatch(
          userLogin({
            email: emailInput.value,
            password: passwordInput.value,
          })
        ).unwrap();
        emailInput.setValue('');
        passwordInput.setValue('');
        navigate(from, { replace: true });
      } catch (error) {
        const reqErr = error as string;
        setRequestError(reqErr);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <InputForm
          required
          type={'text'}
          name={'email'}
          labelName={'Email'}
          {...emailInput}
        />
        <InputForm
          required
          type={'password'}
          name={'password'}
          labelName={'Password'}
          {...passwordInput}
        />
        <BadRequestError>{requestErr}</BadRequestError>
        <PrimaryButton
          $bg="none"
          $boxShadow="none"
          $margin="30px 0 10px 0"
          $defaultColor={baseTheme.colors.neonBlue}
          $hoverColor={baseTheme.colors.white}
          disabled={!emailInput.value || !passwordInput.value}
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </PrimaryButton>
      </form>
    </>
  );
};
