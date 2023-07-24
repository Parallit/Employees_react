import { styled } from "styled-components";
import { CustomNavLink } from "src/components/Custom/CustomNavLink";


export const NavigateLink = styled(CustomNavLink)`
    color: ${({ $defaultColor, theme }) => $defaultColor || theme.colors.white};
    font-size: ${({ $fontSize, theme }) => $fontSize || theme.fontSize.extraLarge};
    text-transform: ${({ $textTransform }) => $textTransform || "uppercase"};
    cursor: pointer;
    text-decoration: none;
    letter-spacing: 1px;
    transition: 1s ease-in-out;

    &.active {
        color: ${({ $activeColor, theme }) => $activeColor || theme.colors.neonBlue};
    }
`