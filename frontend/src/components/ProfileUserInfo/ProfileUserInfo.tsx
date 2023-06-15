import { FC } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "src/store/auth/selectors";
import style from './ProfileUserInfo.module.scss'

export const ProfileUserInfo: FC = () => {
    const user = useSelector(selectCurrentUser)
    return (
        <>
            <div className={style.container}>
                <img src="" alt="user-photo" className={style.user_photo} />
                <h2 className={style.title}>My account</h2>
                <div className={style.user_subordinates_box}>
                    <div className={style.user_subordinates_amount}>
                        {user.employees ? (user.employees.length + 1) : 0}
                    </div>
                    <h3 className={style.user_subordinates_title}>Subordinates</h3>
                </div>
                <div className={style.user_name}>{user.name}</div>
                <div className={style.user_info_box}>
                    <p>
                        {user.department ? user.department : 'fill in the field Departament'}
                    </p>
                    <p>
                        {user.address ? user.address : 'fill in the field Address'}
                    </p>
                    <p>
                        {user.telephone ? user.telephone : 'fill in the field Telephone'}
                    </p>
                </div>
                <div className={style.user_about_box}>
                    <h3>About me:</h3>
                    <p>
                        {user.about ? user.about : 'fill in the field About'}
                    </p>
                </div>
            </div>
        </>
    );
}
