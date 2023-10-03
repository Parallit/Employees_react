import { InputError } from "src/components/InputError";
import { styled } from "styled-components";

export const InputValidationError = styled(InputError)`
    width: 100%;
    font-size: 20px;
    position: absolute;
    left: 0;
    bottom: -50px;
    text-align: end;
    background: -webkit-linear-gradient(#f97b1e, #cd2895);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`