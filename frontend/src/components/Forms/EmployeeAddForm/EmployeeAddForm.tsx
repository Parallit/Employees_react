import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { addNewEmployee } from 'src/store/employees/employeesSlice';
import { AvatarFormBox } from 'src/components/AvatarFormBox';
import { InputForm } from 'src/styles/Inputs/InputForm';
import { PrimaryButton } from 'src/styles/Buttons/PrimaryButton';
import { SubTitleForm } from 'src/styles/SubTitles/SubTitleForm';
import { useInput } from 'src/components/Hook/useInput';
import { ContainerFlexCenter } from 'src/styles/Containers/ContainerFlexCenter';
import { AvatarIcon } from 'src/components/AvatarIcon';
import { selectIsLoadingEmployees } from 'src/store/employees/selectors';
import { BadRequestError } from 'src/styles/Errors/BadRequestError';

interface EmployeeAddFormProps {
  onClose: () => void;
}

export const EmployeeAddForm: FC<EmployeeAddFormProps> = ({ onClose }) => {
  const firstNameInput = useInput('');
  const lastNameInput = useInput('');
  const positionInput = useInput('');
  const roomInput = useInput('');
  const departmentInput = useInput('');
  const telephoneInput = useInput('');
  const [avatarId, setAvatarId] = useState<string>('default');
  const [requestErr, setRequestError] = useState<string>('')

  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectIsLoadingEmployees);

  const isValid = (input: { value: string, error: string }): boolean => {
    if (input.value && input.error) {
      return false
    } else {
      return true
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      isValid(firstNameInput) &&
      isValid(lastNameInput) &&
      isValid(positionInput) &&
      isValid(roomInput) &&
      isValid(departmentInput) &&
      isValid(telephoneInput)
    ) {
      try {
        const newEmployee = {
          firstName: firstNameInput.value,
          lastName: lastNameInput.value,
          position: positionInput.value,
          room: roomInput.value,
          department: departmentInput.value,
          telephone: telephoneInput.value,
          avatar: avatarId
        };
        await dispatch(addNewEmployee(newEmployee)).unwrap();
        onClose();
      } catch (error) {
        const reqErr = error as string
        setRequestError(reqErr)
      }
    }
  };

  const getAvatarId = (radioId: string) => {
    setAvatarId(radioId)
  }

  return (
    <>
      <ContainerFlexCenter>
        <AvatarIcon width={'120px'} height={'120px'} name={avatarId} />
      </ContainerFlexCenter>
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
          name={'position'}
          labelName={'Position'}
          {...positionInput}
        />
        <InputForm
          required
          type={'text'}
          name={'room'}
          labelName={'Room'}
          {...roomInput}
        />
        <InputForm
          required
          type={'text'}
          name={'department'}
          labelName={'Department'}
          {...departmentInput}
        />
        <InputForm
          required
          type={'text'}
          name={'telephone'}
          labelName={'Telephone'}
          {...telephoneInput}
        />
        <BadRequestError>{requestErr}</BadRequestError>
        <SubTitleForm>Shoose an Avatar:</SubTitleForm>
        <AvatarFormBox getAvatarId={getAvatarId} />
        <PrimaryButton
          disabled={(
            !firstNameInput.value ||
            !lastNameInput.value ||
            !positionInput.value ||
            !roomInput.value ||
            !departmentInput.value ||
            !telephoneInput.value
          )}
        >
          {isLoading ? 'Processing...' : 'Click to add new employee'}
        </PrimaryButton>
      </form>
    </>
  );
};
