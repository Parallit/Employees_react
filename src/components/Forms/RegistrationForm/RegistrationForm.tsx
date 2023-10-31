import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userRegistration } from 'src/store/auth/authSlice';
import { AppDispatch } from 'src/store';
import { InputForm } from 'src/styles/Inputs/InputForm';
import { PrimaryButton } from 'src/styles/Buttons/PrimaryButton';
import { baseTheme } from 'src/styles/theme';
import { BadRequestError } from 'src/styles/Errors/BadRequestError';
import { selectLoading, selectReqErr } from 'src/store/auth/selectors';
import { useNavigate } from 'react-router-dom';
import { useInput } from 'src/components/Hook/useInput';

export const RegistrationForm: FC = () => {
  const firstNameInput = useInput('');
  const lastNameInput = useInput('');
  const emailInput = useInput('');
  const passwordInput = useInput('');
  const [requestErr, setRequestError] = useState<string>('');

  const isValid = (input: { value: string; error: string }): boolean => {
    if (input.value && input.error) {
      return false;
    } else {
      return true;
    }
  };

  const isLoading = useSelector(selectLoading);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      isValid(firstNameInput) &&
      isValid(lastNameInput) &&
      isValid(emailInput) &&
      isValid(passwordInput)
    ) {
      try {
        await dispatch(
          userRegistration({
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
          })
        ).unwrap();
        firstNameInput.setValue('');
        lastNameInput.setValue('');
        emailInput.setValue('');
        passwordInput.setValue('');
        navigate('../login', { replace: true });
      } catch (error) {
        const reqErr = error as string;
        setRequestError(reqErr);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputForm
          required
          type={'text'}
          name={'firstName'}
          labelName={'First Name'}
          {...firstNameInput}
        />
        <InputForm
          required
          type={'text'}
          name={'lastName'}
          labelName={'Last Name'}
          {...lastNameInput}
        />
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
          $defaultColor={baseTheme.colors.neonBlue}
          $hoverColor={baseTheme.colors.white}
          disabled={
            !firstNameInput.value ||
            !lastNameInput.value ||
            !emailInput.value ||
            !passwordInput.value
          }
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </PrimaryButton>
      </form>
    </>
  );
};
