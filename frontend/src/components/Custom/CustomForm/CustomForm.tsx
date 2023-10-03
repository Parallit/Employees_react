import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'src/store';
import { userRegistration } from 'src/store/auth/authSlice';
import { selectReqErr } from 'src/store/auth/selectors';
import { PrimaryButton } from 'src/styles/Buttons/PrimaryButton';
import { InputForm } from 'src/styles/Inputs/InputForm';
import { baseTheme } from 'src/styles/theme';

interface CustomFormProps {
    className?: string
};

interface Errors {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const CustomForm: FC<CustomFormProps> = ({
    className,
}) => {
    const titles = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const [errors, setErrors] = useState<Errors>({...titles})
    const [fieldState, setFieldState] = useState({...titles});
    const arrTitles = Object.keys(fieldState)

    const { firstName, lastName, email, password, confirmPassword } = fieldState;
    const reqErrors = useSelector(selectReqErr)

    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (firstName && lastName && email && !Object.values(errors).join("") && (password === confirmPassword)) {
            dispatch(
                userRegistration({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                })
            );
            setFieldState({...titles})
        }
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
        } else if (name === "confirmPassword" && (value !== password)) {
            errMsg = 'Please make sure your passwords match';
        }
        setErrors((prevState) => ({
            ...prevState,
            [name]: errMsg
        }))
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <InputForm
                    required
                    value={fieldState.firstName}
                    name={'firstName'}
                    id={'firstName'}
                    labelName={'First Name'}
                    type={'text'}
                    errors={errors}
                    onBlur={handleBlur}
                    onChange={handleChange} />
                <InputForm
                    required
                    value={fieldState.lastName}
                    name={'lastName'}
                    id={'lastName'}
                    labelName={'Last Name'}
                    type={'text'}
                    errors={errors}
                    onBlur={handleBlur}
                    onChange={handleChange} />
                <InputForm
                    required
                    value={fieldState.email}
                    name={'email'}
                    id={'email'}
                    labelName={'Email'}
                    type={'email'}
                    errors={errors}
                    onBlur={handleBlur}
                    onChange={handleChange} />
                <InputForm
                    required
                    value={fieldState.password}
                    name={'password'}
                    id={'password'}
                    labelName={'Password'}
                    type={'password'}
                    errors={errors}
                    onBlur={handleBlur}
                    onChange={handleChange} />
                <InputForm
                    required
                    value={fieldState.confirmPassword}
                    name={'confirmPassword'}
                    id={'confirmPassword'}
                    labelName={'Password confirmation'}
                    errors={errors}
                    onBlur={handleBlur}
                    type={'password'}
                    onChange={handleChange} />
                <PrimaryButton
                    $bg='none'
                    $boxShadow='none'
                    $defaultColor={baseTheme.colors.neonBlue}
                    $hoverColor={baseTheme.colors.white}
                >
                    Submit
                </PrimaryButton>
            </form>
        </>
    )
}

