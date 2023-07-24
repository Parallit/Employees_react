import { FC, ReactNode } from 'react';

interface CustomButtonModalProps {
    children: ReactNode | string;
    openModal: () => void;
    disabled?: boolean;
    $defaultColor?: string;
    $hoverColor?: string;
    $padding?: string;
    $margin?: string;
    $fontSize?: string;
    $bg?: string;
    $primaryButton?: boolean,
    $secondary?: boolean,
    $danger?: boolean,
    className?: string
};

export const CustomButtonModal: FC<CustomButtonModalProps> = ({
    children,
    openModal,
    disabled,
    $defaultColor,
    $hoverColor,
    $padding,
    $margin,
    $fontSize,
    $bg,
    $primaryButton,
    className,
}) => {

    return (
        <>
            <button onClick={openModal} className={className}>
                {children}
            </button>
        </>
    );
};
