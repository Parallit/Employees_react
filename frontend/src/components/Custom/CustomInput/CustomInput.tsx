import { FC } from 'react';
import { InputValidationError } from 'src/styles/Errors/InputValidationError';

interface CustomInputProps {
    required: boolean;
    type: 'text' | 'number' | 'email' | 'password';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
    name: string;
    labelName: string;
    error?: string;
    className?: string;
};

export const CustomInput: FC<CustomInputProps> = ({
    value,
    name,
    type,
    labelName,
    required,
    onChange,
    onBlur,
    error,
    className
}) => {   
    return (
        
        <>
            <div className={className}>
                <input                    
                    name={name}
                    id={name}
                    value={value}
                    type={type}
                    required={required}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                <label htmlFor={name}>
                    {labelName}:{' '}
                </label>
                {
                    required &&
                    <InputValidationError>{error}</InputValidationError>
                }
            </div>
        </>
    );
};