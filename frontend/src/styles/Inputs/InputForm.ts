import { CustomInput } from "src/components/Custom/CustomInput";
import { styled } from "styled-components";

export const InputForm = styled(CustomInput) <{
    labelName?: string,
    $width?: string
}>` 
    position: relative;
    width: ${({ $width }) => $width || "100%"};

    & input {
        width: 100%;
        padding: 15px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        border-bottom: 30px;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
    }

    & label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: 0.5s;
    }

    & input:focus~label,
    input:valid~label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
}
`
