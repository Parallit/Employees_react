import React, { FC, useState } from "react";
import style from './Form.module.scss';
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/auth/authSlice";
import { AppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";

interface LoginFormProp {
    onFormSwitch: (formName: string) => void
}

export const LoginForm: FC<LoginFormProp> = ({ onFormSwitch }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('')
    
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email && password) {
            dispatch(userLogin({
                email: email,
                password: password
            }))
        }
        setEmail('');
        setPassword('');
        navigate("/");
    }

    return (
        <>
            <div className={style.login_wrp}>
                <h2 className={style.login_title}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className={style.user_wrp}>
                        <input onChange={e => setEmail(e.target.value)} value={email} className={style.user_input} type="text" id="email" required />
                        <label className={style.user_label} htmlFor="email">Email: </label>
                    </div>
                    <div className={style.user_wrp}>
                        <input onChange={e => setPassword(e.target.value)} value={password} className={style.user_input} type="password" id="password" required />
                        <label className={style.user_label} htmlFor="password">Password: </label>
                    </div>
                    <div>
                    <button className={style.login_btn}>
                        Submit
                    </button>
                    </div>
                </form>
                <button onClick={() => onFormSwitch('registration')} className={style.to_another_form}>Dont't have an account? Register here</button>
            </div>
        </>
    )
}