import { styled } from "styled-components";
import { baseTheme } from "../theme";

export const FormContainer = styled.div<{
    width?: string
}>`
    width: ${({ width }) => width || "500px"};
    padding: 40px 40px;
    box-sizing: border-box;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.9);

`