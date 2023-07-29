import { FC, ReactNode, useState } from "react";
import { Modal } from "src/components/Modal";
import { Employee } from "src/store/types.common";
import { ModalButton } from "src/styles/Buttons/ModalButton";
import { ModalPortal } from "src/components/ModalPortal";


interface ModalButtonBoxProps {
    employee?: Employee,
    buttonContent: ReactNode | string,
    modalContentType: 'add' | 'edit' | 'remove',
    $primaryButton?: boolean,
    $secondaryButton?: boolean,
    $dangerButton?: boolean,
    $marginButton?: string,
    $paddingButton?: string,
}

export const ModalButtonBox: FC<ModalButtonBoxProps> = ({
    employee,
    buttonContent,
    modalContentType,
    $primaryButton,
    $secondaryButton,
    $dangerButton,
    $marginButton,
    $paddingButton,
}) => {
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
            <ModalButton
                children={buttonContent}
                onClick={() => setOpenModal(true)}
                $primaryButton={$primaryButton}
                $secondaryButton={$secondaryButton}
                $dangerButton={$dangerButton}
                $margin={$marginButton}
                $padding={$paddingButton} />
        </>
    );
}