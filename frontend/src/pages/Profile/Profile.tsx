import { FC } from "react";
import style from './Profile.module.scss'
import { ProfileUserInfo } from "src/components/ProfileUserInfo/ProfileUserInfo";
import { ProfileUserForm } from "src/components/ProfileUserForm";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "src/store/auth/selectors";

export const Profile: FC = () => {
    const user = useSelector(selectCurrentUser)
    return (
        <>
            <div className={style.heading_container}>
                <h3>Hello {user.name}!</h3>
                <p>This is your profile page.</p>
            </div>
            <div className={style.profile_container}>
                <ProfileUserForm />
                <ProfileUserInfo />
            </div>
        </>
    )
}