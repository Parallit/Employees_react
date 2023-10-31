import { FC } from 'react';
import { baseTheme } from 'src/styles/theme';
import { TitleForm } from 'src/styles/Titles/TitleForm';
import { Text } from 'src/styles/Text/Text';
import { FormContainer } from 'src/styles/Containers/FormContainer';
import { NavigateLink } from 'src/styles/NavigateLink';
import { ContainerFlex } from 'src/styles/Containers/ContainerFlex';
import { LoginForm } from 'src/components/Forms/LoginForm';

export const LogInBox: FC = () => {
  return (
    <>
      <FormContainer>
        <TitleForm>Sign In</TitleForm>
        <LoginForm />
        <ContainerFlex $margin="20px 0" $padding="0 5px">
          <Text>Dont&apos;t have an account?</Text>
          <NavigateLink
            $textTransform="none"
            $fontSize={baseTheme.fontSize.medium}
            $padding="0 5px"
            $decoration="underline"
            $textAlign="end"
            to={'/registration'}
          >
            Sign Up here
          </NavigateLink>
        </ContainerFlex>
        <ContainerFlex $margin="20px 0" $padding="0 5px">
          <Text>Forgot Password?</Text>
          <NavigateLink
            $textTransform="none"
            $fontSize={baseTheme.fontSize.medium}
            $padding="0 5px"
            $decoration="underline"
            $textAlign="end"
            to={'/forgot'}
          >
            Remember
          </NavigateLink>
        </ContainerFlex>
      </FormContainer>
    </>
  );
};
