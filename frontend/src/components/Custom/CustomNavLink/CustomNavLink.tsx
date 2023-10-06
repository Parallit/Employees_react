import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavLinkComponentProps {
    children: ReactNode;
    onClick?: () => void;
    to: string;
    $defaultColor?: string;
    $activeColor?: string;
    $fontSize?: string;
    $textTransform?: string;
}

export const CustomNavLink: FC<NavLinkComponentProps> = ({
    children,
    to,
    onClick,
    $defaultColor,
    $activeColor,
    $fontSize,
    $textTransform,
    ...props
}) => {
    return (
            <NavLink
                to={to}
                onClick={onClick}
                {...props}
            >
                {children}
            </NavLink>
    );
};