import { styled } from "styled-components";

export const TitleForm = styled.h2`
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