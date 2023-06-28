import { FC, useEffect } from "react";
import style from './Profile.module.scss'
import { ProfileUserInfo } from "src/components/ProfileUserInfo/ProfileUserInfo";
import { ProfileUserForm } from "src/components/ProfileUserForm";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "src/store/user/selectors";
import { AppDispatch } from "src/store";
import { fetchCurrentUser } from "src/store/user/userSlice";

export const Profile: FC = () => {
    const currentUser = useSelector(selectUser)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchCurrentUser())
    }, [])

    return (
        <>
            <div className={style.heading_container}>
                <h3>Hello {currentUser.name}!</h3>
                <p>This is your profile page.</p>
            </div>
            <div className={style.profile_container}>
                <ProfileUserForm user={currentUser}/>
                <ProfileUserInfo user={currentUser}/>
            </div>
        </>
    )
}