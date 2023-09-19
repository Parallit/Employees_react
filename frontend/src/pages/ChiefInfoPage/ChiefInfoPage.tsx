import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import $api from "src/axios";
import { ProfileUserInfo } from "src/components/ProfileUserInfo/ProfileUserInfo";
import { User } from "src/store/types.common";
import { TitlePage } from "src/styles/TitlePage";
import { Button } from "src/styles/Buttons/Button";
import { styled } from "styled-components";

export const ChiefInfoPage: FC = () => {
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
        <TitlePage>User information</TitlePage>
        <Button onClick={goBackPage} children={'Go Back'} $primaryButton $padding="20px 30px" $margin="10px"/>
        <Wrapper>
            <ProfileUserInfo user={user}/> 
        </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
`