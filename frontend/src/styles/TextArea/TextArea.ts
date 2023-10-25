import { CustomArea } from "src/components/Custom/CustomArea";
import { styled } from "styled-components";

export const TextAreaForm = styled(CustomArea)` 
    position: relative;
    margin-bottom: 40px;
    display: flex;
    width: 100%;

    & textarea {
        width: 100%;
        padding: 20px 0;
        font-size: 16px;
        color: #fff;
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

    & textarea:focus {
        outline: 0;      
        border-bottom: 1px solid #03e9f4;
    }

    & textarea:focus~label,
    textarea:valid~label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
}
`
