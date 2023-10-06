import { FC, useState } from 'react';
import { LoginForm } from 'src/components/Forms/LoginForm';
import { RegistrationForm } from 'src/components/Forms/RegistrationForm';
import { styled } from 'styled-components';

export const LogIn: FC = () => {
  const [currentForm, setCurrentForm] = useState('login');
  const toogleForm = (formName: string) => {
    setCurrentForm(formName);
  };
  return (
    <>
      {currentForm === 'login' ? (
        <AuthContainer>
          <LoginForm onFormSwitch={toogleForm} />
        </AuthContainer>
      ) : (
        <AuthContainer>
          <RegistrationForm onFormSwitch={toogleForm} />
        </AuthContainer>
      )}
    </>
  );
};


const AuthContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -75%);
  top: 50%;
  left: 50%;
  z-index: 999;
`