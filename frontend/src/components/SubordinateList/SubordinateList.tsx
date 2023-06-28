import { FC} from "react";
import style from './SubordinateList.module.scss'
import { Employee } from "src/store/types.common";

interface SubordinateListProps {
    employees: Employee[]
}

export const SubordinateList: FC<SubordinateListProps> = ({ employees }) => {
    return (
        <>
            <ul className={style.employee_box}>
                {employees.map((employee) => (
                    <li key={employee._id}>
                        {employee.firstName} {employee.lastName}
                    </li>
                ))}
            </ul>
        </>
    );
}