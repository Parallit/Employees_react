import { styled } from "styled-components";

export const Input = styled.input`
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.9);
    color: #fff;
    outline: none;
    border: none;
    border-bottom: 1px solid #03e9f4;
    border-top: 1px solid #e55455;
    border-radius: 10px;
    height: 80%;
    text-align: center;

    &:focus~& label {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
    }
`