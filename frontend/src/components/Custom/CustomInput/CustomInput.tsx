import { FC } from 'react';
import { InputValidationError } from 'src/styles/Errors/InputValidationError';

interface CustomInputProps {
    value: string;
    name: string;
    type: string;
    labelName: string;
    isEmptyField?: boolean;
    errors: Errors;
    id?: string;
    placeholder?: string;
    required: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
    $width?: string;
    className?: string;
};

interface Errors {
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    position?: string;
    room?: string;
    department?: string;
    telephone?: string
    confirmPassword?: string;
  }
  

export const CustomInput: FC<CustomInputProps> = ({
    value,
    name,
    type,
    placeholder,
    id,
    labelName,
    required,
    onChange,
    onBlur,
    errors,
    $width,
    className
}) => {
    return (
        
        <>
            <div className={className}>
                <input
                    name={name}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    type={type}
                    required={required}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                <label htmlFor={name}>
                    {labelName}:{' '}
                </label>
                { errors[name as keyof Errors] && required && (
                    <InputValidationError>{errors[name as keyof Errors]}</InputValidationError>
                )}
            </div>
        </>
    );
};