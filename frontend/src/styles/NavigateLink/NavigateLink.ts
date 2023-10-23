import { styled } from "styled-components";
import { CustomNavLink } from "src/components/Custom/CustomNavLink";


export const NavigateLink = styled(CustomNavLink)`
    color: ${({ $defaultColor, theme }) => $defaultColor || theme.colors.white};
    font-size: ${({ $fontSize, theme }) => $fontSize || theme.fontSize.extraLarge};
    text-align: ${({ $textAlign }) => $textAlign || "inherit"};
    padding: ${({ $padding }) => $padding || "0"};
    margin: ${({ $margin }) => $margin || "0"};
    text-transform: ${({ $textTransform }) => $textTransform || "uppercase"};
    cursor: pointer;
    text-decoration: ${({ $decoration }) => $decoration || "none"};;
    letter-spacing: 1px;
    text-wrap: nowrap;
    transition: all 0.5s ease-in-out;

    &.active {
        color: ${({ $activeColor, theme }) => $activeColor || theme.colors.neonBlue};
    }

    &:hover {
        color: ${({ $defaultColor, theme }) => $defaultColor || theme.colors.neonBlue};
    }

    &:focus {
        color: ${({ $defaultColor, theme }) => $defaultColor || theme.colors.neonBlue};
    }
`