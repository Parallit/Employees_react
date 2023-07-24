import { FC } from "react";
import { ModalButtonBox } from "../ModalButtonBox";
import { Employee } from "src/store/types.common";
import { IconComponent } from "../Icon";
import { styled } from "styled-components";

interface ActionsBoxProps {
    employee: Employee
}

export const ActionsBox: FC<ActionsBoxProps> = ({ employee }) => {
    return (
        <>
            <Container>
                <ModalButtonBox modalContentType={'edit'} employee={employee} buttonContent={<IconComponent type={"edit"} />}/>
                <ModalButtonBox modalContentType={'remove'} employee={employee} buttonContent={<IconComponent type={"remove"} />}/>
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
