import { FC } from "react";
import { useSelector } from "react-redux";
import { ActionsBox } from "src/components/ActionsBox";
import { selectAuthUser } from "src/store/auth/selectors";
import { Employees } from "src/store/types.common";
import { NavigateLink } from "src/styles/NavigateLink";
import { styled } from "styled-components";

interface CustomContentBoxProps {
    employees: Employees;
}

export const CustomEmployeesBox: FC<CustomContentBoxProps> = ({ employees, ...props }) => {
    const currentUser = useSelector(selectAuthUser);

    return (
        <>
            <div {...props}>
                {employees.map((unit) => (
                    <ul key={unit._id}>
                        <li>Avatar</li>
                        <li>{unit.firstName}</li>
                        <li>{unit.lastName}</li>
                        <li>{unit.position}</li>
                        <li>{unit.department}</li>
                        <li>{unit.room}</li>
                        <li>{unit.telephone}</li>
                        <li>
                            <NavigateLink to={`user/${unit.userId._id}`} $fontSize='15px' $textTransform='capitalize'>
                                {unit.userId.firstName} {unit.userId.lastName}
                            </NavigateLink>
                        </li>
                        <li>
                            {unit.userId._id === currentUser._id &&
                                <ActionsBox employee={unit} />
                            }
                        </li>
                    </ul>
                ))}
            </div>
        </>
    );
}