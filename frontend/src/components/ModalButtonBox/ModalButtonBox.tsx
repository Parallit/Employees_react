import { FC, ReactNode, useState } from "react";
import { Modal } from "src/components/Modal";
import { Employee } from "src/store/types.common";
import { ModalButton } from "src/styles/Buttons/ModalButton";
import { ModalPortal } from "src/components/ModalPortal";


interface ModalButtonBoxProps {
    modalContentType: 'add' | 'edit' | 'remove',
    buttonContent: ReactNode | string,
    employee?: Employee,
    marginButton?: string,
    paddingButton?: string,
    $primaryButton?: boolean
}

export const ModalButtonBox: FC<ModalButtonBoxProps> = ({ modalContentType, buttonContent, employee, marginButton, paddingButton, $primaryButton }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <>
            <ModalPortal>
                <Modal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    modalContentType={modalContentType}
                    employee={employee}
                />
            </ModalPortal>
            <div>
                <ModalButton $primaryButton $margin={marginButton} $padding={paddingButton} children={buttonContent} openModal={() => setOpenModal(true)} />
            </div>
        </>
    );
}