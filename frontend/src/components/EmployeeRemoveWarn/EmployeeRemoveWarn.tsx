import { FC } from "react";
import style from "./EmployeeRemoveWarn.module.scss"
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/store";
import { removeEmployee } from "src/store/employees/employeesSlice";
import { Employee } from "src/store/types.common";

interface EmployeeRemoveWarnProps {
    onClose: () => void;
    employee: Employee
}

export const EmployeeRemoveWarn: FC<EmployeeRemoveWarnProps> = ({onClose, employee}) => {
    const dispatch = useDispatch<AppDispatch>();
    
    const handleClickSuccess = () => {
        dispatch(removeEmployee(employee));
        onClose();
    }
    const handleClickReject = () => {
        onClose();
    }
    return (
        <>
            <div className={style.container}>
                <h3 className={style.heading}>Are you sure you want to do this action?</h3>
                <p className={style.text}>It will be impossible to recover the data</p>
                <div className={style.btn_container}>
                    <button className={style.btn_success} onClick={handleClickSuccess}>yes</button>
                    <button className={style.btn_reject} onClick={handleClickReject}>no</button>
                </div>
            </div>
        </>
    );
}
