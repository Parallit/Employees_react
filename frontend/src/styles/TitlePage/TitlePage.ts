import { CustomTitle } from "src/components/Custom/CustomTitle";
import { styled } from "styled-components";

export const TitlePage = styled(CustomTitle)`
    color: ${({ $color, theme }) => $color || theme.colors.white};
    margin: ${({ $margin }) => $margin || "100px 0"};
    padding: ${({ $margin }) => $margin || "0 10px"};
    position: relative;
    text-align: center;
    letter-spacing: 1px;
    text-align: left;

    & h1 {
        font-size: ${({ $fontSize }) => $fontSize || '40px'};
        text-transform: ${({ $textTransform }) => $textTransform || "uppercase"};
    }

    &::before {
        position: absolute;
        content: '';
        left: -10px;
        width: 5px;
        height: 100%;
        border-radius: 4px;
        background: linear-gradient(166deg, rgba(249,123,30,1) 25%, rgba(205,40,149,1) 81%);
    }
`