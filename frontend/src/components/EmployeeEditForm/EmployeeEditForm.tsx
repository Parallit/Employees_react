import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { editEmployee } from 'src/store/employees/employeesSlice';
import { Employee } from 'src/store/types.common';
import { AvatarFormBox } from 'src/components/AvatarFormBox';
import { InputForm } from 'src/styles/Inputs/InputForm';
import { PrimaryButton } from 'src/styles/Buttons/PrimaryButton';
import { FormContainer } from './StyledEmployeeEditForm';

interface EmployeeEditFormProps {
    employee: Employee;
    onClose: () => void;
}

export const EmployeeEditForm: FC<EmployeeEditFormProps> = ({ employee, onClose }) => {
    const [avatarId, setAvatarId] = useState<string>();
    const [fieldState, setFieldState] = useState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        position: employee.position,
        room: employee.room,
        department: employee.department,
        telephone: employee.telephone,
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
        const newDataEmployee = {
            firstName: firstName,
            lastName: lastName,
            position: position,
            room: room,
            department: department,
            telephone: telephone,
            avatar: avatarId
        };
        dispatch(editEmployee({ employee, newData: newDataEmployee }));
        onClose()
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
                            Click to complete edit
                        </PrimaryButton>
                </form>
            </FormContainer>
        </>
    );
};