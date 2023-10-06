import { InputError } from "src/components/InputError";
import { styled } from "styled-components";

export const BadRequestError = styled(InputError)`
    width: 100%;
    font-size: 20px;
    text-align: center;
    background: -webkit-linear-gradient(#f97b1e, #cd2895);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`