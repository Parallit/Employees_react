import { InputError } from "src/components/InputError";
import { styled } from "styled-components";

export const BadRequestError = styled(InputError)`
    margin-top: 50px;
    padding: 0 10px;
    font-size: ${({ theme }) => theme.fontSize.medium};
    background: ${({ theme }) => theme.bg.linear};
    text-align: center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`