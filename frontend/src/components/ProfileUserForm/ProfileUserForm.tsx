import { FC, useState } from "react";
import style from './ProfileUserForm.module.scss'
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/store";
import { CurrentUserDto, editedUserInfo } from "src/store/user/types"
import { deleteUserProfile, updateUserInfo } from "src/store/user/userSlice";

interface CurrentUserProps {
    user: CurrentUserDto;
}

export const ProfileUserForm: FC<CurrentUserProps> = ({ user }) => {
    const [room, setRoom] = useState<string>('');
    const [department, setDepartment] = useState<string>('');
    const [telephone, setTelephone] = useState<string>('');
    const [about, setAbout] = useState<string>('');

    const dispatch = useDispatch<AppDispatch>();

    const updateProfile = (editedUserInfo: editedUserInfo) => {       
        dispatch(updateUserInfo(editedUserInfo));
    }

    const handleDeleteProfile = () => {
        dispatch(deleteUserProfile(user));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const editedUserInfo = {
            userId: user.id,
            room: room,
            department: department,
            telephone: telephone,
            about: about
        }
        
        updateProfile(editedUserInfo)
        setRoom('');
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
                            onChange={(e) => setRoom(e.target.value)}
                            value={room}
                            className={style.form_input}
                            type="text"
                            id="room"
                            required
                        />
                        <label htmlFor="room" className={style.form_label}>
                            Room:
                        </label>
                    </div>
                    <div className={style.input_wrp}>
                        <input
                            onChange={(e) => setDepartment(e.target.value)}
                            value={department}
                            className={style.form_input}
                            type="text"
                            id="department"
                            required
                        />
                        <label htmlFor="department" className={style.form_label}>
                            Department:
                        </label>
                    </div>
                    <div className={style.input_wrp}>
                        <input
                            onChange={(e) => setTelephone(e.target.value)}
                            value={telephone}
                            className={style.form_input}
                            type="text"
                            id="telephone"
                            required
                        />
                        <label htmlFor="telephone" className={style.form_label}>
                            Tel.:
                        </label>
                    </div>
                    <div className={style.textbox_wrp}>
                        <textarea
                            onChange={(e) => setAbout(e.target.value)}
                            value={about}
                            className={style.form_textbox}
                            rows={10}
                            cols={45}
                            maxLength={300}
                            id="about"
                        ></textarea>
                        <label htmlFor="about" className={style.form_label}>
                            About:
                        </label>
                    </div>
                    <button className={style.form_update_btn}>Click to update profile</button>
                </form>
                <button onClick={handleDeleteProfile} className={style.form_delete_btn}>Delete your profile</button>
            </div>
        </>
    )
}