import { FC } from 'react';
import { TitleForm } from 'src/styles/Titles/TitleForm';
import { FormContainer } from 'src/styles/Containers/FormContainer';
import { EmployeeAddForm } from 'src/components/Forms/EmployeeAddForm';

interface EmployeeAddBoxProps {
  onClose: () => void;
}

export const EmployeeAddBox: FC<EmployeeAddBoxProps> = ({ onClose }) => {
  return (
    <>
      <FormContainer $width={'100%'} $margin="0">
        <TitleForm>Employee information</TitleForm>
        <EmployeeAddForm onClose={onClose} />
      </FormContainer>
    </>
  );
};
