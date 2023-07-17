import { FC, ReactNode } from "react";

interface ActionButtonProps {
    children: ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    disabled?: boolean;
    icon?: string;
    alt?: string
}

export const ActionButton: FC<ActionButtonProps> = ({
    children,
    type,
    onClick,
    disabled,
    icon,
    alt
}) => {
    return <>
        <button type={type} onClick={onClick} disabled={disabled}>
            {children}
            <img src={icon} alt={alt} />
        </button>
    </>;
};
