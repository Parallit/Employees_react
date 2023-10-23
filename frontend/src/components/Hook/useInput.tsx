import { ChangeEvent, FocusEvent, useState } from 'react'

export const useInput = (initialValue: string) => {
    const [value, setValue] = useState<string>(initialValue)
    const [error, setError] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        setError('');
    }

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let errMsg = "";
        if (!value) {
            errMsg = 'Please fill out this field!';
        } else if (name === "email" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            errMsg = 'Please use a valid email address';
        } else if (name === "password" && (value.length < 3 || value.length > 32)) {
            errMsg = 'Password should contain at least 3 characters';
        } else if (name === "firstName" && !/^[а-яА-Яa-zA-Z]+$/i.test(value)) {
            errMsg = 'This field must be a string';
        } else if (name === "lastName" && !/^[а-яА-Яa-zA-Z]+$/i.test(value)) {
            errMsg = 'This field must be a string';
        } else if (name === "position" && !/^[а-яА-Яa-zA-Z]+$/i.test(value)) {
            errMsg = 'This field must be a string';
        } else if (name === "department" && !/^[а-яА-Яa-zA-Z]+$/i.test(value)) {
            errMsg = 'This field must be a string';
        } else if (name === "room" && !/^[0-9]+$/.test(value)) {
            errMsg = 'This field must be a number'
        } else if (name === "telephone" && !/^[0-9]+$/.test(value)) {
            errMsg = 'This field must be a number';
        }
        setError(errMsg)
    }

    return {
        value,
        error,
        setError,
        setValue,
        onChange: handleChange,
        onBlur: handleBlur,
    }
}