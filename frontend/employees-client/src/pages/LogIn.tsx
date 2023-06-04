import { FC, useState } from "react";
import { LoginForm } from "../components/AuthForm/LoginForm";
import { RegistrationForm } from "../components/AuthForm/RegistrationForm";

export const LogIn: FC = () => {
    const [currentForm, setCurrentForm] = useState('login')
    const toogleForm = (formName: string) => {
        setCurrentForm(formName)
    }
    return (
        <>
            {currentForm === 'login' ? <LoginForm onFormSwitch={toogleForm} /> : <RegistrationForm onFormSwitch={toogleForm} />}
        </>
    );
}