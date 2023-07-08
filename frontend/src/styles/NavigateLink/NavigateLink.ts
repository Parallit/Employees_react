import { styled } from "styled-components";
import { CustomNavLink } from "src/components/Custom/CustomNavLink";

export const NavigateLink = styled(CustomNavLink)`
    color: ${({ $defaultColor, theme }) => $defaultColor || theme.colors.white};
    font-size: ${({ $fontSize, theme }) => $fontSize || theme.fontSize.medium};
    text-transform: ${({ $textTransform }) => $textTransform || "uppercase"};
    letter-spacing: 2px;

    &.active {
        color: ${({ $activeColor, theme }) => $activeColor || theme.colors.blue};
    }
`