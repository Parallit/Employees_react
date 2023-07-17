import { CustomTitle } from "src/components/Custom/CustomTitle";
import { styled } from "styled-components";

export const TitlePage = styled(CustomTitle)`
    color: ${({ $color, theme }) => $color || theme.colors.white};
    font-size: ${({ $fontSize, theme }) => $fontSize || theme.fontSize.extraLarge};
    text-transform: ${({ $textTransform }) => $textTransform || "uppercase"};
    margin: ${({ $margin }) => $margin || "20px 0 20px"};
    padding: ${({ $margin }) => $margin || "0 20px 0 20px"};
    text-align: center;
    letter-spacing: 2px;
`