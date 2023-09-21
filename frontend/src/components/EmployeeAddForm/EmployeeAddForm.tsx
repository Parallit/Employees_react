import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { addNewEmployee } from 'src/store/employees/employeesSlice';
import { AvatarFormBox } from 'src/components/AvatarFormBox';
import { InputForm } from 'src/styles/Inputs/InputForm';
import { PrimaryButton } from 'src/styles/Buttons/PrimaryButton';
import { FormContainer } from './StyledEmployeeAddForm';
import { AvatarIcon } from '../AvatarIcon';

interface EmployeeAddFormProps {
  onClose: () => void;
}

export const EmployeeAddForm: FC<EmployeeAddFormProps> = ({ onClose }) => {
  const [avatarId, setAvatarId] = useState<string>('default');
  const [fieldState, setFieldState] = useState({
    firstName: "",
    lastName: "",
    position: "",
    room: "",
    department: "",
    telephone: "",
  });
  const {
    firstName,
    lastName,
    position,
    room,
    department,
    telephone
  } = fieldState;

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newEmployee = {
      firstName: firstName,
      lastName: lastName,
      position: position,
      room: room,
      department: department,
      telephone: telephone,
      avatar: avatarId
    };
    dispatch(addNewEmployee(newEmployee));
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFieldState((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const getAvatarId = (radioId: string) => {
    setAvatarId(radioId)
  }

  return (
    <>
      <FormContainer>
        <h3>Employee information</h3>
        <AvatarIcon width={'80px'} height={'80px'} name={avatarId}/>
        <form onSubmit={handleSubmit}>
          <InputForm
            required
            value={fieldState.firstName}
            name={'firstName'}
            id={'firstName'}
            labelName={'First Name'}
            type={'text'}
            onChange={handleChange} />
          <InputForm
            required
            value={fieldState.lastName}
            name={'lastName'}
            id={'lastName'}
            labelName={'Last Name'}
            type={'text'}
            onChange={handleChange} />
          <InputForm
            required
            value={fieldState.position}
            name={'position'}
            id={'position'}
            labelName={'Position'}
            type={'text'}
            onChange={handleChange} />
          <InputForm
            required
            value={fieldState.room}
            name={'room'}
            id={'room'}
            labelName={'Room'}
            type={'text'}
            onChange={handleChange} />
          <InputForm
            required
            value={fieldState.department}
            name={'department'}
            id={'department'}
            labelName={'Department'}
            type={'text'}
            onChange={handleChange} />
          <InputForm
            required
            value={fieldState.telephone}
            name={'telephone'}
            id={'telephone'}
            labelName={'Tel.'}
            type={'text'}
            onChange={handleChange} />
          <div>
            <h4>Shoose an Avatar:</h4>
            <AvatarFormBox getAvatarId={getAvatarId} />
          </div>
          <PrimaryButton>
            Click to add new employee
          </PrimaryButton>
        </form>
      </FormContainer>
    </>
  );
};
