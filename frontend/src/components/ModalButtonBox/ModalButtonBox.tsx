import { FC, ReactNode, useState } from "react";
import { Modal } from "../Modal/Modal";
import { Employee } from "src/store/types.common";
import { ModalButton } from "src/styles/Buttons/ModalButton";

interface ModalButtonBoxProps {
    modalContentType: string;
    buttonContent: ReactNode | string;
    employee?: Employee
}

export const ModalButtonBox: FC<ModalButtonBoxProps> = ({ modalContentType, buttonContent, employee }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                modalContentType={modalContentType}
                employee={employee}           
                />
            <div>
                <ModalButton children={buttonContent} openModal={() => setOpenModal(true)} />
            </div>
        </>
    );
}