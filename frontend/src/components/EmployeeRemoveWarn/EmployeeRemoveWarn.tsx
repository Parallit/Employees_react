import { FC } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/store";
import { removeEmployee } from "src/store/employees/employeesSlice";
import { Employee } from "src/store/types.common";
import { PrimaryButton } from "src/styles/Buttons/PrimaryButton";
import { DangerButton } from "src/styles/Buttons/DangerButton";
import { RemoveWarnContainer } from "./StyledEmployeeRemoveWarn";

interface EmployeeRemoveWarnProps {
    onClose: () => void;
    employee: Employee
}

export const EmployeeRemoveWarn: FC<EmployeeRemoveWarnProps> = ({ onClose, employee }) => {
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
            <RemoveWarnContainer>
                <h3>Are you sure you want to do this action?</h3>
                <p>It will be impossible to recover the data</p>
                <div>
                    <DangerButton
                        $outline="none"
                        onClick={handleClickSuccess}
                    >
                        yes
                    </DangerButton>
                    <PrimaryButton
                        onClick={handleClickReject}
                    >
                        no
                    </PrimaryButton>
                </div>
            </RemoveWarnContainer>
        </>
    );
}
