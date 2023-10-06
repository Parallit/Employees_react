import { styled } from "styled-components";

export const ContainerLink = styled.li`
    list-style-type: none;
    background: none;
    border: none;
    position: relative;

    & a::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: -10px;
        left: 0;
        border-radius: 4px;
        background: rgb(249,123,30);
        background: linear-gradient(166deg, rgba(249,123,30,1) 25%, rgba(205,40,149,1) 81%);
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
    }

    & a:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }
`