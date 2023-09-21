import { FC, useState } from 'react';
import { LoginForm } from 'src/components/AuthForm/LoginForm';
import { RegistrationForm } from 'src/components/AuthForm/RegistrationForm';
import { styled } from 'styled-components';

export const LogIn: FC = () => {
  const [currentForm, setCurrentForm] = useState('login');
  const toogleForm = (formName: string) => {
    setCurrentForm(formName);
  };
  return (
    <>
      {currentForm === 'login' ? (
        <Container>
          <LoginForm onFormSwitch={toogleForm} />
        </Container>
      ) : (
        <Container>
          <RegistrationForm onFormSwitch={toogleForm} />
        </Container>
      )}
    </>
  );
};


const Container = styled.div`
  margin: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`