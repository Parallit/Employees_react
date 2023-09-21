import { FC } from "react";
import { Employees } from "src/store/types.common";
import { AvatarIcon } from "../AvatarIcon";
import { styled } from "styled-components";

interface AvatarLinksBoxProps {
    employees: Employees
}

export const AvatarLinksBox: FC<AvatarLinksBoxProps> = ({ employees }) => {
    return (
        <>
            {/* <AvatarList>
                {employees.map((employee) => (
                    <AvatarItem key={employee._id}>
                        <AvatarIcon name={employee.avatar} width="45px" height="45px" />
                    </AvatarItem>
                ))}
            </AvatarList> */}
        </>
    );
}


const AvatarList = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    overflow: hidden;
    position: relative;

    &::after {
        content: '';
        background: linear-gradient(to right, transparent, black);
        height: 100%;
        position: absolute;
        right: 10px;
        width: 100%;
    }
`

const AvatarItem = styled.div`
    position: relative;
    border: 2px solid #fff;
    background-color: #fff;
    border-radius: 50%;

    &:not(:last-child) {
        margin-left: -35px;
    }
`