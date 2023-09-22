import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import $api from "src/axios";
import { User } from "src/store/types.common";
import { TitlePage } from "src/styles/TitlePage";
import { Button } from "src/styles/Buttons/Button";
import { ChiefInfo } from "src/components/ChiefInfo";
import { SubordinatesLinkBox } from "src/components/SubordinatesLinkBox";
import { ContainerInfo } from "./StyledChiefInfoPage";

export const ChiefInfoPage: FC = () => {
    const [user, setUser ] = useState<User | null>(null)
    const { id } = useParams();

    const navigate = useNavigate();
    const goBackPage = () => {
        navigate(-1)
    }
    const fetchUser = async () =>  {
        const res = await $api.get(`/employees/user/${id}`)
        setUser(res.data)
    }

    useEffect(() => {
        fetchUser()   
    }, [id])

    return (
        <>
        <TitlePage>Chief information</TitlePage>
        <Button onClick={goBackPage} children={'Go Back'} $primaryButton $padding="20px 30px" $margin="10px 10px"/>
            {
                user && 
                <ContainerInfo>
                    <ChiefInfo user={user}/>
                    <SubordinatesLinkBox subordinates={user.employeesId} $width="40%" />
                </ContainerInfo>
            }
        </>
    );
}