import { FC, useState } from "react";
import style from './ProfileUserForm.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "src/store";
import { selectCurrentUser } from "src/store/auth/selectors";

export const ProfileUserForm: FC = () => {
    
    const user = useSelector(selectCurrentUser);

    const [name, setName] = useState<string>(user.name? user.name : '');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [address, setAddress] = useState<string>(user.address? user.address : '');
    const [department, setDepartment] = useState<string>(user.department? user.department : '');
    const [telephone, setTelephone] = useState<string>(user.telephone? user.telephone : '');
    const [about, setAbout] = useState<string>(user.about? user.about : '');

    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e);

        setName('');
        setEmail('');
        setPassword('');
        setAddress('');
        setDepartment('');
        setTelephone('');
        setAbout('');
    };

    return (
        <>
            <div className={style.container}>
                <h3 className={style.form_heading}>User information</h3>
                <form onSubmit={handleSubmit} className={style.form_info}>
                    <div className={style.input_wrp}>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className={style.form_input}
                            type="text"
                            id="name"
                            required
                        />
                        <label htmlFor="name" className={style.form_label}>
                            Name:{' '}
                        </label>
                    </div>
                    <div className={style.input_wrp}>
                        <input
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                            className={style.form_input}
                            type="text"
                            id="address"
                        />
                        <label htmlFor="address" className={style.form_label}>
                            Address:{' '}
                        </label>
                    </div>
                    <div className={style.input_wrp}>
                        <input
                            onChange={(e) => setDepartment(e.target.value)}
                            value={department}
                            className={style.form_input}
                            type="text"
                            id="department"
                        />
                        <label htmlFor="department" className={style.form_label}>
                            Department:{' '}
                        </label>
                    </div>
                    <div className={style.input_wrp}>
                        <input
                            onChange={(e) => setTelephone(e.target.value)}
                            value={telephone}
                            className={style.form_input}
                            type="text"
                            id="telephone"
                        />
                        <label htmlFor="telephone" className={style.form_label}>
                            Tel.:{' '}
                        </label>
                    </div>
                    <div className={style.input_wrp}>
                        <input
                            onChange={(e) => setAbout(e.target.value)}
                            value={about}
                            className={style.form_input}
                            type="text"
                            id="about"
                        />
                        <label htmlFor="about" className={style.form_label}>
                            About:{' '}
                        </label>
                    </div>
                    {/* <div className={style.input_wrp}>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className={style.form_input}
                            type="password"
                            id="password"
                            required
                        />
                        <label htmlFor="password" className={style.form_label}>
                            Password:{' '}
                        </label>
                    </div >
                    <div className={style.input_wrp}>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className={style.form_input}
                            type="text"
                            id="email"
                            required
                        />
                        <label htmlFor="email" className={style.form_label}>
                            Email:{' '}
                        </label>
                    </div> */}
                    <button className={style.form_update_btn}>Click to update profile</button>
                </form>
                <button className={style.form_delete_btn}>Delete this profile</button>
            </div>
        </>
    )
}