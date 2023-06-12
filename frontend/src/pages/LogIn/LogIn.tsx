import { FC, useState } from 'react';
import { LoginForm } from 'src/components/AuthForm/LoginForm';
import { RegistrationForm } from 'src/components/AuthForm/RegistrationForm';

export const LogIn: FC = () => {
  const [currentForm, setCurrentForm] = useState('login');
  const toogleForm = (formName: string) => {
    setCurrentForm(formName);
  };
  return (
    <>
      {currentForm === 'login' ? (
        <LoginForm onFormSwitch={toogleForm} />
      ) : (
        <RegistrationForm onFormSwitch={toogleForm} />
      )}
    </>
  );
};
