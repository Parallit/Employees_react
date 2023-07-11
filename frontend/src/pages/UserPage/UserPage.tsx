import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import $api from "src/axios";
import style from './UserPage.module.scss';
import { ProfileUserInfo } from "src/components/ProfileUserInfo/ProfileUserInfo";
import { User } from "src/store/types.common";

export const UserPage: FC = () => {
    const [user, setUser ] = useState<User | null>(null)
    const { id } = useParams();

    const navigate = useNavigate();
    const goBackPage = () => {
        navigate(-1)
    }
    const fetchUser = async () =>  {
        const res = await $api.get(`/employees/user/${id}`);
        setUser(res.data)
    }

    useEffect(() => {
        fetchUser()   
    }, [id])

    return (
        <>
        <h1 className={style.heading}>User information</h1>
        <button onClick={goBackPage}>Go Back</button>
        <div className={style.box_container}>
            <ProfileUserInfo user={user}/> 
        </div>
        </>
    );
}