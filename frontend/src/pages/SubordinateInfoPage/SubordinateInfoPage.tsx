import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import $api from "src/axios";
import { Employee } from "src/store/types.common";
import { TitlePage } from "src/styles/TitlePage";
import { Button } from "src/styles/Buttons/Button";
import { styled } from "styled-components";
import { SubordinateInfo } from "src/components/SubordinateInfo";

export const SubordinateInfoPage: FC = () => {
    const [employee, seEmployee ] = useState<Employee | null>(null)
    const { id } = useParams();

    const navigate = useNavigate();
    const goBackPage = () => {
        navigate(-1)
    }

    const fetchEmployee = async () =>  {
        const res = await $api.get(`/employees/${id}`);
        seEmployee(res.data)
    }

    useEffect(() => {
        fetchEmployee()   
    }, [id])

    return (
        <>
        <TitlePage>User information</TitlePage>
        <Button onClick={goBackPage} children={'Go Back'} $primaryButton $padding="20px 30px" $margin="10px"/>
        <Wrapper>
            {employee && 
                    <SubordinateInfo subordinate={employee} />
            }
        </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
`