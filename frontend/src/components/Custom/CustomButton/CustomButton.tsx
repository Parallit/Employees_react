import { FC, ReactNode } from 'react';

interface CustomButtonProps {
    children: ReactNode | string;
    onClick?: () => void;
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
    $boxShadow?: string,
    $textTransform?: string;
    $outline?: string;
    $width?: string;
    $top?: string;
    $right?: string;
    $left?: string;
    $bottom?: string;
    className?: string
};

export const CustomButton: FC<CustomButtonProps> = ({
    children,
    onClick,
    disabled,
    $defaultColor,
    $hoverColor,
    $padding,
    $margin,
    $fontSize,
    $bg,
    $boxShadow,
    $primaryButton,
    $textTransform,
    $outline,
    $width,
    $top,
    $right,
    $left,
    $bottom,
    className,
}) => {
    return (
        <>
            <button onClick={onClick} className={className} disabled={disabled}>
                {children}
            </button>
        </>
    );
};
