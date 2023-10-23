import { FC } from 'react';
import { baseTheme } from 'src/styles/theme';
import { FormContainer } from 'src/styles/Containers/FormContainer';
import { TitleForm } from 'src/styles/Titles/TitleForm';
import { NavigateLink } from 'src/styles/NavigateLink';
import { Text } from 'src/styles/Text/Text';
import { ContainerFlex } from 'src/styles/Containers/ContainerFlex';
import { RegistrationForm } from 'src/components/Forms/RegistrationForm';

export const RegistrationBox: FC = ({ }) => {
    return (
        <>
            <FormContainer>
                <TitleForm>Sign Up</TitleForm>
                <RegistrationForm />
                <ContainerFlex $margin='20px 0' $padding='0 5px'>
                    <Text>Already have an account?</Text>
                    <NavigateLink
                        $textTransform='none'
                        $fontSize={baseTheme.fontSize.medium}
                        $padding='0 5px'
                        $decoration='underline'
                        to={'/login'}>
                        Sign Up here
                    </NavigateLink>
                </ContainerFlex>
            </FormContainer>
        </>
    );
};