import { FC } from 'react';
import { InputFormError } from 'src/styles/Errors/InputFormError';

interface CustomInputProps {
    value: string;
    name: string;
    type: string;
    labelName: string;
    id?: string;
    placeholder?: string;
    required: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string
};

export const CustomInput: FC<CustomInputProps> = ({
    value,
    name,
    type,
    placeholder,
    id,
    labelName,
    required,
    onChange,
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
                />
                <label htmlFor={name}>
                    {labelName}:{' '}
                </label>
            </div>
        </>
    );
};