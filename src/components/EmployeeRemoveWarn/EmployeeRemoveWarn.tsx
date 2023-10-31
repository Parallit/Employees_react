import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { removeEmployee } from 'src/store/employees/employeesSlice';
import { Employee } from 'src/store/types.common';
import { PrimaryButton } from 'src/styles/Buttons/PrimaryButton';
import { DangerButton } from 'src/styles/Buttons/DangerButton';
import { RemoveWarnContainer } from './StyledEmployeeRemoveWarn';
import { TitleForm } from 'src/styles/Titles/TitleForm';
import { selectIsRemovingEmployee } from 'src/store/employees/selectors';

interface EmployeeRemoveWarnProps {
  onClose: () => void;
  employee: Employee;
}

export const EmployeeRemoveWarn: FC<EmployeeRemoveWarnProps> = ({
  onClose,
  employee,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectIsRemovingEmployee);

  const handleClickSuccess = () => {
    dispatch(removeEmployee(employee));
    onClose();
  };
  const handleClickReject = () => {
    onClose();
  };

  return (
    <>
      <RemoveWarnContainer>
        <TitleForm>Remove Employee</TitleForm>
        <h3>Are you sure you want to do this action?</h3>
        <p>It will be impossible to recover the data</p>
        <div>
          <DangerButton
            $width={'50%'}
            $outline="none"
            onClick={handleClickSuccess}
          >
            {isLoading ? 'Processing...' : 'yes'}
          </DangerButton>
          <PrimaryButton $width={'50%'} onClick={handleClickReject}>
            no
          </PrimaryButton>
        </div>
      </RemoveWarnContainer>
    </>
  );
};
