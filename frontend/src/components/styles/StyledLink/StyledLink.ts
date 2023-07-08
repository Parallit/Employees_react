import { styled } from "styled-components";
import { CustomNavLink } from "src/components/Custom/CustomNavLink";

export const StyledLink = styled(CustomNavLink)`
    color: ${({ $defaultColor }) => $defaultColor || "#fff"};
    font-size: ${({ $fontSize }) => $fontSize || "18px"};
    text-transform: ${({ $textTransform }) => $textTransform || "uppercase"};
    letter-spacing: 2px;

    &.active {
        color: ${({ $activeColor }) => $activeColor || "#03e9f4"};
    }
`