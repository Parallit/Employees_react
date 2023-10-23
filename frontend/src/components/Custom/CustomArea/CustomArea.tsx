import { FC } from 'react';
import { InputValidationError } from 'src/styles/Errors/InputValidationError';

interface CustomAreaProps {
    required?: boolean;
    rows: number;
    cols: number;
    maxLength: number;
    value: string;
    name: string;
    labelName: string;
    error?: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
    className?: string;
};

export const CustomArea: FC<CustomAreaProps> = ({
    value,
    name,
    rows,
    cols,
    maxLength,
    required,
    labelName,
    onChange,
    onBlur,
    error,
    className
}) => {
    return (

        <>
            <div className={className}>
                <textarea
                    rows={rows}
                    cols={cols}
                    maxLength={maxLength}
                    name={name}
                    id={name}
                    value={value}
                    required={required}
                    onChange={onChange}
                    onBlur={onBlur}
                ></textarea>
                <label htmlFor={labelName}>
                    About:
                </label>
                {
                    required &&
                    <InputValidationError>{error}</InputValidationError>
                }
            </div>
        </>
    );
};