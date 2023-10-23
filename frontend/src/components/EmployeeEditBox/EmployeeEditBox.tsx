import { FC } from 'react';
import { TitleForm } from 'src/styles/Titles/TitleForm';
import { FormContainer } from 'src/styles/Containers/FormContainer';
import { EmployeeEditForm } from 'src/components//Forms/EmployeeEditForm';
import { Employee } from 'src/store/types.common';

interface EmployeeEditBoxProps {
    onClose: () => void;
    employee: Employee
}

export const EmployeeEditBox: FC<EmployeeEditBoxProps> = ({ onClose, employee }) => {
    return (
        <>
            <FormContainer $width={"100%"} $margin='0'>
                <TitleForm>Employee information</TitleForm>
                <EmployeeEditForm onClose={onClose} employee={employee}/>
            </FormContainer>
        </>
    );
};
