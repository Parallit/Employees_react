import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store';
import { editEmployee } from 'src/store/employees/employeesSlice';
import { Employee } from 'src/store/types.common';
import { AvatarFormBox } from 'src/components/AvatarFormBox';
import { InputForm } from 'src/styles/Inputs/InputForm';
import { PrimaryButton } from 'src/styles/Buttons/PrimaryButton';
import { AvatarIcon } from 'src/components/AvatarIcon';
import { Errors } from '../types.commonForm';
import { TitleForm } from 'src/styles/Titles/TitleForm';
import { SubTitleForm } from 'src/styles/SubTitles/SubTitleForm';
import { FormContainer } from 'src/styles/Containers/FormContainer';
import { ContainerFlexCenter } from 'src/styles/Containers/ContainerFlexCenter';

interface EmployeeEditFormProps {
    employee: Employee;
    onClose: () => void;
}

export const EmployeeEditForm: FC<EmployeeEditFormProps> = ({ employee, onClose }) => {
    const [errors, setErrors] = useState<Errors>({
        firstName: "",
        lastName: "",
        position: "",
        room: "",
        department: "",
        telephone: ""
    })
    const [avatarId, setAvatarId] = useState<string>(employee.avatar);
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
        setErrors((prevState) => ({
            ...prevState,
            [name]: ''
        }))
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let errMsg = "";
        if (!value) {
            errMsg = 'Please fill out this field!';
        } else if (name === "email" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            errMsg = 'Please use a valid email address';
        } else if (name === "password" && (value.length < 3 || value.length > 32)) {
            errMsg = 'Password should contain at least 3 characters';
        }
        setErrors((prevState) => ({
            ...prevState,
            [name]: errMsg
        }))
    }

    const getAvatarId = (radioId: string) => {
        setAvatarId(radioId)
    }

    return (
        <>
            <FormContainer width={"100%"}>
                <TitleForm>Employee information</TitleForm>
                <ContainerFlexCenter>
                    <AvatarIcon width={'120px'} height={'120px'} name={avatarId} />
                </ContainerFlexCenter>
                <form onSubmit={handleSubmit}>
                    <InputForm
                        required
                        value={fieldState.firstName}
                        name={'firstName'}
                        id={'firstName'}
                        labelName={'First Name'}
                        errors={errors}
                        onBlur={handleBlur}
                        type={'text'}
                        onChange={handleChange} />
                    <InputForm
                        required
                        value={fieldState.lastName}
                        name={'lastName'}
                        id={'lastName'}
                        labelName={'Last Name'}
                        errors={errors}
                        onBlur={handleBlur}
                        type={'text'}
                        onChange={handleChange} />
                    <InputForm
                        required
                        value={fieldState.position}
                        name={'position'}
                        id={'position'}
                        labelName={'Position'}
                        errors={errors}
                        onBlur={handleBlur}
                        type={'text'}
                        onChange={handleChange} />
                    <InputForm
                        required
                        value={fieldState.room}
                        name={'room'}
                        id={'room'}
                        labelName={'Room'}
                        errors={errors}
                        onBlur={handleBlur}
                        type={'text'}
                        onChange={handleChange} />
                    <InputForm
                        required
                        value={fieldState.department}
                        name={'department'}
                        id={'department'}
                        labelName={'Department'}
                        errors={errors}
                        onBlur={handleBlur}
                        type={'text'}
                        onChange={handleChange} />
                    <InputForm
                        required
                        value={fieldState.telephone}
                        name={'telephone'}
                        id={'telephone'}
                        labelName={'Tel.'}
                        errors={errors}
                        onBlur={handleBlur}
                        type={'text'}
                        onChange={handleChange} />
                    <div>
                        <SubTitleForm>Shoose an Avatar:</SubTitleForm>
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