import { FC, ReactNode } from "react";

interface CustomTitleProps {
    children: ReactNode;
    $color?: string;
    $fontSize?: string;
    $textTransform?: string;
    $margin?: string;
    $textAlign?: string;
    $padding?: string;
}

export const CustomTitle: FC<CustomTitleProps> = ({
    children,
    $color,
    $fontSize,
    $textTransform,
    $margin,
    $textAlign,
    $padding,
    ...props
}) => {
    return (
        <h1
            {...props}
        >
            {children}
        </h1>
    );
};