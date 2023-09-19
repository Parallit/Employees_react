import { styled } from "styled-components";

export const FormContainer = styled.div`
    width: 450px;
    padding: 40px;
    box-sizing: border-box;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.8);
`

export const FormTitle = styled.h2`
    font-size: 40px;
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
    position: relative;
    top: -60px;
    letter-spacing: 1px;

    &:before {
    position: absolute;
    content: "";
    left: 25%;
    bottom: -12px;
    border-radius: 4px;
    height: 3px;
    width: 50%;
    background: linear-gradient(166deg, rgb(249, 123, 30) 25%, rgb(205, 40, 149) 81%);
}
`