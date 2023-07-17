import { FC, ReactNode } from "react";
import { Employee, Employees, User, Users } from "src/store/types.common";

interface CustomContentBoxProps {
    people: Users | Employees;
    handleClickModal?: (children: ReactNode) => void;
    onClose?: () => void;
    actions?: ReactNode
}

export const CustomContentBox: FC<CustomContentBoxProps> = ({ people, handleClickModal, onClose, actions, ...props }) => {

    return (
        <>
            <div {...props}>
                {people.map((unit: User | Employee) => (
                    <ul key={unit._id}>
                        <li>{unit.firstName}</li>
                        <li>{unit.lastName}</li>
                        <li>{unit.position}</li>
                        <li>{unit.department}</li>
                        <li>{unit.room}</li>
                        <li>{unit.telephone}</li>
                        {/* chief или subordinates */}
                        <li>
                            {actions}
                        </li>
                    </ul>
                ))}
            </div>
        </>
    );
}